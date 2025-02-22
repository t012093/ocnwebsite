import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const services = [
    {
      title: "DX",
      description: "地域のあらゆる課題をデジタル技術で解決し、持続可能な社会を実現します。",
      image: "/images/coral444.png",
      features: ["保育,介護関連事業", "業務効率化", "コミュニティ管理"],
      gradient: "bg-gradient-to-r from-coral-pink to-coral-pink/70"
    },
    {
      title: "ART",
      description: "デジタルアートを通じて、海洋環境保護の重要性を表現し、新しい価値を創造します。",
      image: "/images/coral555.png",
      features: ["珊瑚アート", "クリエイター支援", "コンペ・展示イベント"],
      gradient: "bg-gradient-to-r from-coral-pink to-coral-pink/70"
    },
    {
      title: "AR",
      description: "ARで街をデザイン。VRとの融合で地域と世界を繋ぐ",
      image: "/images/coral676.png",
      features: ["ゲーム", "インタラクティブ体験", "観光事業"],
      gradient: "bg-gradient-to-r from-coral-pink to-coral-pink/70"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-bg-dark py-section-padding overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-coral-pink/5 to-transparent opacity-30" />
        <motion.div
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-conic from-coral-pink/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-text-light font-light tracking-wider mb-4">
            Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coral-pink to-transparent rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* 接続線 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral-pink/0 via-coral-pink/30 to-coral-pink/0" />

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center gap-8 mb-24 last:mb-0 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* タイムラインドット */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-coral-pink"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.3 + 0.4 }}
              />

              {/* 画像セクション */}
              <motion.div
                className="w-1/2"
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                style={{ perspective: "1000px" }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>

              {/* コンテンツセクション */}
              <div className="w-1/2">
                <motion.div
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-text-light/10"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* タイトル */}
                  <h3 className={`inline-block px-4 py-1 rounded-full text-lg font-light ${service.gradient} text-white mb-6`}>
                    {service.title}
                  </h3>

                  {/* 説明文 */}
                  <p className="text-text-light/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* 機能リスト */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center text-sm text-text-light/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-coral-pink mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
