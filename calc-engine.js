// 計算エンジン - 技能効果・戦闘パラメータの計算ロジック
// 依存: EMBEDDED_GENERALS_DATA (グローバル), SKILL_DB (グローバル), checkSkillCondition (skill-conditions.js)

// SKILL_DB効果名 → 戦闘パラメータキーのマッピング
// type2とtimingでフィルタし、該当する効果のみ対象
var COMBAT_PARAM_MAP = {
    '攻撃速度': { key: 'attackSpeed',  type2: 'パラメータ', timing: null },
    '会心発生': { key: 'critical',     type2: 'パラメータ', timing: null },
    '戦法速度': { key: 'tacticSpeed',  type2: 'パラメータ', timing: null },
    '戦法短縮': { key: 'initialGauge', type2: '即時効果',   timing: '出陣時' },
    '即壊滅':   { key: 'lethalResist', type2: '回避',       timing: null },
};

// 出陣ゲージの上限（percentage単位）
var INITIAL_GAUGE_CAP = 50;

// レベル→ローマ数字の変換マップ
var LEVEL_KEY_MAP = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };

/**
 * 武将のスキルレベルを星ランクから決定する
 */
function getSkillLevel(skill, starRank) {
    const skillType = skill.type;
    if (skillType === "fixed" || skillType === "lr_inherit") return 1;
    if (skillType === "levelup") return starRank >= (skill.levelup_rank || 999) ? 2 : 1;
    if (skillType === "unlock") return starRank >= (skill.unlock_rank || 999) ? 1 : null;
    return 1;
}

/**
 * 部隊のコンテキスト情報を構築する（発動条件チェック用）
 */
function buildFormationContext(formation) {
    const mainData = formation.slots?.['主将'];
    const mainId = mainData ? (typeof mainData === 'object' ? mainData.id : mainData) : null;
    const mainGeneral = mainId ? EMBEDDED_GENERALS_DATA.find(g => g.id === mainId) : null;

    const getAffinity = (slotName) => {
        const slotData = formation.slots?.[slotName];
        if (!slotData) return null;
        const gid = typeof slotData === 'object' ? slotData.id : slotData;
        const g = EMBEDDED_GENERALS_DATA.find(gen => gen.id === gid);
        return g?.affinity ?? null;
    };

    return {
        mainGeneral,
        mainAffinity: mainGeneral?.affinity ?? null,
        mainName: mainGeneral?.name ?? null,
        mainGender: mainGeneral?.gender ?? null,
        unitType: mainGeneral?.unit_type ?? null,
        subAffinities: [getAffinity('副将1'), getAffinity('副将2')],
        advisorAffinities: [getAffinity('補佐1'), getAffinity('補佐2')],
    };
}

/**
 * 特定スロットの武将に対する発動条件チェック用コンテキストを生成
 */
function buildSlotContext(slotName, general, fmtCtx) {
    return {
        position: slotName,
        myAffinity: general.affinity ?? null,
        mainAffinity: fmtCtx.mainAffinity,
        myName: general.name,
        mainName: fmtCtx.mainName,
        mainGender: fmtCtx.mainGender,
        unitType: fmtCtx.unitType,
        subAffinities: fmtCtx.subAffinities,
        advisorAffinities: fmtCtx.advisorAffinities,
    };
}

/**
 * 発動条件をチェックする
 */
function isConditionActive(condition, slotName, general, fmtCtx) {
    if (!condition || condition === '常に') return true;

    if (typeof checkSkillCondition === 'function') {
        const ctx = buildSlotContext(slotName, general, fmtCtx);
        return checkSkillCondition(condition, ctx).active;
    }

    // フォールバック: 簡易チェック
    if (condition.includes('主将') && !condition.includes('副将') && slotName !== '主将') return false;
    return true;
}

/**
 * 部隊の全武将・侍従から技能エントリを収集する
 * @returns {Array} [{skillName, level, slotName, general}, ...]
 */
function collectSkillEntries(formation, getStarRankFn) {
    const entries = [];

    Object.entries(formation.slots).forEach(([slotName, generalData]) => {
        if (!generalData) return;

        const generalId = typeof generalData === 'object' ? generalData.id : generalData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);

        if (general?.skills) {
            const starRank = getStarRankFn(general);
            Object.entries(general.skills).forEach(([slot, skill]) => {
                const level = getSkillLevel(skill, starRank);
                if (level != null) {
                    entries.push({ skillName: skill.name, level, slotName, general });
                }
            });
        }

        // 侍従武将の技能
        const attendantData = formation.attendants?.[slotName];
        if (attendantData) {
            const attendantId = typeof attendantData === 'object' ? attendantData.id : attendantData;
            const attendant = EMBEDDED_GENERALS_DATA.find(g => g.id === attendantId);

            if (attendant?.skills) {
                const attStarRank = getStarRankFn(attendant);
                Object.entries(attendant.skills).forEach(([slot, skill]) => {
                    const level = getSkillLevel(skill, attStarRank);
                    if (level != null) {
                        entries.push({ skillName: skill.name, level, slotName, general: attendant });
                    }
                });
            }
        }
    });

    return entries;
}

/**
 * 付与効果を解決して追加の技能エントリを生成する
 * @param {Array} entries - collectSkillEntriesの結果
 * @param {Object} fmtCtx - buildFormationContextの結果
 * @returns {Array} 付与で追加される技能エントリ
 */
