document.addEventListener('DOMContentLoaded', function() {
    // セクション自動検出
    const pageSections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 現在のセクションに対応するナビゲーションリンクをアクティブに
                navItems.forEach(item => {
                    if (item.getAttribute('href') === '#' + entry.target.id) {
                        item.parentElement.classList.add('active');
                    } else {
                        item.parentElement.classList.remove('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    pageSections.forEach(section => observer.observe(section));

    // スムーズスクロール
    const navAnchors = document.querySelectorAll('.nav-links a');

    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80; // ヘッダーの高さ
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // ページ遷移アニメーション
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = targetId;
                }, 500);
            }
        });
    });

    // サイドバーのアクティブ状態管理
    const docSections = document.querySelectorAll('.doc-section');
    const navLinks = document.querySelectorAll('.doc-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            
            // すべてのセクションを非表示に
            docSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // クリックされたセクションを表示
            document.getElementById(targetId)?.classList.add('active');
            
            // ナビゲーションのアクティブ状態を更新
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            link.parentElement.classList.add('active');
        });
    });

    // ギャラリーフィルター機能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // フィルターボタンのアクティブ状態を更新
            filterBtns.forEach(filterBtn => {
                filterBtn.classList.remove('active');
            });
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            // ギャラリーアイテムのフィルタリング
            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // フェードインアニメーション
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ギャラリーアイテムのホバーエフェクト
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(100%)';
        });
    });
});
