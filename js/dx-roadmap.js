// タイムラインデータ
const timelineData = {
    development: [
        { title: '主要機能の完成', start: '2025-01-20', end: '2025-01-20' },
        { title: 'UI調整とテスト', start: '2025-01-21', end: '2025-01-31' },
        { title: 'Androidアプリ開発', start: '2025-01-20', end: '2025-02-10' },
        { title: 'Androidテスト・リリース', start: '2025-02-10', end: '2025-02-28' },
        { title: 'iOSアプリ開発', start: '2025-02-11', end: '2025-04-01' },
        { title: 'iOSテスト・リリース', start: '2025-04-01', end: '2025-04-15' },
        { title: 'サイト完成・施設検索実装', start: '2025-04-01', end: '2025-04-30' }
    ],
    business: [
        { title: '保育系NPO・公営施設ヒアリング', start: '2025-02-01', end: '2025-03-31' },
        { title: '法人設立準備', start: '2025-02-01', end: '2025-04-30' },
        { title: '法人設立', start: '2025-05-01', end: '2025-05-31' },
        { title: '自治体営業', start: '2025-06-01', end: '2025-06-30' },
        { title: 'デジポック富山応札', start: '2025-05-01', end: '2025-06-30' },
        { title: '子ども家庭庁AI実証応札', start: '2025-05-01', end: '2025-06-30' },
        { title: 'プロジェクト実施期間', start: '2025-07-01', end: '2026-03-31' },
        { title: '助成金申請準備', start: '2026-03-01', end: '2026-04-30' }
    ]
};

// タイムラインの作成
function createTimeline() {
    const timeline = document.getElementById('development-timeline');
    const now = new Date();
    const startDate = new Date('2025-01-01');
    const endDate = new Date('2026-12-31');
    
    // タイムラインの作成
    const container = document.createElement('div');
    container.className = 'timeline-wrapper';
    
    // 開発フェーズ
    const devPhase = document.createElement('div');
    devPhase.className = 'timeline-phase';
    devPhase.innerHTML = '<h3>開発フェーズ</h3>';
    addTimelineItems(devPhase, timelineData.development);
    container.appendChild(devPhase);
    
    // 営業・組織フェーズ
    const bizPhase = document.createElement('div');
    bizPhase.className = 'timeline-phase';
    bizPhase.innerHTML = '<h3>営業・組織フェーズ</h3>';
    addTimelineItems(bizPhase, timelineData.business);
    container.appendChild(bizPhase);
    
    timeline.appendChild(container);
}

function addTimelineItems(container, items) {
    items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'timeline-item';
        const start = new Date(item.start);
        const end = new Date(item.end);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        
        itemEl.innerHTML = `
            <div class="timeline-item-content">
                <span class="timeline-title">${item.title}</span>
                <span class="timeline-date">${formatDate(start)} - ${formatDate(end)}</span>
                <div class="timeline-bar" style="width: ${duration * 3}px"></div>
            </div>
        `;
        container.appendChild(itemEl);
    });
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

// プロジェクト進捗チャートの作成
function createProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    const data = {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
            {
                label: '保育アプリ開発進捗',
                data: [10, 30, 50, 70, 85, 100],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                tension: 0.4
            },
            {
                label: '献立AIアプリ開発進捗',
                data: [0, 15, 35, 55, 75, 90],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                tension: 0.4
            }
        ]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: '進捗率 (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '2025年'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'プロジェクト進捗状況'
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', () => {
    createTimeline();
    createProgressChart();
    
    // タイムラインのスタイルを追加
    const style = document.createElement('style');
    style.textContent = `
        .timeline-wrapper {
            padding: 2rem;
        }
        .timeline-phase {
            margin-bottom: 2rem;
        }
        .timeline-item {
            margin: 1rem 0;
            padding: 0.5rem;
            background: rgba(52, 152, 219, 0.1);
            border-radius: 4px;
        }
        .timeline-item-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .timeline-title {
            font-weight: bold;
            color: var(--primary-color);
        }
        .timeline-date {
            font-size: 0.9rem;
            color: var(--text-color);
        }
        .timeline-bar {
            height: 8px;
            background: var(--secondary-color);
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);
});
