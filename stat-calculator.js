// stat-calculator.js — ステータス計算モジュール
// 依存: EMBEDDED_GENERALS_DATA (グローバル)
//
// 計算式: 実ステータス = 初期値 × (1 + グレード補正 + 将星補正 + Lv補正)
// 前提: グレード=max(30), 将星補正=☆ランクに均等割り, Lv=☆0-6→50 / ☆7→60

// === 天賦テーブル ===
// 各値は初期能力100%に対する追加倍率（4.00 = +400%）
const TENPU_TABLE = {
    1400: { grade: 4.00, starMax: 4.80, lv50: 4.20, lv50to60: 0.84 },
    1300: { grade: 3.80, starMax: 4.40, lv50: 3.80, lv50to60: 0.76 },
    1200: { grade: 3.60, starMax: 4.00, lv50: 3.40, lv50to60: 0.68 },
    1100: { grade: 3.20, starMax: 3.80, lv50: 3.00, lv50to60: 0.60 },
    1000: { grade: 2.80, starMax: 3.60, lv50: 2.60, lv50to60: 0.52 },
     900: { grade: 2.00, starMax: 4.30, lv50: 1.70, lv50to60: 0.34 },
     875: { grade: 1.95, starMax: 4.15, lv50: 1.65, lv50to60: 0.33 },
     850: { grade: 1.90, starMax: 4.00, lv50: 1.60, lv50to60: 0.32 },
     800: { grade: 1.70, starMax: 3.80, lv50: 1.50, lv50to60: 0.30 },
     650: { grade: 1.20, starMax: 3.30, lv50: 1.00, lv50to60: 0.20 },
     550: { grade: 1.00, starMax: 2.80, lv50: 0.70, lv50to60: 0.14 },
     500: { grade: 0.90, starMax: 2.60, lv50: 0.50, lv50to60: 0.10 },
};

// === 陣形別ステータス反映率（ルール定義書§2.2） ===
const FORMATION_RATES = {
    '基本':       { main: 1.000, sub: 0.100, advisor: 0.050 },
    '歩兵陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '歩兵陣・改': { main: 0.627, sub: 0.248, advisor: 0.189 },
    '弓兵陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '弓兵陣・改': { main: 0.627, sub: 0.248, advisor: 0.189 },
    '騎兵陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '騎兵陣・改': { main: 0.627, sub: 0.248, advisor: 0.189 },
    '防御陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '防衛陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '迎撃陣':     { main: 0.627, sub: 0.248, advisor: 0.189 },
    '兵器陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
    '兵器陣・改': { main: 0.624, sub: 0.276, advisor: 0.188 },
    '賢策陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
    '賢策陣・改': { main: 0.624, sub: 0.276, advisor: 0.188 },
    '勇往陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
    '勇往陣・改': { main: 0.624, sub: 0.276, advisor: 0.188 },
    '友結陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
    '堅防陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
    '斬心陣':     { main: 0.624, sub: 0.276, advisor: 0.188 },
};

// === 兵科Lvテーブル（レアリティ×☆ランク → 兵科Lv）===
// ルール定義書§1.7
const TROOP_LEVEL_TABLE = {
    'LR':  [9, 10, 10, 11, 11, 11, 12, 12],
    'UR':  [5,  6,  6,  7,  7,  7,  8,  8],
    'SSR': [2,  2,  3,  3,  4,  5,  6,  7],
    'SR':  [2,  2,  3,  3,  4,  5,  5,  6],
    'R':   [1,  1,  1,  1,  1,  1,  1,  1],
    'N':   [1,  1,  1,  1,  1,  1,  1,  1],
};

// 兵科Lv別 基礎兵力
const HP_BY_TROOP_LEVEL = {
    1: 2000, 2: 2500, 3: 3000, 4: 3500, 5: 4000, 6: 4400,
    7: 4800, 8: 5200, 9: 8500, 10: 9000, 11: 9500, 12: 10000,
};

// 兵科固有値（機動・射程）
const UNIT_TYPE_PARAMS = {
    '槍': { mobility: 100, range: 1.0 },
    '弓': { mobility: 100, range: 1.5 },
    '馬': { mobility: 120, range: 1.0 },
};

/**
 * 兵科Lvを取得する
 */
function getTroopLevel(rarity, starRank) {
    const table = TROOP_LEVEL_TABLE[rarity];
    if (!table) return 1;
    const star = Math.min(Math.max(starRank || 0, 0), 7);
    return table[star];
}

/**
 * 部隊の基礎兵力を計算する
 * 各武将の兵科Lv別兵力 × 陣形反映率 の合計
 */
function calcFormationBaseHp(memberStats, rates) {
    let totalHp = 0;
    for (const [slotName, data] of Object.entries(memberStats)) {
        const troopLv = getTroopLevel(data.general.rarity, data.starRank);
        const baseHp = HP_BY_TROOP_LEVEL[troopLv] || 2000;
        const category = getPositionCategory(slotName);
        const rate = rates[category] || 0;
        totalHp += Math.floor(baseHp * rate);
    }
    return totalHp;
}

