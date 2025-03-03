import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const ProSocialMedia = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const features = [
    {
      icon: "/images/coral21.png",
      title: "コミュニティ作成",
      description: "AIを活用した最適なマッチングで、あなたの興味や目的に合った仲間と出会えます。"
    },
    {
      icon: "/images/coral26.png",
      title: "安全なコミュニケーション",
      description: "最新の暗号化技術とAIモデレーションで、安心して使えるプラットフォームを提供します。"
    },
    {
      icon: "/images/coral6.png",
      title: "クリエイターエコノミー",
      description: "独自のトークンシステムで、コンテンツ作成者が適切な報酬を得られる仕組みを実現。"
    }
  ];

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
            src="/images/coral676.png"
            alt="Pro Social Media"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            style={{ opacity, scale, y }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-wider mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Pro Social Media
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              次世代のソーシャルメディアで、
              <br />
              あなたのクリエイティビティを解き放つ
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="https://coralapp.vercel.app/">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-coral-pink to-coral-dark text-white rounded-full text-lg font-light tracking-wider hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  デモを体験
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg 
            className="w-6 h-6 text-white opacity-50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
              主な機能
            </h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              最新のテクノロジーで実現する、新しいソーシャル体験
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-coral-pink/30 transition-all duration-500 group"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* 画像コンテナ */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-coral-pink/20 to-coral-dark/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        mixBlendMode: 'overlay'
                      }}
                    />
                    <motion.img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* 光の効果 */}
                    <div className="absolute -inset-x-32 top-0 h-[1px] bg-gradient-to-r from-transparent via-coral-pink/50 to-transparent transform translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-x-32 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-coral-pink/50 to-transparent transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* テキストコンテンツ */}
                  <div className="relative z-10 p-8">
                    <h3 className="text-2xl font-light tracking-wide mb-4 drop-shadow-lg group-hover:text-coral-pink transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed drop-shadow">
                      {feature.description}
                    </p>
                  </div>

                  {/* 装飾的なライティング効果 */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(143, 200, 243, 0.15) 0%, transparent 70%)'
                    }}
                  />
                  
                  {/* コーナーの光効果 */}
                  <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-coral-pink/50 to-transparent transform -translate-x-1" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-coral-pink/50 to-transparent transform -translate-y-1" />
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-coral-pink/50 to-transparent transform translate-x-1" />
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-coral-pink/50 to-transparent transform translate-y-1" />
                  </div>
                </motion.div>

                {/* 装飾的な光のエフェクト */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-coral-pink/5 blur-2xl rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
                革新的なUI/UX
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                直感的な操作性と美しいデザインで、
                新しいソーシャルメディア体験を提供します。
                あなたのクリエイティビティを最大限に引き出す
                環境がここにあります。
              </p>
              <ul className="space-y-6">
                {[
                  "AIパーソナライズ機能",
                  "リアルタイムコラボレーション",
                  "マルチメディア統合",
                  "クロスプラットフォーム対応"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg className="w-6 h-6 text-coral-pink mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-light tracking-wide">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="/images/coral47.png"
                  alt="アプリのUI"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-coral-pink/20 to-transparent rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-pink/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral-dark/5 rounded-full filter blur-3xl" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
            新しい体験が、
            <br />
            ここから始まる
          </h2>
          <p className="text-xl text-gray-300 font-light tracking-wide mb-12">
            Pro Social Mediaで、
            <br />
            あなたのクリエイティビティを世界へ
          </p>
          <motion.a
            href="https://coralapp.vercel.app/"
            className="inline-block"
          >
            <motion.button 
              className="px-12 py-4 bg-gradient-to-r from-coral-pink to-coral-dark text-white rounded-full text-lg font-light tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              デモを体験
            </motion.button>
          </motion.a>
        </motion.div>

        {/* 装飾的な背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral-pink/5 to-transparent opacity-50" />
      </section>
    </div>
  );
};

export default ProSocialMedia;
