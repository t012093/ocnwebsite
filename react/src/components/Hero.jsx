import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-bg-cream">
      {/* 背景画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img
          src="/images/coral6.png"
          alt="珊瑚のイメージ"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* コンテンツオーバーレイ */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut"
          }}
          className="text-center z-10"
        >
          <h1 className="text-white text-4xl md:text-6xl font-normal mb-6">
            Open Coral Network
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-white text-lg md:text-xl opacity-90">
              地域と創造の交差点
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
