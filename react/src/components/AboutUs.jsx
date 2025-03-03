import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutUs = () => {
  const [selectedSection, setSelectedSection] = useState('mission');

  const missionPoints = [
    {
      title: "オープンなデジタル社会の実現",
      description: "誰もが平等にアクセスでき、自由に表現できるデジタル空間を創造します。",
      icon: "🌏"
    },
    {
      title: "コミュニティの力を活かす",
      description: "地域や分野を超えた繋がりを通じて、新しい価値を生み出します。",
      icon: "🤝"
    },
    {
      title: "持続可能な運営モデル",
      description: "広告に依存しない、ユーザー中心の持続可能なプラットフォームを構築します。",
      icon: "♻️"
    }
  ];

  const activities = [
    {
      title: "プラットフォーム開発",
      description: "分散型ソーシャルメディアの開発とメンテナンス"
    },
    {
      title: "コミュニティ支援",
      description: "地域コミュニティの活動支援とネットワーク構築"
    },
    {
      title: "教育・啓発",
      description: "デジタルリテラシーの向上と情報発信"
    },
    {
      title: "研究開発",
      description: "次世代のソーシャルテクノロジーの研究"
    }
  ];

  const documents = [
    {
      title: "定款",
      description: "NPO法人Open Coral Networkの定款です",
      path: "/documents/teikan.pdf"
    },
    {
      title: "役員名簿",
      description: "理事会のメンバー構成をご確認いただけます",
      path: "/documents/yakuin.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
            Open Coral Network
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            私たちは、オープンで持続可能なデジタル社会の実現を目指す非営利団体です。
            コミュニティの力を活かし、新しい価値を創造します。
          </p>
        </motion.div>

        {/* Mission Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-12"
          >
            ミッション
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-light mb-4 text-coral-pink">
                  {point.title}
                </h3>
                <p className="text-gray-400">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-12"
          >
            活動内容
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/30 to-gray-800/20 rounded-xl p-6 hover:from-gray-800/40 hover:to-gray-800/30 transition-all duration-300"
              >
                <h3 className="text-xl font-light mb-4 text-coral-pink flex items-center">
                  <span className="mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {activity.title}
                </h3>
                <p className="text-gray-400 ml-9">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-12"
          >
            法人資料
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all duration-300"
              >
                <h3 className="text-xl font-light mb-4 text-coral-pink">
                  {doc.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {doc.description}
                </p>
                <motion.a
                  href={doc.path}
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral-pink to-coral-dark text-white rounded-full text-lg font-light tracking-wider hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  ダウンロード
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-light mb-6">お問い合わせ</h2>
            <p className="text-gray-400 mb-8">
              ご質問やお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。
            </p>
            <a
              href="mailto:contact@opencoralnetwork.org"
              className="text-coral-pink hover:text-coral-dark transition-colors duration-300"
            >
              contact@opencoralnetwork.org
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
