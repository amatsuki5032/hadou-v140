// 戦闘パラメータデータ（技能名ベース）
// 出陣時ゲージ、戦法速度、致死耐性、戦法短縮、攻撃速度、会心発生

const COMBAT_PARAMETERS = {
  "燕人": {
    "id": 1006,
    "name": "燕人",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 20.0,
        "Ⅱ": 30.0,
        "Ⅲ": 30.0
      },
      "attackSpeed": {
        "Ⅲ": 25.0,
        "Ⅳ": 30.0,
        "Ⅴ": 35.0
      }
    }
  },
  "飛将": {
    "id": 1013,
    "name": "飛将",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 15.0,
        "Ⅲ": 20.0,
        "Ⅳ": 20.0
      }
    }
  },
  "伏龍": {
    "id": 1014,
    "name": "伏龍",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 15.0,
        "Ⅳ": 15.0
      }
    }
  },
  "狂宴": {
    "id": 1022,
    "name": "狂宴",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 5.0
      }
    }
  },
  "極炎": {
    "id": 1026,
    "name": "極炎",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0
      }
    }
  },
  "美髯公": {
    "id": 1027,
    "name": "美髯公",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 2.0
      },
      "attackSpeed": {
        "Ⅱ": 25.0,
        "Ⅲ": 25.0
      }
    }
  },
  "圧倒": {
    "id": 1037,
    "name": "圧倒",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 15.0,
        "Ⅳ": 15.0
      },
      "attackSpeed": {
        "Ⅲ": 20.0,
        "Ⅳ": 30.0
      }
    }
  },
  "猛進": {
    "id": 1066,
    "name": "猛進",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0,
        "Ⅲ": 15.0
      }
    }
  },
  "轟天": {
    "id": 1067,
    "name": "轟天",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅳ": 10.0,
        "Ⅴ": 20.0
      }
    }
  },
  "疾駆": {
    "id": 1075,
    "name": "疾駆",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0,
        "Ⅲ": 10.0
      }
    }
  },
  "栄華": {
    "id": 1079,
    "name": "栄華",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0,
        "Ⅱ": 2.0
      }
    }
  },
  "太公望": {
    "id": 1095,
    "name": "太公望",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 20.0
      }
    }
  },
  "極至": {
    "id": 1096,
    "name": "極至",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0
      }
    }
  },
  "明火": {
    "id": 1100,
    "name": "明火",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 10.0,
        "Ⅳ": 20.0
      },
      "tacticSpeed": {
        "Ⅳ": 15.0
      },
      "attackSpeed": {
        "Ⅰ": 30.0,
        "Ⅱ": 35.0,
        "Ⅲ": 35.0,
        "Ⅳ": 35.0
      }
    }
  },
  "炎舞": {
    "id": 1101,
    "name": "炎舞",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 10.0
      }
    }
  },
  "仁勇": {
    "id": 1122,
    "name": "仁勇",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0
      }
    }
  },
  "誘因": {
    "id": 1134,
    "name": "誘因",
    "condition": "主将か副将で、自部隊が弓兵の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0,
        "Ⅲ": 15.0
      }
    }
  },
  "勇結": {
    "id": 1137,
    "name": "勇結",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0,
        "Ⅲ": 15.0
      }
    }
  },
  "雪怨": {
    "id": 1154,
    "name": "雪怨",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 2.0
      }
    }
  },
  "背水": {
    "id": 1165,
    "name": "背水",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0,
        "Ⅲ": 30.0,
        "Ⅳ": 30.0
      },
      "tacticReduce": {
        "Ⅲ": 30.0,
        "Ⅳ": 30.0
      },
      "lethalResist": true,
      "attackSpeed": {
        "Ⅰ": 30.0
      }
    }
  },
  "発檄": {
    "id": 1181,
    "name": "発檄",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      }
    }
  },
  "壮活": {
    "id": 1203,
    "name": "壮活",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0
      }
    }
  },
  "雄将": {
    "id": 1204,
    "name": "雄将",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0
      }
    }
  },
  "秀麗": {
    "id": 1206,
    "name": "秀麗",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0
      }
    }
  },
  "勇進": {
    "id": 1229,
    "name": "勇進",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0
      }
    }
  },
  "継志": {
    "id": 1231,
    "name": "継志",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 5.0
      }
    }
  },
  "虎破": {
    "id": 1232,
    "name": "虎破",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 5.0
      }
    }
  },
  "震慄": {
    "id": 1234,
    "name": "震慄",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0
      }
    }
  },
  "看透": {
    "id": 1238,
    "name": "看透",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.0,
        "Ⅱ": 1.5
      }
    }
  },
  "誠廉": {
    "id": 1241,
    "name": "誠廉",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0
      }
    }
  },
  "厳圧": {
    "id": 1245,
    "name": "厳圧",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0
      }
    }
  },
  "興風": {
    "id": 1250,
    "name": "興風",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0
      }
    }
  },
  "老巧": {
    "id": 1273,
    "name": "老巧",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      },
      "attackSpeed": {
        "Ⅰ": 25.0,
        "Ⅱ": 25.0
      }
    }
  },
  "敦睦": {
    "id": 1279,
    "name": "敦睦",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 20.0,
        "Ⅱ": 30.0
      }
    }
  },
  "将器": {
    "id": 1289,
    "name": "将器",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 15.0
      }
    }
  },
  "国姓爺": {
    "id": 1298,
    "name": "国姓爺",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0,
        "Ⅲ": 10.0,
        "Ⅳ": 10.0
      },
      "tacticSpeed": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0,
        "Ⅲ": 10.0,
        "Ⅳ": 10.0
      }
    }
  },
  "斬龍訣": {
    "id": 1315,
    "name": "斬龍訣",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0
      }
    }
  },
  "盟友法術": {
    "id": 1316,
    "name": "盟友法術",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0,
        "Ⅲ": 2.0,
        "Ⅳ": 2.0
      }
    }
  },
  "俊英": {
    "id": 1335,
    "name": "俊英",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 10.0
      }
    }
  },
  "斬断": {
    "id": 1339,
    "name": "斬断",
    "condition": "主将か、副将で自部隊の主将が関羽/張飛/趙雲/馬超/黄忠の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      }
    }
  },
  "節義": {
    "id": 1352,
    "name": "節義",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0
      }
    }
  },
  "乗勢": {
    "id": 1356,
    "name": "乗勢",
    "condition": "主将か副将で自部隊が歩兵の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0
      }
    }
  },
  "善謀": {
    "id": 1370,
    "name": "善謀",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      }
    }
  },
  "通察": {
    "id": 1373,
    "name": "通察",
    "condition": "主将か副将で、自部隊の主将と副将全員と好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅱ": 3.0
      }
    }
  },
  "大徳": {
    "id": 1380,
    "name": "大徳",
    "condition": "主将で、自部隊の副将と補佐全員と好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 20.0,
        "Ⅱ": 20.0
      },
      "lethalResist": true
    }
  },
  "達眼": {
    "id": 1383,
    "name": "達眼",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 5.0
      }
    }
  },
  "恵愛": {
    "id": 1407,
    "name": "恵愛",
    "condition": "主将か副将で、自部隊の主将と副賞と補佐全員と好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 15.0
      }
    }
  },
  "壮望": {
    "id": 1422,
    "name": "壮望",
    "condition": "主将で、自部隊の副将と補佐全員と好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0
      }
    }
  },
  "撃略": {
    "id": 1431,
    "name": "撃略",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0
      }
    }
  },
  "雄騎": {
    "id": 1439,
    "name": "雄騎",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0
      }
    }
  },
  "壮威": {
    "id": 1446,
    "name": "壮威",
    "condition": "主将か副将で、自部隊の主将と副将全員と好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 10.0
      },
      "critical": {
        "Ⅰ": 30.0,
        "Ⅱ": 40.0
      }
    }
  },
  "覆天嵐矛": {
    "id": 1455,
    "name": "覆天嵐矛",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0
      },
      "tacticReduce": {
        "Ⅱ": 5.0
      }
    }
  },
  "電断": {
    "id": 1471,
    "name": "電断",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 30.0,
        "Ⅱ": 30.0
      }
    }
  },
  "武聖": {
    "id": 1478,
    "name": "武聖",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0,
        "Ⅲ": 20.0
      }
    }
  },
  "博達": {
    "id": 1488,
    "name": "博達",
    "condition": "主将か、主将と自身が好相性の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0
      }
    }
  },
  "堅守軒昂": {
    "id": 3049,
    "name": "堅守軒昂",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅴ": 10.0
      }
    }
  },
  "慧士軒昂": {
    "id": 3331,
    "name": "慧士軒昂",
    "condition": "主将の際",
    "effects": {
      "initialGauge": {
        "Ⅳ": 2.0
      }
    }
  },
  "合心軒昂": {
    "id": 3432,
    "name": "合心軒昂",
    "condition": "常に",
    "effects": {}
  },
  "四旬軍昴": {
    "id": 3487,
    "name": "四旬軍昴",
    "condition": "主将か副将の際",
    "effects": {
      "initialGauge": {
        "Ⅲ": 4.0
      }
    }
  },
  "剛気": {
    "id": 4305,
    "name": "剛気",
    "condition": "参軍の際",
    "effects": {
      "initialGauge": {
        "Ⅰ": 3.0
      }
    }
  },
  "賢策軒昂": {
    "id": 4545,
    "name": "賢策軒昂",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 50.0
      }
    }
  },
  "勇往軒昂": {
    "id": 4548,
    "name": "勇往軒昂",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 50.0
      }
    }
  },
  "友結軒昂": {
    "id": 4556,
    "name": "友結軒昂",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 2.0
      }
    }
  },
  "斬心軒昂": {
    "id": 4564,
    "name": "斬心軒昂",
    "condition": "常に",
    "effects": {
      "initialGauge": {
        "Ⅰ": 1.5
      }
    }
  },
  "羌": {
    "id": 62,
    "name": "羌",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0,
        "Ⅲ": 3.0,
        "Ⅳ": 4.0,
        "Ⅴ": 5.0
      }
    }
  },
  "歓喜": {
    "id": 1023,
    "name": "歓喜",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅳ": 5.0
      }
    }
  },
  "激昂": {
    "id": 1025,
    "name": "激昂",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 10.0
      }
    }
  },
  "鳳雛": {
    "id": 1028,
    "name": "鳳雛",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅲ": 10.0
      },
      "tacticSpeed": {
        "Ⅰ": 4.0,
        "Ⅱ": 4.0,
        "Ⅲ": 4.0
      }
    }
  },
  "求活": {
    "id": 1032,
    "name": "求活",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅲ": 20.0
      }
    }
  },
  "凛烈": {
    "id": 1035,
    "name": "凛烈",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 50.0,
        "Ⅱ": 70.0
      }
    }
  },
  "洞察": {
    "id": 1055,
    "name": "洞察",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0
      },
      "tacticSpeed": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0
      }
    }
  },
  "啖呵": {
    "id": 1081,
    "name": "啖呵",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 50.0,
        "Ⅱ": 60.0
      }
    }
  },
  "叛風": {
    "id": 1085,
    "name": "叛風",
    "condition": "主将か副将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 10.0
      }
    }
  },
  "堅厚": {
    "id": 1132,
    "name": "堅厚",
    "condition": "主将か、副将で主将と好相性の際",
    "effects": {
      "tacticReduce": {
        "Ⅲ": 10.0
      }
    }
  },
  "慧智": {
    "id": 1173,
    "name": "慧智",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 1.0
      }
    }
  },
  "威信": {
    "id": 1184,
    "name": "威信",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅳ": 10.0
      }
    }
  },
  "急迫": {
    "id": 1208,
    "name": "急迫",
    "condition": "主将か副将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 30.0,
        "Ⅱ": 50.0
      }
    }
  },
  "企及": {
    "id": 1209,
    "name": "企及",
    "condition": "主将か副将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 25.0
      }
    }
  },
  "宿志": {
    "id": 1217,
    "name": "宿志",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅱ": 30.0
      }
    }
  },
  "尽身": {
    "id": 1259,
    "name": "尽身",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 25.0
      }
    }
  },
  "紫髯": {
    "id": 1280,
    "name": "紫髯",
    "condition": "主将で、自部隊の副将と補佐全員と好相性の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 10.0
      }
    }
  },
  "黥陣": {
    "id": 1292,
    "name": "黥陣",
    "condition": "主将か副将で主将と自身が好相性の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 1.0,
        "Ⅱ": 1.0
      },
      "lethalResist": true
    }
  },
  "強欲": {
    "id": 1326,
    "name": "強欲",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 25.0
      }
    }
  },
  "明月陣": {
    "id": 1459,
    "name": "明月陣",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 2.0
      },
      "critical": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0
      }
    }
  },
  "滅尽剛牙断": {
    "id": 1463,
    "name": "滅尽剛牙断",
    "condition": "主将の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 2.0
      }
    }
  },
  "耐窮活衛": {
    "id": 3152,
    "name": "耐窮活衛",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅳ": 5.0
      }
    }
  },
  "窮地討凶": {
    "id": 3156,
    "name": "窮地討凶",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0,
        "Ⅲ": 20.0,
        "Ⅳ": 20.0
      }
    }
  },
  "窮地堅牢": {
    "id": 3261,
    "name": "窮地堅牢",
    "condition": "常に",
    "effects": {}
  },
  "免冑示面": {
    "id": 3382,
    "name": "免冑示面",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅴ": 10.0
      }
    }
  },
  "火行": {
    "id": 4201,
    "name": "火行",
    "condition": "常に",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 5.0
      }
    }
  },
  "龍鳴": {
    "id": 4313,
    "name": "龍鳴",
    "condition": "参軍の際",
    "effects": {
      "tacticReduce": {
        "Ⅰ": 1.0
      }
    }
  },
  "悪来": {
    "id": 1052,
    "name": "悪来",
    "condition": "常に",
    "effects": {
      "lethalResist": true
    }
  },
  "耐心": {
    "id": 1227,
    "name": "耐心",
    "condition": "常に",
    "effects": {
      "lethalResist": true
    }
  },
  "護志": {
    "id": 1258,
    "name": "護志",
    "condition": "主将か、副将か補佐で主将と自身が好相性の際",
    "effects": {
      "lethalResist": true
    }
  },
  "不滅の意志": {
    "id": 1322,
    "name": "不滅の意志",
    "condition": "常に",
    "effects": {
      "lethalResist": true
    }
  },
  "咬牙": {
    "id": 1347,
    "name": "咬牙",
    "condition": "主将か副将で主将と自身が好相性の際",
    "effects": {
      "lethalResist": true
    }
  },
  "虚術": {
    "id": 1423,
    "name": "虚術",
    "condition": "主将で、自部隊の副将と補佐全員と好相性の際",
    "effects": {
      "lethalResist": true
    }
  },
  "壮堅": {
    "id": 1437,
    "name": "壮堅",
    "condition": "常に",
    "effects": {
      "lethalResist": true
    }
  },
  "急射": {
    "id": 1442,
    "name": "急射",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "lethalResist": true
    }
  },
  "剛乱矛": {
    "id": 1454,
    "name": "剛乱矛",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "lethalResist": true,
      "tacticSpeed": {
        "Ⅲ": 25.0
      }
    }
  },
  "トリック": {
    "id": 3178,
    "name": "トリック",
    "condition": "常に",
    "effects": {
      "lethalResist": true
    }
  },
  "敏活": {
    "id": 40,
    "name": "敏活",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 4.0,
        "Ⅲ": 7.0,
        "Ⅳ": 10.0,
        "Ⅴ": 15.0
      }
    }
  },
  "秘計": {
    "id": 1003,
    "name": "秘計",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 4.0
      }
    }
  },
  "清鑑": {
    "id": 1018,
    "name": "清鑑",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 2.0
      }
    }
  },
  "狼顧": {
    "id": 1019,
    "name": "狼顧",
    "condition": "主将の際",
    "effects": {
      "tacticSpeed": {
        "Ⅲ": 5.0
      }
    }
  },
  "和韻": {
    "id": 1144,
    "name": "和韻",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅲ": 2.0
      }
    }
  },
  "栄達": {
    "id": 1167,
    "name": "栄達",
    "condition": "主将の際",
    "effects": {
      "tacticSpeed": {
        "Ⅱ": 30.0,
        "Ⅲ": 30.0
      }
    }
  },
  "戦策迅急": {
    "id": 3182,
    "name": "戦策迅急",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 4.0,
        "Ⅲ": 5.0,
        "Ⅳ": 7.0,
        "Ⅴ": 7.0
      }
    }
  },
  "連環": {
    "id": 4314,
    "name": "連環",
    "condition": "参軍の際",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 4.0
      }
    }
  },
  "奮闘": {
    "id": 4335,
    "name": "奮闘",
    "condition": "参軍の際",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 10.0
      }
    }
  },
  "堅防強陣": {
    "id": 4559,
    "name": "堅防強陣",
    "condition": "自都市駐屯部隊に編制されている際",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 10.0
      }
    }
  },
  "羌敏活": {
    "id": 6002,
    "name": "羌敏活",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 1.0,
        "Ⅱ": 4.0,
        "Ⅲ": 7.0,
        "Ⅳ": 10.0,
        "Ⅴ": 15.0
      }
    }
  },
  "防衛迅活": {
    "id": 9021,
    "name": "防衛迅活",
    "condition": "常に",
    "effects": {
      "tacticSpeed": {
        "Ⅰ": 5.0,
        "Ⅱ": 5.5,
        "Ⅲ": 6.0,
        "Ⅳ": 6.5,
        "Ⅴ": 7.0,
        "Ⅵ": 7.5,
        "Ⅶ": 8.0,
        "Ⅷ": 8.5,
        "Ⅸ": 9.0,
        "Ⅹ": 10.0
      }
    }
  },
  "烈虎": {
    "id": 1024,
    "name": "烈虎",
    "condition": "常に",
    "effects": {
      "critical": {
        "Ⅰ": 12.0,
        "Ⅱ": 12.0,
        "Ⅲ": 16.0
      }
    }
  },
  "包囲": {
    "id": 1133,
    "name": "包囲",
    "condition": "常に",
    "effects": {
      "critical": {
        "Ⅰ": 10.0,
        "Ⅱ": 20.0
      }
    }
  },
  "至明": {
    "id": 1211,
    "name": "至明",
    "condition": "主将の際",
    "effects": {
      "critical": {
        "Ⅰ": 30.0,
        "Ⅱ": 50.0
      }
    }
  },
  "強勢": {
    "id": 1283,
    "name": "強勢",
    "condition": "主将の際",
    "effects": {
      "critical": {
        "Ⅰ": 100.0,
        "Ⅱ": 100.0
      }
    }
  },
  "悪辣": {
    "id": 1287,
    "name": "悪辣",
    "condition": "常に",
    "effects": {
      "critical": {
        "Ⅰ": 10.0
      }
    }
  },
  "雄弁": {
    "id": 1299,
    "name": "雄弁",
    "condition": "主将か副将の際",
    "effects": {
      "critical": {
        "Ⅲ": 5.0
      }
    }
  },
  "義気": {
    "id": 1480,
    "name": "義気",
    "condition": "主将の際",
    "effects": {
      "critical": {
        "Ⅱ": 50.0
      }
    }
  },
  "会心猛攻": {
    "id": 3035,
    "name": "会心猛攻",
    "condition": "主将の際",
    "effects": {
      "critical": {
        "Ⅰ": 5.0,
        "Ⅱ": 10.0,
        "Ⅲ": 15.0,
        "Ⅳ": 20.0,
        "Ⅴ": 20.0
      }
    }
  },
  "心知双昴": {
    "id": 3239,
    "name": "心知双昴",
    "condition": "常に",
    "effects": {
      "critical": {
        "Ⅰ": 10.0,
        "Ⅱ": 12.0,
        "Ⅲ": 15.0,
        "Ⅳ": 20.0,
        "Ⅴ": 20.0
      }
    }
  },
  "徳義": {
    "id": 4330,
    "name": "徳義",
    "condition": "参軍の際",
    "effects": {
      "critical": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0,
        "Ⅲ": 3.0,
        "Ⅳ": 4.0,
        "Ⅴ": 5.0
      },
      "attackSpeed": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0,
        "Ⅲ": 3.0,
        "Ⅳ": 4.0,
        "Ⅴ": 5.0
      }
    }
  },
  "速射": {
    "id": 9,
    "name": "速射",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 24.0,
        "Ⅱ": 28.0,
        "Ⅲ": 32.0
      }
    }
  },
  "内助": {
    "id": 10,
    "name": "内助",
    "condition": "主将が男性の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 9.0,
        "Ⅱ": 13.0,
        "Ⅲ": 18.0,
        "Ⅳ": 25.0,
        "Ⅴ": 33.0
      }
    }
  },
  "老練": {
    "id": 60,
    "name": "老練",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 5.0,
        "Ⅱ": 7.0,
        "Ⅲ": 10.0,
        "Ⅳ": 10.0
      }
    }
  },
  "突貫": {
    "id": 1002,
    "name": "突貫",
    "condition": "主将か副将の際",
    "effects": {
      "attackSpeed": {
        "Ⅲ": 25.0,
        "Ⅳ": 25.0
      }
    }
  },
  "火神": {
    "id": 1004,
    "name": "火神",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 30.0
      }
    }
  },
  "鈴鳴": {
    "id": 1005,
    "name": "鈴鳴",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅲ": 30.0
      }
    }
  },
  "掎角": {
    "id": 1007,
    "name": "掎角",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 30.0,
        "Ⅱ": 30.0,
        "Ⅲ": 30.0
      }
    }
  },
  "気勢": {
    "id": 1036,
    "name": "気勢",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 15.0,
        "Ⅱ": 20.0
      }
    }
  },
  "結心": {
    "id": 1061,
    "name": "結心",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 5.0,
        "Ⅲ": 5.0
      }
    }
  },
  "厳律": {
    "id": 1080,
    "name": "厳律",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 10.0,
        "Ⅲ": 10.0
      }
    }
  },
  "驍騎": {
    "id": 1082,
    "name": "驍騎",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0,
        "Ⅲ": 15.0
      }
    }
  },
  "鬼神": {
    "id": 1116,
    "name": "鬼神",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅱ": 75.0
      }
    }
  },
  "撃烈": {
    "id": 1121,
    "name": "撃烈",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅲ": 20.0
      }
    }
  },
  "窮追": {
    "id": 1139,
    "name": "窮追",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      }
    }
  },
  "大賈": {
    "id": 1143,
    "name": "大賈",
    "condition": "主将か、副将で主将と自身が好相性の際",
    "effects": {
      "attackSpeed": {
        "Ⅱ": 10.0,
        "Ⅲ": 15.0
      }
    }
  },
  "飛礫": {
    "id": 1161,
    "name": "飛礫",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0
      }
    }
  },
  "闊達": {
    "id": 1278,
    "name": "闊達",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 12.0,
        "Ⅲ": 15.0,
        "Ⅳ": 20.0,
        "Ⅴ": 25.0
      }
    }
  },
  "慧烈": {
    "id": 1358,
    "name": "慧烈",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 12.0,
        "Ⅲ": 15.0,
        "Ⅳ": 20.0,
        "Ⅴ": 25.0
      }
    }
  },
  "峻節": {
    "id": 1374,
    "name": "峻節",
    "condition": "主将か副将で、自部隊の主将と副将全員と好相性の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 50.0
      }
    }
  },
  "苛烈": {
    "id": 1403,
    "name": "苛烈",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 10.0
      }
    }
  },
  "魁岸": {
    "id": 1484,
    "name": "魁岸",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅱ": 25.0
      }
    }
  },
  "誇矜": {
    "id": 1489,
    "name": "誇矜",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 15.0
      }
    }
  },
  "策略躍動": {
    "id": 3006,
    "name": "策略躍動",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 14.0,
        "Ⅱ": 17.0,
        "Ⅲ": 20.0,
        "Ⅳ": 25.0
      }
    }
  },
  "不乱躍動": {
    "id": 3017,
    "name": "不乱躍動",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 50.0,
        "Ⅱ": 40.0,
        "Ⅲ": 25.0
      }
    }
  },
  "会心弓術": {
    "id": 3055,
    "name": "会心弓術",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅱ": 5.0,
        "Ⅲ": 5.0,
        "Ⅳ": 5.0,
        "Ⅴ": 5.0
      }
    }
  },
  "結騎豪躍": {
    "id": 3121,
    "name": "結騎豪躍",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 4.0,
        "Ⅲ": 5.0,
        "Ⅳ": 5.0
      }
    }
  },
  "凛然領導": {
    "id": 3134,
    "name": "凛然領導",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅲ": 10.0,
        "Ⅳ": 15.0
      }
    }
  },
  "強堅誅裂": {
    "id": 3213,
    "name": "強堅誅裂",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅱ": 5.0,
        "Ⅲ": 7.0,
        "Ⅳ": 10.0
      }
    }
  },
  "不乱活盛": {
    "id": 3268,
    "name": "不乱活盛",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 15.0,
        "Ⅱ": 20.0,
        "Ⅲ": 25.0,
        "Ⅳ": 25.0
      }
    }
  },
  "強迅躍動": {
    "id": 3294,
    "name": "強迅躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 7.0,
        "Ⅱ": 15.0,
        "Ⅲ": 25.0
      }
    }
  },
  "咲乱躍動": {
    "id": 3313,
    "name": "咲乱躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 4.0,
        "Ⅲ": 5.0
      }
    }
  },
  "賢慧躍動": {
    "id": 3340,
    "name": "賢慧躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0,
        "Ⅲ": 4.0
      }
    }
  },
  "弓騎剛速": {
    "id": 3348,
    "name": "弓騎剛速",
    "condition": "主将の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0,
        "Ⅲ": 4.0
      }
    }
  },
  "聡躍援舞": {
    "id": 3373,
    "name": "聡躍援舞",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0,
        "Ⅲ": 15.0,
        "Ⅳ": 20.0
      }
    }
  },
  "鬼面将軍": {
    "id": 3383,
    "name": "鬼面将軍",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 1.5,
        "Ⅱ": 2.0,
        "Ⅲ": 2.5,
        "Ⅳ": 3.0
      }
    }
  },
  "逆乱躍動": {
    "id": 3419,
    "name": "逆乱躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 3.0,
        "Ⅲ": 4.0
      }
    }
  },
  "速撃確守": {
    "id": 3434,
    "name": "速撃確守",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 10.0,
        "Ⅲ": 10.0,
        "Ⅳ": 10.0,
        "Ⅴ": 25.0
      }
    }
  },
  "倒撃躍動": {
    "id": 3441,
    "name": "倒撃躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 10.0,
        "Ⅱ": 15.0,
        "Ⅲ": 20.0,
        "Ⅳ": 25.0
      }
    }
  },
  "四旬疾連": {
    "id": 3488,
    "name": "四旬疾連",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 4.0,
        "Ⅱ": 4.0,
        "Ⅲ": 4.0
      }
    }
  },
  "豪心躍動": {
    "id": 3493,
    "name": "豪心躍動",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 1.0,
        "Ⅱ": 2.0,
        "Ⅲ": 3.0
      }
    }
  },
  "羌弩": {
    "id": 4102,
    "name": "羌弩",
    "condition": null,
    "effects": {
      "attackSpeed": {
        "Ⅰ": 15.0,
        "Ⅱ": 15.0,
        "Ⅲ": 15.0,
        "Ⅳ": 15.0,
        "Ⅴ": 15.0
      }
    }
  },
  "東湖飛弓": {
    "id": 4113,
    "name": "東湖飛弓",
    "condition": null,
    "effects": {
      "attackSpeed": {
        "Ⅰ": 15.0,
        "Ⅱ": 15.0,
        "Ⅲ": 15.0,
        "Ⅳ": 15.0,
        "Ⅴ": 15.0
      }
    }
  },
  "奔突": {
    "id": 4315,
    "name": "奔突",
    "condition": "参軍の際",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 2.0,
        "Ⅱ": 4.0,
        "Ⅲ": 6.0,
        "Ⅳ": 8.0,
        "Ⅴ": 10.0
      }
    }
  },
  "弓兵攻速": {
    "id": 4512,
    "name": "弓兵攻速",
    "condition": "常に",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 2.0
      }
    }
  },
  "弓兵攻撃速度": {
    "id": 5088,
    "name": "弓兵攻撃速度",
    "condition": "常に",
    "effects": {}
  },
  "速撃・騎": {
    "id": 9006,
    "name": "速撃・騎",
    "condition": "自部隊が騎兵の場合",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 6.0,
        "Ⅲ": 9.0,
        "Ⅳ": 12.0,
        "Ⅴ": 15.0,
        "Ⅵ": 18.0,
        "Ⅶ": 21.0,
        "Ⅷ": 24.0,
        "Ⅸ": 27.0,
        "Ⅹ": 30.0
      }
    }
  },
  "速撃・歩": {
    "id": 9007,
    "name": "速撃・歩",
    "condition": "自部隊が歩兵の場合",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 6.0,
        "Ⅲ": 9.0,
        "Ⅳ": 12.0,
        "Ⅴ": 15.0,
        "Ⅵ": 18.0,
        "Ⅶ": 21.0,
        "Ⅷ": 24.0,
        "Ⅸ": 27.0,
        "Ⅹ": 30.0
      }
    }
  },
  "速撃・弓": {
    "id": 9008,
    "name": "速撃・弓",
    "condition": "自部隊が弓兵の場合",
    "effects": {
      "attackSpeed": {
        "Ⅰ": 3.0,
        "Ⅱ": 6.0,
        "Ⅲ": 9.0,
        "Ⅳ": 12.0,
        "Ⅴ": 15.0,
        "Ⅵ": 18.0,
        "Ⅶ": 21.0,
        "Ⅷ": 24.0,
        "Ⅸ": 27.0,
        "Ⅹ": 30.0
      }
    }
  }
};

console.log("戦闘パラメータデータ読み込み完了:", Object.keys(COMBAT_PARAMETERS).length, "個");
