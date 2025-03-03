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
        { name: 'DXプロジェクト概要', href: '/dx', description: 'デジタルトランスフォーメーションプロジェクトの概要と目標' },
        { name: 'ARプロジェクト概要', href: '/ar', description: '拡張現実プロジェクトの概要と技術仕様' }
      ]
    },
    {
      title: 'サービス',
      items: [
        { name: '開発ロードマップ', href: '/dx-roadmap', description: 'プロジェクトの開発スケジュールと主要マイルストーン' },
        { name: 'ARTプロジェクト概要', href: '/art', description: 'アートプロジェクトの概要とビジョン' }
      ]
    },
    {
      title: 'コミュニティ',
      items: [
        { name: 'NPO', href: '/npo', description: 'NPO法人としての理念と活動' },
        { name: '団体概要', href: '/about', description: 'Open Coral Networkの概要と使命' },
        { name: '活動内容', href: '/activities', description: '現在の活動内容と今後の展開' }
      ]
    },
    {
      title: '寄付',
      items: [
        { name: '寄付について', href: '/donation', description: '寄付の方法と使途について' },
        { name: '寄付者特典', href: '/donation-benefits', description: '寄付者への特典プログラム' },
        { name: '活動報告', href: '/activity-report', description: '寄付金の使途と活動の報告' }
      ]
    },
    {
      title: '法人向け',
      items: [
        { name: 'パートナーシップ', href: '/partnership', description: '法人パートナーシッププログラムの詳細' },
        { name: '導入事例', href: '/case-studies', description: '企業での導入・活用事例' }
      ]
    },
    {
      title: '開発者向け',
      items: [
        { name: '技術ドキュメント', href: '/tech-docs', description: 'APIリファレンスと技術仕様' },
        { name: '開発リソース', href: '/dev-resources', description: 'SDK、ツール、サンプルコード' }
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
          className="fixed left-0 top-16 h-screen w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto pb-20"
        >
          {/* サイドバートグルボタン */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
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

          <div className="px-4 py-8">
            <div className="relative">
              <input
                type="search"
                placeholder="ドキュメントを検索..."
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7F50]/50"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <nav className="mt-8 space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
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
                              : 'text-gray-400 hover:bg-gray-800 hover:text-[#FF7F50]'
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
          </div>
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
