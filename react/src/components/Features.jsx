import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'E-school',
      subtitle: '知の共創',
      description: 'オンラインで学びを深め、共に成長するプラットフォーム。専門家との出会いや、実践的なスキル習得の機会を提供します。',
      image: '/images/coral21.png',
      link: 'https://life-genius-ai.vercel.app/',
      imageFirst: false
    },
    {
      title: 'Global Exchange',
      subtitle: '活動の共創',
      description: '世界中の仲間とアイデアを共有し、新しい可能性を探求するコミュニティー。国境を越えた協力で、革新的なプロジェクトを実現します。',
      image: '/images/coral111.png',
      link: '/global-exchange',
      imageFirst: true
    },
    {
      title: 'Pro Social Media',
      subtitle: '文化をつなぐ',
      description: '創造性とプロフェッショナリズムが融合する次世代型SNS。あなたのプロジェクトを世界に発信し、新たな協働の機会を創出します。',
      image: '/images/coral676.png',
      link: '/coral-pro',
      imageFirst: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-dark mb-4"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-dark/70"
          >
            未来を創る3つの主要機能
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24 md:space-y-32"
        >
          {features.map((feature) => (
            <motion.a
              key={feature.title}
              href={feature.link}
              variants={itemVariants}
              className="block group"
            >
              <div className={`relative ${
                feature.imageFirst ? 'lg:translate-x-12' : 'lg:-translate-x-12'
              } px-4 sm:px-6 md:px-8`}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
                  feature.imageFirst ? 'lg:flex-row-reverse' : ''
                }`}>
                  <motion.div
                    className="flex-1 relative z-10 w-full max-w-2xl mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-3xl shadow-2xl"
                    />
                    {/* 装飾的な背景要素 */}
                    <div className={`absolute -z-10 ${
                      feature.imageFirst ? '-left-4 md:-left-6' : '-right-4 md:-right-6'
                    } -bottom-4 md:-bottom-6 w-full h-full rounded-3xl bg-gradient-to-br from-coral-pink/15 to-coral-pink/5`} />
                  </motion.div>
                  <div className="flex-1 space-y-6 relative z-10 text-center lg:text-left px-4 sm:px-0">
                    <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                      <h4 className="text-lg md:text-xl font-medium text-coral-light tracking-wide">
                        {feature.subtitle}
                      </h4>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral-pink">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-text-dark/80 max-w-xl mx-auto lg:mx-0">
                      {feature.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center space-x-3 text-coral-pink group-hover:text-coral-light transition-all duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <span className="font-medium text-lg">詳しく見る</span>
                      <svg 
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                {/* 装飾的な背景パターン */}
                <div className={`absolute -z-10 ${
                  feature.imageFirst ? 'left-1/2' : 'right-1/2'
                } top-1/2 transform -translate-y-1/2 ${
                  feature.imageFirst ? '-translate-x-1/2' : 'translate-x-1/2'
                } w-[600px] h-[600px] bg-gradient-to-r from-coral-pink/5 to-transparent rounded-full blur-3xl opacity-60`} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
