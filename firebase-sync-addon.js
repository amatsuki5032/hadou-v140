// ============================================
// Firebase同期機能
// ============================================

// LocalStorageの保存関数を拡張してFirebaseにも保存
const originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
    // LocalStorageに保存
    originalSetItem(key, value);
    
    // Firebaseにも保存（非同期）
    if (typeof FirebaseSync !== 'undefined') {
        const allData = {};
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            allData[k] = localStorage.getItem(k);
        }
        FirebaseSync.saveData(allData).catch(err => {
            console.error('Firebase保存エラー:', err);
        });
    }
};

// アプリ起動時にFirebaseからデータを読み込み
window.addEventListener('DOMContentLoaded', async () => {
    console.log('🔥 Firebase同期を初期化中...');
    
    if (typeof FirebaseSync !== 'undefined') {
        try {
            const firebaseData = await FirebaseSync.loadData();
            
            if (firebaseData) {
                console.log('✅ Firebaseからデータを読み込みました');
                
                // Firebaseのデータの方が新しければ、LocalStorageを更新
                const localTimestamp = localStorage.getItem('lastUpdated');
                const firebaseTimestamp = firebaseData.lastUpdated;
                
                if (!localTimestamp || (firebaseTimestamp && firebaseTimestamp.seconds * 1000 > new Date(localTimestamp).getTime())) {
                    console.log('🔄 Firebaseのデータの方が新しいので更新します');
                    
                    // LocalStorageを更新（Firebase同期をトリガーしないように一時的に無効化）
                    localStorage.setItem = originalSetItem;
                    
                    Object.keys(firebaseData).forEach(key => {
                        if (key !== 'lastUpdated') {
                            localStorage.setItem(key, firebaseData[key]);
                        }
                    });
                    
                    // Firebase同期を再有効化
                    localStorage.setItem = function(key, value) {
                        originalSetItem(key, value);
                        if (typeof FirebaseSync !== 'undefined') {
                            const allData = {};
                            for (let i = 0; i < localStorage.length; i++) {
                                const k = localStorage.key(i);
                                allData[k] = localStorage.getItem(k);
                            }
                            FirebaseSync.saveData(allData).catch(err => {
                                console.error('Firebase保存エラー:', err);
                            });
                        }
                    };
                    
                    // ページをリロードして新しいデータを反映
                    window.location.reload();
                }
            } else {
                console.log('ℹ️ Firebaseにデータがありません（初回起動）');
            }
            
            // リアルタイム同期を開始
            FirebaseSync.watchChanges((data) => {
                console.log('🔄 他のデバイスからの更新を検出');
                
                // 確認ダイアログを表示
                if (confirm('他のデバイスでデータが更新されました。最新データを読み込みますか？')) {
                    localStorage.setItem = originalSetItem;
                    
                    Object.keys(data).forEach(key => {
                        if (key !== 'lastUpdated') {
                            localStorage.setItem(key, data[key]);
                        }
                    });
                    
                    window.location.reload();
                }
            });
            
            console.log('✅ Firebase同期が有効になりました');
            
        } catch (error) {
            console.error('❌ Firebase初期化エラー:', error);
        }
    } else {
        console.warn('⚠️ FirebaseSyncが見つかりません');
    }
});

console.log('🔥 Firebase同期モジュールが読み込まれました');
