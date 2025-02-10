document.addEventListener('DOMContentLoaded', () => {
    // ドキュメントページの目次切り替え
    const docNavLinks = document.querySelectorAll('.doc-nav a');
    const docSections = document.querySelectorAll('.doc-section');

    docNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // セクションの切り替え
            docSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // アクティブなリンクのスタイル更新
            docNavLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            link.parentElement.classList.add('active');
        });
    });

    // ニュースセクションの自動スクロール
    const newsContainer = document.querySelector('.news-slider-container');
    let scrollPosition = 0;
    let scrollDirection = 1;
    const scrollSpeed = 1;

    function autoScroll() {
        if (!newsContainer) return;

        const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth;
        
        // スクロール位置の更新
        scrollPosition += scrollSpeed * scrollDirection;
        
        // 端に到達したら方向を反転
        if (scrollPosition >= maxScroll) {
            scrollDirection = -1;
        } else if (scrollPosition <= 0) {
            scrollDirection = 1;
        }
        
        newsContainer.scrollLeft = scrollPosition;
    }

    // 定期的なスクロール実行
    const scrollInterval = setInterval(autoScroll, 50);

    // マウスホバー時にスクロールを一時停止
    newsContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });

    newsContainer.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(autoScroll, 50);
    });

    // マウスホイールでの手動スクロール
    newsContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        newsContainer.scrollLeft += e.deltaY;
    });

    // ビジョンスライダーの実装
    const visionSlides = document.querySelectorAll('.vision-slide');
    let currentSlide = 0;

    function showNextSlide() {
        visionSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % visionSlides.length;
        visionSlides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);

    // コミュニティーカードのホバー効果
    const communityCards = document.querySelectorAll('.community-card');
    
    communityCards.forEach(card => {
        const overlay = card.querySelector('.community-overlay');
        const hoverContent = card.querySelector('.community-hover-content');
        
        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                hoverContent.style.opacity = '1';
            }, 250);
        });
        
        card.addEventListener('mouseleave', () => {
            hoverContent.style.opacity = '0';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 250);
        });
    });
});
