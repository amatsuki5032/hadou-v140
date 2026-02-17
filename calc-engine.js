// 計算エンジン - 技能効果・戦闘パラメータの計算ロジック
// 依存: EMBEDDED_GENERALS_DATA (グローバル), SKILL_DB (グローバル), checkSkillCondition (skill-conditions.js)
// 依存(名宝): EMBEDDED_TREASURES_DATA (グローバル), TREASURE_FORGE (グローバル), getTreasureSkillLevels (data-treasure-forge.js)

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
    const mainGeneral = mainId ? getGeneralById(mainId) : null;

    const getAffinity = (slotName) => {
        const slotData = formation.slots?.[slotName];
        if (!slotData) return null;
        const gid = typeof slotData === 'object' ? slotData.id : slotData;
        const g = getGeneralById(gid);
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
        const general = getGeneralById(generalId);

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
            const attendant = getGeneralById(attendantId);

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

            // 陣形付与はパラメータ計算対象外（陣形スキルとして機能するのみ）
            if (eff.type1 === '陣形') continue;

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
 * 練達効果を適用する（名宝技能 → 武将技能のLvアップ）
 * type2='練達' の効果を持つエントリを探し、対象技能のLvを加算する
 * @param {Array} generalEntries - 武将技能エントリ（level が直接変更される）
 * @param {Array} treasureEntries - 名宝技能エントリ
 * @param {Object} fmtCtx - buildFormationContextの結果
 */
function applyRentatsuEffects(generalEntries, treasureEntries, fmtCtx) {
    if (!treasureEntries || !generalEntries || typeof SKILL_DB === 'undefined') return;

    for (var i = 0; i < treasureEntries.length; i++) {
        var tEntry = treasureEntries[i];
        var skillData = SKILL_DB[tEntry.skillName];
        if (!skillData) continue;

        var effectiveLevel = Math.min(tEntry.level, 5);
        var levelKey = LEVEL_KEY_MAP[effectiveLevel];

        for (var j = 0; j < skillData.effects.length; j++) {
            var eff = skillData.effects[j];
            if (eff.type2 !== '練達') continue;

            // 発動条件チェック
            if (typeof isConditionActive === 'function' &&
                !isConditionActive(eff.condition, tEntry.slotName, tEntry.general, fmtCtx)) continue;

            var targetSkillName = eff.effect;
            // 増加量を決定（levels有り→値参照、null→+1固定）
            var boost = 1;
            if (eff.levels && levelKey && eff.levels[levelKey] != null) {
                boost = eff.levels[levelKey];
            }

            // 対象技能のレベルを上げる（上限5）
            for (var k = 0; k < generalEntries.length; k++) {
                if (generalEntries[k].skillName === targetSkillName) {
                    generalEntries[k].level = Math.min(generalEntries[k].level + boost, 5);
                }
            }
        }
    }
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
function calculateSkillEffects(formation, getStarRankFn, treasureForgeRank, treasureURStatus) {
    if (!formation) return null;

    const targetParams = ['攻撃速度', '会心発生', '戦法速度'];
    const results = {};
    const details = {};
    targetParams.forEach(param => { results[param] = 0; details[param] = []; });

    const entries = collectSkillEntries(formation, getStarRankFn);
    const treasureEntries = collectTreasureSkillEntries(formation, treasureForgeRank, treasureURStatus);
    const fmtCtx = buildFormationContext(formation);

    // 武将技能 + 名宝技能を結合し、付与効果を解決して追加
    const baseEntries = entries.concat(treasureEntries);
    const grantedEntries = resolveGrantedSkills(baseEntries, fmtCtx);
    const allEntries = baseEntries.concat(grantedEntries);

    // 練達効果を適用（付与で追加された技能も含めてLvアップ）
    applyRentatsuEffects(allEntries, treasureEntries, fmtCtx);

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
                    details[eff.effect].push({
                        skillName: skillName,
                        value: val,
                        level: effectiveLevel,
                        condition: eff.condition || '常に',
                    });
                }
            }
        }
    }

    // 効果値の降順でソート
    targetParams.forEach(param => {
        details[param].sort((a, b) => b.value - a.value);
    });

    results._details = details;
    return results;
}

/**
 * 部隊の戦闘パラメータを計算する（6つのパラメータ）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランクを取得する関数 (general) => number
 * @returns {Object|null} 戦闘パラメータ（percentage値: 25 = 25%）
 */
