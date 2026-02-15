// data-research.js — 研究データ（自動生成）
// 生成元: 覇道DB.xlsx 研究シート
// 140件

// 専攻カテゴリ構造
const RESEARCH_FIELDS = {
    "序論": { category: "序論", choices: ["序論"], fixed: true },
    "都市運営": { category: "都市運営", choices: ["都市開発", "都市軍備", "都市防衛"] },
    "部隊運用": { category: "部隊運用", choices: ["歩兵術", "弓兵術", "騎兵術"] },
    "第4枠": { category: "第4枠", choices: ["君主護衛", "君主相対", "要地攻防"] },
};

// 研究項目データ
const RESEARCH_DATA = [
    {
        id: 5000, no: 1, name: "偵察強化",
        isMaster: true, field: "序論", category: "—",
        maxValue: null, maxLevel: 1,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "偵察", condition: "常に", levels: null}
        ]
    },
    {
        id: 5001, no: 2, name: "兵糧生産量",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "生産", condition: "常に", levels: null}
        ]
    },
    {
        id: 5002, no: 3, name: "陣形解放",
        isMaster: true, field: "序論", category: "—",
        maxValue: null, maxLevel: 1,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5003, no: 4, name: "鉄鉱生産量",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "鉄鉱", condition: "常に", levels: null}
        ]
    },
    {
        id: 5004, no: 5, name: "木材生産量",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "木材", condition: "常に", levels: null}
        ]
    },
    {
        id: 5005, no: 6, name: "石材生産量",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "石材", condition: "常に", levels: null}
        ]
    },
    {
        id: 5006, no: 7, name: "倉庫拡張",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "倉庫", condition: "常に", levels: null},
            {type2: "基礎", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5007, no: 8, name: "軍事府強化",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "物理攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "知力防御", condition: "常に", levels: null},
            {type2: "基礎", effect: "物理攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "知力防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5008, no: 9, name: "部隊防御",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null},
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5009, no: 10, name: "取引強化",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "取引", condition: "常に", levels: null}
        ]
    },
    {
        id: 5010, no: 11, name: "兵舎速度",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5011, no: 12, name: "兵士収容",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5012, no: 13, name: "部隊攻撃",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5013, no: 14, name: "城壁耐久",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5014, no: 15, name: "銅銭徴収量",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null},
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null},
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null}
        ]
    },
    {
        id: 5015, no: 16, name: "城壁耐久・特①",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.3, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5016, no: 17, name: "部隊機動",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5017, no: 18, name: "城壁修復資源①",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.15, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5018, no: 19, name: "城壁耐久・特②",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.3, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5019, no: 20, name: "城壁耐久・特③",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.3, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5020, no: 21, name: "都市攻撃妨害",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.2, maxLevel: 1,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", condition: "常に", levels: null}
        ]
    },
    {
        id: 5021, no: 22, name: "城壁修復資源②",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5022, no: 23, name: "城壁修復資源③",
        isMaster: true, field: "序論", category: "—",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5023, no: 1, name: "城壁修復",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 10, maxLevel: 10,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5024, no: 2, name: "兵舎速度",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5025, no: 3, name: "城壁耐久①",
        isMaster: true, field: "都市開発", category: "都市運営",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5026, no: 4, name: "兵士収容",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5027, no: 5, name: "防御陣",
        isMaster: true, field: "都市開発", category: "都市運営",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5028, no: 6, name: "城壁耐久②",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5029, no: 7, name: "部隊防御",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5030, no: 8, name: "資源生産上限",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.3, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5031, no: 9, name: "銅銭生産上限",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.3, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null}
        ]
    },
    {
        id: 5032, no: 10, name: "城壁防御",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "物理防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5033, no: 11, name: "軍事府強化",
        isMaster: true, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5034, no: 12, name: "部隊知力",
        isMaster: true, field: "都市開発", category: "都市運営",
        maxValue: 0.05, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5035, no: 13, name: "銅銭徴収量",
        isMaster: true, field: "都市開発", category: "都市運営",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null}
        ]
    },
    {
        id: 5036, no: 14, name: "都市駐屯",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5037, no: 15, name: "駐屯機動",
        isMaster: false, field: "都市開発", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5038, no: 1, name: "都市駐屯①",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5039, no: 2, name: "駐屯攻撃",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5040, no: 3, name: "駐屯知力",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5041, no: 4, name: "駐屯対騎防御",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "対騎兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5042, no: 5, name: "駐屯会心",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.05, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "会心発生", condition: "常に", amount: "最大5%", levels: null}
        ]
    },
    {
        id: 5043, no: 6, name: "迎撃陣",
        isMaster: true, field: "都市軍備", category: "都市運営",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5044, no: 7, name: "駐屯死傷軽減",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "負傷兵", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5045, no: 8, name: "駐屯防御",
        isMaster: true, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5046, no: 9, name: "駐屯対歩防御",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "対歩兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5047, no: 10, name: "駐屯対弓防御",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "対弓兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5048, no: 11, name: "都市駐屯②",
        isMaster: true, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5049, no: 12, name: "拠点駐屯",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "駐屯", condition: "常に", levels: null}
        ]
    },
    {
        id: 5050, no: 13, name: "兵士収容",
        isMaster: true, field: "都市軍備", category: "都市運営",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5051, no: 14, name: "駐屯戦法連鎖",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.02, maxLevel: 10,
        target: "駐屯部隊",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", levels: null}
        ]
    },
    {
        id: 5052, no: 15, name: "駐屯機動",
        isMaster: false, field: "都市軍備", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5053, no: 1, name: "城壁耐久①",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5054, no: 2, name: "軍事府強化①",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5055, no: 3, name: "城壁修復",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 10, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5056, no: 4, name: "城壁防御①",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5057, no: 5, name: "都市反撃威力",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "自都市", condition: "常に", amount: "最大100%", levels: null}
        ]
    },
    {
        id: 5058, no: 6, name: "防衛陣",
        isMaster: true, field: "都市防衛", category: "都市運営",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5059, no: 7, name: "城壁修復資源①",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5060, no: 8, name: "城壁耐久②",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5061, no: 9, name: "軍事府強化②",
        isMaster: true, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5062, no: 10, name: "城壁防御②",
        isMaster: true, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5063, no: 11, name: "資源保護量",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5064, no: 12, name: "毒矢反撃",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.3, maxLevel: 10,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: null, condition: "常に", levels: null}
        ]
    },
    {
        id: 5065, no: 13, name: "都市反撃速度",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.25, maxLevel: 10,
        target: "非戦闘",
        effects: [
            {type2: "パラメータ", effect: "自都市攻撃速度", condition: "常に", levels: null}
        ]
    },
    {
        id: 5066, no: 14, name: "緊急都市防衛",
        isMaster: false, field: "都市防衛", category: "都市運営",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5067, no: 15, name: "城壁修復資源②",
        isMaster: true, field: "都市防衛", category: "都市運営",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5068, no: 1, name: "歩兵兵力",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5069, no: 2, name: "歩兵機動",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5070, no: 3, name: "歩兵対物",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5071, no: 4, name: "歩兵探索",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5072, no: 5, name: "歩兵輸送",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5073, no: 6, name: "歩兵陣",
        isMaster: true, field: "歩兵術", category: "部隊運用",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5074, no: 7, name: "対騎兵攻撃",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "パラメータ", effect: "対騎兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5075, no: 8, name: "対弓兵防御",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "パラメータ", effect: "対弓兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5076, no: 9, name: "部隊輸送",
        isMaster: true, field: "歩兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5077, no: 10, name: "歩兵攻撃①",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5078, no: 11, name: "歩兵知力",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5079, no: 12, name: "歩兵防御",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5080, no: 13, name: "歩兵攻撃②",
        isMaster: true, field: "歩兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5081, no: 14, name: "歩兵会心",
        isMaster: false, field: "歩兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "歩兵",
        effects: [
            {type2: "パラメータ", effect: "会心発生", condition: "常に", amount: "最大5%", levels: null}
        ]
    },
    {
        id: 5082, no: 1, name: "弓兵兵力",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5083, no: 2, name: "弓兵防御",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5084, no: 3, name: "弓兵攻撃",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5085, no: 4, name: "弓兵輸送",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5086, no: 5, name: "弓兵機動",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5087, no: 6, name: "弓兵陣",
        isMaster: true, field: "弓兵術", category: "部隊運用",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5088, no: 7, name: "弓兵知力①",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5089, no: 8, name: "対歩兵攻撃",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "パラメータ", effect: "対歩兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5090, no: 9, name: "弓兵探索",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5091, no: 10, name: "対騎兵防御",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "パラメータ", effect: "対騎兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5092, no: 11, name: "弓兵知力②",
        isMaster: true, field: "弓兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5093, no: 12, name: "弓兵対物",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5094, no: 13, name: "部隊探索",
        isMaster: true, field: "弓兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5095, no: 14, name: "弓兵攻撃速度",
        isMaster: false, field: "弓兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "弓兵",
        effects: [
            {type2: "パラメータ", effect: "攻撃速度", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5096, no: 1, name: "騎兵兵力",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5097, no: 2, name: "騎兵輸送",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5098, no: 3, name: "騎兵防御①",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5099, no: 4, name: "騎兵機動",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5100, no: 5, name: "騎兵陣",
        isMaster: true, field: "騎兵術", category: "部隊運用",
        maxValue: "Lv+10", maxLevel: 10,
        target: "陣形フラグ",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5101, no: 6, name: "対歩兵防御",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "パラメータ", effect: "対歩兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5102, no: 7, name: "対弓兵攻撃",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "パラメータ", effect: "対弓兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5103, no: 8, name: "騎兵探索",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5104, no: 9, name: "騎兵死傷軽減",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "パラメータ", effect: "負傷兵", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5105, no: 10, name: "騎兵攻撃",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5106, no: 11, name: "騎兵知力",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5107, no: 12, name: "騎兵対物",
        isMaster: false, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5108, no: 13, name: "部隊機動",
        isMaster: true, field: "騎兵術", category: "部隊運用",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5109, no: 14, name: "騎兵防御②",
        isMaster: true, field: "騎兵術", category: "部隊運用",
        maxValue: 0.05, maxLevel: 30,
        target: "騎兵",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5110, no: 1, name: "城壁防御",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5111, no: 2, name: "急襲部隊",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "飛ばし部隊",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5112, no: 3, name: "都市要塞化",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5113, no: 4, name: "警戒態勢",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.05, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5114, no: 5, name: "逆境戦術",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "飛ばし部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5115, no: 6, name: "都市反撃威力",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5116, no: 7, name: "城壁耐久・大①",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5117, no: 8, name: "部隊転戦",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "即時効果", effect: "即時回復", condition: "常に", levels: null}
        ]
    },
    {
        id: 5118, no: 9, name: "城壁耐久・大②",
        isMaster: false, field: "君主相対", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5119, no: 10, name: "軍事府強化",
        isMaster: true, field: "君主相対", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5120, no: 1, name: "軍事府強化",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5121, no: 2, name: "都市駐屯",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5122, no: 3, name: "駐屯保護",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.3, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5123, no: 4, name: "警戒態勢",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.05, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5124, no: 5, name: "駐屯機動",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5125, no: 6, name: "都市要塞化",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "防衛要素",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5126, no: 7, name: "城壁耐久・大①",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5127, no: 8, name: "攻城保護",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.5, maxLevel: 30,
        target: "その他",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5128, no: 9, name: "城壁耐久・大②",
        isMaster: false, field: "要地攻防", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5129, no: 10, name: "城壁防御",
        isMaster: true, field: "要地攻防", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5130, no: 1, name: "警戒態勢①",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.05, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5131, no: 2, name: "兵器修理軽減",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "兵器修理軽減", condition: "常に", levels: null}
        ]
    },
    {
        id: 5132, no: 3, name: "駐屯機動",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5133, no: 4, name: "鼓車強化",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 1, maxLevel: 30,
        target: "その他",
        effects: [
            {type2: "基礎", effect: "基礎", effectx: "鼓車", condition: "常に", levels: null}
        ]
    },
    {
        id: 5134, no: 5, name: "木牛強化",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 30000, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "基礎", effectx: "木牛", condition: "常に", levels: null}
        ]
    },
    {
        id: 5135, no: 6, name: "部隊輸送",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.05, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5136, no: 7, name: "部隊機動",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "全部隊",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5137, no: 8, name: "迎撃準備",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.1, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "基礎", effect: "即時戦法", effectx: "即時戦法", condition: "常に", levels: null}
        ]
    },
    {
        id: 5138, no: 9, name: "警戒態勢②",
        isMaster: false, field: "君主護衛", category: "特化戦術",
        maxValue: 0.05, maxLevel: 30,
        target: "駐屯部隊",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5139, no: 10, name: "倉庫拡張",
        isMaster: true, field: "君主護衛", category: "特化戦術",
        maxValue: 0.2, maxLevel: 30,
        target: "非戦闘",
        effects: [
            {type2: "内政", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
];
