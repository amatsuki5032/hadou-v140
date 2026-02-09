// 技能発動条件チェッカー
// 覇道DB.xlsx の発動条件（44パターン）を正規化し、編制コンテキストで判定する

/**
 * 相性値の好相性判定（±10以内、循環0-149）
 * @param {number} a - 相性値A
 * @param {number} b - 相性値B
 * @returns {boolean}
 */
function isAffinityGood(a, b) {
    if (a == null || b == null) return false;
    const diff = Math.abs(a - b);
    const circularDiff = Math.min(diff, 150 - diff);
    return circularDiff <= 10;
}

/**
 * 発動条件の正規化テーブル
 * DB上の表記ゆれ（読点有無、誤字等）を吸収して統一コードにマッピング
 */
const CONDITION_NORMALIZE_MAP = {
    // ポジション単純
    '常に': 'ALWAYS',
    '主将の際': 'POS_MAIN',
    '主将か副将の際': 'POS_MAIN_OR_SUB',
    '副将か補佐の際': 'POS_SUB_OR_ADVISOR',
    '副将or補佐': 'POS_SUB_OR_ADVISOR',  // 表記ブレ（傾国）
    '副将の際': 'POS_SUB',
    '主将か副将1の際': 'POS_MAIN_OR_SUB1',
    '主将か副将2の際': 'POS_MAIN_OR_SUB2',

    // 好相性（自身と主将）
    '主将か副将で主将と自身が好相性の際': 'POS_MAIN_OR_SUB_IF_AFFINITY',
    '主将か副将で主将と好相性の際': 'POS_MAIN_OR_SUB_IF_AFFINITY',
    '主将か主将と自身が好相性の際': 'POS_MAIN_OR_AFFINITY',
    '主将か副将か補佐で主将と自身が好相性の際': 'POS_MAIN_OR_ANY_IF_AFFINITY',
    '副将か補佐で主将と自身が好相性の際': 'POS_SUB_OR_ADV_IF_AFFINITY',
    '副将で主将と自身が好相性の際': 'POS_SUB_IF_AFFINITY',

    // 好相性（全員）
    '主将で自部隊の副将と補佐全員と好相性の際': 'POS_MAIN_ALL_AFFINITY',
    '主将か副将で自部隊の主将と副将全員と好相性の際': 'POS_MAIN_OR_SUB_ALL_SUB_AFFINITY',
    '副将で自部隊の主将と副将全員と好相性の際': 'POS_SUB_ALL_SUB_AFFINITY',
    '主将か副将1で自部隊の主将と副将全員と好相性の際': 'POS_MAIN_OR_SUB1_ALL_SUB_AFFINITY',
    '主将か副将2で自部隊の主将と副将全員と好相性の際': 'POS_MAIN_OR_SUB2_ALL_SUB_AFFINITY',
    // 誤字「副賞」→「副将」として処理
    '主将か副将で自部隊の主将と副賞と補佐全員と好相性の際': 'POS_MAIN_OR_SUB_ALL_AFFINITY',
    '主将か副将で自部隊の主将と副将と補佐全員と好相性の際': 'POS_MAIN_OR_SUB_ALL_AFFINITY',

    // 好相性（特定武将との）
    '自部隊の主将が孫権と好相性の際': 'MAIN_AFFINITY_SONKEN',
    '副将で主将が曹操か袁紹と好相性の際': 'SUB_MAIN_AFFINITY_SOUSOU_ENSHOU',
    '主将か副将で主将が曹操か袁紹と好相性の際': 'MAIN_OR_SUB_MAIN_AFFINITY_SOUSOU_ENSHOU',

    // 武将指定
    '主将か自部隊の主将が馬超/馬岱/馬雲騄の際': 'MAIN_OR_MAIN_IS_MA',
    '主将か副将で自部隊の主将が関羽/張飛/趙雲/馬超/黄忠の際': 'MAIN_OR_SUB_MAIN_IS_GOHU',
    '主将か自部隊の主将が孫堅/孫策/孫権/孫尚香の際': 'MAIN_OR_MAIN_IS_SON',
    '主将か副将で自部隊の主将が呂布/高順/張遼/貂蝉/陳宮の際': 'MAIN_OR_SUB_MAIN_IS_RYOFU',
    '主将か自部隊の主将が曹操/郭嘉/荀攸/程昱の際': 'MAIN_OR_MAIN_IS_SOUSOU',

    // 兵科
    '主将か副将で自部隊が歩兵の際': 'POS_MAIN_OR_SUB_INFANTRY',
    '主将か副将で自部隊が弓兵の際': 'POS_MAIN_OR_SUB_ARCHER',
    '自部隊が騎兵の際': 'UNIT_CAVALRY',

    // 性別
    '主将が男性の際': 'MAIN_MALE',

    // ステータス（編制時点）
    '主将で編制時点の自部隊の防御が2750以上の際': 'MAIN_DEF_2750',
    '主将で編制時点の自部隊の攻撃が2500以上の際': 'MAIN_ATK_2500',
    '主将で編制時点の自部隊の攻撃が2750以上の際': 'MAIN_ATK_2750',

    // 特殊（編制画面では判定不可）
    '駐屯/防衛中': 'GARRISON',
    '詰所部隊に編制されているとき': 'GUARD_POST',
};

