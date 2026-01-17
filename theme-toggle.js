// テーマ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    // 保存されたテーマを読み込む
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // トグルボタンを作成
    const header = document.querySelector('.header');
    if (header) {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.textContent = savedTheme === 'light' ? '🌙 ダークモード' : '☀️ ライトモード';
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'light' ? '🌙 ダークモード' : '☀️ ライトモード';
        });
        
        header.appendChild(themeToggle);
    }
});
