// 武将データ統合
const EMBEDDED_GENERALS_DATA = [
    ...LR_GENERALS_DATA,
    ...UR_GENERALS_DATA,
    ...SSR_GENERALS_DATA,
    ...SR_GENERALS_DATA,
    ...R_GENERALS_DATA
];

console.log('武将データ読み込み完了:', EMBEDDED_GENERALS_DATA.length, '名');
