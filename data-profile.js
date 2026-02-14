// data-profile.js — プロファイルデータ管理モジュール
// 研究・調査・軍馬のマスタデータとlocalStorage管理
// 依存: SKILL_DB (data-skill-db.js), RESEARCH_DATA/RESEARCH_FIELDS (data-research.js)

// === 調査（異民族）マスタ ===
// 6民族、各3-4技能。SKILL_DB の source='調査DB' から自動解決

const INVESTIGATION_TRIBES = [
    { id: 'qiang',   name: '羌族',  skills: ['羌剛力', '羌呼応', '羌敏活', '羌連進'] },
    { id: 'xianbei', name: '鮮卑',  skills: ['鮮卑呼応', '鮮卑攻城', '鮮卑勢砕'] },
    { id: 'wuhuan',  name: '烏桓',  skills: ['烏桓剛力', '烏桓呼応', '烏桓神速', '烏桓先迅'] },
    { id: 'nanman',  name: '南蛮',  skills: ['南蛮剛力', '南蛮呼応', '南蛮不屈', '南蛮堅忍'] },
    { id: 'wuxi',    name: '五渓',  skills: ['五渓剛力', '五渓呼応', '五渓豪傑', '五渓乱撃'] },
    { id: 'shanyue', name: '山越',  skills: ['山越剛力', '山越呼応', '山越堅実', '山越防護'] },
];

// === 軍馬マスタ ===

// 毛色ステータスボーナス
const HORSE_COATS = {
    '青毛': { attack: 120, defense: 0,   intelligence: 0 },
    '鹿毛': { attack: 0,   defense: 180, intelligence: 0 },
    '白毛': { attack: 0,   defense: 0,   intelligence: 120 },
};

// 軍馬技能（13系統）
// unitDependent: trueの場合、部隊の兵科に応じて「系統・騎」「系統・歩」「系統・弓」を選択
const HORSE_SKILL_SYSTEMS = [
    { id: 'daiko',       name: '大固',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'yuei',        name: '勇叡',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'sokugeki',    name: '速撃',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'gouketsu',    name: '豪傑',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'rekisen',     name: '歴戦',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'kanshou',     name: '緩衝',     unitDependent: true,  suffixes: ['騎', '歩', '弓'] },
    { id: 'kakumetsu',   name: '拡滅',     unitDependent: false, suffixes: ['騎'], note: '騎兵のみ' },
    { id: 'makigeki',    name: '巻撃軽減', unitDependent: false, suffixes: null },
    { id: 'boeikidou',   name: '防衛機動', unitDependent: false, suffixes: null },
    { id: 'yoshohakai',  name: '要所破壊', unitDependent: false, suffixes: null },
    { id: 'boeijinkatsu', name: '防衛迅活', unitDependent: false, suffixes: null },
    { id: 'toshihakai',  name: '都市破壊', unitDependent: false, suffixes: null },
    { id: 'tekishubouge', name: '敵守防撃', unitDependent: false, suffixes: null },
];

// 名馬データ
const MEIBA_DATA = {
    '絶影': {
        skillName: '絶影',
        maxSkillLevel: 3, // Ⅲまで
        starRankToSkillLevel: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3 },
        stats: {
            0: { attack:  60, defense:  90, intelligence:  45, mobility: 0 },
            1: { attack:  77, defense: 116, intelligence:  58, mobility: 2 },
            2: { attack:  94, defense: 142, intelligence:  71, mobility: 2 },
            3: { attack: 111, defense: 167, intelligence:  84, mobility: 2 },
            4: { attack: 128, defense: 192, intelligence:  96, mobility: 4 },
            5: { attack: 145, defense: 218, intelligence: 109, mobility: 4 },
            6: { attack: 162, defense: 244, intelligence: 122, mobility: 4 },
            7: { attack: 180, defense: 270, intelligence: 135, mobility: 6 },
        },
    },
};

// === 研究 専攻カテゴリ ===

