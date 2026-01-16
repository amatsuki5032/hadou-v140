// 武将データ（技能統合版）

// LR武将データ (88名)
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
    "name": "ﾗｲﾝﾊﾙﾄ",
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
    "name": "関銀屛",
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
    "name": "李逍遙",
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

// UR武将データ (107名)
const UR_GENERALS_DATA = [
  {
    "id": 1001,
    "rarity": "UR",
    "name": "趙雲",
    "unit_type": "馬",
    "leadership": 96,
    "attack": 98,
    "intelligence": 78,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "龍胆",
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
        "name": "猛者",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "掃討",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1002,
    "rarity": "UR",
    "name": "劉備",
    "unit_type": "馬",
    "leadership": 87,
    "attack": 85,
    "intelligence": 77,
    "affinity": 75,
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
        "name": "投合",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1003,
    "rarity": "UR",
    "name": "張遼",
    "unit_type": "槍",
    "leadership": 95,
    "attack": 93,
    "intelligence": 86,
    "affinity": 23,
    "skills": {
      "A": {
        "name": "突貫",
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
        "name": "掃討",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "活路",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1004,
    "rarity": "UR",
    "name": "郭嘉",
    "unit_type": "槍",
    "leadership": 89,
    "attack": 45,
    "intelligence": 98,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "秘計",
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
        "name": "策士",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "機略",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1005,
    "rarity": "UR",
    "name": "周瑜",
    "unit_type": "弓",
    "leadership": 98,
    "attack": 78,
    "intelligence": 98,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "火神",
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
        "name": "策士",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "火術",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1006,
    "rarity": "UR",
    "name": "甘寧",
    "unit_type": "弓",
    "leadership": 93,
    "attack": 96,
    "intelligence": 76,
    "affinity": 129,
    "skills": {
      "A": {
        "name": "鈴鳴",
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
        "name": "豪傑",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "猛者",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1007,
    "rarity": "UR",
    "name": "張飛",
    "unit_type": "槍",
    "leadership": 97,
    "attack": 99,
    "intelligence": 33,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "燕人",
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
        "name": "奮戦",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1008,
    "rarity": "UR",
    "name": "賈詡",
    "unit_type": "弓",
    "leadership": 91,
    "attack": 48,
    "intelligence": 97,
    "affinity": 20,
    "skills": {
      "A": {
        "name": "掎角",
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
        "name": "策士",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "深謀",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1009,
    "rarity": "UR",
    "name": "孫策",
    "unit_type": "馬",
    "leadership": 96,
    "attack": 95,
    "intelligence": 77,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "雄略",
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
        "name": "投合",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1010,
    "rarity": "UR",
    "name": "大喬",
    "unit_type": "馬",
    "leadership": 49,
    "attack": 27,
    "intelligence": 73,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "威徳",
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
        "name": "敏活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "発奮",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1011,
    "rarity": "UR",
    "name": "姜維",
    "unit_type": "槍",
    "leadership": 91,
    "attack": 90,
    "intelligence": 92,
    "affinity": 73,
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
        "name": "敏活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "掃討",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1012,
    "rarity": "UR",
    "name": "太史慈",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 95,
    "intelligence": 69,
    "affinity": 124,
    "skills": {
      "A": {
        "name": "速射",
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
        "name": "連帯",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛力",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1013,
    "rarity": "UR",
    "name": "孫尚香",
    "unit_type": "馬",
    "leadership": 85,
    "attack": 89,
    "intelligence": 70,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "蜀性",
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
        "name": "弓腰姫",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "繚乱",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1014,
    "rarity": "UR",
    "name": "諸葛亮",
    "unit_type": "槍",
    "leadership": 98,
    "attack": 55,
    "intelligence": 100,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "伏龍",
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
        "name": "心眼",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1015,
    "rarity": "UR",
    "name": "呂布",
    "unit_type": "馬",
    "leadership": 95,
    "attack": 100,
    "intelligence": 31,
    "affinity": 145,
    "skills": {
      "A": {
        "name": "飛将",
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
        "name": "主導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "攻城",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1016,
    "rarity": "UR",
    "name": "司馬懿",
    "unit_type": "馬",
    "leadership": 98,
    "attack": 67,
    "intelligence": 99,
    "affinity": 31,
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
        "name": "鬼謀",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "深謀",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1017,
    "rarity": "UR",
    "name": "貂蝉",
    "unit_type": "馬",
    "leadership": 64,
    "attack": 28,
    "intelligence": 81,
    "affinity": 145,
    "skills": {
      "A": {
        "name": "傾国",
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
        "name": "威徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "献身",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1018,
    "rarity": "UR",
    "name": "董卓",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 91,
    "intelligence": 75,
    "affinity": 0,
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
        "name": "狂宴",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛力",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1019,
    "rarity": "UR",
    "name": "孫堅",
    "unit_type": "槍",
    "leadership": 95,
    "attack": 92,
    "intelligence": 79,
    "affinity": 126,
    "skills": {
      "A": {
        "name": "烈虎",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "幸運",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "主導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1020,
    "rarity": "UR",
    "name": "陸遜",
    "unit_type": "弓",
    "leadership": 97,
    "attack": 73,
    "intelligence": 96,
    "affinity": 122,
    "skills": {
      "A": {
        "name": "極炎",
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
        "name": "火術",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "機略",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1021,
    "rarity": "UR",
    "name": "小喬",
    "unit_type": "弓",
    "leadership": 48,
    "attack": 26,
    "intelligence": 74,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "賢徳",
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
        "name": "鎮静",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "厚徳",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1022,
    "rarity": "UR",
    "name": "関羽",
    "unit_type": "馬",
    "leadership": 97,
    "attack": 99,
    "intelligence": 85,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "美髯公",
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
        "name": "威風",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1023,
    "rarity": "UR",
    "name": "龐統",
    "unit_type": "弓",
    "leadership": 91,
    "attack": 61,
    "intelligence": 98,
    "affinity": 73,
    "skills": {
      "A": {
        "name": "鳳雛",
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
        "name": "深謀",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1024,
    "rarity": "UR",
    "name": "夏侯淵",
    "unit_type": "弓",
    "leadership": 92,
    "attack": 93,
    "intelligence": 68,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "極弓",
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
        "name": "速射",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1025,
    "rarity": "UR",
    "name": "黄忠",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 95,
    "intelligence": 68,
    "affinity": 72,
    "skills": {
      "A": {
        "name": "老練",
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
        "name": "弓神",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1026,
    "rarity": "UR",
    "name": "龐徳",
    "unit_type": "馬",
    "leadership": 89,
    "attack": 94,
    "intelligence": 75,
    "affinity": 65,
    "skills": {
      "A": {
        "name": "馬性",
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
        "name": "堪耐",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "報復",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1027,
    "rarity": "UR",
    "name": "夏侯惇",
    "unit_type": "槍",
    "leadership": 90,
    "attack": 92,
    "intelligence": 72,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "投合",
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
        "name": "奮起",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1028,
    "rarity": "UR",
    "name": "馬超",
    "unit_type": "馬",
    "leadership": 95,
    "attack": 98,
    "intelligence": 66,
    "affinity": 70,
    "skills": {
      "A": {
        "name": "雄烈",
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
        "name": "剛力",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1029,
    "rarity": "UR",
    "name": "張郃",
    "unit_type": "槍",
    "leadership": 93,
    "attack": 92,
    "intelligence": 78,
    "affinity": 27,
    "skills": {
      "A": {
        "name": "攻城",
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
        "name": "求活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "歴戦",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1030,
    "rarity": "UR",
    "name": "孫権",
    "unit_type": "馬",
    "leadership": 86,
    "attack": 69,
    "intelligence": 87,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "碧眼",
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
        "name": "団結",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1031,
    "rarity": "UR",
    "name": "呂玲綺",
    "unit_type": "槍",
    "leadership": 85,
    "attack": 90,
    "intelligence": 41,
    "affinity": 145,
    "skills": {
      "A": {
        "name": "凛烈",
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
        "name": "気勢",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "主導",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1032,
    "rarity": "UR",
    "name": "皇甫嵩",
    "unit_type": "弓",
    "leadership": 93,
    "attack": 70,
    "intelligence": 82,
    "affinity": 88,
    "skills": {
      "A": {
        "name": "策士",
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
        "name": "圧倒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "攻城",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1033,
    "rarity": "UR",
    "name": "呂蒙",
    "unit_type": "槍",
    "leadership": 92,
    "attack": 84,
    "intelligence": 93,
    "affinity": 124,
    "skills": {
      "A": {
        "name": "励学",
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
        "name": "反計",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1034,
    "rarity": "UR",
    "name": "周泰",
    "unit_type": "槍",
    "leadership": 84,
    "attack": 93,
    "intelligence": 60,
    "affinity": 126,
    "skills": {
      "A": {
        "name": "剛健",
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
        "name": "挺身",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "活路",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1035,
    "rarity": "UR",
    "name": "張角",
    "unit_type": "槍",
    "leadership": 89,
    "attack": 50,
    "intelligence": 94,
    "affinity": 7,
    "skills": {
      "A": {
        "name": "賢徳",
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
        "name": "大賢",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "反逆",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1036,
    "rarity": "UR",
    "name": "荀彧",
    "unit_type": "弓",
    "leadership": 69,
    "attack": 42,
    "intelligence": 98,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "策士",
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
        "name": "心略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1037,
    "rarity": "UR",
    "name": "荀攸",
    "unit_type": "馬",
    "leadership": 78,
    "attack": 49,
    "intelligence": 95,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "守策",
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
        "name": "機鑑",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1038,
    "rarity": "UR",
    "name": "徐晃",
    "unit_type": "槍",
    "leadership": 91,
    "attack": 93,
    "intelligence": 81,
    "affinity": 23,
    "skills": {
      "A": {
        "name": "歴戦",
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
        "name": "猛追",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1039,
    "rarity": "UR",
    "name": "関銀屏",
    "unit_type": "馬",
    "leadership": 84,
    "attack": 87,
    "intelligence": 67,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "豪傑",
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
        "name": "澄心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "繚乱",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1040,
    "rarity": "UR",
    "name": "曹操",
    "unit_type": "馬",
    "leadership": 100,
    "attack": 80,
    "intelligence": 95,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "奸雄",
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
        "name": "虚実",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "壮志",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1041,
    "rarity": "UR",
    "name": "徐庶",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 72,
    "intelligence": 96,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "義侠",
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
        "name": "洞察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "魏性",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1042,
    "rarity": "UR",
    "name": "典韋",
    "unit_type": "槍",
    "leadership": 79,
    "attack": 97,
    "intelligence": 35,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "守衛",
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
        "name": "悪来",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "威風",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1043,
    "rarity": "UR",
    "name": "公孫瓚",
    "unit_type": "馬",
    "leadership": 85,
    "attack": 87,
    "intelligence": 75,
    "affinity": 65,
    "skills": {
      "A": {
        "name": "騎射",
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
        "name": "先駆",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1044,
    "rarity": "UR",
    "name": "馬騰",
    "unit_type": "馬",
    "leadership": 86,
    "attack": 89,
    "intelligence": 64,
    "affinity": 70,
    "skills": {
      "A": {
        "name": "連騎",
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
        "name": "梟騎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "雄烈",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1045,
    "rarity": "UR",
    "name": "陸抗",
    "unit_type": "槍",
    "leadership": 94,
    "attack": 70,
    "intelligence": 94,
    "affinity": 122,
    "skills": {
      "A": {
        "name": "連慧",
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
        "name": "結心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "主導",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1046,
    "rarity": "UR",
    "name": "華雄",
    "unit_type": "馬",
    "leadership": 86,
    "attack": 93,
    "intelligence": 56,
    "affinity": 1,
    "skills": {
      "A": {
        "name": "堅強",
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
        "name": "剛力",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1047,
    "rarity": "UR",
    "name": "王元姫",
    "unit_type": "馬",
    "leadership": 58,
    "attack": 39,
    "intelligence": 82,
    "affinity": 34,
    "skills": {
      "A": {
        "name": "王佐",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "冶金",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "連慧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "賢徳",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1048,
    "rarity": "UR",
    "name": "魏延",
    "unit_type": "槍",
    "leadership": 86,
    "attack": 94,
    "intelligence": 69,
    "affinity": 80,
    "skills": {
      "A": {
        "name": "主導",
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
        "name": "気骨",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "猛進",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1049,
    "rarity": "UR",
    "name": "甄氏",
    "unit_type": "馬",
    "leadership": 54,
    "attack": 28,
    "intelligence": 76,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "洛神",
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
        "name": "魅惑",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "賢徳",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1050,
    "rarity": "UR",
    "name": "袁紹",
    "unit_type": "槍",
    "leadership": 89,
    "attack": 81,
    "intelligence": 84,
    "affinity": 101,
    "skills": {
      "A": {
        "name": "名望",
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
        "name": "轟天",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "盟主",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1051,
    "rarity": "UR",
    "name": "顔良",
    "unit_type": "馬",
    "leadership": 89,
    "attack": 94,
    "intelligence": 40,
    "affinity": 102,
    "skills": {
      "A": {
        "name": "大壁",
        "level": 1,
        "type": "fixed"
      },
      "B": {
        "name": "",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "C": {
        "name": "剛断",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛力",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1052,
    "rarity": "UR",
    "name": "文醜",
    "unit_type": "馬",
    "leadership": 88,
    "attack": 95,
    "intelligence": 34,
    "affinity": 102,
    "skills": {
      "A": {
        "name": "大刃",
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
        "name": "剛裂",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛力",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1053,
    "rarity": "UR",
    "name": "鄧艾",
    "unit_type": "槍",
    "leadership": 95,
    "attack": 87,
    "intelligence": 92,
    "affinity": 41,
    "skills": {
      "A": {
        "name": "攻城",
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
        "name": "疾駆",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1054,
    "rarity": "UR",
    "name": "鍾会",
    "unit_type": "弓",
    "leadership": 85,
    "attack": 64,
    "intelligence": 92,
    "affinity": 20,
    "skills": {
      "A": {
        "name": "策士",
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
        "name": "矜持",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1055,
    "rarity": "UR",
    "name": "曹丕",
    "unit_type": "馬",
    "leadership": 83,
    "attack": 79,
    "intelligence": 88,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "帝位",
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
        "name": "深謀",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "栄華",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1056,
    "rarity": "UR",
    "name": "黄月英",
    "unit_type": "槍",
    "leadership": 66,
    "attack": 36,
    "intelligence": 90,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "操術",
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
        "name": "創意",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連慧",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1057,
    "rarity": "UR",
    "name": "魯粛",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 59,
    "intelligence": 93,
    "affinity": 124,
    "skills": {
      "A": {
        "name": "賢政",
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
        "name": "連慧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "友導",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1058,
    "rarity": "UR",
    "name": "于禁",
    "unit_type": "槍",
    "leadership": 90,
    "attack": 87,
    "intelligence": 75,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "守勢",
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
        "name": "厳律",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "歴戦",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1059,
    "rarity": "UR",
    "name": "諸葛恪",
    "unit_type": "弓",
    "leadership": 72,
    "attack": 58,
    "intelligence": 92,
    "affinity": 121,
    "skills": {
      "A": {
        "name": "啖呵",
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
        "name": "機略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "破謀",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1060,
    "rarity": "UR",
    "name": "楽進",
    "unit_type": "馬",
    "leadership": 88,
    "attack": 90,
    "intelligence": 72,
    "affinity": 23,
    "skills": {
      "A": {
        "name": "投合",
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
        "name": "驍騎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1061,
    "rarity": "UR",
    "name": "馬雲騄",
    "unit_type": "馬",
    "leadership": 83,
    "attack": 88,
    "intelligence": 55,
    "affinity": 70,
    "skills": {
      "A": {
        "name": "梟騎",
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
        "name": "玲瓏",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "繚乱",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1062,
    "rarity": "UR",
    "name": "孟獲",
    "unit_type": "馬",
    "leadership": 84,
    "attack": 92,
    "intelligence": 52,
    "affinity": 82,
    "skills": {
      "A": {
        "name": "南蛮",
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
        "name": "象突",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "叛風",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1063,
    "rarity": "UR",
    "name": "祝融",
    "unit_type": "馬",
    "leadership": 76,
    "attack": 88,
    "intelligence": 43,
    "affinity": 82,
    "skills": {
      "A": {
        "name": "南蛮",
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
        "name": "象破",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "焔母",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1200
  },
  {
    "id": 1064,
    "rarity": "UR",
    "name": "張苞",
    "unit_type": "馬",
    "leadership": 84,
    "attack": 94,
    "intelligence": 65,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "豪傑",
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
        "name": "報仇",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "剛力",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1065,
    "rarity": "UR",
    "name": "文鴦",
    "unit_type": "馬",
    "leadership": 82,
    "attack": 92,
    "intelligence": 52,
    "affinity": 38,
    "skills": {
      "A": {
        "name": "掃討",
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
        "name": "鎮定",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1066,
    "rarity": "UR",
    "name": "黄蓋",
    "unit_type": "弓",
    "leadership": 83,
    "attack": 87,
    "intelligence": 73,
    "affinity": 127,
    "skills": {
      "A": {
        "name": "火術",
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
        "name": "焚炎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "老練",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1067,
    "rarity": "UR",
    "name": "曹仁",
    "unit_type": "槍",
    "leadership": 89,
    "attack": 88,
    "intelligence": 69,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "堅実",
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
        "name": "牢固",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "金剛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1068,
    "rarity": "UR",
    "name": "陳宮",
    "unit_type": "馬",
    "leadership": 81,
    "attack": 62,
    "intelligence": 90,
    "affinity": 143,
    "skills": {
      "A": {
        "name": "調和",
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
        "name": "衝陣",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "攻城",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1069,
    "rarity": "UR",
    "name": "王平",
    "unit_type": "槍",
    "leadership": 83,
    "attack": 81,
    "intelligence": 80,
    "affinity": 69,
    "skills": {
      "A": {
        "name": "活路",
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
        "name": "克槍",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "魏性",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1070,
    "rarity": "UR",
    "name": "周倉",
    "unit_type": "槍",
    "leadership": 76,
    "attack": 89,
    "intelligence": 47,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "猛者",
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
        "name": "気張",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豪傑",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1071,
    "rarity": "UR",
    "name": "凌統",
    "unit_type": "馬",
    "leadership": 87,
    "attack": 92,
    "intelligence": 73,
    "affinity": 127,
    "skills": {
      "A": {
        "name": "大刃",
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
        "name": "勇結",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1072,
    "rarity": "UR",
    "name": "曹叡",
    "unit_type": "馬",
    "leadership": 77,
    "attack": 58,
    "intelligence": 84,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "帝位",
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
        "name": "警城",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "先防",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1073,
    "rarity": "UR",
    "name": "蔡琰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "厚徳",
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
        "name": "和韻",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1074,
    "rarity": "UR",
    "name": "程昱",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 24,
    "skills": {
      "A": {
        "name": "機略",
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
        "name": "偽策",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "虚衝",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1075,
    "rarity": "UR",
    "name": "関興",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "練兵",
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
        "name": "壮気",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "連帯",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1076,
    "rarity": "UR",
    "name": "丁奉",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 123,
    "skills": {
      "A": {
        "name": "遠破",
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
        "name": "飛礫",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "拠固",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1077,
    "rarity": "UR",
    "name": "曹洪",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 24,
    "skills": {
      "A": {
        "name": "練兵",
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
        "name": "鋭守",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "衛護",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1078,
    "rarity": "UR",
    "name": "張紘",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 122,
    "skills": {
      "A": {
        "name": "教督",
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
        "name": "堅直",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "王佐",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1079,
    "rarity": "UR",
    "name": "張昭",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 120,
    "skills": {
      "A": {
        "name": "教督",
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
        "name": "活奮",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "発檄",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1080,
    "rarity": "UR",
    "name": "ｷﾙﾋｱｲｽ",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "輔翼",
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
        "name": "賭命",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "英邁",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1081,
    "rarity": "UR",
    "name": "ﾌﾚﾃﾞﾘｶ",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "一途",
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
        "name": "比翼",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "明眸",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1082,
    "rarity": "UR",
    "name": "張嶷",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 68,
    "skills": {
      "A": {
        "name": "機略",
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
        "name": "砕戎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "誠忠",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1083,
    "rarity": "UR",
    "name": "関索",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "練兵",
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
        "name": "乱花",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "秀麗",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1084,
    "rarity": "UR",
    "name": "王異",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 21,
    "skills": {
      "A": {
        "name": "連慧",
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
        "name": "破騎",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "徇義",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1085,
    "rarity": "UR",
    "name": "李典",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "守勢",
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
        "name": "転勢",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "同心",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1086,
    "rarity": "UR",
    "name": "程普",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 126,
    "skills": {
      "A": {
        "name": "攻城",
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
        "name": "老健",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "老練",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1087,
    "rarity": "UR",
    "name": "廖化",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 74,
    "skills": {
      "A": {
        "name": "耐心",
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
        "name": "仰信",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "勇進",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1088,
    "rarity": "UR",
    "name": "満寵",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 29,
    "skills": {
      "A": {
        "name": "敏活",
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
        "name": "炎略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "機略",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1089,
    "rarity": "UR",
    "name": "虞翻",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 122,
    "skills": {
      "A": {
        "name": "三政",
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
        "name": "看透",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1090,
    "rarity": "UR",
    "name": "諸葛瑾",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 121,
    "skills": {
      "A": {
        "name": "賢政",
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
        "name": "神交",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "調和",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1091,
    "rarity": "UR",
    "name": "張春華",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 31,
    "skills": {
      "A": {
        "name": "鬼謀",
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
        "name": "果決",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "調和",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1092,
    "rarity": "UR",
    "name": "曹真",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 26,
    "skills": {
      "A": {
        "name": "練兵",
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
        "name": "阻龍",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "豹略",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1093,
    "rarity": "UR",
    "name": "馬謖",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 80,
    "skills": {
      "A": {
        "name": "連慧",
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
        "name": "心戦",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1094,
    "rarity": "UR",
    "name": "郝昭",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 22,
    "skills": {
      "A": {
        "name": "守勢",
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
        "name": "止戈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "堅盾",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1095,
    "rarity": "UR",
    "name": "朱然",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 126,
    "skills": {
      "A": {
        "name": "火術",
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
        "name": "熾盛",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "掃討",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1096,
    "rarity": "UR",
    "name": "孫魯班",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "深謀",
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
        "name": "嬌媚",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "悪辣",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1097,
    "rarity": "UR",
    "name": "鄭成功",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "国姓爺",
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
        "name": "掃討",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1098,
    "rarity": "UR",
    "name": "高長恭",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 70,
    "skills": {
      "A": {
        "name": "雄弁",
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
        "name": "俊雅",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "敏活",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1099,
    "rarity": "UR",
    "name": "董白",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 1,
    "skills": {
      "A": {
        "name": "繚乱",
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
        "name": "嬌破",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "活爛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1100,
    "rarity": "UR",
    "name": "岳飛",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "雪恨",
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
        "name": "不滅の意志",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "活路",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1100
  },
  {
    "id": 1101,
    "rarity": "UR",
    "name": "張宝",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 7,
    "skills": {
      "A": {
        "name": "反逆",
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
        "name": "地公",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "深謀",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1102,
    "rarity": "UR",
    "name": "張梁",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 7,
    "skills": {
      "A": {
        "name": "反逆",
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
        "name": "人公",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "厚徳",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1103,
    "rarity": "UR",
    "name": "呉国太",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "三政",
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
        "name": "励心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "投合",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1104,
    "rarity": "UR",
    "name": "司馬徽",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "清鑑",
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
        "name": "明識",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "達眼",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1105,
    "rarity": "UR",
    "name": "辛憲英",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 29,
    "skills": {
      "A": {
        "name": "王佐",
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
        "name": "聡思",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "恵愛",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1106,
    "rarity": "UR",
    "name": "厳顔",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 69,
    "skills": {
      "A": {
        "name": "老練",
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
        "name": "練射",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "壮堅",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  },
  {
    "id": 1107,
    "rarity": "UR",
    "name": "歩練師",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 125,
    "skills": {
      "A": {
        "name": "調和",
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
        "name": "恭倹",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "D": {
        "name": "励節",
        "level": 1,
        "type": "unlock",
        "unlock_rank": 7
      }
    },
    "tenpu": 1000
  }
];

// SSR武将データ (14名)
const SSR_GENERALS_DATA = [
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "関羽",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "姜維",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "皇甫嵩",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "司馬懿",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "祝融",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "周瑜",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "諸葛亮",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "徐晃",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "曹操",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "孫策",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "張角",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "張飛",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "董卓",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "孟獲",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "陸遜",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 2001,
    "rarity": "SSR",
    "name": "呂布",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 3001,
    "rarity": "SSR",
    "name": "曹植",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "敏活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "連慧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3002,
    "rarity": "SSR",
    "name": "朱桓",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 128,
    "skills": {
      "A": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "掃討",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "攻城",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3003,
    "rarity": "SSR",
    "name": "韓遂",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 48,
    "skills": {
      "A": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "調和",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "連慧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3004,
    "rarity": "SSR",
    "name": "高順",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 144,
    "skills": {
      "A": {
        "name": "兵心",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "攻城",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "剛力",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3005,
    "rarity": "SSR",
    "name": "馬良",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 77,
    "skills": {
      "A": {
        "name": "警戒",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "連慧",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "調和",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3006,
    "rarity": "SSR",
    "name": "馬岱",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 70,
    "skills": {
      "A": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "歩兵討伐",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "連帯",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3007,
    "rarity": "SSR",
    "name": "文聘",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 28,
    "skills": {
      "A": {
        "name": "運搬",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "不屈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "奮戦",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3008,
    "rarity": "SSR",
    "name": "沮授",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 96,
    "skills": {
      "A": {
        "name": "指導",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "機略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "深謀",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3009,
    "rarity": "SSR",
    "name": "曹節",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 25,
    "skills": {
      "A": {
        "name": "人徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "王佐",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "啼天",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3010,
    "rarity": "SSR",
    "name": "劉曄",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 27,
    "skills": {
      "A": {
        "name": "探究",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "王佐",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "明達",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3011,
    "rarity": "SSR",
    "name": "張任",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 56,
    "skills": {
      "A": {
        "name": "巡見",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "不屈",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "連帯",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3012,
    "rarity": "SSR",
    "name": "盧植",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "幸運",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "機略",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "敏活",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3013,
    "rarity": "SSR",
    "name": "張氏",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 75,
    "skills": {
      "A": {
        "name": "巡察",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "燕人",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "剛力",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 3014,
    "rarity": "SSR",
    "name": "夏侯氏",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 30,
    "skills": {
      "A": {
        "name": "監督",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 2
      },
      "B": {
        "name": "威徳",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 4
      },
      "C": {
        "name": "蜀性",
        "level": 1,
        "type": "levelup",
        "levelup_rank": 7
      }
    },
    "tenpu": 875
  },
  {
    "id": 4001,
    "rarity": "SSR",
    "name": "賈詡",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4002,
    "rarity": "SSR",
    "name": "郭嘉",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4003,
    "rarity": "SSR",
    "name": "郝昭",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4004,
    "rarity": "SSR",
    "name": "郭淮",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4005,
    "rarity": "SSR",
    "name": "夏侯覇",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4006,
    "rarity": "SSR",
    "name": "花鬘",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4007,
    "rarity": "SSR",
    "name": "関興",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4008,
    "rarity": "SSR",
    "name": "関索",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4009,
    "rarity": "SSR",
    "name": "甘寧",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4010,
    "rarity": "SSR",
    "name": "関平",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4011,
    "rarity": "SSR",
    "name": "楽進",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4012,
    "rarity": "SSR",
    "name": "厳顔",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4013,
    "rarity": "SSR",
    "name": "黄蓋",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4014,
    "rarity": "SSR",
    "name": "顧雍",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4015,
    "rarity": "SSR",
    "name": "呉懿",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4016,
    "rarity": "SSR",
    "name": "呉国太",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4017,
    "rarity": "SSR",
    "name": "蔡琰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4018,
    "rarity": "SSR",
    "name": "左慈",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4019,
    "rarity": "SSR",
    "name": "司馬徽",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4020,
    "rarity": "SSR",
    "name": "司馬師",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4021,
    "rarity": "SSR",
    "name": "司馬昭",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4022,
    "rarity": "SSR",
    "name": "朱儁",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4023,
    "rarity": "SSR",
    "name": "蔣琬",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4024,
    "rarity": "SSR",
    "name": "蔣欽",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4025,
    "rarity": "SSR",
    "name": "諸葛瑾",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4026,
    "rarity": "SSR",
    "name": "徐庶",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4027,
    "rarity": "SSR",
    "name": "周倉",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4028,
    "rarity": "SSR",
    "name": "荀攸",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4029,
    "rarity": "SSR",
    "name": "徐盛",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4030,
    "rarity": "SSR",
    "name": "甄氏",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4031,
    "rarity": "SSR",
    "name": "鄒氏",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4032,
    "rarity": "SSR",
    "name": "曹彰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4033,
    "rarity": "SSR",
    "name": "曹真",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4034,
    "rarity": "SSR",
    "name": "曹仁",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4035,
    "rarity": "SSR",
    "name": "曹丕",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4036,
    "rarity": "SSR",
    "name": "孫権",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4037,
    "rarity": "SSR",
    "name": "趙雲",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4038,
    "rarity": "SSR",
    "name": "張春華",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4039,
    "rarity": "SSR",
    "name": "貂蝉",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4040,
    "rarity": "SSR",
    "name": "張苞",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4041,
    "rarity": "SSR",
    "name": "張遼",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4042,
    "rarity": "SSR",
    "name": "陳宮",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4043,
    "rarity": "SSR",
    "name": "程普",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4044,
    "rarity": "SSR",
    "name": "典韋",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4045,
    "rarity": "SSR",
    "name": "杜預",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4046,
    "rarity": "SSR",
    "name": "馬超",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4047,
    "rarity": "SSR",
    "name": "馬騰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4048,
    "rarity": "SSR",
    "name": "費禕",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4049,
    "rarity": "SSR",
    "name": "龐統",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4050,
    "rarity": "SSR",
    "name": "鮑三娘",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4051,
    "rarity": "SSR",
    "name": "歩練師",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4052,
    "rarity": "SSR",
    "name": "羊祜",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4053,
    "rarity": "SSR",
    "name": "陸抗",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4054,
    "rarity": "SSR",
    "name": "李厳",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4055,
    "rarity": "SSR",
    "name": "李儒",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4056,
    "rarity": "SSR",
    "name": "劉備",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4057,
    "rarity": "SSR",
    "name": "凌統",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4058,
    "rarity": "SSR",
    "name": "満寵",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4059,
    "rarity": "SSR",
    "name": "張松",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4060,
    "rarity": "SSR",
    "name": "管輅",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4061,
    "rarity": "SSR",
    "name": "越吉",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4062,
    "rarity": "SSR",
    "name": "兀突骨",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4063,
    "rarity": "SSR",
    "name": "沙摩柯",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4064,
    "rarity": "SSR",
    "name": "蹋頓",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4065,
    "rarity": "SSR",
    "name": "潘臨",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 4066,
    "rarity": "SSR",
    "name": "軻比能",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 5001,
    "rarity": "SSR",
    "name": "于吉",
    "unit_type": "槍",
    "leadership": 96,
    "attack": 98,
    "intelligence": 78,
    "affinity": 0
  },
  {
    "id": 5002,
    "rarity": "SSR",
    "name": "于禁",
    "unit_type": "馬",
    "leadership": 87,
    "attack": 85,
    "intelligence": 77,
    "affinity": 0
  },
  {
    "id": 5003,
    "rarity": "SSR",
    "name": "王異",
    "unit_type": "槍",
    "leadership": 95,
    "attack": 93,
    "intelligence": 86,
    "affinity": 0
  },
  {
    "id": 5004,
    "rarity": "SSR",
    "name": "王元姫",
    "unit_type": "弓",
    "leadership": 89,
    "attack": 45,
    "intelligence": 98,
    "affinity": 0
  },
  {
    "id": 5005,
    "rarity": "SSR",
    "name": "王平",
    "unit_type": "槍",
    "leadership": 98,
    "attack": 78,
    "intelligence": 98,
    "affinity": 0
  },
  {
    "id": 5006,
    "rarity": "SSR",
    "name": "夏侯淵",
    "unit_type": "弓",
    "leadership": 93,
    "attack": 96,
    "intelligence": 76,
    "affinity": 0
  },
  {
    "id": 5007,
    "rarity": "SSR",
    "name": "夏侯惇",
    "unit_type": "馬",
    "leadership": 97,
    "attack": 99,
    "intelligence": 33,
    "affinity": 0
  },
  {
    "id": 5008,
    "rarity": "SSR",
    "name": "何進",
    "unit_type": "馬",
    "leadership": 91,
    "attack": 48,
    "intelligence": 97,
    "affinity": 0
  },
  {
    "id": 5009,
    "rarity": "SSR",
    "name": "華佗",
    "unit_type": "弓",
    "leadership": 96,
    "attack": 95,
    "intelligence": 77,
    "affinity": 0
  },
  {
    "id": 5010,
    "rarity": "SSR",
    "name": "華雄",
    "unit_type": "馬",
    "leadership": 49,
    "attack": 27,
    "intelligence": 73,
    "affinity": 0
  },
  {
    "id": 5011,
    "rarity": "SSR",
    "name": "顔良",
    "unit_type": "馬",
    "leadership": 91,
    "attack": 90,
    "intelligence": 92,
    "affinity": 0
  },
  {
    "id": 5012,
    "rarity": "SSR",
    "name": "関銀屏",
    "unit_type": "馬",
    "leadership": 90,
    "attack": 95,
    "intelligence": 69,
    "affinity": 0
  },
  {
    "id": 5013,
    "rarity": "SSR",
    "name": "魏延",
    "unit_type": "槍",
    "leadership": 85,
    "attack": 89,
    "intelligence": 70,
    "affinity": 0
  },
  {
    "id": 5014,
    "rarity": "SSR",
    "name": "許褚",
    "unit_type": "槍",
    "leadership": 98,
    "attack": 55,
    "intelligence": 100,
    "affinity": 0
  },
  {
    "id": 5015,
    "rarity": "SSR",
    "name": "黄月英",
    "unit_type": "弓",
    "leadership": 95,
    "attack": 100,
    "intelligence": 31,
    "affinity": 0
  },
  {
    "id": 5016,
    "rarity": "SSR",
    "name": "公孫瓚",
    "unit_type": "馬",
    "leadership": 98,
    "attack": 67,
    "intelligence": 99,
    "affinity": 0
  },
  {
    "id": 5017,
    "rarity": "SSR",
    "name": "黄忠",
    "unit_type": "弓",
    "leadership": 64,
    "attack": 28,
    "intelligence": 81,
    "affinity": 0
  },
  {
    "id": 5018,
    "rarity": "SSR",
    "name": "周泰",
    "unit_type": "槍",
    "leadership": 90,
    "attack": 91,
    "intelligence": 75,
    "affinity": 0
  },
  {
    "id": 5019,
    "rarity": "SSR",
    "name": "荀彧",
    "unit_type": "弓",
    "leadership": 95,
    "attack": 92,
    "intelligence": 79,
    "affinity": 0
  },
  {
    "id": 5020,
    "rarity": "SSR",
    "name": "鍾会",
    "unit_type": "弓",
    "leadership": 97,
    "attack": 73,
    "intelligence": 96,
    "affinity": 0
  },
  {
    "id": 5021,
    "rarity": "SSR",
    "name": "小喬",
    "unit_type": "弓",
    "leadership": 48,
    "attack": 26,
    "intelligence": 74,
    "affinity": 0
  },
  {
    "id": 5022,
    "rarity": "SSR",
    "name": "諸葛恪",
    "unit_type": "弓",
    "leadership": 97,
    "attack": 99,
    "intelligence": 85,
    "affinity": 0
  },
  {
    "id": 5023,
    "rarity": "SSR",
    "name": "孫堅",
    "unit_type": "槍",
    "leadership": 91,
    "attack": 61,
    "intelligence": 98,
    "affinity": 0
  },
  {
    "id": 5024,
    "rarity": "SSR",
    "name": "孫尚香",
    "unit_type": "弓",
    "leadership": 92,
    "attack": 93,
    "intelligence": 68,
    "affinity": 0
  },
  {
    "id": 5025,
    "rarity": "SSR",
    "name": "太史慈",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 95,
    "intelligence": 68,
    "affinity": 0
  },
  {
    "id": 5026,
    "rarity": "SSR",
    "name": "大喬",
    "unit_type": "弓",
    "leadership": 89,
    "attack": 94,
    "intelligence": 75,
    "affinity": 0
  },
  {
    "id": 5027,
    "rarity": "SSR",
    "name": "張郃",
    "unit_type": "馬",
    "leadership": 90,
    "attack": 92,
    "intelligence": 72,
    "affinity": 0
  },
  {
    "id": 5028,
    "rarity": "SSR",
    "name": "張紘",
    "unit_type": "弓",
    "leadership": 95,
    "attack": 98,
    "intelligence": 66,
    "affinity": 0
  },
  {
    "id": 5029,
    "rarity": "SSR",
    "name": "張昭",
    "unit_type": "弓",
    "leadership": 93,
    "attack": 92,
    "intelligence": 78,
    "affinity": 0
  },
  {
    "id": 5030,
    "rarity": "SSR",
    "name": "張宝",
    "unit_type": "弓",
    "leadership": 86,
    "attack": 69,
    "intelligence": 87,
    "affinity": 0
  },
  {
    "id": 5031,
    "rarity": "SSR",
    "name": "張梁",
    "unit_type": "馬",
    "leadership": 85,
    "attack": 90,
    "intelligence": 41,
    "affinity": 0
  },
  {
    "id": 5032,
    "rarity": "SSR",
    "name": "陳羣",
    "unit_type": "弓",
    "leadership": 93,
    "attack": 70,
    "intelligence": 82,
    "affinity": 0
  },
  {
    "id": 5033,
    "rarity": "SSR",
    "name": "程昱",
    "unit_type": "槍",
    "leadership": 92,
    "attack": 84,
    "intelligence": 93,
    "affinity": 0
  },
  {
    "id": 5034,
    "rarity": "SSR",
    "name": "田豊",
    "unit_type": "槍",
    "leadership": 84,
    "attack": 93,
    "intelligence": 60,
    "affinity": 0
  },
  {
    "id": 5035,
    "rarity": "SSR",
    "name": "鄧艾",
    "unit_type": "槍",
    "leadership": 89,
    "attack": 50,
    "intelligence": 94,
    "affinity": 0
  },
  {
    "id": 5036,
    "rarity": "SSR",
    "name": "馬雲騄",
    "unit_type": "馬",
    "leadership": 69,
    "attack": 42,
    "intelligence": 98,
    "affinity": 0
  },
  {
    "id": 5037,
    "rarity": "SSR",
    "name": "文鴦",
    "unit_type": "馬",
    "leadership": 78,
    "attack": 49,
    "intelligence": 95,
    "affinity": 0
  },
  {
    "id": 5038,
    "rarity": "SSR",
    "name": "文醜",
    "unit_type": "馬",
    "leadership": 91,
    "attack": 93,
    "intelligence": 81,
    "affinity": 0
  },
  {
    "id": 5039,
    "rarity": "SSR",
    "name": "法正",
    "unit_type": "弓",
    "leadership": 84,
    "attack": 87,
    "intelligence": 67,
    "affinity": 0
  },
  {
    "id": 5040,
    "rarity": "SSR",
    "name": "龐徳",
    "unit_type": "馬",
    "leadership": 100,
    "attack": 80,
    "intelligence": 95,
    "affinity": 0
  },
  {
    "id": 5041,
    "rarity": "SSR",
    "name": "羊祜",
    "unit_type": "弓",
    "leadership": 90,
    "attack": 72,
    "intelligence": 96,
    "affinity": 0
  },
  {
    "id": 5042,
    "rarity": "SSR",
    "name": "劉禅",
    "unit_type": "弓",
    "leadership": 79,
    "attack": 97,
    "intelligence": 35,
    "affinity": 0
  },
  {
    "id": 5043,
    "rarity": "SSR",
    "name": "呂蒙",
    "unit_type": "槍",
    "leadership": 85,
    "attack": 87,
    "intelligence": 75,
    "affinity": 0
  },
  {
    "id": 5044,
    "rarity": "SSR",
    "name": "呂玲綺",
    "unit_type": "馬",
    "leadership": 86,
    "attack": 89,
    "intelligence": 64,
    "affinity": 0
  },
  {
    "id": 5045,
    "rarity": "SSR",
    "name": "魯粛",
    "unit_type": "弓",
    "leadership": 94,
    "attack": 70,
    "intelligence": 94,
    "affinity": 0
  },
  {
    "id": 5046,
    "rarity": "SSR",
    "name": "丘力居",
    "unit_type": "",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 5047,
    "rarity": "SSR",
    "name": "強端",
    "unit_type": "",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 5048,
    "rarity": "SSR",
    "name": "徹里吉",
    "unit_type": "",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 5049,
    "rarity": "SSR",
    "name": "尤突",
    "unit_type": "",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 5050,
    "rarity": "SSR",
    "name": "歩度根",
    "unit_type": "",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  }
];

// SR武将データ (3名)
const SR_GENERALS_DATA = [
  {
    "id": 6001,
    "rarity": "SR",
    "name": "郝昭",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6002,
    "rarity": "SR",
    "name": "楽進",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6003,
    "rarity": "SR",
    "name": "郭淮",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6004,
    "rarity": "SR",
    "name": "夏侯覇",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6005,
    "rarity": "SR",
    "name": "関興",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6006,
    "rarity": "SR",
    "name": "関索",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6007,
    "rarity": "SR",
    "name": "関平",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6008,
    "rarity": "SR",
    "name": "厳顔",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6009,
    "rarity": "SR",
    "name": "呉懿",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6010,
    "rarity": "SR",
    "name": "黄蓋",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6011,
    "rarity": "SR",
    "name": "呉国体",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6012,
    "rarity": "SR",
    "name": "顧雍",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6013,
    "rarity": "SR",
    "name": "蔡琰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6014,
    "rarity": "SR",
    "name": "司馬師",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6015,
    "rarity": "SR",
    "name": "司馬昭",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6016,
    "rarity": "SR",
    "name": "蒋欽",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6017,
    "rarity": "SR",
    "name": "諸葛瑾",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6018,
    "rarity": "SR",
    "name": "徐盛",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6019,
    "rarity": "SR",
    "name": "曹彰",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6020,
    "rarity": "SR",
    "name": "曹植",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6021,
    "rarity": "SR",
    "name": "曹真",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6022,
    "rarity": "SR",
    "name": "曹仁",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6023,
    "rarity": "SR",
    "name": "曹丕",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6024,
    "rarity": "SR",
    "name": "張苞",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6025,
    "rarity": "SR",
    "name": "陳宮",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6026,
    "rarity": "SR",
    "name": "程普",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6027,
    "rarity": "SR",
    "name": "杜預",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6028,
    "rarity": "SR",
    "name": "満寵",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6029,
    "rarity": "SR",
    "name": "李厳",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6030,
    "rarity": "SR",
    "name": "李儒",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6031,
    "rarity": "SR",
    "name": "凌統",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6032,
    "rarity": "SR",
    "name": "韓遂",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6033,
    "rarity": "SR",
    "name": "馬岱",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6034,
    "rarity": "SR",
    "name": "烏延",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6035,
    "rarity": "SR",
    "name": "雅丹",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6036,
    "rarity": "SR",
    "name": "金環三結",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6037,
    "rarity": "SR",
    "name": "泄帰泥",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6038,
    "rarity": "SR",
    "name": "張雅",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6039,
    "rarity": "SR",
    "name": "董荼那",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6040,
    "rarity": "SR",
    "name": "杜濩",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6041,
    "rarity": "SR",
    "name": "朴胡",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6042,
    "rarity": "SR",
    "name": "迷当大王",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6043,
    "rarity": "SR",
    "name": "楼班",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  }
];

// R武将データ (1名)
const R_GENERALS_DATA = [
  {
    "id": 6044,
    "rarity": "R",
    "name": "王允",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6045,
    "rarity": "R",
    "name": "王双",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6046,
    "rarity": "R",
    "name": "王平",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6047,
    "rarity": "R",
    "name": "王朗",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6048,
    "rarity": "R",
    "name": "華歆",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6049,
    "rarity": "R",
    "name": "闞沢",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6050,
    "rarity": "R",
    "name": "牛金",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6051,
    "rarity": "R",
    "name": "紀霊",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6052,
    "rarity": "R",
    "name": "虞翻",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6053,
    "rarity": "R",
    "name": "黄権",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6054,
    "rarity": "R",
    "name": "胡車児",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6055,
    "rarity": "R",
    "name": "蔡瑁",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6056,
    "rarity": "R",
    "name": "朱然",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6057,
    "rarity": "R",
    "name": "鍾ヨウ",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6058,
    "rarity": "R",
    "name": "審配",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6059,
    "rarity": "R",
    "name": "曹洪",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6060,
    "rarity": "R",
    "name": "曹純",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6061,
    "rarity": "R",
    "name": "張繍",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6062,
    "rarity": "R",
    "name": "張魯",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6063,
    "rarity": "R",
    "name": "丁奉",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6064,
    "rarity": "R",
    "name": "馬謖",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6065,
    "rarity": "R",
    "name": "潘璋",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6066,
    "rarity": "R",
    "name": "歩隲",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6067,
    "rarity": "R",
    "name": "孟達",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6068,
    "rarity": "R",
    "name": "李典",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6069,
    "rarity": "R",
    "name": "凌操",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6070,
    "rarity": "R",
    "name": "王同",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6071,
    "rarity": "R",
    "name": "俄何焼戈",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6072,
    "rarity": "R",
    "name": "奚泥",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6073,
    "rarity": "R",
    "name": "黄乱",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6074,
    "rarity": "R",
    "name": "骨進",
    "unit_type": "馬",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6075,
    "rarity": "R",
    "name": "素利",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6076,
    "rarity": "R",
    "name": "鄧凱",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6077,
    "rarity": "R",
    "name": "土安",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6078,
    "rarity": "R",
    "name": "費桟",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6079,
    "rarity": "R",
    "name": "弥加",
    "unit_type": "弓",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6080,
    "rarity": "R",
    "name": "文布",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  },
  {
    "id": 6081,
    "rarity": "R",
    "name": "劉冑",
    "unit_type": "槍",
    "leadership": 0,
    "attack": 0,
    "intelligence": 0,
    "affinity": 0
  }
];

// 全武将データを統合
const EMBEDDED_GENERALS_DATA = [
    ...LR_GENERALS_DATA,
    ...UR_GENERALS_DATA,
    ...SSR_GENERALS_DATA,
    ...SR_GENERALS_DATA,
    ...R_GENERALS_DATA
];

console.log('武将データ読み込み完了:', EMBEDDED_GENERALS_DATA.length, '名');
