// data-treasure-forge.js — 名宝マスタ + 鍛錬データ（自動生成）
// 生成元: 覇道DB_名宝_.xlsx
// 名宝一覧: 209件, 鍛錬: 209名宝

const TREASURE_MASTER = [
    {id: 1, name: "神刀", type: "武器槍", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 2, name: "宝双剣", type: "武器槍", faction: "他", source: "利権", skills: ["不乱怒涛"], isUR: true},
    {id: 3, name: "宝剣", type: "武器弓", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 4, name: "宝雕弓", type: "武器弓", faction: "他", source: "利権", skills: ["不乱怒涛"], isUR: true},
    {id: 5, name: "象鼻刀", type: "武器馬", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 6, name: "蛇戟", type: "武器馬", faction: "他", source: "利権", skills: ["不乱怒涛"], isUR: true},
    {id: 7, name: "明光鎧", type: "防具", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 8, name: "黒光鎧", type: "防具", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 9, name: "委貌冠", type: "防具", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 10, name: "易経", type: "文物", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 11, name: "戦国策", type: "文物", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 12, name: "呂氏鏡", type: "文物", faction: "他", source: "利権", skills: [], isUR: true},
    {id: 13, name: "蛇矛", type: "武器槍", general: "張飛", faction: "蜀", skills: ["会心猛攻", "豪勇奮闘", "武勇激烈"], isUR: true, isVeteran: true},
    {id: 14, name: "青龍偃月刀", type: "武器馬", general: "関羽", faction: "蜀", skills: ["堅固打破", "戦法乱舞", "破軍突襲"], isUR: true},
    {id: 15, name: "元戎弩", type: "武器弓", general: "諸葛亮", faction: "蜀", skills: ["策略躍動", "智謀撃砕", "機略乱舞"], isUR: true, isVeteran: true},
    {id: 16, name: "七星宝刀", type: "武器全", faction: "他", source: "利権", skills: ["会心猛撃", "会心怒涛", "領導豪猛"], isUR: true},
    {id: 17, name: "孫子の兵法書", type: "文物", general: "孫堅", faction: "呉", skills: ["戦法防備", "猛勇連携", "栄勢収転"], isUR: true, isVeteran: true},
    {id: 18, name: "方天画戟", type: "武器馬", general: "呂布", faction: "他", skills: ["主導強化", "剛力乱舞", "豪胆剛刃"], isUR: true},
    {id: 19, name: "雌雄一対の剣", type: "武器槍", general: "劉備", faction: "蜀", skills: ["不乱躍動", "合志敏達", "会撃回生"], isUR: true, isVeteran: true},
    {id: 20, name: "召虎兜", type: "防具", general: "張遼", faction: "魏", skills: ["反攻打破", "突破掃滅", "剛然防護"], isUR: true, isVeteran: true},
    {id: 21, name: "郭子兵略", type: "文物", general: "郭嘉", faction: "魏", skills: ["攪乱戦術", "才略昂揚", "有利与撃"], isUR: true, isVeteran: true},
    {id: 22, name: "鳴鈴双短戟", type: "武器弓", general: "甘寧", faction: "呉", skills: ["躍動兵術", "振鈴豪勇", "英武威迫"], isUR: true, isVeteran: true},
    {id: 23, name: "周郎琵琶", type: "文物", general: "周瑜", faction: "呉", skills: ["明敏破砕", "策謀烈火", "討究攻抜"], isUR: true, isVeteran: true},
    {id: 24, name: "太尉冠", type: "防具", general: "賈詡", faction: "魏", skills: ["叡智策励", "掎角深慮", "避坑落井"], isUR: true, isVeteran: true},
    {id: 25, name: "虎臣瓢箪", type: "文物", general: "張飛", faction: "蜀", skills: ["会心猛攻", "燕人奮闘", "会心毀壞"], isUR: true, isVeteran: true},
    {id: 26, name: "鮮卑角端弓", type: "武器馬", faction: "他", source: "異民族", skills: ["攻城練達", "破砕兵法", "激破怒涛"], isUR: true},
    {id: 27, name: "五渓狼牙棒", type: "武器槍", faction: "蜀", source: "異民族", skills: ["剛力練達", "不乱迫撃", "不乱痛撃"], isUR: true},
    {id: 28, name: "山越鋸歯刀", type: "武器槍", faction: "他", source: "異民族", skills: ["沈滞兵術", "遅鈍兵術", "惶惑兵術"], isUR: true},
    {id: 29, name: "青釭の剣", type: "武器馬", general: "趙雲", faction: "蜀", skills: ["龍胆練達", "砕裂猛襲", "有利撃攘"], isUR: true, isVeteran: true},
    {id: 30, name: "虎皮披風", type: "防具", general: "孫策", faction: "呉", skills: ["雄略強化", "堅守軒昂", "有利護堪"], isUR: true, isVeteran: true},
    {id: 31, name: "太平要術の書", type: "文物", general: "イベント", faction: "他", skills: ["反逆練達", "離間兵術", "叛心結託"], isUR: true},
    {id: 32, name: "狐白裘", type: "文物", general: "イベント", faction: "他", skills: ["運気向上", "内務指揮"], isUR: true},
    {id: 33, name: "射透弓", type: "武器弓", general: "太史慈", faction: "呉", skills: ["会心弓術", "強撃怒涛", "箭連攻昂"], isUR: true, isVeteran: true},
    {id: 34, name: "麟角槍", type: "武器槍", general: "姜維", faction: "蜀", skills: ["才腕練達", "知勇発揚", "戦巧明算"], isUR: true, isVeteran: true},
    {id: 35, name: "南蛮獣牙首飾", type: "文物", faction: "蜀", source: "異民族", skills: ["金剛練達", "墨守兵術", "窮地壮烈"], isUR: true},
    {id: 36, name: "烏桓貂毛兜", type: "防具", faction: "他", source: "異民族", skills: ["掃討練達", "受撃適防", "疾快烈撃"], isUR: true},
    {id: 37, name: "羌毛領披風", type: "防具", faction: "他", source: "異民族", skills: ["巻撃避之", "回避兵術", "削弱転脱"], isUR: true},
    {id: 38, name: "白羽扇", type: "武器槍", general: "諸葛亮", faction: "蜀", skills: ["伏龍練達", "術策怒涛"], isUR: false},
    {id: 39, name: "三叉束髪紫金冠", type: "防具", general: "呂布", faction: "他", skills: ["飛将練達", "万陣翻身", "有利驍衛"], isUR: true},
    {id: 40, name: "和泉守兼定", type: "武器全", faction: "他", source: "コラボ", skills: ["奮戦", "天然理心流"], isUR: false},
    {id: 41, name: "だんだら羽織", type: "防具", faction: "他", source: "コラボ", skills: ["不屈", "誠衛士道"], isUR: false},
    {id: 42, name: "黒紗金飾冠", type: "防具", general: "司馬懿", faction: "魏", skills: ["狼顧練達", "百計深化", "詭略妙衛"], isUR: true, isVeteran: true},
    {id: 43, name: "紫藤紗錦披帛", type: "文物", general: "貂蝉", faction: "他", skills: ["傾国練達", "躍動戦術", "連志舞励"], isUR: true, isVeteran: true},
    {id: 44, name: "太師黄金爵", type: "文物", general: "董卓", faction: "他", skills: ["歓喜練達", "剛撃昂揚", "歓楽破壁"], isUR: true, isVeteran: true},
    {id: 45, name: "武弁大冠", type: "防具", general: "孫堅", faction: "呉", skills: ["烈虎練達", "励気増強", "不抜確守"], isUR: true, isVeteran: true},
    {id: 46, name: "黄武勢剣", type: "武器弓", general: "陸遜", faction: "呉", skills: ["獄炎練達", "機知操炎", "烈火炎討"], isUR: true, isVeteran: true},
    {id: 47, name: "翡翠玉笛", type: "文物", general: "小喬", faction: "呉", skills: ["削弱深化", "万徳興起", "対衰追討"], isUR: true, isVeteran: true},
    {id: 48, name: "龍紋緑袍鎧", type: "防具", general: "関羽", faction: "蜀", skills: ["美髯練達", "過関斬将"], isUR: false},
    {id: 49, name: "疾風剛弓", type: "武器弓", general: "夏侯淵", faction: "魏", skills: ["極弓練達", "強撃連携", "合心疾撃"], isUR: true, isVeteran: true},
    {id: 50, name: "軍師錦羅袍", type: "文物", general: "龐統", faction: "蜀", skills: ["鳳雛練達", "受撃反滞", "対衰盤石"], isUR: true, isVeteran: true},
    {id: 51, name: "冕冠", type: "防具", faction: "他", source: "イベント", skills: ["運気向上", "視察指揮"], isUR: true},
    {id: 52, name: "立義鋼刀", type: "武器馬", general: "龐徳", faction: "魏", skills: ["堪耐練達", "戦法反攻", "堪撃制勢"], isUR: true, isVeteran: true},
    {id: 53, name: "二石之弓", type: "武器弓", general: "黄忠", faction: "蜀", skills: ["弓神練達", "撃射怒涛", "巧矢激成"], isUR: true, isVeteran: true},
    {id: 54, name: "才捷弓", type: "武器弓", general: "孫尚香", faction: "呉", skills: ["弓姫練達", "勇躍深化", "連武破敵"], isUR: true, isVeteran: true},
    {id: 55, name: "商君書", type: "文物", faction: "他", source: "謎", skills: ["内政補佐", "利益増進"], isUR: false},
    {id: 56, name: "獅子頭の兜", type: "防具", general: "馬超", faction: "蜀", skills: ["烈武合志", "神威煥発", "結騎豪躍"], isUR: true, isVeteran: true},
    {id: 57, name: "孤月独明剣", type: "武器馬", general: "夏侯惇", faction: "魏", skills: ["奮迅連携", "槍撃怒涛", "合心剛破"], isUR: true, isVeteran: true},
    {id: 58, name: "古錠刀", type: "武器全", general: "孫堅", faction: "呉", skills: ["虎嘯風生", "戦機伸長", "結援烈撃"], isUR: true, isVeteran: true},
    {id: 59, name: "克定鋭刀", type: "武器槍", general: "張郃", faction: "魏", skills: ["活心破城", "犀利喝破", "有利活戦"], isUR: true, isVeteran: true},
    {id: 60, name: "金繍紅錦半臂", type: "防具", general: "孫権", faction: "呉", skills: ["碧羅大同", "哮虎躍動", "強迅盤石"], isUR: true, isVeteran: true},
    {id: 61, name: "玲瓏獅蛮帯", type: "文物", general: "呂玲綺", faction: "他", skills: ["凛然領導", "会心乱撃", "十全凛裂"], isUR: true, isVeteran: true},
    {id: 62, name: "金系帯紫錦披風", type: "防具", general: "皇甫嵩", faction: "袁紹", skills: ["圧倒練達", "策応賢守", "不乱盤石"], isUR: true, isVeteran: true},
    {id: 63, name: "青嚢書", type: "文物", general: "華佗", faction: "袁紹", skills: ["兵心練達", "窮地護心", "窮地戦威"], isUR: true},
    {id: 64, name: "太平九節杖", type: "武器槍", general: "張角", faction: "他", skills: ["天立喝破", "賢知攻勢", "逆乱烈撃"], isUR: true},
    {id: 65, name: "克己猟龍兜", type: "防具", general: "呂蒙", faction: "呉", skills: ["勉励聡慧", "文武双撃", "向学躍動"], isUR: true, isVeteran: true},
    {id: 66, name: "千創玄英鎧", type: "防具", general: "周泰", faction: "呉", skills: ["剛毅活命", "窮地回生", "戦剛防備"], isUR: true, isVeteran: true},
    {id: 67, name: "克敵機謀剣", type: "武器馬", general: "荀攸", faction: "魏", skills: ["叡智天略", "百謀興起", "賢略連繋"], isUR: true, isVeteran: true},
    {id: 68, name: "荀氏春秋要論", type: "文物", general: "荀彧", faction: "魏", skills: ["慧護策動", "雪上加霜", "耐窮活衛"], isUR: true, isVeteran: true},
    {id: 69, name: "羅綺香嚢", type: "文物", faction: "他", skills: ["賊討招福", "健勝翻身"], isUR: false},
    {id: 70, name: "倚天の剣", type: "武器馬", general: "曹操", faction: "魏", skills: ["壮志練達", "戦撃熾烈", "当塗増強"], isUR: true},
    {id: 71, name: "烈志蒼驥鎧", type: "防具", general: "曹操", faction: "魏", skills: ["虚実練達", "十全盤石", "当塗伸長"], isUR: true},
    {id: 72, name: "孟徳新書", type: "文物", general: "曹操", faction: "魏", skills: ["奸雄練達", "窮地討凶", "当塗遠謀"], isUR: true},
    {id: 73, name: "剛断戦斧", type: "武器槍", general: "徐晃", faction: "魏", skills: ["猛威合志", "戦法乱打", "剛大戦威"], isUR: true},
    {id: 74, name: "紅玉珍珠金耳墜", type: "文物", general: "関銀屏", faction: "蜀", skills: ["澄天爛漫", "躍動強健", "咲乱昂揚"], isUR: true},
    {id: 75, name: "孔明の木像", type: "文物", faction: "蜀", source: "コラボ", skills: ["孔明尚在", "不能料死"], isUR: true},
    {id: 76, name: "朱襟白絹半臂", type: "防具", general: "徐庶", faction: "蜀", skills: ["才知義心", "方略炯眼", "主助激成"], isUR: true},
    {id: 77, name: "双鉄戟", type: "武器槍", general: "典韋", faction: "魏", skills: ["衛砕深化", "武猛魁偉", "警衛昂揚"], isUR: true},
    {id: 78, name: "西方の杖", type: "武器全", faction: "他", source: "イベント", skills: ["トリック", "トリート", "ハロウィン"], isUR: true},
    {id: 79, name: "蝙蝠披風", type: "防具", faction: "他", source: "イベント", skills: ["トリック", "トリート", "ハロウィン"], isUR: true},
    {id: 80, name: "南瓜の灯燈", type: "文物", faction: "他", source: "イベント", skills: ["トリック", "トリート", "ハロウィン"], isUR: true},
    {id: 81, name: "与韓将軍書", type: "文物", general: "賈詡", faction: "魏", skills: ["掎角策応", "戦撃追略"], isUR: false},
    {id: 82, name: "大喬琵琶", type: "文物", general: "大喬", faction: "呉", skills: ["万徳興起", "戦策迅急", "嬌美減衝"], isUR: true},
    {id: 83, name: "白狐毛皮披風", type: "防具", general: "公孫瓚", faction: "蜀", skills: ["疾駆合志", "突射怒涛", "弓騎守剛"], isUR: true},
    {id: 84, name: "神獣面白纓兜", type: "防具", general: "馬騰", faction: "蜀", skills: ["万騎梟勇", "騎虎無尽", "結騎撃砕"], isUR: true},
    {id: 85, name: "金繍緑錦披風", type: "防具", general: "陸抗", faction: "呉", skills: ["総慧一心", "会心癒術", "賢慧戦防"], isUR: true},
    {id: 86, name: "玄熊毛銀黄兜", type: "防具", general: "華雄", faction: "他", skills: ["頑堅連携", "華敢堅牢", "戦剛壮昇"], isUR: true},
    {id: 87, name: "黄幡豹尾", type: "文物", general: "呂布", faction: "他", skills: ["飛揚破城", "烈撃怯兵"], isUR: false},
    {id: 88, name: "太平賢良黄金冠", type: "防具", general: "張角", faction: "他", skills: ["黄賢唱道", "符水乱道", "逆乱盤石"], isUR: true},
    {id: 89, name: "鷹揚玄冥兜", type: "防具", general: "袁紹", faction: "袁紹", skills: ["轟鳴雄主", "復興戦術", "有利堪興"], isUR: true},
    {id: 90, name: "驍悍傲骨鎧", type: "防具", general: "魏延", faction: "蜀", skills: ["硬骨邁進", "壮烈撞断", "有利強盤"], isUR: true},
    {id: 91, name: "瑠璃珠金花冠", type: "防具", general: "甄氏", faction: "魏", skills: ["美神幻惑", "名花絢爛", "衰滞深化"], isUR: true},
    {id: 92, name: "純和青金石首飾", type: "文物", general: "王元姫", faction: "魏", skills: ["佐命聡慧", "純和斉心", "麗拡激成"], isUR: true},
    {id: 93, name: "天柱鉄大刀", type: "武器馬", general: "顔良", faction: "袁紹", skills: ["戦撃雄断", "倶発激成", "剛武撃昇"], isUR: true},
    {id: 94, name: "天禄一角兜", type: "防具", general: "文醜", faction: "袁紹", skills: ["強堅誅裂", "倶発堅塁", "剛武会覇"], isUR: true},
    {id: 95, name: "西方の盾", type: "防具", faction: "他", source: "イベント", skills: ["声威盾陣", "強壮奪心"], isUR: true},
    {id: 96, name: "西方の鞭", type: "武器全", faction: "他", source: "イベント", skills: ["声威盾陣", "撓打恐恐", "強壮奪心"], isUR: true},
    {id: 97, name: "召虎鉤鎌刀", type: "武器槍", general: "張遼", faction: "魏", skills: ["突破活命", "勇撃躍動"], isUR: false},
    {id: 98, name: "真鋼鎮定剣", type: "武器馬", general: "孫策", faction: "呉", skills: ["雄図連携", "大喝烈撃", "制覇万虎"], isUR: true},
    {id: 99, name: "道論", type: "文物", general: "鍾会", faction: "魏", skills: ["策応矜伐", "避撃優賢", "対衰堅衛"], isUR: true},
    {id: 100, name: "平蜀地理図", type: "文物", general: "鄧艾", faction: "魏", skills: ["破城迅疾", "戦撃槍舞", "崩破撃砕"], isUR: true},
    {id: 101, name: "明道方略冠", type: "防具", general: "魯粛", faction: "呉", skills: ["賢俊奨導", "連志賢守"], isUR: false},
    {id: 102, name: "錦帆鈴飾", type: "文物", general: "甘寧", faction: "呉", skills: ["振鈴猛勇", "剛烈負枷"], isUR: false},
    {id: 103, name: "白銀龍胆鎧", type: "防具", general: "趙雲", faction: "蜀", skills: ["龍心掃滅", "攻破督励", "龍心完勢"], isUR: true},
    {id: 104, name: "木牛試作模型", type: "文物", general: "黄月英", faction: "蜀", skills: ["創機聡慧", "破壁連播", "賢慧熾灼"], isUR: true},
    {id: 105, name: "登極龍紋金觚", type: "文物", general: "曹丕", faction: "魏", skills: ["深慮栄耀", "心知双昴", "対衰断庸"], isUR: true},
    {id: 106, name: "疾風護臂甲", type: "防具", general: "夏侯淵", faction: "魏", skills: ["天弓合志", "躍動弓舞"], isUR: false},
    {id: 107, name: "狼毛紫纓兜", type: "防具", general: "董卓", faction: "他", skills: ["狂喜歓宴", "百花凄艶"], isUR: true},
    {id: 108, name: "藍田玉軍令牌", type: "文物", general: "諸葛恪", faction: "呉", skills: ["呵成破略", "平癒弄策", "存兵才気"], isUR: true},
    {id: 109, name: "雲矩紋玉具宝剣", type: "武器槍", general: "于禁", faction: "魏", skills: ["声威厳令", "盤石加霜", "抑敵壮雄"], isUR: true},
    {id: 110, name: "銀山雪海鎧", type: "防具", general: "馬雲騄", faction: "蜀", skills: ["玲珠爛漫", "麗人躍動", "令女盤石"], isUR: true},
    {id: 111, name: "鋼胆鉄心槍", type: "武器馬", general: "楽進", faction: "魏", skills: ["驍健豪勇", "十全痛撃", "豪心剛先"], isUR: true},
    {id: 112, name: "思紹", type: "武器槍", general: "袁紹", faction: "袁紹", skills: ["轟鳴雄主", "臣子激成", "有利烈成"], isUR: true},
    {id: 113, name: "亢龍鋼鞭", type: "武器馬", general: "文鴦", faction: "魏", skills: ["掃滅豪勇", "鎮撫騎駆"], isUR: false},
    {id: 114, name: "奔走の算盤", type: "文物", faction: "他", source: "コラボ", skills: [], isUR: false},
    {id: 115, name: "富春孫氏家伝", type: "文物", general: "孫堅", faction: "呉", skills: ["英烈領導", "会心鼓吹"], isUR: false},
    {id: 116, name: "雄豪肩呑鎧", type: "防具", general: "張苞", faction: "蜀", skills: ["復仇剛撃", "窮地堅牢", "不抜雄健"], isUR: true},
    {id: 117, name: "燦金赤纓兜", type: "防具", general: "黄忠", faction: "蜀", skills: ["弓妙連携", "弓心十全"], isUR: false},
    {id: 118, name: "断江倒海鞭", type: "武器弓", general: "黄蓋", faction: "呉", skills: ["烈火焚如", "箭連剛硬", "火勢攻崩"], isUR: true},
    {id: 119, name: "龍の水槍", type: "武器全", faction: "他", source: "イベント", skills: ["活水旺盛", "不乱活盛"], isUR: true},
    {id: 120, name: "羊の遊泳圏", type: "文物", faction: "他", source: "イベント", skills: ["活水旺盛", "流水確守", "不乱活盛"], isUR: true},
    {id: 121, name: "奮勇燕尾牌", type: "防具", general: "曹仁", faction: "魏", skills: ["確固強剛", "守護奮励", "常剛雄健"], isUR: true},
    {id: 122, name: "司馬氏兵記", type: "文物", general: "司馬懿", faction: "魏", skills: ["後顧鬼想", "方略警衛"], isUR: false},
    {id: 123, name: "興起嵩峻兜", type: "防具", general: "王平", faction: "蜀", source: "シーズン", skills: ["活命相克", "昂然敏達"], isUR: false},
    {id: 124, name: "九華扇", type: "武器全", faction: "他", source: "イベント", skills: ["領導連共", "鳳翔風征", "鳳煌斉心"], isUR: true},
    {id: 125, name: "壮気直躬剣", type: "武器馬", general: "陳宮", faction: "他", skills: ["調唆排陣", "十全翻弄", "壮明深化"], isUR: true},
    {id: 126, name: "諸葛巾", type: "防具", general: "諸葛亮", faction: "蜀", skills: ["雲龍慧眼", "彼己掌握", "才気煥発"], isUR: true},
    {id: 127, name: "威福笠兜", type: "防具", general: "周倉", faction: "蜀", skills: ["鋭気猛勇", "会心躍動", "猛昂会覇"], isUR: true},
    {id: 128, name: "南天羽飾兜", type: "防具", general: "孟獲", faction: "蜀", skills: ["直突叛王", "堪断重来", "蛮声呼応"], isUR: true},
    {id: 129, name: "飛刀", type: "武器馬", general: "祝融", faction: "蜀", skills: ["破却焔妃", "飛刃断槍", "南神熾灼"], isUR: true},
    {id: 130, name: "先登承志頭巾", type: "防具", general: "凌統", faction: "呉", skills: ["勇敢合志", "副帥勢転", "強迅躍動"], isUR: true},
    {id: 131, name: "奉天銀灰冠", type: "防具", general: "程昱", faction: "魏", source: "シーズン", skills: ["才略詭偽", "虚攻深慮"], isUR: false},
    {id: 132, name: "西方の紅帽", type: "防具", faction: "イベント", source: "イベント", skills: ["贈物運送", "祝福寄贈", "聖夜烈撃"], isUR: true},
    {id: 133, name: "焦尾琴", type: "文物", general: "蔡琰", faction: "魏", skills: ["音韻厚情", "徳興媛霜", "弦声祝音"], isUR: true},
    {id: 134, name: "碧緑双翼兜", type: "防具", general: "関興", faction: "蜀", skills: ["旺壮調練", "安朋昂揚", "十全不抜"], isUR: true},
    {id: 135, name: "朝陽仁恵玉冠", type: "防具", general: "劉備", faction: "蜀", skills: ["兼備敏達", "契合激成", "合心会覇"], isUR: true},
    {id: 136, name: "鳳鳴双飛金冠", type: "防具", general: "孫尚香", faction: "呉", skills: ["弓姫克剛", "弓騎華烈", "咲乱躍動"], isUR: true},
    {id: 137, name: "鋭師飛鵠兜", type: "防具", general: "曹洪", faction: "魏", skills: ["鋭志調練", "万馬喝破", "剛勇発揚"], isUR: true},
    {id: 138, name: "励志方正冠", type: "防具", general: "張昭", faction: "呉", source: "シーズン", skills: ["統督奮走", "万政連躍"], isUR: false},
    {id: 139, name: "金色のロケット", type: "文物", general: "ラインハルト", faction: "魏", source: "コラボ", skills: ["金獅躍動", "星之恩威", "英雄宣誓"], isUR: true},
    {id: 140, name: "星間航路図", type: "文物", faction: "他", source: "コラボ", skills: ["航進導引", "同志精励", "剛胆兵略"], isUR: false},
    {id: 141, name: "魔術師の帽子", type: "防具", general: "ヤン", faction: "蜀", source: "コラボ", skills: ["自由方略", "奇跡妙策", "詭計呑艦"], isUR: true},
    {id: 142, name: "賢佐治道笏", type: "文物", general: "張紘", faction: "呉", skills: ["諌督堅佑", "万政連喝", "才備悠揚"], isUR: true},
    {id: 143, name: "炎帝神農茶譜", type: "文物", faction: "イベント", source: "イベント", skills: ["堅策聡慧", "慧士軒昂", "慧合旺盛"], isUR: true},
    {id: 144, name: "緑絹金花抹額", type: "文物", general: "関索", faction: "蜀", skills: ["花盛調練", "会華収転", "強迅昂揚"], isUR: true},
    {id: 145, name: "春秋左氏伝", type: "文物", general: "関羽", faction: "蜀", skills: ["美髯威武", "結騎会迅", "威武昂揚"], isUR: true},
    {id: 146, name: "貞烈弓籠手", type: "防具", general: "王異", faction: "魏", skills: ["倒騎聡慧", "衛策紅活", "賢慧躍動"], isUR: true},
    {id: 147, name: "黄焔柳緑披風", type: "防具", general: "廖化", faction: "蜀", source: "シーズン", skills: ["誠心敬仰", "勇升壮烈"], isUR: false},
    {id: 148, name: "鉄脊蛇矛", type: "武器槍", general: "程普", faction: "呉", skills: ["揚老破城", "十全撃砕", "健勝練熟"], isUR: true},
    {id: 149, name: "虎筋弦神弓", type: "武器弓", general: "呂布", faction: "他", skills: ["豪峻鬼叫", "惨烈乱舞", "弓騎剛速"], isUR: true},
    {id: 150, name: "赤心硬殻兜", type: "防具", general: "太史慈", faction: "呉", skills: ["箭撃仁心", "剛勇弓術", "回生弓術"], isUR: true},
    {id: 151, name: "厳毅典麗宝剣", type: "武器馬", general: "満寵", faction: "魏", skills: ["炎策才略", "滞勢抑撃", "有利連繫"], isUR: true},
    {id: 152, name: "弘雅守信冠", type: "防具", general: "諸葛瑾", faction: "呉", skills: ["交心協調", "万政援連", "才気連繋"], isUR: true},
    {id: 153, name: "虎豹元帥兜", type: "防具", general: "曹真", faction: "魏", source: "シーズン", skills: ["調練封龍", "捷守虎豹"], isUR: false},
    {id: 154, name: "玄漆紫玉金冠", type: "防具", general: "張春華", faction: "魏", skills: ["明決協調", "沈潜猜疑", "博雅護持"], isUR: true},
    {id: 155, name: "彩漆鳳龍紋盾", type: "防具", general: "郝昭", faction: "魏", skills: ["投戈衛盾", "策護激成", "堅守連繋"], isUR: true},
    {id: 156, name: "勢焔雷紋兜", type: "防具", general: "朱然", faction: "呉", skills: ["火熾戦撃", "灼降盤石", "優勢双撃"], isUR: true},
    {id: 157, name: "迅風衝決剣", type: "武器槍", general: "皇甫嵩", faction: "袁紹", skills: ["倒征壊策", "連志回生", "破軍連繋"], isUR: true},
    {id: 158, name: "二兎観月扇", type: "武器弓", general: "小喬", faction: "呉", source: "シーズン", skills: ["響麗聡慧", "聡躍援舞"], isUR: false},
    {id: 159, name: "龍紋鉄甲", type: "防具", general: "鄭成功", faction: "呉", source: "繁体字版", skills: ["国姓練達", "丹心深化", "身経百戦"], isUR: true},
    {id: 160, name: "六尺斬馬刀", type: "武器馬", general: "鄭成功", faction: "呉", source: "繁体字版", skills: ["国姓将軍", "斬馬"], isUR: false},
    {id: 161, name: "百保鮮卑重甲", type: "防具", general: "高長恭", faction: "蜀", source: "繁体字版", skills: ["雄弁練達", "重騎入陣", "以一敵百"], isUR: true},
    {id: 162, name: "獠牙鬼面", type: "文物", general: "高長恭", faction: "蜀", source: "繁体字版", skills: ["免冑示面", "鬼面将軍", "貌柔心壮"], isUR: true},
    {id: 163, name: "瀝泉槍", type: "武器槍", general: "岳飛", faction: "蜀", source: "繁体字版", skills: ["雪恨強化", "瀝泉", "黄龍痛飲"], isUR: true},
    {id: 164, name: "紅纓帥兜", type: "防具", general: "岳飛", faction: "蜀", source: "繁体字版", skills: ["雪恨不滅", "怒髪衝冠", "号令如山"], isUR: true},
    {id: 165, name: "軒轅剣", type: "武器槍", general: "セプテム", faction: "蜀", source: "コラボ", skills: ["時空躍遷", "軒轅剣仙"], isUR: false},
    {id: 166, name: "万鈞神弩", type: "武器弓", general: "ニコル", faction: "蜀", source: "コラボ", skills: ["魔将練達", "万箭凌空"], isUR: false},
    {id: 167, name: "怪盗の仮面", type: "防具", general: "軒轅剣参", faction: "他", source: "コラボ", skills: ["偸窃指令"], isUR: false},
    {id: 168, name: "霊虚扇", type: "文物", general: "軒轅剣参", faction: "他", source: "コラボ", skills: ["駆邪魔"], isUR: false},
    {id: 169, name: "無塵剣", type: "武器馬", general: "李逍遥", faction: "蜀", source: "コラボ", skills: ["上古神剣", "無塵正気", "地裂天崩"], isUR: true},
    {id: 170, name: "金蛇鞭", type: "武器馬", general: "林月如", faction: "蜀", source: "コラボ", skills: ["堅如金剛", "金蛇弦月", "柔若棉絮"], isUR: true},
    {id: 171, name: "聖霊披風", type: "防具", general: "趙霊児", faction: "蜀", source: "コラボ", skills: ["深紅斗篷", "祖伝宝物", "女媧遺産"], isUR: true},
    {id: 172, name: "煉蠱皿", type: "文物", general: "阿奴", faction: "蜀", source: "コラボ", skills: ["霊葫仙丹", "蠱卵煉化", "毒蠱巓峰"], isUR: true},
    {id: 173, name: "蜀山武功秘籍", type: "文物", general: "仙剣奇侠伝", faction: "他", source: "コラボ", skills: ["仙風雲体", "飛龍探雲"], isUR: false},
    {id: 174, name: "龍淵剣", type: "武器全", faction: "他", source: "繁体字版", skills: ["三尺秋水", "祈福", "輪廻暴撃"], isUR: true},
    {id: 175, name: "碧月仙裙", type: "防具", faction: "他", source: "繁体字版", skills: ["但願人長久", "千里共嬋娟", "明月幾時有"], isUR: true},
    {id: 176, name: "五色線", type: "文物", faction: "他", source: "繁体字版", skills: ["祈福", "輪廻暴撃"], isUR: true},
    {id: 177, name: "ゲームショウ羽扇", type: "武器全", faction: "他", source: "繁体字版", skills: ["人山人海", "大展鴻図"], isUR: false},
    {id: 178, name: "同楽会茶葉礼盒", type: "文物", faction: "他", source: "繁体字版", skills: ["普天同慶", "茶香四溢󠄀"], isUR: false},
    {id: 179, name: "大紅柘榴石首飾", type: "文物", general: "董白", faction: "他", skills: ["嬌撃爛漫", "紅活激成", "驕傲奮援"], isUR: true},
    {id: 180, name: "黄天大道旗槍", type: "武器全", general: "黄巾", faction: "他", source: "イベント", skills: ["乱逆黄揚", "繋衰封妨", "逆乱躍動"], isUR: true},
    {id: 181, name: "躬先越嶺笠兜", type: "防具", general: "鄧艾", faction: "魏", source: "シーズン", skills: ["耀兵破城", "襲城勢撃"], isUR: false},
    {id: 182, name: "劉家伝来の宝剣", type: "武器全", general: "横山", faction: "他", source: "コラボ", skills: ["合志健勝", "合心軒昂"], isUR: false},
    {id: 183, name: "白旄乾坤旗", type: "武器槍", general: "呂尚", faction: "他", skills: ["太公極略", "励封巧導", "声威師令"], isUR: true},
    {id: 184, name: "果勇金銅鎧", type: "防具", general: "李信", faction: "魏", skills: ["進攻信誠", "堅鎧壮雄", "繫守連合"], isUR: true},
    {id: 185, name: "報讐克勝冠", type: "防具", general: "孫臏", faction: "呉", skills: ["包誘堅守", "速撃確守", "対衰堅導"], isUR: true},
    {id: 186, name: "孫臏兵法", type: "文物", general: "孫臏", faction: "呉", skills: ["包誘才気", "会心強建", "対衰活導"], isUR: true},
    {id: 187, name: "驍武凶悍大刀", type: "武器槍", general: "魏延", faction: "蜀", skills: ["進骨勇力", "優勢昂揚", "倒撃躍動"], isUR: true},
    {id: 188, name: "岱斗帽沿兜", type: "防具", general: "馬岱", faction: "蜀", source: "シーズン", skills: ["猛騎掃滅", "精騎駆馳"], isUR: false},
    {id: 189, name: "雄俊羽毛扇", type: "武器弓", general: "周瑜", faction: "呉", skills: ["明炎才気", "賢略喝破", "対衛烈撃"], isUR: true},
    {id: 190, name: "雄俊光錦袍鎧", type: "防具", general: "周瑜", faction: "呉", skills: ["明炎堅守", "賢護躍動", "対衛盤石"], isUR: true},
    {id: 191, name: "麒龍志継鎧", type: "防具", general: "姜維", faction: "蜀", skills: ["才華敏達", "知勇盤石", "活発烈撃"], isUR: true},
    {id: 192, name: "武衛虎士刀", type: "武器槍", general: "許褚", faction: "魏", skills: ["虎堅強撃", "斬騎虎揚", "武猛煥虎"], isUR: true},
    {id: 193, name: "武衛虎侯頭巾", type: "防具", general: "許褚", faction: "魏", skills: ["虎堅堅守", "耐騎不抜", "守護煥虎"], isUR: true},
    {id: 194, name: "緋紅尖晶石首飾", type: "文物", general: "甄氏", faction: "魏", source: "シーズン", skills: ["麗花賢艶", "才妃絢爛"], isUR: false},
    {id: 195, name: "猛鋭黒革帯", type: "文物", general: "孫策", faction: "呉", skills: ["快撃志望", "制覇撃進", "堪撃剛勇"], isUR: true},
    {id: 196, name: "飛鳥装束", type: "防具", general: "ORIGINS", faction: "他", source: "コラボ", skills: ["太平烈撃", "太平盤石", "霊鳥の眼"], isUR: false},
    {id: 197, name: "張飛の頭巾", type: "防具", general: "張飛O", faction: "蜀", source: "コラボ", skills: ["堅守喝声", "剛将調練", "嵐矛無双"], isUR: true},
    {id: 198, name: "夏侯惇の眼帯", type: "文物", general: "夏侯惇O", faction: "魏", source: "コラボ", skills: ["隻眼統刃", "瑞牙威武", "滅尽無双"], isUR: true},
    {id: 199, name: "孫尚香の乾坤圏", type: "武器弓", general: "孫尚香O", faction: "呉", source: "コラボ", skills: ["飛圏烈翔", "紅空爛漫", "明月無双"], isUR: true},
    {id: 200, name: "万機相輔冠", type: "防具", general: "呂不韋", faction: "他", skills: ["文大堅守", "連繋滞勢", "才導槍舞"], isUR: true},
    {id: 201, name: "呂氏春秋", type: "文物", general: "呂不韋", faction: "他", skills: ["文大才気", "声威制動", "堅守槍舞"], isUR: true},
    {id: 202, name: "三國志40周年の旗", type: "武器全", faction: "他", source: "イベント", skills: ["四旬財盛", "四旬迅翼", "四旬双威"], isUR: true},
    {id: 203, name: "三國志40周年の盾", type: "防具", faction: "他", source: "イベント", skills: ["四旬浄護", "四旬慶輝", "四旬減衝"], isUR: true},
    {id: 204, name: "三國志40周年の書", type: "文物", faction: "他", source: "イベント", skills: ["四旬軍昴", "四旬疾連", "四旬三輝"], isUR: true},
    {id: 205, name: "遁甲天書", type: "文物", general: "左慈", faction: "蜀", source: "シーズン", skills: ["仙方才略", "機仙惑活"], isUR: false},
    {id: 206, name: "冷艶鋸", type: "武器馬", general: "関羽", faction: "蜀", skills: ["武閃豪勇", "破軍乱舞", "豪心躍動"], isUR: true},
    {id: 207, name: "龍紋護臂甲", type: "防具", general: "関羽", faction: "蜀", skills: ["武威豪勇", "突護一体", "豪心烈撃"], isUR: true},
    {id: 208, name: "大志冠世剣", type: "武器弓", general: "韓信", faction: "蜀", skills: ["背栄才気", "国士激烈", "帥号躍動"], isUR: true},
    {id: 209, name: "武略冠世兜", type: "防具", general: "韓信", faction: "蜀", skills: ["背栄堅守", "国士巧導", "帥号耐撃"], isUR: true},
];