const RESEARCH_SPECIALIZATION_CATEGORIES = [
    { id: 'city',   label: '都市運営', options: ['都市開発', '都市軍備', '都市防衛'] },
    { id: 'troop',  label: '部隊運用', options: ['歩兵術', '弓兵術', '騎兵術'] },
    { id: 'fourth', label: '特化戦術', options: ['君主護衛', '君主相対', '要地攻防'] },
];

// === デフォルトプロファイル構造 ===

function createDefaultProfileData() {
    return {
        research: {
            specializations: {
                city: '都市開発',
                troop: '歩兵術',
                fourth: '君主護衛',
            },
            items: {},
        },
        investigation: {},
        horses: [
            { coat: '青毛', isMeiba: false, meibaName: null, meibaStarRank: 0,
              skills: [{ name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }] },
            { coat: '鹿毛', isMeiba: false, meibaName: null, meibaStarRank: 0,
              skills: [{ name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }] },
            { coat: '白毛', isMeiba: false, meibaName: null, meibaStarRank: 0,
              skills: [{ name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }] },
        ],
    };
}

// === localStorage管理 ===

const PROFILE_STORAGE_KEY = 'hadou-profile';

function loadProfileFromStorage() {
    try {
        const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // デフォルト値とマージ（新フィールド追加時の後方互換性）
            const defaults = createDefaultProfileData();
            return {
                research: { ...defaults.research, ...parsed.research,
                    specializations: { ...defaults.research.specializations, ...(parsed.research?.specializations || {}) },
                    items: parsed.research?.items || {},
                },
                investigation: parsed.investigation || {},
                horses: parsed.horses || defaults.horses,
            };
        }
    } catch (e) {
        console.warn('プロファイル読込エラー:', e);
    }
    return createDefaultProfileData();
}

function saveProfileToStorage(data) {
    try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('プロファイル保存エラー:', e);
        alert('プロファイルの保存に失敗しました。ストレージ容量を確認してください。');
    }
}

// === ヘルパー関数 ===

/**
 * 軍馬技能名をSKILL_DBのキーに変換する
 * 兵科依存の場合は部隊の兵科に基づいて「系統・兵科」形式にする
 */
function resolveHorseSkillName(skillSystemName, unitType) {
    const system = HORSE_SKILL_SYSTEMS.find(s => s.name === skillSystemName);
    if (!system) return skillSystemName;

    if (system.suffixes === null) {
        // 兵科非依存（巻撃軽減等）
        return skillSystemName;
    }

    // 兵科マッピング
    const unitMap = { '馬': '騎', '槍': '歩', '弓': '弓' };
    const suffix = unitMap[unitType];
    if (!suffix) return `${skillSystemName}・騎`; // デフォルト

    // 拡滅は騎のみ
    if (system.id === 'kakumetsu' && suffix !== '騎') return null;

    return `${skillSystemName}・${suffix}`;
}

/**
 * 3頭の軍馬技能を合算する（累積上限Ⅹ=10）
 * @returns {Object} { skillName: totalLevel } — SKILL_DB用の実名（兵科付き）
 */
function aggregateHorseSkills(horses, unitType) {
    const totals = {};

    for (const horse of horses) {
        if (!horse) continue;
        for (const skill of (horse.skills || [])) {
            if (!skill.name || skill.level <= 0) continue;

            const resolved = resolveHorseSkillName(skill.name, unitType);
            if (!resolved) continue;

            totals[resolved] = Math.min((totals[resolved] || 0) + skill.level, 10);
        }
        // 名馬技能
        if (horse.isMeiba && horse.meibaName) {
            const meiba = MEIBA_DATA[horse.meibaName];
            if (meiba) {
                const skillLv = meiba.starRankToSkillLevel[horse.meibaStarRank] || 0;
                if (skillLv > 0) {
                    totals[meiba.skillName] = Math.min((totals[meiba.skillName] || 0) + skillLv, meiba.maxSkillLevel);
                }
            }
        }
    }

    return totals;
}