function calculateCombatParameters(formation, getStarRankFn, treasureForgeRank, treasureURStatus) {
    if (!formation) return null;

    const result = {
        initialGauge: 0, tacticSpeed: 0, lethalResist: false,
        tacticReduce: 0, attackSpeed: 0, critical: 0
    };
    const _details = {
        initialGauge: [], tacticSpeed: [], lethalResist: [],
        tacticReduce: [], attackSpeed: [], critical: []
    };

    const entries = collectSkillEntries(formation, getStarRankFn);
    const treasureEntries = collectTreasureSkillEntries(formation, treasureForgeRank, treasureURStatus);
    const fmtCtx = buildFormationContext(formation);

    // 武将技能 + 名宝技能を結合し、付与効果を解決して追加
    const baseEntries = entries.concat(treasureEntries);
    const grantedEntries = resolveGrantedSkills(baseEntries, fmtCtx);
    const allEntries = baseEntries.concat(grantedEntries);

    // 練達効果を適用（付与で追加された技能も含めてLvアップ）
    applyRentatsuEffects(allEntries, treasureEntries, fmtCtx);

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
                if (validLevel > 0) {
                    result.lethalResist = true;
                    _details.lethalResist.push({
                        skillName: skillName,
                        level: Math.min(validLevel, 5),
                        condition: eff.condition || '常に',
                    });
                }
            } else {
                const effectiveLevel = Math.min(validLevel, 5);
                const levelKey = LEVEL_KEY_MAP[effectiveLevel];

                if (eff.levels && eff.levels[levelKey] != null) {
                    const val = eff.levels[levelKey];
                    if (typeof val === 'number') {
                        // SKILL_DBはdecimal (0.25)、表示はpercentage (25) → ×100で互換維持
                        result[mapping.key] += val * 100;
                        _details[mapping.key].push({
                            skillName: skillName,
                            value: val * 100,
                            level: effectiveLevel,
                            condition: eff.condition || '常に',
                        });
                    }
                }
            }
        }
    }

    // 効果値の降順でソート
    for (const k in _details) {
        if (k !== 'lethalResist') {
            _details[k].sort((a, b) => b.value - a.value);
        }
    }
    result._details = _details;

    // 出陣ゲージの上限適用
    result.initialGauge = Math.min(result.initialGauge, INITIAL_GAUGE_CAP);

    return result;
}

// === 名宝技能エントリ収集 ===

// EMBEDDED_TREASURES_DATA.id → TREASURE_FORGE key のマッピングキャッシュ
var _treasureIdToForgeKey = null;

/**
 * EMBEDDED_TREASURES_DATA.id → TREASURE_FORGE key のマッピングを構築する
 * 技能名セットの一致でマッピング（遅延初期化・キャッシュ）
 */
function buildTreasureIdMapping() {
    if (_treasureIdToForgeKey) return _treasureIdToForgeKey;
    _treasureIdToForgeKey = {};

    if (typeof EMBEDDED_TREASURES_DATA === 'undefined' || typeof TREASURE_FORGE === 'undefined') {
        return _treasureIdToForgeKey;
    }

    // TREASURE_FORGE の技能セット → forgeKey マッピング
    var forgeBySkills = {};
    for (var forgeKey in TREASURE_FORGE) {
        var forgeData = TREASURE_FORGE[forgeKey];
        var stage = (forgeData.ur && forgeData.ur.length > 0) ? forgeData.ur : forgeData.normal;
        var skillKey = (stage || []).map(function(s) { return s.skill; }).sort().join('|');
        if (!forgeBySkills[skillKey]) {
            forgeBySkills[skillKey] = parseInt(forgeKey);
        }
    }

    // EMBEDDED_TREASURES_DATA.id → forgeKey
    for (var i = 0; i < EMBEDDED_TREASURES_DATA.length; i++) {
        var t = EMBEDDED_TREASURES_DATA[i];
        if (!t.skills || t.skills.length === 0) continue;
        var tSkillKey = t.skills.slice().sort().join('|');
        if (forgeBySkills[tSkillKey] != null) {
            _treasureIdToForgeKey[t.id] = forgeBySkills[tSkillKey];
        }
    }

    return _treasureIdToForgeKey;
}

/**
 * 部隊の名宝から技能エントリを収集する
 * @param {Object} formation - 部隊データ
 * @param {Object} treasureForgeRank - 名宝ID→鍛錬ランク(0-10)のマップ
 * @param {Object} treasureURStatus - 名宝ID→UR化状態(boolean)のマップ
 * @returns {Array} [{skillName, level, slotName, general}, ...]
 */
function collectTreasureSkillEntries(formation, treasureForgeRank, treasureURStatus) {
    var entries = [];
    var treasures = formation.treasures;
    if (!treasures) return entries;
    if (typeof getTreasureSkillLevels !== 'function') return entries;

    var idMapping = buildTreasureIdMapping();

    for (var treasureKey in treasures) {
        var treasure = treasures[treasureKey];
        if (!treasure) continue;

        // treasureKey: "主将-weapon" → slotName: "主将"
        var slotName = treasureKey.split('-')[0];

        // スロットの武将を取得（発動条件チェック用）
        var slotData = formation.slots && formation.slots[slotName];
        if (!slotData) continue;
        var generalId = typeof slotData === 'object' ? slotData.id : slotData;
        var general = getGeneralById(generalId);
        if (!general) continue;

        // TREASURE_FORGE key を取得
        var forgeKey = idMapping[treasure.id];
        if (!forgeKey) continue;

        // 鍛錬ランク・UR状態から技能レベルを取得
        var forgeRank = (treasureForgeRank && treasureForgeRank[treasure.id]) || 0;
        var isUR = (treasureURStatus && treasureURStatus[treasure.id]) || false;
        var skillLevels = getTreasureSkillLevels(forgeKey, forgeRank, isUR);
        for (var j = 0; j < skillLevels.length; j++) {
            var sl = skillLevels[j];
            entries.push({
                skillName: sl.skill,
                level: sl.level,
                slotName: slotName,
                general: general
            });
        }
    }

    return entries;
}

