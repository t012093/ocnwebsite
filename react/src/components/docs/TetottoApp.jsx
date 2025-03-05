import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const TetottoApp = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === '#tetotto-cta') {
      setTimeout(() => {
        const element = document.getElementById('tetotto-cta');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // ハッシュがない場合は一番上にスクロール
      window.scrollTo(0, 0);
    }
  }, [location]);

  const features = [
    {
      title: "施設検索の効率化",
      description: "直感的なインターフェースで保育施設の検索・比較が簡単に行えます。",
      icon: "🔍"
    },
    {
      title: "コミュニティ掲示板",
      description: "保育施設同士の情報共有や、保護者とのコミュニケーションをサポートします。",
      icon: "💭"
    },
    {
      title: "リアルタイムチャット",
      description: "スタッフ間の素早い情報共有や、保護者との円滑なコミュニケーションを実現します。",
      icon: "💌"
    },
    {
      title: "お知らせ配信機能",
      description: "重要なお知らせを簡単に配信。既読確認機能で確実な情報共有を実現します。",
      icon: "📢"
    },
    {
      title: "施設情報管理機能",
      description: "施設情報や各種書類を一元管理。効率的な運営をサポートします。",
      icon: "📋"
    },
    {
      title: "データ分析・レポート",
      description: "運営データを可視化し、効率的な意思決定と業務改善をサポートします。",
      icon: "📊"
    }
  ];

  const benefits = [
    "業務効率の大幅な改善",
    "コミュニケーションの活性化",
    "ペーパーレス化の促進",
    "情報共有の円滑化",
    "保護者満足度の向上",
    "業務の自動化による保育時間の創出"  // 新しく追加するメリット
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション - グラデーションで暗から明へ */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6">
                テトテット
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                新しい保育制度に対応した、保育施設向けの総合支援アプリケーション
              </p>
              <motion.a
                href="https://hoikuapp-7e0adfa07d71.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                アプリを試す
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* 機能紹介セクション - ライトテーマ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6 text-gray-900">主な機能</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              保育施設の運営に必要な機能を、使いやすいインターフェースで提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* メリットセクション - グラデーションで明から暗へ */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-100 to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6 text-gray-900">導入メリット</h2>
            <p className="text-lg text-gray-600">
              の導入により、以下のような効果が期待できます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-white/80 p-4 rounded-lg shadow-soft"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF7F50]" />
                <p className="text-gray-800">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション - ダークテーマ */}
      <section id="tetotto-cta" className="py-20 px-4 bg-gray-900 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent)]" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-light mb-6 text-white">
              新しい保育の形を、一緒に。
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            テトテットは、保育施設のデジタル化をサポートし、より良い保育環境の実現を目指します。
            </p>
            <motion.a
              href="https://hoikuapp-7e0adfa07d71.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-full hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              無料で始める
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TetottoApp;

