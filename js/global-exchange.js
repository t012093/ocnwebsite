document.addEventListener('DOMContentLoaded', () => {
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    roadmapItems.forEach(item => {
        observer.observe(item);
    });
});
