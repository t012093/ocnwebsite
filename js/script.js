document.addEventListener('DOMContentLoaded', function() {
    // サイドバーのアクティブ状態管理
    const sections = document.querySelectorAll('.doc-section');
    const navLinks = document.querySelectorAll('.doc-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            
            // すべてのセクションを非表示に
            sections.forEach(section => {
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