// === 陣形固有効果（基礎ステータスに影響する数値付き効果のみ） ===
// SKILL_DB source='陣形DB' から抽出。levels=null の定性効果(↑/↓)はスキップ。
// type: 'fixed' = 固定%, 'perUnitType' = 兵科人数×%, 'unitCountThreshold' = 人数条件,
//       'perAffinityMatch' = 好相性人数×%
const FORMATION_STAT_BONUSES = {
    // 歩兵兵力 (id:4504) — 兵力+2%×歩兵人数, cap 10%
    '歩兵陣':     [{ stat: 'hp', type: 'perUnitType', unitType: '槍', perUnit: 0.02, cap: 0.10 }],
    '歩兵陣・改': [
        { stat: 'hp', type: 'perUnitType', unitType: '槍', perUnit: 0.02, cap: 0.10 },
        // 歩兵金剛 (id:4550) — 歩兵3人以上:防御+15%, 5人:+30%
        { stat: 'defense', type: 'unitCountThreshold', unitType: '槍', min: 3, value: 0.15, fullCount: 5, fullValue: 0.30 },
    ],
    // 弓兵兵力 (id:4511) — 兵力+2%×弓兵人数, cap 10%
    '弓兵陣':     [{ stat: 'hp', type: 'perUnitType', unitType: '弓', perUnit: 0.02, cap: 0.10 }],
    '弓兵陣・改': [{ stat: 'hp', type: 'perUnitType', unitType: '弓', perUnit: 0.02, cap: 0.10 }],
    // 騎兵兵力 (id:4515) — 兵力+2%×騎兵人数, cap 10%
    '騎兵陣':     [{ stat: 'hp', type: 'perUnitType', unitType: '馬', perUnit: 0.02, cap: 0.10 }],
    '騎兵陣・改': [{ stat: 'hp', type: 'perUnitType', unitType: '馬', perUnit: 0.02, cap: 0.10 }],
    // 兵器陣 (id:4543) — 兵力-5% 固定
    '兵器陣':     [{ stat: 'hp', type: 'fixed', value: -0.05 }],
    '兵器陣・改': [{ stat: 'hp', type: 'fixed', value: -0.05 }],
    // 勇往陣 (id:4549) — 兵力+5% 固定
    '勇往陣':     [{ stat: 'hp', type: 'fixed', value: 0.05 }],
    '勇往陣・改': [{ stat: 'hp', type: 'fixed', value: 0.05 }],
    // 堅防陣 (id:4560) — 兵力+10%, 防御+10%
    // 堅防強陣 (id:4559) — 攻撃+5%, 知力+5%
    '堅防陣': [
        { stat: 'hp', type: 'fixed', value: 0.10 },
        { stat: 'defense', type: 'fixed', value: 0.10 },
        { stat: 'attack', type: 'fixed', value: 0.05 },
        { stat: 'intelligence', type: 'fixed', value: 0.05 },
    ],
    // 友結陣戦 (id:4557) — 攻撃/知力 +2%×好相性人数, cap 10%
    '友結陣': [
        { stat: 'attack', type: 'perAffinityMatch', perUnit: 0.02, cap: 0.10 },
        { stat: 'intelligence', type: 'perAffinityMatch', perUnit: 0.02, cap: 0.10 },
    ],
};

// === 参軍反映率テーブル ===
// 参軍レベル別の反映率（Lv1=6%, 以降+1%ずつ, Lv10=15%）
const ADVISOR_LEVEL_RATES = [0, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15];

// 参軍スロット → 参照ステータス → 加算先の対応
const ADVISOR_SLOT_MAP = {
    leadership:   { statKey: 'leadership',   targetKey: 'defense' },      // 統率 → 防御
    attack:       { statKey: 'attack',        targetKey: 'attack' },       // 武力 → 攻撃
    intelligence: { statKey: 'intelligence',  targetKey: 'intelligence' }, // 知力 → 知力
    // politics → 輸送（戦闘無関係、将来実装）
    // charm → 探索（戦闘無関係、将来実装）
};

// === 個人ステータス計算 ===

/**
 * 武将の実ステータスを1つ計算する
 * @param {number} baseStat - 初期ステータス（武将DBの値）
 * @param {number} tenpu - 天賦値
 * @param {number} starRank - 将星ランク（0-7）
 * @param {number} [level] - レベル（1-60）。省略時は☆0-6→50, ☆7→60
 * @param {number} [grade] - グレード（0-30）。省略時は30
 */
