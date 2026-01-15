// 名宝データ (205個)
const EMBEDDED_TREASURES_DATA = [
  {
    "id": 1,
    "name": "蛇矛",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張飛"
  },
  {
    "id": 2,
    "name": "青龍偃月刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "関羽"
  },
  {
    "id": 3,
    "name": "元戎弩",
    "category": "武器",
    "weapon_type": "弓",
    "related": "諸葛亮"
  },
  {
    "id": 4,
    "name": "孫子の兵法書",
    "category": "文物",
    "weapon_type": null,
    "related": "孫堅"
  },
  {
    "id": 5,
    "name": "方天画戟",
    "category": "武器",
    "weapon_type": "馬",
    "related": "呂布"
  },
  {
    "id": 6,
    "name": "雌雄一対の剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "劉備"
  },
  {
    "id": 7,
    "name": "召虎兜",
    "category": "防具",
    "weapon_type": null,
    "related": "張遼"
  },
  {
    "id": 8,
    "name": "郭子兵略",
    "category": "文物",
    "weapon_type": null,
    "related": "郭嘉"
  },
  {
    "id": 9,
    "name": "鳴鈴双短戟",
    "category": "武器",
    "weapon_type": "弓",
    "related": "甘寧"
  },
  {
    "id": 10,
    "name": "周郎琵琶",
    "category": "文物",
    "weapon_type": null,
    "related": "周瑜"
  },
  {
    "id": 11,
    "name": "太尉冠",
    "category": "防具",
    "weapon_type": null,
    "related": "賈詡"
  },
  {
    "id": 12,
    "name": "虎臣瓢箪",
    "category": "文物",
    "weapon_type": null,
    "related": "張飛"
  },
  {
    "id": 13,
    "name": "鮮卑角端弓",
    "category": "武器",
    "weapon_type": "馬",
    "related": "異民族"
  },
  {
    "id": 14,
    "name": "五渓狼牙棒",
    "category": "武器",
    "weapon_type": "槍",
    "related": "異民族"
  },
  {
    "id": 15,
    "name": "山越鋸歯刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "異民族"
  },
  {
    "id": 16,
    "name": "青釭の剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "趙雲"
  },
  {
    "id": 17,
    "name": "虎皮披風",
    "category": "防具",
    "weapon_type": null,
    "related": "孫策"
  },
  {
    "id": 18,
    "name": "射透弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "太史慈"
  },
  {
    "id": 19,
    "name": "麟角槍",
    "category": "武器",
    "weapon_type": "槍",
    "related": "姜維"
  },
  {
    "id": 20,
    "name": "南蛮獣牙首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "異民族"
  },
  {
    "id": 21,
    "name": "烏桓貂毛兜",
    "category": "防具",
    "weapon_type": null,
    "related": "異民族"
  },
  {
    "id": 22,
    "name": "羌毛領披風",
    "category": "防具",
    "weapon_type": null,
    "related": "異民族"
  },
  {
    "id": 23,
    "name": "白羽扇",
    "category": "武器",
    "weapon_type": "槍",
    "related": "諸葛亮"
  },
  {
    "id": 24,
    "name": "三叉束髪紫金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "呂布"
  },
  {
    "id": 25,
    "name": "黒紗金飾冠",
    "category": "防具",
    "weapon_type": null,
    "related": "司馬懿"
  },
  {
    "id": 26,
    "name": "紫藤紗錦披帛",
    "category": "文物",
    "weapon_type": null,
    "related": "貂蝉"
  },
  {
    "id": 27,
    "name": "太師黄金爵",
    "category": "文物",
    "weapon_type": null,
    "related": "董卓"
  },
  {
    "id": 28,
    "name": "武弁大冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫堅"
  },
  {
    "id": 29,
    "name": "黄武勢剣",
    "category": "武器",
    "weapon_type": "弓",
    "related": "陸遜"
  },
  {
    "id": 30,
    "name": "翡翠玉笛",
    "category": "文物",
    "weapon_type": null,
    "related": "小喬"
  },
  {
    "id": 31,
    "name": "龍紋緑袍鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "関羽"
  },
  {
    "id": 32,
    "name": "疾風剛弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "夏侯淵"
  },
  {
    "id": 33,
    "name": "軍師錦羅袍",
    "category": "文物",
    "weapon_type": null,
    "related": "龐統"
  },
  {
    "id": 34,
    "name": "立義鋼刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "龐徳"
  },
  {
    "id": 35,
    "name": "二石之弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "黄忠"
  },
  {
    "id": 36,
    "name": "才捷弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "孫尚香"
  },
  {
    "id": 37,
    "name": "商君書",
    "category": "文物",
    "weapon_type": null,
    "related": "謎"
  },
  {
    "id": 38,
    "name": "獅子頭の兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬超"
  },
  {
    "id": 39,
    "name": "孤月独明剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "夏侯惇"
  },
  {
    "id": 40,
    "name": "古錠刀",
    "category": "武器",
    "weapon_type": "全",
    "related": "孫堅"
  },
  {
    "id": 41,
    "name": "克定鋭刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張郃"
  },
  {
    "id": 42,
    "name": "金繍紅錦半臂",
    "category": "防具",
    "weapon_type": null,
    "related": "孫権"
  },
  {
    "id": 43,
    "name": "玲瓏獅蛮帯",
    "category": "文物",
    "weapon_type": null,
    "related": "呂玲綺"
  },
  {
    "id": 44,
    "name": "金系帯紫錦披風",
    "category": "防具",
    "weapon_type": null,
    "related": "皇甫嵩"
  },
  {
    "id": 45,
    "name": "青嚢書",
    "category": "文物",
    "weapon_type": null,
    "related": "華佗"
  },
  {
    "id": 46,
    "name": "太平九節杖",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張角"
  },
  {
    "id": 47,
    "name": "克己猟龍兜",
    "category": "防具",
    "weapon_type": null,
    "related": "呂蒙"
  },
  {
    "id": 48,
    "name": "千創玄英鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "周泰"
  },
  {
    "id": 49,
    "name": "克敵機謀剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "荀攸"
  },
  {
    "id": 50,
    "name": "荀氏春秋要論",
    "category": "文物",
    "weapon_type": null,
    "related": "荀彧"
  },
  {
    "id": 51,
    "name": "羅綺香嚢",
    "category": "文物",
    "weapon_type": null,
    "related": "謎"
  },
  {
    "id": 52,
    "name": "倚天の剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "曹操"
  },
  {
    "id": 53,
    "name": "烈志蒼驥鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "曹操"
  },
  {
    "id": 54,
    "name": "孟徳新書",
    "category": "文物",
    "weapon_type": null,
    "related": "曹操"
  },
  {
    "id": 55,
    "name": "剛断戦斧",
    "category": "武器",
    "weapon_type": "槍",
    "related": "徐晃"
  },
  {
    "id": 56,
    "name": "紅玉珍珠金耳墜",
    "category": "文物",
    "weapon_type": null,
    "related": "関銀屏"
  },
  {
    "id": 57,
    "name": "朱襟白絹半臂",
    "category": "防具",
    "weapon_type": null,
    "related": "徐庶"
  },
  {
    "id": 58,
    "name": "双鉄戟",
    "category": "武器",
    "weapon_type": "槍",
    "related": "典韋"
  },
  {
    "id": 59,
    "name": "与韓将軍書",
    "category": "文物",
    "weapon_type": null,
    "related": "賈詡"
  },
  {
    "id": 60,
    "name": "大喬琵琶",
    "category": "文物",
    "weapon_type": null,
    "related": "大喬"
  },
  {
    "id": 61,
    "name": "白狐毛皮披風",
    "category": "防具",
    "weapon_type": null,
    "related": "公孫瓚"
  },
  {
    "id": 62,
    "name": "神獣面白纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬騰"
  },
  {
    "id": 63,
    "name": "金繍緑錦披風",
    "category": "防具",
    "weapon_type": null,
    "related": "陸抗"
  },
  {
    "id": 64,
    "name": "玄熊毛銀黄兜",
    "category": "防具",
    "weapon_type": null,
    "related": "華雄"
  },
  {
    "id": 65,
    "name": "黄幡豹尾",
    "category": "文物",
    "weapon_type": null,
    "related": "呂布"
  },
  {
    "id": 66,
    "name": "太平賢良黄金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張角"
  },
  {
    "id": 67,
    "name": "鷹揚玄冥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "袁紹"
  },
  {
    "id": 68,
    "name": "驍悍傲骨鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "魏延"
  },
  {
    "id": 69,
    "name": "瑠璃珠金花冠",
    "category": "防具",
    "weapon_type": null,
    "related": "甄氏"
  },
  {
    "id": 70,
    "name": "純和青金石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "王元姫"
  },
  {
    "id": 71,
    "name": "天柱鉄大刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "顔良"
  },
  {
    "id": 72,
    "name": "天禄一角兜",
    "category": "防具",
    "weapon_type": null,
    "related": "文醜"
  },
  {
    "id": 73,
    "name": "召虎鉤鎌刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張遼"
  },
  {
    "id": 74,
    "name": "真鋼鎮定剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "孫策"
  },
  {
    "id": 75,
    "name": "道論",
    "category": "文物",
    "weapon_type": null,
    "related": "鍾会"
  },
  {
    "id": 76,
    "name": "平蜀地理図",
    "category": "文物",
    "weapon_type": null,
    "related": "鄧艾"
  },
  {
    "id": 77,
    "name": "明道方略冠",
    "category": "防具",
    "weapon_type": null,
    "related": "魯粛"
  },
  {
    "id": 78,
    "name": "錦帆鈴飾",
    "category": "文物",
    "weapon_type": null,
    "related": "甘寧"
  },
  {
    "id": 79,
    "name": "白銀龍胆鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "趙雲"
  },
  {
    "id": 80,
    "name": "木牛試作模型",
    "category": "文物",
    "weapon_type": null,
    "related": "黄月英"
  },
  {
    "id": 81,
    "name": "登極龍紋金觚",
    "category": "文物",
    "weapon_type": null,
    "related": "曹丕"
  },
  {
    "id": 82,
    "name": "疾風護臂甲",
    "category": "防具",
    "weapon_type": null,
    "related": "夏侯淵"
  },
  {
    "id": 83,
    "name": "狼毛紫纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "董卓"
  },
  {
    "id": 84,
    "name": "藍田玉軍令牌",
    "category": "文物",
    "weapon_type": null,
    "related": "諸葛恪"
  },
  {
    "id": 85,
    "name": "雲矩紋玉具宝剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "于禁"
  },
  {
    "id": 86,
    "name": "銀山雪海鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "馬雲騄"
  },
  {
    "id": 87,
    "name": "鋼胆鉄心槍",
    "category": "武器",
    "weapon_type": "馬",
    "related": "楽進"
  },
  {
    "id": 88,
    "name": "思紹",
    "category": "武器",
    "weapon_type": "槍",
    "related": "袁紹"
  },
  {
    "id": 89,
    "name": "亢龍鋼鞭",
    "category": "武器",
    "weapon_type": "馬",
    "related": "文鴦"
  },
  {
    "id": 90,
    "name": "富春孫氏家伝",
    "category": "文物",
    "weapon_type": null,
    "related": "孫堅"
  },
  {
    "id": 91,
    "name": "雄豪肩呑鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "張苞"
  },
  {
    "id": 92,
    "name": "燦金赤纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "黄忠"
  },
  {
    "id": 93,
    "name": "断江倒海鞭",
    "category": "武器",
    "weapon_type": "弓",
    "related": "黄蓋"
  },
  {
    "id": 94,
    "name": "奮勇燕尾牌",
    "category": "防具",
    "weapon_type": null,
    "related": "曹仁"
  },
  {
    "id": 95,
    "name": "司馬氏兵記",
    "category": "文物",
    "weapon_type": null,
    "related": "司馬懿"
  },
  {
    "id": 96,
    "name": "興起嵩峻兜",
    "category": "防具",
    "weapon_type": null,
    "related": "王平"
  },
  {
    "id": 97,
    "name": "壮気直躬剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "陳宮"
  },
  {
    "id": 98,
    "name": "諸葛巾",
    "category": "防具",
    "weapon_type": null,
    "related": "諸葛亮"
  },
  {
    "id": 99,
    "name": "威福笠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "周倉"
  },
  {
    "id": 100,
    "name": "南天羽飾兜",
    "category": "防具",
    "weapon_type": null,
    "related": "孟獲"
  },
  {
    "id": 101,
    "name": "飛刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "祝融"
  },
  {
    "id": 102,
    "name": "先登承志頭巾",
    "category": "防具",
    "weapon_type": null,
    "related": "凌統"
  },
  {
    "id": 103,
    "name": "奉天銀灰冠",
    "category": "防具",
    "weapon_type": null,
    "related": "程昱"
  },
  {
    "id": 104,
    "name": "焦尾琴",
    "category": "文物",
    "weapon_type": null,
    "related": "蔡琰"
  },
  {
    "id": 105,
    "name": "碧緑双翼兜",
    "category": "防具",
    "weapon_type": null,
    "related": "関興"
  },
  {
    "id": 106,
    "name": "朝陽仁恵玉冠",
    "category": "防具",
    "weapon_type": null,
    "related": "劉備"
  },
  {
    "id": 107,
    "name": "鳳鳴双飛金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫尚香"
  },
  {
    "id": 108,
    "name": "鋭師飛鵠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "曹洪"
  },
  {
    "id": 109,
    "name": "励志方正冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張昭"
  },
  {
    "id": 110,
    "name": "賢佐治道笏",
    "category": "文物",
    "weapon_type": null,
    "related": "張紘"
  },
  {
    "id": 111,
    "name": "緑絹金花抹額",
    "category": "文物",
    "weapon_type": null,
    "related": "関索"
  },
  {
    "id": 112,
    "name": "春秋左氏伝",
    "category": "文物",
    "weapon_type": null,
    "related": "関羽"
  },
  {
    "id": 113,
    "name": "貞烈弓籠手",
    "category": "防具",
    "weapon_type": null,
    "related": "王異"
  },
  {
    "id": 114,
    "name": "黄焔柳緑披風",
    "category": "防具",
    "weapon_type": null,
    "related": "廖化"
  },
  {
    "id": 115,
    "name": "鉄脊蛇矛",
    "category": "武器",
    "weapon_type": "槍",
    "related": "程普"
  },
  {
    "id": 116,
    "name": "虎筋弦神弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "呂布"
  },
  {
    "id": 117,
    "name": "赤心硬殻兜",
    "category": "防具",
    "weapon_type": null,
    "related": "太史慈"
  },
  {
    "id": 118,
    "name": "厳毅典麗宝剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "満寵"
  },
  {
    "id": 119,
    "name": "弘雅守信冠",
    "category": "防具",
    "weapon_type": null,
    "related": "諸葛瑾"
  },
  {
    "id": 120,
    "name": "虎豹元帥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "曹真"
  },
  {
    "id": 121,
    "name": "玄漆紫玉金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張春華"
  },
  {
    "id": 122,
    "name": "彩漆鳳龍紋盾",
    "category": "防具",
    "weapon_type": null,
    "related": "郝昭"
  },
  {
    "id": 123,
    "name": "勢焔雷紋兜",
    "category": "防具",
    "weapon_type": null,
    "related": "朱然"
  },
  {
    "id": 124,
    "name": "迅風衝決剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "皇甫嵩"
  },
  {
    "id": 125,
    "name": "二兎観月扇",
    "category": "武器",
    "weapon_type": "弓",
    "related": "小喬"
  },
  {
    "id": 126,
    "name": "龍紋鉄甲",
    "category": "防具",
    "weapon_type": null,
    "related": "鄭成功"
  },
  {
    "id": 127,
    "name": "六尺斬馬刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "鄭成功"
  },
  {
    "id": 128,
    "name": "百保鮮卑重甲",
    "category": "防具",
    "weapon_type": null,
    "related": "高長恭"
  },
  {
    "id": 129,
    "name": "獠牙鬼面",
    "category": "文物",
    "weapon_type": null,
    "related": "高長恭"
  },
  {
    "id": 130,
    "name": "瀝泉槍",
    "category": "武器",
    "weapon_type": "槍",
    "related": "岳飛"
  },
  {
    "id": 131,
    "name": "紅纓帥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "岳飛"
  },
  {
    "id": 132,
    "name": "軒轅剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "セプテム"
  },
  {
    "id": 133,
    "name": "万鈞神弩",
    "category": "武器",
    "weapon_type": "弓",
    "related": "ニコル"
  },
  {
    "id": 134,
    "name": "怪盗の仮面",
    "category": "防具",
    "weapon_type": null,
    "related": "軒轅剣参"
  },
  {
    "id": 135,
    "name": "霊虚扇",
    "category": "文物",
    "weapon_type": null,
    "related": "軒轅剣参"
  },
  {
    "id": 136,
    "name": "無塵剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "李逍遥",
    "factions": [
      "蜀",
      "イベント"
    ]
  },
  {
    "id": 137,
    "name": "金蛇鞭",
    "category": "武器",
    "weapon_type": "馬",
    "related": "林月如",
    "factions": [
      "蜀",
      "イベント"
    ]
  },
  {
    "id": 138,
    "name": "聖霊披風",
    "category": "防具",
    "weapon_type": null,
    "related": "趙霊児",
    "factions": [
      "他",
      "イベント"
    ]
  },
  {
    "id": 139,
    "name": "煉蠱皿",
    "category": "文物",
    "weapon_type": null,
    "related": "阿奴",
    "factions": [
      "他",
      "イベント"
    ]
  },
  {
    "id": 140,
    "name": "蜀山武功秘籍",
    "category": "文物",
    "weapon_type": null,
    "related": "仙剣奇侠伝",
    "factions": [
      "イベント"
    ]
  },
  {
    "id": 141,
    "name": "龍淵剣",
    "category": "武器",
    "weapon_type": "全",
    "related": "繁体字版"
  },
  {
    "id": 142,
    "name": "碧月仙裙",
    "category": "防具",
    "weapon_type": null,
    "related": "繁体字版"
  },
  {
    "id": 143,
    "name": "五色線",
    "category": "文物",
    "weapon_type": null,
    "related": "繁体字版"
  },
  {
    "id": 144,
    "name": "ゲームショウ羽扇",
    "category": "武器",
    "weapon_type": "全",
    "related": "繁体字版"
  },
  {
    "id": 145,
    "name": "同楽会茶葉礼盒",
    "category": "文物",
    "weapon_type": null,
    "related": "繁体字版"
  },
  {
    "id": 146,
    "name": "大紅柘榴石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "董白"
  },
  {
    "id": 147,
    "name": "黄天大道旗槍",
    "category": "武器",
    "weapon_type": "全",
    "related": "黄巾"
  },
  {
    "id": 148,
    "name": "躬先越嶺笠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "鄧艾"
  },
  {
    "id": 149,
    "name": "劉家伝来の宝剣",
    "category": "武器",
    "weapon_type": "全",
    "related": "横山"
  },
  {
    "id": 150,
    "name": "白旄乾坤旗",
    "category": "武器",
    "weapon_type": "槍",
    "related": "呂尚"
  },
  {
    "id": 151,
    "name": "果勇金銅鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "李信"
  },
  {
    "id": 152,
    "name": "報讐克勝冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫臏"
  },
  {
    "id": 153,
    "name": "孫臏兵法",
    "category": "文物",
    "weapon_type": null,
    "related": "孫臏"
  },
  {
    "id": 154,
    "name": "驍武凶悍大刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "魏延"
  },
  {
    "id": 155,
    "name": "岱斗帽沿兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬岱"
  },
  {
    "id": 156,
    "name": "雄俊羽毛扇",
    "category": "武器",
    "weapon_type": "弓",
    "related": "周瑜"
  },
  {
    "id": 157,
    "name": "雄俊光錦袍鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "周瑜"
  },
  {
    "id": 158,
    "name": "麒龍志継鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "姜維"
  },
  {
    "id": 159,
    "name": "武衛虎士刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "許褚"
  },
  {
    "id": 160,
    "name": "武衛虎侯頭巾",
    "category": "防具",
    "weapon_type": null,
    "related": "許褚"
  },
  {
    "id": 161,
    "name": "緋紅尖晶石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "甄氏"
  },
  {
    "id": 162,
    "name": "猛鋭黒革帯",
    "category": "文物",
    "weapon_type": null,
    "related": "孫策"
  },
  {
    "id": 163,
    "name": "飛鳥装束",
    "category": "防具",
    "weapon_type": null,
    "related": "ORIGINS"
  },
  {
    "id": 164,
    "name": "張飛の帽子",
    "category": "防具",
    "weapon_type": null,
    "related": "張飛O"
  },
  {
    "id": 165,
    "name": "夏侯惇の眼帯",
    "category": "文物",
    "weapon_type": null,
    "related": "夏侯惇O"
  },
  {
    "id": 166,
    "name": "孫尚香の乾坤圏",
    "category": "武器",
    "weapon_type": "弓",
    "related": "孫尚香O"
  },
  {
    "id": 167,
    "name": "万機相輔冠",
    "category": "防具",
    "weapon_type": null,
    "related": "呂不韋"
  },
  {
    "id": 168,
    "name": "呂氏春秋",
    "category": "文物",
    "weapon_type": null,
    "related": "呂不韋"
  },
  {
    "id": 169,
    "name": "三國志40周年の旗",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント"
  },
  {
    "id": 170,
    "name": "三國志40周年の盾",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 171,
    "name": "三國志40周年の書",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 172,
    "name": "遁甲天書",
    "category": "文物",
    "weapon_type": null,
    "related": "左慈"
  },
  {
    "id": 173,
    "name": "神刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "利権"
  },
  {
    "id": 174,
    "name": "宝双剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "利権"
  },
  {
    "id": 175,
    "name": "宝剣",
    "category": "武器",
    "weapon_type": "弓",
    "related": "利権"
  },
  {
    "id": 176,
    "name": "宝雕弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "利権"
  },
  {
    "id": 177,
    "name": "象鼻刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "利権"
  },
  {
    "id": 178,
    "name": "蛇戟",
    "category": "武器",
    "weapon_type": "馬",
    "related": "利権"
  },
  {
    "id": 179,
    "name": "明光鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 180,
    "name": "黒光鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 181,
    "name": "委貌冠",
    "category": "防具",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 182,
    "name": "易経",
    "category": "文物",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 183,
    "name": "戦国策",
    "category": "文物",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 184,
    "name": "呂氏鏡",
    "category": "文物",
    "weapon_type": null,
    "related": "利権"
  },
  {
    "id": 185,
    "name": "七星宝刀",
    "category": "武器",
    "weapon_type": "全",
    "related": "利権"
  },
  {
    "id": 186,
    "name": "太平要術の書",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 187,
    "name": "狐白裘",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 188,
    "name": "冕冠",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 189,
    "name": "西方の杖",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント"
  },
  {
    "id": 190,
    "name": "蝙蝠披風",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 191,
    "name": "南瓜の灯燈",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 192,
    "name": "西方の盾",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 193,
    "name": "西方の鞭",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント"
  },
  {
    "id": 194,
    "name": "龍の水槍",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント"
  },
  {
    "id": 195,
    "name": "羊の遊泳圏",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 196,
    "name": "九華扇",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント"
  },
  {
    "id": 197,
    "name": "西方の紅帽",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 198,
    "name": "炎帝神農茶譜",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント"
  },
  {
    "id": 199,
    "name": "和泉守兼定",
    "category": "武器",
    "weapon_type": "全",
    "related": "コラボ"
  },
  {
    "id": 200,
    "name": "だんだら羽織",
    "category": "防具",
    "weapon_type": null,
    "related": "コラボ"
  },
  {
    "id": 201,
    "name": "孔明の木像",
    "category": "文物",
    "weapon_type": null,
    "related": "コラボ"
  },
  {
    "id": 202,
    "name": "金色のロケット",
    "category": "文物",
    "weapon_type": null,
    "related": "ラインハルト",
    "factions": [
      "魏",
      "イベント"
    ]
  },
  {
    "id": 203,
    "name": "星間航路図",
    "category": "文物",
    "weapon_type": null,
    "related": "コラボ",
    "factions": [
      "イベント"
    ]
  },
  {
    "id": 204,
    "name": "魔術師の帽子",
    "category": "防具",
    "weapon_type": null,
    "related": "ヤン",
    "factions": [
      "蜀",
      "イベント"
    ]
  },
  {
    "id": 205,
    "name": "奔走の算盤",
    "category": "文物",
    "weapon_type": null,
    "related": "コラボ"
  }
];

console.log('名宝データ読み込み完了:', EMBEDDED_TREASURES_DATA.length, '個');
