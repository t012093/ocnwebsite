import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DXProject = () => {
  const features = [
    {
      title: "業務プロセスの効率化",
      description: "既存の業務フローを分析し、デジタル技術を活用して無駄を省き、生産性を向上させます。",
      image: "/images/coral4.png",
    },
    {
      title: "システム統合・最適化",
      description: "バラバラに運用されているシステムを統合し、データの一元管理と業務の効率化を実現します。",
      image: "/images/coral2.png",
    },
    {
      title: "デジタル戦略立案",
      description: "企業の未来を見据えたデジタル戦略を立案し、段階的な変革を支援します。",
      image: "/images/coral3.png",
    },
  ];

  const benefits = [
    "業務効率の大幅な向上",
    "コスト削減と収益性の改善",
    "データに基づく意思決定の実現",
    "従業員の働き方改革の促進",
    "顧客満足度の向上",
  ];

  const flowSteps = [
    { number: "1", title: "現状分析", description: "既存の業務プロセスとシステムを詳細に分析します" },
    { number: "2", title: "戦略立案", description: "目標達成のための具体的な戦略を策定します" },
    { number: "3", title: "システム設計", description: "最適なシステムの設計と開発を行います" },
    { number: "4", title: "導入・運用", description: "段階的な導入と運用サポートを提供します" },
  ];

  const tetotettFeatures = [
    "施設検索の効率化",
    "コミュニティ掲示板機能",
    "リアルタイムチャット機能",
    "お知らせ配信機能",
    "施設情報管理機能",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/images/coral57.png"
            alt="DX Service"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl font-light text-center"
          >
            Digital Transformation
          </motion.h1>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light mb-6">DXサービス概要</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              私たちは、企業や組織の業務プロセスを根本から見直し、最新のデジタル技術を活用して効率化と革新を実現します。
            </p>
          </motion.div>

          {/* 特徴カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF7F50]/30 transition-all duration-500 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-4 text-[#FF7F50]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DX導入のメリット */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-light mb-12 text-center"
          >
            DX導入のメリット
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF7F50]" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-light mb-12 text-center"
          >
            導入の流れ
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative p-6 bg-black/50 rounded-xl border border-gray-800"
              >
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-[#FF7F50] flex items-center justify-center text-xl font-light">
                  {step.number}
                </div>
                <h4 className="text-xl font-light mb-3 ml-6">{step.title}</h4>
                <p className="text-gray-400 ml-6">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* アプリ紹介 */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-6">テトテット</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              新しい保育制度に対応した、保育施設向けの総合支援アプリケーション
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-light text-[#FF7F50] mb-6">主な機能</h3>
              {tetotettFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F50]" />
                  <p className="text-gray-300">{feature}</p>
                </div>
    ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
  to="/tetotto"
  className="inline-flex items-center mt-8 px-8 py-3 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full text-white font-light hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
>
  詳細を見る
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</Link>
              </motion.div>
</motion.div>
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative aspect-square rounded-2xl overflow-hidden"
>
  <img
    src="/images/coral333.png"
    alt="テトテット"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
</motion.div>
</div>
</div>
</section>

{/* お問い合わせセクション */}
<section className="py-20 px-4">
<div className="container mx-auto max-w-2xl">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="text-center mb-12"
>
<h2 className="text-3xl font-light mb-4">お問い合わせ</h2>
<p className="text-gray-300">
  DXサービスに関するご相談・お見積もりは下記フォームよりお気軽にお問い合わせください。
</p>
</motion.div>

<motion.form
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.2 }}
className="space-y-6"
>
<div>
  <input
    type="text"
    placeholder="お名前"
    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7F50]"
    required
  />
</div>
<div>
  <input
    type="email"
    placeholder="メールアドレス"
    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7F50]"
    required
  />
</div>
<div>
  <input
    type="text"
    placeholder="会社名"
    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7F50]"
    required
  />
</div>
<div>
  <textarea
    placeholder="お問い合わせ内容"
    rows={6}
    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7F50] resize-none"
    required
  />
</div>
<div className="text-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-12 py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full text-white font-light hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
  >
    送信する
  </motion.button>
</div>
</motion.form>
</div>
</section>
</div>
);
};

export default DXProject;