function calcActualStat(baseStat, tenpu, starRank, level, grade) {
    if (!baseStat || !tenpu) return 0;
    const table = TENPU_TABLE[tenpu];
    if (!table) return 0;

    const star = Math.min(Math.max(starRank || 0, 0), 7);
    const gradeVal = Math.min(Math.max(grade ?? 30, 0), 30);
    const maxLv = star >= 7 ? 60 : 50;
    const lv = Math.min(Math.max(level ?? maxLv, 1), maxLv);

    // グレード補正: Grade30で最大、0で0
    const gradeBonus = table.grade * (gradeVal / 30);
    // 将星補正: ☆7で最大
    const starBonus = (star / 7) * table.starMax;
    // レベル補正: Lv1→0, Lv50→lv50全量, Lv51-60→lv50to60追加
    let lvBonus = 0;
    if (lv <= 50) {
        lvBonus = table.lv50 * ((lv - 1) / 49);
    } else {
        lvBonus = table.lv50 + table.lv50to60 * ((lv - 50) / 10);
    }

    return Math.floor(baseStat * (1 + gradeBonus + starBonus + lvBonus));
}

/**
 * プロファイル関数の戻り値を正規化する（後方互換）
 * 数値が返った場合は { star: n, level: auto, grade: 30 } に変換
 */
function normalizeProfile(profileOrStar) {
    if (typeof profileOrStar === 'number') {
        return { star: profileOrStar };
    }
    return profileOrStar || { star: 0 };
}

/**
 * 武将の全ステータスを計算する
 * @param {Object} general - 武将データ
 * @param {number|Object} profileOrStar - 星ランク(数値) or { star, level, grade }
 */
function calcGeneralStats(general, profileOrStar) {
    if (!general) return null;
    const t = general.tenpu || 0;
    const p = normalizeProfile(profileOrStar);
    return {
        leadership:   calcActualStat(general.leadership, t, p.star, p.level, p.grade),
        attack:       calcActualStat(general.attack, t, p.star, p.level, p.grade),
        intelligence: calcActualStat(general.intelligence, t, p.star, p.level, p.grade),
        politics:     calcActualStat(general.politics || 0, t, p.star, p.level, p.grade),
        charm:        calcActualStat(general.charm || 0, t, p.star, p.level, p.grade),
    };
}

// === 部隊ステータス計算 ===

/**
 * ポジション名から反映率カテゴリを返す
 */
function getPositionCategory(slotName) {
    if (slotName === '主将') return 'main';
    if (slotName === '副将1' || slotName === '副将2') return 'sub';
    if (slotName === '補佐1' || slotName === '補佐2') return 'advisor';
    return null;
}

/**
 * 陣形名を正規化する（アプリ側の名称→反映率テーブルのキー）
 */
function normalizeFormationName(name) {
    if (!name) return '基本';
    // 「基本陣形」→「基本」、「騎兵陣形」→「騎兵陣」等
    let n = name.replace(/陣形$/, '');
    if (n === '基本' || n === '') return '基本';
    // 「騎兵」→「騎兵陣」（陣が抜けている場合を補完）
    if (!n.endsWith('陣') && !n.endsWith('改')) n += '陣';
    return n;
}

/**
 * 部隊の基礎ステータスを計算する（技能効果なしの素のステータス）
 *
 * 攻撃 = Σ (武力 × 反映率)  ※主将のみ (武力 + 統率/2) × 反映率
 * 防御 = Σ (統率 × 反映率)
 * 知力 = (主将知力 + 部隊最高知力) / 2
 */
function calcFormationBaseStats(formation, getProfileFn) {
    if (!formation?.slots) return null;

    const fmtName = normalizeFormationName(formation.formationType || formation.formation_id);
    const rates = FORMATION_RATES[fmtName] || FORMATION_RATES['基本'];

    let totalAttack = 0;
    let totalDefense = 0;
    let maxIntelligence = 0;
    let mainIntelligence = 0;
    const memberStats = {};

    const slotNames = ['主将', '副将1', '副将2', '補佐1', '補佐2'];

    for (const slotName of slotNames) {
        const slotData = formation.slots[slotName];
        if (!slotData) continue;

        const generalId = typeof slotData === 'object' ? slotData.id : slotData;
        const general = getGeneralById(generalId);
        if (!general) continue;

        const profile = normalizeProfile(getProfileFn(general));
        const stats = calcGeneralStats(general, profile);
        if (!stats) continue;

        memberStats[slotName] = { general, starRank: profile.star, stats };

        const category = getPositionCategory(slotName);
        const rate = rates[category] || 0;

        if (slotName === '主将') {
            totalAttack += (stats.attack + Math.floor(stats.leadership / 2)) * rate;
            mainIntelligence = stats.intelligence;
        } else {
            totalAttack += stats.attack * rate;
        }

        totalDefense += stats.leadership * rate;

        if (stats.intelligence > maxIntelligence) {
            maxIntelligence = stats.intelligence;
        }
    }

    return {
        attack: Math.floor(totalAttack),
        defense: Math.floor(totalDefense),
        intelligence: Math.floor((mainIntelligence + maxIntelligence) / 2),
        formationName: fmtName,
        rates,
        memberStats,
    };
}

