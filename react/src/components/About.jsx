import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-cream">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* 画像 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/coral9.png"
              alt="珊瑚のイメージ"
              className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>

          {/* テキスト */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-coral-light leading-relaxed">
                地域と創造の交差点。―珊瑚ネットワーク
              </p>
              <p className="text-coral-pink/80 leading-relaxed">
                私たちは、グローバルな視野を持ちながら、各地域に根ざした活動を大切にしています。
                珊瑚礁のように、それぞれの地域が独自の輝きを放ち、緩やかにつながり合うコミュニティを築きます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