function resolveGrantedSkills(entries, fmtCtx) {
    const granted = [];

    for (const entry of entries) {
        const skillData = SKILL_DB?.[entry.skillName];
        if (!skillData) continue;

        const effectiveLevel = Math.min(entry.level, 5);
        const levelKey = LEVEL_KEY_MAP[effectiveLevel];

        for (const eff of skillData.effects) {
            if (eff.type2 !== '付与') continue;

            // 付与の発動条件チェック
            if (!isConditionActive(eff.condition, entry.slotName, entry.general, fmtCtx)) continue;

            // 付与先の技能名
            const grantedSkillName = eff.effect;
            if (!SKILL_DB?.[grantedSkillName]) continue;

            // 付与先の技能レベルを決定
            let grantedLevel = 1;
            if (eff.levels && eff.levels[levelKey] != null) {
                const val = eff.levels[levelKey];
                if (typeof val === 'number' && val >= 1) {
                    grantedLevel = val;
                }
            } else {
                // levelsがnullの場合、元技能のレベルを引き継ぐ
                grantedLevel = effectiveLevel;
            }

            granted.push({
                skillName: grantedSkillName,
                level: grantedLevel,
                slotName: entry.slotName,
                general: entry.general,
            });
        }
    }

    return granted;
}

/**
 * 技能エントリのグループから、条件を評価して有効レベルを合算する
 * @param {Array} entries - 同一技能名のエントリ配列
 * @param {Object} fmtCtx - buildFormationContextの結果
 * @param {string} condition - 効果の発動条件
 * @returns {number} 合算レベル
 */
function sumValidLevels(entries, fmtCtx, condition) {
    let total = 0;
    for (const entry of entries) {
        if (isConditionActive(condition, entry.slotName, entry.general, fmtCtx)) {
            total += entry.level;
        }
    }
    return total;
}

/**
 * 部隊の技能効果を計算する（攻撃速度・会心発生・戦法速度）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} パラメータ名→効果値のマップ（decimal値: 0.25 = 25%）
 */
function calculateSkillEffects(formation, getStarRankFn) {
    if (!formation) return null;

    const targetParams = ['攻撃速度', '会心発生', '戦法速度'];
    const results = {};
    targetParams.forEach(param => results[param] = 0);

    const entries = collectSkillEntries(formation, getStarRankFn);
    const fmtCtx = buildFormationContext(formation);

    // 付与効果を解決して追加
    const grantedEntries = resolveGrantedSkills(entries, fmtCtx);
    const allEntries = entries.concat(grantedEntries);

    // 技能名でグループ化
    const bySkillName = {};
    for (const entry of allEntries) {
        if (!bySkillName[entry.skillName]) bySkillName[entry.skillName] = [];
        bySkillName[entry.skillName].push(entry);
    }

    // 各技能の効果を評価
    for (const [skillName, skillEntries] of Object.entries(bySkillName)) {
        const skillData = SKILL_DB?.[skillName];
        if (!skillData) continue;

        for (const eff of skillData.effects) {
            if (!targetParams.includes(eff.effect)) continue;
            if (eff.type2 !== 'パラメータ' && eff.type2 !== '基礎') continue;

            const validLevel = sumValidLevels(skillEntries, fmtCtx, eff.condition);
            if (validLevel <= 0) continue;

            const effectiveLevel = Math.min(validLevel, 5);
            const levelKey = LEVEL_KEY_MAP[effectiveLevel];

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

    const entries = collectSkillEntries(formation, getStarRankFn);
    const fmtCtx = buildFormationContext(formation);

    // 付与効果を解決して追加
    const grantedEntries = resolveGrantedSkills(entries, fmtCtx);
    const allEntries = entries.concat(grantedEntries);

    // 技能名でグループ化
    const bySkillName = {};
    for (const entry of allEntries) {
        if (!bySkillName[entry.skillName]) bySkillName[entry.skillName] = [];
        bySkillName[entry.skillName].push(entry);
    }

    // 各技能の効果を評価
    for (const [skillName, skillEntries] of Object.entries(bySkillName)) {
        const skillData = SKILL_DB?.[skillName];
        if (!skillData) continue;

        for (const eff of skillData.effects) {
            const mapping = COMBAT_PARAM_MAP[eff.effect];
            if (!mapping) continue;

            // type2の一致
            if (eff.type2 !== mapping.type2) continue;

            // timingの一致（出陣ゲージは出陣時のみ）
            if (mapping.timing && eff.timing !== mapping.timing) continue;

            // 発動条件を評価して有効レベルを合算
            const validLevel = sumValidLevels(skillEntries, fmtCtx, eff.condition);
            if (validLevel <= 0 && mapping.key !== 'lethalResist') continue;

            if (mapping.key === 'lethalResist') {
                if (validLevel > 0) result.lethalResist = true;
            } else {
                const effectiveLevel = Math.min(validLevel, 5);
                const levelKey = LEVEL_KEY_MAP[effectiveLevel];

                if (eff.levels && eff.levels[levelKey] != null) {
                    const val = eff.levels[levelKey];
                    if (typeof val === 'number') {
                        // SKILL_DBはdecimal (0.25)、表示はpercentage (25) → ×100で互換維持
                        result[mapping.key] += val * 100;
                    }
                }
            }
        }
    }

    // 出陣ゲージの上限適用
    result.initialGauge = Math.min(result.initialGauge, INITIAL_GAUGE_CAP);

    return result;
}
