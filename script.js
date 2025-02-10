document.addEventListener('DOMContentLoaded', () => {
    // ビジョンスライダーの制御
    const visionSlides = document.querySelectorAll('.vision-slide');
    let currentSlide = 0;
    
    function changeSlide() {
        visionSlides.forEach(slide => slide.classList.remove('active'));
        visionSlides[currentSlide].classList.add('active');
        currentSlide = (currentSlide + 1) % visionSlides.length;
    }
    
    // 5秒ごとに画像を切り替え
    setInterval(changeSlide, 5000);
    
    // ナビゲーションのスムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // スクロールアニメーション
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 画像とテキストのフェードインアニメーション
    document.querySelectorAll('.image-grid img, .service-card, .text-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // コンタクトフォームの処理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                message: contactForm.querySelector('textarea').value
            };

            // ここに実際のフォーム送信処理を追加
            alert('お問い合わせありがとうございます。\nメッセージが送信されました。');
            contactForm.reset();
        });
    }

    // 要素のフェードインアニメーションのためのCSSクラス
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// ページの読み込み進捗バーの実装
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // プログレスバーの作成（存在しない場合）
    let progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--primary-color);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
});