/**
 * 毛色 + 名馬のステータスボーナス合計を計算する
 */
function calcHorseStatBonuses(horses) {
    const bonus = { attack: 0, defense: 0, intelligence: 0, mobility: 0 };

    for (const horse of horses) {
        if (!horse) continue;

        if (horse.isMeiba && horse.meibaName) {
            // 名馬ステータス
            const meiba = MEIBA_DATA[horse.meibaName];
            if (meiba) {
                const stats = meiba.stats[horse.meibaStarRank] || meiba.stats[0];
                bonus.attack += stats.attack;
                bonus.defense += stats.defense;
                bonus.intelligence += stats.intelligence;
                bonus.mobility += stats.mobility;
            }
            // 名馬にも毛色ステータスがある
            if (horse.coat && HORSE_COATS[horse.coat]) {
                const coat = HORSE_COATS[horse.coat];
                bonus.attack += coat.attack;
                bonus.defense += coat.defense;
                bonus.intelligence += coat.intelligence;
            }
        } else if (horse.coat) {
            // 通常馬: 毛色ステータスのみ
            const coat = HORSE_COATS[horse.coat];
            if (coat) {
                bonus.attack += coat.attack;
                bonus.defense += coat.defense;
                bonus.intelligence += coat.intelligence;
            }
        }
    }

    return bonus;
}

/**
 * 研究の有効項目一覧を取得する
 * 専攻選択に基づいてM研究 + 専攻中の分野の研究を返す
 */
function getActiveResearchItems(profileResearch) {
    if (!profileResearch || typeof RESEARCH_DATA === 'undefined') return [];

    const specs = profileResearch.specializations || {};
    const activeFields = new Set([
        '序論', // 常時有効
        specs.city,
        specs.troop,
        specs.fourth,
    ].filter(Boolean));

    const active = [];
    for (const item of RESEARCH_DATA) {
        const isMaster = item.rarity === 'Ｍ';
        const fieldActive = activeFields.has(item.field);

        if (isMaster || fieldActive) {
            const key = `${item.field}:${item.name}:${item.effect || ''}`;
            const saved = (profileResearch.items || {})[key];
            active.push({
                ...item,
                key,
                unlocked: saved?.unlocked || false,
                value: saved?.value || 0,
                isMaster,
                fieldActive,
            });
        }
    }

    return active;
}

/**
 * 研究の合計ボーナスを計算する
 * @returns {Object} { attack: X, defense: Y, intelligence: Z, hp: W, ... }
 */
function calcResearchBonuses(profileResearch) {
    const bonuses = {};
    const activeItems = getActiveResearchItems(profileResearch);

    for (const item of activeItems) {
        if (!item.unlocked || !item.value) continue;
        const effect = item.effect;
        if (effect) {
            bonuses[effect] = (bonuses[effect] || 0) + item.value;
        }
    }

    return bonuses;
}

/**
 * 調査のボーナスを計算する（SKILL_DBの効果値を使用）
 */
function calcInvestigationBonuses(investigationData) {
    if (!investigationData || typeof SKILL_DB === 'undefined') return {};

    const LEVEL_KEY_MAP = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };
    const bonuses = {};

    for (const tribe of INVESTIGATION_TRIBES) {
        for (const skillName of tribe.skills) {
            const level = investigationData[skillName] || 0;
            if (level <= 0) continue;

            const skillData = SKILL_DB[skillName];
            if (!skillData) continue;

            for (const eff of skillData.effects) {
                if (eff.type2 === '所持') continue;
                const lvKey = LEVEL_KEY_MAP[Math.min(level, 5)];
                const val = eff.levels?.[lvKey];
                if (val == null) continue;

                const key = `${eff.effect}:${eff.type2}`;
                bonuses[key] = (bonuses[key] || 0) + val;
            }
        }
    }

    return bonuses;
}
