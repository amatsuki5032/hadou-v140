// LR武将データ
const LR_GENERALS_DATA = [
  {
    "id": 1,
    "rarity": "LR",
    "name": "張飛",
    "unit_type": "馬",
    "leadership": 97,
    "attack": 99,
    "intelligence": 45,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "咆哮",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "燕人",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "闘魂",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "鋼胆",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 2,
    "rarity": "LR",
    "name": "呂尚",
    "unit_type": "槍",
    "leadership": 98,
    "attack": 54,
    "intelligence": 100,
    "affinity": 10,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "軍略",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "太公望",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "軍導",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "極地",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 3,
    "rarity": "LR",
    "name": "周瑜",
    "unit_type": "弓",
    "leadership": 98,
    "attack": 83,
    "intelligence": 98,
    "affinity": 125,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "火燎",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "明火",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "練策",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "炎舞",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 4,
    "rarity": "LR",
    "name": "郭嘉",
    "unit_type": "馬",
    "leadership": 89,
    "attack": 49,
    "intelligence": 98,
    "affinity": 25,
    "attendant_position": "左下",
    "skills": {
      "A": {
        "name": "万全",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "探求",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "理知",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "軍導",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "鋭敏",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 5,
    "rarity": "LR",
    "name": "夏侯淵",
    "unit_type": "弓",
    "leadership": 92,
    "attack": 94,
    "intelligence": 68,
    "affinity": 25,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "迅速",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "探求",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "急風",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "闘魂",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "翻弄",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 6,
    "rarity": "LR",
    "name": "李信",
    "unit_type": "槍",
    "leadership": 85,
    "attack": 90,
    "intelligence": 53,
    "affinity": 25,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "飛躍",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "進撃",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "雄傑",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "信義",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 7,
    "rarity": "LR",
    "name": "呂布",
    "unit_type": "弓",
    "leadership": 96,
    "attack": 100,
    "intelligence": 32,
    "affinity": 145,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "裂覇",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "豪武",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "猛撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "鬼神",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 8,
    "rarity": "LR",
    "name": "貂蝉",
    "unit_type": "弓",
    "leadership": 65,
    "attack": 28,
    "intelligence": 82,
    "affinity": 145,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "万花",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "三徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "護身",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "煌天",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 9,
    "rarity": "LR",
    "name": "太史慈",
    "unit_type": "弓",
    "leadership": 91,
    "attack": 95,
    "intelligence": 69,
    "affinity": 124,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "強靭",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人脈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "撃烈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討歩",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "仁勇",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 10,
    "rarity": "LR",
    "name": "龐統",
    "unit_type": "槍",
    "leadership": 91,
    "attack": 63,
    "intelligence": 98,
    "affinity": 73,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "計謀",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "指導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "鳳雛",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "練策",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "連縛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 11,
    "rarity": "LR",
    "name": "孫臏",
    "unit_type": "弓",
    "leadership": 86,
    "attack": 1,
    "intelligence": 99,
    "affinity": 126,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "明閃",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "包囲",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "防槍",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "誘引",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 12,
    "rarity": "LR",
    "name": "許褚",
    "unit_type": "槍",
    "leadership": 78,
    "attack": 98,
    "intelligence": 37,
    "affinity": 25,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "剛壁",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "虎痴",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "防馬",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "堅厚",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 13,
    "rarity": "LR",
    "name": "孫堅",
    "unit_type": "馬",
    "leadership": 96,
    "attack": 92,
    "intelligence": 83,
    "affinity": 126,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "統軍",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "虎将",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "忍耐",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "克捷",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 14,
    "rarity": "LR",
    "name": "黄忠",
    "unit_type": "弓",
    "leadership": 91,
    "attack": 95,
    "intelligence": 68,
    "affinity": 72,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "矍鑠",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "窮追",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "忍耐",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "断風",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 15,
    "rarity": "LR",
    "name": "呂不韋",
    "unit_type": "槍",
    "leadership": 77,
    "attack": 47,
    "intelligence": 88,
    "affinity": 15,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "政導",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "文信侯",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "護身",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "大賈",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 16,
    "rarity": "LR",
    "name": "趙雲",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "壮胆",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "神槍",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛威",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "義志",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 17,
    "rarity": "LR",
    "name": "甘寧",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 129,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "鳴響",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "乱戟",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "雄傑",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "暴勇",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 18,
    "rarity": "LR",
    "name": "法正",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 72,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "謀傑",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "雪怨",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "防槍",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "威刑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 19,
    "rarity": "LR",
    "name": "賈詡",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 20,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "万策",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "先計",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "防馬",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "離背",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 20,
    "rarity": "LR",
    "name": "韓信",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 65,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "傑士",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "背水",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛堅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "栄達",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 21,
    "rarity": "LR",
    "name": "夏侯惇",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "奮威",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "雄猛",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討弓",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "天衝",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 22,
    "rarity": "LR",
    "name": "陸遜",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 122,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "光心",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "極炎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "火烈",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "慧智",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 23,
    "rarity": "LR",
    "name": "ラインハルト",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "常勝",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "威信",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪毅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "宣揚",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 24,
    "rarity": "LR",
    "name": "ヤン",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "不敗",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "妙手",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "沈着",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "奇計",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 25,
    "rarity": "LR",
    "name": "龐徳",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 65,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "立義",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "鍛造",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "驍威",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討騎",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "猛敢",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 26,
    "rarity": "LR",
    "name": "廉頗",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 95,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "巧練",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "壮活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛堅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "雄将",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 27,
    "rarity": "LR",
    "name": "張郃",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 27,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "臨戦",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "急迫",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛堅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "企及",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 28,
    "rarity": "LR",
    "name": "呂蒙",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 124,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "凌計",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "至明",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "軍導",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "纘堅",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 29,
    "rarity": "LR",
    "name": "孫策",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "峻烈",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "快覇",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛威",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "宿志",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 30,
    "rarity": "LR",
    "name": "大喬",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "朗詠",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "明響",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "護身",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "連心",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 31,
    "rarity": "LR",
    "name": "藺相如",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 95,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "連城",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "石工",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "政化",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "忍耐",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "鼓励",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 32,
    "rarity": "LR",
    "name": "孫尚香",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "佳弓",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "継志",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "防槍",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "虎破",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 33,
    "rarity": "LR",
    "name": "張遼",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 23,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "貫穿",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "震慄",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "雄傑",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "制勝",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 34,
    "rarity": "LR",
    "name": "高順",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 144,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "陥城",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "誠廉",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "崩壁",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "潔士",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 35,
    "rarity": "LR",
    "name": "王翦",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 20,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "兵威",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "厳圧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "威然",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "堅抜",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 36,
    "rarity": "LR",
    "name": "司馬懿",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 31,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "狼顧",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "探究",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "怜師",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "悧巧",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "英特",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 37,
    "rarity": "LR",
    "name": "諸葛亮",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "龍瞳",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "興風",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "明哲",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "神慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 38,
    "rarity": "LR",
    "name": "徐庶",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "羽翼",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "不惑",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "志学",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "高賢",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 39,
    "rarity": "LR",
    "name": "周泰",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 126,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "剛腹",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "護志",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "堅毅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "尽身",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 40,
    "rarity": "LR",
    "name": "徐晃",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 23,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "激追",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "迫撃",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討騎",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "克然",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 41,
    "rarity": "LR",
    "name": "范増",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 120,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "古稀",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "指導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "老巧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "排撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "倒豎",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 42,
    "rarity": "LR",
    "name": "馬超",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 70,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "神雄",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "強勢",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "騎盟",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "獅醒",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 43,
    "rarity": "LR",
    "name": "孫権",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "交結",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "伐採",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "敦睦",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "闊達",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "紫髯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 44,
    "rarity": "LR",
    "name": "小喬",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "朗吟",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "吹響",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "麗賢",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "花舞",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 45,
    "rarity": "LR",
    "name": "董卓",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "歓喜",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "強奪",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "狂剛",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "梟暴",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "驕慢",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 46,
    "rarity": "LR",
    "name": "皇甫嵩",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 88,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "征圧",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "将器",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "火烈",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "全霊",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 47,
    "rarity": "LR",
    "name": "英布",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 100,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "凶威",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "強奪",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "黥陣",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討弓",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "九江王",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 48,
    "rarity": "LR",
    "name": "関銀屏",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "豪絢",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "斬断",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "武勢",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "究武",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 49,
    "rarity": "LR",
    "name": "鍾会",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 20,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "誇耀",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "詭道",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "排撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "謀離",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 50,
    "rarity": "LR",
    "name": "華佗",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 100,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "療養",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "指導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "神医",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "調護",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "活癒",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 51,
    "rarity": "LR",
    "name": "李牧",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 100,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "守将",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "俊英",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "堅定",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "巧戦",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 52,
    "rarity": "LR",
    "name": "鄭成功",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "声威",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "気節",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討歩",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "艦隊",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 53,
    "rarity": "LR",
    "name": "張角",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 7,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "大賢",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "天公",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "慧烈",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "天雷",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 54,
    "rarity": "LR",
    "name": "典韋",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "侍衛",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "咬牙",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "槍盟",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "怒目",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 55,
    "rarity": "LR",
    "name": "魯粛",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 124,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "慧導",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人脈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "推心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "聡哲",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "節義",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 56,
    "rarity": "LR",
    "name": "鄧艾",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 41,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "迅破",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "耕作",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "耀威",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "双全",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "乗勢",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 57,
    "rarity": "LR",
    "name": "呉起",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "改政",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "善謀",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "賢略",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "才俊",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 58,
    "rarity": "LR",
    "name": "公孫瓚",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 65,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "駿駆",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "白断",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "壮撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "騎陣",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 59,
    "rarity": "LR",
    "name": "陸抗",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 122,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "結軍",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "通察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "雄傑",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "峻節",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 60,
    "rarity": "LR",
    "name": "羊祜",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 31,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "厳威",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "伐採",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "恩信",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "崩壁",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "誠篤",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 61,
    "rarity": "LR",
    "name": "劉備",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "備急",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "大器",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "立志",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "大徳",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 62,
    "rarity": "LR",
    "name": "魏延",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 80,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "豪刃",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "鍛造",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "継戦",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛堅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "驕剛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 63,
    "rarity": "LR",
    "name": "管夷吾",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 10,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "昌明",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "耕作",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "威望",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "弼佐",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "隆盛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 64,
    "rarity": "LR",
    "name": "馬岱",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 70,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "驃壮",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "涼騎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "耐勢",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "遠駆",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 65,
    "rarity": "LR",
    "name": "呂玲綺",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 145,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "凛風",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "苛烈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "武勢",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "鬼撃",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 66,
    "rarity": "LR",
    "name": "黄蓋",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 127,
    "attendant_position": "右上",
    "skills": {
      "A": {
        "name": "焚焼",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "熟練",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "壮撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "宿炎",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 67,
    "rarity": "LR",
    "name": "李逍遥",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "天罡戦気",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "指導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "合体気功",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討馬",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "酔仙望月歩",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 68,
    "rarity": "LR",
    "name": "林月如",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "七訣剣気",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人脈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "弦月斬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "討馬",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "斬龍訣",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 69,
    "rarity": "LR",
    "name": "趙霊児",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 65,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "仙女",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "探究",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "盟友法術",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "忍耐",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "夢蛇",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 70,
    "rarity": "LR",
    "name": "阿奴",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 65,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "海棠",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "白苗族",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "護身",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "巫術毒蠱",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 71,
    "rarity": "LR",
    "name": "姜維",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 73,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "才腕",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "英敏",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "双全",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "活勢",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 72,
    "rarity": "LR",
    "name": "鮑叔牙",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 10,
    "attendant_position": "上/左",
    "skills": {
      "A": {
        "name": "薦賢",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "振救",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "推才",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "輔相",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 73,
    "rarity": "LR",
    "name": "袁紹",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 101,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "轟名",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "盟傑",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "破撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "奮檄",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 74,
    "rarity": "LR",
    "name": "曹操",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "謀雄",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "豪毅",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪毅",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "壮望",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  },
  {
    "id": 75,
    "rarity": "LR",
    "name": "荀彧",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 22,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "守臣",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "賢知",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "賢知",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "賢佐",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 76,
    "rarity": "LR",
    "name": "田豊",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 96,
    "attendant_position": "左下",
    "skills": {
      "A": {
        "name": "剛風",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "石工",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "賢略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "賢略",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "慧断",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 77,
    "rarity": "LR",
    "name": "甄氏",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "艶惑",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "連花",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "麗賢",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "洛妃",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 78,
    "rarity": "LR",
    "name": "馬騰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 70,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "騎主",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "雄騎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "騎盟",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "剛迅",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 79,
    "rarity": "LR",
    "name": "項燕",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "妙練",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "急射",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "衰撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "壮覇",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 80,
    "rarity": "LR",
    "name": "楽進",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 23,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "驍傑",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "壮威",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "威然",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "敢進",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 81,
    "rarity": "LR",
    "name": "朱桓",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 128,
    "attendant_position": "上/下",
    "skills": {
      "A": {
        "name": "気情",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "切至",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "崩壁",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "沈勇",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 82,
    "rarity": "LR",
    "name": "張飛O",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右",
    "skills": {
      "A": {
        "name": "闘衝波",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "剛乱矛",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "一騎当千",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "覆天嵐矛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 83,
    "rarity": "LR",
    "name": "孫尚香O",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "attendant_position": "左",
    "skills": {
      "A": {
        "name": "烈空輪",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "旋空発破",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "一騎当千",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "明月陣",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 84,
    "rarity": "LR",
    "name": "夏侯惇O",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "attendant_position": "下",
    "skills": {
      "A": {
        "name": "不壊一刀",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "鋭牙連断",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "一騎当千",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "滅尽剛牙断",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 85,
    "rarity": "LR",
    "name": "黄月英",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "才堪",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "探究",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "玄機",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "英才",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "機零",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 86,
    "rarity": "LR",
    "name": "白起",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 15,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "略地",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "統制",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "電断",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "猛撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "神機",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 87,
    "rarity": "LR",
    "name": "左慈",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "上",
    "skills": {
      "A": {
        "name": "方術",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "遁仙",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "幻法",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "惑術",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1300
  },
  {
    "id": 88,
    "rarity": "LR",
    "name": "関羽",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "右下",
    "skills": {
      "A": {
        "name": "忠勇",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "義気",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "闘撃",
        "level": 1,
        "type": "lr_inherit",
        "marker": "diamond"
      },
      "E": {
        "name": "闘神",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1400
  }
  ,
  // ========================================
  // 新規追加武将（ステータス未入力）
  // ========================================
  {
    "id": 89,
    "rarity": "LR",
    "name": "周倉", // TODO: ステータス未入力
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "attendant_position": "上/左",
    "skills": {},
    "tenpu": 1300
  },
  {
    "id": 90,
    "rarity": "LR",
    "name": "諸葛恪", // TODO: ステータス未入力
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 126,
    "attendant_position": "上",
    "skills": {},
    "tenpu": 1300
  }

];

console.log('LR武将データ読み込み完了:', LR_GENERALS_DATA.length, '名');
