// data-survey.js — 調査（異民族）データ（自動生成）
// 生成元: 覇道DB.xlsx 調査シート
// 23件（効果行: 33行）

const SURVEY_DATA = [
    {
        id: 6000, name: "羌剛力",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6001, name: "羌呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6002, name: "羌敏活",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "戦法速度", condition: "常に", amount: "最大15%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.04, "Ⅲ": 0.07, "Ⅳ": 0.1, "Ⅴ": 0.15}}
        ]
    },
    {
        id: 6003, name: "鮮卑呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6004, name: "鮮卑攻城",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "対物特攻", condition: "常に", levels: {"Ⅰ": 0.02, "Ⅱ": 0.09, "Ⅲ": 0.15, "Ⅳ": 0.22, "Ⅴ": 0.3}}
        ]
    },
    {
        id: 6005, name: "烏桓剛力",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6006, name: "烏桓呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6007, name: "烏桓神速",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "機動", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6008, name: "南蛮剛力",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6009, name: "南蛮呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6010, name: "南蛮不屈",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "防御", condition: "常に", amount: "最大50%", levels: {"Ⅰ": 0.035, "Ⅱ": 0.15, "Ⅲ": 0.24, "Ⅳ": 0.36, "Ⅴ": 0.5}}
        ]
    },
    {
        id: 6011, name: "五渓剛力",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6012, name: "五渓呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6013, name: "五渓豪傑",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "会心威力", condition: "常に", amount: "最大50%", levels: {"Ⅰ": 0.035, "Ⅱ": 0.15, "Ⅲ": 0.24, "Ⅳ": 0.36, "Ⅴ": 0.5}}
        ]
    },
    {
        id: 6014, name: "山越剛力",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "攻撃", condition: "常に", amount: "最大25%", levels: {"Ⅰ": 0.03, "Ⅱ": 0.07, "Ⅲ": 0.12, "Ⅳ": 0.18, "Ⅴ": 0.25}}
        ]
    },
    {
        id: 6015, name: "山越呼応",
        minRank: "III以上",
        effects: [
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持している副将の連鎖確率", amount: "最大5%", levels: {"Ⅰ": 0.01, "Ⅱ": 0.02, "Ⅲ": 0.03, "Ⅳ": 0.04, "Ⅴ": 0.05}},
            {type2: "基礎", effect: "連鎖確率", condition: "常に", condition2: "技能を所持していない武将の連鎖確率", amount: "最大2.5%", levels: {"Ⅰ": 0.005, "Ⅱ": 0.01, "Ⅲ": 0.015, "Ⅳ": 0.02, "Ⅴ": 0.025}}
        ]
    },
    {
        id: 6016, name: "山越堅実",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "負傷兵", condition: "常に", amount: "最大50%", levels: {"Ⅰ": 0.05, "Ⅱ": 0.14, "Ⅲ": 0.2, "Ⅳ": 0.3, "Ⅴ": 0.5}}
        ]
    },
    {
        id: 6017, name: "羌連進",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "戦法", condition: "常に", amount: "最大+20%", levels: null}
        ]
    },
    {
        id: 6018, name: "鮮卑勢砕",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "通常攻撃", condition: "常に", condition2: "自部隊の現在兵力に応じて", amount: "最大+10%", levels: null},
            {type2: "パラメータ", effect: "与ダメージ", effectx: "戦法", condition: "常に", condition2: "自部隊の現在兵力に応じて", amount: "最大+10%", levels: null}
        ]
    },
    {
        id: 6019, name: "烏桓先迅",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "通常攻撃", condition: "常に", condition2: "自部隊より低機動の敵部隊", amount: "最大10%", levels: {"Ⅰ": -0.1}},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "戦法", condition: "常に", condition2: "自部隊より低機動の敵部隊", amount: "最大10%", levels: {"Ⅰ": -0.1}}
        ]
    },
    {
        id: 6020, name: "南蛮堅忍",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "戦法", condition: "常に", condition2: "通常攻撃でダメージを受けたとき、次回戦法による被ダメージが2%ずつ累積して減少", amount: "最大-20%", levels: null}
        ]
    },
    {
        id: 6021, name: "五渓乱撃",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "与ダメージ", effectx: "通常攻撃", condition: "常に", condition2: "自部隊より低攻撃の部隊に対する", amount: "最大20%", levels: {"Ⅰ": 0.2}}
        ]
    },
    {
        id: 6022, name: "山越防護",
        minRank: "III以上",
        effects: [
            {type2: "パラメータ", effect: "被ダメージ", effectx: "通常攻撃", condition: "常に", condition2: "弱化効果が発生している敵部隊", amount: "最大20%", levels: {"Ⅰ": -0.2}},
            {type2: "パラメータ", effect: "被ダメージ", effectx: "戦法", condition: "常に", condition2: "弱化効果が発生している敵部隊", amount: "最大20%", levels: {"Ⅰ": -0.2}}
        ]
    },
];