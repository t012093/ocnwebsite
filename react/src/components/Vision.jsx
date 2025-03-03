import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Vision = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/coral14.png',
    '/images/coral578.png',
    '/images/coral47.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visionText = [
    'ゆっくりと広がる、珊瑚のようなつながり。\n地域と未来を育む。',
    '私たちは、グローバルな視野を持ちながら、\n各地域に根ざした活動を大切にしています。\n珊瑚礁のように、それぞれの地域が独自の輝きを放ち、\n緩やかにつながり合うコミュニティを築きます。',
    '地域の文化や価値観を大切にしながら、\n世界の知見を活かし、未来へと続く\n持続可能な地域社会を創造します。'
  ];

  return (
    <section id="vision" className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide]}
            alt="Vision background"
            className="w-full h-full object-cover opacity-70"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/10 to-transparent opacity-0"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/5 to-transparent opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex items-center justify-center text-white"
      >
        <div className="container-custom max-w-4xl text-center space-y-8">
          {visionText.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`whitespace-pre-line leading-relaxed ${
                index === 0 
                  ? 'text-2xl md:text-3xl font-light text-[#FF7F50] drop-shadow-glow'
                  : 'text-lg md:text-xl text-gray-200'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;
