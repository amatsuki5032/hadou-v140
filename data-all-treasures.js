// 名宝データ
const EMBEDDED_TREASURES_DATA = [
  {
    "id": 1,
    "name": "蛇矛",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張飛",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 2,
    "name": "青龍偃月刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "関羽",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 3,
    "name": "元戎弩",
    "category": "武器",
    "weapon_type": "弓",
    "related": "諸葛亮",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 4,
    "name": "孫子の兵法書",
    "category": "文物",
    "weapon_type": null,
    "related": "孫堅",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 5,
    "name": "方天画戟",
    "category": "武器",
    "weapon_type": "馬",
    "related": "呂布",
    "factions": []
  },
  {
    "id": 6,
    "name": "雌雄一対の剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "劉備",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 7,
    "name": "召虎兜",
    "category": "防具",
    "weapon_type": null,
    "related": "張遼",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 8,
    "name": "郭子兵略",
    "category": "文物",
    "weapon_type": null,
    "related": "郭嘉",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 9,
    "name": "鳴鈴双短戟",
    "category": "武器",
    "weapon_type": "弓",
    "related": "甘寧",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 10,
    "name": "周郎琵琶",
    "category": "文物",
    "weapon_type": null,
    "related": "周瑜",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 11,
    "name": "太尉冠",
    "category": "防具",
    "weapon_type": null,
    "related": "賈詡",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 12,
    "name": "虎臣瓢箪",
    "category": "文物",
    "weapon_type": null,
    "related": "張飛",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 13,
    "name": "鮮卑角端弓",
    "category": "武器",
    "weapon_type": "馬",
    "related": "異民族",
    "factions": []
  },
  {
    "id": 14,
    "name": "五渓狼牙棒",
    "category": "武器",
    "weapon_type": "槍",
    "related": "異民族",
    "factions": []
  },
  {
    "id": 15,
    "name": "山越鋸歯刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "異民族",
    "factions": []
  },
  {
    "id": 16,
    "name": "青釭の剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "趙雲",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 17,
    "name": "虎皮披風",
    "category": "防具",
    "weapon_type": null,
    "related": "孫策",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 18,
    "name": "射透弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "太史慈",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 19,
    "name": "麟角槍",
    "category": "武器",
    "weapon_type": "槍",
    "related": "姜維",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 20,
    "name": "南蛮獣牙首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "異民族",
    "factions": []
  },
  {
    "id": 21,
    "name": "烏桓貂毛兜",
    "category": "防具",
    "weapon_type": null,
    "related": "異民族",
    "factions": []
  },
  {
    "id": 22,
    "name": "羌毛領披風",
    "category": "防具",
    "weapon_type": null,
    "related": "異民族",
    "factions": []
  },
  {
    "id": 23,
    "name": "白羽扇",
    "category": "武器",
    "weapon_type": "槍",
    "related": "諸葛亮",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 24,
    "name": "三叉束髪紫金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "呂布",
    "factions": []
  },
  {
    "id": 25,
    "name": "黒紗金飾冠",
    "category": "防具",
    "weapon_type": null,
    "related": "司馬懿",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 26,
    "name": "紫藤紗錦披帛",
    "category": "文物",
    "weapon_type": null,
    "related": "貂蝉",
    "factions": []
  },
  {
    "id": 27,
    "name": "太師黄金爵",
    "category": "文物",
    "weapon_type": null,
    "related": "董卓",
    "factions": []
  },
  {
    "id": 28,
    "name": "武弁大冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫堅",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 29,
    "name": "黄武勢剣",
    "category": "武器",
    "weapon_type": "弓",
    "related": "陸遜",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 30,
    "name": "翡翠玉笛",
    "category": "文物",
    "weapon_type": null,
    "related": "小喬",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 31,
    "name": "龍紋緑袍鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "関羽",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 32,
    "name": "疾風剛弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "夏侯淵",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 33,
    "name": "軍師錦羅袍",
    "category": "文物",
    "weapon_type": null,
    "related": "龐統",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 34,
    "name": "立義鋼刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "龐徳",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 35,
    "name": "二石之弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "黄忠",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 36,
    "name": "才捷弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "孫尚香",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 37,
    "name": "商君書",
    "category": "文物",
    "weapon_type": null,
    "related": "謎",
    "factions": []
  },
  {
    "id": 38,
    "name": "獅子頭の兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬超",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 39,
    "name": "孤月独明剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "夏侯惇",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 40,
    "name": "古錠刀",
    "category": "武器",
    "weapon_type": "全",
    "related": "孫堅",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 41,
    "name": "克定鋭刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張郃",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 42,
    "name": "金繍紅錦半臂",
    "category": "防具",
    "weapon_type": null,
    "related": "孫権",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 43,
    "name": "玲瓏獅蛮帯",
    "category": "文物",
    "weapon_type": null,
    "related": "呂玲綺",
    "factions": []
  },
  {
    "id": 44,
    "name": "金系帯紫錦披風",
    "category": "防具",
    "weapon_type": null,
    "related": "皇甫嵩",
    "factions": []
  },
  {
    "id": 45,
    "name": "青嚢書",
    "category": "文物",
    "weapon_type": null,
    "related": "華佗",
    "factions": [
      "袁紹"
    ]
  },
  {
    "id": 46,
    "name": "太平九節杖",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張角",
    "factions": []
  },
  {
    "id": 47,
    "name": "克己猟龍兜",
    "category": "防具",
    "weapon_type": null,
    "related": "呂蒙",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 48,
    "name": "千創玄英鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "周泰",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 49,
    "name": "克敵機謀剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "荀攸",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 50,
    "name": "荀氏春秋要論",
    "category": "文物",
    "weapon_type": null,
    "related": "荀彧",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 51,
    "name": "羅綺香嚢",
    "category": "文物",
    "weapon_type": null,
    "related": "謎",
    "factions": []
  },
  {
    "id": 52,
    "name": "倚天の剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "曹操",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 53,
    "name": "烈志蒼驥鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "曹操",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 54,
    "name": "孟徳新書",
    "category": "文物",
    "weapon_type": null,
    "related": "曹操",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 55,
    "name": "剛断戦斧",
    "category": "武器",
    "weapon_type": "槍",
    "related": "徐晃",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 56,
    "name": "紅玉珍珠金耳墜",
    "category": "文物",
    "weapon_type": null,
    "related": "関銀屏",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 57,
    "name": "朱襟白絹半臂",
    "category": "防具",
    "weapon_type": null,
    "related": "徐庶",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 58,
    "name": "双鉄戟",
    "category": "武器",
    "weapon_type": "槍",
    "related": "典韋",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 59,
    "name": "与韓将軍書",
    "category": "文物",
    "weapon_type": null,
    "related": "賈詡",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 60,
    "name": "大喬琵琶",
    "category": "文物",
    "weapon_type": null,
    "related": "大喬",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 61,
    "name": "白狐毛皮披風",
    "category": "防具",
    "weapon_type": null,
    "related": "公孫瓚",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 62,
    "name": "神獣面白纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬騰",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 63,
    "name": "金繍緑錦披風",
    "category": "防具",
    "weapon_type": null,
    "related": "陸抗",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 64,
    "name": "玄熊毛銀黄兜",
    "category": "防具",
    "weapon_type": null,
    "related": "華雄",
    "factions": []
  },
  {
    "id": 65,
    "name": "黄幡豹尾",
    "category": "文物",
    "weapon_type": null,
    "related": "呂布",
    "factions": []
  },
  {
    "id": 66,
    "name": "太平賢良黄金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張角",
    "factions": []
  },
  {
    "id": 67,
    "name": "鷹揚玄冥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "袁紹",
    "factions": [
      "袁紹"
    ]
  },
  {
    "id": 68,
    "name": "驍悍傲骨鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "魏延",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 69,
    "name": "瑠璃珠金花冠",
    "category": "防具",
    "weapon_type": null,
    "related": "甄氏",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 70,
    "name": "純和青金石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "王元姫",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 71,
    "name": "天柱鉄大刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "顔良",
    "factions": [
      "袁紹"
    ]
  },
  {
    "id": 72,
    "name": "天禄一角兜",
    "category": "防具",
    "weapon_type": null,
    "related": "文醜",
    "factions": [
      "袁紹"
    ]
  },
  {
    "id": 73,
    "name": "召虎鉤鎌刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "張遼",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 74,
    "name": "真鋼鎮定剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "孫策",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 75,
    "name": "道論",
    "category": "文物",
    "weapon_type": null,
    "related": "鍾会",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 76,
    "name": "平蜀地理図",
    "category": "文物",
    "weapon_type": null,
    "related": "鄧艾",
    "factions": []
  },
  {
    "id": 77,
    "name": "明道方略冠",
    "category": "防具",
    "weapon_type": null,
    "related": "魯粛",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 78,
    "name": "錦帆鈴飾",
    "category": "文物",
    "weapon_type": null,
    "related": "甘寧",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 79,
    "name": "白銀龍胆鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "趙雲",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 80,
    "name": "木牛試作模型",
    "category": "文物",
    "weapon_type": null,
    "related": "黄月英",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 81,
    "name": "登極龍紋金觚",
    "category": "文物",
    "weapon_type": null,
    "related": "曹丕",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 82,
    "name": "疾風護臂甲",
    "category": "防具",
    "weapon_type": null,
    "related": "夏侯淵",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 83,
    "name": "狼毛紫纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "董卓",
    "factions": []
  },
  {
    "id": 84,
    "name": "藍田玉軍令牌",
    "category": "文物",
    "weapon_type": null,
    "related": "諸葛恪",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 85,
    "name": "雲矩紋玉具宝剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "于禁",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 86,
    "name": "銀山雪海鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "馬雲騄",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 87,
    "name": "鋼胆鉄心槍",
    "category": "武器",
    "weapon_type": "馬",
    "related": "楽進",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 88,
    "name": "思紹",
    "category": "武器",
    "weapon_type": "槍",
    "related": "袁紹",
    "factions": [
      "袁紹"
    ]
  },
  {
    "id": 89,
    "name": "亢龍鋼鞭",
    "category": "武器",
    "weapon_type": "馬",
    "related": "文鴦",
    "factions": []
  },
  {
    "id": 90,
    "name": "富春孫氏家伝",
    "category": "文物",
    "weapon_type": null,
    "related": "孫堅",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 91,
    "name": "雄豪肩呑鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "張苞",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 92,
    "name": "燦金赤纓兜",
    "category": "防具",
    "weapon_type": null,
    "related": "黄忠",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 93,
    "name": "断江倒海鞭",
    "category": "武器",
    "weapon_type": "弓",
    "related": "黄蓋",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 94,
    "name": "奮勇燕尾牌",
    "category": "防具",
    "weapon_type": null,
    "related": "曹仁",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 95,
    "name": "司馬氏兵記",
    "category": "文物",
    "weapon_type": null,
    "related": "司馬懿",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 96,
    "name": "興起嵩峻兜",
    "category": "防具",
    "weapon_type": null,
    "related": "王平",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 97,
    "name": "壮気直躬剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "陳宮",
    "factions": []
  },
  {
    "id": 98,
    "name": "諸葛巾",
    "category": "防具",
    "weapon_type": null,
    "related": "諸葛亮",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 99,
    "name": "威福笠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "周倉",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 100,
    "name": "南天羽飾兜",
    "category": "防具",
    "weapon_type": null,
    "related": "孟獲",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 101,
    "name": "飛刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "祝融",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 102,
    "name": "先登承志頭巾",
    "category": "防具",
    "weapon_type": null,
    "related": "凌統",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 103,
    "name": "奉天銀灰冠",
    "category": "防具",
    "weapon_type": null,
    "related": "程昱",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 104,
    "name": "焦尾琴",
    "category": "文物",
    "weapon_type": null,
    "related": "蔡琰",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 105,
    "name": "碧緑双翼兜",
    "category": "防具",
    "weapon_type": null,
    "related": "関興",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 106,
    "name": "朝陽仁恵玉冠",
    "category": "防具",
    "weapon_type": null,
    "related": "劉備",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 107,
    "name": "鳳鳴双飛金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫尚香",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 108,
    "name": "鋭師飛鵠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "曹洪",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 109,
    "name": "励志方正冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張昭",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 110,
    "name": "賢佐治道笏",
    "category": "文物",
    "weapon_type": null,
    "related": "張紘",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 111,
    "name": "緑絹金花抹額",
    "category": "文物",
    "weapon_type": null,
    "related": "関索",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 112,
    "name": "春秋左氏伝",
    "category": "文物",
    "weapon_type": null,
    "related": "関羽",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 113,
    "name": "貞烈弓籠手",
    "category": "防具",
    "weapon_type": null,
    "related": "王異",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 114,
    "name": "黄焔柳緑披風",
    "category": "防具",
    "weapon_type": null,
    "related": "廖化",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 115,
    "name": "鉄脊蛇矛",
    "category": "武器",
    "weapon_type": "槍",
    "related": "程普",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 116,
    "name": "虎筋弦神弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "呂布",
    "factions": []
  },
  {
    "id": 117,
    "name": "赤心硬殻兜",
    "category": "防具",
    "weapon_type": null,
    "related": "太史慈",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 118,
    "name": "厳毅典麗宝剣",
    "category": "武器",
    "weapon_type": "馬",
    "related": "満寵",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 119,
    "name": "弘雅守信冠",
    "category": "防具",
    "weapon_type": null,
    "related": "諸葛瑾",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 120,
    "name": "虎豹元帥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "曹真",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 121,
    "name": "玄漆紫玉金冠",
    "category": "防具",
    "weapon_type": null,
    "related": "張春華",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 122,
    "name": "彩漆鳳龍紋盾",
    "category": "防具",
    "weapon_type": null,
    "related": "郝昭",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 123,
    "name": "勢焔雷紋兜",
    "category": "防具",
    "weapon_type": null,
    "related": "朱然",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 124,
    "name": "迅風衝決剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "皇甫嵩",
    "factions": []
  },
  {
    "id": 125,
    "name": "二兎観月扇",
    "category": "武器",
    "weapon_type": "弓",
    "related": "小喬",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 126,
    "name": "龍紋鉄甲",
    "category": "防具",
    "weapon_type": null,
    "related": "鄭成功",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 127,
    "name": "六尺斬馬刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "鄭成功",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 128,
    "name": "百保鮮卑重甲",
    "category": "防具",
    "weapon_type": null,
    "related": "高長恭",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 129,
    "name": "獠牙鬼面",
    "category": "文物",
    "weapon_type": null,
    "related": "高長恭",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 130,
    "name": "瀝泉槍",
    "category": "武器",
    "weapon_type": "槍",
    "related": "岳飛",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 131,
    "name": "紅纓帥兜",
    "category": "防具",
    "weapon_type": null,
    "related": "岳飛",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 132,
    "name": "軒轅剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "セプテム",
    "factions": []
  },
  {
    "id": 133,
    "name": "万鈞神弩",
    "category": "武器",
    "weapon_type": "弓",
    "related": "ニコル",
    "factions": []
  },
  {
    "id": 134,
    "name": "怪盗の仮面",
    "category": "防具",
    "weapon_type": null,
    "related": "軒轅剣参",
    "factions": []
  },
  {
    "id": 135,
    "name": "霊虚扇",
    "category": "文物",
    "weapon_type": null,
    "related": "軒轅剣参",
    "factions": []
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
      "イベント",
      "蜀"
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
      "イベント",
      "蜀"
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
    "related": "繁体字版",
    "factions": []
  },
  {
    "id": 142,
    "name": "碧月仙裙",
    "category": "防具",
    "weapon_type": null,
    "related": "繁体字版",
    "factions": []
  },
  {
    "id": 143,
    "name": "五色線",
    "category": "文物",
    "weapon_type": null,
    "related": "繁体字版",
    "factions": []
  },
  {
    "id": 144,
    "name": "ゲームショウ羽扇",
    "category": "武器",
    "weapon_type": "全",
    "related": "繁体字版",
    "factions": []
  },
  {
    "id": 145,
    "name": "同楽会茶葉礼盒",
    "category": "文物",
    "weapon_type": null,
    "related": "繁体字版",
    "factions": []
  },
  {
    "id": 146,
    "name": "大紅柘榴石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "董白",
    "factions": []
  },
  {
    "id": 147,
    "name": "黄天大道旗槍",
    "category": "武器",
    "weapon_type": "全",
    "related": "黄巾",
    "factions": []
  },
  {
    "id": 148,
    "name": "躬先越嶺笠兜",
    "category": "防具",
    "weapon_type": null,
    "related": "鄧艾",
    "factions": []
  },
  {
    "id": 149,
    "name": "劉家伝来の宝剣",
    "category": "武器",
    "weapon_type": "全",
    "related": "横山",
    "factions": []
  },
  {
    "id": 150,
    "name": "白旄乾坤旗",
    "category": "武器",
    "weapon_type": "槍",
    "related": "呂尚",
    "factions": []
  },
  {
    "id": 151,
    "name": "果勇金銅鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "李信",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 152,
    "name": "報讐克勝冠",
    "category": "防具",
    "weapon_type": null,
    "related": "孫臏",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 153,
    "name": "孫臏兵法",
    "category": "文物",
    "weapon_type": null,
    "related": "孫臏",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 154,
    "name": "驍武凶悍大刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "魏延",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 155,
    "name": "岱斗帽沿兜",
    "category": "防具",
    "weapon_type": null,
    "related": "馬岱",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 156,
    "name": "雄俊羽毛扇",
    "category": "武器",
    "weapon_type": "弓",
    "related": "周瑜",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 157,
    "name": "雄俊光錦袍鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "周瑜",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 158,
    "name": "麒龍志継鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "姜維",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 159,
    "name": "武衛虎士刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "許褚",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 160,
    "name": "武衛虎侯頭巾",
    "category": "防具",
    "weapon_type": null,
    "related": "許褚",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 161,
    "name": "緋紅尖晶石首飾",
    "category": "文物",
    "weapon_type": null,
    "related": "甄氏",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 162,
    "name": "猛鋭黒革帯",
    "category": "文物",
    "weapon_type": null,
    "related": "孫策",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 163,
    "name": "飛鳥装束",
    "category": "防具",
    "weapon_type": null,
    "related": "ORIGINS",
    "factions": []
  },
  {
    "id": 164,
    "name": "張飛の帽子",
    "category": "防具",
    "weapon_type": null,
    "related": "張飛O",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 165,
    "name": "夏侯惇の眼帯",
    "category": "文物",
    "weapon_type": null,
    "related": "夏侯惇O",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 166,
    "name": "孫尚香の乾坤圏",
    "category": "武器",
    "weapon_type": "弓",
    "related": "孫尚香O",
    "factions": [
      "呉"
    ]
  },
  {
    "id": 167,
    "name": "万機相輔冠",
    "category": "防具",
    "weapon_type": null,
    "related": "呂不韋",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 168,
    "name": "呂氏春秋",
    "category": "文物",
    "weapon_type": null,
    "related": "呂不韋",
    "factions": [
      "魏"
    ]
  },
  {
    "id": 169,
    "name": "三國志40周年の旗",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント",
    "factions": []
  },
  {
    "id": 170,
    "name": "三國志40周年の盾",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 171,
    "name": "三國志40周年の書",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 172,
    "name": "遁甲天書",
    "category": "文物",
    "weapon_type": null,
    "related": "左慈",
    "factions": [
      "蜀"
    ]
  },
  {
    "id": 173,
    "name": "神刀",
    "category": "武器",
    "weapon_type": "槍",
    "related": "利権",
    "factions": []
  },
  {
    "id": 174,
    "name": "宝双剣",
    "category": "武器",
    "weapon_type": "槍",
    "related": "利権",
    "factions": []
  },
  {
    "id": 175,
    "name": "宝剣",
    "category": "武器",
    "weapon_type": "弓",
    "related": "利権",
    "factions": []
  },
  {
    "id": 176,
    "name": "宝雕弓",
    "category": "武器",
    "weapon_type": "弓",
    "related": "利権",
    "factions": []
  },
  {
    "id": 177,
    "name": "象鼻刀",
    "category": "武器",
    "weapon_type": "馬",
    "related": "利権",
    "factions": []
  },
  {
    "id": 178,
    "name": "蛇戟",
    "category": "武器",
    "weapon_type": "馬",
    "related": "利権",
    "factions": []
  },
  {
    "id": 179,
    "name": "明光鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 180,
    "name": "黒光鎧",
    "category": "防具",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 181,
    "name": "委貌冠",
    "category": "防具",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 182,
    "name": "易経",
    "category": "文物",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 183,
    "name": "戦国策",
    "category": "文物",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 184,
    "name": "呂氏鏡",
    "category": "文物",
    "weapon_type": null,
    "related": "利権",
    "factions": []
  },
  {
    "id": 185,
    "name": "七星宝刀",
    "category": "武器",
    "weapon_type": "全",
    "related": "利権",
    "factions": []
  },
  {
    "id": 186,
    "name": "太平要術の書",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 187,
    "name": "狐白裘",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 188,
    "name": "冕冠",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 189,
    "name": "西方の杖",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント",
    "factions": []
  },
  {
    "id": 190,
    "name": "蝙蝠披風",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 191,
    "name": "南瓜の灯燈",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 192,
    "name": "西方の盾",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 193,
    "name": "西方の鞭",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント",
    "factions": []
  },
  {
    "id": 194,
    "name": "龍の水槍",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント",
    "factions": []
  },
  {
    "id": 195,
    "name": "羊の遊泳圏",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 196,
    "name": "九華扇",
    "category": "武器",
    "weapon_type": "全",
    "related": "イベント",
    "factions": []
  },
  {
    "id": 197,
    "name": "西方の紅帽",
    "category": "防具",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
  },
  {
    "id": 198,
    "name": "炎帝神農茶譜",
    "category": "文物",
    "weapon_type": null,
    "related": "イベント",
    "factions": []
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
