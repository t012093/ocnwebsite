// プロジェクトデータ
const projectData = {
    tasks: [
        {
            id: 1,
            name: '主要機能開発',
            start: '2025-01-20',
            end: '2025-01-31',
            category: 'development',
            progress: 100
        },
        {
            id: 2,
            name: 'Androidアプリ開発',
            start: '2025-01-20',
            end: '2025-02-28',
            category: 'development',
            progress: 60
        },
        {
            id: 3,
            name: 'iOSアプリ開発',
            start: '2025-02-11',
            end: '2025-04-15',
            category: 'development',
            progress: 0
        },
        {
            id: 4,
            name: '施設検索機能実装',
            start: '2025-04-01',
            end: '2025-04-30',
            category: 'development',
            progress: 0
        },
        {
            id: 5,
            name: '保育施設ヒアリング',
            start: '2025-02-01',
            end: '2025-03-31',
            category: 'business',
            progress: 20
        },
        {
            id: 6,
            name: '法人設立準備・登記',
            start: '2025-02-01',
            end: '2025-05-31',
            category: 'business',
            progress: 30
        },
        {
            id: 7,
            name: '実証事業応札準備',
            start: '2025-05-01',
            end: '2025-06-30',
            category: 'business',
            progress: 0
        }
    ],
    timeframe: {
        start: '2025-01-01',
        end: '2025-12-31'
    }
};

// ガントチャートの初期化
function initGanttChart() {
    setupMonthsHeader();
    createGanttBars();
}

// 月ヘッダーの設定
function setupMonthsHeader() {
    const monthsHeader = document.getElementById('gantt-months');
    const months = getMonthsBetweenDates(
        new Date(projectData.timeframe.start),
        new Date(projectData.timeframe.end)
    );

    months.forEach(month => {
        const monthCol = document.createElement('div');
        monthCol.className = 'month-column';
        monthCol.textContent = `${month.getFullYear()}年${month.getMonth() + 1}月`;
        monthsHeader.appendChild(monthCol);
    });
}

// ガントチャートのバーを生成
function createGanttBars() {
    const ganttBody = document.getElementById('gantt-body');
    const startDate = new Date(projectData.timeframe.start);
    const categories = {
        development: '開発タスク',
        business: 'ビジネス展開'
    };

    // カテゴリーごとにタスクをグループ化
    Object.entries(categories).forEach(([category, categoryName]) => {
        const categoryTasks = projectData.tasks.filter(task => task.category === category);
        
        // カテゴリーヘッダー
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'gantt-category-header';
        categoryHeader.textContent = categoryName;
        ganttBody.appendChild(categoryHeader);

        // タスクバー
        categoryTasks.forEach(task => {
            const row = document.createElement('div');
            row.className = 'gantt-row';
            
            const label = document.createElement('div');
            label.className = 'gantt-row-label';
            label.textContent = task.name;
            
            const bars = document.createElement('div');
            bars.className = 'gantt-row-bars';
            
            const bar = document.createElement('div');
            bar.className = 'gantt-bar';
            
            // バーの位置とサイズを計算
            const taskStart = new Date(task.start);
            const taskEnd = new Date(task.end);
            const left = calculatePosition(taskStart, startDate);
            const width = calculateWidth(taskStart, taskEnd);
            
            bar.style.left = `${left}%`;
            bar.style.width = `${width}%`;
            
            // 進捗状態に応じて色を変更
            if (task.progress === 100) {
                bar.style.backgroundColor = 'var(--success-color)';
            } else if (task.progress > 0) {
                bar.style.backgroundColor = 'var(--warning-color)';
            }
            
            // ツールチップ
            const label2 = document.createElement('div');
            label2.className = 'gantt-bar-label';
            label2.textContent = `${formatDate(taskStart)} - ${formatDate(taskEnd)}`;
            bar.appendChild(label2);
            
            bars.appendChild(bar);
            row.appendChild(label);
            row.appendChild(bars);
            ganttBody.appendChild(row);
        });
    });
}

// 日付のフォーマット
function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}/${m}/${d}`;
}

// 2つの日付の間の月を取得
function getMonthsBetweenDates(start, end) {
    const months = [];
    const current = new Date(start);
    current.setDate(1);
    
    while (current <= end) {
        months.push(new Date(current));
        current.setMonth(current.getMonth() + 1);
    }
    
    return months;
}

// バーの位置を計算（パーセンテージ）
function calculatePosition(date, startDate) {
    const totalDays = (new Date(projectData.timeframe.end) - startDate) / (1000 * 60 * 60 * 24);
    const daysFromStart = (date - startDate) / (1000 * 60 * 60 * 24);
    return (daysFromStart / totalDays) * 100;
}

// バーの幅を計算（パーセンテージ）
function calculateWidth(start, end) {
    const totalDays = (new Date(projectData.timeframe.end) - new Date(projectData.timeframe.start)) / (1000 * 60 * 60 * 24);
    const taskDays = (end - start) / (1000 * 60 * 60 * 24);
    return (taskDays / totalDays) * 100;
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    initGanttChart();

    // ガントチャートのバーにホバーエフェクトを追加
    document.querySelectorAll('.gantt-bar').forEach(bar => {
        bar.addEventListener('mouseover', () => {
            bar.style.opacity = '1';
            const label = bar.querySelector('.gantt-bar-label');
            if (label) {
                label.style.display = 'block';
            }
        });
        
        bar.addEventListener('mouseout', () => {
            bar.style.opacity = '0.8';
            const label = bar.querySelector('.gantt-bar-label');
            if (label) {
                label.style.display = 'none';
            }
        });
    });
});

// CSS変数の動的な更新
document.documentElement.style.setProperty('--primary-color', '#2c3e50');
document.documentElement.style.setProperty('--secondary-color', '#3498db');
