# タスク: data-research.js の再生成

## 概要

研究データ一覧v4（140項目）に基づいて `data-research.js` を再生成する。
現在の91項目→140項目への拡張 + M/専攻フラグ修正 + 新フィールド追加。

## 入力ファイル

| ファイル | 用途 |
|---------|------|
| `research_v4.csv` | v4の全140項目（カテゴリ、分野、No、項目名、効果値、効果値最大、現在Lv、最大レベル、M/専攻、備考、備考2） |
| `effects.json` | 全140項目のeffectsマッピング（既存85項目は現data-research.jsから引継、新規55項目は備考から生成） |

## 出力ファイル

`data-research.js` — 既存と同じグローバル変数形式

## 変更内容

### 1. RESEARCH_FIELDS — 変更なし

```javascript
const RESEARCH_FIELDS = {
    "序論": { category: "序論", choices: ["序論"], fixed: true },
    "都市運営": { category: "都市運営", choices: ["都市開発", "都市軍備", "都市防衛"] },
    "部隊運用": { category: "部隊運用", choices: ["歩兵術", "弓兵術", "騎兵術"] },
    "第4枠": { category: "第4枠", choices: ["君主護衛", "君主相対", "要地攻防"] },
};
```

### 2. RESEARCH_DATA — 構造拡張

各項目に以下のフィールドを**追加**:

| 新フィールド | 型 | 説明 | 元列 |
|-------------|-----|------|------|
| `no` | number | 分野内の連番 | CSVの「No」列 |
| `maxValue` | number/string/null | 効果値の上限 | CSVの「効果値最大」列 |
| `maxLevel` | number | 最大レベル | CSVの「最大レベル」列 |
| `category` | string | カテゴリ（—/都市運営/部隊運用/特化戦術） | CSVの「ｶﾃｺﾞﾘ」列 |
| `target` | string | 効果対象 | CSVの「備考」列 |

既存フィールド（変更あり）:

| フィールド | 変更内容 |
|-----------|---------|
| `id` | 欠番だった旧IDを連番化（5000〜5139） |
| `isMaster` | CSVの「M/専攻」列に合わせて修正 |
| `effects` | `effects.json` から取得 |

### 3. 項目の順序

CSVの順序（分野内No順）をそのまま維持:
序論(23) → 都市開発(15) → 都市軍備(15) → 都市防衛(15) → 歩兵術(14) → 弓兵術(14) → 騎兵術(14) → 君主護衛(10) → 君主相対(10) → 要地攻防(10) = 140項目

### 4. 出力フォーマット例

```javascript
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
    // ... 140項目
];
```

## コード変更: components-profile.js

### 変更箇所1: input の max属性

`ResearchFieldGroup` 内の `<input>` の max を動的に:

```javascript
// 変更前
max="100"

// 変更後
max={item.maxValue != null
    ? (typeof item.maxValue === 'number' && item.maxValue <= 1
        ? item.maxValue * 100   // 0.1 → 10, 0.2 → 20 等
        : 100)
    : 100}
```

### 変更箇所2: 効果値最大の表示

項目名の横に最大値を表示:

```javascript
// 変更前
<span className="research-item-effect">{effectLabel}</span>

// 変更後
<span className="research-item-effect">
    {item.maxValue != null
        ? (typeof item.maxValue === 'number' && item.maxValue <= 1
            ? `最大${(item.maxValue * 100).toFixed(0)}%`
            : `最大${item.maxValue}`)
        : '—'}
</span>
```

### 変更箇所3: 全上限設定ボタン (handleSetAllMax)

現在は全項目を100%に設定しているが、maxValueを使うように:

```javascript
// 変更前（推定）
newItems[key] = { unlocked: true, value: 100 };

// 変更後
const maxPct = (resItem.maxValue != null && typeof resItem.maxValue === 'number' && resItem.maxValue <= 1)
    ? resItem.maxValue * 100
    : (resItem.maxValue || 0);
newItems[key] = { ...newItems[key], unlocked: true, value: maxPct };
```

## コード変更: stat-calculator.js

**変更不要。** `calcResearchBonuses()` はeffects[].type2とeffects[].effectしか見ておらず、新フィールド追加の影響を受けない。

## localStorage互換性

キー形式 `分野:項目名` は変わらないため、既存の保存データはそのまま使える。

名前が変わった項目（旧data-research.jsとの差異）:
- `弓平知力` → `弓兵知力①`（旧データは残るが参照されなくなるだけ）
- `城壁耐久・大`(1項目) → `城壁耐久・大①` + `城壁耐久・大②`（2項目に分割）
- `歩兵攻撃`(1項目) → `歩兵攻撃①` + `歩兵攻撃②`（2項目に分割）
- 同様に都市防衛の城壁防御・軍事府強化・城壁修復資源も①②に分割

→ これらは旧キーの保存値が参照されなくなるだけで、エラーにはならない。

## 検証

1. `data-research.js` を `<script>` で読み込み、`RESEARCH_DATA.length === 140` を確認
2. 各分野の項目数: 序論23, 都市開発15, 都市軍備15, 都市防衛15, 歩兵術14, 弓兵術14, 騎兵術14, 君主護衛10, 君主相対10, 要地攻防10
3. M数: 序論23, 都市開発5, 都市軍備4, 都市防衛4, 歩兵術3, 弓兵術3, 騎兵術3, 君主護衛1, 君主相対1, 要地攻防1 = 合計48
4. プロファイル研究タブが正常に表示されること
5. 既存の保存データ（localStorage hadou-profile）で研究値が引き継がれること
