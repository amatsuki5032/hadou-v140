// data-research.js — 研究データ（自動生成）
// 生成元: 覇道DB.xlsx 研究シート
// 91件（効果行: 134行）

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
        id: 5000, name: "陣形解放",
        isMaster: true, field: "序論",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5001, name: "鉄鉱生産量",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "鉄鉱", condition: "常に", levels: null}
        ]
    },
    {
        id: 5002, name: "木材生産量",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "木材", condition: "常に", levels: null}
        ]
    },
    {
        id: 5003, name: "石材生産量",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "石材", condition: "常に", levels: null}
        ]
    },
    {
        id: 5004, name: "倉庫拡張",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "倉庫", condition: "常に", levels: null},
            {type2: "基礎", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5005, name: "軍事府強化",
        isMaster: true, field: "序論",
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
        id: 5006, name: "部隊防御",
        isMaster: true, field: "序論",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null},
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5007, name: "取引強化",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "取引", condition: "常に", levels: null}
        ]
    },
    {
        id: 5008, name: "兵舎速度",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5009, name: "兵士収容",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null},
            {type2: "基礎", effect: "兵舎", condition: "常に", levels: null}
        ]
    },
    {
        id: 5010, name: "部隊攻撃",
        isMaster: true, field: "序論",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5011, name: "城壁耐久",
        isMaster: true, field: "序論",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5012, name: "銅銭徴収量",
        isMaster: true, field: "序論",
        effects: [
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null},
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null},
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null}
        ]
    },
    {
        id: 5013, name: "部隊機動",
        isMaster: true, field: "序論",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5016, name: "城壁修復",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null}
        ]
    },
    {
        id: 5020, name: "防御陣",
        isMaster: true, field: "都市開発",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5023, name: "資源生産上限",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "内政", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5024, name: "銅銭生産上限",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "内政", effect: "銅銭", condition: "常に", levels: null}
        ]
    },
    {
        id: 5025, name: "城壁防御",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "城壁", condition: "常に", levels: null},
            {type2: "基礎", effect: "物理防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5027, name: "部隊知力",
        isMaster: true, field: "都市開発",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5029, name: "都市駐屯",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5030, name: "駐屯機動",
        isMaster: false, field: "都市開発",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5032, name: "駐屯攻撃",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5033, name: "駐屯知力",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5034, name: "駐屯対騎防御",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "対騎兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5035, name: "駐屯会心",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "会心発生", condition: "常に", amount: "最大5%", levels: null}
        ]
    },
    {
        id: 5036, name: "迎撃陣",
        isMaster: true, field: "都市軍備",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5037, name: "駐屯死傷軽減",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "負傷兵", condition: "常に", amount: "最大10%", levels: {"Ⅰ": 10}}
        ]
    },
    {
        id: 5038, name: "駐屯防御",
        isMaster: true, field: "都市軍備",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5039, name: "駐屯対歩防御",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "対歩兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5040, name: "駐屯対弓防御",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "対弓兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5042, name: "拠点駐屯",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "パラメータ", effect: "駐屯", condition: "常に", levels: null}
        ]
    },
    {
        id: 5044, name: "駐屯戦法連鎖",
        isMaster: false, field: "都市軍備",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", levels: null}
        ]
    },
    {
        id: 5050, name: "都市反撃威力",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "自都市", condition: "常に", amount: "最大100%", levels: null}
        ]
    },
    {
        id: 5051, name: "防衛陣",
        isMaster: true, field: "都市防衛",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5052, name: "城壁修復資源",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "基礎", effect: null, condition: "常に", levels: null},
            {type2: "基礎", effect: null, condition: "常に", levels: null}
        ]
    },
    {
        id: 5056, name: "資源保護量",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "基礎", effect: "倉庫", condition: "常に", levels: null}
        ]
    },
    {
        id: 5057, name: "毒矢反撃",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "基礎", effect: null, condition: "常に", levels: null}
        ]
    },
    {
        id: 5058, name: "都市反撃速度",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "パラメータ", effect: "自都市攻撃速度", condition: "常に", levels: null}
        ]
    },
    {
        id: 5059, name: "緊急都市防衛",
        isMaster: false, field: "都市防衛",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5061, name: "歩兵兵力",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5062, name: "歩兵機動",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5063, name: "歩兵対物",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5064, name: "歩兵探索",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5065, name: "歩兵輸送",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5066, name: "歩兵陣",
        isMaster: true, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5067, name: "対騎兵攻撃",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "パラメータ", effect: "対騎兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5068, name: "対弓兵防御",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "パラメータ", effect: "対弓兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5069, name: "部隊輸送",
        isMaster: true, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null},
            {type2: "基礎", effect: "基礎", effectx: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5070, name: "歩兵攻撃",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null},
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5071, name: "歩兵知力",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5072, name: "歩兵防御",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5074, name: "歩兵会心",
        isMaster: false, field: "歩兵術",
        effects: [
            {type2: "パラメータ", effect: "会心発生", condition: "常に", amount: "最大5%", levels: null}
        ]
    },
    {
        id: 5075, name: "弓兵兵力",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5076, name: "弓兵防御",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5077, name: "弓兵攻撃",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5078, name: "弓兵輸送",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5079, name: "弓兵機動",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5080, name: "弓兵陣",
        isMaster: true, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5081, name: "弓平知力",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5082, name: "対歩兵攻撃",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "パラメータ", effect: "対歩兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5083, name: "弓兵探索",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5084, name: "対騎兵防御",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "パラメータ", effect: "対騎兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5085, name: "弓兵知力",
        isMaster: true, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5086, name: "弓兵対物",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5087, name: "部隊探索",
        isMaster: true, field: "弓兵術",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5088, name: "弓兵攻撃速度",
        isMaster: false, field: "弓兵術",
        effects: [
            {type2: "パラメータ", effect: "攻撃速度", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5089, name: "騎兵兵力",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "兵力", condition: "常に", amount: "最大10%", levels: null}
        ]
    },
    {
        id: 5090, name: "騎兵輸送",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "輸送", condition: "常に", levels: null}
        ]
    },
    {
        id: 5091, name: "騎兵防御",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "防御", condition: "常に", levels: null},
            {type2: "基礎", effect: "防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5092, name: "騎兵機動",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5093, name: "騎兵陣",
        isMaster: true, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "陣形開放", condition: "常に", levels: null}
        ]
    },
    {
        id: 5094, name: "対歩兵防御",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "パラメータ", effect: "対歩兵防御", condition: "常に", levels: null}
        ]
    },
    {
        id: 5095, name: "対弓兵攻撃",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "パラメータ", effect: "対弓兵攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5096, name: "騎兵探索",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "探索", condition: "常に", levels: null}
        ]
    },
    {
        id: 5097, name: "騎兵死傷軽減",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "パラメータ", effect: "負傷兵", condition: "常に", amount: "最大10%", levels: {"Ⅰ": 10}}
        ]
    },
    {
        id: 5098, name: "騎兵攻撃",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", levels: null}
        ]
    },
    {
        id: 5099, name: "騎兵知力",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "知力", condition: "常に", levels: null}
        ]
    },
    {
        id: 5100, name: "騎兵対物",
        isMaster: false, field: "騎兵術",
        effects: [
            {type2: "基礎", effect: "対物", condition: "常に", levels: null}
        ]
    },
    {
        id: 5104, name: "急襲部隊",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "パラメータ", effect: "機動", condition: "常に", levels: null}
        ]
    },
    {
        id: 5105, name: "都市要塞化",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "自都市", condition: "常に", levels: null}
        ]
    },
    {
        id: 5106, name: "警戒態勢",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5107, name: "逆境戦術",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5108, name: "城壁耐久・大",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "基礎", effect: "自都市耐久", condition: "常に", levels: null},
            {type2: "基礎", effect: "自都市耐久", condition: "常に", levels: null},
            {type2: "基礎", effect: "自都市耐久", condition: "常に", levels: null},
            {type2: "基礎", effect: "自都市耐久", condition: "常に", levels: null}
        ]
    },
    {
        id: 5109, name: "部隊転戦",
        isMaster: false, field: "君主相対",
        effects: [
            {type2: "即時効果", effect: "即時回復", condition: "常に", levels: null}
        ]
    },
    {
        id: 5113, name: "駐屯保護",
        isMaster: false, field: "要地攻防",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5118, name: "攻城保護",
        isMaster: false, field: "要地攻防",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "被害", condition: "常に", levels: null}
        ]
    },
    {
        id: 5122, name: "兵器修理軽減",
        isMaster: false, field: "君主護衛",
        effects: [
            {type2: "基礎", effect: "兵器修理軽減", condition: "常に", levels: null}
        ]
    },
    {
        id: 5124, name: "鼓車強化",
        isMaster: false, field: "君主護衛",
        effects: [
            {type2: "基礎", effect: "基礎", effectx: "鼓車", condition: "常に", levels: null}
        ]
    },
    {
        id: 5125, name: "木牛強化",
        isMaster: false, field: "君主護衛",
        effects: [
            {type2: "基礎", effect: "基礎", effectx: "木牛", condition: "常に", levels: null}
        ]
    },
    {
        id: 5128, name: "迎撃準備",
        isMaster: false, field: "君主護衛",
        effects: [
            {type2: "基礎", effect: "即時戦法", effectx: "即時戦法", condition: "常に", levels: null}
        ]
    },
];