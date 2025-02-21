import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative bg-bg-dark py-section-padding overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-coral-pink/5 to-transparent opacity-50" />
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-conic from-coral-pink/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-text-light font-light tracking-wider mb-4">
                About
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-coral-pink to-transparent rounded-full mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-coral-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-text-light/10">
                <h3 className="text-2xl text-text-light font-light mb-4">
                  コミュニティの力を信じて
                </h3>
                <p className="text-text-light/80 leading-relaxed">
                  私たちは、技術とコミュニティの力を融合させることで、より良い未来を創造できると信じています。
                  一人一人の創造性と専門知識を活かし、共に成長していける場所を提供します。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-coral-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-text-light/10">
                <h3 className="text-2xl text-text-light font-light mb-4">
                  技術革新と共に
                </h3>
                <p className="text-text-light/80 leading-relaxed">
                  最新のテクノロジーを活用し、人々の生活をより豊かにする革新的なソリューションを提供します。
                  持続可能な未来に向けて、私たちは常に進化し続けます。
                </p>
              </div>
            </motion.div>

            {/* アクションボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-coral-pink to-coral-pink/70 text-text-light font-light transition-all duration-300 hover:shadow-lg hover:shadow-coral-pink/20 hover:-translate-y-0.5"
              >
                <span className="relative">
                  <span className="block transition-transform duration-300 group-hover:translate-x-2">
                    Learn More
                  </span>
                  <span className="absolute left-0 -bottom-px h-px w-full bg-text-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
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
              </a>
              <a
                href="#"
                className="group inline-flex items-center px-8 py-4 rounded-full border border-text-light/20 text-text-light font-light transition-all duration-300 hover:border-text-light/40 hover:bg-text-light/5"
              >
                <span className="relative">
                  <span className="block">Contact Us</span>
                  <span className="absolute left-0 -bottom-px h-px w-full bg-text-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* 右側：画像ギャラリー */}
          <div className="relative h-[600px]">
            {/* メイン画像 */}
            <motion.div
              style={{ y: y1, scale, rotate }}
              className="absolute top-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/coral21.png"
                alt="Main coral"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </motion.div>

            {/* セカンダリ画像 */}
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/coral26.png"
                alt="Secondary coral"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/40 to-transparent" />
            </motion.div>

            {/* デコレーション要素 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-coral-pink/20 to-transparent opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
