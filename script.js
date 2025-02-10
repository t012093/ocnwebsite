// ニューススライダーのスクロール制御
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.news-slider-container');

    // マウスホイールでの横スクロール
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });

    // コミュニティーカードのオーバーレイ制御
    const communityCards = document.querySelectorAll('.community-card');
    
    communityCards.forEach(card => {
        const overlay = card.querySelector('.community-overlay');
        
        // デフォルトで表示
        overlay.style.opacity = '1';
        
        // ホバー時の挙動
        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '0';
        });
        
        card.addEventListener('mouseleave', () => {
            overlay.style.opacity = '1';
        });
    });
});
