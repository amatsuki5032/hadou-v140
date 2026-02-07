// 計算エンジン - 技能効果・戦闘パラメータの計算ロジック
// 依存: EMBEDDED_GENERALS_DATA (グローバル), SKILL_EFFECTS_DATA (グローバル), COMBAT_PARAMETERS (グローバル)

/**
 * 技能レベルを集計するヘルパー
 * @param {Object} skill - 技能データ
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
 * 技能レベルから効果値を計算するヘルパー
 * @param {string} skillName - 技能名
 * @param {number} totalLevel - 合計レベル
 * @param {Object} results - 結果オブジェクト（破壊的更新）
 * @param {string[]} targetParams - 対象パラメータ名の配列
 */
function calculateSkillEffect(skillName, totalLevel, results, targetParams) {
    if (!SKILL_EFFECTS_DATA[skillName]) {
        return;
    }

    const skillEffect = SKILL_EFFECTS_DATA[skillName];
    const paramType = skillEffect.parameter;

    if (!targetParams.includes(paramType)) {
        return;
    }

    const effectiveLevel = Math.min(totalLevel, 5);
    const levelMap = {1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ'};
    const levelKey = levelMap[effectiveLevel];
    const effectValue = skillEffect.effects[levelKey];

    if (effectValue) {
        results[paramType] += effectValue;
    }
}

/**
 * 部隊の技能効果を計算する（攻撃速度・会心発生・戦法速度）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} パラメータ名→効果値のマップ
 */
function calculateSkillEffects(formation, getStarRankFn) {
    if (!formation) {
        return null;
    }

    const targetParams = ['攻撃速度', '会心発生', '戦法速度'];
    const skillLevels = {};

    // 配置された武将の技能を集計
    Object.entries(formation.slots).forEach(([slotName, generalData]) => {
        if (!generalData) return;

        const generalId = typeof generalData === 'object' ? generalData.id : generalData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);

        if (general && general.skills) {
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

            if (attendant && attendant.skills) {
                const attendantStarRank = getStarRankFn(attendant);
                Object.entries(attendant.skills).forEach(([slot, skill]) => {
                    collectSkillLevel(skill, attendantStarRank, skillLevels);
                });
            }
        }
    });

    // 技能レベルから効果値を計算
    const results = {};
    targetParams.forEach(param => results[param] = 0);

    for (const [skillName, totalLevel] of Object.entries(skillLevels)) {
        calculateSkillEffect(skillName, totalLevel, results, targetParams);
    }

    return results;
}

/**
 * 部隊の戦闘パラメータを計算する（6つのパラメータ）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} 戦闘パラメータ
 */
function calculateCombatParameters(formation, getStarRankFn) {
    if (!formation) return null;

    const result = {
        initialGauge: 0, tacticSpeed: 0, lethalResist: false,
        tacticReduce: 0, attackSpeed: 0, critical: 0
    };

    const skillLevels = {};

    // 武将の技能を集計
    Object.entries(formation.slots).forEach(([slotName, generalData]) => {
        if (!generalData) return;
        const generalId = typeof generalData === 'object' ? generalData.id : generalData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);

        if (general?.skills) {
            const starRank = getStarRankFn(general);
            Object.entries(general.skills).forEach(([slot, skill]) => {
                const skillName = skill.name;
                if (!COMBAT_PARAMETERS[skillName]) return;

                let skillLevel = 1;
                if (skill.type === "levelup") {
                    skillLevel = starRank >= (skill.levelup_rank || 999) ? 2 : 1;
                } else if (skill.type === "unlock") {
                    if (starRank < (skill.unlock_rank || 999)) return;
                }

                if (!skillLevels[skillName]) {
                    skillLevels[skillName] = { totalLevel: 0, slot: slotName };
                }
                skillLevels[skillName].totalLevel += skillLevel;
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
                    if (!COMBAT_PARAMETERS[skillName]) return;

                    let skillLevel = 1;
                    if (skill.type === "levelup") {
                        skillLevel = starRank >= (skill.levelup_rank || 999) ? 2 : 1;
                    } else if (skill.type === "unlock") {
                        if (starRank < (skill.unlock_rank || 999)) return;
                    }

                    if (!skillLevels[skillName]) {
                        skillLevels[skillName] = { totalLevel: 0, slot: slotName };
                    }
                    skillLevels[skillName].totalLevel += skillLevel;
                });
            }
        }
    });

    // 効果値を計算
    const levelMap = {1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ'};
    for (const [skillName, data] of Object.entries(skillLevels)) {
        const skillData = COMBAT_PARAMETERS[skillName];
        if (!skillData?.effects) continue;

        const condition = skillData.condition;
        if (condition && condition !== "常に") {
            if (condition.includes("主将") && data.slot !== "主将") continue;
        }

        const effectiveLevel = Math.min(data.totalLevel, 5);
        const levelKey = levelMap[effectiveLevel];

        Object.entries(skillData.effects).forEach(([paramKey, levels]) => {
            if (paramKey === 'lethalResist') {
                result.lethalResist = true;
            } else if (levels[levelKey]) {
                result[paramKey] += levels[levelKey];
            }
        });
    }

    return result;
}
