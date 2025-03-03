import DocLayout from '../DocLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutDoc = () => {
  const toc = [
    { id: "basic-info", title: "基本情報" },
    { id: "business", title: "事業内容" },
    { id: "documents", title: "書類ダウンロード" },
  ];

  return (
    <DocLayout
      title="団体概要"
      description="Open Coral Networkの理念と組織体制についてご紹介します。"
      toc={toc}
    >
      <section id="basic-info">
        <h2 className="text-2xl font-light text-[#FF7F50] mb-6">基本情報</h2>
        <div className="space-y-4 text-gray-300">
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 mt-6 overflow-x-auto border border-gray-800">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">法人名称</th>
                  <td className="p-4 text-gray-300">NPO法人 Open Coral Network</td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">所在地</th>
                  <td className="p-4 text-gray-300">〒930-0981<br />富山県富山市西新庄9-15</td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">代表者</th>
                  <td className="p-4 text-gray-300">代表理事 楠直哉</td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">設立年月日</th>
                  <td className="p-4 text-gray-300">設立準備中</td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">法人番号</th>
                  <td className="p-4 text-gray-300">設立準備中</td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">所轄庁</th>
                  <td className="p-4 text-gray-300">富山県</td>
                </tr>
                <tr className="hover:bg-[#151515] transition-colors">
                  <th className="w-1/3 p-4 text-left font-medium text-[#FF7F50]">連絡先</th>
                  <td className="p-4 text-gray-300">coralnetwork@zohomail.jp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="business" className="mt-16">
        <h2 className="text-2xl font-light text-[#FF7F50] mb-6">事業内容</h2>
        <div className="space-y-4 text-gray-300">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">地域社会のDX推進支援事業</h3>
              <p className="text-gray-400">行政・企業・教育機関のデジタル化を支援し、効率的で持続可能な地域社会の実現を目指します。</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">AR技術を活用した地域活性化事業</h3>
              <p className="text-gray-400">最新のAR技術を用いて、観光振興や文化財の保存・活用を推進します。</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">アートによる文化振興事業</h3>
              <p className="text-gray-400">アート事業を通して、新しい文化的価値を創造します。</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">地域コミュニティ形成支援事業</h3>
              <p className="text-gray-400">テクノロジーを活用して、多様な世代が交流できる場づくりを支援します。</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">人材育成・教育事業</h3>
              <p className="text-gray-400">次世代のデジタル人材を育成し、地域の持続的な発展を支えます。</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-light text-white mb-3">オウンドメディア運営事業</h3>
              <p className="text-gray-400">ITや日本のサブカルチャーなどを取り扱うメディア。地域の知識共有と連携を促進します。</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="documents" className="mt-16">
        <h2 className="text-2xl font-light text-[#FF7F50] mb-6">書類ダウンロード</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            下記の資料をご確認いただけます：
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <motion.a
              href="/documents/teikan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <svg
                  className="w-8 h-8 text-[#FF7F50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-light text-white">定款</h3>
                  <p className="text-gray-400 text-sm mt-1">PDF形式</p>
                </div>
              </div>
            </motion.a>
            <motion.a
              href="/documents/yakuin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 hover:border border-[#FF7F50]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <svg
                  className="w-8 h-8 text-[#FF7F50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-light text-white">役員名簿</h3>
                  <p className="text-gray-400 text-sm mt-1">PDF形式</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <p className="text-gray-400">
          さらに詳しい情報については、
          <Link to="/contact" className="text-[#FF7F50] hover:text-[#FF6347] transition-colors duration-200">
            お問い合わせ
          </Link>
          ください。
        </p>
      </div>
    </DocLayout>
  );
};

export default AboutDoc;
