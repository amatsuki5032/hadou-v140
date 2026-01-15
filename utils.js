// ユーティリティ関数群

const FORMATION_TYPES = {
    '基本陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '赤備陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '弓陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '騎陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '防御陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '走陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '防護陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '遠征陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '賢震陣': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '集団': ['主将', '副将1', '副将2', '補佐1', '補佐2'],
    '不抜陣': ['主将', '副将1', '副将2', '補佐1', '補佐2']
};

// 兵科の表示名を変換
function getUnitTypeName(unitType) {
    const unitTypeMap = {
        '馬': '騎兵',
        '槍': '歩兵',
        '弓': '弓兵'
    };
    return unitTypeMap[unitType] || unitType;
}

// 武器種別の表示名を変換
function getWeaponTypeName(weaponType) {
    const weaponTypeMap = {
        '馬': '騎兵',
        '槍': '歩兵',
        '弓': '弓兵',
        '全': '全兵科'
    };
    return weaponTypeMap[weaponType] || weaponType;
}

// 相性値からグループ名を取得
function getAffinityGroup(affinity) {
    if (affinity >= 0 && affinity <= 22) return "董卓";
    if (affinity >= 23 && affinity <= 45) return "曹操";
    if (affinity >= 46 && affinity <= 67) return "劉表";
    if (affinity >= 68 && affinity <= 89) return "劉備";
    if (affinity >= 90 && affinity <= 111) return "袁紹";
    if (affinity >= 112 && affinity <= 133) return "孫権";
    if (affinity >= 134 && affinity <= 155) return "呂布";
    return "その他";
}

// 勢力ごとの色を取得（ゲーム内の相性ゲージに近いグラデーション）
function getAffinityColor(affinity) {
    if (affinity >= 0 && affinity <= 5) return "#708090";
    if (affinity >= 6 && affinity <= 10) return "#5f7d8d";
    if (affinity >= 11 && affinity <= 15) return "#4682b4";
    if (affinity >= 16 && affinity <= 22) return "#6495ed";
    if (affinity >= 23 && affinity <= 28) return "#5499c7";
    if (affinity >= 29 && affinity <= 35) return "#5dade2";
    if (affinity >= 36 && affinity <= 42) return "#7b68ee";
    if (affinity >= 43 && affinity <= 45) return "#9370db";
    if (affinity >= 46 && affinity <= 52) return "#8e44ad";
    if (affinity >= 53 && affinity <= 59) return "#6a4c93";
    if (affinity >= 60 && affinity <= 65) return "#0d5e34";
    if (affinity >= 66 && affinity <= 72) return "#0e6f3d";
    if (affinity >= 73 && affinity <= 78) return "#27ae60";
    if (affinity >= 79 && affinity <= 84) return "#52be80";
    if (affinity >= 85 && affinity <= 89) return "#7dcea0";
    if (affinity >= 90 && affinity <= 95) return "#a9dfbf";
    if (affinity >= 96 && affinity <= 101) return "#f4d03f";
    if (affinity >= 102 && affinity <= 107) return "#f7dc6f";
    if (affinity >= 108 && affinity <= 111) return "#f8c471";
    if (affinity >= 112 && affinity <= 117) return "#f39c12";
    if (affinity >= 118 && affinity <= 122) return "#e74c3c";
    if (affinity >= 123 && affinity <= 128) return "#ec7063";
    if (affinity >= 129 && affinity <= 133) return "#f1948a";
    if (affinity >= 134 && affinity <= 140) return "#f5b7b1";
    if (affinity >= 141 && affinity <= 147) return "#fadbd8";
    if (affinity >= 148 && affinity <= 155) return "#d7bde2";
    return "#7f8c8d";
}

// レア度ごとの色を取得
function getRarityColor(rarity) {
    const colors = {
        'LR': '#a8d8ea',
        'UR': '#ff6b6b',
        'SSR': '#ffd93d',
        'SR': '#c8e6c9',
        'R': '#e0e0e0'
    };
    return colors[rarity] || '#f5f5f5';
}

// 随伴位置のオフセットを取得
function getAttendantPositionOffsets(position) {
    const positionMap = {
        // 新フォーマット
        '前': [[-1, 0]],
        '後': [[1, 0]],
        '左': [[0, -1]],
        '右': [[0, 1]],
        '前左': [[-1, -1]],
        '前右': [[-1, 1]],
        '後左': [[1, -1]],
        '後右': [[1, 1]],
        '前後': [[-1, 0], [1, 0]],
        '左右': [[0, -1], [0, 1]],
        // 旧フォーマット（互換性のため）
        '上': [[-1, 0]],
        '下': [[1, 0]],
        '右上': [[-1, 1]],
        '右下': [[1, 1]],
        '左上': [[-1, -1]],
        '左下': [[1, -1]],
        '上/下': [[-1, 0], [1, 0]],
        '上/左': [[-1, 0], [0, -1]],
        '左/下': [[0, -1], [1, 0]],
        '右/下': [[0, 1], [1, 0]]
    };
    return positionMap[position] || [];
}

// 随伴配置可能性チェック
function canPlaceAttendant(formationType, generalSlot, attendantPosition) {
    const formationData = FORMATIONS_TYPES[formationType];
    if (!formationData) return false;
    const generalCoords = formationData.mapping[generalSlot];
    if (!generalCoords) return false;
    const [generalRow, generalCol] = generalCoords;
    const offsetsList = getAttendantPositionOffsets(attendantPosition);
    
    for (const [rowOffset, colOffset] of offsetsList) {
        const attendantRow = generalRow + rowOffset;
        const attendantCol = generalCol + colOffset;
        if (attendantRow < 0 || attendantRow >= 3 || attendantCol < 0 || attendantCol >= 3) {
            return false;
        }
        // 侍従は配置不可マス（0）に配置される
        if (formationData.positions[attendantRow][attendantCol] !== 0) {
            return false;
        }
    }
    return true;
}
