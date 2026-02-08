// データ入出力・リセット
// 依存: config.js (TABS)

/**
 * データのエクスポート/インポート/リセット/GoogleDrive連携
 */
function createDataIO({
    formations, generals, treasures, activeTab,
    formationPatterns, activePattern, currentProfile,
    profileData, profileNames, profileFormations,
    favoriteGenerals, favoriteTreasures,
    disabledGenerals, disabledTreasures,
    pendingSets, formationTemplates,
    gdriveLastSync, collapsedFormations,
    generalStarRank, treasureForgeRank,
    setFormations, setFormationPatterns, setProfileFormations,
    setActivePattern, setCurrentProfile,
    setProfileData, setProfileNames,
    setFavoriteGenerals, setFavoriteTreasures,
    setDisabledGenerals, setDisabledTreasures,
    setPendingSets, setFormationTemplates,
    setGdriveLastSync,
    getCurrentFormationPatterns
}) {

    // 全データのエクスポート
    const exportAllData = () => {
        try {
            const allData = {
                formations: formations,
                formationTemplates: formationTemplates,
                disabledGenerals: disabledGenerals,
                disabledTreasures: disabledTreasures,
                generalRanks: generalStarRank,
                treasureRanks: treasureForgeRank,
                favorites: favoriteGenerals,
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
                    // 旧形式: generalRanks/treasureRanks → profileDataに変換
                    if (convertedData.generalRanks || convertedData.treasureRanks) {
                        setProfileData(prev => ({
                            ...prev,
                            [currentProfile]: {
                                generalStarRank: convertedData.generalRanks || prev[currentProfile].generalStarRank,
                                treasureForgeRank: convertedData.treasureRanks || prev[currentProfile].treasureForgeRank,
                                treasureURStatus: prev[currentProfile].treasureURStatus
                            }
                        }));
                    }
                    // 旧形式: favorites → favoriteGenerals
                    if (convertedData.favorites && Array.isArray(convertedData.favorites)) {
                        setFavoriteGenerals(convertedData.favorites);
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
                favoriteGenerals: favoriteGenerals,
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
                    // お気に入り復元（新旧形式対応）
                    const favData = importedData.favoriteGenerals || importedData.favorites;
                    if (favData) setFavoriteGenerals(favData);
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

    // JSON インポート
    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);

                // データ検証
                // プロファイルファイルの自動検知
                if (data.type === 'profile' && data.profileData && !data.formationPatterns) {
                    const targetProfile = currentProfile;
                    if (!confirm(`これはプロファイルファイルです。\nプロファイル「${profileNames[targetProfile]}」に上書きしますか？\n（インポート元: ${data.profileName || '不明'}）`)) {
                        event.target.value = '';
                        return;
                    }
                    setProfileData(prev => ({
                        ...prev,
                        [targetProfile]: data.profileData
                    }));
                    if (data.favoriteGenerals) setFavoriteGenerals(data.favoriteGenerals);
                    if (data.favoriteTreasures) setFavoriteTreasures(data.favoriteTreasures);
                    if (data.disabledGenerals) setDisabledGenerals(data.disabledGenerals);
                    if (data.disabledTreasures) setDisabledTreasures(data.disabledTreasures);
                    alert(`プロファイル「${profileNames[targetProfile]}」にインポートしました`);
                    event.target.value = '';
                    return;
                }
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

    return {
        exportAllData,
        importAllData,
        saveToGoogleDrive,
        loadFromGoogleDrive,
        exportData,
        importData,
        exportSingleFormation,
        importSingleFormation,
        exportProfile,
        importProfile,
        resetAllData,
        resetFormations
    };
}