/**
 * 参軍武将のステータス貢献を計算する
 * @param {Object} formation - 部隊データ（formation.advisors を参照）
 * @param {Function} getProfileFn - 武将プロファイル取得関数
 * @param {number} advisorLevel - 参軍レベル（0-10）。デフォルト10
 * @param {number} facilityBonus - 参軍府ボーナス（0-0.10）。デフォルト0
 * @returns {Object} { attack, defense, intelligence } の加算値
 */
function calcAdvisorContribution(formation, getProfileFn, advisorLevel, facilityBonus) {
    const contribution = { attack: 0, defense: 0, intelligence: 0 };
    if (!formation?.advisors) return contribution;

    const lvRate = ADVISOR_LEVEL_RATES[Math.min(Math.max(advisorLevel || 0, 0), 10)] || 0;
    const rate = lvRate + (facilityBonus || 0);
    if (rate <= 0) return contribution;

    for (const [slotKey, mapping] of Object.entries(ADVISOR_SLOT_MAP)) {
        const advisorData = formation.advisors[slotKey];
        if (!advisorData) continue;

        const generalId = typeof advisorData === 'object' ? advisorData.id : advisorData;
        const general = getGeneralById(generalId);
        if (!general) continue;

        const profile = normalizeProfile(getProfileFn(general));
        const stats = calcGeneralStats(general, profile);
        if (!stats) continue;

        // TODO: 名宝ステータス加算（鍛錬JS化後に追加）
        const refStat = stats[mapping.statKey] || 0;
        contribution[mapping.targetKey] += Math.floor(refStat * rate);
    }

    return contribution;
}

/**
 * 技能によるステータス加算を集計する
 * type2='基礎' の効果から %加算と固定値加算を分離して返す
 */
function collectSkillStatBonuses(allEntries, fmtCtx) {
    const LEVEL_KEY_MAP = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };
    const STAT_KEYS = { '攻撃': 'attack', '防御': 'defense', '知力': 'intelligence', '兵力': 'hp' };

    const pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const fixBonuses = { attack: 0, defense: 0, intelligence: 0 };

    if (!allEntries || typeof SKILL_DB === 'undefined') return { pctBonuses, fixBonuses };

    // 技能名でグループ化
    const bySkill = {};
    for (const e of allEntries) {
        (bySkill[e.skillName] ??= []).push(e);
    }

    for (const [skillName, entries] of Object.entries(bySkill)) {
        const data = SKILL_DB[skillName];
        if (!data) continue;

        for (const eff of data.effects) {
            if (eff.type2 !== '基礎' || !eff.levels) continue;

            const statKey = STAT_KEYS[eff.effect];
            if (!statKey) continue;

            const isFixed = (eff.capValue || 0) >= 10;

            for (const entry of entries) {
                if (typeof isConditionActive === 'function' &&
                    !isConditionActive(eff.condition, entry.slotName, entry.general, fmtCtx)) continue;

                const lv = Math.min(entry.level, 5);
                const val = eff.levels[LEVEL_KEY_MAP[lv]];
                if (val == null) continue;

                if (isFixed) {
                    if (fixBonuses[statKey] != null) fixBonuses[statKey] += val * 100;
                } else {
                    pctBonuses[statKey] += val;
                }
            }
        }
    }

    return { pctBonuses, fixBonuses };
}

// === 軍馬ステータスボーナス ===

/**
 * 軍馬編制によるステータス固定値ボーナスを計算する
 * 毛色ボーナス + 名馬ステータス（☆ランク依存）の合計
 * @param {Object} profileConfig - プロファイル設定（profileConfig.horses）
 * @returns {Object} { attack, defense, intelligence } 固定値加算
 */
function calcHorseStatBonus(profileConfig) {
    const bonus = { attack: 0, defense: 0, intelligence: 0 };
    const horses = profileConfig?.horses;
    if (!Array.isArray(horses)) return bonus;

    for (const horse of horses) {
        if (!horse) continue;

        // 毛色ステータスボーナス（data-profile.js の HORSE_COATS）
        if (horse.coat && typeof HORSE_COATS !== 'undefined') {
            const coatBonus = HORSE_COATS[horse.coat];
            if (coatBonus) {
                bonus.attack += coatBonus.attack || 0;
                bonus.defense += coatBonus.defense || 0;
                bonus.intelligence += coatBonus.intelligence || 0;
            }
        }

        // 名馬ステータス（data-profile.js の MEIBA_DATA）
        if (horse.isMeiba && horse.meibaName && typeof MEIBA_DATA !== 'undefined') {
            const meiba = MEIBA_DATA[horse.meibaName];
            if (meiba?.stats) {
                const stats = meiba.stats[horse.meibaStarRank || 0];
                if (stats) {
                    bonus.attack += stats.attack || 0;
                    bonus.defense += stats.defense || 0;
                    bonus.intelligence += stats.intelligence || 0;
                }
            }
        }
    }

    return bonus;
}

