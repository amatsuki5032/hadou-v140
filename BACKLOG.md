# BACKLOG — 三國志覇道ツール群

> **運用ルール:**
> - 思いついた課題はすぐ「待機中」に追記する
> - Claude Code はタスク完了後にこのファイルを確認する
> - 着手時は「作業中」に移動し、完了時は「完了」に日付付きで移動する
> - 関連する課題はまとめて1タスクにしてよい
> - タスクの入力ファイル（CSV, JSON, 指示書等）は `tasks/` 配下に配置。完了後は削除してよい

---

## 作業中

（なし）

---

## 待機中（優先度高）

- [ ] **data-research.js 再生成** — 91→140項目。詳細は tasks/research-update/TASK.md 参照。入力: tasks/research-update/research_v4.csv + tasks/research-update/effects.json
- [ ] **components-profile.js maxValue対応** — 研究タブの入力上限をmaxValueで制限、効果値最大を表示。tasks/research-update/TASK.md §components-profile.js 参照
- [ ] **覇道DB定義書_v3.md 更新** — data-research.jsの構造説明を140項目・新フィールド（no, maxValue, maxLevel, category, target）に合わせて更新

## 待機中（優先度中）

- [ ] **弓兵知力の名前不整合チェック** — 旧data-research.jsで「弓平知力」(id:5081)。data-skill-db.jsにも同名の誤りがないか確認。あれば修正
- [ ] **研究データETLスクリプト作成** — tools/etl_research.py。CSV → data-research.js の自動生成。他のETLスクリプト（etl_skill_db.py等）と同じパターンで作成
- [ ] **覇道アプリ設計書_v1.md 更新** — 研究データ更新の完了をチェックリスト・リリース実績に追記

## 待機中（優先度低）

（なし）

---

## 完了

| 日付 | タスク |
|------|--------|
| — | （まだなし） |
