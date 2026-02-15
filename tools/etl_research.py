#!/usr/bin/env python3
"""
ETL: research_v4.csv + effects.json → data-research.js
研究データCSVとeffectsマッピングを結合して、
RESEARCH_FIELDS / RESEARCH_DATA を含むJSファイルを出力する。

使い方:
  python etl_research.py tasks/research-update/research_v4.csv tasks/research-update/effects.json data-research.js

入力:
  - research_v4.csv: 140項目（ヘッダ1行 + データ140行）
    列: ｶﾃｺﾞﾘ, 分野, No, 項目名, 効果値, 効果値最大, 現在Lv, 最大レベル, M/専攻, 備考, 備考2
  - effects.json: 140エントリ
    各エントリ: { key: "分野:項目名", field, name, effects: [...] }

出力:
  - data-research.js: RESEARCH_FIELDS（固定構造）+ RESEARCH_DATA（140件）
"""

import sys
import csv
import json


def parse_max_value(raw):
    """効果値最大をパースする。小数→float、整数→int、文字列→str、空→None"""
    if not raw or raw.strip() == '':
        return None
    try:
        val = float(raw)
        if val == int(val) and abs(val) >= 1:
            return int(val)
        return val
    except ValueError:
        return raw.strip()


def format_max_value(val):
    """maxValueをJS出力用に整形する"""
    if val is None:
        return 'null'
    if isinstance(val, str):
        return f'"{val}"'
    return str(val)


def format_effect(eff):
    """effects配列の1要素をJS文字列に変換する"""
    parts = []
    parts.append(f'type2: "{eff["type2"]}"')
    if eff.get('effect') is None:
        parts.append('effect: null')
    else:
        parts.append(f'effect: "{eff["effect"]}"')
    if 'effectx' in eff:
        parts.append(f'effectx: "{eff["effectx"]}"')
    parts.append(f'condition: "{eff["condition"]}"')
    if 'amount' in eff:
        parts.append(f'amount: "{eff["amount"]}"')
    if 'levels' in eff and eff['levels'] is not None:
        levels_str = json.dumps(eff['levels'], ensure_ascii=False)
        parts.append(f'levels: {levels_str}')
    else:
        parts.append('levels: null')
    return '{' + ', '.join(parts) + '}'


def main():
    if len(sys.argv) != 4:
        print(f'Usage: {sys.argv[0]} <csv_file> <effects_json> <output_js>')
        sys.exit(1)

    csv_file = sys.argv[1]
    effects_file = sys.argv[2]
    output_file = sys.argv[3]

    # effects.json 読込
    with open(effects_file, 'r', encoding='utf-8') as f:
        effects_arr = json.load(f)
    effects_map = {e['key']: e['effects'] for e in effects_arr}

    # CSV 読込
    items = []
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader)  # ヘッダスキップ
        for i, row in enumerate(reader):
            category = row[0]
            field = row[1]
            no = int(row[2])
            name = row[3]
            max_value = parse_max_value(row[5])
            max_level = int(row[7])
            is_master = row[8] == 'M'
            target = row[9]

            key = f'{field}:{name}'
            effects = effects_map.get(key, [])
            if not effects_map.get(key):
                print(f'WARNING: effects not found for {key}', file=sys.stderr)

            items.append({
                'id': 5000 + i,
                'no': no,
                'name': name,
                'isMaster': is_master,
                'field': field,
                'category': category,
                'maxValue': max_value,
                'maxLevel': max_level,
                'target': target,
                'effects': effects,
            })

    # JS出力
    lines = []
    lines.append('// data-research.js — 研究データ（自動生成）')
    lines.append('// 生成元: 覇道DB.xlsx 研究シート')
    lines.append(f'// {len(items)}件')
    lines.append('')
    lines.append('// 専攻カテゴリ構造')
    lines.append('const RESEARCH_FIELDS = {')
    lines.append('    "序論": { category: "序論", choices: ["序論"], fixed: true },')
    lines.append('    "都市運営": { category: "都市運営", choices: ["都市開発", "都市軍備", "都市防衛"] },')
    lines.append('    "部隊運用": { category: "部隊運用", choices: ["歩兵術", "弓兵術", "騎兵術"] },')
    lines.append('    "第4枠": { category: "第4枠", choices: ["君主護衛", "君主相対", "要地攻防"] },')
    lines.append('};')
    lines.append('')
    lines.append('// 研究項目データ')
    lines.append('const RESEARCH_DATA = [')

    for item in items:
        mv_str = format_max_value(item['maxValue'])
        effects_strs = []
        for eff in item['effects']:
            effects_strs.append('            ' + format_effect(eff))
        effects_block = ',\n'.join(effects_strs)

        lines.append('    {')
        lines.append(f'        id: {item["id"]}, no: {item["no"]}, name: "{item["name"]}",')
        is_master_str = 'true' if item['isMaster'] else 'false'
        lines.append(f'        isMaster: {is_master_str}, field: "{item["field"]}", category: "{item["category"]}",')
        lines.append(f'        maxValue: {mv_str}, maxLevel: {item["maxLevel"]},')
        lines.append(f'        target: "{item["target"]}",')
        lines.append('        effects: [')
        lines.append(effects_block)
        lines.append('        ]')
        lines.append('    },')

    lines.append('];')
    lines.append('')

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    print(f'Generated {output_file}: {len(items)} items')

    # 検証サマリ
    from collections import Counter
    field_counts = Counter(it['field'] for it in items)
    master_count = sum(1 for it in items if it['isMaster'])
    print(f'Fields: {dict(field_counts)}')
    print(f'Masters: {master_count}')


if __name__ == '__main__':
    main()