/**
 * 発動条件文字列を正規化コードに変換
 * @param {string} rawCondition - DB上の発動条件文字列
 * @returns {string} 正規化コード
 */
function normalizeCondition(rawCondition) {
    if (!rawCondition || rawCondition === '0') return 'UNKNOWN';

    // 読点を除去して正規化
    const normalized = String(rawCondition).replace(/、/g, '');
    return CONDITION_NORMALIZE_MAP[normalized] || 'UNKNOWN';
}

/**
 * 武将指定条件の武将名リスト
 */
const GENERAL_GROUP = {
    'MAIN_OR_MAIN_IS_MA': ['馬超', '馬岱', '馬雲騄'],
    'MAIN_OR_SUB_MAIN_IS_GOHU': ['関羽', '張飛', '趙雲', '馬超', '黄忠'],
    'MAIN_OR_MAIN_IS_SON': ['孫堅', '孫策', '孫権', '孫尚香'],
    'MAIN_OR_SUB_MAIN_IS_RYOFU': ['呂布', '高順', '張遼', '貂蝉', '陳宮'],
    'MAIN_OR_MAIN_IS_SOUSOU': ['曹操', '郭嘉', '荀攸', '程昱'],
};

/**
 * 特定武将の相性値（好相性判定用）
 */
const KNOWN_AFFINITY = {
    '孫権': 125,   // 呉
    '曹操': 25,    // 魏
    '袁紹': 101,   // 袁紹
};

/**
 * 兵科→部隊兵種の変換
 */
const UNIT_TYPE_MAP = {
    '槍': '歩兵',
    '弓': '弓兵',
    '馬': '騎兵',
};

/**
 * 発動条件を判定する
 *
 * @param {string} rawCondition - DB上の発動条件文字列
 * @param {Object} ctx - 編制コンテキスト
 * @param {string} ctx.position     - この技能を持つ武将のポジション（'主将'/'副将1'/'副将2'/'補佐1'/'補佐2'）
 * @param {number} [ctx.myAffinity] - この武将の相性値（0-149）
 * @param {string} [ctx.myName]     - この武将の名前
 * @param {number} [ctx.mainAffinity]  - 主将の相性値
 * @param {string} [ctx.mainName]      - 主将の名前
 * @param {string} [ctx.mainGender]    - 主将の性別（'男'/'女'）
 * @param {string} [ctx.unitType]      - 部隊の兵科（'槍'/'弓'/'馬'）
 * @param {number[]} [ctx.subAffinities]     - 副将2名の相性値
 * @param {number[]} [ctx.advisorAffinities] - 補佐2名の相性値
 * @param {number} [ctx.formationAttack]     - 編制時点の部隊攻撃
 * @param {number} [ctx.formationDefense]    - 編制時点の部隊防御
 *
 * @returns {{ active: boolean, reason: string, checkable: boolean }}
 *   - active: 条件を満たしているか
 *   - reason: 判定理由（日本語）
 *   - checkable: 編制画面で判定可能か（false = 戦闘中条件等）
 */
