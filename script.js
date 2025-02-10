// ニューススライダーのスクロール制御
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.news-slider-container');

    // マウスホイールでの横スクロール
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });
});
