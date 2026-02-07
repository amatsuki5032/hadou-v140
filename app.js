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
            
            // おススメフィルタ用の状態
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
            
            // プロファイル機能
            const [currentProfile, setCurrentProfile] = useState(0); // 0-4
            const [profileNames, setProfileNames] = useState(['プロファイル1', 'プロファイル2', 'プロファイル3', 'プロファイル4', 'プロファイル5']);
            const [profileData, setProfileData] = useState({
                0: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                1: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                2: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                3: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}},
                4: {generalStarRank: {}, treasureForgeRank: {}, treasureURStatus: {}}
            });
            
            const [generals, setGenerals] = useState([]);
            const [treasures, setTreasures] = useState([]);
            
            // 編制パターン（10パターン）
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
            
            // プロファイル別の独立編制（プロファイル2〜5）
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
            
            // テンプレート保存・呼び出しダイアログの状態
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
            const ImageSettingsModal = () => {
                const [urlText, setUrlText] = useState('');
                
                useEffect(() => {
                    if (showImageSettings) {
                        // 現在の設定をテキストエリアに表示
                        const formatted = Object.entries(imageUrls)
                            .map(([key, url]) => `${key}=${url}`)
                            .join('\n');
                        setUrlText(formatted);
                    }
                // eslint-disable-next-line react-hooks/exhaustive-deps
                }, [showImageSettings]);
                
                if (!showImageSettings) return null;
                
                const handleSave = () => {
                    // テキストをパースしてオブジェクトに変換
                    const newUrls = {};
                    const lines = urlText.split('\n');
                    
                    lines.forEach(line => {
                        const trimmed = line.trim();
                        if (!trimmed || trimmed.startsWith('#')) return;
                        
                        const separatorIndex = trimmed.indexOf('=');
                        if (separatorIndex > 0) {
                            const key = trimmed.substring(0, separatorIndex).trim();
                            const url = trimmed.substring(separatorIndex + 1).trim();
                            if (key && url) {
                                newUrls[key] = url;
                            }
                        }
                    });
                    
                    saveImageUrls(newUrls);
                    setShowImageSettings(false);
                };
                
                return (
                    <div className="image-modal-overlay" onClick={() => setShowImageSettings(false)}>
                        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2 className="image-modal-title">画像URL設定</h2>
                            
                            <div className="image-url-input-group">
                                <label>画像URLマッピング</label>
                                <textarea
                                    value={urlText}
                                    onChange={(e) => setUrlText(e.target.value)}
                                    placeholder={'general_LR_1=https://i.imgur.com/xxxxx.jpg\ngeneral_UR_曹操=https://i.imgur.com/yyyyy.jpg\ntreasure_青龍偃月刀=https://i.imgur.com/zzzzz.jpg'}
                                />
                                <div className="image-url-help">
                                    <strong>記述方法:</strong><br/>
                                    ● 1行に1つのマッピング: <strong>キー=URL</strong><br/>
                                    ● 武将のキー形式: <strong>general_レア度_ID</strong> または <strong>general_レア度_名前</strong><br/>
                                    ● 名宝のキー形式: <strong>treasure_名前</strong> または <strong>treasure_種類_名前</strong><br/><br/>
                                    <strong>記述例:</strong><br/>
                                    general_LR_1=https://i.imgur.com/abc123.jpg<br/>
                                    general_UR_曹操=https://i.imgur.com/def456.jpg<br/>
                                    treasure_青龍偃月刀=https://i.imgur.com/ghi789.jpg<br/>
                                    treasure_weapon_方天画戟=https://i.imgur.com/jkl012.jpg<br/><br/>
                                    <strong>ヒント:</strong><br/>
                                    ● #で始まる行はコメントとして無視されます<br/>
                                    ● Imgurアルバムの画像を右クリック→「画像アドレスをコピー」で取得<br/>
                                    ● 画像URLは i.imgur.com/xxxxx.jpg の形式
                                </div>
                            </div>
                            
                            <div className="image-modal-buttons">
                                <button className="image-modal-button image-modal-button-save" onClick={handleSave}>
                                    保存
                                </button>
                                <button className="image-modal-button image-modal-button-cancel" onClick={() => setShowImageSettings(false)}>
                                    ✕ キャンセル
                                </button>
                            </div>
                        </div>
                    </div>
                );
            };

            // ヘルプモーダル
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
            
            // フィルター
            const [unitTypeFilter, setUnitTypeFilter] = useState([]);
            const [factionFilter, setFactionFilter] = useState([]);
            const [attendantFilter, setAttendantFilter] = useState([]);
            const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
            
            // 名宝フィルター
            const [treasureWeaponFilter, setTreasureWeaponFilter] = useState([]);
            const [treasureFactionFilter, setTreasureFactionFilter] = useState([]);
            const [showOnlyFavoriteTreasures, setShowOnlyFavoriteTreasures] = useState(false);
            
            // お気に入り武将（localStorage保存）
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
            
            // パネル表示フラグ
            const [showGeneralsPanel, setShowGeneralsPanel] = useState(true);
            const [showTreasuresPanel, setShowTreasuresPanel] = useState(true);
            const [showPendingPanel, setShowPendingPanel] = useState(true);
            
            // 武将の並び順（unit_type: 兵科順、affinity: 相性順）
            const [generalsSortOrder, setGeneralsSortOrder] = useState('affinity');
            
            // 相性順のソート方向（desc: 降順、asc: 昇順）
            const [affinitySortDirection, setAffinitySortDirection] = useState('asc');
            
            // Google Drive連携
            const [showGDriveSetup, setShowGDriveSetup] = useState(false);
            const [gdriveEnabled, setGdriveEnabled] = useState(false);
            const [gdriveLastSync, setGdriveLastSync] = useState(null);
            
            // 武将タブ（使用可能 / 不使用）
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
            
            // 名宝のUR化状態を切り替え
            // LR武将を空いている主将/副将/補佐枠に自動配置
            const autoAssignLRGeneral = (general) => {
                // 配置順序
                const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
                
                // 全部隊を順番にチェック
                for (const tab of TABS) {
                    for (let i = 0; i < tab.count; i++) {
                        const formationKey = `${tab.id}-${i}`;
                        const formation = formations[formationKey];
                        
                        // 各枠を順番にチェック
                        for (const slotName of slots) {
                            if (!formation.slots[slotName]) {
                                // 空いている枠が見つかったら配置
                                setFormations(prev => ({
                                    ...prev,
                                    [formationKey]: {
                                        ...prev[formationKey],
                                        slots: {
                                            ...prev[formationKey].slots,
                                            [slotName]: general
                                        }
                                    }
                                }));
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            
            // UR武将を空いている侍従枠に自動配置
            const autoAssignURGeneral = (general) => {
                // 配置順序
                const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
                
                // 全部隊を順番にチェック
                for (const tab of TABS) {
                    for (let i = 0; i < tab.count; i++) {
                        const formationKey = `${tab.id}-${i}`;
                        const formation = formations[formationKey];
                        
                        // 各枠の侍従を順番にチェック
                        for (const slotName of slots) {
                            if (!formation.attendants || !formation.attendants[slotName]) {
                                // 空いている侍従枠が見つかったら配置
                                setFormations(prev => ({
                                    ...prev,
                                    [formationKey]: {
                                        ...prev[formationKey],
                                        attendants: {
                                            ...prev[formationKey].attendants,
                                            [slotName]: general
                                        }
                                    }
                                }));
                                return true;
                            }
                        }
                    }
                }
                return false;
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
                { name: '袁紹', center: 101, color: '#f39c12' },
                { name: '呉', center: 125, color: 'var(--danger)' },
                { name: '呂布', center: 145, color: '#9b59b6' }
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
            
            // 編制パターン名を変更
            const renamePattern = (patternIndex) => {
                const currentName = formationPatterns[patternIndex]?.name || `編制${patternIndex + 1}`;
                const newName = prompt('編制名を入力してください', currentName);
                if (newName && newName.trim() !== '') {
                    setFormationPatterns(prev => ({
                        ...prev,
                        [patternIndex]: {
                            ...prev[patternIndex],
                            name: newName.trim()
                        }
                    }));
                }
                setOpenPatternMenu(null);
            };
            
            // 編制パターンをリセット
            const resetPattern = (patternIndex) => {
                const patternName = formationPatterns[patternIndex]?.name || `編制${patternIndex + 1}`;
                if (confirm(`${patternName}の全12部隊をリセットしますか？\n\n全ての武将・侍従・名宝の配置がクリアされます。`)) {
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
                    
                    setFormationPatterns(prev => ({
                        ...prev,
                        [patternIndex]: {
                            ...prev[patternIndex],
                            formations: initialFormations,
                            collapsedFormations: {}
                        }
                    }));
                }
                setOpenPatternMenu(null);
            };
            
            // 重複チェックを切り替え
            const toggleDuplicateCheck = (patternIndex) => {
                setFormationPatterns(prev => ({
                    ...prev,
                    [patternIndex]: {
                        ...prev[patternIndex],
                        allowDuplicates: !prev[patternIndex]?.allowDuplicates
                    }
                }));
                setOpenPatternMenu(null);
            };
            
            // 編制パターンをコピー
            const copyFromPattern = (targetIndex, sourceIndex) => {
                const targetName = formationPatterns[targetIndex]?.name || `編制${targetIndex + 1}`;
                const sourceName = formationPatterns[sourceIndex]?.name || `編制${sourceIndex + 1}`;
                
                if (confirm(`${sourceName}の内容を${targetName}にコピーしますか？\n\n${targetName}の現在の内容は上書きされます。`)) {
                    // ディープコピーを作成
                    const sourceFormations = JSON.parse(JSON.stringify(formationPatterns[sourceIndex].formations));
                    
                    setFormationPatterns(prev => ({
                        ...prev,
                        [targetIndex]: {
                            ...prev[targetIndex],
                            formations: sourceFormations,
                            collapsedFormations: {} // 折りたたみ状態はリセット
                        }
                    }));
                }
                setOpenPatternMenu(null);
            };
            
            // 部隊テンプレートを保存
            const saveFormationTemplate = (formationKey) => {
                const formationData = formations[formationKey];
                
                // 主将の名前を取得
                const mainGeneral = formationData?.slots?.['主将'];
                let baseName = formationKey; // デフォルトは「編制1」など
                
                if (mainGeneral) {
                    // 主将がいる場合は「LR関羽」形式
                    baseName = `${mainGeneral.rarity}${mainGeneral.name}`;
                }
                
                // 重複チェック：同じ名前が既にあれば番号を追加
                let templateName = baseName;
                let counter = 0;
                
                while (formationTemplates[templateName]) {
                    templateName = `${baseName}-${counter}`;
                    counter++;
                }
                
                setShowTemplateSaveDialog(formationKey);
                setTemplateName(templateName);
            };
            
            // テンプレート保存を実行
            const executeSaveTemplate = () => {
                if (!templateName.trim()) {
                    alert('テンプレート名を入力してください');
                    return;
                }
                
                const formationData = formations[showTemplateSaveDialog];
                if (!formationData) {
                    alert('保存する部隊データがありません');
                    return;
                }

                // treasuresをオブジェクトから配列に変換
                let treasuresArray = Array(15).fill(null); // 5人 × 3個 = 15個
                if (formationData.treasures) {
                    if (Array.isArray(formationData.treasures)) {
                        // 既に配列の場合
                        treasuresArray = JSON.parse(JSON.stringify(formationData.treasures));
                    } else if (typeof formationData.treasures === 'object') {
                        // オブジェクト形式の場合、配列に変換
                        // treasures: { '主将-weapon': {...}, '主将-armor': {...}, ... }
                        Object.entries(formationData.treasures).forEach(([key, treasure]) => {
                            if (treasure) {
                                // キーから位置を特定
                                // 主将-weapon → 0, 主将-armor → 1, 主将-artifact → 2
                                // 副将1-weapon → 3, 副将1-armor → 4, 副将1-artifact → 5
                                // 副将2-weapon → 6, 副将2-armor → 7, 副将2-artifact → 8
                                // 補佐1-weapon → 9, 補佐1-armor → 10, 補佐1-artifact → 11
                                // 補佐2-weapon → 12, 補佐2-armor → 13, 補佐2-artifact → 14
                                let index = -1;
                                if (key.startsWith('主将-weapon')) index = 0;
                                else if (key.startsWith('主将-armor')) index = 1;
                                else if (key.startsWith('主将-artifact')) index = 2;
                                else if (key.startsWith('副将1-weapon')) index = 3;
                                else if (key.startsWith('副将1-armor')) index = 4;
                                else if (key.startsWith('副将1-artifact')) index = 5;
                                else if (key.startsWith('副将2-weapon')) index = 6;
                                else if (key.startsWith('副将2-armor')) index = 7;
                                else if (key.startsWith('副将2-artifact')) index = 8;
                                else if (key.startsWith('補佐1-weapon')) index = 9;
                                else if (key.startsWith('補佐1-armor')) index = 10;
                                else if (key.startsWith('補佐1-artifact')) index = 11;
                                else if (key.startsWith('補佐2-weapon')) index = 12;
                                else if (key.startsWith('補佐2-armor')) index = 13;
                                else if (key.startsWith('補佐2-artifact')) index = 14;
                                
                                if (index >= 0) {
                                    treasuresArray[index] = JSON.parse(JSON.stringify(treasure));
                                }
                            }
                        });
                    }
                }
                
                // ディープコピーして保存
                const template = {
                    name: templateName.trim(),
                    slots: JSON.parse(JSON.stringify(formationData.slots)),
                    attendants: JSON.parse(JSON.stringify(formationData.attendants)),
                    treasures: treasuresArray,
                    formationType: formationData.formationType
                };

                setFormationTemplates(prev => ({
                    ...prev,
                    [templateName.trim()]: template
                }));
                
                setShowTemplateSaveDialog(null);
                setTemplateName('');
            };
            
            // 部隊テンプレートを呼び出し
            const loadFormationTemplate = (formationKey) => {
                setShowTemplateLoadDialog(formationKey);
                // 一番上のテンプレートを自動選択
                const templateKeys = Object.keys(formationTemplates);
                if (templateKeys.length > 0) {
                    setSelectedTemplate(templateKeys[0]);
                } else {
                    setSelectedTemplate('');
                }
                setOverwriteGenerals(true);
                setOverwriteTreasures(true);
            };
            
            // テンプレート呼び出しを実行
            const executeLoadTemplate = () => {
                if (!selectedTemplate) {
                    alert('テンプレートを選択してください');
                    return;
                }
                
                const template = formationTemplates[selectedTemplate];
                if (!template) {
                    alert('テンプレートが見つかりません');
                    return;
                }
                
                const currentFormation = formations[showTemplateLoadDialog];

                setFormations(prev => {
                    // 完全に新しいオブジェクトを作成（浅いコピーではなく）
                    const targetFormation = {
                        formationType: prev[showTemplateLoadDialog]?.formationType || '基本陣形',
                        slots: {},
                        attendants: {},
                        treasures: {}
                    };
                    
                    // 武将（主将・副将・補佐）と侍従を上書き
                    if (overwriteGenerals) {
                        // テンプレートの武将をコピー（初期化済みなので直接コピー）
                        Object.keys(template.slots).forEach(slotName => {
                            if (template.slots[slotName]) {
                                targetFormation.slots[slotName] = JSON.parse(JSON.stringify(template.slots[slotName]));
                            }
                        });
                        
                        // 侍従もコピー（初期化済みなので直接コピー）
                        Object.keys(template.attendants).forEach(position => {
                            if (template.attendants[position]) {
                                targetFormation.attendants[position] = JSON.parse(JSON.stringify(template.attendants[position]));
                            }
                        });
                    } else {
                        // 武将を上書きしない場合は既存のをコピー
                        targetFormation.slots = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.slots || {}));
                        targetFormation.attendants = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.attendants || {}));
                    }
                    
                    // 名宝を上書き
                    if (overwriteTreasures) {
                        // 既に{}で初期化済みなので、テンプレートから直接コピー
                        if (template.treasures && Array.isArray(template.treasures)) {
                            const keyMapping = [
                                '主将-weapon', '主将-armor', '主将-artifact',
                                '副将1-weapon', '副将1-armor', '副将1-artifact',
                                '副将2-weapon', '副将2-armor', '副将2-artifact',
                                '補佐1-weapon', '補佐1-armor', '補佐1-artifact',
                                '補佐2-weapon', '補佐2-armor', '補佐2-artifact'
                            ];
                            
                            template.treasures.forEach((treasure, index) => {
                                if (treasure && keyMapping[index]) {
                                    targetFormation.treasures[keyMapping[index]] = JSON.parse(JSON.stringify(treasure));
                                }
                            });
                        }
                    } else {
                        // 名宝を上書きしない場合は既存のをコピー
                        targetFormation.treasures = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.treasures || {}));
                    }
                    
                    // 陣形タイプは常に上書き
                    targetFormation.formationType = template.formationType;
                    
                    const newFormations = {
                        ...prev,
                        [showTemplateLoadDialog]: targetFormation
                    };
                    
                    // 重複チェック: 他の部隊から同じ武将・名宝を削除
                    // allowDuplicates が true の場合はスキップ
                    const allowDuplicates = formationPatterns[activePattern]?.allowDuplicates || false;
                    
                    if (!allowDuplicates && (overwriteGenerals || overwriteTreasures)) {
                        Object.keys(newFormations).forEach(formationKey => {
                            if (formationKey === showTemplateLoadDialog) return; // 自分自身はスキップ
                            
                            const formation = newFormations[formationKey];
                            if (!formation) return;
                            
                            // 武将の重複チェック（主将・副将・補佐）
                            if (overwriteGenerals && targetFormation.slots) {
                                Object.keys(targetFormation.slots).forEach(slotName => {
                                    const targetGeneral = targetFormation.slots[slotName];
                                    if (!targetGeneral) return;
                                    
                                    // 他の部隊から同じ武将を削除
                                    Object.keys(formation.slots || {}).forEach(otherSlot => {
                                        const otherGeneral = formation.slots[otherSlot];
                                        if (otherGeneral && 
                                            otherGeneral.id === targetGeneral.id && 
                                            otherGeneral.rarity === targetGeneral.rarity) {
                                            formation.slots[otherSlot] = null;
                                        }
                                    });
                                    
                                    // 侍従も削除
                                    Object.keys(formation.attendants || {}).forEach(position => {
                                        const attendant = formation.attendants[position];
                                        if (attendant && 
                                            attendant.id === targetGeneral.id && 
                                            attendant.rarity === targetGeneral.rarity) {
                                            formation.attendants[position] = null;
                                        }
                                    });
                                });
                            }
                            
                            // 侍従の重複チェック（targetFormation.attendantsもチェック）
                            if (overwriteGenerals && targetFormation.attendants) {
                                Object.keys(targetFormation.attendants).forEach(position => {
                                    const targetAttendant = targetFormation.attendants[position];
                                    if (!targetAttendant) return;
                                    
                                    // 他の部隊から同じ武将を削除（スロットから）
                                    Object.keys(formation.slots || {}).forEach(otherSlot => {
                                        const otherGeneral = formation.slots[otherSlot];
                                        if (otherGeneral && 
                                            otherGeneral.id === targetAttendant.id && 
                                            otherGeneral.rarity === targetAttendant.rarity) {
                                            formation.slots[otherSlot] = null;
                                        }
                                    });
                                    
                                    // 他の部隊から同じ武将を削除（侍従から）
                                    Object.keys(formation.attendants || {}).forEach(otherPosition => {
                                        const otherAttendant = formation.attendants[otherPosition];
                                        if (otherAttendant && 
                                            otherAttendant.id === targetAttendant.id && 
                                            otherAttendant.rarity === targetAttendant.rarity) {
                                            formation.attendants[otherPosition] = null;
                                        }
                                    });
                                });
                            }
                            
                            // 名宝の重複チェック
                            if (overwriteTreasures && targetFormation.treasures) {
                                Object.entries(targetFormation.treasures).forEach(([key, targetTreasure]) => {
                                    if (!targetTreasure) return;
                                    
                                    // 他の部隊から同じ名宝を削除
                                    Object.keys(formation.treasures || {}).forEach(otherKey => {
                                        const otherTreasure = formation.treasures[otherKey];
                                        if (otherTreasure && 
                                            otherTreasure.id === targetTreasure.id && 
                                            otherTreasure.name === targetTreasure.name) {
                                            formation.treasures[otherKey] = null;
                                        }
                                    });
                                });
                            }
                        });
                    }
                    
                    return newFormations;
                });
                
                setShowTemplateLoadDialog(null);
                setSelectedTemplate('');
            };
            
            // テンプレートを削除
            const deleteTemplate = (templateKey) => {
                if (confirm(`テンプレート「${templateKey}」を削除しますか？`)) {
                    setFormationTemplates(prev => {
                        const newTemplates = {...prev};
                        delete newTemplates[templateKey];
                        return newTemplates;
                    });
                }
            };
            
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
            
            // 全データをリセット
            const resetAllData = () => {
                if (confirm('全ての保存データ（編制、不使用リスト、UR化状態）をリセットしますか？\n\nこの操作は元に戻せません。')) {
                    // localStorageをクリア
                    localStorage.removeItem('formations');
                    localStorage.removeItem('disabledGenerals');
                    localStorage.removeItem('disabledTreasures');
                    localStorage.removeItem('treasureURStatus');
                    
                    // ページをリロード
                    window.location.reload();
                }
            };
            
            // ドラッグ開始
            const handleDragStart = (e, general) => {
                // UR武将のみ重複チェック
                if (general.rarity === 'UR' && isURGeneralUsed(general.id)) {
                    e.preventDefault();
                    return;
                }
                setDraggedGeneral({ general });
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'general',
                    general: general,
                    from: 'general-list'
                }));
            };
            
            // 配置済み武将からのドラッグ開始
            const handleSlotDragStart = (e, general, formationKey, slotName) => {
                setDraggedGeneral({ ...general, sourceFormation: formationKey, sourceSlot: slotName });
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'general',
                    general: general,
                    from: `formation-${formationKey}-${slotName}`
                }));
            };
            
            // 侍従のドラッグ開始
            const handleAttendantDragStart = (e, attendant, formationKey, slotName) => {
                setDraggedGeneral({ ...attendant, sourceFormation: formationKey, sourceSlot: slotName, isFromAttendant: true });
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'general',
                    general: attendant,
                    from: `formation-${formationKey}-attendant-${slotName}`
                }));
            };
            
            // 名宝のドラッグ開始
            const handleTreasureDragStart = (e, treasure) => {
                if (isTreasureUsed(treasure.id, treasure.name)) {
                    e.preventDefault();
                    return;
                }
                setDraggedTreasure(treasure);
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'treasure',
                    treasure: treasure,
                    from: 'treasure-list'
                }));
            };
            
            // 名宝を空いている枠に自動配置
            const autoAssignTreasure = (treasure) => {
                // カテゴリに応じたスロット名を決定
                let treasureSlot = '';
                if (treasure.category === '武器') treasureSlot = 'weapon';
                else if (treasure.category === '防具') treasureSlot = 'armor';
                else if (treasure.category === '文物') treasureSlot = 'artifact';
                else return false;
                
                // 配置順序
                const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
                
                // 部隊チェック順序を構築（おススメ部隊を最優先）
                const formationOrder = [];
                
                // おススメ部隊を最優先
                if (recommendTargetFormation && !collapsedFormations[recommendTargetFormation]) {
                    formationOrder.push(recommendTargetFormation);
                }
                
                // 現在のタブの部隊を次に優先
                const currentTab = TABS.find(tab => tab.id === activeTab);
                if (currentTab) {
                    for (let i = 0; i < currentTab.count; i++) {
                        const formationKey = `${currentTab.id}-${i}`;
                        if (formationKey !== recommendTargetFormation) {
                            formationOrder.push(formationKey);
                        }
                    }
                }
                
                // 残りの部隊を追加
                for (const tab of TABS) {
                    if (tab.id !== activeTab) {
                        for (let i = 0; i < tab.count; i++) {
                            const formationKey = `${tab.id}-${i}`;
                            if (formationKey !== recommendTargetFormation) {
                                formationOrder.push(formationKey);
                            }
                        }
                    }
                }
                
                // 全部隊を順番にチェック
                for (const formationKey of formationOrder) {
                    // 折りたたまれている部隊はスキップ
                    if (collapsedFormations[formationKey]) {
                        continue;
                    }
                    
                    const formation = formations[formationKey];
                    
                    // 各武将枠の名宝スロットを順番にチェック
                    for (const slotName of slots) {
                        const treasureKey = `${slotName}-${treasureSlot}`;
                        if (!formation.treasures || !formation.treasures[treasureKey]) {
                            // 空いている名宝枠が見つかったら配置
                            setFormations(prev => ({
                                ...prev,
                                [formationKey]: {
                                    ...prev[formationKey],
                                    treasures: {
                                        ...prev[formationKey].treasures,
                                        [treasureKey]: treasure
                                    }
                                }
                            }));
                            return true;
                        }
                    }
                }
                return false;
            };
            
            // 配置済み名宝からのドラッグ開始
            const handleTreasureSlotDragStart = (e, treasure, formationKey, slotName, treasureSlot) => {
                setDraggedTreasure({ ...treasure, sourceFormation: formationKey, sourceSlot: slotName, sourceTreasureSlot: treasureSlot });
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'treasure',
                    treasure: treasure,
                    from: `formation-${formationKey}-${slotName}-${treasureSlot}`
                }));
            };
            
            // ドロップ
            // ドロップ
            const handleDrop = (e, formationKey, slotName) => {
                e.preventDefault();
                if (!draggedGeneral) return;
                
                // UR武将の重複チェック（武将リストからの配置、または移動元がある場合）
                const generalRarity = draggedGeneral.rarity || draggedGeneral.general?.rarity;
                const generalId = draggedGeneral.id || draggedGeneral.general?.id;
                const generalName = draggedGeneral.name || draggedGeneral.general?.name;
                
                if (generalRarity === 'UR' && !draggedGeneral.sourceFormation) {
                    // 武将リストからの新規配置の場合のみチェック
                    if (isURGeneralUsed(generalId)) {
                        alert('UR武将は重複して配置できません');
                        setDraggedGeneral(null);
                        return;
                    }
                }
                
                // 移動元がある場合（配置済み武将の移動）
                if (draggedGeneral.sourceFormation && draggedGeneral.sourceSlot) {
                    setFormations(prev => {
                        const newFormations = { ...prev };
                        
                        // 移動先に既に武将がいるかチェック
                        const targetGeneral = newFormations[formationKey]?.slots?.[slotName];
                        
                        if (targetGeneral) {
                            // 位置交換：移動先の武将を移動元に配置
                            const targetGeneralData = {
                                id: targetGeneral.id,
                                name: targetGeneral.name,
                                rarity: targetGeneral.rarity,
                                unit_type: targetGeneral.unit_type,
                                leadership: targetGeneral.leadership,
                                attack: targetGeneral.attack,
                                intelligence: targetGeneral.intelligence,
                                affinity: targetGeneral.affinity
                            };
                            
                            if (targetGeneral.attendant_position) {
                                targetGeneralData.attendant_position = targetGeneral.attendant_position;
                            }
                            
                            // 移動元が侍従枠の場合
                            if (draggedGeneral.isFromAttendant) {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    attendants: {
                                        ...newFormations[draggedGeneral.sourceFormation].attendants,
                                        [draggedGeneral.sourceSlot]: targetGeneralData
                                    }
                                };
                            } else {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    slots: {
                                        ...newFormations[draggedGeneral.sourceFormation].slots,
                                        [draggedGeneral.sourceSlot]: targetGeneralData
                                    }
                                };
                            }
                        } else {
                            // 移動元から削除（移動先が空の場合）
                            if (draggedGeneral.isFromAttendant) {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    attendants: {
                                        ...newFormations[draggedGeneral.sourceFormation].attendants,
                                        [draggedGeneral.sourceSlot]: null
                                    }
                                };
                            } else {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    slots: {
                                        ...newFormations[draggedGeneral.sourceFormation].slots,
                                        [draggedGeneral.sourceSlot]: null
                                    }
                                };
                            }
                        }
                        
                        // ドラッグした武将を移動先に配置
                        const generalData = {
                            id: draggedGeneral.id, 
                            name: draggedGeneral.name,
                            rarity: draggedGeneral.rarity,
                            unit_type: draggedGeneral.unit_type,
                            leadership: draggedGeneral.leadership,
                            attack: draggedGeneral.attack,
                            intelligence: draggedGeneral.intelligence,
                            affinity: draggedGeneral.affinity
                        };
                        
                        if (draggedGeneral.attendant_position) {
                            generalData.attendant_position = draggedGeneral.attendant_position;
                        }
                        
                        newFormations[formationKey] = {
                            ...newFormations[formationKey],
                            slots: {
                                ...newFormations[formationKey].slots,
                                [slotName]: generalData
                            }
                        };
                        
                        return newFormations;
                    });
                } else {
                    // 武将リストからの配置
                    const generalToPlace = draggedGeneral.general || draggedGeneral;
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            ...prev[formationKey],
                            slots: {
                                ...prev[formationKey].slots,
                                [slotName]: generalToPlace
                            }
                        }
                    }));
                }
                
                setDraggedGeneral(null);
            };
            
            // 参軍のドロップ
            const handleAdvisorDrop = (e, formationKey, advisorType) => {
                e.preventDefault();
                if (!draggedGeneral) return;
                
                const generalToPlace = draggedGeneral.general || draggedGeneral;
                
                // 移動元がある場合（配置済み参軍の移動）
                if (draggedGeneral.sourceFormation && draggedGeneral.sourceAdvisorType) {
                    setFormations(prev => {
                        const newFormations = { ...prev };
                        
                        // 移動元から削除
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            advisors: {
                                ...newFormations[draggedGeneral.sourceFormation].advisors,
                                [draggedGeneral.sourceAdvisorType]: null
                            }
                        };
                        
                        // 移動先に配置
                        newFormations[formationKey] = {
                            ...newFormations[formationKey],
                            advisors: {
                                ...newFormations[formationKey].advisors,
                                [advisorType]: generalToPlace
                            }
                        };
                        
                        return newFormations;
                    });
                } else {
                    // 武将リストからの配置
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            ...prev[formationKey],
                            advisors: {
                                ...prev[formationKey].advisors,
                                [advisorType]: generalToPlace
                            }
                        }
                    }));
                }
                
                setDraggedGeneral(null);
            };
            
            // 参軍のドラッグ開始
            const handleAdvisorDragStart = (e, general, formationKey, advisorType) => {
                setDraggedGeneral({
                    general,
                    sourceFormation: formationKey,
                    sourceAdvisorType: advisorType
                });
            };
            
            // 参軍の削除
            const handleRemoveAdvisor = (formationKey, advisorType) => {
                setFormations(prev => ({
                    ...prev,
                    [formationKey]: {
                        ...prev[formationKey],
                        advisors: {
                            ...prev[formationKey].advisors,
                            [advisorType]: null
                        }
                    }
                }));
            };
            
            // 名宝のドロップ
            const handleTreasureDrop = (e, formationKey, slotName, treasureSlot) => {
                e.preventDefault();
                if (!draggedTreasure) return;
                
                // カテゴリーチェック：武器は武器枠、防具は防具枠、文物は文物枠のみ
                const slotCategoryMap = {
                    'weapon': '武器',
                    'armor': '防具',
                    'artifact': '文物'
                };
                
                if (draggedTreasure.category !== slotCategoryMap[treasureSlot]) {
                    // カテゴリーが合わない場合は装備しない
                    setDraggedTreasure(null);
                    return;
                }
                
                // 移動先のキー
                const targetTreasureKey = `${slotName}-${treasureSlot}`;
                
                // 移動元がある場合（配置済み名宝の移動）
                if (draggedTreasure.sourceFormation && draggedTreasure.sourceSlot && draggedTreasure.sourceTreasureSlot) {
                    setFormations(prev => {
                        const newFormations = { ...prev };
                        
                        // 移動先に既に名宝があるかチェック
                        const targetTreasure = newFormations[formationKey]?.treasures?.[targetTreasureKey];
                        
                        // 移動元のキー
                        const sourceTreasureKey = `${draggedTreasure.sourceSlot}-${draggedTreasure.sourceTreasureSlot}`;
                        
                        if (targetTreasure) {
                            // 入れ替え処理
                            // 移動元に移動先の名宝を配置
                            newFormations[draggedTreasure.sourceFormation] = {
                                ...newFormations[draggedTreasure.sourceFormation],
                                treasures: {
                                    ...newFormations[draggedTreasure.sourceFormation].treasures,
                                    [sourceTreasureKey]: {
                                        id: targetTreasure.id,
                                        name: targetTreasure.name,
                                        category: targetTreasure.category,
                                        weapon_type: targetTreasure.weapon_type
                                    }
                                }
                            };
                        } else {
                            // 移動先が空の場合は移動元を削除
                            newFormations[draggedTreasure.sourceFormation] = {
                                ...newFormations[draggedTreasure.sourceFormation],
                                treasures: {
                                    ...newFormations[draggedTreasure.sourceFormation].treasures,
                                    [sourceTreasureKey]: null
                                }
                            };
                        }
                        
                        // 移動先に移動元の名宝を配置
                        newFormations[formationKey] = {
                            ...newFormations[formationKey],
                            treasures: {
                                ...newFormations[formationKey].treasures,
                                [targetTreasureKey]: {
                                    id: draggedTreasure.id,
                                    name: draggedTreasure.name,
                                    category: draggedTreasure.category,
                                    weapon_type: draggedTreasure.weapon_type
                                }
                            }
                        };
                        
                        return newFormations;
                    });
                } else {
                    // 名宝リストからの配置
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            ...prev[formationKey],
                            treasures: {
                                ...prev[formationKey].treasures,
                                [targetTreasureKey]: draggedTreasure
                            }
                        }
                    }));
                }
                
                setDraggedTreasure(null);
            };
            
            // 名宝削除
            const handleRemoveTreasure = (formationKey, slotName, treasureSlot) => {
                setFormations(prev => ({
                    ...prev,
                    [formationKey]: {
                        ...prev[formationKey],
                        treasures: {
                            ...prev[formationKey].treasures,
                            [`${slotName}-${treasureSlot}`]: null
                        }
                    }
                }));
            };
            
            // 武将削除
            // 武将を削除
            // 武将を削除
            const handleRemoveGeneral = (formationKey, slotName) => {
                setFormations(prev => ({
                    ...prev,
                    [formationKey]: {
                        ...prev[formationKey],
                        slots: {
                            ...prev[formationKey].slots,
                            [slotName]: null
                        }
                    }
                }));
            };
            
            // 侍従へのドロップ
            const handleAttendantDrop = (e, formationKey, slotName) => {
                e.preventDefault();
                if (!draggedGeneral) return;
                
                // レア度チェック
                const generalRarity = draggedGeneral.rarity || draggedGeneral.general?.rarity;
                const generalId = draggedGeneral.id || draggedGeneral.general?.id;
                const generalName = draggedGeneral.name || draggedGeneral.general?.name;
                
                // LR武将は侍従に配置できない
                if (generalRarity === 'LR') {
                    alert('侍従にはUR/SSR/SR/R武将のみ配置できます');
                    setDraggedGeneral(null);
                    return;
                }
                
                // UR武将の重複チェック（武将リストからの配置、または移動元がある場合）
                if (generalRarity === 'UR' && !draggedGeneral.sourceFormation) {
                    // 武将リストからの新規配置の場合のみチェック
                    if (isURGeneralUsed(generalId)) {
                        alert('UR武将は重複して配置できません');
                        setDraggedGeneral(null);
                        return;
                    }
                }
                
                // 移動元がある場合（配置済み武将の移動）
                if (draggedGeneral.sourceFormation && draggedGeneral.sourceSlot) {
                    setFormations(prev => {
                        const newFormations = { ...prev };
                        
                        // 移動先に既に侍従がいるかチェック
                        const targetAttendant = newFormations[formationKey]?.attendants?.[slotName];
                        
                        if (targetAttendant) {
                            // 位置交換
                            const targetAttendantData = {
                                id: targetAttendant.id,
                                name: targetAttendant.name,
                                rarity: targetAttendant.rarity,
                                unit_type: targetAttendant.unit_type,
                                leadership: targetAttendant.leadership,
                                attack: targetAttendant.attack,
                                intelligence: targetAttendant.intelligence,
                                affinity: targetAttendant.affinity
                            };
                            
                            // 移動元が侍従枠の場合
                            if (draggedGeneral.isFromAttendant) {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    attendants: {
                                        ...newFormations[draggedGeneral.sourceFormation].attendants,
                                        [draggedGeneral.sourceSlot]: targetAttendantData
                                    }
                                };
                            } else {
                                // 移動元が主将/副将/補佐の場合
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    slots: {
                                        ...newFormations[draggedGeneral.sourceFormation].slots,
                                        [draggedGeneral.sourceSlot]: targetAttendantData
                                    }
                                };
                            }
                        } else {
                            // 移動元から削除（移動先が空の場合）
                            if (draggedGeneral.isFromAttendant) {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    attendants: {
                                        ...newFormations[draggedGeneral.sourceFormation].attendants,
                                        [draggedGeneral.sourceSlot]: null
                                    }
                                };
                            } else {
                                newFormations[draggedGeneral.sourceFormation] = {
                                    ...newFormations[draggedGeneral.sourceFormation],
                                    slots: {
                                        ...newFormations[draggedGeneral.sourceFormation].slots,
                                        [draggedGeneral.sourceSlot]: null
                                    }
                                };
                            }
                        }
                        
                        // ドラッグした武将を移動先の侍従枠に配置
                        const generalData = {
                            id: draggedGeneral.id,
                            name: draggedGeneral.name,
                            rarity: draggedGeneral.rarity,
                            unit_type: draggedGeneral.unit_type,
                            leadership: draggedGeneral.leadership,
                            attack: draggedGeneral.attack,
                            intelligence: draggedGeneral.intelligence,
                            affinity: draggedGeneral.affinity
                        };
                        
                        newFormations[formationKey] = {
                            ...newFormations[formationKey],
                            attendants: {
                                ...newFormations[formationKey].attendants,
                                [slotName]: generalData
                            }
                        };
                        
                        return newFormations;
                    });
                } else {
                    // 武将リストからの配置
                    const generalData = draggedGeneral.general || draggedGeneral;
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            ...prev[formationKey],
                            attendants: {
                                ...prev[formationKey].attendants,
                                [slotName]: generalData
                            }
                        }
                    }));
                }
                
                setDraggedGeneral(null);
            };
            
            // 侍従を削除
            // 侍従を削除
            const handleRemoveAttendant = (formationKey, slotName) => {
                setFormations(prev => ({
                    ...prev,
                    [formationKey]: {
                        ...prev[formationKey],
                        attendants: {
                            ...prev[formationKey].attendants,
                            [slotName]: null
                        }
                    }
                }));
            };
            
            // リセット関数群
            const resetFormations = (scope, type) => {
                // scope: 'current' (現在のタブ) or 'all' (全タブ)
                // type: 'all', 'generals', 'attendants', 'treasures'
                
                if (!confirm(`本当に${scope === 'all' ? '全タブの' : 'このタブの'}${
                    type === 'all' ? '全配置' :
                    type === 'generals' ? '武将配置' :
                    type === 'attendants' ? '侍従配置' : '名宝配置'
                }をリセットしますか？`)) {
                    return;
                }
                
                setFormations(prev => {
                    const newFormations = { ...prev };
                    const targetTabs = scope === 'all' ? TABS : TABS.filter(tab => tab.id === activeTab);
                    
                    targetTabs.forEach(tab => {
                        for (let i = 0; i < tab.count; i++) {
                            const key = `${tab.id}-${i}`;
                            if (newFormations[key]) {
                                if (type === 'all' || type === 'generals') {
                                    newFormations[key].slots = {
                                        '主将': null,
                                        '副将1': null,
                                        '副将2': null,
                                        '補佐1': null,
                                        '補佐2': null
                                    };
                                }
                                if (type === 'all' || type === 'attendants') {
                                    newFormations[key].attendants = {};
                                }
                                if (type === 'all' || type === 'treasures') {
                                    newFormations[key].treasures = {};
                                }
                            }
                        }
                    });
                    
                    return newFormations;
                });
            };
            
            // 全データのエクスポート
            const exportAllData = () => {
                try {
                    const allData = {
                        formations: formations,
                        formationTemplates: formationTemplates,
                        disabledGenerals: disabledGenerals,
                        disabledTreasures: disabledTreasures,
                        generalRanks: generalRanks,
                        treasureRanks: treasureRanks,
                        favorites: favorites,
                        favoriteTreasures: favoriteTreasures,
                        exportDate: new Date().toISOString(),
                        version: 'v112'
                    };
                    
                    const dataStr = JSON.stringify(allData, null, 2);
                    const dataBlob = new Blob([dataStr], { type: 'application/json' });
                    const url = URL.createObjectURL(dataBlob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `hadou-formation-backup-${new Date().toISOString().split('T')[0]}.json`;
                    link.click();
                    URL.revokeObjectURL(url);
                    
                    alert('全データをエクスポートしました');
                } catch (error) {
                    console.error('エクスポートエラー:', error);
                    alert('エクスポートに失敗しました');
                }
            };
            
            // 全データのインポート
            const importAllData = () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        try {
                            const importedData = JSON.parse(event.target.result);
                            
                            // 旧バージョン（v83など）からの変換
                            let convertedData = importedData;
                            if (importedData.version && importedData.formationPatterns) {
                                convertedData = convertOldDataFormat(importedData);
                            }
                            
                            if (!confirm('インポートすると現在のデータが上書きされます。本当に実行しますか？')) {
                                return;
                            }
                            
                            // データを復元（安全に処理）
                            if (convertedData.formations && Array.isArray(convertedData.formations)) {
                                setFormations(convertedData.formations);
                            }
                            if (convertedData.formationTemplates && Array.isArray(convertedData.formationTemplates)) {
                                setFormationTemplates(convertedData.formationTemplates);
                            }
                            if (convertedData.disabledGenerals && Array.isArray(convertedData.disabledGenerals)) {
                                setDisabledGenerals(convertedData.disabledGenerals);
                            }
                            if (convertedData.disabledTreasures && Array.isArray(convertedData.disabledTreasures)) {
                                setDisabledTreasures(convertedData.disabledTreasures);
                            }
                            if (convertedData.generalRanks) {
                                setGeneralRanks(convertedData.generalRanks);
                            }
                            if (convertedData.treasureRanks) {
                                setTreasureRanks(convertedData.treasureRanks);
                            }
                            if (convertedData.favorites && Array.isArray(convertedData.favorites)) {
                                setFavorites(convertedData.favorites);
                            }
                            if (convertedData.favoriteTreasures && Array.isArray(convertedData.favoriteTreasures)) {
                                setFavoriteTreasures(convertedData.favoriteTreasures);
                            }
                            
                            alert('全データをインポートしました');
                        } catch (error) {
                            console.error('インポートエラー:', error);
                            console.error('エラー詳細:', error.message);
                            console.error('スタックトレース:', error.stack);
                            alert(`インポートに失敗しました。\n\nエラー: ${error.message}\n\n詳細はコンソールを確認してください。`);
                        }
                    };
                    reader.readAsText(file);
                };
                input.click();
            };
            
            
            // Google Driveへ保存
            const saveToGoogleDrive = async () => {
                try {
                    const allData = {
                        formations: formations,
                        formationTemplates: formationTemplates,
                        disabledGenerals: disabledGenerals,
                        disabledTreasures: disabledTreasures,
                        generalStarRank: generalStarRank,
                        treasureForgeRank: treasureForgeRank,
                        favorites: favorites,
                        favoriteTreasures: favoriteTreasures,
                        lastSync: new Date().toISOString(),
                        version: 'v114'
                    };
                    
                    const dataStr = JSON.stringify(allData, null, 2);
                    const blob = new Blob([dataStr], { type: 'application/json' });
                    
                    // Google Driveへの保存はブラウザの制限により、
                    // ユーザーがGoogle Driveアプリで手動でアップロードする必要があります
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'hadou-formation-sync.json';
                    link.click();
                    URL.revokeObjectURL(url);
                    
                    const syncTime = new Date().toISOString();
                    setGdriveLastSync(syncTime);
                    try {
                        localStorage.setItem('gdriveLastSync', syncTime);
                    } catch (e) {
                        console.warn('localStorage保存エラー:', e);
                    }
                    
                    alert('データをエクスポートしました。\nこのファイルをGoogle Driveの「hadou-formation」フォルダにアップロードしてください。');
                } catch (error) {
                    console.error('保存エラー:', error);
                    alert('保存に失敗しました');
                }
            };
            
            // Google Driveから読み込み
            const loadFromGoogleDrive = () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        try {
                            const importedData = JSON.parse(event.target.result);
                            
                            if (!confirm('Google Driveのデータで上書きしますか？')) {
                                return;
                            }
                            
                            // データを復元
                            if (importedData.formations) setFormations(importedData.formations);
                            if (importedData.formationTemplates) setFormationTemplates(importedData.formationTemplates);
                            if (importedData.disabledGenerals) setDisabledGenerals(importedData.disabledGenerals);
                            if (importedData.disabledTreasures) setDisabledTreasures(importedData.disabledTreasures);
                            // 星ランク・鍛錬ランクを更新
                            if (importedData.generalStarRank || importedData.treasureForgeRank) {
                                setProfileData(prev => ({
                                    ...prev,
                                    [currentProfile]: {
                                        generalStarRank: importedData.generalStarRank || prev[currentProfile].generalStarRank,
                                        treasureForgeRank: importedData.treasureForgeRank || prev[currentProfile].treasureForgeRank,
                                        treasureURStatus: prev[currentProfile].treasureURStatus
                                    }
                                }));
                            }
                            if (importedData.favorites) setFavorites(importedData.favorites);
                            if (importedData.favoriteTreasures) setFavoriteTreasures(importedData.favoriteTreasures);
                            
                            const syncTime = importedData.lastSync || new Date().toISOString();
                            setGdriveLastSync(syncTime);
                            try {
                                localStorage.setItem('gdriveLastSync', syncTime);
                            } catch (e) {
                                console.warn('localStorage保存エラー:', e);
                            }
                            
                            alert('Google Driveからデータを読み込みました');
                        } catch (error) {
                            console.error('読み込みエラー:', error);
                            alert('読み込みに失敗しました');
                        }
                    };
                    reader.readAsText(file);
                };
                input.click();
            };
            
            // 武将ダブルクリック：空き枠に自動配置
            const handleGeneralDoubleClick = (general) => {
                // 既に使用中の武将をダブルクリック → 編制から削除
                if (isGeneralUsed(general.id, general.name, general.rarity)) {
                    setFormations(prev => {
                        const newFormations = { ...prev };
                        
                        // 全ての部隊から該当武将を削除
                        Object.keys(newFormations).forEach(formationKey => {
                            // スロットから削除
                            if (newFormations[formationKey].slots) {
                                Object.keys(newFormations[formationKey].slots).forEach(slotName => {
                                    const slot = newFormations[formationKey].slots[slotName];
                                    if (slot && slot.id === general.id && slot.rarity === general.rarity) {
                                        newFormations[formationKey].slots[slotName] = null;
                                    }
                                });
                            }
                            
                            // 侍従から削除
                            if (newFormations[formationKey].attendants) {
                                Object.keys(newFormations[formationKey].attendants).forEach(attendantKey => {
                                    const attendant = newFormations[formationKey].attendants[attendantKey];
                                    if (attendant && attendant.id === general.id && attendant.rarity === general.rarity) {
                                        newFormations[formationKey].attendants[attendantKey] = null;
                                    }
                                });
                            }
                        });
                        
                        return newFormations;
                    });
                    return;
                }
                
                // UR武将の場合は重複チェック（配置しようとしている時のみ）
                if (general.rarity === 'UR' && isURGeneralUsed(general.id)) {
                    alert('UR武将は重複して配置できません');
                    return;
                }
                
                const slotOrder = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
                const formationOrder = [];
                
                // おススメ部隊を最優先
                if (recommendTargetFormation && !collapsedFormations[recommendTargetFormation]) {
                    formationOrder.push(recommendTargetFormation);
                }
                
                // 現在のタブの部隊を次に優先
                const currentTab = TABS.find(tab => tab.id === activeTab);
                if (currentTab) {
                    for (let i = 0; i < currentTab.count; i++) {
                        const formationKey = `${currentTab.id}-${i}`;
                        if (formationKey !== recommendTargetFormation) {
                            formationOrder.push(formationKey);
                        }
                    }
                }
                
                // 残りの部隊順序を構築
                TABS.forEach(tab => {
                    if (tab.id !== activeTab) {
                        for (let i = 0; i < tab.count; i++) {
                            const formationKey = `${tab.id}-${i}`;
                            if (formationKey !== recommendTargetFormation) {
                                formationOrder.push(formationKey);
                            }
                        }
                    }
                });
                
                // LR武将：主将/副将/補佐枠を探す
                if (general.rarity === 'LR') {
                    for (const formationKey of formationOrder) {
                        // 折りたたまれている部隊はスキップ
                        if (collapsedFormations[formationKey]) {
                            continue;
                        }
                        
                        for (const slotName of slotOrder) {
                            if (!formations[formationKey]?.slots[slotName]) {
                                // 空き枠に配置
                                setFormations(prev => ({
                                    ...prev,
                                    [formationKey]: {
                                        ...prev[formationKey],
                                        slots: {
                                            ...prev[formationKey].slots,
                                            [slotName]: general
                                        }
                                    }
                                }));
                                return;
                            }
                        }
                    }
                }
                
                // UR/SSR/SR/R武将：侍従枠を探す
                if (['UR', 'SSR', 'SR', 'R'].includes(general.rarity)) {
                    for (const formationKey of formationOrder) {
                        // 折りたたまれている部隊はスキップ
                        if (collapsedFormations[formationKey]) {
                            continue;
                        }
                        for (const slotName of slotOrder) {
                            const attendantKey = slotName;
                            if (!formations[formationKey]?.attendants?.[attendantKey]) {
                                // 空き侍従枠に配置
                                setFormations(prev => ({
                                    ...prev,
                                    [formationKey]: {
                                        ...prev[formationKey],
                                        attendants: {
                                            ...prev[formationKey].attendants,
                                            [attendantKey]: general
                                        }
                                    }
                                }));
                                return;
                            }
                        }
                    }
                }
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
            
            // JSON エクスポート
            const exportData = () => {
                const data = {
                    version: 'v144',
                    exportDate: new Date().toISOString(),
                    formationPatterns,
                    profileFormations,
                    activePattern,
                    profileData,
                    profileNames,
                    currentProfile,
                    favoriteGenerals,
                    favoriteTreasures,
                    disabledGenerals,
                    disabledTreasures,
                    formationTemplates,
                    pendingSets
                };
                
                const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `hadou-backup-${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(url);
                
                alert('データをエクスポートしました');
            };
            
            // 単一編制をエクスポート
            const exportSingleFormation = (patternIndex) => {
                const currentFormationPatterns = getCurrentFormationPatterns();
                const pattern = currentFormationPatterns[patternIndex];
                
                if (!pattern) {
                    alert('編制データが見つかりません');
                    return;
                }
                
                const data = {
                    type: 'single-formation',
                    version: 'v143',
                    exportDate: new Date().toISOString(),
                    patternIndex,
                    patternName: pattern.name || `編制${patternIndex + 1}`,
                    formation: pattern
                };
                
                const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `hadou-formation-${pattern.name || `編制${patternIndex + 1}`}-${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(url);
                
                alert(`${pattern.name || `編制${patternIndex + 1}`}をエクスポートしました`);
            };
            
            // 単一編制をインポート
            const importSingleFormation = (patternIndex) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        try {
                            const data = JSON.parse(event.target.result);
                            
                            // データ検証
                            if (data.type !== 'single-formation' || !data.formation) {
                                alert('無効な編制ファイルです');
                                return;
                            }
                            
                            // 確認ダイアログ
                            const targetName = getCurrentFormationPatterns()[patternIndex]?.name || `編制${patternIndex + 1}`;
                            if (!confirm(`${targetName}を上書きしてインポートしますか？`)) {
                                return;
                            }
                            
                            // 編制をインポート
                            if (currentProfile === 0) {
                                // プロファイル1
                                setFormationPatterns(prev => ({
                                    ...prev,
                                    [patternIndex]: data.formation
                                }));
                            } else {
                                // プロファイル2〜5
                                setProfileFormations(prev => ({
                                    ...prev,
                                    [`profile${currentProfile}`]: {
                                        ...prev[`profile${currentProfile}`],
                                        [patternIndex]: data.formation
                                    }
                                }));
                            }
                            
                            alert(`${data.patternName}をインポートしました`);
                        } catch (error) {
                            alert('インポートに失敗しました: ' + error.message);
                        }
                    };
                    reader.readAsText(file);
                };
                input.click();
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
            
            // JSON インポート
            const importData = (event) => {
                const file = event.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        
                        // データ検証
                        if (!data.formationPatterns || !data.profileData) {
                            alert('無効なデータファイルです');
                            return;
                        }
                        
                        // 確認ダイアログ
                        if (!confirm('現在のデータは上書きされます。インポートを続けますか？')) {
                            return;
                        }
                        
                        // データをインポート
                        if (data.formationPatterns) {
                            // マイグレーション: 5個から10個に拡張 & 古いデータ形式の変換
                            const defaultPattern = { name: "", formations: {}, collapsedFormations: {}, allowDuplicates: false };
                            
                            for (let i = 0; i < 10; i++) {
                                if (!data.formationPatterns[i]) {
                                    // 存在しない編制パターンを追加
                                    data.formationPatterns[i] = {
                                        ...defaultPattern,
                                        name: `編制${i + 1}`
                                    };
                                } else {
                                    // allowDuplicatesがない場合は追加
                                    if (!data.formationPatterns[i].hasOwnProperty('allowDuplicates')) {
                                        data.formationPatterns[i].allowDuplicates = false;
                                    }
                                    
                                    // 古いデータ形式を変換（type → formationType）
                                    if (data.formationPatterns[i].formations) {
                                        Object.keys(data.formationPatterns[i].formations).forEach(formationKey => {
                                            const formation = data.formationPatterns[i].formations[formationKey];
                                            if (formation && formation.type) {
                                                // type → formationType に変換
                                                formation.formationType = formation.type;
                                                delete formation.type;
                                            }
                                            // formationTypeがない場合はデフォルト値
                                            if (formation && !formation.formationType) {
                                                formation.formationType = '基本陣形';
                                            }
                                            // attendants, treasures, advisorsが存在しない場合は初期化
                                            if (formation && !formation.attendants) {
                                                formation.attendants = {};
                                            }
                                            if (formation && !formation.treasures) {
                                                formation.treasures = {};
                                            }
                                            if (formation && !formation.advisors) {
                                                formation.advisors = {};
                                            }
                                        });
                                    }
                                }
                            }
                            
                            setFormationPatterns(data.formationPatterns);
                        }
                        if (data.activePattern !== undefined) setActivePattern(data.activePattern);
                        
                        // プロファイル別編制をインポート
                        if (data.profileFormations) {
                            setProfileFormations(data.profileFormations);
                            localStorage.setItem('profileFormations', JSON.stringify(data.profileFormations));
                        }
                        
                        if (data.profileData) setProfileData(data.profileData);
                        if (data.profileNames) setProfileNames(data.profileNames);
                        if (data.currentProfile !== undefined) setCurrentProfile(data.currentProfile);
                        if (data.favoriteGenerals) setFavoriteGenerals(data.favoriteGenerals);
                        if (data.favoriteTreasures) setFavoriteTreasures(data.favoriteTreasures);
                        if (data.disabledGenerals) setDisabledGenerals(data.disabledGenerals);
                        if (data.disabledTreasures) setDisabledTreasures(data.disabledTreasures);
                        if (data.formationTemplates) setFormationTemplates(data.formationTemplates);
                        if (data.pendingSets) setPendingSets(data.pendingSets);
                        
                        alert('データをインポートしました');
                        
                        // ファイル入力をリセット
                        event.target.value = '';
                    } catch (error) {
                        alert('データの読み込みに失敗しました: ' + error.message);
                    }
                };
                reader.readAsText(file);
            };
            
            // プロファイルエクスポート
            const exportProfile = () => {
                const data = {
                    version: 'v84',
                    exportDate: new Date().toISOString(),
                    type: 'profile',
                    currentProfile,
                    profileName: profileNames[currentProfile],
                    profileData: profileData[currentProfile],
                    favoriteGenerals,
                    favoriteTreasures,
                    disabledGenerals,
                    disabledTreasures
                };
                
                const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `hadou-profile-${profileNames[currentProfile]}-${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(url);
                
                alert(`プロファイル「${profileNames[currentProfile]}」をエクスポートしました`);
            };
            
            // プロファイルインポート
            const importProfile = (event) => {
                const file = event.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        
                        // データ検証
                        if (data.type !== 'profile' || !data.profileData) {
                            alert('無効なプロファイルファイルです');
                            return;
                        }
                        
                        // 確認ダイアログ
                        const targetProfile = currentProfile;
                        if (!confirm(`プロファイル「${profileNames[targetProfile]}」に上書きしますか？\n（インポート元: ${data.profileName || '不明'}）`)) {
                            return;
                        }
                        
                        // プロファイルデータをインポート
                        setProfileData(prev => ({
                            ...prev,
                            [targetProfile]: data.profileData
                        }));
                        
                        // お気に入り・不使用も上書き
                        if (data.favoriteGenerals) setFavoriteGenerals(data.favoriteGenerals);
                        if (data.favoriteTreasures) setFavoriteTreasures(data.favoriteTreasures);
                        if (data.disabledGenerals) setDisabledGenerals(data.disabledGenerals);
                        if (data.disabledTreasures) setDisabledTreasures(data.disabledTreasures);
                        
                        alert(`プロファイル「${profileNames[targetProfile]}」にインポートしました`);
                        
                        // ファイル入力をリセット
                        event.target.value = '';
                    } catch (error) {
                        alert('プロファイルの読み込みに失敗しました: ' + error.message);
                    }
                };
                reader.readAsText(file);
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
                                    background: showImages ? '#e67e22' : 'var(--text-muted)',
                                    border: `1px solid ${showImages ? '#f39c12' : 'var(--text-muted)'}`,
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
                                                        border: activePattern === patternIndex ? '1px solid #4caf50' : '1px solid #3a3a3a',
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
                                                            color: '#9b59b6',
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
                                            border: currentProfile !== 0 ? '2px solid #66bb6a' : '2px solid #444',
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
                                                border: currentProfile === index ? '2px solid #d4af37' : '2px solid #3a3a3a',
                                                color: currentProfile === index ? 'var(--text-primary)' : 'var(--text-primary)',
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
                        <div className="formations-area">
                            {currentFormations.map(({ key, number, data }) => (
                                <div key={key} className="formation-card">
                                    <div className="formation-header">
                                        <div style={{display: 'flex', alignItems: 'center', gap: '12px', flex: 1}}>
                                            <input
                                                type="checkbox"
                                                id={`collapse-${key}`}
                                                checked={!collapsedFormations[key]}
                                                onChange={() => toggleFormationCollapse(key)}
                                                style={{width: '16px', height: '16px', cursor: 'pointer'}}
                                            />
                                            <button
                                                className={`recommend-target-radio ${recommendTargetFormation === key ? 'selected' : ''}`}
                                                onClick={() => setRecommendTargetFormation(key)}
                                                title="おススメフィルタの対象部隊に設定"
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    border: recommendTargetFormation === key ? '2px solid #ffd700' : '2px solid #666',
                                                    borderRadius: '50%',
                                                    background: recommendTargetFormation === key ? 'var(--rank-color)' : 'transparent',
                                                    color: recommendTargetFormation === key ? 'var(--bg-base)' : 'var(--text-muted)',
                                                    cursor: 'pointer',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: recommendTargetFormation === key ? '12px' : '14px',
                                                    padding: '0',
                                                    transition: 'all 0.3s'
                                                }}
                                            >
                                                {recommendTargetFormation === key ? '🎯' : '○'}
                                            </button>
                                            <label 
                                                htmlFor={`collapse-${key}`}
                                                style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}
                                            >
                                                <div className="formation-number">部隊 {number}</div>
                                                {data.slots?.['主将'] && (
                                                    <div style={{
                                                        fontSize: '11px', 
                                                        color: 'var(--text-primary)',
                                                        padding: '2px 6px',
                                                        background: 'rgba(37, 99, 235, 0.08)',
                                                        borderRadius: '3px',
                                                        border: '1px solid rgba(37, 99, 235, 0.15)'
                                                    }}>
                                                        {getUnitTypeName(data.slots['主将'].unit_type)}
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                        <button
                                            onClick={() => saveFormationTemplate(key)}
                                            style={{
                                                padding: '4px 12px',
                                                background: 'var(--success)',
                                                border: '1px solid var(--success)',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                marginRight: '8px'
                                            }}
                                            title="この部隊をテンプレートとして保存"
                                        >
                                            保存
                                        </button>
                                        <button
                                            onClick={() => loadFormationTemplate(key)}
                                            style={{
                                                padding: '4px 12px',
                                                background: 'var(--accent)',
                                                border: '1px solid var(--accent)',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                marginRight: '8px'
                                            }}
                                            title="テンプレートから呼び出し"
                                        >
                                            呼出
                                        </button>
                                        <button
                                            onClick={() => resetFormation(key)}
                                            style={{
                                                padding: '4px 12px',
                                                background: 'var(--danger)',
                                                border: '1px solid var(--danger)',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                marginRight: '8px'
                                            }}
                                            title="この部隊をリセット"
                                        >
                                            リセット
                                        </button>
                                        <button
                                            onClick={() => setShowSkillEffects(prev => ({...prev, [key]: !prev[key]}))}
                                            style={{
                                                padding: '4px 12px',
                                                background: showSkillEffects[key] ? 'var(--success)' : 'var(--bg-elevated)',
                                                border: `1px solid ${showSkillEffects[key] ? 'var(--success)' : 'var(--text-muted)'}`,
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                marginRight: '8px'
                                            }}
                                            title="技能効果を表示"
                                        >
                                            {showSkillEffects[key] ? '技能効果▲' : '技能効果▼'}
                                        </button>
                                        <select
                                            className="formation-select"
                                            value={data.formationType || '基本陣形'}
                                            onChange={(e) => {
                                                setFormations(prev => ({
                                                    ...prev,
                                                    [key]: {
                                                        ...prev[key],
                                                        formationType: e.target.value
                                                    }
                                                }));
                                            }}
                                        >
                                            {Object.keys(FORMATIONS_TYPES).map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    {/* 折りたたみ時は非表示 */}
                                    {!collapsedFormations[key] && (
                                    <div>
                                    {/* コメント入力欄 */}
                                    <div style={{
                                        padding: '8px 12px',
                                        borderBottom: '1px solid var(--border-base)',
                                        background: 'var(--bg-base)'
                                    }}>
                                        <input
                                            type="text"
                                            placeholder="メモを入力..."
                                            value={data.comment || ''}
                                            onChange={(e) => {
                                                setFormations(prev => ({
                                                    ...prev,
                                                    [key]: {
                                                        ...prev[key],
                                                        comment: e.target.value
                                                    }
                                                }));
                                            }}
                                            style={{
                                                width: '100%',
                                                padding: '6px 10px',
                                                background: 'var(--bg-base)',
                                                border: '1px solid var(--border-base)',
                                                borderRadius: '4px',
                                                color: 'var(--text-body)',
                                                fontSize: '12px',
                                                fontFamily: 'inherit'
                                            }}
                                        />
                                    </div>
                                    {/* 技能効果表示 */}
                                    {showSkillEffects[key] && (() => {
                                        const effects = calcSkillEffects(key);
                                        if (!effects) return null;
                                        
                                        return (
                                            <div style={{
                                                padding: '12px',
                                                background: 'var(--bg-card)',
                                                borderRadius: '8px',
                                                marginBottom: '16px',
                                                border: '2px solid var(--accent)',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                                            }}>
                                                <div style={{
                                                    fontSize: '14px',
                                                    fontWeight: 'bold',
                                                    color: 'var(--text-primary)',
                                                    marginBottom: '8px',
                                                    borderBottom: '1px solid rgba(37, 99, 235, 0.15)',
                                                    paddingBottom: '4px'
                                                }}>
                                                    技能効果
                                                </div>
                                                <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
                                                    {['攻撃速度', '会心発生', '戦法速度'].map(param => {
                                                        const value = effects[param];
                                                        if (value === 0) return null;
                                                        return (
                                                            <div key={param} style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px'
                                                            }}>
                                                                <span style={{
                                                                    color: 'var(--text-muted)',
                                                                    fontSize: '13px'
                                                                }}>
                                                                    {param}:
                                                                </span>
                                                                <span style={{
                                                                    color: 'var(--success)',
                                                                    fontSize: '16px',
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    +{(value * 100).toFixed(1)}%
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                {Object.values(effects).every(v => v === 0) && (
                                                    <div style={{
                                                        color: 'var(--text-muted)',
                                                        fontSize: '13px',
                                                        fontStyle: 'italic'
                                                    }}>
                                                        対象パラメータの技能効果なし
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                    {/* 陣形と編制枠を横並び */}
                                    <div style={{display: 'flex', gap: '16px', position: 'relative'}}>
                                        {/* 左：陣形グリッド（相対位置指定でSVGオーバーレイ用） */}
                                        <div style={{flex: '0 0 auto', position: 'relative'}}>
                                            {/* グリッド */}
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(3, 60px)',
                                                gridTemplateRows: 'repeat(3, 60px)',
                                                gap: '4px'
                                            }}>
                                                {(() => {
                                                    const formationType = data.formationType || '基本陣形';
                                                    const formationData = FORMATIONS_TYPES[formationType];
                                                    const attendantPlacements = resolveAttendantConflicts(formationType, data.slots);
                                                    
                                                    return formationData.positions.map((row, rowIndex) =>
                                                        row.map((cell, colIndex) => {
                                                            let slotName = null;
                                                            for (const [slot, [r, c]] of Object.entries(formationData.mapping)) {
                                                                if (r === rowIndex && c === colIndex) {
                                                                    slotName = slot;
                                                                    break;
                                                                }
                                                            }
                                                            const general = slotName ? data.slots[slotName] : null;
                                                            
                                                            // 侍従枠がこの位置にあるかチェック
                                                            let attendantSlot = null;
                                                            for (const [slot, coords] of Object.entries(attendantPlacements)) {
                                                                if (coords && coords[0] === rowIndex && coords[1] === colIndex) {
                                                                    attendantSlot = slot;
                                                                    break;
                                                                }
                                                            }
                                                            const hasAttendantSlot = attendantSlot !== null;
                                                            const attendant = attendantSlot ? data.attendants?.[attendantSlot] : null;
                                                            
                                                            // 武将の勢力色とレア度色を取得
                                                            const affinityColor = general ? getAffinityColor(general.affinity) : 
                                                                                (attendant ? getAffinityColor(attendant.affinity) : null);
                                                            const rarityColor = general ? getRarityColor(general.rarity) : 
                                                                              (attendant ? getRarityColor(attendant.rarity) : null);
                                                            
                                                            return (
                                                                <div
                                                                    key={`${rowIndex}-${colIndex}`}
                                                                    style={{
                                                                        border: cell === 1 ? '2px solid #d4af37' : (hasAttendantSlot ? '2px solid #6495ed' : '1px solid var(--border-light)'),
                                                                        background: cell === 1 ? 'var(--bg-card)' : (hasAttendantSlot ? 'var(--bg-card)' : 'var(--bg-base)'),
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontSize: '10px',
                                                                        color: general ? affinityColor : (hasAttendantSlot ? '#6495ed' : 'var(--text-muted)'),
                                                                        fontWeight: general || attendant ? 'bold' : 'normal',
                                                                        padding: '2px',
                                                                        textAlign: 'center',
                                                                        flexDirection: 'column',
                                                                        gap: '1px'
                                                                    }}
                                                                >
                                                                    {general ? (
                                                                        showImages ? (
                                                                            <ItemImage 
                                                                                src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                                                alt={general.name}
                                                                                rarity={general.rarity}
                                                                            />
                                                                        ) : (
                                                                            <>
                                                                                <div style={{fontSize: '7px', color: rarityColor, opacity: 0.8}}>{general.rarity}</div>
                                                                                <div>{general.name.substring(0, 2)}</div>
                                                                            </>
                                                                        )
                                                                    ) : hasAttendantSlot ? (
                                                                        attendant ? (
                                                                            showImages ? (
                                                                                <ItemImage 
                                                                                    src={getImageUrl('general', attendant.id, attendant.rarity, attendant.name)}
                                                                                    alt={attendant.name}
                                                                                    rarity={attendant.rarity}
                                                                                />
                                                                            ) : (
                                                                                <>
                                                                                    <div style={{fontSize: '7px', color: 'var(--text-muted)'}}>侍</div>
                                                                                    <div style={{fontSize: '6px', color: rarityColor, opacity: 0.8}}>{attendant.rarity}</div>
                                                                                    <div style={{color: affinityColor}}>{attendant.name.substring(0, 2)}</div>
                                                                                </>
                                                                            )
                                                                        ) : (
                                                                            <div style={{fontSize: '9px', color: '#6495ed'}}>侍従</div>
                                                                        )
                                                                    ) : (
                                                                        slotName || ''
                                                                    )}
                                                                </div>
                                                            );
                                                        })
                                                    ).flat();
                                                })()}
                                            </div>
                                            
                                            {/* SVG接続線（グリッドの上にオーバーレイ） */}
                                            <svg 
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '196px',  // 60*3 + 4*2
                                                    height: '196px',
                                                    pointerEvents: 'none'
                                                }}
                                            >
                                                {(() => {
                                                    const formationType = data.formationType || '基本陣形';
                                                    const formationData = FORMATIONS_TYPES[formationType];
                                                    const attendantPlacements = resolveAttendantConflicts(formationType, data.slots);
                                                    const lines = [];
                                                    
                                                    // 各侍従枠について、LR武将との接続線を描画
                                                    Object.entries(attendantPlacements).forEach(([slotName, attendantCoords]) => {
                                                        if (!attendantCoords) return;
                                                        
                                                        const generalCoords = formationData.mapping[slotName];
                                                        if (!generalCoords) return;
                                                        
                                                        // 座標を計算（セルの中心）
                                                        const cellSize = 60;
                                                        const gap = 4;
                                                        
                                                        const generalX = generalCoords[1] * (cellSize + gap) + cellSize / 2;
                                                        const generalY = generalCoords[0] * (cellSize + gap) + cellSize / 2;
                                                        
                                                        const attendantX = attendantCoords[1] * (cellSize + gap) + cellSize / 2;
                                                        const attendantY = attendantCoords[0] * (cellSize + gap) + cellSize / 2;
                                                        
                                                        lines.push(
                                                            <line
                                                                key={slotName}
                                                                x1={generalX}
                                                                y1={generalY}
                                                                x2={attendantX}
                                                                y2={attendantY}
                                                                stroke="#6495ed"
                                                                strokeWidth="1.5"
                                                                strokeDasharray="3,3"
                                                                opacity="0.5"
                                                            />
                                                        );
                                                    });
                                                    
                                                    return lines;
                                                })()}
                                            </svg>
                                        </div>
                                        
                                        {/* 右：編制枠 */}
                                        <div className="template-slots" style={{flex: '1'}}>
                                        {['主将', '副将1', '副将2', '補佐1', '補佐2'].map(slotName => (
                                            <div key={slotName} className="slot-row">
                                                <div className="slot-label">{slotName}</div>
                                                
                                                {/* 武将枠 */}
                                                <div
                                                    className={`slot-drop-zone ${data.slots[slotName] ? 'filled' : ''}`}
                                                    data-rarity={data.slots[slotName]?.rarity}
                                                    onDragOver={(e) => {
                                                        e.preventDefault();
                                                        e.currentTarget.classList.add('drag-over');
                                                    }}
                                                    onDragLeave={(e) => {
                                                        e.currentTarget.classList.remove('drag-over');
                                                    }}
                                                    onDrop={(e) => {
                                                        e.currentTarget.classList.remove('drag-over');
                                                        handleDrop(e, key, slotName);
                                                    }}
                                                >
                                                    {data.slots[slotName] ? (
                                                        <div 
                                                            className="slot-content"
                                                            data-rarity={data.slots[slotName].rarity}
                                                            draggable={true}
                                                            onDragStart={(e) => handleSlotDragStart(e, data.slots[slotName], key, slotName)}
                                                            onDoubleClick={() => handleRemoveGeneral(key, slotName)}
                                                            style={{cursor: 'grab'}}
                                                            title="ダブルクリックで削除"
                                                        >
                                                            <button
                                                                className="mini-remove-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleRemoveGeneral(key, slotName);
                                                                }}
                                                            >
                                                                ×
                                                            </button>
                                                            <div className="slot-general-info" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                                <ItemImage 
                                                                    src={getImageUrl('general', data.slots[slotName].id, data.slots[slotName].rarity, data.slots[slotName].name)}
                                                                    alt={data.slots[slotName].name}
                                                                    rarity={data.slots[slotName].rarity}
                                                                />
                                                                <div style={{flex: 1}}>
                                                                    <div className="slot-general-name" style={{color: 'var(--text-primary)'}}>
                                                                        {data.slots[slotName].name}
                                                                    </div>
                                                                    <div className="slot-general-details">
                                                                    <span style={{color: getRarityColor(data.slots[slotName].rarity), fontWeight: 'bold'}}>
                                                                        {data.slots[slotName].rarity}
                                                                    </span>
                                                                    {' '}- {getUnitTypeName(data.slots[slotName].unit_type)}
                                                                    {' '}
                                                                    <span style={{
                                                                        color: getAffinityColor(data.slots[slotName].affinity),
                                                                        fontWeight: 'bold',
                                                                        fontSize: '11px'
                                                                    }}>
                                                                        相性{data.slots[slotName].affinity}
                                                                    </span>
                                                                    <span className="star-rank">
                                                                        {' '}{(() => {
                                                                            const rank = getGeneralStarRank(data.slots[slotName]);
                                                                            return '★'.repeat(rank) + '☆'.repeat(7 - rank);
                                                                        })()}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="slot-empty">武将</div>
                                                    )}
                                                </div>
                                                
                                                {/* 侍従枠 */}
                                                <div 
                                                    className={`attendant-zone ${data.attendants?.[slotName] ? 'filled' : ''}`}
                                                    data-rarity={data.attendants?.[slotName]?.rarity}
                                                    onDragOver={(e) => e.preventDefault()}
                                                    onDrop={(e) => handleAttendantDrop(e, key, slotName)}
                                                >
                                                    {data.attendants?.[slotName] ? (
                                                        <div 
                                                            className="slot-general-info"
                                                            draggable={true}
                                                            onDragStart={(e) => handleAttendantDragStart(e, data.attendants[slotName], key, slotName)}
                                                            onDoubleClick={() => handleRemoveAttendant(key, slotName)}
                                                            style={{cursor: 'grab', width: '100%', height: '100%', padding: '4px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                                                            title="ドラッグで移動、ダブルクリックで削除"
                                                        >
                                                            <button
                                                                className="mini-remove-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleRemoveAttendant(key, slotName);
                                                                }}
                                                            >
                                                                ×
                                                            </button>
                                                            {showImages ? (
                                                                <ItemImage 
                                                                    src={getImageUrl('general', data.attendants[slotName].id, data.attendants[slotName].rarity, data.attendants[slotName].name)}
                                                                    alt={data.attendants[slotName].name}
                                                                    rarity={data.attendants[slotName].rarity}
                                                                />
                                                            ) : (
                                                                <div style={{width: '100%'}}>
                                                                    <div style={{fontSize: '11px', color: 'var(--text-primary)', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                                        {data.attendants[slotName].name}
                                                                    </div>
                                                                    <div style={{fontSize: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                                        <span style={{color: getRarityColor(data.attendants[slotName].rarity), fontWeight: 'bold'}}>
                                                                            {data.attendants[slotName].rarity}
                                                                        </span>
                                                                        {' '}
                                                                        <span style={{
                                                                            color: getAffinityColor(data.attendants[slotName].affinity),
                                                                            fontWeight: 'bold'
                                                                        }}>
                                                                            相性{data.attendants[slotName].affinity}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        '侍従'
                                                    )}
                                                </div>
                                                
                                                {/* 名宝枠 */}
                                                <div className="treasures-zone">
                                                    {['weapon', 'armor', 'artifact'].map((treasureSlot, idx) => {
                                                        const treasureKey = `${slotName}-${treasureSlot}`;
                                                        const equippedTreasure = data.treasures?.[treasureKey];
                                                        const labels = ['武器', '防具', '文物'];
                                                        
                                                        return (
                                                            <div 
                                                                key={treasureSlot}
                                                                className={`treasure-mini-slot ${equippedTreasure ? 'filled' : ''}`}
                                                                onDragOver={(e) => e.preventDefault()}
                                                                onDrop={(e) => handleTreasureDrop(e, key, slotName, treasureSlot)}
                                                                draggable={!!equippedTreasure}
                                                                onDragStart={(e) => {
                                                                    if (equippedTreasure) {
                                                                        handleTreasureSlotDragStart(e, equippedTreasure, key, slotName, treasureSlot);
                                                                    }
                                                                }}
                                                                onDoubleClick={(e) => {
                                                                    if (equippedTreasure) {
                                                                        e.stopPropagation();
                                                                        handleRemoveTreasure(key, slotName, treasureSlot);
                                                                    }
                                                                }}
                                                                style={equippedTreasure ? {cursor: 'grab'} : {}}
                                                                title={equippedTreasure ? "ダブルクリックで削除" : ""}
                                                            >
                                                                {equippedTreasure ? (
                                                                    <>
                                                                        {getTreasureForgeRank(equippedTreasure.id) >= 0 && (
                                                                            <div className={`forge-rank ${isTreasureUR(equippedTreasure.id) ? 'ur' : ''}`} style={{fontSize: '6px', top: '1px', left: '1px'}}>
                                                                                {isTreasureUR(equippedTreasure.id) ? '★' : '☆'}{getTreasureForgeRank(equippedTreasure.id)}
                                                                            </div>
                                                                        )}
                                                                        <ItemImage 
                                                                            src={getImageUrl('treasure', equippedTreasure.id, null, equippedTreasure.name)}
                                                                            alt={equippedTreasure.name}
                                                                            rarity={isTreasureUR(equippedTreasure.id) ? 'UR' : 'normal'}
                                                                        />
                                                                        <div 
                                                                            className="treasure-name-mini"
                                                                            style={{
                                                                                color: isTreasureUR(equippedTreasure.id) ? 'var(--rarity-ur)' : 'var(--text-body)',
                                                                                marginTop: '2px'
                                                                            }}
                                                                        >
                                                                            {equippedTreasure.name}{isTreasureUR(equippedTreasure.id) ? '(UR)' : ''}
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    labels[idx]
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                        
                                        {/* 参軍配置エリア */}
                                        <div className="advisor-section" style={{
                                            marginTop: '12px',
                                            padding: '8px',
                                            background: 'var(--bg-card)',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border-base)'
                                        }}>
                                            <div style={{
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                color: 'var(--text-primary)',
                                                marginBottom: '8px',
                                                borderBottom: '1px solid var(--border-base)',
                                                paddingBottom: '4px'
                                            }}>
                                                参軍配置
                                            </div>
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: '50px 1fr',
                                                gap: '6px',
                                                alignItems: 'center'
                                            }}>
                                                {[
                                                    { key: 'leadership', label: '統率', color: 'var(--danger)' },
                                                    { key: 'attack', label: '武力', color: '#e67e22' },
                                                    { key: 'intelligence', label: '知力', color: 'var(--accent)' },
                                                    { key: 'politics', label: '政治', color: '#9b59b6' },
                                                    { key: 'charm', label: '魅力', color: '#1abc9c' }
                                                ].map(advisor => {
                                                    const advisorGeneral = data.advisors?.[advisor.key];
                                                    return (
                                                        <React.Fragment key={advisor.key}>
                                                            <div style={{
                                                                fontSize: '10px',
                                                                fontWeight: 'bold',
                                                                color: advisor.color,
                                                                padding: '4px 8px',
                                                                background: 'rgba(0,0,0,0.3)',
                                                                borderRadius: '3px',
                                                                textAlign: 'center',
                                                                minWidth: '40px'
                                                            }}>
                                                                {advisor.label}
                                                            </div>
                                                            <div
                                                                className={`advisor-drop-zone ${advisorGeneral ? 'filled' : ''}`}
                                                                onDragOver={(e) => {
                                                                    e.preventDefault();
                                                                    e.currentTarget.classList.add('drag-over');
                                                                }}
                                                                onDragLeave={(e) => {
                                                                    e.currentTarget.classList.remove('drag-over');
                                                                }}
                                                                onDrop={(e) => {
                                                                    e.currentTarget.classList.remove('drag-over');
                                                                    handleAdvisorDrop(e, key, advisor.key);
                                                                }}
                                                                style={{
                                                                    padding: '4px',
                                                                    background: advisorGeneral ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-base)',
                                                                    border: `1px solid ${advisorGeneral ? advisor.color : 'var(--bg-elevated)'}`,
                                                                    borderRadius: '3px',
                                                                    minHeight: '52px',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    cursor: advisorGeneral ? 'grab' : 'default',
                                                                    position: 'relative'
                                                                }}
                                                                draggable={!!advisorGeneral}
                                                                onDragStart={(e) => {
                                                                    if (advisorGeneral) {
                                                                        handleAdvisorDragStart(e, advisorGeneral, key, advisor.key);
                                                                    }
                                                                }}
                                                                onDoubleClick={() => {
                                                                    if (advisorGeneral) {
                                                                        handleRemoveAdvisor(key, advisor.key);
                                                                    }
                                                                }}
                                                                title={advisorGeneral ? "ダブルクリックで削除" : ""}
                                                            >
                                                                {advisorGeneral ? (
                                                                    <>
                                                                        <button
                                                                            className="mini-remove-btn"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                handleRemoveAdvisor(key, advisor.key);
                                                                            }}
                                                                            style={{
                                                                                position: 'absolute',
                                                                                top: '2px',
                                                                                right: '2px'
                                                                            }}
                                                                        >
                                                                            ×
                                                                        </button>
                                                                        {showImages ? (
                                                                            <ItemImage 
                                                                                src={getImageUrl('general', advisorGeneral.id, advisorGeneral.rarity, advisorGeneral.name)}
                                                                                alt={advisorGeneral.name}
                                                                                rarity={advisorGeneral.rarity}
                                                                            />
                                                                        ) : (
                                                                            <div style={{width: '100%', fontSize: '10px'}}>
                                                                                <div style={{
                                                                                    color: 'var(--text-primary)',
                                                                                    fontWeight: 'bold',
                                                                                    fontSize: '11px',
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis'
                                                                                }}>
                                                                                    {advisorGeneral.name}
                                                                                </div>
                                                                                <div style={{
                                                                                    display: 'flex',
                                                                                    gap: '6px',
                                                                                    fontSize: '9px'
                                                                                }}>
                                                                                    <span style={{
                                                                                        color: getRarityColor(advisorGeneral.rarity),
                                                                                        fontWeight: 'bold'
                                                                                    }}>
                                                                                        {advisorGeneral.rarity}
                                                                                    </span>
                                                                                    <span style={{
                                                                                        color: getAffinityColor(advisorGeneral.affinity)
                                                                                    }}>
                                                                                        相性{advisorGeneral.affinity}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <div style={{
                                                                        color: 'var(--text-muted)',
                                                                        fontSize: '10px',
                                                                        textAlign: 'center',
                                                                        width: '100%'
                                                                    }}>
                                                                        参軍
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        
                                        {/* 戦闘パラメータパネル */}
                                        <div className="combat-parameters-panel">
                                            <div className="combat-params-header">
                                                <span>部隊パラメータ</span>
                                            </div>
                                            <div className="combat-params-content">
                                                {(() => {
                                                    const params = calcCombatParams(key);
                                                    if (!params) return <div className="no-data">データなし</div>;
                                                    
                                                    return (
                                                        <>
                                                            <div className="param-row">
                                                                <span className="param-icon">⚡</span>
                                                                <span className="param-label">出陣ゲージ:</span>
                                                                <span className="param-value">+{params.initialGauge.toFixed(1)}%</span>
                                                            </div>
                                                            <div className="param-row">
                                                                <span className="param-icon">🎯</span>
                                                                <span className="param-label">戦法速度:</span>
                                                                <span className="param-value">+{params.tacticSpeed.toFixed(1)}%</span>
                                                            </div>
                                                            <div className="param-row">
                                                                <span className="param-icon">🛡️</span>
                                                                <span className="param-label">致死耐性:</span>
                                                                <span className={`param-value ${params.lethalResist ? 'active' : 'inactive'}`}>
                                                                    {params.lethalResist ? 'ON' : 'OFF'}
                                                                </span>
                                                            </div>
                                                            <div className="param-row">
                                                                <span className="param-icon">⏱️</span>
                                                                <span className="param-label">戦法短縮:</span>
                                                                <span className="param-value">+{params.tacticReduce.toFixed(1)}%</span>
                                                            </div>
                                                            <div className="param-row">
                                                                <span className="param-icon">⚔️</span>
                                                                <span className="param-label">攻撃速度:</span>
                                                                <span className="param-value">+{params.attackSpeed.toFixed(1)}%</span>
                                                            </div>
                                                            <div className="param-row">
                                                                <span className="param-icon">💥</span>
                                                                <span className="param-label">会心発生:</span>
                                                                <span className="param-value">+{params.critical.toFixed(1)}%</span>
                                                            </div>
                                                        </>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                            ))}
                        </div>
                        
                        {/* 武将リスト（右1） */}
                        <div className={`generals-panel ${!showGeneralsPanel ? 'collapsed' : ''}`}>
                            <div className="panel-header">
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <div className="panel-title">武将リスト</div>
                                    <button
                                        onClick={() => setShowGeneralsPanel(!showGeneralsPanel)}
                                        style={{
                                            padding: '2px 6px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                        title={showGeneralsPanel ? 'パネルを閉じる' : 'パネルを開く'}
                                    >
                                        {showGeneralsPanel ? '▽' : '▷'}
                                    </button>
                                    {showContextHelp && (
                                        <button
                                            onClick={() => setContextHelpType('general')}
                                            style={{
                                                background: 'var(--accent)',
                                                border: 'none',
                                                borderRadius: '50%',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '10px',
                                                width: '18px',
                                                height: '18px',
                                                padding: 0,
                                                lineHeight: '18px'
                                            }}
                                            title="武将の配置方法"
                                        >
                                            ?
                                        </button>
                                    )}
                                </div>
                                
                                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                    <button
                                        onClick={() => setGeneralsSortOrder(prev => prev === 'unit_type' ? 'affinity' : 'unit_type')}
                                        style={{
                                            padding: '4px 8px',
                                            background: generalsSortOrder === 'affinity' ? 'var(--success)' : 'var(--bg-elevated)',
                                            border: '1px solid ' + (generalsSortOrder === 'affinity' ? 'var(--success)' : 'var(--bg-elevated)'),
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '10px',
                                            fontWeight: 'bold'
                                        }}
                                        title={generalsSortOrder === 'affinity' ? '相性順で表示中（クリックで兵科順に）' : '兵科順で表示中（クリックで相性順に）'}
                                    >
                                        {generalsSortOrder === 'affinity' ? '相性順' : '兵科順'}
                                    </button>
                                    {generalsSortOrder === 'affinity' && (
                                        <button
                                            onClick={() => setAffinitySortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
                                            style={{
                                                padding: '4px 8px',
                                                background: 'var(--accent)',
                                                border: '1px solid var(--accent)',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '10px',
                                                fontWeight: 'bold'
                                            }}
                                            title={affinitySortDirection === 'desc' ? '降順（高→低）クリックで昇順に' : '昇順（低→高）クリックで降順に'}
                                        >
                                            {affinitySortDirection === 'desc' ? '↓' : '↑'}
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            setUnitTypeFilter([]);
                                            setFactionFilter([]);
                                            setAttendantFilter([]);
                                            setShowOnlyFavorites(false);
                                            setShowOnlyRecommendedGenerals(false);
                                        }}
                                        style={{
                                            padding: '4px 8px',
                                            background: 'var(--danger)',
                                            border: '1px solid var(--danger)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '10px',
                                            fontWeight: 'bold'
                                        }}
                                        title="全フィルタをリセット"
                                    >
                                        🔄
                                    </button>
                                </div>
                                
                                <div className="filter-section">
                                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                                        {['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => (
                                            <button
                                                key={rarity}
                                                className={`filter-chip ${expandedRarities[rarity] ? 'active' : ''}`}
                                                onClick={() => {
                                                    // レアリティは排他的（1つだけON）
                                                    const isCurrentlyActive = expandedRarities[rarity];
                                                    
                                                    // LRがOFFになる場合、侍従タグもクリア
                                                    if (rarity === 'LR' && isCurrentlyActive) {
                                                        setAttendantFilter([]);
                                                    }
                                                    
                                                    // 全てOFFにしてから、クリックしたものだけON（再クリックでOFF）
                                                    setExpandedRarities({
                                                        LR: false,
                                                        UR: false,
                                                        SSR: false,
                                                        SR: false,
                                                        R: false,
                                                        [rarity]: !isCurrentlyActive
                                                    });
                                                }}
                                            >
                                                {rarity}
                                            </button>
                                        ))}
                                        {['槍', '弓', '馬'].map(unit => (
                                            <button
                                                key={unit}
                                                className={`filter-chip ${unitTypeFilter.includes(unit) ? 'active' : ''}`}
                                                onClick={() => toggleFilter('unitType', unit)}
                                            >
                                                {unit}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                                        {FACTION_TAGS.map(faction => (
                                            <button
                                                key={faction.name}
                                                className={`filter-chip ${factionFilter.includes(faction.name) ? 'active' : ''}`}
                                                onClick={() => toggleFilter('faction', faction.name)}
                                                style={{
                                                    background: factionFilter.includes(faction.name) ? faction.color : 'var(--bg-elevated)',
                                                    borderColor: faction.color
                                                }}
                                            >
                                                {faction.name}
                                            </button>
                                        ))}
                                        <button
                                            className={`filter-chip ${showOnlyFavorites ? 'active' : ''}`}
                                            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                                            style={{
                                                background: showOnlyFavorites ? 'var(--rank-color)' : 'var(--bg-elevated)',
                                                borderColor: 'var(--accent)',
                                                color: showOnlyFavorites ? 'var(--text-primary)' : 'var(--text-primary)'
                                            }}
                                        >
                                            ★お気に入り
                                        </button>
                                        <button
                                            className={`filter-chip ${showOnlyRecommendedGenerals ? 'active' : ''}`}
                                            onClick={() => {
                                                const targetFormation = formations[recommendTargetFormation];
                                                const mainGeneral = targetFormation?.slots?.['主将'];
                                                if (mainGeneral) {
                                                    setShowOnlyRecommendedGenerals(!showOnlyRecommendedGenerals);
                                                }
                                            }}
                                            disabled={!formations[recommendTargetFormation]?.slots?.['主将']}
                                            style={{
                                                background: showOnlyRecommendedGenerals ? 'var(--accent)' : 'var(--bg-elevated)',
                                                borderColor: 'var(--accent)',
                                                color: showOnlyRecommendedGenerals ? 'var(--text-primary)' : 'var(--text-muted)',
                                                opacity: !formations[recommendTargetFormation]?.slots?.['主将'] ? 0.5 : 1,
                                                cursor: !formations[recommendTargetFormation]?.slots?.['主将'] ? 'not-allowed' : 'pointer'
                                            }}
                                            title={!formations[recommendTargetFormation]?.slots?.['主将'] ? '対象部隊に主将を配置してください' : 'おススメ武将のみ表示'}
                                        >
                                            おススメ
                                        </button>
                                    </div>
                                    <div className="filter-group" style={{marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                                            {['左', '上', '右上', '右'].map(position => (
                                                <button
                                                    key={position}
                                                    className={`filter-chip ${attendantFilter.includes(position) ? 'active' : ''}`}
                                                    onClick={() => toggleFilter('attendant', position)}
                                                    style={{
                                                        fontSize: '10px',
                                                        padding: '4px 8px'
                                                    }}
                                                >
                                                    侍従:{position}
                                                </button>
                                            ))}
                                        </div>
                                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                                            {['左下', '下', '右下'].map(position => (
                                                <button
                                                    key={position}
                                                    className={`filter-chip ${attendantFilter.includes(position) ? 'active' : ''}`}
                                                    onClick={() => toggleFilter('attendant', position)}
                                                    style={{
                                                        fontSize: '10px',
                                                        padding: '4px 8px'
                                                    }}
                                                >
                                                    侍従:{position}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {showGeneralsPanel && (
                                <div className="generals-list">
                                    <div className="generals-tabs">
                                        <button 
                                            className={`generals-tab ${activeGeneralsTab === 'active' ? 'active' : ''}`}
                                            onClick={() => setActiveGeneralsTab('active')}
                                        >
                                            使用可能
                                        </button>
                                        <button 
                                            className={`generals-tab ${activeGeneralsTab === 'disabled' ? 'active' : ''}`}
                                            onClick={() => setActiveGeneralsTab('disabled')}
                                        >
                                            不使用 ({disabledGenerals.length})
                                        </button>
                                    </div>
                                    
                                    <div className="generals-content-wrapper">
                                    {activeGeneralsTab === 'active' ? (
                                        // 使用可能武将（レア度ごとに折りたたみ）
                                        ['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => {
                                            // このレアリティの武将が存在するかチェック
                                            const hasGenerals = ['槍', '弓', '馬'].some(unitType => 
                                                generalsByUnitTypeAndRarity[unitType][rarity].length > 0
                                            );
                                            
                                            if (!hasGenerals) return null;
                                            
                                            // このレアリティの武将の総数を計算
                                            const totalCount = ['槍', '弓', '馬'].reduce((sum, unitType) => 
                                                sum + generalsByUnitTypeAndRarity[unitType][rarity].length, 0
                                            );
                                            
                                            return (
                                                <div key={rarity} className="rarity-category" style={{marginBottom: '12px'}}>
                                                    <div 
                                                        className="rarity-category-title"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: '4px 12px',
                                                            background: 'rgba(26, 31, 46, 0.8)',
                                                            borderLeft: '3px solid var(--bordeaux)',
                                                            cursor: 'pointer',
                                                            marginBottom: '6px'
                                                        }}
                                                        onClick={() => {
                                                            setExpandedRarities(prev => ({
                                                                ...prev,
                                                                [rarity]: !prev[rarity]
                                                            }));
                                                        }}
                                                    >
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                                            <span style={{fontSize: '11px', color: 'var(--text-muted)'}}>
                                                                {expandedRarities[rarity] ? '▼' : '▶'}
                                                            </span>
                                                            <span style={{fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '12px'}}>
                                                                {rarity} ({totalCount}人)
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {expandedRarities[rarity] && (
                                                        <React.Fragment>
                                                            {['槍', '弓', '馬'].map(unitType => (
                                                                generalsByUnitTypeAndRarity[unitType][rarity].length > 0 && (
                                                                    <div key={`${unitType}-${rarity}`} className="unit-type-section">
                                                                        <div className="unit-type-title">{getUnitTypeName(unitType)} - {rarity}</div>
                                                                        <div className="generals-grid-display">
                                                                            {generalsByUnitTypeAndRarity[unitType][rarity].map(general => (
                                                            <div
                                                                key={`${general.rarity}-${general.id}-${general.name}`}
                                                                className="general-item-wrapper"
                                                            >
                                                                <div
                                                                    className={`general-item ${isGeneralUsed(general.id, general.name, general.rarity) ? 'used' : ''}`}
                                                                    data-affinity-group={getAffinityGroup(general.affinity)}
                                                                    data-rarity={general.rarity}
                                                                    draggable={!isGeneralUsed(general.id, general.name, general.rarity)}
                                                                    onDragStart={(e) => handleDragStart(e, general)}
                                                                    onDoubleClick={() => handleGeneralDoubleClick(general)}
                                                                    style={{
                                                                        backgroundColor: `${getAffinityColor(general.affinity)}60`
                                                                    }}
                                                                >
                                                                    <div className="general-item-with-image">
                                                                        <ItemImage 
                                                                            src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                                            alt={general.name}
                                                                            rarity={general.rarity}
                                                                        />
                                                                        <div className="item-text-content">
                                                                            <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
                                                                                <span className="general-rarity" style={{fontSize: '10px'}}>{general.rarity}</span>
                                                                                <span 
                                                                                    className="general-name" 
                                                                                    style={{
                                                                                        color: 'var(--text-primary)',
                                                                                        flex: 1
                                                                                    }}
                                                                                >
                                                                                    {general.name}
                                                                                </span>
                                                                                <span style={{fontSize: '10px', color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                                                    ☆{getGeneralStarRank(general)}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    className="general-move-btn"
                                                                    onClick={() => moveToDisabled(general)}
                                                                    title="不使用に移動"
                                                                >
                                                                    →
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                    )
                                                ))}
                                            </React.Fragment>
                                        )}
                                    </div>
                                );
                            })
                                    ) : (
                                        // 不使用武将
                                        <div className="generals-grid-display">
                                            {disabledGenerals.map(general => (
                                                <div
                                                    key={`disabled-${general.rarity}-${general.id}-${general.name}`}
                                                    className="general-item-wrapper"
                                                >
                                                    <div 
                                                        className="general-item" 
                                                        data-affinity-group={getAffinityGroup(general.affinity)}
                                                        style={{
                                                            backgroundColor: `${getAffinityColor(general.affinity)}60`
                                                        }}
                                                    >
                                                        <div className="general-item-with-image">
                                                            <ItemImage 
                                                                src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                                alt={general.name}
                                                                rarity={general.rarity}
                                                            />
                                                            <div className="item-text-content">
                                                                <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
                                                                    <span className="general-rarity" style={{fontSize: '10px'}}>{general.rarity}</span>
                                                                    <span 
                                                                        className="general-name" 
                                                                        style={{
                                                                            color: 'var(--text-primary)',
                                                                            flex: 1
                                                                        }}
                                                                    >
                                                                        {general.name}
                                                                    </span>
                                                                    <span style={{fontSize: '10px', color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                                        ☆{getGeneralStarRank(general)}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="general-move-btn"
                                                        onClick={() => moveToActive(general)}
                                                        title="使用可能に戻す"
                                                    >
                                                        ←
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    </div>{/* generals-content-wrapper */}
                                </div>
                            )}
                        </div>
                        
                        {/* 名宝リスト（右2） */}
                        <div className={`treasures-panel ${!showTreasuresPanel ? 'collapsed' : ''}`}>
                            <div className="panel-header">
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <div className="panel-title">名宝リスト</div>
                                    <button
                                        onClick={() => setShowTreasuresPanel(!showTreasuresPanel)}
                                        style={{
                                            padding: '2px 6px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                        title={showTreasuresPanel ? 'パネルを閉じる' : 'パネルを開く'}
                                    >
                                        {showTreasuresPanel ? '▽' : '▷'}
                                    </button>
                                    {showContextHelp && (
                                        <button
                                            onClick={() => setContextHelpType('treasure')}
                                            style={{
                                                background: 'var(--accent)',
                                                border: 'none',
                                                borderRadius: '50%',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontSize: '10px',
                                                width: '18px',
                                                height: '18px',
                                                padding: 0,
                                                lineHeight: '18px'
                                            }}
                                            title="名宝の配置方法"
                                        >
                                            ?
                                        </button>
                                    )}
                                </div>
                                
                                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                    <button
                                        onClick={() => {
                                            setTreasureWeaponFilter([]);
                                            setTreasureFactionFilter([]);
                                            setShowOnlyFavoriteTreasures(false);
                                            setShowOnlyRecommendedTreasures(false);
                                        }}
                                        style={{
                                            padding: '4px 8px',
                                            background: 'var(--danger)',
                                            border: '1px solid var(--danger)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '10px',
                                            fontWeight: 'bold'
                                        }}
                                        title="全フィルタをリセット"
                                    >
                                        🔄
                                    </button>
                                </div>
                                
                                <div className="filter-section">
                                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                                        {[
                                            {name: '武器', color: '#f5b7b1'},
                                            {name: '防具', color: '#fadbd8'},
                                            {name: '文物', color: '#d7bde2'}
                                        ].map(category => (
                                            <button
                                                key={category.name}
                                                className={`filter-chip ${expandedTreasureCategories[category.name] ? 'active' : ''}`}
                                                onClick={() => {
                                                    setExpandedTreasureCategories(prev => ({
                                                        ...prev,
                                                        [category.name]: !prev[category.name]
                                                    }));
                                                }}
                                                style={{
                                                    background: expandedTreasureCategories[category.name] ? category.color : 'var(--bg-elevated)',
                                                    borderColor: category.color,
                                                    color: expandedTreasureCategories[category.name] ? 'var(--bg-base)' : 'var(--text-body)'
                                                }}
                                            >
                                                {category.name}
                                            </button>
                                        ))}
                                        {[
                                            {weapon: '槍', label: '歩兵', color: '#f5b7b1'},
                                            {weapon: '弓', label: '弓兵', color: '#fadbd8'},
                                            {weapon: '馬', label: '騎兵', color: '#d7bde2'},
                                            {weapon: '全', label: '全兵科', color: '#f8c471'}
                                        ].map(item => (
                                            <button
                                                key={item.weapon}
                                                className={`filter-chip ${treasureWeaponFilter.includes(item.weapon) ? 'active' : ''}`}
                                                onClick={() => toggleFilter('treasureWeapon', item.weapon)}
                                                style={{
                                                    background: treasureWeaponFilter.includes(item.weapon) ? item.color : 'var(--bg-elevated)',
                                                    borderColor: item.color,
                                                    color: treasureWeaponFilter.includes(item.weapon) ? 'var(--bg-base)' : 'var(--text-body)'
                                                }}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                                    </div>
                                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                                        {[
                                            {name: '魏', color: 'var(--accent)'},
                                            {name: '蜀', color: 'var(--success)'},
                                            {name: '袁紹', color: '#f4d03f'},
                                            {name: '呉', color: '#ec7063'},
                                            {name: '他', color: '#f5b7b1'},
                                            {name: 'イベント', color: '#fadbd8'}
                                        ].map(faction => (
                                            <button
                                                key={faction.name}
                                                className={`filter-chip ${treasureFactionFilter.includes(faction.name) ? 'active' : ''}`}
                                                onClick={() => toggleFilter('treasureFaction', faction.name)}
                                                style={{
                                                    background: treasureFactionFilter.includes(faction.name) ? faction.color : 'var(--bg-elevated)',
                                                    borderColor: faction.color,
                                                    color: treasureFactionFilter.includes(faction.name) ? 'var(--bg-base)' : 'var(--text-body)'
                                                }}
                                            >
                                                {faction.name}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="filter-group" style={{marginTop: '8px'}}>
                                        <button
                                            className={`filter-chip ${showOnlyFavoriteTreasures ? 'active' : ''}`}
                                            onClick={() => setShowOnlyFavoriteTreasures(!showOnlyFavoriteTreasures)}
                                            style={{
                                                background: showOnlyFavoriteTreasures ? 'var(--rank-color)' : 'var(--bg-elevated)',
                                                borderColor: 'var(--accent)',
                                                color: showOnlyFavoriteTreasures ? 'var(--bg-base)' : 'var(--text-body)'
                                            }}
                                        >
                                            ★お気に入り
                                        </button>
                                        <button
                                            className={`filter-chip ${showOnlyRecommendedTreasures ? 'active' : ''}`}
                                            onClick={() => {
                                                const targetFormation = formations[recommendTargetFormation];
                                                const hasGeneral = targetFormation?.slots?.['主将'] ||
                                                    targetFormation?.slots?.['副将1'] ||
                                                    targetFormation?.slots?.['副将2'] ||
                                                    targetFormation?.slots?.['補佐1'] ||
                                                    targetFormation?.slots?.['補佐2'] ||
                                                    (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a));
                                                if (hasGeneral) {
                                                    setShowOnlyRecommendedTreasures(!showOnlyRecommendedTreasures);
                                                }
                                            }}
                                            disabled={(() => {
                                                const targetFormation = formations[recommendTargetFormation];
                                                return !(targetFormation?.slots?.['主将'] ||
                                                    targetFormation?.slots?.['副将1'] ||
                                                    targetFormation?.slots?.['副将2'] ||
                                                    targetFormation?.slots?.['補佐1'] ||
                                                    targetFormation?.slots?.['補佐2'] ||
                                                    (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a)));
                                            })()}
                                            style={{
                                                background: showOnlyRecommendedTreasures ? 'var(--accent)' : 'var(--bg-elevated)',
                                                borderColor: 'var(--accent)',
                                                color: showOnlyRecommendedTreasures ? 'var(--text-primary)' : 'var(--text-muted)',
                                                opacity: (() => {
                                                    const targetFormation = formations[recommendTargetFormation];
                                                    return (targetFormation?.slots?.['主将'] ||
                                                        targetFormation?.slots?.['副将1'] ||
                                                        targetFormation?.slots?.['副将2'] ||
                                                        targetFormation?.slots?.['補佐1'] ||
                                                        targetFormation?.slots?.['補佐2'] ||
                                                        (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a))) ? 1 : 0.5;
                                                })(),
                                                cursor: (() => {
                                                    const targetFormation = formations[recommendTargetFormation];
                                                    return (targetFormation?.slots?.['主将'] ||
                                                        targetFormation?.slots?.['副将1'] ||
                                                        targetFormation?.slots?.['副将2'] ||
                                                        targetFormation?.slots?.['補佐1'] ||
                                                        targetFormation?.slots?.['補佐2'] ||
                                                        (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a))) ? 'pointer' : 'not-allowed';
                                                })()
                                            }}
                                            title={(() => {
                                                const targetFormation = formations[recommendTargetFormation];
                                                return (targetFormation?.slots?.['主将'] ||
                                                    targetFormation?.slots?.['副将1'] ||
                                                    targetFormation?.slots?.['副将2'] ||
                                                    targetFormation?.slots?.['補佐1'] ||
                                                    targetFormation?.slots?.['補佐2'] ||
                                                    (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a))) 
                                                    ? 'おススメ名宝のみ表示' 
                                                    : '対象部隊に武将を配置してください';
                                            })()}
                                        >
                                            おススメ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {showTreasuresPanel && (
                                <div className="treasures-list">
                                    <div className="treasures-tabs">
                                        <button 
                                            className={`treasures-tab ${activeTreasuresTab === 'active' ? 'active' : ''}`}
                                            onClick={() => setActiveTreasuresTab('active')}
                                        >
                                            使用可能
                                        </button>
                                        <button 
                                            className={`treasures-tab ${activeTreasuresTab === 'disabled' ? 'active' : ''}`}
                                            onClick={() => setActiveTreasuresTab('disabled')}
                                        >
                                            不使用 ({disabledTreasures.length})
                                        </button>
                                    </div>
                                    
                                    <div className="treasures-content-wrapper">
                                    {activeTreasuresTab === 'active' ? (
                                        // 使用可能名宝（カテゴリごとに折りたたみ）
                                        ['武器', '防具', '文物'].map(category => {
                                            if (treasuresByCategory[category].length === 0) return null;
                                            
                                            return (
                                                <div key={category} className="treasure-category" style={{marginBottom: '16px'}}>
                                                    <div 
                                                        className="treasure-category-title"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: '8px 12px',
                                                            background: 'rgba(26, 31, 46, 0.8)',
                                                            borderLeft: '3px solid var(--bordeaux)',
                                                            cursor: 'pointer',
                                                            marginBottom: '8px'
                                                        }}
                                                        onClick={() => {
                                                            setExpandedTreasureCategories(prev => ({
                                                                ...prev,
                                                                [category]: !prev[category]
                                                            }));
                                                        }}
                                                    >
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                            <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                                                {expandedTreasureCategories[category] ? '▼' : '▶'}
                                                            </span>
                                                            <span style={{fontWeight: 'bold', color: 'var(--text-primary)'}}>
                                                                {category} ({treasuresByCategory[category].length}個)
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {expandedTreasureCategories[category] && (
                                                    <div className="treasures-grid-display">
                                                        {treasuresByCategory[category].map(treasure => (
                                                            <div
                                                                key={treasure.id}
                                                                className="treasure-item-wrapper"
                                                            >
                                                                <div 
                                                                    className={`treasure-item ${isTreasureUsed(treasure.id, treasure.name) ? 'used' : ''}`}
                                                                    draggable={!isTreasureUsed(treasure.id, treasure.name)}
                                                                    onDragStart={(e) => handleTreasureDragStart(e, treasure)}
                                                                    onDoubleClick={(e) => {
                                                                        e.stopPropagation();
                                                                        if (isTreasureUsed(treasure.id, treasure.name)) {
                                                                            // 配置済みの場合は編制から削除
                                                                            removeTreasureFromFormations(treasure.id, treasure.name);
                                                                        } else {
                                                                            // 未配置の場合は自動配置
                                                                            autoAssignTreasure(treasure);
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="treasure-item-with-image">
                                                                        <ItemImage 
                                                                            src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                                                            alt={treasure.name}
                                                                            rarity={isTreasureUR(treasure.id) ? 'UR' : 'normal'}
                                                                        />
                                                                        <div className="treasure-text-content" style={{display: 'flex', flexDirection: 'column', gap: '2px', flex: 1}}>
                                                                            <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                                                                {getTreasureForgeRank(treasure.id) >= 0 && (
                                                                                    <span className={`treasure-forge-inline ${isTreasureUR(treasure.id) ? 'ur' : ''}`}>
                                                                                        {isTreasureUR(treasure.id) ? '★' : '☆'}{getTreasureForgeRank(treasure.id)}
                                                                                    </span>
                                                                                )}
                                                                                <span 
                                                                                    className="treasure-name"
                                                                                    style={{
                                                                                        color: isTreasureUR(treasure.id) ? 'var(--rarity-ur)' : 'var(--text-primary)',
                                                                                        fontWeight: isTreasureUR(treasure.id) ? 'bold' : '700'
                                                                                    }}
                                                                                >
                                                                                    {treasure.name}{isTreasureUR(treasure.id) ? '(UR)' : ''}
                                                                                </span>
                                                                            </div>
                                                                            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px'}}>
                                                                                {treasure.weapon_type && (
                                                                                    <span className="treasure-type" style={{color: 'var(--text-muted)'}}>{getWeaponTypeName(treasure.weapon_type)}</span>
                                                                                )}
                                                                                {treasure.related && (
                                                                                    <span 
                                                                                        className="treasure-related" 
                                                                                        style={{
                                                                                            color: (() => {
                                                                                                const relatedGeneral = generals.find(g => g.name === treasure.related);
                                                                                                return relatedGeneral ? getAffinityColor(relatedGeneral.affinity) : 'var(--text-muted)';
                                                                                            })(),
                                                                                            fontWeight: '600'
                                                                                        }}
                                                                                    >
                                                                                        {treasure.related}
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    className="treasure-move-btn"
                                                                    onClick={() => moveTreasureToDisabled(treasure)}
                                                                    title="不使用に移動"
                                                                >
                                                                    →
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        // 不使用名宝
                                        <div className="treasures-grid-display">
                                            {disabledTreasures.map(treasure => (
                                                <div
                                                    key={`disabled-${treasure.id}-${treasure.name}`}
                                                    className="treasure-item-wrapper"
                                                >
                                                    <div 
                                                        className="treasure-item"
                                                    >
                                                        {isTreasureUR(treasure.id) && (
                                                            <div className="treasure-ur-badge">UR</div>
                                                        )}
                                                        <div className="treasure-item-with-image">
                                                            <ItemImage 
                                                                src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                                                alt={treasure.name}
                                                                rarity={isTreasureUR(treasure.id) ? 'UR' : 'normal'}
                                                            />
                                                            <div className="treasure-text-content" style={{display: 'flex', flexDirection: 'column', gap: '2px', flex: 1}}>
                                                                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                                                    {getTreasureForgeRank(treasure.id) >= 0 && (
                                                                        <span className={`treasure-forge-inline ${isTreasureUR(treasure.id) ? 'ur' : ''}`}>
                                                                            {isTreasureUR(treasure.id) ? '★' : '☆'}{getTreasureForgeRank(treasure.id)}
                                                                        </span>
                                                                    )}
                                                                    <span className="treasure-name">{treasure.name}</span>
                                                                </div>
                                                                <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px'}}>
                                                                    {treasure.weapon_type && (
                                                                        <span className="treasure-type" style={{color: 'var(--text-muted)'}}>{getWeaponTypeName(treasure.weapon_type)}</span>
                                                                    )}
                                                                    {treasure.related && (
                                                                        <span className="treasure-related" style={{color: 'var(--text-muted)'}}>
                                                                            {treasure.related}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="treasure-move-btn"
                                                        onClick={() => moveTreasureToActive(treasure)}
                                                        title="使用可能に戻す"
                                                    >
                                                        ←
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    </div>{/* treasures-content-wrapper */}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Google Drive連携ダイアログ */}
                    {showGDriveSetup && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 3000
                        }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '2px solid #4285f4',
                                borderRadius: '12px',
                                padding: '32px',
                                maxWidth: '600px',
                                width: '90%'
                            }}>
                                <h2 style={{color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                                    Google Drive連携
                                </h2>
                                
                                <div style={{marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8'}}>
                                    <p style={{marginBottom: '16px'}}>
                                        Google Driveを使ってデータを同期できます。
                                    </p>
                                    
                                    <h3 style={{color: 'var(--text-primary)', fontSize: '16px', marginBottom: '12px'}}>使い方</h3>
                                    
                                    <div style={{background: 'var(--bg-base)', padding: '16px', borderRadius: '8px', marginBottom: '16px'}}>
                                        <p style={{marginBottom: '12px', fontWeight: 'bold', color: 'var(--accent)'}}>1. データを保存（家のPC）</p>
                                        <p style={{marginBottom: '8px', paddingLeft: '20px'}}>
                                            ① 「Google Driveへ保存」をクリック<br/>
                                            ② ダウンロードされたファイル「hadou-formation-sync.json」をGoogle Driveにアップロード<br/>
                                            　（推奨：「hadou-formation」フォルダを作成）
                                        </p>
                                        
                                        <p style={{marginBottom: '12px', marginTop: '16px', fontWeight: 'bold', color: 'var(--accent)'}}>2. データを読み込み（職場のPC）</p>
                                        <p style={{paddingLeft: '20px'}}>
                                            ① Google Driveから「hadou-formation-sync.json」をダウンロード<br/>
                                            ② 「Google Driveから読み込み」をクリック<br/>
                                            ③ ダウンロードしたファイルを選択
                                        </p>
                                    </div>
                                    
                                    {gdriveLastSync && (
                                        <p style={{color: 'var(--success)', fontSize: '13px', marginTop: '12px'}}>
                                            ✓ 最終同期: {new Date(gdriveLastSync).toLocaleString('ja-JP')}
                                        </p>
                                    )}
                                </div>
                                
                                <div style={{display: 'flex', gap: '12px', marginBottom: '20px'}}>
                                    <button
                                        onClick={() => {
                                            saveToGoogleDrive();
                                        }}
                                        style={{
                                            flex: 1,
                                            padding: '14px 20px',
                                            background: 'var(--accent)',
                                            border: 'none',
                                            borderRadius: '6px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '15px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Google Driveへ保存
                                    </button>
                                    <button
                                        onClick={() => {
                                            loadFromGoogleDrive();
                                        }}
                                        style={{
                                            flex: 1,
                                            padding: '14px 20px',
                                            background: 'var(--success)',
                                            border: 'none',
                                            borderRadius: '6px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '15px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Google Driveから読み込み
                                    </button>
                                </div>
                                
                                <button
                                    onClick={() => setShowGDriveSetup(false)}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'var(--bg-elevated)',
                                        border: '1px solid var(--border-light)',
                                        borderRadius: '6px',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}
                                >
                                    閉じる
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {/* テンプレート保存ダイアログ */}
                    {showTemplateSaveDialog && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(4, 4, 6, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '2px solid var(--border-light)',
                                borderRadius: '8px',
                                padding: '24px',
                                minWidth: '400px',
                                maxWidth: '500px'
                            }}>
                                <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>部隊テンプレートを保存</h3>
                                <input
                                    type="text"
                                    value={templateName}
                                    onChange={(e) => setTemplateName(e.target.value)}
                                    placeholder="テンプレート名を入力"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        background: 'var(--bg-base)',
                                        border: '1px solid var(--border-light)',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        fontSize: '14px',
                                        marginBottom: '20px'
                                    }}
                                    onKeyPress={(e) => e.key === 'Enter' && executeSaveTemplate()}
                                />
                                <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                                    <button
                                        onClick={() => setShowTemplateSaveDialog(null)}
                                        style={{
                                            padding: '8px 20px',
                                            background: 'var(--bg-elevated)',
                                            border: '1px solid var(--border-light)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        キャンセル
                                    </button>
                                    <button
                                        onClick={executeSaveTemplate}
                                        style={{
                                            padding: '8px 20px',
                                            background: 'var(--success)',
                                            border: '1px solid var(--success)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        保存
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* テンプレート呼び出しダイアログ */}
                    {showTemplateLoadDialog && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(4, 4, 6, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '2px solid var(--border-light)',
                                borderRadius: '8px',
                                padding: '24px',
                                minWidth: '400px',
                                maxWidth: '500px'
                            }}>
                                <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>テンプレートを呼び出し</h3>
                                
                                {Object.keys(formationTemplates).length === 0 ? (
                                    <p style={{color: 'var(--text-muted)', marginBottom: '20px'}}>保存されたテンプレートがありません</p>
                                ) : (
                                    <>
                                        <div style={{marginBottom: '20px', maxHeight: '300px', overflowY: 'auto'}}>
                                            {Object.entries(formationTemplates).map(([key, template]) => (
                                                <div key={key} style={{marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                    <input
                                                        type="radio"
                                                        id={`template-${key}`}
                                                        name="template"
                                                        checked={selectedTemplate === key}
                                                        onChange={() => setSelectedTemplate(key)}
                                                        style={{cursor: 'pointer'}}
                                                    />
                                                    <label 
                                                        htmlFor={`template-${key}`}
                                                        style={{color: 'var(--text-primary)', cursor: 'pointer', flex: 1}}
                                                    >
                                                        {template.name}
                                                    </label>
                                                    <button
                                                        onClick={() => deleteTemplate(key)}
                                                        style={{
                                                            padding: '4px 8px',
                                                            background: 'var(--danger)',
                                                            border: 'none',
                                                            borderRadius: '3px',
                                                            color: 'var(--text-primary)',
                                                            cursor: 'pointer',
                                                            fontSize: '11px'
                                                        }}
                                                    >
                                                        削除
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div style={{marginBottom: '20px', padding: '12px', background: 'var(--bg-base)', borderRadius: '4px'}}>
                                            <div style={{marginBottom: '8px'}}>
                                                <label style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', cursor: 'pointer'}}>
                                                    <input
                                                        type="checkbox"
                                                        checked={overwriteGenerals}
                                                        onChange={(e) => setOverwriteGenerals(e.target.checked)}
                                                    />
                                                    武将・侍従を上書き
                                                </label>
                                            </div>
                                            <div>
                                                <label style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', cursor: 'pointer'}}>
                                                    <input
                                                        type="checkbox"
                                                        checked={overwriteTreasures}
                                                        onChange={(e) => setOverwriteTreasures(e.target.checked)}
                                                    />
                                                    名宝を上書き
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                                <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                                    <button
                                        onClick={() => setShowTemplateLoadDialog(null)}
                                        style={{
                                            padding: '8px 20px',
                                            background: 'var(--bg-elevated)',
                                            border: '1px solid var(--border-light)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        キャンセル
                                    </button>
                                    {Object.keys(formationTemplates).length > 0 && (
                                        <button
                                            onClick={executeLoadTemplate}
                                            style={{
                                                padding: '8px 20px',
                                                background: 'var(--accent)',
                                                border: '1px solid var(--accent)',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            呼び出し
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    </>
            ) : (
                    <div className="rank-settings-container" style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
                        {/* プロファイル選択 */}
                        <div style={{marginBottom: '24px', padding: '16px', background: 'var(--bg-card)', border: '2px solid var(--border-light)', borderRadius: '4px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                                <h3 style={{color: 'var(--text-primary)', margin: 0, fontSize: '16px'}}>プロファイル選択</h3>
                                <div style={{display: 'flex', gap: '8px'}}>
                                    <button
                                        onClick={exportProfile}
                                        style={{
                                            padding: '6px 12px',
                                            background: 'var(--success)',
                                            border: '1px solid var(--success)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '11px',
                                            fontWeight: 'bold'
                                        }}
                                        title="現在のプロファイルをエクスポート"
                                    >
                                        プロファイル保存
                                    </button>
                                    <label
                                        style={{
                                            padding: '6px 12px',
                                            background: 'var(--accent)',
                                            border: '1px solid var(--accent)',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '11px',
                                            fontWeight: 'bold'
                                        }}
                                        title="プロファイルをインポート"
                                    >
                                        プロファイル読込
                                        <input
                                            type="file"
                                            accept=".json"
                                            onChange={importProfile}
                                            style={{display: 'none'}}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                                {profileNames.map((name, index) => (
                                    <div key={index} style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
                                        <button
                                            onClick={() => setCurrentProfile(index)}
                                            style={{
                                                padding: '8px 16px',
                                                background: currentProfile === index ? 'var(--accent)' : 'var(--bg-elevated)',
                                                border: currentProfile === index ? '2px solid #d4af37' : '2px solid #3a3a3a',
                                                color: currentProfile === index ? 'var(--text-primary)' : 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: currentProfile === index ? 'bold' : 'normal',
                                                fontSize: '13px',
                                                minWidth: '120px'
                                            }}
                                        >
                                            {name}
                                        </button>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                const newNames = [...profileNames];
                                                newNames[index] = e.target.value;
                                                setProfileNames(newNames);
                                            }}
                                            style={{
                                                padding: '6px 8px',
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border-light)',
                                                color: 'var(--text-primary)',
                                                fontSize: '11px',
                                                width: '100px'
                                            }}
                                            placeholder="名前を編集"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div style={{marginBottom: '20px', display: 'flex', gap: '12px', borderBottom: '2px solid #3a3a3a', paddingBottom: '12px'}}>
                            <button
                                className={`tab-button ${rankTab === 'general' ? 'active' : ''}`}
                                onClick={() => setRankTab('general')}
                            >
                                武将の将星ランク
                            </button>
                            <button
                                className={`tab-button ${rankTab === 'treasure' ? 'active' : ''}`}
                                onClick={() => setRankTab('treasure')}
                            >
                                名宝の鍛錬ランク
                            </button>
                        </div>
                        
                        {rankTab === 'general' ? (
                            <div>
                                <h2 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>武将の将星ランク設定</h2>
                                
                                {/* 一括操作ボタン */}
                                <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <button
                                        onClick={() => {
                                            const newRanks = {...generalStarRank};
                                            generals.forEach(g => {
                                                const key = `${g.id}-${g.rarity}-${g.name}`;
                                                newRanks[key] = 7;
                                            });
                                            setProfileData(prev => ({
                                                ...prev,
                                                [currentProfile]: {
                                                    ...prev[currentProfile],
                                                    generalStarRank: newRanks
                                                }
                                            }));
                                        }}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'var(--accent-hover)',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        全武将☆7
                                    </button>
                                    <button
                                        onClick={() => {
                                            setProfileData(prev => ({
                                                ...prev,
                                                [currentProfile]: {
                                                    ...prev[currentProfile],
                                                    generalStarRank: {}
                                                }
                                            }));
                                        }}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'var(--bg-hover)',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        全武将☆0
                                    </button>
                                </div>
                                
                                {/* プロファイル機能 */}
                                <div style={{marginBottom: '16px', padding: '12px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-light)'}}>
                                    <div style={{color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 'bold'}}>プロファイル</div>
                                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                        <button
                                            onClick={() => {
                                                const profile = {
                                                    generalStarRank: generalStarRank,
                                                    treasureForgeRank: treasureForgeRank,
                                                    treasureURStatus: treasureURStatus
                                                };
                                                localStorage.setItem('hadou-rank-profile-backup', JSON.stringify(profile));
                                                alert('現在の設定を保存しました');
                                            }}
                                            style={{
                                                padding: '8px 16px',
                                                background: 'var(--success)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            保存
                                        </button>
                                        <button
                                            onClick={() => {
                                                const saved = localStorage.getItem('hadou-rank-profile-backup');
                                                if (saved) {
                                                    const profile = JSON.parse(saved);
                                                    setProfileData(prev => ({
                                                        ...prev,
                                                        [currentProfile]: {
                                                            ...prev[currentProfile],
                                                            generalStarRank: profile.generalStarRank || {},
                                                            treasureForgeRank: profile.treasureForgeRank || {},
                                                            treasureURStatus: profile.treasureURStatus || {}
                                                        }
                                                    }));
                                                    alert('保存された設定を呼び出しました');
                                                } else {
                                                    alert('保存された設定がありません');
                                                }
                                            }}
                                            style={{
                                                padding: '8px 16px',
                                                background: 'var(--accent)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            呼び出し
                                        </button>
                                    </div>
                                </div>
                                
                                <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <input 
                                        type="text" 
                                        placeholder="武将名で検索..."
                                        value={rankSearchTerm}
                                        onChange={(e) => setRankSearchTerm(e.target.value)}
                                        style={{
                                            padding: '8px 12px',
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-light)',
                                            color: 'var(--text-primary)',
                                            flex: '1',
                                            minWidth: '200px'
                                        }}
                                    />
                                </div>
                                
                                {/* レアリティごとにグループ分け */}
                                {['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => {
                                    const filteredGenerals = generals
                                        .filter(g => g.rarity === rarity)
                                        .filter(g => rankSearchTerm === '' || g.name.includes(rankSearchTerm));
                                    
                                    if (filteredGenerals.length === 0) return null;
                                    
                                    return (
                                        <div key={rarity} style={{marginBottom: '24px'}}>
                                            <div 
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '12px',
                                                    padding: '8px 12px',
                                                    background: 'rgba(26, 31, 46, 0.5)',
                                                    borderLeft: `4px solid ${getRarityColor(rarity)}`,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => {
                                                    setExpandedRarities(prev => ({
                                                        ...prev,
                                                        [rarity]: !prev[rarity]
                                                    }));
                                                }}
                                            >
                                                <h3 style={{
                                                    color: getRarityColor(rarity),
                                                    margin: 0,
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}>
                                                    <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                                        {expandedRarities[rarity] ? '▼' : '▶'}
                                                    </span>
                                                    {rarity} ({filteredGenerals.length}名)
                                                </h3>
                                                <div style={{display: 'flex', gap: '8px'}} onClick={(e) => e.stopPropagation()}>
                                                    <button
                                                        onClick={() => {
                                                            const newRanks = {...generalStarRank};
                                                            generals
                                                                .filter(g => g.rarity === rarity)
                                                                .forEach(g => {
                                                                    const key = `${g.id}-${g.rarity}-${g.name}`;
                                                                    delete newRanks[key];
                                                                });
                                                            setProfileData(prev => ({
                                                                ...prev,
                                                                [currentProfile]: {
                                                                    ...prev[currentProfile],
                                                                    generalStarRank: newRanks
                                                                }
                                                            }));
                                                        }}
                                                        style={{
                                                            padding: '6px 12px',
                                                            background: 'var(--bg-hover)',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            color: 'var(--text-primary)',
                                                            cursor: 'pointer',
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                                        }}
                                                        title={`${rarity}武将を全て☆0にする`}
                                                    >
                                                        {rarity}☆0
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            const newRanks = {...generalStarRank};
                                                            generals
                                                                .filter(g => g.rarity === rarity)
                                                                .forEach(g => {
                                                                    const key = `${g.id}-${g.rarity}-${g.name}`;
                                                                    newRanks[key] = 7;
                                                                });
                                                            setProfileData(prev => ({
                                                                ...prev,
                                                                [currentProfile]: {
                                                                    ...prev[currentProfile],
                                                                    generalStarRank: newRanks
                                                                }
                                                            }));
                                                        }}
                                                        style={{
                                                            padding: '6px 12px',
                                                            background: getRarityColor(rarity),
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            color: 'var(--bg-base)',
                                                            cursor: 'pointer',
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                                        }}
                                                        title={`${rarity}武将を全て☆7にする`}
                                                    >
                                                        {rarity}☆7
                                                    </button>
                                                </div>
                                            </div>
                                            {expandedRarities[rarity] && (
                                            <div style={{display: 'grid', gap: '12px'}}>
                                                {filteredGenerals.map(general => {
                                            const currentRank = getGeneralStarRank(general);
                                            const isFav = isFavorite(general);
                                            const isDisabled = isGeneralDisabled(general);
                                            return (
                                                <div 
                                                    key={`${general.id}-${general.rarity}-${general.name}`}
                                                    style={{
                                                        background: 'var(--bg-card)',
                                                        border: '1px solid var(--border-light)',
                                                        padding: '12px',
                                                        display: 'grid',
                                                        gridTemplateColumns: '1fr 60px 130px auto',
                                                        alignItems: 'center',
                                                        gap: '12px'
                                                    }}
                                                >
                                                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                                        <ItemImage 
                                                            src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                            alt={general.name}
                                                            rarity={general.rarity}
                                                        />
                                                        <div>
                                                            <div style={{color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                                {general.name}
                                                            </div>
                                                            <div style={{color: 'var(--text-muted)', fontSize: '12px'}}>
                                                                {general.rarity} - {getUnitTypeName(general.unit_type)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{display: 'flex', gap: '4px'}}>
                                                        <button
                                                            onClick={() => toggleFavorite(general)}
                                                            style={{
                                                                padding: '4px 8px',
                                                                background: 'none',
                                                                border: 'none',
                                                                cursor: 'pointer',
                                                                fontSize: '16px',
                                                                color: isFav ? 'var(--rank-color)' : 'var(--text-muted)'
                                                            }}
                                                            title="お気に入り"
                                                        >
                                                            ★
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (isDisabled) {
                                                                    setDisabledGenerals(prev => prev.filter(g => !(g.id === general.id && g.rarity === general.rarity)));
                                                                } else {
                                                                    setDisabledGenerals(prev => [...prev, general]);
                                                                }
                                                            }}
                                                            style={{
                                                                padding: '4px 8px',
                                                                background: 'none',
                                                                border: 'none',
                                                                cursor: 'pointer',
                                                                fontSize: '16px',
                                                                color: isDisabled ? 'var(--danger)' : 'var(--text-muted)'
                                                            }}
                                                            title="不使用"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                    <div style={{textAlign: 'center', minWidth: '130px'}}>
                                                        {Array.from({length: 7}, (_, i) => (
                                                            <span key={i} style={{color: i < currentRank ? 'var(--rank-color)' : 'var(--bg-elevated)'}}>
                                                                ☆
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div style={{display: 'flex', gap: '4px'}}>
                                                        {[0,1,2,3,4,5,6,7].map(rank => (
                                                            <button
                                                                key={rank}
                                                                onClick={() => setGeneralStar(general, rank)}
                                                                style={{
                                                                    padding: '6px 12px',
                                                                    background: currentRank === rank ? 'var(--accent)' : 'var(--bg-elevated)',
                                                                    border: '1px solid var(--border-light)',
                                                                    color: currentRank === rank ? 'var(--text-primary)' : 'var(--text-primary)',
                                                                    cursor: 'pointer',
                                                                    fontWeight: currentRank === rank ? 'bold' : 'normal'
                                                                }}
                                                            >
                                                                {rank}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                            </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div>
                                <h2 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>名宝の鍛錬ランク設定</h2>
                                
                                {/* 一括操作ボタン */}
                                <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <button
                                        onClick={() => {
                                            const newRanks = {...treasureForgeRank};
                                            treasures.forEach(t => {
                                                const maxRank = treasureURStatus[t.id] ? 10 : 7;
                                                newRanks[t.id] = maxRank;
                                            });
                                            setProfileData(prev => ({
                                                ...prev,
                                                [currentProfile]: {
                                                    ...prev[currentProfile],
                                                    treasureForgeRank: newRanks
                                                }
                                            }));
                                        }}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'var(--accent-hover)',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        一括MAX（☆7/☆10）
                                    </button>
                                    <button
                                        onClick={() => {
                                            setProfileData(prev => ({
                                                ...prev,
                                                [currentProfile]: {
                                                    ...prev[currentProfile],
                                                    treasureForgeRank: {}
                                                }
                                            }));
                                        }}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'var(--bg-hover)',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        一括☆0
                                    </button>
                                    <button
                                        onClick={() => {
                                            // 全てUR化されているかチェック
                                            const allUR = treasures.every(t => treasureURStatus[t.id]);
                                            
                                            const newURStatus = {...treasureURStatus};
                                            
                                            if (allUR) {
                                                // 全てUR化されている → 全て解除（鍛錬ランクはそのまま）
                                                treasures.forEach(t => {
                                                    newURStatus[t.id] = false;
                                                });
                                            } else {
                                                // 一部またはなし → 全てUR化（鍛錬ランクはそのまま）
                                                treasures.forEach(t => {
                                                    newURStatus[t.id] = true;
                                                });
                                            }
                                            
                                            setProfileData(prev => ({
                                                ...prev,
                                                [currentProfile]: {
                                                    ...prev[currentProfile],
                                                    treasureURStatus: newURStatus
                                                }
                                            }));
                                        }}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'var(--bordeaux)',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {treasures.every(t => treasureURStatus[t.id]) ? '一括UR解除' : '一括UR化'}
                                    </button>
                                </div>
                                
                                {/* プロファイル機能 */}
                                <div style={{marginBottom: '16px', padding: '12px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-light)'}}>
                                    <div style={{color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 'bold'}}>プロファイル</div>
                                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                        <button
                                            onClick={() => {
                                                const profile = {
                                                    generalStarRank: generalStarRank,
                                                    treasureForgeRank: treasureForgeRank,
                                                    treasureURStatus: treasureURStatus
                                                };
                                                localStorage.setItem('hadou-rank-profile-backup', JSON.stringify(profile));
                                                alert('現在の設定を保存しました');
                                            }}
                                            style={{
                                                padding: '8px 16px',
                                                background: 'var(--success)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            保存
                                        </button>
                                        <button
                                            onClick={() => {
                                                const saved = localStorage.getItem('hadou-rank-profile-backup');
                                                if (saved) {
                                                    const profile = JSON.parse(saved);
                                                    setProfileData(prev => ({
                                                        ...prev,
                                                        [currentProfile]: {
                                                            ...prev[currentProfile],
                                                            generalStarRank: profile.generalStarRank || {},
                                                            treasureForgeRank: profile.treasureForgeRank || {},
                                                            treasureURStatus: profile.treasureURStatus || {}
                                                        }
                                                    }));
                                                    alert('保存された設定を呼び出しました');
                                                } else {
                                                    alert('保存された設定がありません');
                                                }
                                            }}
                                            style={{
                                                padding: '8px 16px',
                                                background: 'var(--accent)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            呼び出し
                                        </button>
                                    </div>
                                </div>
                                
                                {/* カテゴリごとに折りたたみ */}
                                {['武器', '防具', '文物'].map(category => {
                                    const categoryTreasures = treasures.filter(t => t.category === category);
                                    if (categoryTreasures.length === 0) return null;
                                    
                                    return (
                                        <div key={category} style={{marginBottom: '24px'}}>
                                            <div 
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '12px',
                                                    padding: '8px 12px',
                                                    background: 'rgba(26, 31, 46, 0.5)',
                                                    borderLeft: '3px solid var(--bordeaux)',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => {
                                                    setExpandedTreasureCategories(prev => ({
                                                        ...prev,
                                                        [category]: !prev[category]
                                                    }));
                                                }}
                                            >
                                                <h3 style={{
                                                    color: 'var(--text-primary)',
                                                    margin: 0,
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}>
                                                    <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                                        {expandedTreasureCategories[category] ? '▼' : '▶'}
                                                    </span>
                                                    {category} ({categoryTreasures.length}個)
                                                </h3>
                                            </div>
                                            {expandedTreasureCategories[category] && (
                                            <div style={{display: 'grid', gap: '12px'}}>{categoryTreasures.map(treasure => {
                                        const currentRank = getTreasureForgeRank(treasure.id);
                                        const isUR = isTreasureUR(treasure.id);
                                        const maxRank = isUR ? 10 : 7;
                                        const isFav = isFavoriteTreasure(treasure);
                                        const isDisabled = isTreasureDisabled(treasure);
                                        return (
                                            <div 
                                                key={treasure.id}
                                                style={{
                                                    background: 'var(--bg-card)',
                                                    border: '1px solid var(--border-light)',
                                                    padding: '12px',
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 60px 90px 180px auto',
                                                    alignItems: 'center',
                                                    gap: '12px'
                                                }}
                                            >
                                                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                                    <ItemImage 
                                                        src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                                        alt={treasure.name}
                                                        rarity={isUR ? 'UR' : 'normal'}
                                                    />
                                                    <div>
                                                        <div style={{color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                            {treasure.name}
                                                        </div>
                                                        <div style={{color: 'var(--text-muted)', fontSize: '12px'}}>
                                                            {treasure.category} {isUR && <span style={{color: 'var(--rarity-ur)'}}>[UR]</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{display: 'flex', gap: '4px'}}>
                                                    <button
                                                        onClick={() => toggleFavoriteTreasure(treasure)}
                                                        style={{
                                                            padding: '4px 8px',
                                                            background: 'none',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            fontSize: '16px',
                                                            color: isFav ? 'var(--rank-color)' : 'var(--text-muted)'
                                                        }}
                                                        title="お気に入り"
                                                    >
                                                        ★
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            if (isDisabled) {
                                                                setDisabledTreasures(prev => prev.filter(t => t.id !== treasure.id));
                                                            } else {
                                                                setDisabledTreasures(prev => [...prev, treasure]);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: '4px 8px',
                                                            background: 'none',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            fontSize: '16px',
                                                            color: isDisabled ? 'var(--danger)' : 'var(--text-muted)'
                                                        }}
                                                        title="不使用"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => toggleTreasureUR(treasure.id)}
                                                    style={{
                                                        padding: '6px 12px',
                                                        background: isUR ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)' : 'var(--bg-elevated)',
                                                        border: isUR ? '1px solid #ff6b6b' : '1px solid #3a3a3a',
                                                        color: 'var(--text-primary)',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold',
                                                        fontSize: '11px',
                                                        width: '90px',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {isUR ? '✓ UR化' : 'UR化'}
                                                </button>
                                                <div style={{textAlign: 'center', minWidth: '180px'}}>
                                                    {Array.from({length: 10}, (_, i) => {
                                                        const maxColoredRank = isUR ? 10 : 7;
                                                        const isColored = i < currentRank;
                                                        const isDimmed = i >= maxColoredRank;
                                                        return (
                                                            <span 
                                                                key={i} 
                                                                style={{
                                                                    color: isDimmed ? 'var(--bg-card)' : (isColored ? (isUR ? 'var(--rarity-ur)' : 'var(--rank-color)') : 'var(--bg-elevated)')
                                                                }}
                                                            >
                                                                {isUR ? '★' : '☆'}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                                <div style={{display: 'flex', gap: '4px', flexWrap: 'wrap'}}>
                                                    {Array.from({length: 11}, (_, rank) => {
                                                        const isDisabled = !isUR && rank > 7;
                                                        return (
                                                            <button
                                                                key={rank}
                                                                onClick={() => !isDisabled && setTreasureForge(treasure.id, rank)}
                                                                style={{
                                                                    padding: '6px 12px',
                                                                    background: currentRank === rank ? 'var(--accent)' : (isDisabled ? 'var(--bg-base)' : 'var(--bg-elevated)'),
                                                                    border: '1px solid var(--border-light)',
                                                                    color: isDisabled ? 'var(--text-muted)' : (currentRank === rank ? 'var(--text-primary)' : 'var(--text-primary)'),
                                                                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                                    fontWeight: currentRank === rank ? 'bold' : 'normal',
                                                                    opacity: isDisabled ? 0.3 : 1
                                                                }}
                                                                disabled={isDisabled}
                                                            >
                                                                {rank}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
                
                
                {/* コンテキストヘルプモーダル */}
                {contextHelpType && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(4, 4, 6, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2500,
                        padding: '20px'
                    }} onClick={() => setContextHelpType(null)}>
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '2px solid var(--accent)',
                            borderRadius: '8px',
                            padding: '20px',
                            maxWidth: '600px',
                            color: 'var(--text-primary)'
                        }} onClick={(e) => e.stopPropagation()}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
                                <h3 style={{color: 'var(--accent)', margin: 0}}>
                                    {contextHelpType === 'general' && '武将の配置方法'}
                                    {contextHelpType === 'treasure' && '名宝の配置方法'}
                                    {contextHelpType === 'pattern' && '編制パターンの使い方'}
                                    {contextHelpType === 'template' && 'テンプレートの使い方'}
                                </h3>
                                <button
                                    onClick={() => setContextHelpType(null)}
                                    style={{
                                        background: 'var(--danger)',
                                        border: 'none',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        fontSize: '18px',
                                        width: '28px',
                                        height: '28px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                            
                            {contextHelpType === 'general' && (
                                <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ドラッグ&ドロップ</p>
                                        <p style={{margin: '4px 0'}}>武将を左パネルから部隊の枠にドラッグして配置</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ダブルクリック</p>
                                        <p style={{margin: '4px 0'}}>• 武将をダブルクリック → 空きスロットに自動配置</p>
                                        <p style={{margin: '4px 0'}}>• 配置済み武将をダブルクリック → 削除</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>入れ替え</p>
                                        <p style={{margin: '4px 0'}}>武将同士をドラッグ&ドロップで入れ替え可能</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>侍従配置</p>
                                        <p style={{margin: '4px 0'}}>LR武将のみ侍従として配置可能。ダブルクリックで自動配置</p>
                                    </div>
                                </div>
                            )}
                            
                            {contextHelpType === 'treasure' && (
                                <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>配置可能な場所</p>
                                        <p style={{margin: '4px 0'}}>• 主将：武器・防具・文物を各1つずつ（最大3つ）</p>
                                        <p style={{margin: '4px 0'}}>• 副将1：武器・防具・文物を各1つずつ（最大3つ）</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ドラッグ&ドロップ</p>
                                        <p style={{margin: '4px 0'}}>名宝を左パネルから装備枠にドラッグして配置</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ダブルクリック</p>
                                        <p style={{margin: '4px 0'}}>• 名宝をダブルクリック → 種類に応じた空きスロットに自動配置</p>
                                        <p style={{margin: '4px 0'}}>• 配置済み名宝をダブルクリック → 削除</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--rarity-ur)'}}>注意</p>
                                        <p style={{margin: '4px 0'}}>同じ名宝は1つの部隊にしか配置できません</p>
                                    </div>
                                </div>
                            )}
                            
                            {contextHelpType === 'pattern' && (
                                <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>5つの編制パターン</p>
                                        <p style={{margin: '4px 0'}}>各編制は独立した12部隊を管理。用途別に使い分けが可能</p>
                                        <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>例：編制1=攻撃用、編制2=防御用、編制3=イベント用</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>[...]メニュー</p>
                                        <p style={{margin: '4px 0'}}>• <strong>編制名を変更：</strong>分かりやすい名前を付ける</p>
                                        <p style={{margin: '4px 0'}}>• <strong>他の編制からコピー：</strong>別の編制の内容をコピー</p>
                                        <p style={{margin: '4px 0'}}>• <strong>この編制をリセット：</strong>全12部隊をクリア</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>切り替え</p>
                                        <p style={{margin: '4px 0'}}>タブをクリックで編制を切り替え。データは自動保存</p>
                                    </div>
                                </div>
                            )}
                            
                            {contextHelpType === 'template' && (
                                <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>保存</p>
                                        <p style={{margin: '4px 0'}}>部隊の[保存]ボタンで現在の構成をテンプレートとして保存</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>呼出</p>
                                        <p style={{margin: '4px 0'}}>部隊の[呼出]ボタンで保存したテンプレートを呼び出し</p>
                                        <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>上書き設定：武将・名宝の上書き有無を選択可能</p>
                                    </div>
                                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                                        <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>重複削除</p>
                                        <p style={{margin: '4px 0'}}>テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                                        <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>例：部隊1の張飛を部隊2に呼び出すと、部隊1の張飛は自動削除</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* ヘルプモーダル */}
                {showHelpModal && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 3000,
                        padding: '20px'
                    }} onClick={() => setShowHelpModal(false)}>
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '2px solid var(--border-light)',
                            borderRadius: '8px',
                            padding: '24px',
                            maxWidth: '900px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            color: 'var(--text-primary)'
                        }} onClick={(e) => e.stopPropagation()}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                                <h2 style={{color: 'var(--text-primary)', margin: 0}}>三国志覇道 編成支援ツール 使い方ガイド</h2>
                                <button
                                    onClick={() => setShowHelpModal(false)}
                                    style={{
                                        background: 'var(--danger)',
                                        border: 'none',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        width: '32px',
                                        height: '32px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div style={{lineHeight: '1.8'}}>
                                <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px'}}>基本操作</h3>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>武将・名宝の配置</h4>
                                <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                    <p style={{margin: '4px 0'}}><strong>ドラッグ&ドロップ:</strong> 武将/名宝を左パネルから部隊エリアにドラッグして配置</p>
                                    <p style={{margin: '4px 0'}}><strong>ダブルクリック:</strong> 武将/名宝をダブルクリックで自動的に空きスロットに配置</p>
                                    <p style={{margin: '4px 0'}}><strong>削除:</strong> 配置済みの武将/名宝をダブルクリックで削除</p>
                                    <p style={{margin: '4px 0'}}><strong>入れ替え:</strong> 武将同士、名宝同士をドラッグ&ドロップで入れ替え可能</p>
                                </div>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>武将配置の詳細</h4>
                                <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                    <p style={{margin: '4px 0'}}><strong>主将:</strong> 各部隊に1名必須。ダブルクリックで主将エリアに配置</p>
                                    <p style={{margin: '4px 0'}}><strong>副将:</strong> 副将1、副将2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                                    <p style={{margin: '4px 0'}}><strong>補佐:</strong> 補佐1、補佐2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                                    <p style={{margin: '4px 0'}}><strong>侍従:</strong> LR武将のみ配置可能。ダブルクリックで自動配置</p>
                                </div>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>名宝配置の詳細</h4>
                                <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                                    <p style={{margin: '4px 0'}}><strong>主将の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                                    <p style={{margin: '4px 0'}}><strong>副将1の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                                    <p style={{margin: '4px 0'}}><strong>自動配置:</strong> 名宝をダブルクリックすると、種類に応じた空きスロットに自動配置</p>
                                    <p style={{margin: '4px 0', color: 'var(--rarity-ur)'}}><strong>注意:</strong> 同じ名宝は1つの部隊にしか配置できません</p>
                                </div>
                                
                                <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>基本機能</h3>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>編成画面</h4>
                                <p><strong>部隊タブ:</strong> 主城部隊(6)、分城部隊(3)、出城部隊(3)の合計12部隊を管理</p>
                                <p><strong>武将配置:</strong> 武将パネルから武将をドラッグ&ドロップで配置。主将・副将・補佐の3種類</p>
                                <p><strong>侍従配置:</strong> LR武将は自動で侍従エリアが表示。侍従を配置可能</p>
                                <p><strong>名宝配置:</strong> 主将と副将1に最大3つずつ名宝を装備可能（武器・防具・文物）</p>
                                <p><strong>陣形選択:</strong> 各部隊の陣形タイプを選択可能</p>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>⭐ ランク設定画面</h4>
                                <p><strong>プロファイル機能:</strong> 5つのプロファイル(P0-P4)で異なるランク設定を保存可能</p>
                                <p><strong>武将ランク:</strong> 各武将の星ランク(0-7)を設定</p>
                                <p><strong>名宝ランク:</strong> 各名宝の精錬ランク(0-7)とUR化状態を設定</p>
                                <p><strong>お気に入り・不使用:</strong> [★]ボタンでお気に入り登録、[×]ボタンで不使用設定</p>
                                
                                <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>🔧 高度な機能</h3>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>編制パターン管理（10パターン）</h4>
                                <p><strong>編制タブ:</strong> 画面上部に10個の編制タブ（編制1-10）を表示</p>
                                <p><strong>編制切り替え:</strong> タブをクリックして編制を切り替え。各編制は独立した12部隊を持つ</p>
                                <p><strong>[...]メニュー:</strong></p>
                                <ul style={{marginLeft: '20px'}}>
                                    <li><strong>編制名を変更:</strong> 編制に分かりやすい名前を付ける（例: 「攻撃編成」「防御編成」）</li>
                                    <li><strong>他の編制からコピー:</strong> 別の編制の内容を現在の編制にコピー</li>
                                    <li><strong>この編制をリセット:</strong> 全12部隊をクリア</li>
                                </ul>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>部隊テンプレート機能</h4>
                                <p><strong>[保存]ボタン:</strong> 現在の部隊構成をテンプレートとして保存</p>
                                <p><strong>[呼出]ボタン:</strong> 保存したテンプレートを別の部隊に呼び出し</p>
                                <p><strong>上書き設定:</strong></p>
                                <ul style={{marginLeft: '20px'}}>
                                    <li>☑ 武将・侍従を上書き: チェックを入れると既存の武将を置き換え</li>
                                    <li>☑ 名宝を上書き: チェックを入れると既存の名宝を置き換え</li>
                                </ul>
                                <p><strong>重複削除:</strong> テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                                
                                <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>フィルタ機能</h4>
                                <p><strong>武将フィルタ:</strong></p>
                                <ul style={{marginLeft: '20px'}}>
                                    <li><strong>レア度:</strong> LR / UR</li>
                                    <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵</li>
                                    <li><strong>勢力:</strong> 董卓 / 張角 / 魏 / 蜀 / 袁紹 / 呉 / 呂布 / その他</li>
                                    <li><strong>侍従:</strong> 上 / 下 / 左 / 右 / 上下 / 左右 / 右上 / 右下 / 左下</li>
                                    <li><strong>★お気に入り:</strong> お気に入り登録した武将のみ表示</li>
                                </ul>
                                <p><strong>名宝フィルタ:</strong></p>
                                <ul style={{marginLeft: '20px'}}>
                                    <li><strong>種類:</strong> 武器 / 防具 / 文物</li>
                                    <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵 / 全兵科（防具・文物は全兵科で表示）</li>
                                    <li><strong>勢力:</strong> 魏 / 蜀 / 袁紹 / 呉 / 他 / イベント</li>
                                    <li><strong>★お気に入り:</strong> お気に入り登録した名宝のみ表示</li>
                                </ul>
                                
                                <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>ヒント</h3>
                                <ul style={{marginLeft: '20px', lineHeight: '1.8'}}>
                                    <li><strong>データ保存:</strong> すべてのデータはブラウザに自動保存されます（localStorage使用）</li>
                                    <li><strong>重複チェック:</strong> 同じ武将・名宝を複数の部隊に配置しようとすると警告が表示されます</li>
                                    <li><strong>折りたたみ:</strong> 部隊名の左にあるチェックボックスで部隊を折りたたみ可能</li>
                                    <li><strong>リセット:</strong> 各部隊の[リセット]ボタンで個別に部隊をクリア可能</li>
                                    <li><strong>編制の使い分け:</strong> 編制1を攻撃用、編制2を防御用など、用途別に管理すると便利</li>
                                    <li><strong>テンプレート活用:</strong> よく使う部隊構成はテンプレート保存しておくと効率的</li>
                                </ul>
                                
                                <div style={{marginTop: '24px', padding: '12px', background: 'var(--bg-elevated)', borderRadius: '4px', borderLeft: '3px solid var(--bordeaux)'}}>
                                    <p style={{margin: 0}}><strong>バージョン情報:</strong> SANGOKUSHI HADOU v3 (v140)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
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
