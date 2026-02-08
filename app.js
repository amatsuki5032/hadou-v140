const { useState, useEffect } = React;

// データを直接埋め込み（前のバージョンと同じデータを使用）
// EMBEDDED_GENERALS_DATAは外部ファイル(data-all-generals.js)から読み込み
// EMBEDDED_TREASURES_DATAは外部ファイル(data-all-treasures.js)から読み込み
// TABS は config.js から読み込み
// 陣形データ（3×3グリッド、1=配置可能、0=配置不可）
// positions: [row0, row1, row2] 各行は[col0, col1, col2]
// FORMATIONS_TYPES は config.js から読み込み

        // resolveAttendantConflicts → utils.js に移動済み
        // calculateSkillEffects, calculateCombatParameters → calc-engine.js に移動済み
        // convertOldDataFormat → utils.js に移動済み
        
        function App() {
            // ─── 画面制御 ───
            const [viewMode, setViewMode] = useState('formation'); // 'formation' or 'rank'
            const [activeTab, setActiveTab] = useState('main');
            const [rankTab, setRankTab] = useState('general'); // 'general' or 'treasure'
            const [showResetMenu, setShowResetMenu] = useState(false);
            const [expandedRarities, setExpandedRarities] = useState(() => {
                const saved = localStorage.getItem('expandedRarities');
                if (saved) {
                    return JSON.parse(saved);
                }
                return {}; // デフォルトは閉じた状態
            }); // レアリティごとの折りたたみ状態
            const [expandedTreasureCategories, setExpandedTreasureCategories] = useState(() => {
                const saved = localStorage.getItem('expandedTreasureCategories');
                if (saved) {
                    return JSON.parse(saved);
                }
                return {'武器': true, '防具': true, '文物': true}; // デフォルトは全て開いた状態
            }); // 名宝カテゴリごとの折りたたみ状態
            const [showSkillEffects, setShowSkillEffects] = useState({}); // 技能効果表示状態
            
            // ─── おススメフィルタ ───
            const [recommendTargetFormation, setRecommendTargetFormation] = useState(() => {
                const saved = localStorage.getItem('recommendTargetFormation');
                // 有効な部隊キーかチェック
                const validKeys = [
                    'main-0', 'main-1', 'main-2', 'main-3', 'main-4', 'main-5',
                    'city-0', 'city-1', 'city-2',
                    'outpost-0', 'outpost-1', 'outpost-2'
                ];
                if (saved && validKeys.includes(saved)) {
                    return saved;
                }
                return 'main-0'; // デフォルトは主城1
            });
            const [showOnlyRecommendedGenerals, setShowOnlyRecommendedGenerals] = useState(false);
            const [showOnlyRecommendedTreasures, setShowOnlyRecommendedTreasures] = useState(false);
            
            // ─── プロファイル ───
            const [currentProfile, setCurrentProfile] = useState(0); // 0-4
            const [profileNames, setProfileNames] = useState(['プロファイル1', 'プロファイル2', 'プロファイル3', 'プロファイル4', 'プロファイル5']);
            const [profileData, setProfileData] = useState({
                0: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                1: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                2: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                3: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                4: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}}
            });
            
            // ─── 武将・名宝データ ───
            const [generals, setGenerals] = useState([]);
            const [treasures, setTreasures] = useState([]);
            
            // ─── 編制パターン ───
            const [formationPatterns, setFormationPatterns] = useState(() => {
                const saved = localStorage.getItem('formationPatterns');
                let migratedData = null;
                
                if (saved) {
                    const parsedData = JSON.parse(saved);
                    
                    // マイグレーション: 5個から10個に拡張
                    const defaultPattern = { name: "", formations: {}, collapsedFormations: {}, allowDuplicates: false };
                    let needsMigration = false;
                    
                    for (let i = 0; i < 10; i++) {
                        if (!parsedData[i]) {
                            // 存在しない編制パターンを追加
                            parsedData[i] = {
                                ...defaultPattern,
                                name: `編制${i + 1}`
                            };
                            needsMigration = true;
                        } else if (!parsedData[i].hasOwnProperty('allowDuplicates')) {
                            // allowDuplicatesがない場合は追加
                            parsedData[i].allowDuplicates = false;
                            needsMigration = true;
                        }
                    }
                    
                    // マイグレーションした場合は即座に保存
                    if (needsMigration) {
                        localStorage.setItem('formationPatterns', JSON.stringify(parsedData));
                    }
                    
                    return parsedData;
                }
                // デフォルト: 10個の空パターン
                return {
                    0: { name: "編制1", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    1: { name: "編制2", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    2: { name: "編制3", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    3: { name: "編制4", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    4: { name: "編制5", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    5: { name: "編制6", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    6: { name: "編制7", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    7: { name: "編制8", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    8: { name: "編制9", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                    9: { name: "編制10", formations: {}, collapsedFormations: {}, allowDuplicates: false }
                };
            });
            
            // ─── プロファイル別編制 ───
            const [profileFormations, setProfileFormations] = useState(() => {
                const saved = localStorage.getItem('profileFormations');
                
                if (saved) {
                    return JSON.parse(saved);
                }
                
                // 初回起動時: プロファイル1（formationPatterns）をコピーして初期化
                // ※この時点ではformationPatternsは未初期化なので、useEffect内で処理
                const empty = {};
                for (let i = 1; i < 5; i++) {
                    empty[`profile${i}`] = {
                        0: { name: "編制1", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        1: { name: "編制2", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        2: { name: "編制3", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        3: { name: "編制4", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        4: { name: "編制5", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        5: { name: "編制6", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        6: { name: "編制7", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        7: { name: "編制8", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        8: { name: "編制9", formations: {}, collapsedFormations: {}, allowDuplicates: false },
                        9: { name: "編制10", formations: {}, collapsedFormations: {}, allowDuplicates: false }
                    };
                }
                return empty;
            });
            
            // 初回起動時: プロファイル1の内容をプロファイル2〜5にコピー
            useEffect(() => {
                const hasInitialized = localStorage.getItem('profileFormationsInitialized');
                if (!hasInitialized && formationPatterns) {
                    const updated = {};
                    for (let i = 1; i < 5; i++) {
                        updated[`profile${i}`] = JSON.parse(JSON.stringify(formationPatterns));
                    }
                    setProfileFormations(updated);
                    localStorage.setItem('profileFormations', JSON.stringify(updated));
                    localStorage.setItem('profileFormationsInitialized', 'true');
                }
            }, [formationPatterns]);
            
            // Undo用: 直前の編制状態を保存
            const [undoHistory, setUndoHistory] = useState(null);
            
            const [activePattern, setActivePattern] = useState(() => {
                const saved = localStorage.getItem('activePattern');
                return saved ? parseInt(saved) : 0;
            });
            
            // 現在アクティブな編制のformationsとcollapsedFormationsを取得
            const getCurrentFormationPatterns = () => {
                if (currentProfile === 0) {
                    // プロファイル1はformationPatternsを参照
                    return formationPatterns;
                } else {
                    // プロファイル2〜5はprofileFormationsを参照
                    return profileFormations[`profile${currentProfile}`] || formationPatterns;
                }
            };
            
            const currentFormationPatterns = getCurrentFormationPatterns();
            const formations = currentFormationPatterns[activePattern]?.formations || {};
            const collapsedFormations = currentFormationPatterns[activePattern]?.collapsedFormations || {};
            
            // formationsを更新する関数（Undo用に変更前の状態を保存）
            const setFormations = (updater) => {
                const updateFunction = (prev) => {
                    // 変更前の状態を保存
                    setUndoHistory({
                        pattern: activePattern,
                        formations: JSON.parse(JSON.stringify(prev[activePattern].formations))
                    });
                    
                    const newFormations = typeof updater === 'function' ? updater(prev[activePattern].formations) : updater;
                    return {
                        ...prev,
                        [activePattern]: {
                            ...prev[activePattern],
                            formations: newFormations
                        }
                    };
                };
                
                if (currentProfile === 0) {
                    // プロファイル1はformationPatternsを更新
                    setFormationPatterns(updateFunction);
                } else {
                    // プロファイル2〜5はprofileFormationsを更新
                    setProfileFormations(prev => ({
                        ...prev,
                        [`profile${currentProfile}`]: updateFunction(prev[`profile${currentProfile}`])
                    }));
                }
            };
            
            // collapsedFormationsを更新する関数
            const setCollapsedFormations = (updater) => {
                const updateFunction = (prev) => {
                    const newCollapsed = typeof updater === 'function' ? updater(prev[activePattern].collapsedFormations) : updater;
                    return {
                        ...prev,
                        [activePattern]: {
                            ...prev[activePattern],
                            collapsedFormations: newCollapsed
                        }
                    };
                };
                
                if (currentProfile === 0) {
                    // プロファイル1はformationPatternsを更新
                    setFormationPatterns(updateFunction);
                } else {
                    // プロファイル2〜5はprofileFormationsを更新
                    setProfileFormations(prev => ({
                        ...prev,
                        [`profile${currentProfile}`]: updateFunction(prev[`profile${currentProfile}`])
                    }));
                }
            };
            
            // プロファイル1から現在の編制をコピー
            const copyFromProfile1 = () => {
                if (currentProfile === 0) {
                    alert('プロファイル1では実行できません');
                    return;
                }
                
                if (!confirm(`プロファイル1の編制${activePattern + 1}をコピーしますか？\n現在の編制は上書きされます。`)) {
                    return;
                }
                
                // プロファイル1の編制はformationPatternsから取得
                if (!formationPatterns || !formationPatterns[activePattern]) {
                    alert('プロファイル1の編制が見つかりません');
                    return;
                }
                
                setProfileFormations(prev => ({
                    ...prev,
                    [`profile${currentProfile}`]: {
                        ...prev[`profile${currentProfile}`],
                        [activePattern]: JSON.parse(JSON.stringify(formationPatterns[activePattern]))
                    }
                }));
                
                alert('プロファイル1からコピーしました');
            };
            
            // Undo: 直前の操作を戻す
            const handleUndo = () => {
                if (!undoHistory) {
                    alert('戻す操作がありません');
                    return;
                }
                
                const updateFunction = (prev) => {
                    const restored = {
                        ...prev,
                        [undoHistory.pattern]: {
                            ...prev[undoHistory.pattern],
                            formations: undoHistory.formations
                        }
                    };
                    return restored;
                };
                
                if (currentProfile === 0) {
                    // プロファイル1
                    setFormationPatterns(updateFunction);
                } else {
                    // プロファイル2〜5
                    setProfileFormations(prev => ({
                        ...prev,
                        [`profile${currentProfile}`]: updateFunction(prev[`profile${currentProfile}`])
                    }));
                }
                
                // 履歴をクリア
                setUndoHistory(null);
            };
            
            const [loading, setLoading] = useState(true);
            // ─── D&D状態 ───
            const [draggedGeneral, setDraggedGeneral] = useState(null);
            const [draggedTreasure, setDraggedTreasure] = useState(null);
            
            // 編制パターンメニューの開閉状態
            const [openPatternMenu, setOpenPatternMenu] = useState(null);
            const [showCopySubmenu, setShowCopySubmenu] = useState(false);
            
            // 部隊テンプレート
            const [formationTemplates, setFormationTemplates] = useState(() => {
                const saved = localStorage.getItem('formationTemplates');
                return saved ? JSON.parse(saved) : {};
            });
            
            // ─── テンプレートダイアログ ───
            const [showTemplateSaveDialog, setShowTemplateSaveDialog] = useState(null); // formationKey or null
            const [showTemplateLoadDialog, setShowTemplateLoadDialog] = useState(null); // formationKey or null
            const [templateName, setTemplateName] = useState('');
            const [selectedTemplate, setSelectedTemplate] = useState('');
            const [overwriteGenerals, setOverwriteGenerals] = useState(true);
            const [overwriteTreasures, setOverwriteTreasures] = useState(true);
            
            
            
            // 画像表示コンポーネント
            const ItemImage = ({ src, alt, rarity }) => {
                const [error, setError] = useState(false);
                const [imgSrc, setImgSrc] = useState(src);
                
                // srcが変わったらリセット
                React.useEffect(() => {
                    setImgSrc(src);
                    setError(false);
                }, [src]);
                
                // 画像表示がOFFの場合は何も表示しない
                if (!showImages) {
                    return null;
                }
                
                // エラー時はplaceholder.pngを表示
                const handleError = () => {
                    if (imgSrc !== './icons/placeholder.png') {
                        setImgSrc('./icons/placeholder.png');
                    }
                };
                
                return (
                    <img
                        src={imgSrc}
                        alt={alt}
                        className="item-icon"
                        onError={handleError}
                        loading="lazy"
                        data-rarity={rarity}
                    />
                );
            };
            
            const SlotImage = ({ src, alt }) => {
                const [error, setError] = useState(false);
                
                if (!src || error) {
                    return <div className="slot-image-placeholder" />;
                }
                
                return (
                    <img
                        src={src}
                        alt={alt}
                        className="slot-image slot-general-image"
                        onError={() => setError(true)}
                        loading="lazy"
                    />
                );
            };

            
            // 画像設定モーダル
            // ImageSettingsModal → components-modals.js に移動済み

            // ─── 画像・ヘルプ表示 ───
            const [showHelpModal, setShowHelpModal] = useState(false);
            // 画像URL設定
            const [showImageSettings, setShowImageSettings] = useState(false);
            const [imageUrls, setImageUrls] = useState({});
            const [showImages, setShowImages] = useState(() => {
                const saved = localStorage.getItem('showImages');
                return saved !== null ? JSON.parse(saved) : true; // デフォルトはON
            });

            const [contextHelpType, setContextHelpType] = useState(null); // 'general', 'treasure', 'pattern', 'template'
            
            // ヘルプ表示設定（localStorage保存）
            const [showContextHelp, setShowContextHelp] = useState(() => {
                const saved = localStorage.getItem('showContextHelp');
                return saved !== null ? JSON.parse(saved) : true; // デフォルトはON
            });
            
            // ヘルプ表示設定を保存
            useEffect(() => {
                localStorage.setItem('showContextHelp', JSON.stringify(showContextHelp));
            }, [showContextHelp]);
            
            // ─── 武将フィルタ ───
            const [unitTypeFilter, setUnitTypeFilter] = useState([]);
            const [factionFilter, setFactionFilter] = useState([]);
            const [attendantFilter, setAttendantFilter] = useState([]);
            const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
            
            // ─── 名宝フィルタ ───
            const [treasureWeaponFilter, setTreasureWeaponFilter] = useState([]);
            const [treasureFactionFilter, setTreasureFactionFilter] = useState([]);
            const [showOnlyFavoriteTreasures, setShowOnlyFavoriteTreasures] = useState(false);
            
            // ─── お気に入り ───
            const [favoriteGenerals, setFavoriteGenerals] = useState(() => {
                const saved = localStorage.getItem('favoriteGenerals');
                return saved ? JSON.parse(saved) : [];
            });
            
            // お気に入り名宝（localStorage保存）
            const [favoriteTreasures, setFavoriteTreasures] = useState(() => {
                const saved = localStorage.getItem('favoriteTreasures');
                return saved ? JSON.parse(saved) : [];
            });
            
            // 保留セット（武将と名宝をセットで保管）
            const [pendingSets, setPendingSets] = useState(() => {
                const saved = localStorage.getItem('pendingSets');
                return saved ? JSON.parse(saved) : [];
            });
            
            // 設定画面用の検索
            const [rankSearchTerm, setRankSearchTerm] = useState('');
            
            // ─── パネル表示制御 ───
            const [showGeneralsPanel, setShowGeneralsPanel] = useState(true);
            const [showTreasuresPanel, setShowTreasuresPanel] = useState(true);
            const [showPendingPanel, setShowPendingPanel] = useState(true);
            
            // ─── ソート設定 ───
            const [generalsSortOrder, setGeneralsSortOrder] = useState('affinity');
            
            // 相性順のソート方向（desc: 降順、asc: 昇順）
            const [affinitySortDirection, setAffinitySortDirection] = useState('asc');
            
            // ─── Google Drive連携 ───
            const [showGDriveSetup, setShowGDriveSetup] = useState(false);
            const [gdriveEnabled, setGdriveEnabled] = useState(false);
            const [gdriveLastSync, setGdriveLastSync] = useState(null);
            
            // ─── 使用可能/不使用タブ ───
            const [activeGeneralsTab, setActiveGeneralsTab] = useState('active');
            
            // 不使用武将リスト
            const [disabledGenerals, setDisabledGenerals] = useState([]);
            
            // 名宝タブ（使用可能 / 不使用）
            const [activeTreasuresTab, setActiveTreasuresTab] = useState('active');
            
            // 不使用名宝リスト
            const [disabledTreasures, setDisabledTreasures] = useState([]);
            
            // 現在のプロファイルのランクデータを取得するヘルパー
            const generalStarRank = profileData[currentProfile].generalStarRank;
            const treasureForgeRank = profileData[currentProfile].treasureForgeRank;
            const treasureURStatus = profileData[currentProfile].treasureURStatus;
            
            // データ読み込み
            useEffect(() => {
                setGenerals(EMBEDDED_GENERALS_DATA.filter(g => g.name !== 'nan'));
                
                // 武将名から勢力マッピングを作成
                const generalToFactionMap = {};
                EMBEDDED_GENERALS_DATA.forEach(g => {
                    if (!g.name || g.name === 'nan') return;
                    
                    // 既に同じ名前の武将が登録されている場合、相性値が0でない方を優先
                    if (generalToFactionMap[g.name] && g.affinity === 0) {
                        return; // 相性0はスキップ
                    }
                    
                    const affinity = g.affinity;
                    let faction = 'イベント';
                    
                    if (affinity === 0) faction = '他';
                    else if (affinity >= 1 && affinity <= 9) faction = '他';
                    else if (affinity >= 20 && affinity <= 49) faction = '魏';
                    else if (affinity >= 65 && affinity <= 89) faction = '蜀';
                    else if (affinity >= 90 && affinity <= 119) faction = '袁紹';
                    else if (affinity >= 120 && affinity <= 139) faction = '呉';
                    else if (affinity >= 140 && affinity <= 149) faction = '他';
                    
                    generalToFactionMap[g.name] = faction;
                });
                
                // イベント名・コラボ名のリスト（武将として扱わない）
                const eventNames = ['異民族', '謎', 'セプテム', 'ニコル', '軒轅剣参', '仙剣奇侠伝', '繁体字版', '黄巾', '横山', 'ORIGINS', 'イベント', '利権', 'コラボ'];
                
                // 名宝に勢力タグを追加（related武将の相性値から自動判定）
                // 名宝データの factions フィールドは完全に無視
                const treasuresWithFaction = EMBEDDED_TREASURES_DATA.map(t => {
                    const related = t.related;
                    
                    // related武将がいる場合は、その武将の勢力のみ
                    // ただし、イベント名・コラボ名は除外
                    if (related && !eventNames.includes(related) && generalToFactionMap[related]) {
                        const faction = generalToFactionMap[related];
                        return {...t, faction, factions: [faction]};
                    }
                    
                    // related武将がいない、またはイベント名の場合は「イベント」
                    return {...t, faction: 'イベント', factions: ['イベント']};
                });
                
                setTreasures(treasuresWithFaction);
                
                // 初期部隊データ
                const initialFormations = {};
                TABS.forEach(tab => {
                    for (let i = 0; i < tab.count; i++) {
                        const key = `${tab.id}-${i}`;
                        initialFormations[key] = {
                            formationType: '基本陣形',
                            slots: {
                                '主将': null,
                                '副将1': null,
                                '副将2': null,
                                '補佐1': null,
                                '補佐2': null
                            },
                            attendants: {},
                            treasures: Array(6).fill(null)
                        };
                    }
                });
                
                // 編制パターンが空の場合、初期データを設定
                setFormationPatterns(prev => {
                    const updated = {...prev};
                    [0, 1, 2, 3, 4].forEach(patternIndex => {
                        if (!updated[patternIndex].formations || Object.keys(updated[patternIndex].formations).length === 0) {
                            updated[patternIndex].formations = {...initialFormations};
                        }
                    });
                    return updated;
                });
                
                // 既存の編制データがあれば、編制1にマイグレーション
                const savedFormations = localStorage.getItem('formations');
                if (savedFormations && !localStorage.getItem('formationPatterns')) {
                    const oldFormations = JSON.parse(savedFormations);
                    setFormationPatterns(prev => ({
                        ...prev,
                        0: {
                            ...prev[0],
                            formations: oldFormations
                        }
                    }));
                }
                
                // localStorageから保存データを読み込み
                try {
                    // プロファイルデータを読み込み
                    const savedProfileData = localStorage.getItem('profileData');
                    if (savedProfileData) {
                        setProfileData(JSON.parse(savedProfileData));
                    }
                    
                    // プロファイル名を読み込み
                    const savedProfileNames = localStorage.getItem('profileNames');
                    if (savedProfileNames) {
                        setProfileNames(JSON.parse(savedProfileNames));
                    }
                    
                    // 現在のプロファイル番号を読み込み
                    const savedCurrentProfile = localStorage.getItem('currentProfile');
                    if (savedCurrentProfile) {
                        setCurrentProfile(parseInt(savedCurrentProfile));
                    }
                    
                    // 不使用武将リスト
                    const savedDisabledGenerals = localStorage.getItem('disabledGenerals');
                    if (savedDisabledGenerals) {
                        setDisabledGenerals(JSON.parse(savedDisabledGenerals));
                    }
                    
                    // 不使用名宝リスト
                    const savedDisabledTreasures = localStorage.getItem('disabledTreasures');
                    if (savedDisabledTreasures) {
                        setDisabledTreasures(JSON.parse(savedDisabledTreasures));
                    }
                } catch (e) {
                    console.error('Failed to load saved data:', e);
                }
                
                setLoading(false);
            }, []);
            
            // 画像URL読み込み
            useEffect(() => {
                const savedImageUrls = localStorage.getItem('imageUrls');
                if (savedImageUrls) {
                    try {
                        setImageUrls(JSON.parse(savedImageUrls));
                    } catch (e) {
                        console.error('Failed to load image URLs:', e);
                    }
                }
            }, []);
            
            // 画像URL保存
            useEffect(() => {
                if (Object.keys(imageUrls).length > 0) {
                    localStorage.setItem('imageUrls', JSON.stringify(imageUrls));
                }
            }, [imageUrls]);
            
            // 画像表示ON/OFF保存
            useEffect(() => {
                localStorage.setItem('showImages', JSON.stringify(showImages));
            }, [showImages]);
            
            // プロファイルデータをlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('profileData', JSON.stringify(profileData));
            }, [profileData]);
            
            // プロファイル名をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('profileNames', JSON.stringify(profileNames));
            }, [profileNames]);
            
            // 現在のプロファイル番号をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('currentProfile', currentProfile.toString());
            }, [currentProfile]);
            
            // 編制パターンをlocalStorageに保存
            useEffect(() => {
                if (Object.keys(formationPatterns).length > 0) {
                    localStorage.setItem('formationPatterns', JSON.stringify(formationPatterns));
                }
            }, [formationPatterns]);
            
            // プロファイル別編制をlocalStorageに保存
            useEffect(() => {
                if (Object.keys(profileFormations).length > 0) {
                    localStorage.setItem('profileFormations', JSON.stringify(profileFormations));
                }
            }, [profileFormations]);
            
            // アクティブな編制パターン番号を保存
            useEffect(() => {
                localStorage.setItem('activePattern', activePattern.toString());
            }, [activePattern]);
            
            // 部隊テンプレートをlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('formationTemplates', JSON.stringify(formationTemplates));
            }, [formationTemplates]);
            
            // 不使用武将・名宝をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('disabledGenerals', JSON.stringify(disabledGenerals));
            }, [disabledGenerals]);
            
            useEffect(() => {
                localStorage.setItem('disabledTreasures', JSON.stringify(disabledTreasures));
            }, [disabledTreasures]);
            
            // 保留セットをlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('pendingSets', JSON.stringify(pendingSets));
            }, [pendingSets]);
            
            // 名宝カテゴリの折りたたみ状態をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('expandedTreasureCategories', JSON.stringify(expandedTreasureCategories));
            }, [expandedTreasureCategories]);
            
            // 武将レアリティの折りたたみ状態をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('expandedRarities', JSON.stringify(expandedRarities));
            }, [expandedRarities]);
            
            // おススメフィルタの対象部隊をlocalStorageに保存
            useEffect(() => {
                localStorage.setItem('recommendTargetFormation', recommendTargetFormation);
            }, [recommendTargetFormation]);
            
            // 対象部隊が折りたたまれた場合、次の開いている部隊に自動切り替え
            useEffect(() => {
                // 対象部隊が折りたたまれているかチェック
                if (collapsedFormations[recommendTargetFormation]) {
                    // 全部隊のキーリスト（表示順）
                    const allFormationKeys = [
                        'main-0', 'main-1', 'main-2', 'main-3', 'main-4', 'main-5',
                        'city-0', 'city-1', 'city-2',
                        'outpost-0', 'outpost-1', 'outpost-2'
                    ];
                    
                    // 開いている部隊を探す
                    const openFormations = allFormationKeys.filter(key => !collapsedFormations[key]);
                    
                    if (openFormations.length > 0) {
                        // 最初の開いている部隊に切り替え
                        setRecommendTargetFormation(openFormations[0]);
                    }
                }
            }, [collapsedFormations, recommendTargetFormation]);
            
            // メニュー外クリックで閉じる
            useEffect(() => {
                const handleClickOutside = () => {
                    if (openPatternMenu !== null) {
                        setOpenPatternMenu(null);
                        setShowCopySubmenu(false);
                    }
                };
                document.addEventListener('click', handleClickOutside);
                return () => document.removeEventListener('click', handleClickOutside);
            }, [openPatternMenu]);
            
            // 使用済み武将のチェック
            const isGeneralUsed = (generalId, generalName, generalRarity) => {
                return Object.values(formations).some(formation => {
                    // 主将・副将・補佐をチェック
                    const usedInSlots = Object.values(formation.slots || {}).some(slot => 
                        slot && slot.id === generalId && slot.rarity === generalRarity
                    );
                    // 侍従をチェック
                    const usedInAttendants = formation.attendants && Object.values(formation.attendants).some(attendant => 
                        attendant && attendant.id === generalId && attendant.rarity === generalRarity
                    );
                    // 参軍をチェック
                    const usedInAdvisors = formation.advisors && Object.values(formation.advisors).some(advisor => 
                        advisor && advisor.id === generalId && advisor.rarity === generalRarity
                    );
                    return usedInSlots || usedInAttendants || usedInAdvisors;
                });
            };
            
            // 武将が不使用リストにあるかチェック
            const isGeneralDisabled = (general) => {
                return disabledGenerals.some(g => 
                    g.id === general.id && g.rarity === general.rarity && g.name === general.name
                );
            };
            
            // 武将を不使用リストに移動
            const moveToDisabled = (general) => {
                if (!isGeneralDisabled(general)) {
                    // 編制から削除
                    if (isGeneralUsed(general.id, general.name, general.rarity)) {
                        setFormations(prev => {
                            const newFormations = { ...prev };
                            Object.keys(newFormations).forEach(key => {
                                Object.keys(newFormations[key].slots).forEach(slotName => {
                                    const slot = newFormations[key].slots[slotName];
                                    if (slot && slot.id === general.id && slot.rarity === general.rarity) {
                                        newFormations[key].slots[slotName] = null;
                                    }
                                });
                            });
                            return newFormations;
                        });
                    }
                    // 不使用リストに追加
                    setDisabledGenerals(prev => [...prev, general]);
                }
            };
            
            // 武将を不使用リストから復帰
            const moveToActive = (general) => {
                setDisabledGenerals(prev => 
                    prev.filter(g => !(g.id === general.id && g.rarity === general.rarity && g.name === general.name))
                );
            };
            
            // 名宝が使用済みかチェック
            const isTreasureUsed = (treasureId, treasureName) => {
                return Object.values(formations).some(formation => 
                    formation.treasures && Object.values(formation.treasures).some(treasure => 
                        treasure && (treasure.id === treasureId || treasure.name === treasureName)
                    )
                );
            };
            
            // 名宝を編制から削除
            const removeTreasureFromFormations = (treasureId, treasureName) => {
                setFormations(prev => {
                    const newFormations = { ...prev };
                    Object.keys(newFormations).forEach(key => {
                        if (newFormations[key].treasures) {
                            Object.keys(newFormations[key].treasures).forEach(slotKey => {
                                const treasure = newFormations[key].treasures[slotKey];
                                if (treasure && (treasure.id === treasureId || treasure.name === treasureName)) {
                                    newFormations[key].treasures[slotKey] = null;
                                }
                            });
                        }
                    });
                    return newFormations;
                });
            };
            
            // UR武将が既に使用されているかチェック
            const isURGeneralUsed = (generalId) => {
                return Object.values(formations).some(formation => {
                    // 主将・副将・補佐をチェック
                    const usedInSlots = formation.slots && Object.values(formation.slots).some(general => 
                        general && general.rarity === 'UR' && general.id === generalId
                    );
                    // 侍従をチェック
                    const usedInAttendants = formation.attendants && Object.values(formation.attendants).some(attendant => 
                        attendant && attendant.rarity === 'UR' && attendant.id === generalId
                    );
                    return usedInSlots || usedInAttendants;
                });
            };
            
            // 名宝が不使用リストにあるかチェック
            const isTreasureDisabled = (treasure) => {
                return disabledTreasures.some(t => t.id === treasure.id && t.name === treasure.name);
            };
            
            // 名宝を不使用リストに移動
            const moveTreasureToDisabled = (treasure) => {
                if (!isTreasureDisabled(treasure)) {
                    // 編制から削除
                    if (isTreasureUsed(treasure.id, treasure.name)) {
                        setFormations(prev => {
                            const newFormations = { ...prev };
                            Object.keys(newFormations).forEach(key => {
                                if (newFormations[key].treasures) {
                                    Object.keys(newFormations[key].treasures).forEach(treasureKey => {
                                        const t = newFormations[key].treasures[treasureKey];
                                        if (t && (t.id === treasure.id || t.name === treasure.name)) {
                                            newFormations[key].treasures[treasureKey] = null;
                                        }
                                    });
                                }
                            });
                            return newFormations;
                        });
                    }
                    // 不使用リストに追加
                    setDisabledTreasures(prev => [...prev, treasure]);
                }
            };
            
            // 名宝を不使用リストから復帰
            const moveTreasureToActive = (treasure) => {
                setDisabledTreasures(prev => 
                    prev.filter(t => !(t.id === treasure.id && t.name === treasure.name))
                );
            };
            
            // 画像URL取得
            const getImageUrl = (type, id, rarity, name) => {
                // type: 'general' or 'treasure'
                if (type === 'general') {
                    return getGeneralIconPath({ rarity, name });
                } else if (type === 'treasure') {
                    // 名宝の場合、UR化状態をチェック
                    const isUR = isTreasureUR(id);
                    return getTreasureIconPath({ name, isUR });
                }
                return '/icons/placeholder.png';
            };
            
            // 画像URL一括設定
            const saveImageUrls = (urls) => {
                setImageUrls(urls);
            };
            // 武将の将星ランクを取得
            const getGeneralStarRank = (general) => {
                const key = `${general.id}-${general.rarity}-${general.name}`;
                return generalStarRank[key] || 0;
            };
            
            // 武将の将星ランクを設定
            const setGeneralStar = (general, rank) => {
                const key = `${general.id}-${general.rarity}-${general.name}`;
                setProfileData(prev => ({
                    ...prev,
                    [currentProfile]: {
                        ...prev[currentProfile],
                        generalStarRank: {
                            ...prev[currentProfile].generalStarRank,
                            [key]: rank
                        }
                    }
                }));
            };
            
            // 勢力タグ定義（相性値の中心±10）
            const FACTION_TAGS = [
                { name: '董卓', center: 0, color: 'var(--bordeaux-border)' },
                { name: '張角', center: 7, color: 'var(--text-muted)' },
                { name: '魏', center: 25, color: 'var(--accent-hover)' },
                { name: '蜀', center: 75, color: 'var(--success)' },
                { name: '袁紹', center: 101, color: 'var(--faction-yuan)' },
                { name: '呉', center: 125, color: 'var(--danger)' },
                { name: '呂布', center: 145, color: 'var(--stat-politics)' }
            ];
            
            // 相性値から勢力タグを取得（循環考慮、0-149で150=0）
            const getFactionTags = (affinity) => {
                const tags = [];
                FACTION_TAGS.forEach(faction => {
                    // 中心からの距離を計算（循環考慮）
                    const diff = Math.abs(affinity - faction.center);
                    const circularDiff = Math.min(diff, 150 - diff);
                    
                    if (circularDiff <= 10) {
                        tags.push(faction.name);
                    }
                });
                return tags;
            };
            
            // お気に入り武将の切り替え
            const toggleFavorite = (general) => {
                const key = `${general.id}-${general.rarity}-${general.name}`;
                setFavoriteGenerals(prev => {
                    const newFavorites = prev.includes(key)
                        ? prev.filter(k => k !== key)
                        : [...prev, key];
                    localStorage.setItem('favoriteGenerals', JSON.stringify(newFavorites));
                    return newFavorites;
                });
            };
            
            // お気に入りかチェック
            const isFavorite = (general) => {
                const key = `${general.id}-${general.rarity}-${general.name}`;
                return favoriteGenerals.includes(key);
            };
            
            // 名宝のお気に入り切り替え
            const toggleFavoriteTreasure = (treasure) => {
                const key = `${treasure.id}-${treasure.name}`;
                setFavoriteTreasures(prev => {
                    const newFavorites = prev.includes(key)
                        ? prev.filter(k => k !== key)
                        : [...prev, key];
                    localStorage.setItem('favoriteTreasures', JSON.stringify(newFavorites));
                    return newFavorites;
                });
            };
            
            // 名宝がお気に入りかチェック
            const isFavoriteTreasure = (treasure) => {
                const key = `${treasure.id}-${treasure.name}`;
                return favoriteTreasures.includes(key);
            };

            // 名宝の鍛錬ランクを取得
            const getTreasureForgeRank = (treasureId) => {
                return treasureForgeRank[treasureId] || 0;
            };
            
            // 名宝の鍛錬ランクを設定
            const setTreasureForge = (treasureId, rank) => {
                setProfileData(prev => ({
                    ...prev,
                    [currentProfile]: {
                        ...prev[currentProfile],
                        treasureForgeRank: {
                            ...prev[currentProfile].treasureForgeRank,
                            [treasureId]: rank
                        }
                    }
                }));
            };
            
            // 名宝のUR化状態を切り替え
            const toggleTreasureUR = (treasureId) => {
                setProfileData(prev => ({
                    ...prev,
                    [currentProfile]: {
                        ...prev[currentProfile],
                        treasureURStatus: {
                            ...prev[currentProfile].treasureURStatus,
                            [treasureId]: !prev[currentProfile].treasureURStatus[treasureId]
                        }
                    }
                }));
            };
            
            // 名宝がUR化されているかチェック
            const isTreasureUR = (treasureId) => {
                return treasureURStatus[treasureId] || false;
            };

            // ─── D&Dハンドラ（handlers-dnd.js） ───
            const {
                handleDragStart, handleSlotDragStart, handleAttendantDragStart,
                handleTreasureDragStart, handleTreasureSlotDragStart, handleAdvisorDragStart,
                handleDrop, handleAttendantDrop, handleAdvisorDrop, handleTreasureDrop,
                handleRemoveGeneral, handleRemoveAttendant, handleRemoveAdvisor, handleRemoveTreasure,
                autoAssignLRGeneral, autoAssignURGeneral, autoAssignTreasure,
                handleGeneralDoubleClick
            } = createDndHandlers({
                formations, treasures, activeTab,
                draggedGeneral, draggedTreasure,
                collapsedFormations, recommendTargetFormation,
                setFormations, setDraggedGeneral, setDraggedTreasure,
                isGeneralUsed, isTreasureUsed, isURGeneralUsed
            });

            // ─── テンプレート・パターン管理（handlers-template.js） ───
            const {
                saveFormationTemplate, executeSaveTemplate,
                loadFormationTemplate, executeLoadTemplate, deleteTemplate,
                renamePattern, resetPattern, toggleDuplicateCheck, copyFromPattern
            } = createTemplateHandlers({
                formations, treasures,
                formationPatterns, activePattern, currentProfile,
                formationTemplates, collapsedFormations,
                templateName, selectedTemplate,
                overwriteGenerals, overwriteTreasures,
                showTemplateSaveDialog, showTemplateLoadDialog,
                setFormations, setFormationPatterns,
                setFormationTemplates, setOpenPatternMenu,
                setTemplateName, setSelectedTemplate,
                setOverwriteGenerals, setOverwriteTreasures,
                setShowTemplateSaveDialog, setShowTemplateLoadDialog
            });

            // ─── データ入出力（data-io.js） ───
            const {
                exportAllData, importAllData, saveToGoogleDrive, loadFromGoogleDrive,
                exportData, importData, exportSingleFormation, importSingleFormation,
                exportProfile, importProfile, resetAllData, resetFormations
            } = createDataIO({
                formations, generals, treasures, activeTab,
                formationPatterns, activePattern, currentProfile,
                profileData, profileNames, profileFormations,
                favoriteGenerals, favoriteTreasures,
                disabledGenerals, disabledTreasures,
                pendingSets, formationTemplates,
                gdriveLastSync, collapsedFormations,
                setFormations, setFormationPatterns, setProfileFormations,
                setActivePattern, setCurrentProfile,
                setProfileData, setProfileNames,
                setFavoriteGenerals, setFavoriteTreasures,
                setDisabledGenerals, setDisabledTreasures,
                setPendingSets, setFormationTemplates,
                setGdriveLastSync,
                getCurrentFormationPatterns
            });

            // 部隊の技能効果を集計（calc-engine.js のラッパー）
            const calcSkillEffects = (formationKey) => {
                return calculateSkillEffects(formations[formationKey], getGeneralStarRank);
            };
            
            // 部隊の戦闘パラメータを計算（calc-engine.js のラッパー）
            const calcCombatParams = (formationKey) => {
                return calculateCombatParameters(formations[formationKey], getGeneralStarRank);
            };
            
            // 部隊をリセット
            const resetFormation = (formationKey) => {
                if (confirm('この部隊の全データ（武将・侍従・名宝・参軍）をリセットしますか？')) {
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            slots: { 主将: null, 副将1: null, 副将2: null, 補佐1: null, 補佐2: null },
                            attendants: { 主将: null, 副将1: null, 副将2: null, 補佐1: null, 補佐2: null },
                            treasures: Array(6).fill(null),
                            advisors: { leadership: null, attack: null, intelligence: null, politics: null, charm: null },
                            formationType: prev[formationKey]?.formationType || '基本陣形'
                        }
                    }));
                }
            };
            
            // 部隊の折りたたみ状態を切り替え
            const toggleFormationCollapse = (formationKey) => {
                setCollapsedFormations(prev => {
                    const newCollapsed = {
                        ...prev,
                        [formationKey]: !prev[formationKey]
                    };
                    
                    // 部隊を開いた（折りたたみ解除した）場合、おススメ部隊に設定
                    if (prev[formationKey]) {
                        setRecommendTargetFormation(formationKey);
                    }
                    
                    return newCollapsed;
                });
            };
            // 陣形変更
            // フィルター適用
            const filteredGenerals = generals.filter(g => {
                // 不使用リストにある武将は除外
                if (isGeneralDisabled(g)) return false;
                if (unitTypeFilter.length > 0 && !unitTypeFilter.includes(g.unit_type)) return false;
                
                // 勢力フィルタ
                if (factionFilter.length > 0) {
                    const generalFactions = getFactionTags(g.affinity);
                    const hasMatchingFaction = factionFilter.some(f => generalFactions.includes(f));
                    if (!hasMatchingFaction) return false;
                }
                
                // 侍従方向フィルタ
                if (attendantFilter.length > 0) {
                    // 侍従方向フィルタが有効な場合、UR武将は除外
                    if (g.rarity === 'UR') return false;
                    
                    // LR武将の場合、侍従方向をチェック
                    if (!g.attendant_position) return false;
                    // attendant_positionが複数ある場合（例: "上/左"）も考慮
                    const positions = g.attendant_position.split('/');
                    const hasMatchingPosition = attendantFilter.some(f => positions.includes(f));
                    if (!hasMatchingPosition) return false;
                }
                
                // お気に入りフィルタ
                if (showOnlyFavorites && !isFavorite(g)) return false;
                
                // おススメフィルタ（好相性武将）
                if (showOnlyRecommendedGenerals && recommendTargetFormation) {
                    const targetFormation = formations[recommendTargetFormation];
                    const mainGeneral = targetFormation?.slots?.['主将'];
                    
                    if (!mainGeneral) return false;
                    
                    // 相性値の差を計算（循環考慮）
                    const baseAffinity = mainGeneral.affinity;
                    const targetAffinity = g.affinity;
                    const diff = Math.abs(baseAffinity - targetAffinity);
                    const cyclicDiff = 150 - diff;
                    const minDiff = Math.min(diff, cyclicDiff);
                    
                    // ±10の範囲外は除外
                    if (minDiff > 10) return false;
                }
                
                return true;
            });
            
            // 兵科→レア度の順にグループ化
            // 武将のソート処理
            const sortedGenerals = [...filteredGenerals].sort((a, b) => {
                // 1. 使用済みかどうかで分ける（未使用が上、使用済みが下）
                const aUsed = isGeneralUsed(a.id, a.name, a.rarity);
                const bUsed = isGeneralUsed(b.id, b.name, b.rarity);
                if (aUsed !== bUsed) return aUsed ? 1 : -1;
                
                // 2. 並び順による
                if (generalsSortOrder === 'affinity') {
                    // 相性順（降順 or 昇順）
                    if (a.affinity !== b.affinity) {
                        return affinitySortDirection === 'desc' 
                            ? b.affinity - a.affinity  // 降順（高→低）
                            : a.affinity - b.affinity; // 昇順（低→高）
                    }
                    // 相性が同じ場合は名前順
                    return a.name.localeCompare(b.name, 'ja');
                } else {
                    // 兵科順（デフォルト）
                    const unitTypeOrder = { '槍': 0, '弓': 1, '馬': 2 };
                    if (a.unit_type !== b.unit_type) {
                        return unitTypeOrder[a.unit_type] - unitTypeOrder[b.unit_type];
                    }
                    // 兵科が同じ場合は名前順
                    return a.name.localeCompare(b.name, 'ja');
                }
            });
            
            const generalsByUnitTypeAndRarity = {
                '槍': {
                    'LR': sortedGenerals.filter(g => g.unit_type === '槍' && g.rarity === 'LR'),
                    'UR': sortedGenerals.filter(g => g.unit_type === '槍' && g.rarity === 'UR'),
                    'SSR': sortedGenerals.filter(g => g.unit_type === '槍' && g.rarity === 'SSR'),
                    'SR': sortedGenerals.filter(g => g.unit_type === '槍' && g.rarity === 'SR'),
                    'R': sortedGenerals.filter(g => g.unit_type === '槍' && g.rarity === 'R')
                },
                '弓': {
                    'LR': sortedGenerals.filter(g => g.unit_type === '弓' && g.rarity === 'LR'),
                    'UR': sortedGenerals.filter(g => g.unit_type === '弓' && g.rarity === 'UR'),
                    'SSR': sortedGenerals.filter(g => g.unit_type === '弓' && g.rarity === 'SSR'),
                    'SR': sortedGenerals.filter(g => g.unit_type === '弓' && g.rarity === 'SR'),
                    'R': sortedGenerals.filter(g => g.unit_type === '弓' && g.rarity === 'R')
                },
                '馬': {
                    'LR': sortedGenerals.filter(g => g.unit_type === '馬' && g.rarity === 'LR'),
                    'UR': sortedGenerals.filter(g => g.unit_type === '馬' && g.rarity === 'UR'),
                    'SSR': sortedGenerals.filter(g => g.unit_type === '馬' && g.rarity === 'SSR'),
                    'SR': sortedGenerals.filter(g => g.unit_type === '馬' && g.rarity === 'SR'),
                    'R': sortedGenerals.filter(g => g.unit_type === '馬' && g.rarity === 'R')
                }
            };
            
            // 名宝のフィルタ処理
            const filteredTreasures = treasures.filter(t => {
                // 不使用リストにある名宝は除外
                if (isTreasureDisabled(t)) return false;
                
                // 兵科フィルタ（槍/弓/馬/全）
                if (treasureWeaponFilter.length > 0) {
                    // 防具と文物はweapon_typeがnullなので、全兵科フィルタが選択されている場合に表示
                    if (t.category === '防具' || t.category === '文物') {
                        // 全兵科が選択されていない場合は除外
                        if (!treasureWeaponFilter.includes('全')) {
                            return false;
                        }
                    } else {
                        // 武器の場合
                        // weapon_typeが'全'の名宝は常に表示、それ以外は選択された兵科と一致する場合のみ表示
                        if (t.weapon_type !== '全' && !treasureWeaponFilter.includes(t.weapon_type)) {
                            return false;
                        }
                    }
                }
                
                // 勢力フィルタ（複数タグ対応）
                if (treasureFactionFilter.length > 0) {
                    const treasureFactions = Array.isArray(t.factions) ? t.factions : (t.faction ? [t.faction] : []);
                    if (!treasureFactionFilter.some(f => treasureFactions.includes(f))) {
                        return false;
                    }
                }
                
                // お気に入りフィルタ
                if (showOnlyFavoriteTreasures && !isFavoriteTreasure(t)) {
                    return false;
                }
                
                // おススメフィルタ（部隊内の武将に関連する名宝）
                if (showOnlyRecommendedTreasures && recommendTargetFormation) {
                    const targetFormation = formations[recommendTargetFormation];
                    
                    // 部隊内の全武将名を取得
                    const generalsInFormation = [];
                    
                    // 主将・副将・補佐
                    ['主将', '副将1', '副将2', '補佐1', '補佐2'].forEach(slotName => {
                        const general = targetFormation?.slots?.[slotName];
                        if (general) generalsInFormation.push(general.name);
                    });
                    
                    // 侍従
                    if (targetFormation?.attendants) {
                        Object.values(targetFormation.attendants).forEach(attendant => {
                            if (attendant) generalsInFormation.push(attendant.name);
                        });
                    }
                    
                    // 武将がいない場合は除外
                    if (generalsInFormation.length === 0) return false;
                    
                    // 名宝のrelatedフィールドと照合
                    const isRelated = generalsInFormation.includes(t.related);
                    if (!isRelated) return false;
                }
                
                return true;
            });
            
            // 名宝のソート処理（使用済みを下に配置）
            const sortedTreasures = [...filteredTreasures].sort((a, b) => {
                // 1. 使用済みかどうかで分ける（未使用が上、使用済みが下）
                const aUsed = isTreasureUsed(a.id, a.name);
                const bUsed = isTreasureUsed(b.id, b.name);
                if (aUsed !== bUsed) return aUsed ? 1 : -1;
                
                // 2. 相性値順（昇順: 低→高）
                // 関連武将から相性値を取得
                const aGeneral = generals.find(g => g.name === a.related);
                const bGeneral = generals.find(g => g.name === b.related);
                const aAffinity = aGeneral ? aGeneral.affinity : 999; // 関連武将がいない場合は最後尾
                const bAffinity = bGeneral ? bGeneral.affinity : 999;
                
                if (aAffinity !== bAffinity) {
                    return aAffinity - bAffinity; // 昇順
                }
                
                // 3. カテゴリ順（武器→防具→文物）
                const categoryOrder = { '武器': 0, '防具': 1, '文物': 2 };
                if (a.category !== b.category) {
                    return categoryOrder[a.category] - categoryOrder[b.category];
                }
                
                // 4. 名前順
                return a.name.localeCompare(b.name, 'ja');
            });
            
            // 名宝を種類ごとにグループ化（ソート適用後）
            const treasuresByCategory = {
                '武器': sortedTreasures.filter(t => t.category === '武器'),
                '防具': sortedTreasures.filter(t => t.category === '防具'),
                '文物': sortedTreasures.filter(t => t.category === '文物')
            };
            
            // フィルタートグル
            const toggleFilter = (type, value) => {
                if (type === 'unitType') {
                    // 兵種フィルタは排他的（1つだけON）
                    setUnitTypeFilter(prev => 
                        prev.includes(value) ? [] : [value]
                    );
                } else if (type === 'faction') {
                    // 勢力フィルタは排他的（1つだけON）
                    setFactionFilter(prev => 
                        prev.includes(value) ? [] : [value]
                    );
                } else if (type === 'attendant') {
                    // 侍従フィルタは排他的（1つだけON）
                    setAttendantFilter(prev => 
                        prev.includes(value) ? [] : [value]
                    );
                } else if (type === 'treasureWeapon') {
                    setTreasureWeaponFilter(prev => 
                        prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
                    );
                } else if (type === 'treasureFaction') {
                    // 名宝の勢力フィルタも排他的（1つだけON）
                    setTreasureFactionFilter(prev => 
                        prev.includes(value) ? [] : [value]
                    );
                }
            };
            // 保留に追加（武将または名宝をどこにでもドロップ可能）
            const addToPending = (item, itemType) => {
                setPendingSets(prev => {
                    // 空いているセットを探す
                    let targetIndex = -1;
                    
                    if (itemType === 'general') {
                        // 武将枠が空いているセットを探す
                        targetIndex = prev.findIndex(set => !set.general);
                    } else {
                        // 名宝：該当カテゴリが空いているセットを探す
                        const slotName = itemType === 'weapon' ? 'weapon' : 
                                       itemType === 'armor' ? 'armor' : 'artifact';
                        targetIndex = prev.findIndex(set => !set[slotName]);
                    }
                    
                    if (targetIndex >= 0) {
                        // 既存のセットに追加
                        const newSets = [...prev];
                        if (itemType === 'general') {
                            newSets[targetIndex] = {...newSets[targetIndex], general: item};
                        } else if (itemType === 'weapon') {
                            newSets[targetIndex] = {...newSets[targetIndex], weapon: item};
                        } else if (itemType === 'armor') {
                            newSets[targetIndex] = {...newSets[targetIndex], armor: item};
                        } else if (itemType === 'artifact') {
                            newSets[targetIndex] = {...newSets[targetIndex], artifact: item};
                        }
                        return newSets;
                    } else {
                        // 新しいセットを作成
                        const newSet = {general: null, weapon: null, armor: null, artifact: null};
                        if (itemType === 'general') {
                            newSet.general = item;
                        } else if (itemType === 'weapon') {
                            newSet.weapon = item;
                        } else if (itemType === 'armor') {
                            newSet.armor = item;
                        } else if (itemType === 'artifact') {
                            newSet.artifact = item;
                        }
                        return [...prev, newSet];
                    }
                });
            };
            
            // 保留から削除
            const removeFromPending = (setIndex, slotType) => {
                setPendingSets(prev => {
                    const newSets = [...prev];
                    newSets[setIndex] = {...newSets[setIndex], [slotType]: null};
                    
                    // 全て空のセットは削除
                    if (!newSets[setIndex].general && !newSets[setIndex].weapon && 
                        !newSets[setIndex].armor && !newSets[setIndex].artifact) {
                        newSets.splice(setIndex, 1);
                    }
                    
                    return newSets;
                });
            };
            
            // 保留から編制に配置（ダブルクリック）
            const deployFromPending = (item, itemType) => {
                if (itemType === 'general') {
                    handleGeneralDoubleClick(item);
                } else {
                    autoAssignTreasure(item);
                }
            };
            if (loading) {
                return (
                    <div className="app-container">
                        <div className="app-header">
                            <h1 className="app-title">SANGOKUSHI HADOU</h1>
                        </div>
                        <div style={{textAlign: 'center', padding: '100px', fontSize: '18px'}}>
                            データ読み込み中...
                        </div>
                    </div>
                );
            }
            
            const currentTab = TABS.find(t => t.id === activeTab);
            const currentFormations = [];
            for (let i = 0; i < currentTab.count; i++) {
                const key = `${activeTab}-${i}`;
                // データがない場合は空のオブジェクトで初期化
                const data = formations[key] || {
                    formationType: '基本陣形',
                    slots: {},
                    attendants: {},
                    treasures: {},
                    advisors: {}
                };
                currentFormations.push({
                    key: key,
                    number: i + 1,
                    data: data
                });
            }
            
            return (
                <div className="app-container">
                    <div className="app-header">
                        <h1 className="app-title">SANGOKUSHI HADOU v3</h1>
                        <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                            <button
                                onClick={exportData}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--success)',
                                    border: '1px solid var(--success)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                                title="全データをJSONファイルでエクスポート"
                            >
                                エクスポート
                            </button>
                            <label
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--accent)',
                                    border: '1px solid var(--accent)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                                title="JSONファイルからインポート"
                            >
                                インポート
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={importData}
                                    style={{display: 'none'}}
                                />
                            </label>
                            <button
                                onClick={() => setShowHelpModal(true)}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--accent)',
                                    border: '1px solid var(--accent)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                                title="使い方ガイド"
                            >
                                ？ヘルプ
                            </button>
                            <button
                                onClick={() => setShowContextHelp(!showContextHelp)}
                                style={{
                                    padding: '8px 12px',
                                    background: showContextHelp ? 'var(--success)' : 'var(--text-muted)',
                                    border: `1px solid ${showContextHelp ? 'var(--success)' : 'var(--text-muted)'}`,
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '11px'
                                }}
                                title={showContextHelp ? 'ヘルプボタンを非表示' : 'ヘルプボタンを表示'}
                            >
                                {showContextHelp ? '💡' : '💡'}
                            </button>
                            <button
                                onClick={() => setShowImages(!showImages)}
                                style={{
                                    padding: '8px 12px',
                                    background: showImages ? 'var(--stat-attack)' : 'var(--text-muted)',
                                    border: `1px solid ${showImages ? 'var(--faction-yuan)' : 'var(--text-muted)'}`,
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '11px',
                                    fontWeight: 'bold'
                                }}
                                title={showImages ? '画像を非表示' : '画像を表示'}
                            >
                                {showImages ? '🖼️' : '🖼️'}
                            </button>
                            <button
                                className={`tab-button ${viewMode === 'formation' ? 'active' : ''}`}
                                onClick={() => setViewMode('formation')}
                                style={{padding: '8px 16px', fontSize: '12px'}}
                            >
                                編制
                            </button>
                            <button
                                className={`tab-button ${viewMode === 'rank' ? 'active' : ''}`}
                                onClick={() => setViewMode('rank')}
                                style={{padding: '8px 16px', fontSize: '12px'}}
                            >
                                ランク設定
                            </button>
                        </div>
                    </div>
                    
                    {/* 更新情報バー */}
                    <div id="update-info-bar-react" className="update-info-bar">
                        <span className="version-tag" id="version-tag">v145</span>
                        <span className="update-date" id="update-date">2026-02-04</span>
                        <span className="update-summary" id="update-summary">更新履歴表示機能を追加</span>
                        <button 
                            className="show-history-btn" 
                            id="show-history-btn"
                            onClick={() => {
                                if (window.showUpdateHistoryModal) {
                                    window.showUpdateHistoryModal();
                                }
                            }}
                        >
                            詳細を見る
                        </button>
                    </div>
                    
                    {viewMode === 'formation' ? (
                        <>
                            {/* 編制パターン選択タブ */}
                            <div style={{padding: '12px 30px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-base)'}}>
                                <div style={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(patternIndex => (
                                            <div key={patternIndex} style={{position: 'relative'}}>
                                                <button
                                                    onClick={() => setActivePattern(patternIndex)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        background: activePattern === patternIndex ? 'var(--success-hover)' : 'var(--bg-elevated)',
                                                        border: activePattern === patternIndex ? '1px solid var(--success)' : '1px solid var(--border-dim)',
                                                        borderRadius: '4px',
                                                        color: 'var(--text-primary)',
                                                        cursor: 'pointer',
                                                        fontWeight: activePattern === patternIndex ? 'bold' : 'normal',
                                                        fontSize: '13px',
                                                        display: 'flex',
                                                        gap: '8px',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <span>{formationPatterns[patternIndex]?.name || `編制${patternIndex + 1}`}</span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setOpenPatternMenu(openPatternMenu === patternIndex ? null : patternIndex);
                                                        }}
                                                        style={{
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--text-muted)',
                                                            cursor: 'pointer',
                                                        padding: '0 4px',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    ...
                                                </button>
                                            </button>
                                            
                                            {/* ドロップダウンメニュー */}
                                            {openPatternMenu === patternIndex && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: '0',
                                                    marginTop: '4px',
                                                    background: 'var(--bg-card)',
                                                    border: '1px solid var(--border-light)',
                                                    borderRadius: '4px',
                                                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                                    zIndex: 1000,
                                                    minWidth: '180px'
                                                }}>
                                                    <button
                                                        onClick={() => renamePattern(patternIndex)}
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px 16px',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--text-primary)',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            fontSize: '13px',
                                                            borderBottom: '1px solid var(--border-base)'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                    >
                                                        編制名を変更
                                                    </button>
                                                    
                                                    {/* コピー機能（サブメニュー） */}
                                                    <div style={{position: 'relative'}}>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setShowCopySubmenu(!showCopySubmenu);
                                                            }}
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px 16px',
                                                                background: 'none',
                                                                border: 'none',
                                                                color: 'var(--text-primary)',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                fontSize: '13px',
                                                                borderBottom: '1px solid var(--border-base)',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            }}
                                                            onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                            onMouseLeave={(e) => e.target.style.background = 'none'}
                                                        >
                                                            <span>他の編制からコピー</span>
                                                            <span>▶</span>
                                                        </button>
                                                        
                                                        {/* サブメニュー */}
                                                        {showCopySubmenu && (
                                                            <div style={{
                                                                position: 'absolute',
                                                                left: '100%',
                                                                top: '0',
                                                                marginLeft: '4px',
                                                                background: 'var(--bg-card)',
                                                                border: '1px solid var(--border-light)',
                                                                borderRadius: '4px',
                                                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                                                minWidth: '120px',
                                                                zIndex: 1001
                                                            }}>
                                                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(i => i !== patternIndex).map(sourceIndex => (
                                                                    <button
                                                                        key={sourceIndex}
                                                                        onClick={() => copyFromPattern(patternIndex, sourceIndex)}
                                                                        style={{
                                                                            width: '100%',
                                                                            padding: '10px 16px',
                                                                            background: 'none',
                                                                            border: 'none',
                                                                            color: 'var(--text-primary)',
                                                                            textAlign: 'left',
                                                                            cursor: 'pointer',
                                                                            fontSize: '13px'
                                                                        }}
                                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                                    >
                                                                        {formationPatterns[sourceIndex]?.name || `編制${sourceIndex + 1}`}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    <button
                                                        onClick={() => toggleDuplicateCheck(patternIndex)}
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px 16px',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: formationPatterns[patternIndex]?.allowDuplicates ? 'var(--success)' : 'var(--text-primary)',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            fontSize: '13px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            borderBottom: '1px solid var(--border-base)'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                    >
                                                        <span>{formationPatterns[patternIndex]?.allowDuplicates ? '✓' : '□'}</span>
                                                        <span>武将・名宝の重複を許可</span>
                                                    </button>
                                                    
                                                    <button
                                                        onClick={() => {
                                                            exportSingleFormation(patternIndex);
                                                            setOpenPatternMenu(null);
                                                        }}
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px 16px',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--accent)',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            fontSize: '13px'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                    >
                                                        この編制をエクスポート
                                                    </button>
                                                    
                                                    <button
                                                        onClick={() => {
                                                            importSingleFormation(patternIndex);
                                                            setOpenPatternMenu(null);
                                                        }}
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px 16px',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--stat-politics)',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            fontSize: '13px',
                                                            borderBottom: '1px solid var(--border-base)'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                    >
                                                        編制をインポート
                                                    </button>
                                                    
                                                    <button
                                                        onClick={() => resetPattern(patternIndex)}
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px 16px',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--danger)',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            fontSize: '13px'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-elevated)'}
                                                        onMouseLeave={(e) => e.target.style.background = 'none'}
                                                    >
                                                        この編制をリセット
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    </div>
                                    
                                    {showContextHelp && (
                                        <button
                                            onClick={() => setContextHelpType('pattern')}
                                            style={{
                                                background: 'var(--accent)',
                                                border: 'none',
                                                borderRadius: '50%',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '12px',
                                                width: '24px',
                                                height: '24px',
                                                padding: 0,
                                                lineHeight: '24px'
                                            }}
                                            title="編制パターンの使い方"
                                        >
                                            ?
                                        </button>
                                    )}
                                </div>
                            </div>
                            
                            {/* プロファイル選択（編制画面） */}
                            <div style={{padding: '12px 30px', background: 'var(--bg-base)', borderBottom: '1px solid var(--border-base)'}}>
                                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                    <span style={{color: 'var(--text-muted)', fontSize: '12px', marginRight: '8px'}}>プロファイル:</span>
                                    
                                    {/* プロファイル1からコピーボタン */}
                                    <button
                                        onClick={currentProfile !== 0 ? copyFromProfile1 : undefined}
                                        disabled={currentProfile === 0}
                                        style={{
                                            padding: '6px 12px',
                                            background: currentProfile !== 0 ? 'var(--success)' : 'var(--text-muted)',
                                            border: currentProfile !== 0 ? '2px solid var(--success)' : '2px solid var(--border-dim)',
                                            borderRadius: '4px',
                                            color: currentProfile !== 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                                            cursor: currentProfile !== 0 ? 'pointer' : 'not-allowed',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            marginRight: '8px',
                                            opacity: currentProfile !== 0 ? 1 : 0.5
                                        }}
                                        title={currentProfile !== 0 ? `${profileNames[0]}の編制${activePattern + 1}をコピー` : 'プロファイル1では使用できません'}
                                    >
                                        {profileNames[0]}からコピー
                                    </button>
                                    
                                    {profileNames.map((name, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentProfile(index)}
                                            style={{
                                                padding: '6px 12px',
                                                background: currentProfile === index ? 'var(--accent)' : 'var(--bg-elevated)',
                                                border: currentProfile === index ? '2px solid var(--gold)' : '2px solid var(--border-dim)',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: currentProfile === index ? 'bold' : 'normal',
                                                fontSize: '11px'
                                            }}
                                        >
                                            {name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="tab-navigation">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                        
                        <div className="reset-menu-wrapper">
                            <button 
                                className="reset-button"
                                onClick={() => setShowResetMenu(!showResetMenu)}
                            >
                                リセット ▼
                            </button>
                            
                            {showResetMenu && (
                                <div className="reset-dropdown">
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            setShowGDriveSetup(true);
                                            setShowResetMenu(false);
                                        }}
                                        style={{background: 'var(--accent)', color: 'var(--text-primary)', fontWeight: 'bold'}}
                                    >
                                        Google Drive連携
                                    </button>
                                    
                                    <div className="reset-dropdown-separator"></div>
                                    
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            exportAllData();
                                            setShowResetMenu(false);
                                        }}
                                        style={{background: 'var(--success)', color: 'var(--text-primary)'}}
                                    >
                                        全データをエクスポート
                                    </button>
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            importAllData();
                                            setShowResetMenu(false);
                                        }}
                                        style={{background: 'var(--accent)', color: 'var(--text-primary)'}}
                                    >
                                        全データをインポート
                                    </button>
                                    
                                    <div className="reset-dropdown-separator"></div>
                                    
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            resetFormations('current', 'all');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        このタブの全配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            resetFormations('current', 'generals');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        このタブの武将配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            resetFormations('current', 'attendants');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        このタブの侍従配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item"
                                        onClick={() => {
                                            resetFormations('current', 'treasures');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        このタブの名宝配置をリセット
                                    </button>
                                    
                                    <div className="reset-dropdown-separator"></div>
                                    
                                    <button 
                                        className="reset-dropdown-item danger"
                                        onClick={() => {
                                            resetFormations('all', 'all');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        全タブの全配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item danger"
                                        onClick={() => {
                                            resetFormations('all', 'generals');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        全タブの武将配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item danger"
                                        onClick={() => {
                                            resetFormations('all', 'attendants');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        全タブの侍従配置をリセット
                                    </button>
                                    <button 
                                        className="reset-dropdown-item danger"
                                        onClick={() => {
                                            resetFormations('all', 'treasures');
                                            setShowResetMenu(false);
                                        }}
                                    >
                                        全タブの名宝配置をリセット
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        {/* 戻すボタン */}
                        <button
                            onClick={handleUndo}
                            disabled={!undoHistory}
                            style={{
                                padding: '8px 16px',
                                background: undoHistory ? 'var(--accent)' : 'var(--text-muted)',
                                border: '1px solid ' + (undoHistory ? 'var(--accent)' : 'var(--text-muted)'),
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: undoHistory ? 'pointer' : 'not-allowed',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginLeft: '8px',
                                opacity: undoHistory ? 1 : 0.5
                            }}
                            title={undoHistory ? '直前の操作を戻す' : '戻す操作がありません'}
                        >
                            ⟲ 戻す
                        </button>
                    </div>
                    
                    <div className="main-content">
                        {/* 部隊エリア（左） */}
                        <FormationsArea
                            currentFormations={currentFormations}
                            treasures={treasures}
                            collapsedFormations={collapsedFormations}
                            showImages={showImages}
                            showSkillEffects={showSkillEffects}
                            setShowSkillEffects={setShowSkillEffects}
                            recommendTargetFormation={recommendTargetFormation}
                            setRecommendTargetFormation={setRecommendTargetFormation}
                            handleDrop={handleDrop}
                            handleTreasureDrop={handleTreasureDrop}
                            handleSlotDragStart={handleSlotDragStart}
                            handleAttendantDragStart={handleAttendantDragStart}
                            handleAttendantDrop={handleAttendantDrop}
                            handleAdvisorDragStart={handleAdvisorDragStart}
                            handleAdvisorDrop={handleAdvisorDrop}
                            handleTreasureSlotDragStart={handleTreasureSlotDragStart}
                            handleRemoveGeneral={handleRemoveGeneral}
                            handleRemoveAttendant={handleRemoveAttendant}
                            handleRemoveAdvisor={handleRemoveAdvisor}
                            handleRemoveTreasure={handleRemoveTreasure}
                            resetFormation={resetFormation}
                            toggleFormationCollapse={toggleFormationCollapse}
                            saveFormationTemplate={saveFormationTemplate}
                            loadFormationTemplate={loadFormationTemplate}
                            getImageUrl={getImageUrl}
                            getGeneralStarRank={getGeneralStarRank}
                            getTreasureForgeRank={getTreasureForgeRank}
                            isTreasureUR={isTreasureUR}
                            calcCombatParams={calcCombatParams}
                            calcSkillEffects={calcSkillEffects}
                            ItemImage={ItemImage}
                        />

                        {/* 武将リスト（右1） */}
                        <GeneralsPanel
                            generals={generals} formations={formations}
                            disabledGenerals={disabledGenerals}
                            generalsByUnitTypeAndRarity={generalsByUnitTypeAndRarity}
                            FACTION_TAGS={FACTION_TAGS}
                            showGeneralsPanel={showGeneralsPanel} setShowGeneralsPanel={setShowGeneralsPanel}
                            showContextHelp={showContextHelp}
                            activeGeneralsTab={activeGeneralsTab} setActiveGeneralsTab={setActiveGeneralsTab}
                            generalsSortOrder={generalsSortOrder} setGeneralsSortOrder={setGeneralsSortOrder}
                            affinitySortDirection={affinitySortDirection} setAffinitySortDirection={setAffinitySortDirection}
                            expandedRarities={expandedRarities} setExpandedRarities={setExpandedRarities}
                            unitTypeFilter={unitTypeFilter} setUnitTypeFilter={setUnitTypeFilter}
                            factionFilter={factionFilter} setFactionFilter={setFactionFilter}
                            attendantFilter={attendantFilter} setAttendantFilter={setAttendantFilter}
                            showOnlyFavorites={showOnlyFavorites} setShowOnlyFavorites={setShowOnlyFavorites}
                            showOnlyRecommendedGenerals={showOnlyRecommendedGenerals}
                            setShowOnlyRecommendedGenerals={setShowOnlyRecommendedGenerals}
                            recommendTargetFormation={recommendTargetFormation}
                            handleDragStart={handleDragStart} handleGeneralDoubleClick={handleGeneralDoubleClick}
                            isGeneralUsed={isGeneralUsed} moveToDisabled={moveToDisabled} moveToActive={moveToActive}
                            getImageUrl={getImageUrl} getGeneralStarRank={getGeneralStarRank}
                            toggleFilter={toggleFilter} setContextHelpType={setContextHelpType}
                            ItemImage={ItemImage}
                        />

                        
                        {/* 名宝リスト（右2） */}
                        <TreasuresPanel
                            generals={generals} treasures={treasures} formations={formations}
                            disabledTreasures={disabledTreasures}
                            treasuresByCategory={treasuresByCategory}
                            showTreasuresPanel={showTreasuresPanel} setShowTreasuresPanel={setShowTreasuresPanel}
                            showContextHelp={showContextHelp}
                            activeTreasuresTab={activeTreasuresTab} setActiveTreasuresTab={setActiveTreasuresTab}
                            expandedTreasureCategories={expandedTreasureCategories}
                            setExpandedTreasureCategories={setExpandedTreasureCategories}
                            treasureWeaponFilter={treasureWeaponFilter} setTreasureWeaponFilter={setTreasureWeaponFilter}
                            treasureFactionFilter={treasureFactionFilter} setTreasureFactionFilter={setTreasureFactionFilter}
                            showOnlyFavoriteTreasures={showOnlyFavoriteTreasures}
                            setShowOnlyFavoriteTreasures={setShowOnlyFavoriteTreasures}
                            showOnlyRecommendedTreasures={showOnlyRecommendedTreasures}
                            setShowOnlyRecommendedTreasures={setShowOnlyRecommendedTreasures}
                            recommendTargetFormation={recommendTargetFormation}
                            handleTreasureDragStart={handleTreasureDragStart}
                            autoAssignTreasure={autoAssignTreasure}
                            isTreasureUsed={isTreasureUsed} isTreasureUR={isTreasureUR}
                            moveTreasureToDisabled={moveTreasureToDisabled} moveTreasureToActive={moveTreasureToActive}
                            removeTreasureFromFormations={removeTreasureFromFormations}
                            getImageUrl={getImageUrl} getTreasureForgeRank={getTreasureForgeRank}
                            toggleFilter={toggleFilter} setContextHelpType={setContextHelpType}
                            ItemImage={ItemImage}
                        />

                    </div>
                    
                    {/* Google Drive連携ダイアログ */}
                    <GDriveDialog
                        show={showGDriveSetup}
                        onClose={() => setShowGDriveSetup(false)}
                        lastSync={gdriveLastSync}
                        onSave={() => saveToGoogleDrive()}
                        onLoad={() => loadFromGoogleDrive()}
                    />
                    
                    {/* テンプレート保存ダイアログ */}
                    <TemplateSaveDialog
                        show={!!showTemplateSaveDialog}
                        onClose={() => setShowTemplateSaveDialog(null)}
                        templateName={templateName}
                        onNameChange={setTemplateName}
                        onSave={executeSaveTemplate}
                    />
                    
                    {/* テンプレート呼び出しダイアログ */}
                    <TemplateLoadDialog
                        show={!!showTemplateLoadDialog}
                        onClose={() => setShowTemplateLoadDialog(null)}
                        templates={formationTemplates}
                        selectedTemplate={selectedTemplate}
                        onSelectTemplate={setSelectedTemplate}
                        overwriteGenerals={overwriteGenerals}
                        onOverwriteGeneralsChange={setOverwriteGenerals}
                        overwriteTreasures={overwriteTreasures}
                        onOverwriteTreasuresChange={setOverwriteTreasures}
                        onDelete={deleteTemplate}
                        onLoad={executeLoadTemplate}
                    />
                    
                    </>
            ) : (
                    <RankSettingsPanel
                        generals={generals}
                        treasures={treasures}
                        currentProfile={currentProfile}
                        setCurrentProfile={setCurrentProfile}
                        profileNames={profileNames}
                        setProfileNames={setProfileNames}
                        setProfileData={setProfileData}
                        rankTab={rankTab}
                        setRankTab={setRankTab}
                        rankSearchTerm={rankSearchTerm}
                        setRankSearchTerm={setRankSearchTerm}
                        expandedRarities={expandedRarities}
                        setExpandedRarities={setExpandedRarities}
                        expandedTreasureCategories={expandedTreasureCategories}
                        setExpandedTreasureCategories={setExpandedTreasureCategories}
                        setDisabledGenerals={setDisabledGenerals}
                        setDisabledTreasures={setDisabledTreasures}
                        getGeneralStarRank={getGeneralStarRank}
                        setGeneralStar={setGeneralStar}
                        getTreasureForgeRank={getTreasureForgeRank}
                        setTreasureForge={setTreasureForge}
                        isTreasureUR={isTreasureUR}
                        toggleTreasureUR={toggleTreasureUR}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                        isFavoriteTreasure={isFavoriteTreasure}
                        toggleFavoriteTreasure={toggleFavoriteTreasure}
                        isGeneralDisabled={isGeneralDisabled}
                        isTreasureDisabled={isTreasureDisabled}
                        getImageUrl={getImageUrl}
                        ItemImage={ItemImage}
                        exportProfile={exportProfile}
                        importProfile={importProfile}
                    />
                )}
                
                
                {/* コンテキストヘルプモーダル */}
                <ContextHelpModal
                    helpType={contextHelpType}
                    onClose={() => setContextHelpType(null)}
                />
                
                {/* ヘルプモーダル */}
                <HelpModal
                    show={showHelpModal}
                    onClose={() => setShowHelpModal(false)}
                />
                
                {/* 更新履歴モーダル */}
                <div id="update-history-modal" className="modal" style={{display: 'none'}}>
                    <div className="modal-content history-modal-content">
                        <div className="modal-header">
                            <h2>更新履歴</h2>
                            <button 
                                className="modal-close" 
                                onClick={() => {
                                    if (window.closeUpdateHistoryModal) {
                                        window.closeUpdateHistoryModal();
                                    }
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <div id="update-history-content" className="history-content">
                            {/* updateHistory.jsで動的生成 */}
                        </div>
                    </div>
                </div>
                
                </div>
        );
    }
    
    ReactDOM.render(<App />, document.getElementById('root'));
