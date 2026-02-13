const EMBEDDED_TREASURES_DATA = [
  {
    id: 1,
    name: "神刀",
    category: "武器",
    weapon_type: "槍",
    related: "利権"
  },
  {
    id: 2,
    name: "宝双剣",
    category: "武器",
    weapon_type: "槍",
    related: "利権",
    skills: ["不乱怒涛"]
  },
  {
    id: 3,
    name: "宝剣",
    category: "武器",
    weapon_type: "弓",
    related: "利権"
  },
  {
    id: 4,
    name: "宝雕弓",
    category: "武器",
    weapon_type: "弓",
    related: "利権",
    skills: ["不乱怒涛"]
  },
  {
    id: 5,
    name: "象鼻刀",
    category: "武器",
    weapon_type: "馬",
    related: "利権"
  },
  {
    id: 6,
    name: "蛇戟",
    category: "武器",
    weapon_type: "馬",
    related: "利権",
    skills: ["不乱怒涛"]
  },
  {
    id: 7,
    name: "明光鎧",
    category: "防具",
    related: "利権"
  },
  {
    id: 8,
    name: "黒光鎧",
    category: "防具",
    related: "利権"
  },
  {
    id: 9,
    name: "委貌冠",
    category: "防具",
    related: "利権"
  },
  {
    id: 10,
    name: "易経",
    category: "文物",
    related: "利権"
  },
  {
    id: 11,
    name: "戦国策",
    category: "文物",
    related: "利権"
  },
  {
    id: 12,
    name: "呂氏鏡",
    category: "文物",
    related: "利権"
  },
  {
    id: 13,
    name: "蛇矛",
    category: "武器",
    weapon_type: "槍",
    related: "張飛",
    factions: ["蜀"],
    skills: ["会心猛攻", "豪勇奮闘", "武勇激烈"]
  },
  {
    id: 14,
    name: "青龍偃月刀",
    category: "武器",
    weapon_type: "馬",
    related: "関羽",
    factions: ["蜀"],
    skills: ["堅固打破", "戦法乱舞", "破軍突襲"]
  },
  {
    id: 15,
    name: "元戎弩",
    category: "武器",
    weapon_type: "弓",
    related: "諸葛亮",
    factions: ["蜀"],
    skills: ["策略躍動", "智謀撃砕", "機略乱舞"]
  },
  {
    id: 16,
    name: "七星宝刀",
    category: "武器",
    weapon_type: "全",
    related: "利権",
    skills: ["会心猛撃", "会心怒涛", "領導豪猛"]
  },
  {
    id: 17,
    name: "孫子の兵法書",
    category: "文物",
    related: "孫堅",
    factions: ["呉"],
    skills: ["戦法防備", "猛勇連携", "栄勢収転"]
  },
  {
    id: 18,
    name: "方天画戟",
    category: "武器",
    weapon_type: "馬",
    related: "呂布",
    skills: ["主導強化", "剛力乱舞", "豪胆剛刃"]
  },
  {
    id: 19,
    name: "雌雄一対の剣",
    category: "武器",
    weapon_type: "槍",
    related: "劉備",
    factions: ["蜀"],
    skills: ["不乱躍動", "合志敏達", "会撃回生"]
  },
  {
    id: 20,
    name: "召虎兜",
    category: "防具",
    related: "張遼",
    factions: ["魏"],
    skills: ["反攻打破", "突破掃滅", "剛然防護"]
  },
  {
    id: 21,
    name: "郭子兵略",
    category: "文物",
    related: "郭嘉",
    factions: ["魏"],
    skills: ["攪乱戦術", "才略昂揚", "有利与撃"]
  },
  {
    id: 22,
    name: "鳴鈴双短戟",
    category: "武器",
    weapon_type: "弓",
    related: "甘寧",
    factions: ["呉"],
    skills: ["躍動兵術", "振鈴豪勇", "英武威迫"]
  },
  {
    id: 23,
    name: "周郎琵琶",
    category: "文物",
    related: "周瑜",
    factions: ["呉"],
    skills: ["明敏破砕", "策謀烈火", "討究攻抜"]
  },
  {
    id: 24,
    name: "太尉冠",
    category: "防具",
    related: "賈詡",
    factions: ["魏"],
    skills: ["叡智策励", "掎角深慮", "避坑落井"]
  },
  {
    id: 25,
    name: "虎臣瓢箪",
    category: "文物",
    related: "張飛",
    factions: ["蜀"],
    skills: ["会心猛攻", "燕人奮闘", "会心毀壞"]
  },
  {
    id: 26,
    name: "鮮卑角端弓",
    category: "武器",
    weapon_type: "馬",
    related: "異民族",
    skills: ["攻城練達", "破砕兵法", "激破怒涛"]
  },
  {
    id: 27,
    name: "五渓狼牙棒",
    category: "武器",
    weapon_type: "槍",
    related: "異民族",
    skills: ["剛力練達", "不乱迫撃", "不乱痛撃"]
  },
  {
    id: 28,
    name: "山越鋸歯刀",
    category: "武器",
    weapon_type: "槍",
    related: "異民族",
    skills: ["沈滞兵術", "遅鈍兵術", "惶惑兵術"]
  },
  {
    id: 29,
    name: "青釭の剣",
    category: "武器",
    weapon_type: "馬",
    related: "趙雲",
    factions: ["蜀"],
    skills: ["龍胆練達", "砕裂猛襲", "有利撃攘"]
  },
  {
    id: 30,
    name: "虎皮披風",
    category: "防具",
    related: "孫策",
    factions: ["呉"],
    skills: ["雄略強化", "堅守軒昂", "有利護堪"]
  },
  {
    id: 31,
    name: "太平要術の書",
    category: "文物",
    related: "イベント",
    skills: ["反逆練達", "離間兵術", "叛心結託"]
  },
  {
    id: 32,
    name: "狐白裘",
    category: "文物",
    related: "イベント",
    skills: ["運気向上", "内務指揮"]
  },
  {
    id: 33,
    name: "射透弓",
    category: "武器",
    weapon_type: "弓",
    related: "太史慈",
    factions: ["呉"],
    skills: ["会心弓術", "強撃怒涛", "箭連攻昂"]
  },
  {
    id: 34,
    name: "麟角槍",
    category: "武器",
    weapon_type: "槍",
    related: "姜維",
    factions: ["蜀"],
    skills: ["才腕練達", "知勇発揚", "戦巧明算"]
  },
  {
    id: 35,
    name: "南蛮獣牙首飾",
    category: "文物",
    related: "異民族",
    skills: ["金剛練達", "墨守兵術", "窮地壮烈"]
  },
  {
    id: 36,
    name: "烏桓貂毛兜",
    category: "防具",
    related: "異民族",
    skills: ["掃討練達", "受撃適防", "疾快烈撃"]
  },
  {
    id: 37,
    name: "羌毛領披風",
    category: "防具",
    related: "異民族",
    skills: ["巻撃避之", "回避兵術", "削弱転脱"]
  },
  {
    id: 38,
    name: "白羽扇",
    category: "武器",
    weapon_type: "槍",
    related: "諸葛亮",
    factions: ["蜀"],
    skills: ["伏龍練達", "術策怒涛"]
  },
  {
    id: 39,
    name: "三叉束髪紫金冠",
    category: "防具",
    related: "呂布",
    skills: ["飛将練達", "万陣翻身", "有利驍衛"]
  },
  {
    id: 40,
    name: "和泉守兼定",
    category: "武器",
    weapon_type: "全",
    related: "コラボ",
    skills: ["奮戦", "天然理心流"]
  },
  {
    id: 41,
    name: "だんだら羽織",
    category: "防具",
    related: "コラボ",
    skills: ["不屈", "誠衛士道"]
  },
  {
    id: 42,
    name: "黒紗金飾冠",
    category: "防具",
    related: "司馬懿",
    factions: ["魏"],
    skills: ["狼顧練達", "百計深化", "詭略妙衛"]
  },
  {
    id: 43,
    name: "紫藤紗錦披帛",
    category: "文物",
    related: "貂蝉",
    skills: ["傾国練達", "躍動戦術", "連志舞励"]
  },
  {
    id: 44,
    name: "太師黄金爵",
    category: "文物",
    related: "董卓",
    skills: ["歓喜練達", "剛撃昂揚", "歓楽破壁"]
  },
  {
    id: 45,
    name: "武弁大冠",
    category: "防具",
    related: "孫堅",
    factions: ["呉"],
    skills: ["烈虎練達", "励気増強", "不抜確守"]
  },
  {
    id: 46,
    name: "黄武勢剣",
    category: "武器",
    weapon_type: "弓",
    related: "陸遜",
    factions: ["呉"],
    skills: ["獄炎練達", "機知操炎", "烈火炎討"]
  },
  {
    id: 47,
    name: "翡翠玉笛",
    category: "文物",
    related: "小喬",
    factions: ["呉"],
    skills: ["削弱深化", "万徳興起", "対衰追討"]
  },
  {
    id: 48,
    name: "龍紋緑袍鎧",
    category: "防具",
    related: "関羽",
    factions: ["蜀"],
    skills: ["美髯練達", "過関斬将"]
  },
  {
    id: 49,
    name: "疾風剛弓",
    category: "武器",
    weapon_type: "弓",
    related: "夏侯淵",
    factions: ["魏"],
    skills: ["極弓練達", "強撃連携", "合心疾撃"]
  },
  {
    id: 50,
    name: "軍師錦羅袍",
    category: "文物",
    related: "龐統",
    factions: ["蜀"],
    skills: ["鳳雛練達", "受撃反滞", "対衰盤石"]
  },
  {
    id: 51,
    name: "冕冠",
    category: "防具",
    related: "イベント",
    skills: ["運気向上", "視察指揮"]
  },
  {
    id: 52,
    name: "立義鋼刀",
    category: "武器",
    weapon_type: "馬",
    related: "龐徳",
    factions: ["蜀"],
    skills: ["堪耐練達", "戦法反攻", "堪撃制勢"]
  },
  {
    id: 53,
    name: "二石之弓",
    category: "武器",
    weapon_type: "弓",
    related: "黄忠",
    factions: ["蜀"],
    skills: ["弓神練達", "撃射怒涛", "巧矢激成"]
  },
  {
    id: 54,
    name: "才捷弓",
    category: "武器",
    weapon_type: "弓",
    related: "孫尚香",
    factions: ["呉"],
    skills: ["弓姫練達", "勇躍深化", "連武破敵"]
  },
  {
    id: 55,
    name: "商君書",
    category: "文物",
    related: "謎",
    skills: ["内政補佐", "利益増進"]
  },
  {
    id: 56,
    name: "獅子頭の兜",
    category: "防具",
    related: "馬超",
    factions: ["蜀"],
    skills: ["烈武合志", "神威煥発", "結騎豪躍"]
  },
  {
    id: 57,
    name: "孤月独明剣",
    category: "武器",
    weapon_type: "馬",
    related: "夏侯惇",
    factions: ["魏"],
    skills: ["奮迅連携", "槍撃怒涛", "合心剛破"]
  },
  {
    id: 58,
    name: "古錠刀",
    category: "武器",
    weapon_type: "全",
    related: "孫堅",
    factions: ["呉"],
    skills: ["虎嘯風生", "戦機伸長", "結援烈撃"]
  },
  {
    id: 59,
    name: "克定鋭刀",
    category: "武器",
    weapon_type: "槍",
    related: "張郃",
    factions: ["魏"],
    skills: ["活心破城", "犀利喝破", "有利活戦"]
  },
  {
    id: 60,
    name: "金繍紅錦半臂",
    category: "防具",
    related: "孫権",
    factions: ["呉"],
    skills: ["碧羅大同", "哮虎躍動", "強迅盤石"]
  },
  {
    id: 61,
    name: "玲瓏獅蛮帯",
    category: "文物",
    related: "呂玲綺",
    skills: ["凛然領導", "会心乱撃", "十全凛裂"]
  },
  {
    id: 62,
    name: "金系帯紫錦披風",
    category: "防具",
    related: "皇甫嵩",
    skills: ["圧倒練達", "策応賢守", "不乱盤石"]
  },
  {
    id: 63,
    name: "青嚢書",
    category: "文物",
    related: "華佗",
    factions: ["袁紹"],
    skills: ["兵心練達", "窮地護心", "窮地戦威"]
  },
  {
    id: 64,
    name: "太平九節杖",
    category: "武器",
    weapon_type: "槍",
    related: "張角",
    skills: ["天立喝破", "賢知攻勢", "逆乱烈撃"]
  },
  {
    id: 65,
    name: "克己猟龍兜",
    category: "防具",
    related: "呂蒙",
    factions: ["呉"],
    skills: ["勉励聡慧", "文武双撃", "向学躍動"]
  },
  {
    id: 66,
    name: "千創玄英鎧",
    category: "防具",
    related: "周泰",
    factions: ["呉"],
    skills: ["剛毅活命", "窮地回生", "戦剛防備"]
  },
  {
    id: 67,
    name: "克敵機謀剣",
    category: "武器",
    weapon_type: "馬",
    related: "荀攸",
    factions: ["魏"],
    skills: ["叡智天略", "百謀興起", "賢略連繋"]
  },
  {
    id: 68,
    name: "荀氏春秋要論",
    category: "文物",
    related: "荀彧",
    factions: ["魏"],
    skills: ["慧護策動", "雪上加霜", "耐窮活衛"]
  },
  {
    id: 69,
    name: "羅綺香嚢",
    category: "文物",
    related: "謎",
    skills: ["賊討招福", "健勝翻身"]
  },
  {
    id: 70,
    name: "倚天の剣",
    category: "武器",
    weapon_type: "馬",
    related: "曹操",
    factions: ["魏"],
    skills: ["壮志練達", "戦撃熾烈", "当塗増強"]
  },
  {
    id: 71,
    name: "烈志蒼驥鎧",
    category: "防具",
    related: "曹操",
    factions: ["魏"],
    skills: ["虚実練達", "十全盤石", "当塗伸長"]
  },
  {
    id: 72,
    name: "孟徳新書",
    category: "文物",
    related: "曹操",
    factions: ["魏"],
    skills: ["奸雄練達", "窮地討凶", "当塗遠謀"]
  },
  {
    id: 73,
    name: "剛断戦斧",
    category: "武器",
    weapon_type: "槍",
    related: "徐晃",
    factions: ["魏"],
    skills: ["猛威合志", "戦法乱打", "剛大戦威"]
  },
  {
    id: 74,
    name: "紅玉珍珠金耳墜",
    category: "文物",
    related: "関銀屏",
    factions: ["蜀"],
    skills: ["澄天爛漫", "躍動強健", "咲乱昂揚"]
  },
  {
    id: 75,
    name: "孔明の木像",
    category: "文物",
    related: "コラボ",
    skills: ["孔明尚在", "不能料死"]
  },
  {
    id: 76,
    name: "朱襟白絹半臂",
    category: "防具",
    related: "徐庶",
    factions: ["蜀"],
    skills: ["才知義心", "方略炯眼", "主助激成"]
  },
  {
    id: 77,
    name: "双鉄戟",
    category: "武器",
    weapon_type: "槍",
    related: "典韋",
    factions: ["魏"],
    skills: ["衛砕深化", "武猛魁偉", "警衛昂揚"]
  },
  {
    id: 78,
    name: "西方の杖",
    category: "武器",
    weapon_type: "全",
    related: "イベント",
    skills: ["トリック", "トリート", "ハロウィン"]
  },
  {
    id: 79,
    name: "蝙蝠披風",
    category: "防具",
    related: "イベント",
    skills: ["トリック", "トリート", "ハロウィン"]
  },
  {
    id: 80,
    name: "南瓜の灯燈",
    category: "文物",
    related: "イベント",
    skills: ["トリック", "トリート", "ハロウィン"]
  },
  {
    id: 81,
    name: "与韓将軍書",
    category: "文物",
    related: "賈詡",
    factions: ["魏"],
    skills: ["掎角策応", "戦撃追略"]
  },
  {
    id: 82,
    name: "大喬琵琶",
    category: "文物",
    related: "大喬",
    factions: ["呉"],
    skills: ["万徳興起", "戦策迅急", "嬌美減衝"]
  },
  {
    id: 83,
    name: "白狐毛皮披風",
    category: "防具",
    related: "公孫瓚",
    factions: ["蜀"],
    skills: ["疾駆合志", "突射怒涛", "弓騎守剛"]
  },
  {
    id: 84,
    name: "神獣面白纓兜",
    category: "防具",
    related: "馬騰",
    factions: ["蜀"],
    skills: ["万騎梟勇", "騎虎無尽", "結騎撃砕"]
  },
  {
    id: 85,
    name: "金繍緑錦披風",
    category: "防具",
    related: "陸抗",
    factions: ["呉"],
    skills: ["総慧一心", "会心癒術", "賢慧戦防"]
  },
  {
    id: 86,
    name: "玄熊毛銀黄兜",
    category: "防具",
    related: "華雄",
    skills: ["頑堅連携", "華敢堅牢", "戦剛壮昇"]
  },
  {
    id: 87,
    name: "黄幡豹尾",
    category: "文物",
    related: "呂布",
    skills: ["飛揚破城", "烈撃怯兵"]
  },
  {
    id: 88,
    name: "太平賢良黄金冠",
    category: "防具",
    related: "張角",
    skills: ["黄賢唱道", "符水乱道", "逆乱盤石"]
  },
  {
    id: 89,
    name: "鷹揚玄冥兜",
    category: "防具",
    related: "袁紹",
    factions: ["袁紹"],
    skills: ["轟鳴雄主", "復興戦術", "有利堪興"]
  },
  {
    id: 90,
    name: "驍悍傲骨鎧",
    category: "防具",
    related: "魏延",
    factions: ["蜀"],
    skills: ["硬骨邁進", "壮烈撞断", "有利強盤"]
  },
  {
    id: 91,
    name: "瑠璃珠金花冠",
    category: "防具",
    related: "甄氏",
    factions: ["魏"],
    skills: ["美神幻惑", "名花絢爛", "衰滞深化"]
  },
  {
    id: 92,
    name: "純和青金石首飾",
    category: "文物",
    related: "王元姫",
    factions: ["魏"],
    skills: ["佐命聡慧", "純和斉心", "麗拡激成"]
  },
  {
    id: 93,
    name: "天柱鉄大刀",
    category: "武器",
    weapon_type: "馬",
    related: "顔良",
    factions: ["袁紹"],
    skills: ["戦撃雄断", "倶発激成", "剛武撃昇"]
  },
  {
    id: 94,
    name: "天禄一角兜",
    category: "防具",
    related: "文醜",
    factions: ["袁紹"],
    skills: ["強堅誅裂", "倶発堅塁", "剛武会覇"]
  },
  {
    id: 95,
    name: "西方の盾",
    category: "防具",
    related: "イベント",
    skills: ["声威盾陣", "強壮奪心"]
  },
  {
    id: 96,
    name: "西方の鞭",
    category: "武器",
    weapon_type: "全",
    related: "イベント",
    skills: ["声威盾陣", "撓打恐恐", "強壮奪心"]
  },
  {
    id: 97,
    name: "召虎鉤鎌刀",
    category: "武器",
    weapon_type: "槍",
    related: "張遼",
    factions: ["魏"],
    skills: ["突破活命", "勇撃躍動"]
  },
  {
    id: 98,
    name: "真鋼鎮定剣",
    category: "武器",
    weapon_type: "馬",
    related: "孫策",
    factions: ["呉"],
    skills: ["雄図連携", "大喝烈撃", "制覇万虎"]
  },
  {
    id: 99,
    name: "道論",
    category: "文物",
    related: "鍾会",
    factions: ["魏"],
    skills: ["策応矜伐", "避撃優賢", "対衰堅衛"]
  },
  {
    id: 100,
    name: "平蜀地理図",
    category: "文物",
    related: "鄧艾",
    skills: ["破城迅疾", "戦撃槍舞", "崩破撃砕"]
  },
  {
    id: 101,
    name: "明道方略冠",
    category: "防具",
    related: "魯粛",
    factions: ["呉"],
    skills: ["賢俊奨導", "連志賢守"]
  },
  {
    id: 102,
    name: "錦帆鈴飾",
    category: "文物",
    related: "甘寧",
    factions: ["呉"],
    skills: ["振鈴猛勇", "剛烈負枷"]
  },
  {
    id: 103,
    name: "白銀龍胆鎧",
    category: "防具",
    related: "趙雲",
    factions: ["蜀"],
    skills: ["龍心掃滅", "攻破督励", "龍心完勢"]
  },
  {
    id: 104,
    name: "木牛試作模型",
    category: "文物",
    related: "黄月英",
    factions: ["蜀"],
    skills: ["創機聡慧", "破壁連播", "賢慧熾灼"]
  },
  {
    id: 105,
    name: "登極龍紋金觚",
    category: "文物",
    related: "曹丕",
    factions: ["魏"],
    skills: ["深慮栄耀", "心知双昴", "対衰断庸"]
  },
  {
    id: 106,
    name: "疾風護臂甲",
    category: "防具",
    related: "夏侯淵",
    factions: ["魏"],
    skills: ["天弓合志", "躍動弓舞"]
  },
  {
    id: 107,
    name: "狼毛紫纓兜",
    category: "防具",
    related: "董卓",
    skills: ["狂喜歓宴", "百花凄艶"]
  },
  {
    id: 108,
    name: "藍田玉軍令牌",
    category: "文物",
    related: "諸葛恪",
    factions: ["呉"],
    skills: ["呵成破略", "平癒弄策", "存兵才気"]
  },
  {
    id: 109,
    name: "雲矩紋玉具宝剣",
    category: "武器",
    weapon_type: "槍",
    related: "于禁",
    factions: ["魏"],
    skills: ["声威厳令", "盤石加霜", "抑敵壮雄"]
  },
  {
    id: 110,
    name: "銀山雪海鎧",
    category: "防具",
    related: "馬雲騄",
    factions: ["蜀"],
    skills: ["玲珠爛漫", "麗人躍動", "令女盤石"]
  },
  {
    id: 111,
    name: "鋼胆鉄心槍",
    category: "武器",
    weapon_type: "馬",
    related: "楽進",
    factions: ["魏"],
    skills: ["驍健豪勇", "十全痛撃", "豪心剛先"]
  },
  {
    id: 112,
    name: "思紹",
    category: "武器",
    weapon_type: "槍",
    related: "袁紹",
    factions: ["袁紹"],
    skills: ["轟鳴雄主", "臣子激成", "有利烈成"]
  },
  {
    id: 113,
    name: "亢龍鋼鞭",
    category: "武器",
    weapon_type: "馬",
    related: "文鴦",
    skills: ["掃滅豪勇", "鎮撫騎駆"]
  },
  {
    id: 114,
    name: "奔走の算盤",
    category: "文物",
    related: "コラボ"
  },
  {
    id: 115,
    name: "富春孫氏家伝",
    category: "文物",
    related: "孫堅",
    factions: ["呉"],
    skills: ["英烈領導", "会心鼓吹"]
  },
  {
    id: 116,
    name: "雄豪肩呑鎧",
    category: "防具",
    related: "張苞",
    factions: ["蜀"],
    skills: ["復仇剛撃", "窮地堅牢", "不抜雄健"]
  },
  {
    id: 117,
    name: "燦金赤纓兜",
    category: "防具",
    related: "黄忠",
    factions: ["蜀"],
    skills: ["弓妙連携", "弓心十全"]
  },
  {
    id: 118,
    name: "断江倒海鞭",
    category: "武器",
    weapon_type: "弓",
    related: "黄蓋",
    factions: ["呉"],
    skills: ["烈火焚如", "箭連剛硬", "火勢攻崩"]
  },
  {
    id: 119,
    name: "龍の水槍",
    category: "武器",
    weapon_type: "全",
    related: "イベント",
    skills: ["活水旺盛", "不乱活盛"]
  },
  {
    id: 120,
    name: "羊の遊泳圏",
    category: "文物",
    related: "イベント",
    skills: ["活水旺盛", "流水確守", "不乱活盛"]
  },
  {
    id: 121,
    name: "奮勇燕尾牌",
    category: "防具",
    related: "曹仁",
    factions: ["魏"],
    skills: ["確固強剛", "守護奮励", "常剛雄健"]
  },
  {
    id: 122,
    name: "司馬氏兵記",
    category: "文物",
    related: "司馬懿",
    factions: ["魏"],
    skills: ["後顧鬼想", "方略警衛"]
  },
  {
    id: 123,
    name: "興起嵩峻兜",
    category: "防具",
    related: "王平",
    factions: ["蜀"],
    skills: ["活命相克", "昂然敏達"]
  },
  {
    id: 124,
    name: "九華扇",
    category: "武器",
    weapon_type: "全",
    related: "イベント",
    skills: ["領導連共", "鳳翔風征", "鳳煌斉心"]
  },
  {
    id: 125,
    name: "壮気直躬剣",
    category: "武器",
    weapon_type: "馬",
    related: "陳宮",
    skills: ["調唆排陣", "十全翻弄", "壮明深化"]
  },
  {
    id: 126,
    name: "諸葛巾",
    category: "防具",
    related: "諸葛亮",
    factions: ["蜀"],
    skills: ["雲龍慧眼", "彼己掌握", "才気煥発"]
  },
  {
    id: 127,
    name: "威福笠兜",
    category: "防具",
    related: "周倉",
    factions: ["魏"],
    skills: ["鋭気猛勇", "会心躍動", "猛昂会覇"]
  },
  {
    id: 128,
    name: "南天羽飾兜",
    category: "防具",
    related: "孟獲",
    factions: ["蜀"],
    skills: ["直突叛王", "堪断重来", "蛮声呼応"]
  },
  {
    id: 129,
    name: "飛刀",
    category: "武器",
    weapon_type: "馬",
    related: "祝融",
    factions: ["蜀"],
    skills: ["破却焔妃", "飛刃断槍", "南神熾灼"]
  },
  {
    id: 130,
    name: "先登承志頭巾",
    category: "防具",
    related: "凌統",
    factions: ["呉"],
    skills: ["勇敢合志", "副帥勢転", "強迅躍動"]
  },
  {
    id: 131,
    name: "奉天銀灰冠",
    category: "防具",
    related: "程昱",
    factions: ["魏"],
    skills: ["才略詭偽", "虚攻深慮"]
  },
  {
    id: 132,
    name: "西方の紅帽",
    category: "防具",
    related: "イベント",
    skills: ["贈物運送", "祝福寄贈", "聖夜烈撃"]
  },
  {
    id: 133,
    name: "焦尾琴",
    category: "文物",
    related: "蔡琰",
    factions: ["魏"],
    skills: ["音韻厚情", "徳興媛霜", "弦声祝音"]
  },
  {
    id: 134,
    name: "碧緑双翼兜",
    category: "防具",
    related: "関興",
    factions: ["蜀"],
    skills: ["旺壮調練", "安朋昂揚", "十全不抜"]
  },
  {
    id: 135,
    name: "朝陽仁恵玉冠",
    category: "防具",
    related: "劉備",
    factions: ["蜀"],
    skills: ["兼備敏達", "契合激成", "合心会覇"]
  },
  {
    id: 136,
    name: "鳳鳴双飛金冠",
    category: "防具",
    related: "孫尚香",
    factions: ["呉"],
    skills: ["弓姫克剛", "弓騎華烈", "咲乱躍動"]
  },
  {
    id: 137,
    name: "鋭師飛鵠兜",
    category: "防具",
    related: "曹洪",
    factions: ["魏"],
    skills: ["鋭志調練", "万馬喝破", "剛勇発揚"]
  },
  {
    id: 138,
    name: "励志方正冠",
    category: "防具",
    related: "張昭",
    factions: ["呉"],
    skills: ["統督奮走", "万政連躍"]
  },
  {
    id: 139,
    name: "金色のロケット",
    category: "文物",
    related: "ラインハルト",
    factions: ["魏", "イベント"],
    skills: ["金獅躍動", "星之恩威", "英雄宣誓"]
  },
  {
    id: 140,
    name: "星間航路図",
    category: "文物",
    related: "コラボ",
    factions: ["イベント"],
    skills: ["航進導引", "同志精励", "剛胆兵略"]
  },
  {
    id: 141,
    name: "魔術師の帽子",
    category: "防具",
    related: "ヤン",
    factions: ["蜀", "イベント"],
    skills: ["自由方略", "奇跡妙策", "詭計呑艦"]
  },
  {
    id: 142,
    name: "賢佐治道笏",
    category: "文物",
    related: "張紘",
    factions: ["呉"],
    skills: ["諌督堅佑", "万政連喝", "才備悠揚"]
  },
  {
    id: 143,
    name: "炎帝神農茶譜",
    category: "文物",
    related: "イベント",
    skills: ["堅策聡慧", "慧士軒昂", "慧合旺盛"]
  },
  {
    id: 144,
    name: "緑絹金花抹額",
    category: "文物",
    related: "関索",
    factions: ["蜀"],
    skills: ["花盛調練", "会華収転", "強迅昂揚"]
  },
  {
    id: 145,
    name: "春秋左氏伝",
    category: "文物",
    related: "関羽",
    factions: ["蜀"],
    skills: ["美髯威武", "結騎会迅", "威武昂揚"]
  },
  {
    id: 146,
    name: "貞烈弓籠手",
    category: "防具",
    related: "王異",
    factions: ["魏"],
    skills: ["倒騎聡慧", "衛策紅活", "賢慧躍動"]
  },
  {
    id: 147,
    name: "黄焔柳緑披風",
    category: "防具",
    related: "廖化",
    factions: ["蜀"],
    skills: ["誠心敬仰", "勇升壮烈"]
  },
  {
    id: 148,
    name: "鉄脊蛇矛",
    category: "武器",
    weapon_type: "槍",
    related: "程普",
    factions: ["呉"],
    skills: ["揚老破城", "十全撃砕", "健勝練熟"]
  },
  {
    id: 149,
    name: "虎筋弦神弓",
    category: "武器",
    weapon_type: "弓",
    related: "呂布",
    skills: ["豪峻鬼叫", "惨烈乱舞", "弓騎剛速"]
  },
  {
    id: 150,
    name: "赤心硬殻兜",
    category: "防具",
    related: "太史慈",
    factions: ["呉"],
    skills: ["箭撃仁心", "剛勇弓術", "回生弓術"]
  },
  {
    id: 151,
    name: "厳毅典麗宝剣",
    category: "武器",
    weapon_type: "馬",
    related: "満寵",
    factions: ["魏"],
    skills: ["炎策才略", "滞勢抑撃", "有利連繫"]
  },
  {
    id: 152,
    name: "弘雅守信冠",
    category: "防具",
    related: "諸葛瑾",
    factions: ["呉"],
    skills: ["交心協調", "万政援連", "才気連繋"]
  },
  {
    id: 153,
    name: "虎豹元帥兜",
    category: "防具",
    related: "曹真",
    factions: ["魏"],
    skills: ["調練封龍", "捷守虎豹"]
  },
  {
    id: 154,
    name: "玄漆紫玉金冠",
    category: "防具",
    related: "張春華",
    factions: ["魏"],
    skills: ["明決協調", "沈潜猜疑", "博雅護持"]
  },
  {
    id: 155,
    name: "彩漆鳳龍紋盾",
    category: "防具",
    related: "郝昭",
    factions: ["魏"],
    skills: ["投戈衛盾", "策護激成", "堅守連繋"]
  },
  {
    id: 156,
    name: "勢焔雷紋兜",
    category: "防具",
    related: "朱然",
    factions: ["呉"],
    skills: ["火熾戦撃", "灼降盤石", "優勢双撃"]
  },
  {
    id: 157,
    name: "迅風衝決剣",
    category: "武器",
    weapon_type: "槍",
    related: "皇甫嵩",
    skills: ["倒征壊策", "連志回生", "破軍連繋"]
  },
  {
    id: 158,
    name: "二兎観月扇",
    category: "武器",
    weapon_type: "弓",
    related: "小喬",
    factions: ["呉"],
    skills: ["響麗聡慧", "聡躍援舞"]
  },
  {
    id: 159,
    name: "龍紋鉄甲",
    category: "防具",
    related: "鄭成功",
    factions: ["呉"],
    skills: ["国姓練達", "丹心深化", "身経百戦"]
  },
  {
    id: 160,
    name: "六尺斬馬刀",
    category: "武器",
    weapon_type: "馬",
    related: "鄭成功",
    factions: ["呉"],
    skills: ["国姓将軍", "斬馬"]
  },
  {
    id: 161,
    name: "百保鮮卑重甲",
    category: "防具",
    related: "高長恭",
    factions: ["蜀"],
    skills: ["雄弁練達", "重騎入陣", "以一敵百"]
  },
  {
    id: 162,
    name: "獠牙鬼面",
    category: "文物",
    related: "高長恭",
    factions: ["蜀"],
    skills: ["免冑示面", "鬼面将軍", "貌柔心壮"]
  },
  {
    id: 163,
    name: "瀝泉槍",
    category: "武器",
    weapon_type: "槍",
    related: "岳飛",
    factions: ["蜀"],
    skills: ["雪恨強化", "瀝泉", "黄龍痛飲"]
  },
  {
    id: 164,
    name: "紅纓帥兜",
    category: "防具",
    related: "岳飛",
    factions: ["蜀"],
    skills: ["雪恨不滅", "怒髪衝冠", "号令如山"]
  },
  {
    id: 165,
    name: "軒轅剣",
    category: "武器",
    weapon_type: "槍",
    related: "セプテム",
    skills: ["時空躍遷", "軒轅剣仙"]
  },
  {
    id: 166,
    name: "万鈞神弩",
    category: "武器",
    weapon_type: "弓",
    related: "ニコル",
    skills: ["魔将練達", "万箭凌空"]
  },
  {
    id: 167,
    name: "怪盗の仮面",
    category: "防具",
    related: "軒轅剣参",
    skills: ["偸窃指令"]
  },
  {
    id: 168,
    name: "霊虚扇",
    category: "文物",
    related: "軒轅剣参",
    skills: ["駆邪魔"]
  },
  {
    id: 169,
    name: "無塵剣",
    category: "武器",
    weapon_type: "馬",
    related: "李逍遥",
    factions: ["蜀", "イベント"],
    skills: ["上古神剣", "無塵正気", "地裂天崩"]
  },
  {
    id: 170,
    name: "金蛇鞭",
    category: "武器",
    weapon_type: "馬",
    related: "林月如",
    factions: ["蜀", "イベント"],
    skills: ["堅如金剛", "金蛇弦月", "柔若棉絮"]
  },
  {
    id: 171,
    name: "聖霊披風",
    category: "防具",
    related: "趙霊児",
    factions: ["他", "イベント", "蜀"],
    skills: ["深紅斗篷", "祖伝宝物", "女媧遺産"]
  },
  {
    id: 172,
    name: "煉蠱皿",
    category: "文物",
    related: "阿奴",
    factions: ["他", "イベント", "蜀"],
    skills: ["霊葫仙丹", "蠱卵煉化", "毒蠱巓峰"]
  },
  {
    id: 173,
    name: "蜀山武功秘籍",
    category: "文物",
    related: "仙剣奇侠伝",
    factions: ["イベント"],
    skills: ["仙風雲体", "飛龍探雲"]
  },
  {
    id: 174,
    name: "龍淵剣",
    category: "武器",
    weapon_type: "全",
    related: "繁体字版",
    skills: ["三尺秋水", "祈福", "輪廻暴撃"]
  },
  {
    id: 175,
    name: "碧月仙裙",
    category: "防具",
    related: "繁体字版",
    skills: ["但願人長久", "千里共嬋娟", "明月幾時有"]
  },
  {
    id: 176,
    name: "五色線",
    category: "文物",
    related: "繁体字版",
    skills: ["祈福", "輪廻暴撃"]
  },
  {
    id: 177,
    name: "ゲームショウ羽扇",
    category: "武器",
    weapon_type: "全",
    related: "繁体字版",
    skills: ["人山人海", "大展鴻図"]
  },
  {
    id: 178,
    name: "同楽会茶葉礼盒",
    category: "文物",
    related: "繁体字版",
    skills: ["普天同慶", "茶香四溢󠄀"]
  },
  {
    id: 179,
    name: "大紅柘榴石首飾",
    category: "文物",
    related: "董白",
    skills: ["嬌撃爛漫", "紅活激成", "驕傲奮援"]
  },
  {
    id: 180,
    name: "黄天大道旗槍",
    category: "武器",
    weapon_type: "全",
    related: "黄巾",
    skills: ["乱逆黄揚", "繋衰封妨", "逆乱躍動"]
  },
  {
    id: 181,
    name: "躬先越嶺笠兜",
    category: "防具",
    related: "鄧艾",
    skills: ["耀兵破城", "襲城勢撃"]
  },
  {
    id: 182,
    name: "劉家伝来の宝剣",
    category: "武器",
    weapon_type: "全",
    related: "横山",
    skills: ["合志健勝", "合心軒昂"]
  },
  {
    id: 183,
    name: "白旄乾坤旗",
    category: "武器",
    weapon_type: "槍",
    related: "呂尚",
    skills: ["太公極略", "励封巧導", "声威師令"]
  },
  {
    id: 184,
    name: "果勇金銅鎧",
    category: "防具",
    related: "李信",
    factions: ["魏"],
    skills: ["進攻信誠", "堅鎧壮雄", "繫守連合"]
  },
  {
    id: 185,
    name: "報讐克勝冠",
    category: "防具",
    related: "孫臏",
    factions: ["呉"],
    skills: ["包誘堅守", "速撃確守", "対衰堅導"]
  },
  {
    id: 186,
    name: "孫臏兵法",
    category: "文物",
    related: "孫臏",
    factions: ["呉"],
    skills: ["包誘才気", "会心強建", "対衰活導"]
  },
  {
    id: 187,
    name: "驍武凶悍大刀",
    category: "武器",
    weapon_type: "槍",
    related: "魏延",
    factions: ["蜀"],
    skills: ["進骨勇力", "優勢昂揚", "倒撃躍動"]
  },
  {
    id: 188,
    name: "岱斗帽沿兜",
    category: "防具",
    related: "馬岱",
    factions: ["蜀"],
    skills: ["猛騎掃滅", "精騎駆馳"]
  },
  {
    id: 189,
    name: "雄俊羽毛扇",
    category: "武器",
    weapon_type: "弓",
    related: "周瑜",
    factions: ["呉"],
    skills: ["明炎才気", "賢略喝破", "対衛烈撃"]
  },
  {
    id: 190,
    name: "雄俊光錦袍鎧",
    category: "防具",
    related: "周瑜",
    factions: ["呉"],
    skills: ["明炎堅守", "賢護躍動", "対衛盤石"]
  },
  {
    id: 191,
    name: "麒龍志継鎧",
    category: "防具",
    related: "姜維",
    factions: ["蜀"],
    skills: ["才華敏達", "知勇盤石", "活発烈撃"]
  },
  {
    id: 192,
    name: "武衛虎士刀",
    category: "武器",
    weapon_type: "槍",
    related: "許褚",
    factions: ["魏"],
    skills: ["虎堅強撃", "斬騎虎揚", "武猛煥虎"]
  },
  {
    id: 193,
    name: "武衛虎侯頭巾",
    category: "防具",
    related: "許褚",
    factions: ["魏"],
    skills: ["虎堅堅守", "耐騎不抜", "守護煥虎"]
  },
  {
    id: 194,
    name: "緋紅尖晶石首飾",
    category: "文物",
    related: "甄氏",
    factions: ["魏"],
    skills: ["麗花賢艶", "才妃絢爛"]
  },
  {
    id: 195,
    name: "猛鋭黒革帯",
    category: "文物",
    related: "孫策",
    factions: ["呉"],
    skills: ["快撃志望", "制覇撃進", "堪撃剛勇"]
  },
  {
    id: 196,
    name: "飛鳥装束",
    category: "防具",
    related: "ORIGINS",
    skills: ["太平烈撃", "太平盤石", "霊鳥の眼"]
  },
  {
    id: 197,
    name: "張飛の頭巾",
    category: "防具",
    related: "張飛O",
    factions: ["蜀"]
  },
  {
    id: 198,
    name: "夏侯惇の眼帯",
    category: "文物",
    related: "夏侯惇O",
    factions: ["魏"],
    skills: ["隻眼統刃", "瑞牙威武", "滅尽無双"]
  },
  {
    id: 199,
    name: "孫尚香の乾坤圏",
    category: "武器",
    weapon_type: "弓",
    related: "孫尚香O",
    factions: ["呉"],
    skills: ["飛圏烈翔", "紅空爛漫", "明月無双"]
  },
  {
    id: 200,
    name: "万機相輔冠",
    category: "防具",
    related: "呂不韋",
    factions: ["魏"],
    skills: ["文大堅守", "連繋滞勢", "才導槍舞"]
  },
  {
    id: 201,
    name: "呂氏春秋",
    category: "文物",
    related: "呂不韋",
    factions: ["魏"],
    skills: ["文大才気", "声威制動", "堅守槍舞"]
  },
  {
    id: 202,
    name: "三國志40周年の旗",
    category: "武器",
    weapon_type: "全",
    related: "イベント",
    skills: ["四旬財盛", "四旬迅翼", "四旬双威"]
  },
  {
    id: 203,
    name: "三國志40周年の盾",
    category: "防具",
    related: "イベント",
    skills: ["四旬浄護", "四旬慶輝", "四旬減衝"]
  },
  {
    id: 204,
    name: "三國志40周年の書",
    category: "文物",
    related: "イベント",
    skills: ["四旬軍昴", "四旬疾連", "四旬三輝"]
  },
  {
    id: 205,
    name: "遁甲天書",
    category: "文物",
    related: "左慈",
    factions: ["蜀"],
    skills: ["仙方才略", "機仙惑活"]
  },
  {
    id: 206,
    name: "冷艶鋸",
    category: "武器",
    weapon_type: "馬",
    related: "関羽",
    skills: ["武閃豪勇", "破軍乱舞", "豪心躍動"]
  },
  {
    id: 207,
    name: "龍紋護臂甲",
    category: "防具",
    related: "関羽",
    skills: ["武威豪勇", "突護一体", "豪心烈撃"]
  },
  {
    id: 208,
    name: "大志冠世剣",
    category: "武器",
    weapon_type: "弓",
    related: "韓信",
    skills: ["背栄才気", "国士激烈", "帥号躍動"]
  },
  {
    id: 209,
    name: "武略冠世兜",
    category: "防具",
    related: "韓信",
    skills: ["背栄堅守", "国士巧導", "帥号耐撃"]
  }
];
