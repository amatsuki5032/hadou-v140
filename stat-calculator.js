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
 */
function calcActualStat(baseStat, tenpu, starRank) {
    if (!baseStat || !tenpu) return 0;
    const table = TENPU_TABLE[tenpu];
    if (!table) return 0;

    const star = Math.min(Math.max(starRank || 0, 0), 7);
    const gradeBonus = table.grade;
    const starBonus = (star / 7) * table.starMax;
    const lvBonus = star >= 7
        ? table.lv50 + table.lv50to60
        : table.lv50;

    return Math.floor(baseStat * (1 + gradeBonus + starBonus + lvBonus));
}

/**
 * 武将の全ステータスを計算する
 */
function calcGeneralStats(general, starRank) {
    if (!general) return null;
    const t = general.tenpu || 0;
    return {
        leadership:   calcActualStat(general.leadership, t, starRank),
        attack:       calcActualStat(general.attack, t, starRank),
        intelligence: calcActualStat(general.intelligence, t, starRank),
        politics:     calcActualStat(general.politics || 0, t, starRank),
        charm:        calcActualStat(general.charm || 0, t, starRank),
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
function calcFormationBaseStats(formation, getStarRankFn) {
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
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);
        if (!general) continue;

        const starRank = getStarRankFn(general);
        const stats = calcGeneralStats(general, starRank);
        if (!stats) continue;

        memberStats[slotName] = { general, starRank, stats };

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
 * @param {Function} getStarRankFn - 武将の星ランク取得関数
 * @param {number} advisorLevel - 参軍レベル（0-10）。デフォルト10
 * @param {number} facilityBonus - 参軍府ボーナス（0-0.10）。デフォルト0
 * @returns {Object} { attack, defense, intelligence } の加算値
 */
function calcAdvisorContribution(formation, getStarRankFn, advisorLevel, facilityBonus) {
    const contribution = { attack: 0, defense: 0, intelligence: 0 };
    if (!formation?.advisors) return contribution;

    const lvRate = ADVISOR_LEVEL_RATES[Math.min(Math.max(advisorLevel || 0, 0), 10)] || 0;
    const rate = lvRate + (facilityBonus || 0);
    if (rate <= 0) return contribution;

    for (const [slotKey, mapping] of Object.entries(ADVISOR_SLOT_MAP)) {
        const advisorData = formation.advisors[slotKey];
        if (!advisorData) continue;

        const generalId = typeof advisorData === 'object' ? advisorData.id : advisorData;
        const general = EMBEDDED_GENERALS_DATA.find(g => g.id === generalId);
        if (!general) continue;

        const starRank = getStarRankFn(general);
        const stats = calcGeneralStats(general, starRank);
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

/**
 * 部隊ステータスをまとめて計算する（メインAPI）
 * @param {Object} formation - 部隊データ
 * @param {Function} getStarRankFn - 武将の星ランク取得関数
 * @param {Object} [advisorConfig] - 参軍設定 { level: 0-10, facilityBonus: 0-0.10 }
 */
function calculateFormationStats(formation, getStarRankFn, advisorConfig) {
    const base = calcFormationBaseStats(formation, getStarRankFn);
    if (!base) return null;

    // 参軍加算
    const advCfg = advisorConfig || { level: 10, facilityBonus: 0 };
    const advisorBonus = calcAdvisorContribution(
        formation, getStarRankFn, advCfg.level, advCfg.facilityBonus
    );

    // 技能加算
    let pctBonuses = { attack: 0, defense: 0, intelligence: 0, hp: 0 };
    let fixBonuses = { attack: 0, defense: 0, intelligence: 0 };

    if (typeof buildAllEntries === 'function') {
        try {
            const { allEntries, fmtCtx } = buildAllEntries(formation, getStarRankFn);
            const bonuses = collectSkillStatBonuses(allEntries, fmtCtx);
            pctBonuses = bonuses.pctBonuses;
            fixBonuses = bonuses.fixBonuses;
        } catch (e) {
            console.warn('技能加算エラー:', e);
        }
    }

    // 基礎 + 参軍を合算してから技能%を適用
    const baseWithAdvisor = {
        attack: base.attack + advisorBonus.attack,
        defense: base.defense + advisorBonus.defense,
        intelligence: base.intelligence + advisorBonus.intelligence,
    };

    return {
        // 基礎（天賦×将星＋陣形反映率のみ）
        base: {
            attack: base.attack,
            defense: base.defense,
            intelligence: base.intelligence,
        },
        // 参軍加算
        advisor: advisorBonus,
        // 技能加算後（基礎+参軍 に技能%適用 + 固定値）
        withSkills: {
            attack: Math.floor(baseWithAdvisor.attack * (1 + pctBonuses.attack)) + fixBonuses.attack,
            defense: Math.floor(baseWithAdvisor.defense * (1 + pctBonuses.defense)) + fixBonuses.defense,
            intelligence: Math.floor(baseWithAdvisor.intelligence * (1 + pctBonuses.intelligence)) + fixBonuses.intelligence,
        },
        // 技能ボーナス詳細
        bonuses: { pct: pctBonuses, fix: fixBonuses },
        // メンバー個別ステータス
        memberStats: base.memberStats,
        // 陣形情報
        formationName: base.formationName,
        rates: base.rates,
    };
}
