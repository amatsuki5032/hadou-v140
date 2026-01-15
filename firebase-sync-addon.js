// ============================================
// Firebase同期機能（無限ループ修正版）
// ============================================

let isSyncing = false; // 同期中フラグ
let lastSyncTime = Date.now();

// LocalStorageの保存関数を拡張してFirebaseにも保存
const originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
    // LocalStorageに保存
    originalSetItem(key, value);
    
    // 同期中でない場合のみFirebaseに保存
    if (!isSyncing && typeof FirebaseSync !== 'undefined') {
        const now = Date.now();
        
        // 最後の同期から500ms以上経過している場合のみ保存
        if (now - lastSyncTime > 500) {
            lastSyncTime = now;
            
            const allData = {};
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                allData[k] = localStorage.getItem(k);
            }
            
            FirebaseSync.saveData(allData).catch(err => {
                console.error('Firebase保存エラー:', err);
            });
        }
    }
};

// アプリ起動時にFirebaseからデータを読み込み
window.addEventListener('DOMContentLoaded', async () => {
    console.log('🔥 Firebase同期を初期化中...');
    
    if (typeof FirebaseSync !== 'undefined') {
        try {
            isSyncing = true; // 同期開始
            
            const firebaseData = await FirebaseSync.loadData();
            
            if (firebaseData) {
                console.log('✅ Firebaseからデータを読み込みました');
                
                // Firebaseのデータの方が新しければ、LocalStorageを更新
                const localTimestamp = localStorage.getItem('lastUpdated');
                const firebaseTimestamp = firebaseData.lastUpdated;
                
                if (!localTimestamp || (firebaseTimestamp && firebaseTimestamp.seconds * 1000 > new Date(localTimestamp).getTime())) {
                    console.log('🔄 Firebaseのデータの方が新しいので更新します');
                    
                    // LocalStorageを更新
                    Object.keys(firebaseData).forEach(key => {
                        if (key !== 'lastUpdated') {
                            originalSetItem(key, firebaseData[key]);
                        }
                    });
                    
                    // 最終更新時刻を記録
                    originalSetItem('lastUpdated', new Date().toISOString());
                    
                    isSyncing = false; // 同期終了
                    
                    // ページをリロードして新しいデータを反映
                    window.location.reload();
                    return;
                }
            } else {
                console.log('ℹ️ Firebaseにデータがありません（初回起動）');
            }
            
            isSyncing = false; // 同期終了
            
            // リアルタイム同期を開始（デバウンス付き）
            let updateTimeout = null;
            
            FirebaseSync.watchChanges((data) => {
                // 既存のタイムアウトをクリア
                if (updateTimeout) {
                    clearTimeout(updateTimeout);
                }
                
                // 1秒待ってから更新確認
                updateTimeout = setTimeout(() => {
                    console.log('🔄 他のデバイスからの更新を検出');
                    
                    const firebaseTimestamp = data.lastUpdated;
                    const localTimestamp = localStorage.getItem('lastUpdated');
                    
                    // 自分自身の保存でない場合のみ確認
                    if (firebaseTimestamp && (!localTimestamp || firebaseTimestamp.seconds * 1000 > new Date(localTimestamp).getTime() + 1000)) {
                        // 確認ダイアログを表示
                        if (confirm('他のデバイスでデータが更新されました。最新データを読み込みますか？')) {
                            isSyncing = true;
                            
                            Object.keys(data).forEach(key => {
                                if (key !== 'lastUpdated') {
                                    originalSetItem(key, data[key]);
                                }
                            });
                            
                            originalSetItem('lastUpdated', new Date().toISOString());
                            
                            window.location.reload();
                        }
                    }
                }, 1000);
            });
            
            console.log('✅ Firebase同期が有効になりました');
            console.log('🔥 Firebaseの監視を開始');
            console.log('🔥 他のデバイスからの更新を監視');
            
        } catch (error) {
            console.error('❌ Firebase初期化エラー:', error);
            isSyncing = false;
        }
    } else {
        console.warn('⚠️ FirebaseSyncが見つかりません');
    }
});

console.log('🔥 Firebase同期モジュールが読み込まれました');
