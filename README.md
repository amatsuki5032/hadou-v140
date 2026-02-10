# 三國志覇道 編制管理アプリ v1.45

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.45-blue.svg)](https://github.com/amatsuki5032/hadou-v140/releases)
[![Demo](https://img.shields.io/badge/demo-live-success.svg)](https://amatsuki5032.github.io/hadou-v140/)

三國志覇道の部隊編制を効率的に管理するWebアプリケーション。プロファイル別管理、画像表示、技能効果集計、ステータス計算など充実した機能を搭載。

## デモ

**アプリURL**: https://amatsuki5032.github.io/hadou-v140/

ブラウザで今すぐ利用可能。インストール不要。

---

## 主要機能

### 編制管理

- **10パターン編制** × 12部隊（主城6・分城3・出城3）
- **プロファイル別管理**（P0-P4で独立管理）
- プロファイル間コピー機能
- 編制名のカスタマイズ
- 部隊ごとの折りたたみ
- おススメ部隊設定
- 武将・編制コメント機能
- 戻すボタン（Undo機能）

### 武将管理（447名）

| レアリティ | 人数 |
|-----------|------|
| LR | 92名 |
| UR | 108名 |
| SSR | 146名 |
| SR | 43名 |
| R | 38名 |
| N | 20名 |

**フィルタ機能**: レアリティ、兵種、勢力、侍従位置、お気に入り・おススメ表示、不使用設定

**配置機能**: ドラッグ&ドロップ、ダブルクリック自動配置（タブ別優先）、UR武将重複チェック

### 名宝管理（209個）

- カテゴリ: 武器・防具・文物
- レアリティ: UR/SSR/SR/R
- お気に入り・不使用設定
- ドラッグ&ドロップ配置

### 技能・ステータス計算

- **技能DB**: 1,783技能（武将技能・名宝技能・陣形効果等を統合）
- **44パターンの発動条件評価**（ポジション・兵科・相性・ステータス条件）
- **天賦テーブル・陣形反映率によるステータス計算**
- 技能効果の自動集計

### 画像表示

- 武将アイコン表示（リスト・編制画面）
- 名宝アイコン表示（リスト・編制画面）
- 遅延読み込み対応

### データ管理

- **LocalStorage自動保存**
- 全体バックアップ（エクスポート/インポート）
- 単一編制エクスポート/インポート
- プロファイルエクスポート
- v83以降の全バージョンと互換

---

## クイックスタート

### オンライン版（推奨）

ブラウザで以下のURLにアクセス:

```
https://amatsuki5032.github.io/hadou-v140/
```

### ローカル実行

```bash
git clone https://github.com/amatsuki5032/hadou-v140.git
cd hadou-v140
python -m http.server 8000
# http://localhost:8000 にアクセス
```

---

## ファイル構成

```
hadou-v140/
│
├── index.html                    # エントリーポイント
├── styles.css                    # スタイル定義
│
├── app.js                        # メインアプリケーション（state管理・レンダリング）
├── components-panels.js          # GeneralsPanel, TreasuresPanel
├── components-modals.js          # モーダルコンポーネント群
├── components-rank.js            # ランク関連コンポーネント
├── components-formations.js      # 編制表示コンポーネント
├── handlers-dnd.js               # ドラッグ&ドロップハンドラ
├── handlers-template.js          # テンプレート管理
├── data-io.js                    # データ入出力・Google Drive同期
├── utils.js                      # 共通ユーティリティ
├── config.js                     # 設定・定数
│
├── calc-engine.js                # 部隊パラメータ計算エンジン
├── stat-calculator.js            # 天賦テーブル・陣形反映率・ステータス計算
├── skill-conditions.js           # 技能発動条件の評価関数（44パターン）
│
├── data-generals.js              # 武将データ統合（447名）
├── data-all-treasures.js         # 名宝データ（209個）
├── data-skill-db.js              # 技能DB全量（1,783技能）
│
├── firebase-config.js            # Firebase設定
├── firebase-sync-addon.js        # Firebase同期機能
├── theme-toggle.js               # テーマ切り替え
├── updateHistory.js              # 更新履歴
│
├── icons/                        # アイコン画像
├── CLAUDE.md                     # Claude Code用設定
└── README.md                     # このファイル
```

---

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| React | 18 | UIフレームワーク |
| Babel | Standalone | JSXトランスパイル |
| LocalStorage | - | データ永続化 |
| Firebase | 10.x | 認証・同期機能 |
| CSS3 | - | スタイリング（ダーク/ライト対応） |
| GitHub Pages | - | ホスティング |

ビルドツールなし。vanilla JS + React（CDN）で完結。

---

## データ規模

| データ | 件数 | ソース |
|--------|------|--------|
| 武将 | 447名 | 覇道DB_武将_.xlsx → data-generals.js |
| 名宝 | 209個 | 覇道DB_名宝_.xlsx → data-all-treasures.js |
| 技能 | 1,783件 | 覇道DB.xlsx → data-skill-db.js |
| 研究 | 127件 | 覇道DB.xlsx → data-research.js |

---

## バージョン履歴

### v1.45 (2026-02-10) - 現在

**武将データ統合・計算エンジン実装**

- 武将データを5ファイル→1ファイルに統合（447名）
- LR+2名（荀攸・項籍）、UR+1名（鄒氏）、N+20名を追加
- 技能DB統合（1,783技能）、calc-engine.jsがSKILL_DB参照に移行
- stat-calculator.js（天賦テーブル・陣形反映率）実装
- skill-conditions.js（44パターンの発動条件評価）実装
- app.jsを7ファイルに分割（-69%）

### v1.44 (2026-02-03後半)

**保留機能実装（非表示中）**

- 武将・名宝の一時保管機能
- ドラッグ&ドロップ対応
- 画像表示対応
- 保留内並び替え

### v1.43 (2026-02-03前半)

**プロファイル機能の安定化**

- プロファイル2-5のバグ修正
- タブ別自動配置優先
- UR武将ダブルクリック削除
- 単一編制エクスポート/インポート

### v1.42 (2026-02-03)

**プロファイル別編制とコピー機能**

- プロファイル別独立編制（P0-P4）
- プロファイル間コピー機能
- 戻すボタン（Undo機能）
- レアリティ・兵種フィルタの排他的動作
- 武将・編制コメント機能

### v1.41 (2026-02-02)

**画像表示機能の実装**

- 武将アイコン表示（リスト・編制画面）
- 名宝アイコン表示（リスト・編制画面）
- 遅延読み込み対応

### v1.40 (2026-01-16) - Modular Edition

**大規模リファクタリング**

- モジュール分割
- GitHub Pages公開
- 旧バージョン完全互換（v83以降）

---

## 使い方

### 武将の配置

1. 左パネルから武将を選択
2. ドラッグして部隊スロットにドロップ（またはダブルクリックで自動配置）

### 名宝の配置

1. 右パネルから名宝を選択
2. ドラッグして名宝スロットにドロップ

### プロファイル管理

- 画面上部のP0〜P4ボタンで切り替え（各プロファイルで独立した編制を管理）
- 「プロファイルコピー」でプロファイル間の編制コピーが可能

### バックアップ

- 設定画面 →「全データエクスポート」でJSONファイルをダウンロード
- 「全データインポート」で復元

---

## トラブルシューティング

**画像が表示されない**: ブラウザのキャッシュをクリアし、Ctrl+F5で再読み込み

**データが消えた**: LocalStorageを使用しているため、ブラウザのデータクリアで消える可能性あり。定期的なエクスポートを推奨

---

## 管理リンク

- [アプリ](https://amatsuki5032.github.io/hadou-v140/)
- [Firebase Console](https://console.firebase.google.com/project/hadou-v140)
- [GitHub リポジトリ](https://github.com/amatsuki5032/hadou-v140)

---

## ライセンス

MIT License

## 作成者

**あまつき** - [@amatsuki5032](https://github.com/amatsuki5032)

---

**最終更新**: 2026-02-10
**バージョン**: v1.45
**武将数**: 447名
**名宝数**: 209個
**技能数**: 1,783件
