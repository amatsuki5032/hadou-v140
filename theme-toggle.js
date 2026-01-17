// テーマ切り替え機能
(function() {
    function initTheme() {
        // 保存されたテーマを読み込む
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // トグルボタンを作成
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
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