// === 調査（異民族）効果ボーナス ===

/**
 * 調査レベルによる%ボーナスを計算する
 * @param {Object} profileConfig - プロファイル設定（profileConfig.investigation）
 * @returns {Object} { pct: {attack,defense,intelligence,hp}, params: {戦法速度,...} }
 */
function calcSurveyBonuses(profileConfig) {
    const pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const paramBonuses = {};
    const investigation = profileConfig?.investigation;
    if (!investigation || typeof SURVEY_DATA === 'undefined') return { pct: pctBonuses, params: paramBonuses };

    const LEVEL_KEYS = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };

    for (const skill of SURVEY_DATA) {
        const userLevel = investigation[skill.name];
        if (!userLevel || userLevel <= 0) continue;
        const levelKey = LEVEL_KEYS[userLevel];
        if (!levelKey) continue;

        for (const effect of skill.effects) {
            const value = effect.levels?.[levelKey];
            if (value == null) continue;

            if (effect.type2 === '基礎') {
                if (effect.effect === '攻撃') pctBonuses.attack += value;
                else if (effect.effect === '防御') pctBonuses.defense += value;
                else if (effect.effect === '知力') pctBonuses.intelligence += value;
                else if (effect.effect === '兵力') pctBonuses.hp += value;
                else paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
            } else if (effect.type2 === 'パラメータ') {
                paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
            }
        }
    }

    return { pct: pctBonuses, params: paramBonuses };
}

// === 研究効果ボーナス ===

/**
 * 研究による%ボーナスを計算する（基礎ステータス4項目のみ）
 * M研究は常時有効、専攻中の分野のみ有効
 * @param {Object} profileConfig - プロファイル設定（profileConfig.research）
 * @returns {Object} { pct: {attack,defense,intelligence,hp} }
 */
function calcResearchBonuses(profileConfig) {
    const pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const research = profileConfig?.research;
    if (!research || typeof RESEARCH_DATA === 'undefined') return { pct: pctBonuses };

    const STAT_MAP = { '攻撃': 'attack', '防御': 'defense', '知力': 'intelligence', '兵力': 'hp' };

    // 有効な分野を決定（序論は常時有効 + 各カテゴリの専攻選択）
    const specs = research.specializations || {};
    const activeFields = new Set(['序論', specs.city, specs.troop, specs.fourth].filter(Boolean));

    const items = research.items || {};

    for (const resItem of RESEARCH_DATA) {
        // M研究は常時有効、それ以外は専攻中の分野のみ
        if (!resItem.isMaster && !activeFields.has(resItem.field)) continue;

        // UIと同じキー形式でsaved値を取得
        const key = `${resItem.field}:${resItem.name}`;
        const saved = items[key];
        if (!saved || !saved.unlocked || !saved.value) continue;

        // ユーザー入力値（%）を小数に変換
        const valueDec = saved.value / 100;

        // 同一アイテム内の重複エフェクトを排除
        const applied = new Set();
        for (const eff of (resItem.effects || [])) {
            if (eff.type2 !== '基礎') continue;
            const statKey = STAT_MAP[eff.effect];
            if (statKey && !applied.has(statKey)) {
                pctBonuses[statKey] += valueDec;
                applied.add(statKey);
            }
        }
    }

    return { pct: pctBonuses };
}

// === 軍馬技能の%ボーナス ===

/**
 * 軍馬技能によるパラメータボーナスを計算する
 * 3頭の技能累積レベル（上限Ⅹ）で効果値を算出
 * @param {Object} profileConfig - プロファイル設定
 * @param {string} unitType - 部隊の兵科（馬/槍/弓）
 * @returns {Object} { pct: {attack,...}, params: {攻撃速度,...} }
 */
