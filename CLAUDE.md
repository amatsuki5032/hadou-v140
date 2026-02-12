# CLAUDE.md - 三國志覇道ツール群 共通ルール

## 絶対禁止事項

以下は理由を問わず禁止。提案も不要。

- ビルドツールの導入（Vite, Webpack, Rollup, esbuild 等）
- ESモジュール化（import/export への変換）
- package.json の作成
- npm / node_modules の使用
- テストフレームワークの導入（Vitest, Jest 等）
- フレームワークの導入（React, Vue, Svelte 等）
- TypeScriptへの変換
- 大規模リファクタリング（提案は可、実行は許可を得てから）

## 技術スタック

- フロントエンド: Vanilla JavaScript（フレームワークなし）
- バックエンド / DB: Firebase（Firestore, Auth, Storage）
- 認証方式: Google認証（Firebase Auth）
- ホスティング: GitHub Pages
- ビルドツール: なし（素のHTML/CSS/JSで完結）
- 管理者: 1人（自分のみ）

HTMLファイルをブラウザで直接開いて動く構成を維持すること。

## リポジトリ構造

```
hadou-v140/
├── index.html              ← 編制管理アプリ（メイン）
├── app.js                  ← メインアプリロジック
├── data-generals.js        ← 武将データ（全ツール共有）
├── data-skill-db.js        ← 技能データ（全ツール共有）
├── data-research.js        ← 研究データ（全ツール共有）
├── calc-engine.js          ← 計算エンジン
├── stat-calculator.js      ← ステータス計算
├── skill-conditions.js     ← 技能発動条件
├── common-theme.css        ← 共通テーマCSS
├── firebase-config.js      ← Firebase設定
├── icon-checker.html       ← アイコン不足チェッカー
├── icons/                  ← アイコン画像
│   ├── generals/
│   └── treasures/
├── tier-list/              ← TIER表ツール
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   └── firebase-config.js
└── (今後のツールもサブディレクトリで追加)
```

## データ共有ルール

- 各サブディレクトリのツールはルートの data-*.js を相対パスで読み込む
  例: `<script src="../data-generals.js"></script>`
- データファイル（data-*.js）をサブディレクトリにコピー・複製しない
- サブディレクトリ内の作業でルート直下のファイルを変更しない
- 新しいツールを追加する場合はサブディレクトリを作成する

## 作業ルール

- 指示された作業だけを行う。勝手に「改善」しない
- 1つの作業が終わったら確認を取ってから次に進む
- 複数ファイルに影響する変更は事前に変更範囲を提示する
- 既存の命名規則・設計パターンに合わせる
- CSS修正時は指示箇所以外のプロパティを変更しない

## セキュリティ

- 管理者判定は Firebase Auth の UID のみで行う
- ADMIN_UID: eWGpJLUAn1f6g40SkpWeNvf3L593
- メールアドレスを権限制御に使わない
- 書き込み・更新・削除の最終判断は Firestore Rules / Storage Rules で行う
- フロントJSだけで管理者制御しない

## Firestore Rules

- 既存ルールは維持し、追加のみ行う。既存のmatchブロックを削除・変更しない
- 新しいコレクションを追加する場合は既存ルールの末尾に追記する
- read: 用途に応じて公開（`if true`）or 認証必須を選択
- write: `request.auth.uid == "eWGpJLUAn1f6g40SkpWeNvf3L593"` のみ許可

## UI / デザイン

配色コンセプト「雨夜の月」

- 基調色: 墨紺（#09090c / #0e0e12）
- テキスト: 冷たい白（#f0f1f5 / #e2e4ec）
- 操作色（ボタン）: 青（#2563eb）。ボタンにボルドーは使わない
- 装飾色（ヘッダーライン・タグ・カード左ボーダー）: ボルドー（#800020）。装飾部分のみ
- ダーク/ライトモード: CSS変数で1ファイル管理。分けない
- 絵文字＋テキストの組み合わせ禁止（例：🔥 スキル一覧）。絵文字単体のボタンはOK
- ゲーム風・派手な装飾・茶色＋金の配色は避ける

## コード品質

- 変数名・関数名は英語、コメントは日本語OK
- Firebase操作は必ず try-catch で囲む
- エラーはユーザー向けに画面表示する（console.logだけで終わらない）

## ドキュメント

- docs/覇道ルール定義書.md — ゲーム仕様
- docs/覇道DB定義書_v3.md — データ構造・ETLパイプライン
- docs/覇道アプリ設計書_v1.md — アプリ設計・実装状況

作業前にこれらを確認すること。

### ドキュメント更新ルール

タスク完了時、変更内容に関連する docs/ の記述を更新すること:
- 覇道アプリ設計書_v1.md: チェックリストの [ ] → [✅]、リリース実績の追記
- 覇道DB定義書_v3.md: §8 TODO の完了更新
- 既存の記述スタイル・フォーマットに合わせる
- 事実と異なる記述（実装場所の違い等）があれば修正する

## 自動生成ファイル（直接編集禁止）

以下はETLスクリプト（tools/）で生成されるため直接編集しない:
- data-generals.js
- data-skill-db.js
- data-all-treasures.js
- data-research.js
- data-survey.js
- data-horse-skills.js
- data-treasure-forge.js

構造の詳細は docs/覇道DB定義書_v3.md を参照。

## 判断基準

セキュリティ ＞ 可読性 ＞ UI美観 ＞ 実装速度
