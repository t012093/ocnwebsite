import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';

const Document = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    {
      title: 'プロジェクト',
      items: [
        { name: '保育ICT', href: '/tetotto', description: 'デジタルトランスフォーメーションプロジェクトの概要と目標' },
        { name: 'ARプロジェク', href: '/ar', description: '拡張現実プロジェクトの概要と技術仕様' },
        { name: 'e-School', href: '/coral-pro', description: 'オンライン教育プラットフォームの展開' },
        { name: 'Pro Social Media', href: '/coral-pro', description: '次世代ソーシャルメディアプラットフォーム' },
      ]
    },
    {
      title: 'サービス',
      items: [
        { name: 'DX支援サービス', href: '/dx', description: 'デジタル化推進のための包括的支援' },
        { name: '法人支援プログラム', href: '/corporate-support', description: '助成金申請支援、人材育成、経営コンサルティング' },
        { name: '人材育成プログラム', href: '/talent-development', description: 'AI人材、デザイナー、クリエイターの育成支援' },
        { name: '国際交流', href: '/global-exchange', description: '国際文化交流プロジェクト' }
      ]
    },
    {
      title: 'コミュニティ',
      items: [
        { name: 'パートナーシップ', href: '/business-community', description: '法人パートナー向けネットワーク' },
        { name: '開発者コミュニティ', href: '/creators-hub', description: '開発者・クリエイター向けコミュニティ' },
        { name: 'ユーザーコミュニティ', href: '/innovators-club', description: '一般ユーザー向けコミュニティプログラム' }
      ]
    },
    {
      title: 'NPO',
      items: [
        { name: 'NPOについて', href: '/about', description: 'Open Coral Networkの理念と活動' },
        { name: '寄付のお願い', href: '/donation', description: '寄付プログラムと活動支援について' },
        { name: '活動報告', href: '/activity-report', description: '寄付金の使途と活動の報告' }
      ]
    }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentSection = navigation.find(section => 
      section.items.some(item => item.href === currentPath)
    );
    if (currentSection) {
      setActiveSection(currentSection.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="flex">
        {/* サイドバー */}
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: isSidebarOpen ? 0 : -280 }}
          className="fixed left-0 top-16 h-screen w-80 bg-black border-r border-gray-800 overflow-y-auto pb-20"
        >
          {/* サイドバートグルボタン */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>

          <nav className="px-4 py-8">
            {navigation.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="px-3 text-sm font-semibold text-[#FF7F50] mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'bg-[#FF7F50]/10 text-[#FF7F50]'
                            : 'text-gray-400 hover:bg-gray-900 hover:text-[#FF7F50]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </motion.aside>

        {/* メインコンテンツ */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? 'ml-80' : 'ml-0'
          }`}
        >
          <div className="px-8 py-20 max-w-7xl mx-auto">
            {/* パンくずリスト */}
            <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
              <Link to="/document" className="hover:text-[#FF7F50]">
                ドキュメント
              </Link>
              <span>/</span>
              <span className="text-[#FF7F50]">{activeSection}</span>
            </nav>

            {/* コンテンツセクション */}
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-light tracking-tight mb-8 text-white">
                ドキュメントへようこそ
              </h1>
              <p className="text-lg text-gray-200 mb-12">
                Open Coral Networkのドキュメントポータルへようこそ。
                左側のナビゲーションから目的のドキュメントを選択してください。
              </p>

              {/* カテゴリーグリッド */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {navigation.map((section) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl p-8 hover:border-[#FF7F50]/30 transition-all duration-500 relative overflow-hidden h-full"
                  >
                    <h2 className="text-2xl font-light text-[#FF7F50] mb-6">
                      {section.title}
                    </h2>
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block text-gray-300 hover:text-[#FF7F50] transition-colors duration-200"
                          >
                            <span className="text-lg font-medium">
                              {item.name}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Document;