function calcHorseSkillBonuses(profileConfig, unitType) {
    const pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const fixBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const paramBonuses = {};
    const horses = profileConfig?.horses;
    if (!Array.isArray(horses) || typeof HORSE_SKILL_DATA === 'undefined') return { pct: pctBonuses, fix: fixBonuses, params: paramBonuses };

    // 1) 全3頭の技能を系統名で集計（累積上限Ⅹ=10）
    const skillTotals = {};
    for (const horse of horses) {
        if (!horse?.skills) continue;
        for (const skill of horse.skills) {
            if (!skill?.name || !skill.level || skill.level <= 0) continue;
            const resolved = typeof resolveHorseSkillName === 'function'
                ? resolveHorseSkillName(skill.name, unitType)
                : skill.name;
            if (!resolved) continue;
            skillTotals[resolved] = Math.min((skillTotals[resolved] || 0) + skill.level, 10);
        }
    }

    // 2) 累積レベルで効果値を取得
    const LK = { 1:'Ⅰ', 2:'Ⅱ', 3:'Ⅲ', 4:'Ⅳ', 5:'Ⅴ', 6:'Ⅵ', 7:'Ⅶ', 8:'Ⅷ', 9:'Ⅸ', 10:'Ⅹ' };

    // 部隊兵科→スキル兵科サフィックスのマッピング
    const unitSuffixMap = { '馬': '騎', '槍': '歩', '弓': '弓' };
    const formationSuffix = unitSuffixMap[unitType] || '騎';

    for (const [skillName, totalLevel] of Object.entries(skillTotals)) {
        const levelKey = LK[totalLevel];
        if (!levelKey) continue;
        const skillData = HORSE_SKILL_DATA.find(s => s.name === skillName);
        if (!skillData) continue;

        // 兵科依存スキルは部隊の兵科と一致しなければスキップ
        if (skillData.unitType && skillData.unitType !== formationSuffix) continue;

        // 大固・兵科 / 勇叡・兵科 は固定値加算、それ以外の基礎は%扱い
        const isFixedSkill = skillName.startsWith('大固') || skillName.startsWith('勇叡');

        for (const effect of skillData.effects) {
            const value = effect.levels?.[levelKey];
            if (value == null) continue;
            if (effect.type2 === '基礎' && isFixedSkill) {
                // 大固・騎 等: データ値×100が実値（30→3000）
                const flatVal = value * 100;
                if (effect.effect === '攻撃') fixBonuses.attack += flatVal;
                else if (effect.effect === '防御') fixBonuses.defense += flatVal;
                else if (effect.effect === '知力') fixBonuses.intelligence += flatVal;
                else if (effect.effect === '兵力') fixBonuses.hp += flatVal;
                else paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
            } else if (effect.type2 === '基礎') {
                // その他の基礎効果は%扱い（データ値/100が小数: 30→0.30）
                const pctVal = value / 100;
                if (effect.effect === '攻撃') pctBonuses.attack += pctVal;
                else if (effect.effect === '防御') pctBonuses.defense += pctVal;
                else if (effect.effect === '知力') pctBonuses.intelligence += pctVal;
                else if (effect.effect === '兵力') pctBonuses.hp += pctVal;
                else paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
            } else if (effect.type2 === 'パラメータ') {
                paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
            }
        }
    }

    // 3) 名馬技能の効果（絶影等）
    for (const horse of horses) {
        if (!horse?.isMeiba || !horse.meibaName || typeof MEIBA_DATA === 'undefined') continue;
        const meiba = MEIBA_DATA[horse.meibaName];
        if (!meiba?.skillName) continue;
        const skillLv = meiba.starRankToSkillLevel?.[horse.meibaStarRank || 0] || 0;
        if (skillLv <= 0) continue;
        const levelKey = LK[skillLv];
        if (!levelKey) continue;
        const skillData = HORSE_SKILL_DATA.find(s => s.name === meiba.skillName);
        if (!skillData) continue;

        for (const effect of skillData.effects) {
            const value = effect.levels?.[levelKey];
            if (value == null) continue;
            paramBonuses[effect.effect] = (paramBonuses[effect.effect] || 0) + value;
        }
    }

    return { pct: pctBonuses, fix: fixBonuses, params: paramBonuses };
}

// === 陣形固有効果ボーナス ===

/**
 * 陣形固有効果による%ボーナスを計算する
 * FORMATION_STAT_BONUSES テーブルに基づき、兵科人数/好相性人数を考慮
 * @param {string} formationName - 正規化済み陣形名
 * @param {Object} formation - 部隊データ（slots含む）
 * @returns {Object} { pct: {attack,defense,intelligence,hp} }
 */
function calcFormationBonuses(formationName, formation) {
    const pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    const bonuses = FORMATION_STAT_BONUSES[formationName];
    if (!bonuses || !formation?.slots) return { pct: pctBonuses };

    // 5枠の武将データを収集
    const slotNames = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
    const generals = [];
    for (const slotName of slotNames) {
        const slotData = formation.slots[slotName];
        if (!slotData) continue;
        const generalId = typeof slotData === 'object' ? slotData.id : slotData;
        const general = generalId ? getGeneralById(generalId) : null;
        if (general) generals.push(general);
    }

    // 兵科別人数カウント
    const unitCounts = {};
    for (const g of generals) {
        const ut = g.unit_type || '';
        unitCounts[ut] = (unitCounts[ut] || 0) + 1;
    }

    // 好相性人数カウント（主将との好相性）
    let affinityMatchCount = 0;
    if (generals.length > 1 && typeof isAffinityGood === 'function') {
        const mainAffinity = generals[0].affinity;
        for (let i = 1; i < generals.length; i++) {
            if (isAffinityGood(mainAffinity, generals[i].affinity)) {
                affinityMatchCount++;
            }
        }
    }

    // 各効果を適用
    for (const b of bonuses) {
        let value = 0;
        switch (b.type) {
            case 'fixed':
                value = b.value;
                break;
            case 'perUnitType': {
                const count = unitCounts[b.unitType] || 0;
                value = Math.min(b.perUnit * count, b.cap);
                break;
            }
            case 'unitCountThreshold': {
                const count = unitCounts[b.unitType] || 0;
                if (count >= (b.fullCount || 999)) {
                    value = b.fullValue;
                } else if (count >= b.min) {
                    value = b.value;
                }
                break;
            }
            case 'perAffinityMatch': {
                value = Math.min(b.perUnit * affinityMatchCount, b.cap);
                break;
            }
        }
        pctBonuses[b.stat] += value;
    }

    return { pct: pctBonuses };
}