function checkSkillCondition(rawCondition, ctx) {
    const code = normalizeCondition(rawCondition);
    const pos = ctx.position || '';
    const isMain = pos === '主将';
    const isSub = pos === '副将1' || pos === '副将2';
    const isSub1 = pos === '副将1';
    const isSub2 = pos === '副将2';
    const isAdvisor = pos === '補佐1' || pos === '補佐2';

    // 主将との好相性
    const affinityWithMain = (ctx.myAffinity != null && ctx.mainAffinity != null)
        ? isAffinityGood(ctx.myAffinity, ctx.mainAffinity)
        : null;

    // 全副将・補佐との好相性チェックヘルパー
    const allAffinitiesGood = (targetAffinities) => {
        if (!targetAffinities || !ctx.myAffinity) return null;
        return targetAffinities.every(a => a == null || isAffinityGood(ctx.myAffinity, a));
    };

    // 主将が全員と好相性かチェック
    const mainGoodWithAll = () => {
        if (ctx.mainAffinity == null) return null;
        const targets = [...(ctx.subAffinities || []), ...(ctx.advisorAffinities || [])];
        if (targets.length === 0) return null;
        return targets.every(a => a == null || isAffinityGood(ctx.mainAffinity, a));
    };

    // 主将と副将全員が相互好相性か
    const mainAndSubsAllGood = () => {
        if (ctx.mainAffinity == null) return null;
        const allMembers = [ctx.mainAffinity, ...(ctx.subAffinities || [])].filter(a => a != null);
        if (allMembers.length < 2) return null;
        for (let i = 0; i < allMembers.length; i++) {
            for (let j = i + 1; j < allMembers.length; j++) {
                if (!isAffinityGood(allMembers[i], allMembers[j])) return false;
            }
        }
        return true;
    };

    // 部隊兵種
    const unitTypeName = ctx.unitType ? UNIT_TYPE_MAP[ctx.unitType] : null;

    switch (code) {
        // === 常に ===
        case 'ALWAYS':
            return { active: true, reason: '常時発動', checkable: true };

        // === ポジション単純 ===
        case 'POS_MAIN':
            return { active: isMain, reason: isMain ? '主将配置' : '主将でない', checkable: true };
        case 'POS_MAIN_OR_SUB':
            return { active: isMain || isSub, reason: (isMain || isSub) ? 'ポジション一致' : '補佐配置', checkable: true };
        case 'POS_SUB_OR_ADVISOR':
            return { active: isSub || isAdvisor, reason: (isSub || isAdvisor) ? 'ポジション一致' : '主将配置', checkable: true };
        case 'POS_SUB':
            return { active: isSub, reason: isSub ? '副将配置' : '副将でない', checkable: true };
        case 'POS_MAIN_OR_SUB1':
            return { active: isMain || isSub1, reason: (isMain || isSub1) ? 'ポジション一致' : '副将1でない', checkable: true };
        case 'POS_MAIN_OR_SUB2':
            return { active: isMain || isSub2, reason: (isMain || isSub2) ? 'ポジション一致' : '副将2でない', checkable: true };

        // === 好相性（自身と主将）===
        case 'POS_MAIN_OR_SUB_IF_AFFINITY': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            if (!isSub) return { active: false, reason: '主将か副将でない', checkable: true };
            if (affinityWithMain === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: affinityWithMain, reason: affinityWithMain ? '副将＋好相性' : '副将だが好相性でない', checkable: true };
        }
        case 'POS_MAIN_OR_AFFINITY': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            if (affinityWithMain === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: affinityWithMain, reason: affinityWithMain ? '好相性で発動' : '好相性でない', checkable: true };
        }
        case 'POS_MAIN_OR_ANY_IF_AFFINITY': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            if (!(isSub || isAdvisor)) return { active: false, reason: '配置なし', checkable: true };
            if (affinityWithMain === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: affinityWithMain, reason: affinityWithMain ? '好相性で発動' : '好相性でない', checkable: true };
        }
        case 'POS_SUB_OR_ADV_IF_AFFINITY': {
            if (!(isSub || isAdvisor)) return { active: false, reason: '副将か補佐でない', checkable: true };
            if (affinityWithMain === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: affinityWithMain, reason: affinityWithMain ? '好相性で発動' : '好相性でない', checkable: true };
        }
        case 'POS_SUB_IF_AFFINITY': {
            if (!isSub) return { active: false, reason: '副将でない', checkable: true };
            if (affinityWithMain === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: affinityWithMain, reason: affinityWithMain ? '好相性で発動' : '好相性でない', checkable: true };
        }

        // === 好相性（全員）===
        case 'POS_MAIN_ALL_AFFINITY': {
            if (!isMain) return { active: false, reason: '主将でない', checkable: true };
            const result = mainGoodWithAll();
            if (result === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: result, reason: result ? '全員好相性' : '好相性でない武将あり', checkable: true };
        }
        case 'POS_MAIN_OR_SUB_ALL_SUB_AFFINITY': {
            if (!(isMain || isSub)) return { active: false, reason: '主将か副将でない', checkable: true };
            const result = mainAndSubsAllGood();
            if (result === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: result, reason: result ? '主将副将全員好相性' : '好相性でない組合せあり', checkable: true };
        }
        case 'POS_SUB_ALL_SUB_AFFINITY': {
            if (!isSub) return { active: false, reason: '副将でない', checkable: true };
            const result = mainAndSubsAllGood();
            if (result === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: result, reason: result ? '主将副将全員好相性' : '好相性でない組合せあり', checkable: true };
        }
        case 'POS_MAIN_OR_SUB1_ALL_SUB_AFFINITY': {
            if (!(isMain || isSub1)) return { active: false, reason: '主将か副将1でない', checkable: true };
            const result = mainAndSubsAllGood();
            if (result === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: result, reason: result ? '主将副将全員好相性' : '好相性でない組合せあり', checkable: true };
        }
        case 'POS_MAIN_OR_SUB2_ALL_SUB_AFFINITY': {
            if (!(isMain || isSub2)) return { active: false, reason: '主将か副将2でない', checkable: true };
            const result = mainAndSubsAllGood();
            if (result === null) return { active: false, reason: '相性データ不足', checkable: true };
            return { active: result, reason: result ? '主将副将全員好相性' : '好相性でない組合せあり', checkable: true };
        }
        case 'POS_MAIN_OR_SUB_ALL_AFFINITY': {
            // 主将+副将+補佐全員と好相性
            if (!(isMain || isSub)) return { active: false, reason: '主将か副将でない', checkable: true };
            const allTargets = [
                ...(ctx.subAffinities || []),
                ...(ctx.advisorAffinities || []),
                ctx.mainAffinity
            ].filter(a => a != null);
            if (allTargets.length < 2 || ctx.myAffinity == null) {
                return { active: false, reason: '相性データ不足', checkable: true };
            }
            const allGood = allTargets.every(a => isAffinityGood(ctx.myAffinity, a));
            return { active: allGood, reason: allGood ? '全員好相性' : '好相性でない武将あり', checkable: true };
        }

        // === 好相性（特定武将との）===
        case 'MAIN_AFFINITY_SONKEN': {
            if (ctx.mainAffinity == null) return { active: false, reason: '相性データ不足', checkable: true };
            const good = isAffinityGood(ctx.mainAffinity, KNOWN_AFFINITY['孫権']);
            return { active: good, reason: good ? '主将が孫権と好相性' : '主将が孫権と好相性でない', checkable: true };
        }
        case 'SUB_MAIN_AFFINITY_SOUSOU_ENSHOU': {
            if (!isSub) return { active: false, reason: '副将でない', checkable: true };
            if (ctx.mainAffinity == null) return { active: false, reason: '相性データ不足', checkable: true };
            const good = isAffinityGood(ctx.mainAffinity, KNOWN_AFFINITY['曹操'])
                      || isAffinityGood(ctx.mainAffinity, KNOWN_AFFINITY['袁紹']);
            return { active: good, reason: good ? '主将が曹操/袁紹と好相性' : '条件未達', checkable: true };
        }
        case 'MAIN_OR_SUB_MAIN_AFFINITY_SOUSOU_ENSHOU': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            if (!isSub) return { active: false, reason: '主将か副将でない', checkable: true };
            if (ctx.mainAffinity == null) return { active: false, reason: '相性データ不足', checkable: true };
            const good = isAffinityGood(ctx.mainAffinity, KNOWN_AFFINITY['曹操'])
                      || isAffinityGood(ctx.mainAffinity, KNOWN_AFFINITY['袁紹']);
            return { active: good, reason: good ? '主将が曹操/袁紹と好相性' : '条件未達', checkable: true };
        }

        // === 武将指定 ===
        case 'MAIN_OR_MAIN_IS_MA':
        case 'MAIN_OR_MAIN_IS_SON':
        case 'MAIN_OR_MAIN_IS_SOUSOU': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            const group = GENERAL_GROUP[code] || [];
            const mainMatch = ctx.mainName && group.some(n => ctx.mainName.includes(n));
            return { active: !!mainMatch, reason: mainMatch ? '主将が対象武将' : '主将が対象武将でない', checkable: true };
        }
        case 'MAIN_OR_SUB_MAIN_IS_GOHU':
        case 'MAIN_OR_SUB_MAIN_IS_RYOFU': {
            if (isMain) return { active: true, reason: '主将配置', checkable: true };
            if (!isSub) return { active: false, reason: '主将か副将でない', checkable: true };
            const group = GENERAL_GROUP[code] || [];
            const mainMatch = ctx.mainName && group.some(n => ctx.mainName.includes(n));
            return { active: !!mainMatch, reason: mainMatch ? '主将が対象武将' : '主将が対象武将でない', checkable: true };
        }

        // === 兵科 ===
        case 'POS_MAIN_OR_SUB_INFANTRY': {
            if (!(isMain || isSub)) return { active: false, reason: '主将か副将でない', checkable: true };
            const match = unitTypeName === '歩兵';
            return { active: match, reason: match ? '歩兵部隊' : '歩兵でない', checkable: true };
        }
        case 'POS_MAIN_OR_SUB_ARCHER': {
            if (!(isMain || isSub)) return { active: false, reason: '主将か副将でない', checkable: true };
            const match = unitTypeName === '弓兵';
            return { active: match, reason: match ? '弓兵部隊' : '弓兵でない', checkable: true };
        }
        case 'UNIT_CAVALRY': {
            const match = unitTypeName === '騎兵';
            return { active: match, reason: match ? '騎兵部隊' : '騎兵でない', checkable: true };
        }

        // === 性別 ===
        case 'MAIN_MALE': {
            const match = ctx.mainGender === '男';
            return { active: match, reason: match ? '主将が男性' : '主将が男性でない', checkable: true };
        }

        // === ステータス条件（編制時点）===
        // TODO: 将来は2パス方式（基礎ステータス計算→条件判定→再計算）に移行
        // 現状は主将であれば条件を満たす前提で常にON
        case 'MAIN_ATK_2500':
        case 'MAIN_ATK_2750':
        case 'MAIN_DEF_2750': {
            if (!isMain) return { active: false, reason: '主将でない', checkable: true };
            return { active: true, reason: 'ステータス条件（主将前提でON）', checkable: true };
        }

        // === 戦闘中・特殊条件（編制画面では判定不可）===
        case 'GARRISON':
            return { active: false, reason: '駐屯/防衛中のみ', checkable: false };
        case 'GUARD_POST':
            return { active: false, reason: '詰所部隊のみ', checkable: false };

        // === 不明 ===
        case 'UNKNOWN':
        default:
            return { active: false, reason: `不明な条件: ${rawCondition}`, checkable: false };
    }
}

/**
 * 発動条件の表示用テキストを返す（正規化前の原文をそのまま使う）
 * @param {string} rawCondition
 * @returns {string}
 */
function getConditionDisplayText(rawCondition) {
    if (!rawCondition || rawCondition === '0') return '（条件不明）';
    return String(rawCondition);
}

/**
 * 発動条件の種別を返す（UI表示用のカテゴリ分け）
 * @param {string} rawCondition
 * @returns {'always'|'position'|'affinity'|'unit'|'stat'|'special'|'unknown'}
 */
function getConditionCategory(rawCondition) {
    const code = normalizeCondition(rawCondition);
    if (code === 'ALWAYS') return 'always';
    if (code.startsWith('POS_') && !code.includes('AFFINITY') && !code.includes('INFANTRY') && !code.includes('ARCHER')) return 'position';
    if (code.includes('AFFINITY') || code.includes('_IS_')) return 'affinity';
    if (code.includes('INFANTRY') || code.includes('ARCHER') || code.includes('CAVALRY') || code === 'MAIN_MALE') return 'unit';
    if (code.includes('ATK') || code.includes('DEF')) return 'stat';
    if (code === 'GARRISON' || code === 'GUARD_POST') return 'special';
    return 'unknown';
}