const TREASURE_FORGE = {
    1: { // 神刀
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    2: { // 宝双剣
        normal: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2}},
        ],
        ur: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2, "★8": 3, "★9": 4, "★10": 5}},
        ],
    },
    3: { // 宝剣
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    4: { // 宝雕弓
        normal: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2}},
        ],
        ur: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2, "★8": 3, "★9": 4, "★10": 5}},
        ],
    },
    5: { // 象鼻刀
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    6: { // 蛇戟
        normal: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2}},
        ],
        ur: [
            {skill: "不乱怒涛", ranks: {"☆0": 1, "☆7": 2, "★8": 3, "★9": 4, "★10": 5}},
        ],
    },
    7: { // 明光鎧
        normal: [
            {skill: "(技能データなし)", ranks: {"☆0": 1, "☆7": 2}},
        ],
    },
    8: { // 黒光鎧
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    9: { // 委貌冠
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    10: { // 易経
        normal: [
            {skill: "(技能データなし)", ranks: {}, note: "解放なし"},
        ],
    },
    11: { // 戦国策
        normal: [
            {skill: "(技能データなし)", ranks: {}},
        ],
    },
    12: { // 呂氏鏡
        normal: [
            {skill: "(技能データなし)", ranks: {}},
        ],
    },
    13: { // 蛇矛
        normal: [
            {skill: "会心猛攻", ranks: {"☆0": 1}},
            {skill: "豪勇奮闘", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "武勇激烈", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "会心猛攻", ranks: {"☆0": 1, "☆1": 2, "☆3": 3, "☆5": 4}},
            {skill: "豪勇奮闘", ranks: {"☆0": 1, "☆2": 2, "☆4": 3, "☆6": 4, "★10": 5}},
            {skill: "武勇激烈", ranks: {"☆7": 1, "★8": 2, "★9": 3}},
        ],
    },
    14: { // 青龍偃月刀
        normal: [
            {skill: "堅固打破", ranks: {"☆0": 1}},
            {skill: "戦法乱舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "破軍突襲", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "堅固打破", ranks: {}},
            {skill: "戦法乱舞", ranks: {}},
            {skill: "破軍突襲", ranks: {}},
        ],
    },
    15: { // 元戎弩
        normal: [
            {skill: "策略躍動", ranks: {"☆0": 1}},
            {skill: "智謀撃砕", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "機略乱舞", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "策略躍動", ranks: {}},
            {skill: "智謀撃砕", ranks: {}},
            {skill: "機略乱舞", ranks: {}},
        ],
    },
    16: { // 七星宝刀
        normal: [
            {skill: "会心猛撃", ranks: {"☆0": 1}},
            {skill: "会心怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "領導豪猛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "会心猛撃", ranks: {}},
            {skill: "会心怒涛", ranks: {}},
            {skill: "領導豪猛", ranks: {}},
        ],
    },
    17: { // 孫子の兵法書
        normal: [
            {skill: "戦法防備", ranks: {"☆0": 1}},
            {skill: "猛勇連携", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "栄勢収転", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "戦法防備", ranks: {}},
            {skill: "猛勇連携", ranks: {}},
            {skill: "栄勢収転", ranks: {}},
        ],
    },
    18: { // 方天画戟
        normal: [
            {skill: "主導強化", ranks: {"☆0": 1}},
            {skill: "剛力乱舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "豪胆剛刃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "主導強化", ranks: {}},
            {skill: "剛力乱舞", ranks: {}},
            {skill: "豪胆剛刃", ranks: {}},
        ],
    },
    19: { // 雌雄一対の剣
        normal: [
            {skill: "不乱躍動", ranks: {"☆0": 1}},
            {skill: "合志敏達", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "会撃回生", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "不乱躍動", ranks: {}},
            {skill: "合志敏達", ranks: {}},
            {skill: "会撃回生", ranks: {}},
        ],
    },
    20: { // 召虎兜
        normal: [
            {skill: "反攻打破", ranks: {"☆0": 1}},
            {skill: "突破掃滅", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "剛然防護", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "反攻打破", ranks: {}},
            {skill: "突破掃滅", ranks: {}},
            {skill: "剛然防護", ranks: {}},
        ],
    },
    21: { // 郭子兵略
        normal: [
            {skill: "攪乱戦術", ranks: {"☆0": 1}},
            {skill: "才略昂揚", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利与撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "攪乱戦術", ranks: {}},
            {skill: "才略昂揚", ranks: {}},
            {skill: "有利与撃", ranks: {}},
        ],
    },
    22: { // 鳴鈴双短戟
        normal: [
            {skill: "躍動兵術", ranks: {"☆0": 1}},
            {skill: "振鈴豪勇", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "英武威迫", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "躍動兵術", ranks: {}},
            {skill: "振鈴豪勇", ranks: {}},
            {skill: "英武威迫", ranks: {}},
        ],
    },
    23: { // 周郎琵琶
        normal: [
            {skill: "明敏破砕", ranks: {"☆0": 1}},
            {skill: "策謀烈火", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "討究攻抜", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "明敏破砕", ranks: {}},
            {skill: "策謀烈火", ranks: {}},
            {skill: "討究攻抜", ranks: {}},
        ],
    },
    24: { // 太尉冠
        normal: [
            {skill: "叡智策励", ranks: {"☆0": 1}},
            {skill: "掎角深慮", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "避坑落井", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "叡智策励", ranks: {}},
            {skill: "掎角深慮", ranks: {}},
            {skill: "避坑落井", ranks: {}},
        ],
    },
    25: { // 虎臣瓢箪
        normal: [
            {skill: "会心猛攻", ranks: {"☆0": 1}},
            {skill: "燕人奮闘", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "会心毀壞", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "会心猛攻", ranks: {}},
            {skill: "燕人奮闘", ranks: {}},
            {skill: "会心毀壞", ranks: {}},
        ],
    },
    26: { // 鮮卑角端弓
        normal: [
            {skill: "攻城練達", ranks: {"☆0": 1}},
            {skill: "破砕兵法", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "激破怒涛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "攻城練達", ranks: {}},
            {skill: "破砕兵法", ranks: {}},
            {skill: "激破怒涛", ranks: {}},
        ],
    },
    27: { // 五渓狼牙棒
        normal: [
            {skill: "剛力練達", ranks: {"☆0": 1}},
            {skill: "不乱迫撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "不乱痛撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "剛力練達", ranks: {}},
            {skill: "不乱迫撃", ranks: {}},
            {skill: "不乱痛撃", ranks: {}},
        ],
    },
    28: { // 山越鋸歯刀
        normal: [
            {skill: "沈滞兵術", ranks: {"☆0": 1}},
            {skill: "遅鈍兵術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "惶惑兵術", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "沈滞兵術", ranks: {}},
            {skill: "遅鈍兵術", ranks: {}},
            {skill: "惶惑兵術", ranks: {}},
        ],
    },
    29: { // 青釭の剣
        normal: [
            {skill: "龍胆練達", ranks: {"☆0": 1}},
            {skill: "砕裂猛襲", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利撃攘", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "龍胆練達", ranks: {}},
            {skill: "砕裂猛襲", ranks: {}},
            {skill: "有利撃攘", ranks: {}},
        ],
    },
    30: { // 虎皮披風
        normal: [
            {skill: "雄略強化", ranks: {"☆0": 1}},
            {skill: "堅守軒昂", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利護堪", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雄略強化", ranks: {}},
            {skill: "堅守軒昂", ranks: {}},
            {skill: "有利護堪", ranks: {}},
        ],
    },
    31: { // 太平要術の書
        normal: [
            {skill: "反逆練達", ranks: {"☆0": 1}},
            {skill: "離間兵術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "叛心結託", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "反逆練達", ranks: {}},
            {skill: "離間兵術", ranks: {}},
            {skill: "叛心結託", ranks: {}},
        ],
    },
    32: { // 狐白裘
        normal: [
            {skill: "運気向上", ranks: {"☆0": 1}},
            {skill: "内務指揮", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    33: { // 射透弓
        normal: [
            {skill: "会心弓術", ranks: {"☆0": 1}},
            {skill: "強撃怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "箭連攻昂", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "会心弓術", ranks: {}},
            {skill: "強撃怒涛", ranks: {}},
            {skill: "箭連攻昂", ranks: {}},
        ],
    },
    34: { // 麟角槍
        normal: [
            {skill: "才腕練達", ranks: {"☆0": 1}},
            {skill: "知勇発揚", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "戦巧明算", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "才腕練達", ranks: {}},
            {skill: "知勇発揚", ranks: {}},
            {skill: "戦巧明算", ranks: {}},
        ],
    },
    35: { // 南蛮獣牙首飾
        normal: [
            {skill: "金剛練達", ranks: {"☆0": 1}},
            {skill: "墨守兵術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "窮地壮烈", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "金剛練達", ranks: {}},
            {skill: "墨守兵術", ranks: {}},
            {skill: "窮地壮烈", ranks: {}},
        ],
    },
    36: { // 烏桓貂毛兜
        normal: [
            {skill: "掃討練達", ranks: {"☆0": 1}},
            {skill: "受撃適防", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "疾快烈撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "掃討練達", ranks: {}},
            {skill: "受撃適防", ranks: {}},
            {skill: "疾快烈撃", ranks: {}},
        ],
    },
    37: { // 羌毛領披風
        normal: [
            {skill: "巻撃避之", ranks: {"☆0": 1}},
            {skill: "回避兵術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "削弱転脱", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "巻撃避之", ranks: {}},
            {skill: "回避兵術", ranks: {}},
            {skill: "削弱転脱", ranks: {}},
        ],
    },
    38: { // 白羽扇
        normal: [
            {skill: "伏龍練達", ranks: {"☆0": 1}},
            {skill: "術策怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    39: { // 三叉束髪紫金冠
        normal: [
            {skill: "飛将練達", ranks: {"☆0": 1}},
            {skill: "万陣翻身", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利驍衛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "飛将練達", ranks: {}},
            {skill: "万陣翻身", ranks: {}},
            {skill: "有利驍衛", ranks: {}},
        ],
    },
    40: { // 和泉守兼定
        normal: [
            {skill: "奮戦", ranks: {"☆0": 1}},
            {skill: "天然理心流", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    41: { // だんだら羽織
        normal: [
            {skill: "不屈", ranks: {"☆0": 1}},
            {skill: "誠衛士道", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    42: { // 黒紗金飾冠
        normal: [
            {skill: "狼顧練達", ranks: {"☆0": 1}},
            {skill: "百計深化", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "詭略妙衛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "狼顧練達", ranks: {}},
            {skill: "百計深化", ranks: {}},
            {skill: "詭略妙衛", ranks: {}},
        ],
    },
    43: { // 紫藤紗錦披帛
        normal: [
            {skill: "傾国練達", ranks: {"☆0": 1}},
            {skill: "躍動戦術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "連志舞励", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "傾国練達", ranks: {}},
            {skill: "躍動戦術", ranks: {}},
            {skill: "連志舞励", ranks: {}},
        ],
    },
    44: { // 太師黄金爵
        normal: [
            {skill: "歓喜練達", ranks: {"☆0": 1}},
            {skill: "剛撃昂揚", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "歓楽破壁", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "歓喜練達", ranks: {}},
            {skill: "剛撃昂揚", ranks: {}},
            {skill: "歓楽破壁", ranks: {}},
        ],
    },
    45: { // 武弁大冠
        normal: [
            {skill: "烈虎練達", ranks: {"☆0": 1}},
            {skill: "励気増強", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "不抜確守", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "烈虎練達", ranks: {}},
            {skill: "励気増強", ranks: {}},
            {skill: "不抜確守", ranks: {}},
        ],
    },
    46: { // 黄武勢剣
        normal: [
            {skill: "獄炎練達", ranks: {"☆0": 1}},
            {skill: "機知操炎", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "烈火炎討", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "獄炎練達", ranks: {}},
            {skill: "機知操炎", ranks: {}},
            {skill: "烈火炎討", ranks: {}},
        ],
    },
    47: { // 翡翠玉笛
        normal: [
            {skill: "削弱深化", ranks: {"☆0": 1}},
            {skill: "万徳興起", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "対衰追討", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "削弱深化", ranks: {}},
            {skill: "万徳興起", ranks: {}},
            {skill: "対衰追討", ranks: {}},
        ],
    },
    48: { // 龍紋緑袍鎧
        normal: [
            {skill: "美髯練達", ranks: {"☆0": 1}},
            {skill: "過関斬将", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    49: { // 疾風剛弓
        normal: [
            {skill: "極弓練達", ranks: {"☆0": 1}},
            {skill: "強撃連携", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "合心疾撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "極弓練達", ranks: {}},
            {skill: "強撃連携", ranks: {}},
            {skill: "合心疾撃", ranks: {}},
        ],
    },
    50: { // 軍師錦羅袍
        normal: [
            {skill: "鳳雛練達", ranks: {"☆0": 1}},
            {skill: "受撃反滞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "対衰盤石", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "鳳雛練達", ranks: {}},
            {skill: "受撃反滞", ranks: {}},
            {skill: "対衰盤石", ranks: {}},
        ],
    },
    51: { // 冕冠
        normal: [
            {skill: "運気向上", ranks: {"☆0": 1}},
            {skill: "視察指揮", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    52: { // 立義鋼刀
        normal: [
            {skill: "堪耐練達", ranks: {"☆0": 1}},
            {skill: "戦法反攻", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "堪撃制勢", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "堪耐練達", ranks: {}},
            {skill: "戦法反攻", ranks: {}},
            {skill: "堪撃制勢", ranks: {}},
        ],
    },
    53: { // 二石之弓
        normal: [
            {skill: "弓神練達", ranks: {"☆0": 1}},
            {skill: "撃射怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "巧矢激成", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "弓神練達", ranks: {}},
            {skill: "撃射怒涛", ranks: {}},
            {skill: "巧矢激成", ranks: {}},
        ],
    },
    54: { // 才捷弓
        normal: [
            {skill: "弓姫練達", ranks: {"☆0": 1}},
            {skill: "勇躍深化", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "連武破敵", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "弓姫練達", ranks: {}},
            {skill: "勇躍深化", ranks: {}},
            {skill: "連武破敵", ranks: {}},
        ],
    },
    55: { // 商君書
        normal: [
            {skill: "内政補佐", ranks: {"☆0": 1}},
            {skill: "利益増進", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    56: { // 獅子頭の兜
        normal: [
            {skill: "烈武合志", ranks: {"☆0": 1}},
            {skill: "神威煥発", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "結騎豪躍", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "烈武合志", ranks: {}},
            {skill: "神威煥発", ranks: {}},
            {skill: "結騎豪躍", ranks: {}},
        ],
    },
    57: { // 孤月独明剣
        normal: [
            {skill: "奮迅連携", ranks: {"☆0": 1}},
            {skill: "槍撃怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "合心剛破", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "奮迅連携", ranks: {}},
            {skill: "槍撃怒涛", ranks: {}},
            {skill: "合心剛破", ranks: {}},
        ],
    },
    58: { // 古錠刀
        normal: [
            {skill: "虎嘯風生", ranks: {"☆0": 1}},
            {skill: "戦機伸長", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "結援烈撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "虎嘯風生", ranks: {}},
            {skill: "戦機伸長", ranks: {}},
            {skill: "結援烈撃", ranks: {}},
        ],
    },
    59: { // 克定鋭刀
        normal: [
            {skill: "活心破城", ranks: {"☆0": 1}},
            {skill: "犀利喝破", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利活戦", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "活心破城", ranks: {}},
            {skill: "犀利喝破", ranks: {}},
            {skill: "有利活戦", ranks: {}},
        ],
    },
    60: { // 金繍紅錦半臂
        normal: [
            {skill: "碧羅大同", ranks: {"☆0": 1}},
            {skill: "哮虎躍動", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "強迅盤石", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "碧羅大同", ranks: {}},
            {skill: "哮虎躍動", ranks: {}},
            {skill: "強迅盤石", ranks: {}},
        ],
    },
    61: { // 玲瓏獅蛮帯
        normal: [
            {skill: "凛然領導", ranks: {"☆0": 1}},
            {skill: "会心乱撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "十全凛裂", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "凛然領導", ranks: {}},
            {skill: "会心乱撃", ranks: {}},
            {skill: "十全凛裂", ranks: {}},
        ],
    },
    62: { // 金系帯紫錦披風
        normal: [
            {skill: "圧倒練達", ranks: {"☆0": 1}},
            {skill: "策応賢守", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "不乱盤石", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "圧倒練達", ranks: {}},
            {skill: "策応賢守", ranks: {}},
            {skill: "不乱盤石", ranks: {}},
        ],
    },
    63: { // 青嚢書
        normal: [
            {skill: "兵心練達", ranks: {"☆0": 1}},
            {skill: "窮地護心", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "窮地戦威", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "兵心練達", ranks: {}},
            {skill: "窮地護心", ranks: {}},
            {skill: "窮地戦威", ranks: {}},
        ],
    },
    64: { // 太平九節杖
        normal: [
            {skill: "天立喝破", ranks: {"☆0": 1}},
            {skill: "賢知攻勢", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "逆乱烈撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "天立喝破", ranks: {}},
            {skill: "賢知攻勢", ranks: {}},
            {skill: "逆乱烈撃", ranks: {}},
        ],
    },
    65: { // 克己猟龍兜
        normal: [
            {skill: "勉励聡慧", ranks: {"☆0": 1}},
            {skill: "文武双撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "向学躍動", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "勉励聡慧", ranks: {}},
            {skill: "文武双撃", ranks: {}},
            {skill: "向学躍動", ranks: {}},
        ],
    },
    66: { // 千創玄英鎧
        normal: [
            {skill: "剛毅活命", ranks: {"☆0": 1}},
            {skill: "窮地回生", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "戦剛防備", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "剛毅活命", ranks: {}},
            {skill: "窮地回生", ranks: {}},
            {skill: "戦剛防備", ranks: {}},
        ],
    },
    67: { // 克敵機謀剣
        normal: [
            {skill: "叡智天略", ranks: {"☆0": 1}},
            {skill: "百謀興起", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "賢略連繋", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "叡智天略", ranks: {}},
            {skill: "百謀興起", ranks: {}},
            {skill: "賢略連繋", ranks: {}},
        ],
    },
    68: { // 荀氏春秋要論
        normal: [
            {skill: "慧護策動", ranks: {"☆0": 1}},
            {skill: "雪上加霜", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "耐窮活衛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "慧護策動", ranks: {}},
            {skill: "雪上加霜", ranks: {}},
            {skill: "耐窮活衛", ranks: {}},
        ],
    },
    69: { // 羅綺香嚢
        normal: [
            {skill: "賊討招福", ranks: {"☆0": 1}},
            {skill: "健勝翻身", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    70: { // 倚天の剣
        normal: [
            {skill: "壮志練達", ranks: {"☆0": 1}},
            {skill: "戦撃熾烈", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "当塗増強", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "壮志練達", ranks: {}},
            {skill: "戦撃熾烈", ranks: {}},
            {skill: "当塗増強", ranks: {}},
        ],
    },
    71: { // 烈志蒼驥鎧
        normal: [
            {skill: "虚実練達", ranks: {"☆0": 1}},
            {skill: "十全盤石", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "当塗伸長", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "虚実練達", ranks: {}},
            {skill: "十全盤石", ranks: {}},
            {skill: "当塗伸長", ranks: {}},
        ],
    },
    72: { // 孟徳新書
        normal: [
            {skill: "奸雄練達", ranks: {"☆0": 1}},
            {skill: "窮地討凶", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "当塗遠謀", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "奸雄練達", ranks: {}},
            {skill: "窮地討凶", ranks: {}},
            {skill: "当塗遠謀", ranks: {}},
        ],
    },
    73: { // 剛断戦斧
        normal: [
            {skill: "猛威合志", ranks: {"☆0": 1}},
            {skill: "戦法乱打", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "剛大戦威", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "猛威合志", ranks: {}},
            {skill: "戦法乱打", ranks: {}},
            {skill: "剛大戦威", ranks: {}},
        ],
    },
    74: { // 紅玉珍珠金耳墜
        normal: [
            {skill: "澄天爛漫", ranks: {"☆0": 1}},
            {skill: "躍動強健", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "咲乱昂揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "澄天爛漫", ranks: {}},
            {skill: "躍動強健", ranks: {}},
            {skill: "咲乱昂揚", ranks: {}},
        ],
    },
    75: { // 孔明の木像
        normal: [
            {skill: "孔明尚在", ranks: {"☆0": 1}},
            {skill: "不能料死", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    76: { // 朱襟白絹半臂
        normal: [
            {skill: "才知義心", ranks: {"☆0": 1}},
            {skill: "方略炯眼", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "主助激成", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "才知義心", ranks: {}},
            {skill: "方略炯眼", ranks: {}},
            {skill: "主助激成", ranks: {}},
        ],
    },
    77: { // 双鉄戟
        normal: [
            {skill: "衛砕深化", ranks: {"☆0": 1}},
            {skill: "武猛魁偉", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "警衛昂揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "衛砕深化", ranks: {}},
            {skill: "武猛魁偉", ranks: {}},
            {skill: "警衛昂揚", ranks: {}},
        ],
    },
    78: { // 西方の杖
        normal: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}},
        ],
    },
    79: { // 蝙蝠披風
        normal: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}},
        ],
    },
    80: { // 南瓜の灯燈
        normal: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "トリック", ranks: {}},
            {skill: "トリート", ranks: {}},
            {skill: "ハロウィン", ranks: {}},
        ],
    },
    81: { // 与韓将軍書
        normal: [
            {skill: "掎角策応", ranks: {"☆0": 1}},
            {skill: "戦撃追略", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    82: { // 大喬琵琶
        normal: [
            {skill: "万徳興起", ranks: {"☆0": 1}},
            {skill: "戦策迅急", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "嬌美減衝", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "万徳興起", ranks: {}},
            {skill: "戦策迅急", ranks: {}},
            {skill: "嬌美減衝", ranks: {}},
        ],
    },
    83: { // 白狐毛皮披風
        normal: [
            {skill: "疾駆合志", ranks: {"☆0": 1}},
            {skill: "突射怒涛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "弓騎守剛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "疾駆合志", ranks: {}},
            {skill: "突射怒涛", ranks: {}},
            {skill: "弓騎守剛", ranks: {}},
        ],
    },
    84: { // 神獣面白纓兜
        normal: [
            {skill: "万騎梟勇", ranks: {"☆0": 1}},
            {skill: "騎虎無尽", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "結騎撃砕", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "万騎梟勇", ranks: {}},
            {skill: "騎虎無尽", ranks: {}},
            {skill: "結騎撃砕", ranks: {}},
        ],
    },
    85: { // 金繍緑錦披風
        normal: [
            {skill: "総慧一心", ranks: {"☆0": 1}},
            {skill: "会心癒術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "賢慧戦防", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "総慧一心", ranks: {}},
            {skill: "会心癒術", ranks: {}},
            {skill: "賢慧戦防", ranks: {}},
        ],
    },
    86: { // 玄熊毛銀黄兜
        normal: [
            {skill: "頑堅連携", ranks: {"☆0": 1}},
            {skill: "華敢堅牢", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "戦剛壮昇", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "頑堅連携", ranks: {}},
            {skill: "華敢堅牢", ranks: {}},
            {skill: "戦剛壮昇", ranks: {}},
        ],
    },
    87: { // 黄幡豹尾
        normal: [
            {skill: "飛揚破城", ranks: {"☆0": 1}},
            {skill: "烈撃怯兵", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    88: { // 太平賢良黄金冠
        normal: [
            {skill: "黄賢唱道", ranks: {"☆0": 1}},
            {skill: "符水乱道", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "逆乱盤石", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "黄賢唱道", ranks: {}},
            {skill: "符水乱道", ranks: {}},
            {skill: "逆乱盤石", ranks: {}},
        ],
    },
    89: { // 鷹揚玄冥兜
        normal: [
            {skill: "轟鳴雄主", ranks: {"☆0": 1}},
            {skill: "復興戦術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利堪興", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "轟鳴雄主", ranks: {}},
            {skill: "復興戦術", ranks: {}},
            {skill: "有利堪興", ranks: {}},
        ],
    },
    90: { // 驍悍傲骨鎧
        normal: [
            {skill: "硬骨邁進", ranks: {"☆0": 1}},
            {skill: "壮烈撞断", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利強盤", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "硬骨邁進", ranks: {}},
            {skill: "壮烈撞断", ranks: {}},
            {skill: "有利強盤", ranks: {}},
        ],
    },
    91: { // 瑠璃珠金花冠
        normal: [
            {skill: "美神幻惑", ranks: {"☆0": 1}},
            {skill: "名花絢爛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "衰滞深化", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "美神幻惑", ranks: {}},
            {skill: "名花絢爛", ranks: {}},
            {skill: "衰滞深化", ranks: {}},
        ],
    },
    92: { // 純和青金石首飾
        normal: [
            {skill: "佐命聡慧", ranks: {"☆0": 1}},
            {skill: "純和斉心", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "麗拡激成", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "佐命聡慧", ranks: {}},
            {skill: "純和斉心", ranks: {}},
            {skill: "麗拡激成", ranks: {}},
        ],
    },
    93: { // 天柱鉄大刀
        normal: [
            {skill: "戦撃雄断", ranks: {"☆0": 1}},
            {skill: "倶発激成", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "剛武撃昇", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "戦撃雄断", ranks: {}},
            {skill: "倶発激成", ranks: {}},
            {skill: "剛武撃昇", ranks: {}},
        ],
    },
    94: { // 天禄一角兜
        normal: [
            {skill: "強堅誅裂", ranks: {"☆0": 1}},
            {skill: "倶発堅塁", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "剛武会覇", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "強堅誅裂", ranks: {}},
            {skill: "倶発堅塁", ranks: {}},
            {skill: "剛武会覇", ranks: {}},
        ],
    },
    95: { // 西方の盾
        normal: [
            {skill: "声威盾陣", ranks: {}},
            {skill: "強壮奪心", ranks: {}},
        ],
        ur: [
            {skill: "声威盾陣", ranks: {}},
            {skill: "強壮奪心", ranks: {}},
        ],
    },
    96: { // 西方の鞭
        normal: [
            {skill: "声威盾陣", ranks: {}},
            {skill: "撓打恐恐", ranks: {}},
            {skill: "強壮奪心", ranks: {}},
        ],
        ur: [
            {skill: "声威盾陣", ranks: {}},
            {skill: "撓打恐恐", ranks: {}},
            {skill: "強壮奪心", ranks: {}},
        ],
    },
    97: { // 召虎鉤鎌刀
        normal: [
            {skill: "突破活命", ranks: {"☆0": 1}},
            {skill: "勇撃躍動", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    98: { // 真鋼鎮定剣
        normal: [
            {skill: "雄図連携", ranks: {"☆0": 1}},
            {skill: "大喝烈撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "制覇万虎", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雄図連携", ranks: {}},
            {skill: "大喝烈撃", ranks: {}},
            {skill: "制覇万虎", ranks: {}},
        ],
    },
    99: { // 道論
        normal: [
            {skill: "策応矜伐", ranks: {"☆0": 1}},
            {skill: "避撃優賢", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "対衰堅衛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "策応矜伐", ranks: {}},
            {skill: "避撃優賢", ranks: {}},
            {skill: "対衰堅衛", ranks: {}},
        ],
    },
    100: { // 平蜀地理図
        normal: [
            {skill: "破城迅疾", ranks: {"☆0": 1}},
            {skill: "戦撃槍舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "崩破撃砕", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "破城迅疾", ranks: {}},
            {skill: "戦撃槍舞", ranks: {}},
            {skill: "崩破撃砕", ranks: {}},
        ],
    },
    101: { // 明道方略冠
        normal: [
            {skill: "賢俊奨導", ranks: {"☆0": 1}},
            {skill: "連志賢守", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    102: { // 錦帆鈴飾
        normal: [
            {skill: "振鈴猛勇", ranks: {"☆0": 1}},
            {skill: "剛烈負枷", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    103: { // 白銀龍胆鎧
        normal: [
            {skill: "龍心掃滅", ranks: {"☆0": 1}},
            {skill: "攻破督励", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "龍心完勢", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "龍心掃滅", ranks: {}},
            {skill: "攻破督励", ranks: {}},
            {skill: "龍心完勢", ranks: {}},
        ],
    },
    104: { // 木牛試作模型
        normal: [
            {skill: "創機聡慧", ranks: {"☆0": 1}},
            {skill: "破壁連播", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "賢慧熾灼", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "創機聡慧", ranks: {}},
            {skill: "破壁連播", ranks: {}},
            {skill: "賢慧熾灼", ranks: {}},
        ],
    },
    105: { // 登極龍紋金觚
        normal: [
            {skill: "深慮栄耀", ranks: {"☆0": 1}},
            {skill: "心知双昴", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "対衰断庸", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "深慮栄耀", ranks: {}},
            {skill: "心知双昴", ranks: {}},
            {skill: "対衰断庸", ranks: {}},
        ],
    },
    106: { // 疾風護臂甲
        normal: [
            {skill: "天弓合志", ranks: {"☆0": 1}},
            {skill: "躍動弓舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    107: { // 狼毛紫纓兜
        normal: [
            {skill: "狂喜歓宴", ranks: {"☆0": 1}},
            {skill: "百花凄艶", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    108: { // 藍田玉軍令牌
        normal: [
            {skill: "呵成破略", ranks: {"☆0": 1}},
            {skill: "平癒弄策", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "存兵才気", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "呵成破略", ranks: {}},
            {skill: "平癒弄策", ranks: {}},
            {skill: "存兵才気", ranks: {}},
        ],
    },
    109: { // 雲矩紋玉具宝剣
        normal: [
            {skill: "声威厳令", ranks: {"☆0": 1}},
            {skill: "盤石加霜", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "抑敵壮雄", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "声威厳令", ranks: {}},
            {skill: "盤石加霜", ranks: {}},
            {skill: "抑敵壮雄", ranks: {}},
        ],
    },
    110: { // 銀山雪海鎧
        normal: [
            {skill: "玲珠爛漫", ranks: {"☆0": 1}},
            {skill: "麗人躍動", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "令女盤石", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "玲珠爛漫", ranks: {}},
            {skill: "麗人躍動", ranks: {}},
            {skill: "令女盤石", ranks: {}},
        ],
    },
    111: { // 鋼胆鉄心槍
        normal: [
            {skill: "驍健豪勇", ranks: {"☆0": 1}},
            {skill: "十全痛撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "豪心剛先", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "驍健豪勇", ranks: {}},
            {skill: "十全痛撃", ranks: {}},
            {skill: "豪心剛先", ranks: {}},
        ],
    },
    112: { // 思紹
        normal: [
            {skill: "轟鳴雄主", ranks: {"☆0": 1}},
            {skill: "臣子激成", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利烈成", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "轟鳴雄主", ranks: {}},
            {skill: "臣子激成", ranks: {}},
            {skill: "有利烈成", ranks: {}},
        ],
    },
    113: { // 亢龍鋼鞭
        normal: [
            {skill: "掃滅豪勇", ranks: {"☆0": 1}},
            {skill: "鎮撫騎駆", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    114: { // 奔走の算盤
        normal: [
            {skill: "(技能データなし)", ranks: {}},
        ],
    },
    115: { // 富春孫氏家伝
        normal: [
            {skill: "英烈領導", ranks: {"☆0": 1}},
            {skill: "会心鼓吹", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    116: { // 雄豪肩呑鎧
        normal: [
            {skill: "復仇剛撃", ranks: {"☆0": 1}},
            {skill: "窮地堅牢", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "不抜雄健", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "復仇剛撃", ranks: {}},
            {skill: "窮地堅牢", ranks: {}},
            {skill: "不抜雄健", ranks: {}},
        ],
    },
    117: { // 燦金赤纓兜
        normal: [
            {skill: "弓妙連携", ranks: {"☆0": 1}},
            {skill: "弓心十全", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    118: { // 断江倒海鞭
        normal: [
            {skill: "烈火焚如", ranks: {"☆0": 1}},
            {skill: "箭連剛硬", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "火勢攻崩", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "烈火焚如", ranks: {}},
            {skill: "箭連剛硬", ranks: {}},
            {skill: "火勢攻崩", ranks: {}},
        ],
    },
    119: { // 龍の水槍
        normal: [
            {skill: "活水旺盛", ranks: {}},
            {skill: "不乱活盛", ranks: {}},
        ],
        ur: [
            {skill: "活水旺盛", ranks: {}},
            {skill: "不乱活盛", ranks: {}},
        ],
    },
    120: { // 羊の遊泳圏
        normal: [
            {skill: "活水旺盛", ranks: {}},
            {skill: "流水確守", ranks: {}},
            {skill: "不乱活盛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "活水旺盛", ranks: {}},
            {skill: "流水確守", ranks: {}},
            {skill: "不乱活盛", ranks: {}},
        ],
    },
    121: { // 奮勇燕尾牌
        normal: [
            {skill: "確固強剛", ranks: {"☆0": 1}},
            {skill: "守護奮励", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "常剛雄健", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "確固強剛", ranks: {}},
            {skill: "守護奮励", ranks: {}},
            {skill: "常剛雄健", ranks: {}},
        ],
    },
    122: { // 司馬氏兵記
        normal: [
            {skill: "後顧鬼想", ranks: {"☆0": 1}},
            {skill: "方略警衛", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    123: { // 興起嵩峻兜
        normal: [
            {skill: "活命相克", ranks: {"☆0": 1}},
            {skill: "昂然敏達", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    124: { // 九華扇
        normal: [
            {skill: "領導連共", ranks: {}},
            {skill: "鳳翔風征", ranks: {}},
            {skill: "鳳煌斉心", ranks: {}},
        ],
        ur: [
            {skill: "領導連共", ranks: {}},
            {skill: "鳳翔風征", ranks: {}},
            {skill: "鳳煌斉心", ranks: {}},
        ],
    },
    125: { // 壮気直躬剣
        normal: [
            {skill: "調唆排陣", ranks: {"☆0": 1}},
            {skill: "十全翻弄", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "壮明深化", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "調唆排陣", ranks: {}},
            {skill: "十全翻弄", ranks: {}},
            {skill: "壮明深化", ranks: {}},
        ],
    },
    126: { // 諸葛巾
        normal: [
            {skill: "雲龍慧眼", ranks: {"☆0": 1}},
            {skill: "彼己掌握", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "才気煥発", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雲龍慧眼", ranks: {}},
            {skill: "彼己掌握", ranks: {}},
            {skill: "才気煥発", ranks: {}},
        ],
    },
    127: { // 威福笠兜
        normal: [
            {skill: "鋭気猛勇", ranks: {"☆0": 1}},
            {skill: "会心躍動", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "猛昂会覇", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "鋭気猛勇", ranks: {}},
            {skill: "会心躍動", ranks: {}},
            {skill: "猛昂会覇", ranks: {}},
        ],
    },
    128: { // 南天羽飾兜
        normal: [
            {skill: "直突叛王", ranks: {"☆0": 1}},
            {skill: "堪断重来", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "蛮声呼応", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "直突叛王", ranks: {}},
            {skill: "堪断重来", ranks: {}},
            {skill: "蛮声呼応", ranks: {}},
        ],
    },
    129: { // 飛刀
        normal: [
            {skill: "破却焔妃", ranks: {"☆0": 1}},
            {skill: "飛刃断槍", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "南神熾灼", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "破却焔妃", ranks: {}},
            {skill: "飛刃断槍", ranks: {}},
            {skill: "南神熾灼", ranks: {}},
        ],
    },
    130: { // 先登承志頭巾
        normal: [
            {skill: "勇敢合志", ranks: {"☆0": 1}},
            {skill: "副帥勢転", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "強迅躍動", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "勇敢合志", ranks: {}},
            {skill: "副帥勢転", ranks: {}},
            {skill: "強迅躍動", ranks: {}},
        ],
    },
    131: { // 奉天銀灰冠
        normal: [
            {skill: "才略詭偽", ranks: {"☆0": 1}},
            {skill: "虚攻深慮", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    132: { // 西方の紅帽
        normal: [
            {skill: "贈物運送", ranks: {}},
            {skill: "祝福寄贈", ranks: {}},
            {skill: "聖夜烈撃", ranks: {}},
        ],
        ur: [
            {skill: "贈物運送", ranks: {}},
            {skill: "祝福寄贈", ranks: {}},
            {skill: "聖夜烈撃", ranks: {}},
        ],
    },
    133: { // 焦尾琴
        normal: [
            {skill: "音韻厚情", ranks: {"☆0": 1}},
            {skill: "徳興媛霜", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "弦声祝音", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "音韻厚情", ranks: {}},
            {skill: "徳興媛霜", ranks: {}},
            {skill: "弦声祝音", ranks: {}},
        ],
    },
    134: { // 碧緑双翼兜
        normal: [
            {skill: "旺壮調練", ranks: {"☆0": 1}},
            {skill: "安朋昂揚", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "十全不抜", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "旺壮調練", ranks: {}},
            {skill: "安朋昂揚", ranks: {}},
            {skill: "十全不抜", ranks: {}},
        ],
    },
    135: { // 朝陽仁恵玉冠
        normal: [
            {skill: "兼備敏達", ranks: {"☆0": 1}},
            {skill: "契合激成", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "合心会覇", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "兼備敏達", ranks: {}},
            {skill: "契合激成", ranks: {}},
            {skill: "合心会覇", ranks: {}},
        ],
    },
    136: { // 鳳鳴双飛金冠
        normal: [
            {skill: "弓姫克剛", ranks: {"☆0": 1}},
            {skill: "弓騎華烈", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "咲乱躍動", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "弓姫克剛", ranks: {}},
            {skill: "弓騎華烈", ranks: {}},
            {skill: "咲乱躍動", ranks: {}},
        ],
    },
    137: { // 鋭師飛鵠兜
        normal: [
            {skill: "鋭志調練", ranks: {"☆0": 1}},
            {skill: "万馬喝破", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "剛勇発揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "鋭志調練", ranks: {}},
            {skill: "万馬喝破", ranks: {}},
            {skill: "剛勇発揚", ranks: {}},
        ],
    },
    138: { // 励志方正冠
        normal: [
            {skill: "統督奮走", ranks: {"☆0": 1}},
            {skill: "万政連躍", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    139: { // 金色のロケット
        normal: [
            {skill: "金獅躍動", ranks: {}},
            {skill: "星之恩威", ranks: {}},
            {skill: "英雄宣誓", ranks: {}},
        ],
        ur: [
            {skill: "金獅躍動", ranks: {}},
            {skill: "星之恩威", ranks: {}},
            {skill: "英雄宣誓", ranks: {}},
        ],
    },
    140: { // 星間航路図
        normal: [
            {skill: "航進導引", ranks: {}},
            {skill: "同志精励", ranks: {}},
            {skill: "剛胆兵略", ranks: {}},
        ],
    },
    141: { // 魔術師の帽子
        normal: [
            {skill: "自由方略", ranks: {}},
            {skill: "奇跡妙策", ranks: {}},
            {skill: "詭計呑艦", ranks: {}},
        ],
        ur: [
            {skill: "自由方略", ranks: {}},
            {skill: "奇跡妙策", ranks: {}},
            {skill: "詭計呑艦", ranks: {}},
        ],
    },
    142: { // 賢佐治道笏
        normal: [
            {skill: "諌督堅佑", ranks: {"☆0": 1}},
            {skill: "万政連喝", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "才備悠揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "諌督堅佑", ranks: {}},
            {skill: "万政連喝", ranks: {}},
            {skill: "才備悠揚", ranks: {}},
        ],
    },
    143: { // 炎帝神農茶譜
        normal: [
            {skill: "堅策聡慧", ranks: {"☆0": 1}},
            {skill: "慧士軒昂", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "慧合旺盛", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "堅策聡慧", ranks: {}},
            {skill: "慧士軒昂", ranks: {}},
            {skill: "慧合旺盛", ranks: {}},
        ],
    },
    144: { // 緑絹金花抹額
        normal: [
            {skill: "花盛調練", ranks: {"☆0": 1}},
            {skill: "会華収転", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "強迅昂揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "花盛調練", ranks: {}},
            {skill: "会華収転", ranks: {}},
            {skill: "強迅昂揚", ranks: {}},
        ],
    },
    145: { // 春秋左氏伝
        normal: [
            {skill: "美髯威武", ranks: {"☆0": 1}},
            {skill: "結騎会迅", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "威武昂揚", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "美髯威武", ranks: {}},
            {skill: "結騎会迅", ranks: {}},
            {skill: "威武昂揚", ranks: {}},
        ],
    },
    146: { // 貞烈弓籠手
        normal: [
            {skill: "倒騎聡慧", ranks: {"☆0": 1}},
            {skill: "衛策紅活", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "賢慧躍動", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "倒騎聡慧", ranks: {}},
            {skill: "衛策紅活", ranks: {}},
            {skill: "賢慧躍動", ranks: {}},
        ],
    },
    147: { // 黄焔柳緑披風
        normal: [
            {skill: "誠心敬仰", ranks: {}},
            {skill: "勇升壮烈", ranks: {}},
        ],
    },
    148: { // 鉄脊蛇矛
        normal: [
            {skill: "揚老破城", ranks: {"☆0": 1}},
            {skill: "十全撃砕", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "健勝練熟", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "揚老破城", ranks: {}},
            {skill: "十全撃砕", ranks: {}},
            {skill: "健勝練熟", ranks: {}},
        ],
    },
    149: { // 虎筋弦神弓
        normal: [
            {skill: "豪峻鬼叫", ranks: {"☆0": 1}},
            {skill: "惨烈乱舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "弓騎剛速", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "豪峻鬼叫", ranks: {}},
            {skill: "惨烈乱舞", ranks: {}},
            {skill: "弓騎剛速", ranks: {}},
        ],
    },
    150: { // 赤心硬殻兜
        normal: [
            {skill: "箭撃仁心", ranks: {"☆0": 1}},
            {skill: "剛勇弓術", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "回生弓術", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "箭撃仁心", ranks: {}},
            {skill: "剛勇弓術", ranks: {}},
            {skill: "回生弓術", ranks: {}},
        ],
    },
    151: { // 厳毅典麗宝剣
        normal: [
            {skill: "炎策才略", ranks: {"☆0": 1}},
            {skill: "滞勢抑撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "有利連繫", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "炎策才略", ranks: {}},
            {skill: "滞勢抑撃", ranks: {}},
            {skill: "有利連繫", ranks: {}},
        ],
    },
    152: { // 弘雅守信冠
        normal: [
            {skill: "交心協調", ranks: {"☆0": 1}},
            {skill: "万政援連", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "才気連繋", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "交心協調", ranks: {}},
            {skill: "万政援連", ranks: {}},
            {skill: "才気連繋", ranks: {}},
        ],
    },
    153: { // 虎豹元帥兜
        normal: [
            {skill: "調練封龍", ranks: {}},
            {skill: "捷守虎豹", ranks: {}},
        ],
    },
    154: { // 玄漆紫玉金冠
        normal: [
            {skill: "明決協調", ranks: {"☆0": 1}},
            {skill: "沈潜猜疑", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "博雅護持", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "明決協調", ranks: {}},
            {skill: "沈潜猜疑", ranks: {}},
            {skill: "博雅護持", ranks: {}},
        ],
    },
    155: { // 彩漆鳳龍紋盾
        normal: [
            {skill: "投戈衛盾", ranks: {"☆0": 1}},
            {skill: "策護激成", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "堅守連繋", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "投戈衛盾", ranks: {}},
            {skill: "策護激成", ranks: {}},
            {skill: "堅守連繋", ranks: {}},
        ],
    },
    156: { // 勢焔雷紋兜
        normal: [
            {skill: "火熾戦撃", ranks: {"☆0": 1}},
            {skill: "灼降盤石", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "優勢双撃", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "火熾戦撃", ranks: {}},
            {skill: "灼降盤石", ranks: {}},
            {skill: "優勢双撃", ranks: {}},
        ],
    },
    157: { // 迅風衝決剣
        normal: [
            {skill: "倒征壊策", ranks: {"☆0": 1}},
            {skill: "連志回生", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "破軍連繋", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "倒征壊策", ranks: {}},
            {skill: "連志回生", ranks: {}},
            {skill: "破軍連繋", ranks: {}},
        ],
    },
    158: { // 二兎観月扇
        normal: [
            {skill: "響麗聡慧", ranks: {"☆0": 1}},
            {skill: "聡躍援舞", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    159: { // 龍紋鉄甲
        normal: [
            {skill: "国姓練達", ranks: {"☆0": 1}},
            {skill: "丹心深化", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "身経百戦", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "国姓練達", ranks: {}},
            {skill: "丹心深化", ranks: {}},
            {skill: "身経百戦", ranks: {}},
        ],
    },
    160: { // 六尺斬馬刀
        normal: [
            {skill: "国姓将軍", ranks: {"☆0": 1}},
            {skill: "斬馬", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    161: { // 百保鮮卑重甲
        normal: [
            {skill: "雄弁練達", ranks: {"☆0": 1}},
            {skill: "重騎入陣", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "以一敵百", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雄弁練達", ranks: {}},
            {skill: "重騎入陣", ranks: {}},
            {skill: "以一敵百", ranks: {}},
        ],
    },
    162: { // 獠牙鬼面
        normal: [
            {skill: "免冑示面", ranks: {"☆0": 1}},
            {skill: "鬼面将軍", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "貌柔心壮", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "免冑示面", ranks: {}},
            {skill: "鬼面将軍", ranks: {}},
            {skill: "貌柔心壮", ranks: {}},
        ],
    },
    163: { // 瀝泉槍
        normal: [
            {skill: "雪恨強化", ranks: {"☆0": 1}},
            {skill: "瀝泉", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "黄龍痛飲", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雪恨強化", ranks: {}},
            {skill: "瀝泉", ranks: {}},
            {skill: "黄龍痛飲", ranks: {}},
        ],
    },
    164: { // 紅纓帥兜
        normal: [
            {skill: "雪恨不滅", ranks: {"☆0": 1}},
            {skill: "怒髪衝冠", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
            {skill: "号令如山", ranks: {}, note: "解放なし"},
        ],
        ur: [
            {skill: "雪恨不滅", ranks: {}},
            {skill: "怒髪衝冠", ranks: {}},
            {skill: "号令如山", ranks: {}},
        ],
    },
    165: { // 軒轅剣
        normal: [
            {skill: "時空躍遷", ranks: {"☆0": 1}},
            {skill: "軒轅剣仙", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    166: { // 万鈞神弩
        normal: [
            {skill: "魔将練達", ranks: {"☆0": 1}},
            {skill: "万箭凌空", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    167: { // 怪盗の仮面
        normal: [
            {skill: "偸窃指令", ranks: {}},
        ],
    },
    168: { // 霊虚扇
        normal: [
            {skill: "駆邪魔", ranks: {}},
        ],
    },
    169: { // 無塵剣
        normal: [
            {skill: "上古神剣", ranks: {}},
            {skill: "無塵正気", ranks: {}},
            {skill: "地裂天崩", ranks: {}},
        ],
        ur: [
            {skill: "上古神剣", ranks: {}},
            {skill: "無塵正気", ranks: {}},
            {skill: "地裂天崩", ranks: {}},
        ],
    },
    170: { // 金蛇鞭
        normal: [
            {skill: "堅如金剛", ranks: {}},
            {skill: "金蛇弦月", ranks: {}},
            {skill: "柔若棉絮", ranks: {}},
        ],
        ur: [
            {skill: "堅如金剛", ranks: {}},
            {skill: "金蛇弦月", ranks: {}},
            {skill: "柔若棉絮", ranks: {}},
        ],
    },
    171: { // 聖霊披風
        normal: [
            {skill: "深紅斗篷", ranks: {}},
            {skill: "祖伝宝物", ranks: {}},
            {skill: "女媧遺産", ranks: {}},
        ],
        ur: [
            {skill: "深紅斗篷", ranks: {}},
            {skill: "祖伝宝物", ranks: {}},
            {skill: "女媧遺産", ranks: {}},
        ],
    },
    172: { // 煉蠱皿
        normal: [
            {skill: "霊葫仙丹", ranks: {}},
            {skill: "蠱卵煉化", ranks: {}},
            {skill: "毒蠱巓峰", ranks: {}},
        ],
        ur: [
            {skill: "霊葫仙丹", ranks: {}},
            {skill: "蠱卵煉化", ranks: {}},
            {skill: "毒蠱巓峰", ranks: {}},
        ],
    },
    173: { // 蜀山武功秘籍
        normal: [
            {skill: "仙風雲体", ranks: {}},
            {skill: "飛龍探雲", ranks: {}},
        ],
    },
    174: { // 龍淵剣
        normal: [
            {skill: "三尺秋水", ranks: {}},
            {skill: "祈福", ranks: {}},
            {skill: "輪廻暴撃", ranks: {}},
        ],
        ur: [
            {skill: "三尺秋水", ranks: {}},
            {skill: "祈福", ranks: {}},
            {skill: "輪廻暴撃", ranks: {}},
        ],
    },
    175: { // 碧月仙裙
        normal: [
            {skill: "但願人長久", ranks: {}},
            {skill: "千里共嬋娟", ranks: {}},
            {skill: "明月幾時有", ranks: {}},
        ],
        ur: [
            {skill: "但願人長久", ranks: {}},
            {skill: "千里共嬋娟", ranks: {}},
            {skill: "明月幾時有", ranks: {}},
        ],
    },
    176: { // 五色線
        normal: [
            {skill: "祈福", ranks: {}},
            {skill: "輪廻暴撃", ranks: {}},
        ],
        ur: [
            {skill: "祈福", ranks: {}},
            {skill: "輪廻暴撃", ranks: {}},
        ],
    },
    177: { // ゲームショウ羽扇
        normal: [
            {skill: "人山人海", ranks: {}},
            {skill: "大展鴻図", ranks: {}},
        ],
    },
    178: { // 同楽会茶葉礼盒
        normal: [
            {skill: "普天同慶", ranks: {}},
            {skill: "茶香四溢󠄀", ranks: {}},
        ],
    },
    179: { // 大紅柘榴石首飾
        normal: [
            {skill: "嬌撃爛漫", ranks: {}},
            {skill: "紅活激成", ranks: {}},
            {skill: "驕傲奮援", ranks: {}},
        ],
        ur: [
            {skill: "嬌撃爛漫", ranks: {}},
            {skill: "紅活激成", ranks: {}},
            {skill: "驕傲奮援", ranks: {}},
        ],
    },
    180: { // 黄天大道旗槍
        normal: [
            {skill: "乱逆黄揚", ranks: {}},
            {skill: "繋衰封妨", ranks: {}},
            {skill: "逆乱躍動", ranks: {}},
        ],
        ur: [
            {skill: "乱逆黄揚", ranks: {}},
            {skill: "繋衰封妨", ranks: {}},
            {skill: "逆乱躍動", ranks: {}},
        ],
    },
    181: { // 躬先越嶺笠兜
        normal: [
            {skill: "耀兵破城", ranks: {"☆0": 1}},
            {skill: "襲城勢撃", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    182: { // 劉家伝来の宝剣
        normal: [
            {skill: "合志健勝", ranks: {"☆0": 1}},
            {skill: "合心軒昂", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    183: { // 白旄乾坤旗
        normal: [
            {skill: "太公極略", ranks: {}},
            {skill: "励封巧導", ranks: {}},
            {skill: "声威師令", ranks: {}},
        ],
        ur: [
            {skill: "太公極略", ranks: {}},
            {skill: "励封巧導", ranks: {}},
            {skill: "声威師令", ranks: {}},
        ],
    },
    184: { // 果勇金銅鎧
        normal: [
            {skill: "進攻信誠", ranks: {}},
            {skill: "堅鎧壮雄", ranks: {}},
            {skill: "繫守連合", ranks: {}},
        ],
        ur: [
            {skill: "進攻信誠", ranks: {}},
            {skill: "堅鎧壮雄", ranks: {}},
            {skill: "繫守連合", ranks: {}},
        ],
    },
    185: { // 報讐克勝冠
        normal: [
            {skill: "包誘堅守", ranks: {}},
            {skill: "速撃確守", ranks: {}},
            {skill: "対衰堅導", ranks: {}},
        ],
        ur: [
            {skill: "包誘堅守", ranks: {}},
            {skill: "速撃確守", ranks: {}},
            {skill: "対衰堅導", ranks: {}},
        ],
    },
    186: { // 孫臏兵法
        normal: [
            {skill: "包誘才気", ranks: {}},
            {skill: "会心強建", ranks: {}},
            {skill: "対衰活導", ranks: {}},
        ],
        ur: [
            {skill: "包誘才気", ranks: {}},
            {skill: "会心強建", ranks: {}},
            {skill: "対衰活導", ranks: {}},
        ],
    },
    187: { // 驍武凶悍大刀
        normal: [
            {skill: "進骨勇力", ranks: {}},
            {skill: "優勢昂揚", ranks: {}},
            {skill: "倒撃躍動", ranks: {}},
        ],
        ur: [
            {skill: "進骨勇力", ranks: {}},
            {skill: "優勢昂揚", ranks: {}},
            {skill: "倒撃躍動", ranks: {}},
        ],
    },
    188: { // 岱斗帽沿兜
        normal: [
            {skill: "猛騎掃滅", ranks: {}},
            {skill: "精騎駆馳", ranks: {}},
        ],
    },
    189: { // 雄俊羽毛扇
        normal: [
            {skill: "明炎才気", ranks: {}},
            {skill: "賢略喝破", ranks: {}},
            {skill: "対衛烈撃", ranks: {}},
        ],
        ur: [
            {skill: "明炎才気", ranks: {}},
            {skill: "賢略喝破", ranks: {}},
            {skill: "対衛烈撃", ranks: {}},
        ],
    },
    190: { // 雄俊光錦袍鎧
        normal: [
            {skill: "明炎堅守", ranks: {}},
            {skill: "賢護躍動", ranks: {}},
            {skill: "対衛盤石", ranks: {}},
        ],
        ur: [
            {skill: "明炎堅守", ranks: {}},
            {skill: "賢護躍動", ranks: {}},
            {skill: "対衛盤石", ranks: {}},
        ],
    },
    191: { // 麒龍志継鎧
        normal: [
            {skill: "才華敏達", ranks: {}},
            {skill: "知勇盤石", ranks: {}},
            {skill: "活発烈撃", ranks: {}},
        ],
        ur: [
            {skill: "才華敏達", ranks: {}},
            {skill: "知勇盤石", ranks: {}},
            {skill: "活発烈撃", ranks: {}},
        ],
    },
    192: { // 武衛虎士刀
        normal: [
            {skill: "虎堅強撃", ranks: {}},
            {skill: "斬騎虎揚", ranks: {}},
            {skill: "武猛煥虎", ranks: {}},
        ],
        ur: [
            {skill: "虎堅強撃", ranks: {}},
            {skill: "斬騎虎揚", ranks: {}},
            {skill: "武猛煥虎", ranks: {}},
        ],
    },
    193: { // 武衛虎侯頭巾
        normal: [
            {skill: "虎堅堅守", ranks: {}},
            {skill: "耐騎不抜", ranks: {}},
            {skill: "守護煥虎", ranks: {}},
        ],
        ur: [
            {skill: "虎堅堅守", ranks: {}},
            {skill: "耐騎不抜", ranks: {}},
            {skill: "守護煥虎", ranks: {}},
        ],
    },
    194: { // 緋紅尖晶石首飾
        normal: [
            {skill: "麗花賢艶", ranks: {}},
            {skill: "才妃絢爛", ranks: {}},
        ],
    },
    195: { // 猛鋭黒革帯
        normal: [
            {skill: "快撃志望", ranks: {}},
            {skill: "制覇撃進", ranks: {}},
            {skill: "堪撃剛勇", ranks: {}},
        ],
        ur: [
            {skill: "快撃志望", ranks: {}},
            {skill: "制覇撃進", ranks: {}},
            {skill: "堪撃剛勇", ranks: {}},
        ],
    },
    196: { // 飛鳥装束
        normal: [
            {skill: "太平烈撃", ranks: {}},
            {skill: "太平盤石", ranks: {}},
            {skill: "霊鳥の眼", ranks: {}},
        ],
    },
    197: { // 張飛の頭巾
        normal: [
            {skill: "堅守喝声", ranks: {}},
            {skill: "剛将調練", ranks: {}},
            {skill: "嵐矛無双", ranks: {}},
        ],
        ur: [
            {skill: "堅守喝声", ranks: {}},
            {skill: "剛将調練", ranks: {}},
            {skill: "嵐矛無双", ranks: {}},
        ],
    },
    198: { // 夏侯惇の眼帯
        normal: [
            {skill: "隻眼統刃", ranks: {}},
            {skill: "瑞牙威武", ranks: {}},
            {skill: "滅尽無双", ranks: {}},
        ],
        ur: [
            {skill: "隻眼統刃", ranks: {}},
            {skill: "瑞牙威武", ranks: {}},
            {skill: "滅尽無双", ranks: {}},
        ],
    },
    199: { // 孫尚香の乾坤圏
        normal: [
            {skill: "飛圏烈翔", ranks: {}},
            {skill: "紅空爛漫", ranks: {}},
            {skill: "明月無双", ranks: {}},
        ],
        ur: [
            {skill: "飛圏烈翔", ranks: {}},
            {skill: "紅空爛漫", ranks: {}},
            {skill: "明月無双", ranks: {}},
        ],
    },
    200: { // 万機相輔冠
        normal: [
            {skill: "文大堅守", ranks: {}},
            {skill: "連繋滞勢", ranks: {}},
            {skill: "才導槍舞", ranks: {}},
        ],
        ur: [
            {skill: "文大堅守", ranks: {}},
            {skill: "連繋滞勢", ranks: {}},
            {skill: "才導槍舞", ranks: {}},
        ],
    },
    201: { // 呂氏春秋
        normal: [
            {skill: "文大才気", ranks: {}},
            {skill: "声威制動", ranks: {}},
            {skill: "堅守槍舞", ranks: {}},
        ],
        ur: [
            {skill: "文大才気", ranks: {}},
            {skill: "声威制動", ranks: {}},
            {skill: "堅守槍舞", ranks: {}},
        ],
    },
    202: { // 三國志40周年の旗
        normal: [
            {skill: "四旬財盛", ranks: {}},
            {skill: "四旬迅翼", ranks: {}},
            {skill: "四旬双威", ranks: {}},
        ],
        ur: [
            {skill: "四旬財盛", ranks: {}},
            {skill: "四旬迅翼", ranks: {}},
            {skill: "四旬双威", ranks: {}},
        ],
    },
    203: { // 三國志40周年の盾
        normal: [
            {skill: "四旬浄護", ranks: {}},
            {skill: "四旬慶輝", ranks: {}},
            {skill: "四旬減衝", ranks: {}},
        ],
        ur: [
            {skill: "四旬浄護", ranks: {}},
            {skill: "四旬慶輝", ranks: {}},
            {skill: "四旬減衝", ranks: {}},
        ],
    },
    204: { // 三國志40周年の書
        normal: [
            {skill: "四旬軍昴", ranks: {}},
            {skill: "四旬疾連", ranks: {}},
            {skill: "四旬三輝", ranks: {}},
        ],
        ur: [
            {skill: "四旬軍昴", ranks: {}},
            {skill: "四旬疾連", ranks: {}},
            {skill: "四旬三輝", ranks: {}},
        ],
    },
    205: { // 遁甲天書
        normal: [
            {skill: "仙方才略", ranks: {"☆0": 1}},
            {skill: "機仙惑活", ranks: {"☆0": 1, "☆1": 2, "☆4": 3, "☆7": 4}},
        ],
    },
    206: { // 冷艶鋸
        normal: [
            {skill: "武閃豪勇", ranks: {}},
            {skill: "破軍乱舞", ranks: {}},
            {skill: "豪心躍動", ranks: {}},
        ],
        ur: [
            {skill: "武閃豪勇", ranks: {}},
            {skill: "破軍乱舞", ranks: {}},
            {skill: "豪心躍動", ranks: {}},
        ],
    },
    207: { // 龍紋護臂甲
        normal: [
            {skill: "武威豪勇", ranks: {}},
            {skill: "突護一体", ranks: {}},
            {skill: "豪心烈撃", ranks: {}},
        ],
        ur: [
            {skill: "武威豪勇", ranks: {}},
            {skill: "突護一体", ranks: {}},
            {skill: "豪心烈撃", ranks: {}},
        ],
    },
    208: { // 大志冠世剣
        normal: [
            {skill: "背栄才気", ranks: {}},
            {skill: "国士激烈", ranks: {}},
            {skill: "帥号躍動", ranks: {}},
        ],
        ur: [
            {skill: "背栄才気", ranks: {}},
            {skill: "国士激烈", ranks: {}},
            {skill: "帥号躍動", ranks: {}},
        ],
    },
    209: { // 武略冠世兜
        normal: [
            {skill: "背栄堅守", ranks: {}},
            {skill: "国士巧導", ranks: {}},
            {skill: "帥号耐撃", ranks: {}},
        ],
        ur: [
            {skill: "背栄堅守", ranks: {}},
            {skill: "国士巧導", ranks: {}},
            {skill: "帥号耐撃", ranks: {}},
        ],
    },
};