/**
 * 部隊ステータスをまとめて計算する（メインAPI）
 * @param {Object} formation - 部隊データ
 * @param {Function} getProfileFn - 武将プロファイル取得関数。(general) => number|{star,level,grade}
 * @param {Object} [advisorConfig] - 参軍設定 { level: 0-10, facilityBonus: 0-0.10 }
 * @param {Object} [profileConfig] - プロファイル設定（研究/調査/軍馬）
 */
function calculateFormationStats(formation, getProfileFn, advisorConfig, profileConfig, treasureForgeRank, treasureURStatus) {
    const base = calcFormationBaseStats(formation, getProfileFn);
    if (!base) return null;

    // 主将の兵科を取得（軍馬技能の兵科判定用）
    const mainSlot = formation.slots?.['主将'];
    const mainGeneralId = typeof mainSlot === 'object' ? mainSlot?.id : mainSlot;
    const mainGeneral = mainGeneralId ? getGeneralById(mainGeneralId) : null;
    const unitType = mainGeneral?.unit_type || '馬';

    // 参軍加算
    const advCfg = advisorConfig || { level: 10, facilityBonus: 0 };
    const advisorBonus = calcAdvisorContribution(
        formation, getProfileFn, advCfg.level, advCfg.facilityBonus
    );

    // 技能加算（武将技能 + 名宝技能）
    let pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    let fixBonuses = { attack: 0, defense: 0, intelligence: 0 };
    let cachedAllEntries = null;
    let cachedFmtCtx = null;

    if (typeof buildAllEntries === 'function') {
        try {
            const { allEntries, fmtCtx } = buildAllEntries(formation, getProfileFn, treasureForgeRank, treasureURStatus);
            cachedAllEntries = allEntries;
            cachedFmtCtx = fmtCtx;
            const bonuses = collectSkillStatBonuses(allEntries, fmtCtx);
            pctBonuses = bonuses.pctBonuses;
            fixBonuses = bonuses.fixBonuses;
        } catch (e) {
            console.warn('技能加算エラー:', e);
        }
    }

    // 軍馬ステータスボーナス（固定値）
    const horseStatBonus = calcHorseStatBonus(profileConfig);

    // 軍馬技能ボーナス（固定値 + パラメータ%）
    const horseSkillBonus = calcHorseSkillBonuses(profileConfig, unitType);

    // 軍馬技能の固定値加算（大固・兵科 / 勇叡・兵科）を技能fixBonusesに合算
    fixBonuses.attack += horseSkillBonus.fix.attack;
    fixBonuses.defense += horseSkillBonus.fix.defense;
    fixBonuses.intelligence += horseSkillBonus.fix.intelligence;

    // 調査ボーナス（%値）
    const surveyBonus = calcSurveyBonuses(profileConfig);

    // 研究ボーナス（%値）
    const researchBonus = calcResearchBonuses(profileConfig);

    // 陣形固有効果ボーナス（%値）
    const formationBonus = calcFormationBonuses(base.formationName, formation);

    // プロファイル系%ボーナスを合算
    const profilePct = {
        attack: horseSkillBonus.pct.attack + surveyBonus.pct.attack + researchBonus.pct.attack + formationBonus.pct.attack,
        defense: horseSkillBonus.pct.defense + surveyBonus.pct.defense + researchBonus.pct.defense + formationBonus.pct.defense,
        intelligence: horseSkillBonus.pct.intelligence + surveyBonus.pct.intelligence + researchBonus.pct.intelligence + formationBonus.pct.intelligence,
        hp: horseSkillBonus.pct.hp + surveyBonus.pct.hp + researchBonus.pct.hp + formationBonus.pct.hp,
    };

    // パラメータボーナスを合算
    const profileParams = {};
    for (const [k, v] of Object.entries(horseSkillBonus.params)) {
        profileParams[k] = (profileParams[k] || 0) + v;
    }
    for (const [k, v] of Object.entries(surveyBonus.params)) {
        profileParams[k] = (profileParams[k] || 0) + v;
    }

    // 兵科Lv補正（主将の兵科Lvで部隊全体に適用）
    // 歩兵/騎兵: (Lv-1)%, 弓兵: (Lv-11)%
    let troopLvBonus = 0;
    if (mainGeneral && base.memberStats?.['主将']) {
        const mainStar = base.memberStats['主将'].starRank;
        const mainTroopLv = getTroopLevel(mainGeneral.rarity, mainStar);
        if (unitType === '弓') {
            troopLvBonus = (mainTroopLv - 11) / 100;
        } else {
            troopLvBonus = (mainTroopLv - 1) / 100;
        }
    }

    // 全%ボーナス合算
    const totalPct = {
        attack: pctBonuses.attack + profilePct.attack + troopLvBonus,
        defense: pctBonuses.defense + profilePct.defense + troopLvBonus,
        intelligence: pctBonuses.intelligence + profilePct.intelligence,
        hp: (pctBonuses.hp || 0) + profilePct.hp,
    };

    // 基礎 + 参軍 + 軍馬固定値を合算してから技能%を適用
    const baseWithAll = {
        attack: base.attack + advisorBonus.attack + horseStatBonus.attack,
        defense: base.defense + advisorBonus.defense + horseStatBonus.defense,
        intelligence: base.intelligence + advisorBonus.intelligence + horseStatBonus.intelligence,
    };

    // 兵力計算: 各武将の兵科Lv別兵力 × 陣形反映率 → 兵科一致 → HP%ボーナス適用
    const baseHp = calcFormationBaseHp(base.memberStats, base.rates);

    // 兵科一致ボーナス: 副将・補佐のうち主将と同じ兵科の人数 × 10%
    // 兵科一致スキルによる強制一致を考慮
    let unitMatchOverrides = new Set();
    if (cachedAllEntries && cachedFmtCtx && typeof collectUnitMatchOverrides === 'function') {
        try {
            unitMatchOverrides = collectUnitMatchOverrides(cachedAllEntries, cachedFmtCtx, formation);
        } catch (e) {
            // フォールバック: スキル未考慮
        }
    }
    let unitMatchCount = 0;
    for (const [slotName, data] of Object.entries(base.memberStats)) {
        if (slotName === '主将') continue;
        if (data.general.unit_type === unitType || unitMatchOverrides.has(slotName)) unitMatchCount++;
    }
    const unitMatchBonus = unitMatchCount * 0.10;
    const hpAfterMatch = Math.floor(baseHp * (1 + unitMatchBonus));
    const hpFixBonus = horseSkillBonus.fix.hp || 0;
    const finalHp = Math.floor(hpAfterMatch * (1 + totalPct.hp)) + hpFixBonus;

    // 機動・射程: 主将の兵科から固定値
    const unitFixed = UNIT_TYPE_PARAMS[unitType] || UNIT_TYPE_PARAMS['馬'];

    return {
        // 基礎（天賦×将星＋陣形反映率のみ）
        base: {
            attack: base.attack,
            defense: base.defense,
            intelligence: base.intelligence,
        },
        // 参軍加算
        advisor: advisorBonus,
        // 軍馬ステータス加算（固定値）
        horse: horseStatBonus,
        // 技能加算後（基礎+参軍+軍馬 に技能%+調査%+軍馬技能%+研究% 適用 + 固定値）
        withSkills: {
            attack: Math.floor(baseWithAll.attack * (1 + totalPct.attack)) + fixBonuses.attack,
            defense: Math.floor(baseWithAll.defense * (1 + totalPct.defense)) + fixBonuses.defense,
            intelligence: Math.floor(baseWithAll.intelligence * (1 + totalPct.intelligence)) + fixBonuses.intelligence,
        },
        // 兵力（基礎兵力 × 兵科一致 × HP%ボーナス + 固定値）
        hp: finalHp,
        baseHp: baseHp,
        unitMatchCount: unitMatchCount,
        unitMatchBonus: unitMatchBonus,
        hpPct: totalPct.hp,
        hpFixBonus: hpFixBonus,
        // 兵科Lv補正（攻撃・防御に適用済み）
        troopLvBonus: troopLvBonus,
        // 機動・射程（兵科固有値）
        mobility: unitFixed.mobility,
        range: unitFixed.range,
        // 技能ボーナス詳細
        bonuses: { pct: pctBonuses, fix: fixBonuses },
        // プロファイルボーナス詳細（調査+軍馬技能+研究の%合計）
        profileBonuses: { pct: profilePct, params: profileParams },
        // 研究ボーナス詳細（UI表示用）
        research: researchBonus.pct,
        // 陣形固有効果ボーナス詳細（UI表示用）
        formationBonus: formationBonus.pct,
        // メンバー個別ステータス
        memberStats: base.memberStats,
        // 陣形情報
        formationName: base.formationName,
        rates: base.rates,
    };
}
