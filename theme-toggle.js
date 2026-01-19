// テーマ切り替え機能
(function() {
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const header = document.querySelector('.app-header');
        if (header) {
            const themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            themeToggle.style.marginLeft = 'auto';
            themeToggle.textContent = savedTheme === 'light' ? '🌙 ダーク' : '☀️ ライト';
            
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                themeToggle.textContent = newTheme === 'light' ? '🌙 ダーク' : '☀️ ライト';
            });
            
            header.appendChild(themeToggle);
        } else {
            // headerがまだない場合は少し待ってリトライ
            setTimeout(initTheme, 100);
        }
    }
    
    // ページ読み込み後に実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initTheme, 500); // 500ms待ってから実行
        });
    } else {
        setTimeout(initTheme, 500);
    }
})();
