// 計算エンジン - 技能効果・戦闘パラメータの計算ロジック
// 依存: EMBEDDED_GENERALS_DATA (グローバル), SKILL_DB (グローバル)

// SKILL_DB効果名 → 戦闘パラメータキーのマッピング
// type2でフィルタし、基礎パラメータ/即時効果/回避のみ対象
const COMBAT_PARAM_MAP = {
    '攻撃速度': { key: 'attackSpeed',   type2: 'パラメータ' },
    '会心発生': { key: 'critical',      type2: 'パラメータ' },
    '戦法速度': { key: 'tacticSpeed',   type2: 'パラメータ' },
    '戦法短縮': { key: 'initialGauge',  type2: '即時効果' },
    '即壊滅':   { key: 'lethalResist',  type2: '回避' },
};

/**
 * 技能レベルを集計するヘルパー
 * @param {Object} skill - 技能データ（武将のskillsオブジェクト内の1スロット）
 * @param {number} starRank - 武将の星ランク
 * @param {Object} skillLevels - レベル集計オブジェクト（破壊的更新）
 */
function collectSkillLevel(skill, starRank, skillLevels) {
    const skillName = skill.name;
    const skillType = skill.type;

    let skillLevel = 1;

    if (skillType === "fixed") {
        skillLevel = 1;
    } else if (skillType === "levelup") {
        const levelupRank = skill.levelup_rank || 999;
        skillLevel = starRank >= levelupRank ? 2 : 1;
    } else if (skillType === "unlock") {
        const unlockRank = skill.unlock_rank || 999;
        if (starRank < unlockRank) {
            return;
        }
        skillLevel = 1;
    } else if (skillType === "lr_inherit") {
        skillLevel = 1;
    }

    if (!skillLevels[skillName]) {
        skillLevels[skillName] = 0;
    }
    skillLevels[skillName] += skillLevel;
}

/**
 * 部隊の全武将・侍従の技能レベルを集計する共通ヘルパー
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数
 * @returns {Object} skillName → totalLevel のマップ
 */
function collectFormationSkillLevels(formation, getStarRankFn) {
    const skillLevels = {};

    Object.entries(formation.slots).forEach(([slotName, generalData]) => {
        if (!generalData) return;

        const generalId = typeof generalData === 'object' ? generalData.id : generalData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);

        if (general?.skills) {
            const starRank = getStarRankFn(general);
            Object.entries(general.skills).forEach(([slot, skill]) => {
                collectSkillLevel(skill, starRank, skillLevels);
            });
        }

        // 侍従武将の技能も集計
        const attendantData = formation.attendants?.[slotName];
        if (attendantData) {
            const attendantId = typeof attendantData === 'object' ? attendantData.id : attendantData;
            const attendant = EMBEDDED_GENERALS_DATA.find(g => g.id === attendantId);

            if (attendant?.skills) {
                const attStarRank = getStarRankFn(attendant);
                Object.entries(attendant.skills).forEach(([slot, skill]) => {
                    collectSkillLevel(skill, attStarRank, skillLevels);
                });
            }
        }
    });

    return skillLevels;
}

// レベル→ローマ数字の変換マップ
const LEVEL_KEY_MAP = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };

/**
 * 部隊の技能効果を計算する（攻撃速度・会心発生・戦法速度）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} パラメータ名→効果値のマップ（decimal値: 0.25 = 25%）
 */
function calculateSkillEffects(formation, getStarRankFn) {
    if (!formation) return null;

    const targetParams = ['攻撃速度', '会心発生', '戦法速度'];
    const skillLevels = collectFormationSkillLevels(formation, getStarRankFn);

    // 結果初期化
    const results = {};
    targetParams.forEach(param => results[param] = 0);

    // 技能レベルから効果値を計算
    for (const [skillName, totalLevel] of Object.entries(skillLevels)) {
        const skillData = SKILL_DB?.[skillName];
        if (!skillData) continue;

        const effectiveLevel = Math.min(totalLevel, 5);
        const levelKey = LEVEL_KEY_MAP[effectiveLevel];

        for (const eff of skillData.effects) {
            // 対象パラメータのみ
            if (!targetParams.includes(eff.effect)) continue;
            // 基礎・パラメータ型のみ（有利変化等の一時バフは除外）
            if (eff.type2 !== 'パラメータ' && eff.type2 !== '基礎') continue;

            if (eff.levels && eff.levels[levelKey] != null) {
                const val = eff.levels[levelKey];
                if (typeof val === 'number') {
                    results[eff.effect] += val;
                }
            }
        }
    }

    return results;
}

