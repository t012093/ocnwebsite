import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GlobalExchange = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const goals = [
    {
      icon: "/images/coral111.png",
      title: "PR",
      description: "NPOプロジェクトの国際的な認知度向上"
    },
    {
      icon: "/images/coral222.png",
      title: "組織形成",
      description: "国際的な新しい組織の形成と連携"
    },
    {
      icon: "/images/coral233.png",
      title: "企画提案",
      description: "助成金に対する革新的な企画提案"
    },
    {
      icon: "/images/coral444.png",
      title: "NPO支援",
      description: "他国でのNPO連携・設立支援"
    }
  ];

  const programs = [
    {
      image: "/images/coral21.png",
      title: "グローバルフォーラム",
      description: "世界各国の専門家による講演とディスカッション"
    },
    {
      image: "/images/coral578.png",
      title: "ワークショップ",
      description: "実践的なスキル習得と問題解決セッション"
    },
    {
      image: "/images/coral676.png",
      title: "文化交流",
      description: "異文化理解とコミュニケーション"
    }
  ];

  const features = [
    {
      title: "多言語サポート",
      description: "日本語/英語/中国語対応"
    },
    {
      title: "オンライン参加",
      description: "世界中どこからでも参加可能"
    },
    {
      title: "ネットワーキング",
      description: "グローバルな人脈形成"
    },
    {
      title: "知識共有",
      description: "専門知識とスキルの交換"
    }
  ];

  const SectionHeader = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7F50] to-[#FF6347]">
      {children}
    </h2>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/images/coral100.png"
            alt="Global Exchange"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            style={{ opacity, scale }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-wider mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Global Exchange
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              世界中のクリエイターやイノベーターをつなぐプラットフォーム
              <br />
              文化交流を通じて、新しい価値を創造します
            </motion.p>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="https://discord.gg/ZZP6jXuJ" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-full text-lg font-light tracking-wider hover:scale-105 transition-all duration-300">
                  Discordに参加
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,127,80,0.03),transparent)]" />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader>About Global Exchange</SectionHeader>
            <p className="text-xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              世界各国のクリエイターやアーティストが集う場所。異なる文化や視点を活かし、ボーダーレスなプロジェクトを創造。言語を超えた対話から、新しい可能性が広がります。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#FF7F50]/50 hover:bg-[#151515] transition-all duration-500 relative overflow-hidden backdrop-blur-sm group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-light text-[#FF7F50] mb-4 drop-shadow-glow">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,127,80,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,127,80,0.03),transparent)]" />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader>Program</SectionHeader>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-[#111] border border-gray-800 hover:border-[#FF7F50]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/20 to-[#FF6347]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      mixBlendMode: 'overlay'
                    }}
                  />
                  <motion.img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-light text-[#FF7F50] mb-4 drop-shadow-glow">
                    {program.title}
                  </h3>
                  <p className="text-gray-300">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,127,80,0.03),transparent)]" />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader>Purpose</SectionHeader>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-[#111] border border-gray-800 hover:border-[#FF7F50]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 mb-6">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-[#FF7F50] mb-4 drop-shadow-glow">{goal.title}</h3>
                  <p className="text-gray-300">{goal.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,127,80,0.05),transparent)]" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7F50] to-[#FF6347]">グローバルな交流の場へ</span>
              <br />
              参加しませんか？
            </h2>
            <p className="text-xl text-gray-200 font-light tracking-wide mb-12">
              あなたのアイデアと情熱を世界へ
            </p>
            <motion.a
              href="https://discord.gg/ZZP6jXuJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button 
                className="px-12 py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-full text-lg font-light tracking-wider shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                コミュニティに参加
              </motion.button>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalExchange;
