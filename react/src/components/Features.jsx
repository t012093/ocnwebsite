import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const features = [
    {
      image: "/images/coral21.png",
      title: "E-school",
      subtitle: "知の共創",
      description: "最先端の学習体験を提供するプラットフォーム。AIを活用した個別最適化された学習環境で、グローバルな知識共有を実現します。",
      details: "• AIによる学習最適化\n• インタラクティブな教材\n• グローバルな学習コミュニティ",
      link: "https://life-genius-ai.vercel.app/"
    },
    {
      image: "/images/coral111.png",
      title: "Global Exchange",
      subtitle: "活動の共創",
      description: "世界中のクリエイターやイノベーターをつなぐプラットフォーム。文化交流を通じて、新しい価値を創造します。",
      details: "• グローバルネットワーキング\n• クロスカルチャープロジェクト\n• イノベーションハブ",
      link: "/global-exchange"
    },
    {
      image: "/images/coral676.png",
      title: "Pro Social Media",
      subtitle: "文化をつなぐ",
      description: "次世代のソーシャルメディアプラットフォーム。クリエイターとユーザーが共に成長できる革新的な空間を提供します。",
      details: "• クリエイターエコノミー\n• プロジェクトベース協働\n• コンテンツマネタイズ",
      link: "/coral-pro"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 25,
        duration: 1
      }
    }
  };

  return (
    <section className="bg-bg-dark overflow-hidden relative">
      <div className="py-32 px-8 max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="relative text-5xl text-text-light font-bold tracking-wider inline-block"
          >
            Features
            <motion.div
              className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-[#FF7F50] to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.2
              }}
            />
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-32 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <motion.a
                href={feature.link}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center p-16 rounded-3xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-black/40 to-black/80 backdrop-blur-sm border border-white/10"
                whileHover={{
                  borderColor: "rgba(255, 127, 80, 0.3)",
                  transition: { duration: 0.15 }
                }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/5 to-[#FF7F50]/10 rounded-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0,
                  scale: hoveredFeature === index ? 1 : 0.95
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.15 
                }}
              />
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0
                }}
                transition={{ duration: 0.15 }}
              />

              <div className="order-2 lg:order-none relative z-10 flex flex-col gap-8 max-w-[480px]">
                <motion.h3
                  className="text-4xl lg:text-5xl text-text-light font-semibold leading-tight tracking-tight drop-shadow-lg"
                  initial={{ opacity: 0.9 }}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0.9,
                    color: hoveredFeature === index ? "#FF7F50" : "#FFFFFF"
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.div>
                  <h5 className="text-xl lg:text-2xl text-[#FF7F50] font-medium mb-4 drop-shadow">
                    {feature.subtitle}
                  </h5>
                  <p className="text-lg text-text-light/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="text-sm text-text-light/60 space-y-2 font-mono">
                    {feature.details.split('\n').map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
                <motion.span 
                  className="inline-flex items-center text-text-light/80 text-sm tracking-wider font-medium group-hover:text-[#FF7F50] transition-colors duration-300"
                  whileHover={{ 
                    x: 10,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0.8
                  }}
                >
                  view more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </div>

              <motion.div 
                className="order-1 lg:order-none relative z-10 overflow-hidden rounded-2xl aspect-square w-full max-w-[500px] mx-auto shadow-2xl"
                animate={{
                  scale: hoveredFeature === index ? 1.05 : 1,
                  rotateZ: hoveredFeature === index ? 2 : 0
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.2
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#FF7F50]/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0
                  }}
                  transition={{ duration: 0.15 }}
                />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* オーバーレイグロー効果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0
                  }}
                  transition={{ duration: 0.15 }}
                />
              </motion.div>

              <AnimatePresence>
                {hoveredFeature === index && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#FF7F50]/0 via-[#FF7F50]/30 to-[#FF7F50]/0 blur"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </AnimatePresence>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