/**
 * 部隊の戦闘パラメータを計算する（6つのパラメータ）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} 戦闘パラメータ（percentage値: 25 = 25%）
 */
function calculateCombatParameters(formation, getStarRankFn) {
    if (!formation) return null;

    const result = {
        initialGauge: 0, tacticSpeed: 0, lethalResist: false,
        tacticReduce: 0, attackSpeed: 0, critical: 0
    };

    // スロット情報付きで技能レベルを集計
    const skillLevelsWithSlot = {};

    Object.entries(formation.slots).forEach(([slotName, generalData]) => {
        if (!generalData) return;
        const generalId = typeof generalData === 'object' ? generalData.id : generalData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);

        if (general?.skills) {
            const starRank = getStarRankFn(general);
            Object.entries(general.skills).forEach(([slot, skill]) => {
                const skillName = skill.name;
                if (!SKILL_DB?.[skillName]) return;

                let skillLevel = 1;
                if (skill.type === "levelup") {
                    skillLevel = starRank >= (skill.levelup_rank || 999) ? 2 : 1;
                } else if (skill.type === "unlock") {
                    if (starRank < (skill.unlock_rank || 999)) return;
                }

                if (!skillLevelsWithSlot[skillName]) {
                    skillLevelsWithSlot[skillName] = { totalLevel: 0, slot: slotName };
                }
                skillLevelsWithSlot[skillName].totalLevel += skillLevel;
            });
        }

        // 侍従も同様に処理
        const attendantData = formation.attendants?.[slotName];
        if (attendantData) {
            const attendantId = typeof attendantData === 'object' ? attendantData.id : attendantData;
            const attendant = EMBEDDED_GENERALS_DATA.find(g => g.id === attendantId);

            if (attendant?.skills) {
                const starRank = getStarRankFn(attendant);
                Object.entries(attendant.skills).forEach(([slot, skill]) => {
                    const skillName = skill.name;
                    if (!SKILL_DB?.[skillName]) return;

                    let skillLevel = 1;
                    if (skill.type === "levelup") {
                        skillLevel = starRank >= (skill.levelup_rank || 999) ? 2 : 1;
                    } else if (skill.type === "unlock") {
                        if (starRank < (skill.unlock_rank || 999)) return;
                    }

                    if (!skillLevelsWithSlot[skillName]) {
                        skillLevelsWithSlot[skillName] = { totalLevel: 0, slot: slotName };
                    }
                    skillLevelsWithSlot[skillName].totalLevel += skillLevel;
                });
            }
        }
    });

    // 効果値を計算
    for (const [skillName, data] of Object.entries(skillLevelsWithSlot)) {
        const skillData = SKILL_DB[skillName];
        if (!skillData) continue;

        const effectiveLevel = Math.min(data.totalLevel, 5);
        const levelKey = LEVEL_KEY_MAP[effectiveLevel];

        for (const eff of skillData.effects) {
            // COMBAT_PARAM_MAPに定義された効果のみ処理
            const mapping = COMBAT_PARAM_MAP[eff.effect];
            if (!mapping) continue;

            // type2の一致を確認（攻撃速度のパラメータ vs 有利変化等を区別）
            if (eff.type2 !== mapping.type2) continue;

            // 発動条件チェック（効果単位）
            const condition = eff.condition;
            if (condition && condition !== '常に') {
                if (condition.includes('主将') && data.slot !== '主将') continue;
            }

            // 値を加算
            if (mapping.key === 'lethalResist') {
                result.lethalResist = true;
            } else if (eff.levels && eff.levels[levelKey] != null) {
                const val = eff.levels[levelKey];
                if (typeof val === 'number') {
                    // SKILL_DBはdecimal (0.25)、旧CPはpercentage (25) → ×100で互換維持
                    result[mapping.key] += val * 100;
                }
            }
        }
    }

    return result;
}