/**
 * 武将技能 + 名宝技能を統合して全エントリを返す
 * stat-calculator.js の calculateFormationStats から呼ばれる
 * @param {Object} formation - 部隊データ
 * @param {Function} getProfileFn - (general) => number|{star,level,grade}
 * @param {Object} treasureForgeRank - 名宝ID→鍛錬ランク(0-10)のマップ
 * @param {Object} treasureURStatus - 名宝ID→UR化状態(boolean)のマップ
 * @returns {Object} { allEntries, fmtCtx }
 */
function buildAllEntries(formation, getProfileFn, treasureForgeRank, treasureURStatus) {
    // getProfileFn を星ランク関数に変換
    var getStarRankFn = function(general) {
        var profile = getProfileFn(general);
        return (typeof profile === 'number') ? profile : ((profile && profile.star) || 0);
    };

    var fmtCtx = buildFormationContext(formation);

    // 武将技能エントリ
    var generalEntries = collectSkillEntries(formation, getStarRankFn);

    // 名宝技能エントリ
    var treasureEntries = collectTreasureSkillEntries(formation, treasureForgeRank, treasureURStatus);

    // 武将技能 + 名宝技能を結合
    var baseEntries = generalEntries.concat(treasureEntries);

    // 付与効果を解決
    var grantedEntries = resolveGrantedSkills(baseEntries, fmtCtx);
    var allEntries = baseEntries.concat(grantedEntries);

    // 練達効果を適用（付与で追加された技能も含めてLvアップ）
    applyRentatsuEffects(allEntries, treasureEntries, fmtCtx);

    return { allEntries: allEntries, fmtCtx: fmtCtx };
}

/**
 * 兵科一致スキルによる強制一致スロットを収集する
 * @param {Array} allEntries - buildAllEntriesの結果
 * @param {Object} fmtCtx - buildFormationContextの結果
 * @param {Object} formation - 部隊データ
 * @returns {Set} 兵科一致として扱うスロット名のSet
 */
function collectUnitMatchOverrides(allEntries, fmtCtx, formation) {
    var overrideSlots = new Set();

    // 技能名でグループ化
    var bySkillName = {};
    for (var i = 0; i < allEntries.length; i++) {
        var entry = allEntries[i];
        if (!bySkillName[entry.skillName]) bySkillName[entry.skillName] = [];
        bySkillName[entry.skillName].push(entry);
    }

    var subSlots = ['副将1', '副将2', '補佐1', '補佐2'];

    for (var skillName in bySkillName) {
        var skillData = SKILL_DB?.[skillName];
        if (!skillData) continue;

        var skillEntries = bySkillName[skillName];

        for (var e = 0; e < skillData.effects.length; e++) {
            var eff = skillData.effects[e];
            if (eff.effect !== '兵科一致') continue;

            // 発動Lv確認
            var validLevel = sumValidLevels(skillEntries, fmtCtx, eff.condition);
            if (validLevel <= 0) continue;

            var cond2 = eff.condition2 || '';

            if (cond2.indexOf('副将と補佐を兵科一致') >= 0) {
                // 全副将・補佐を兵科一致
                for (var s = 0; s < subSlots.length; s++) overrideSlots.add(subSlots[s]);
            } else if (cond2.indexOf('好相性の副将と補佐を兵科一致') >= 0) {
                // 好相性の副将・補佐のみ
                for (var s = 0; s < subSlots.length; s++) {
                    var slotData = formation.slots?.[subSlots[s]];
                    if (!slotData) continue;
                    var gid = typeof slotData === 'object' ? slotData.id : slotData;
                    var g = getGeneralById(gid);
                    if (g && isAffinityGood(fmtCtx.mainAffinity, g.affinity)) {
                        overrideSlots.add(subSlots[s]);
                    }
                }
            } else if (cond2.indexOf('騎兵の副将と補佐を兵科一致') >= 0) {
                // 騎兵の副将・補佐のみ
                for (var s = 0; s < subSlots.length; s++) {
                    var slotData = formation.slots?.[subSlots[s]];
                    if (!slotData) continue;
                    var gid = typeof slotData === 'object' ? slotData.id : slotData;
                    var g = getGeneralById(gid);
                    if (g && g.unit_type === '馬') {
                        overrideSlots.add(subSlots[s]);
                    }
                }
            } else if (cond2.indexOf('自身を兵科一致') >= 0) {
                // 自身（スキル所持者のスロット）を兵科一致
                for (var i2 = 0; i2 < skillEntries.length; i2++) {
                    var entrySlot = skillEntries[i2].slotName;
                    if (entrySlot !== '主将') {
                        if (isConditionActive(eff.condition, entrySlot, skillEntries[i2].general, fmtCtx)) {
                            overrideSlots.add(entrySlot);
                        }
                    }
                }
            }
        }
    }

    return overrideSlots;
}
