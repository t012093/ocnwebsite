import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-bg-dark overflow-hidden">
      {/* 背景画像オーバーレイ */}
      <div className="absolute inset-0 bg-bg-dark opacity-80" />
      
      {/* 背景画像 */}
      <div className="relative h-full">
        <motion.img
          src="/images/coral6.png"
          alt="Open Coral Network"
          className="w-full h-full object-cover mix-blend-luminosity opacity-50"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            filter: 'brightness(0.7)'
          }}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-text-light font-normal"
          >
            Open Coral Network
          </motion.h1>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-light/50 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg
              className="w-6 h-6"
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
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
