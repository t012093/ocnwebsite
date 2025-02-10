// ニューススライダーのスクロール制御
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.news-slider-container');

    // マウスホイールでの横スクロール
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });

    // コミュニティーカードのホバー効果
    const communityCards = document.querySelectorAll('.community-card');
    
    communityCards.forEach(card => {
        const overlay = card.querySelector('.community-overlay');
        const hoverContent = card.querySelector('.community-hover-content');
        
        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                hoverContent.style.opacity = '1';
            }, 250); // オーバーレイが消えた後に新しいコンテンツを表示
        });
        
        card.addEventListener('mouseleave', () => {
            hoverContent.style.opacity = '0';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 250); // ホバーコンテンツが消えた後にオーバーレイを表示
        });
    });
});
