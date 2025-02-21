import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src="/images/coral6.png"
          alt="Hero background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* コンテンツ */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl text-text-light font-light text-center tracking-[0.2em] mb-6"
        >
          Open Coral Network
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-text-light/90 text-center font-light tracking-wider"
        >
          地域と創造の交差点。ー珊瑚ネットワーク
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
