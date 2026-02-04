// 更新履歴データ
const updateHistory = [
    {
        date: "2026-02-04",
        version: "v145",
        items: [
            { type: "system", text: "更新履歴表示機能を追加" }
        ]
    },
    {
        date: "2026-02-03",
        version: "v144",
        items: [
            { type: "system", text: "保留機能を実装（非表示中）" },
            { type: "system", text: "保留パネルのドラッグ&ドロップ対応" }
        ]
    },
    {
        date: "2026-02-03",
        version: "v143",
        items: [
            { type: "system", text: "プロファイル2〜5のバグ修正" },
            { type: "system", text: "単一編制エクスポート/インポート機能追加" },
            { type: "system", text: "コピーボタン常時表示に変更" }
        ]
    }
];

// 日本時間を取得
function getJapanTime() {
    return new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date());
}

// 最新の更新情報を取得
function getLatestUpdate() {
    if (updateHistory.length === 0) return null;
    const latest = updateHistory[0];
    const itemCount = latest.items.length;
    const summary = itemCount > 1 
        ? `${latest.items[0].text} 他${itemCount - 1}件`
        : latest.items[0].text;
    
    return {
        version: latest.version,
        date: latest.date,
        summary: summary
    };
}

// 更新履歴モーダルを表示
function showUpdateHistoryModal() {
    const modal = document.getElementById('update-history-modal');
    const content = document.getElementById('update-history-content');
    
    // 履歴HTMLを生成
    let html = '';
    updateHistory.forEach(update => {
        html += `
            <div class="history-entry">
                <div class="history-header">
                    <span class="history-version">${update.version}</span>
                    <span class="history-date">${update.date}</span>
                </div>
                <ul class="history-items">
        `;
        
        update.items.forEach(item => {
            const typeIcon = item.type === 'system' ? '⚙️' 
                           : item.type === 'general' ? '👤' 
                           : '✨';
            html += `<li><span class="history-icon">${typeIcon}</span>${item.text}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
    });
    
    content.innerHTML = html;
    modal.style.display = 'flex';
}

// モーダルを閉じる
function closeUpdateHistoryModal() {
    const modal = document.getElementById('update-history-modal');
    modal.style.display = 'none';
}

// グローバルに公開
window.showUpdateHistoryModal = showUpdateHistoryModal;
window.closeUpdateHistoryModal = closeUpdateHistoryModal;

// 初期化：更新情報バーに最新情報を表示
function initUpdateInfo() {
    const latest = getLatestUpdate();
    if (!latest) return;
    
    document.getElementById('version-tag').textContent = latest.version;
    document.getElementById('update-date').textContent = latest.date;
    document.getElementById('update-summary').textContent = latest.summary;
}

// ページ読み込み時に初期化（Reactの描画後に実行）
window.addEventListener('load', () => {
    // React描画を待つ
    setTimeout(() => {
        const versionTag = document.getElementById('version-tag');
        if (versionTag) {
            initUpdateInfo();
            
            // 詳細ボタンのイベントリスナー
            const showBtn = document.getElementById('show-history-btn');
            if (showBtn) {
                showBtn.addEventListener('click', showUpdateHistoryModal);
            }
            
            // モーダル外クリックで閉じる
            const modal = document.getElementById('update-history-modal');
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target.id === 'update-history-modal') {
                        closeUpdateHistoryModal();
                    }
                });
            }
        }
    }, 100);
});
