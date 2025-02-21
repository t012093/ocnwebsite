import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';
import { useRef, useState } from 'react';

const News = () => {
  const newsItems = [
    {
      date: "2024.01",
      title: "コミュニティ形成",
      description: "国内最大級のTech系コミュニティを形成",
      image: "/images/coral21.png",
      link: "#"
    },
    {
      date: "2024.02",
      title: "E-schoolを開校",
      description: "人材育成に向けて本格始動開始",
      image: "/images/coral111.png",
      link: "#"
    },
    {
      date: "2024.03",
      title: "国際展開",
      description: "グローバルコミュニティ形成",
      image: "/images/coral676.png",
      link: "#"
    }
  ];

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // スクロール位置の spring アニメーション
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // ドラッグジェスチャーの設定
  const bind = useGesture(
    {
      onDrag: ({ down, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        setIsDragging(down);
        api.start({
          x: down ? mx : 0,
          immediate: down,
          config: {
            tension: 500,
            friction: 30
          }
        });
      }
    },
    {
      drag: {
        from: () => [x.get(), 0],
        rubberband: true
      }
    }
  );

  return (
    <section className="bg-bg-dark py-section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-text-light text-center mb-16 font-bold tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          News
        </motion.h2>

        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          <animated.div
            {...bind()}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            style={{
              x,
              touchAction: 'none'
            }}
          >
            {newsItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className={`relative flex-shrink-0 w-[400px] h-[400px] group overflow-hidden rounded-2xl ${
                  isDragging ? 'pointer-events-none' : ''
                }`}
                initial={{ opacity: 0, rotateY: 45, translateX: 100 }}
                whileInView={{ 
                  opacity: 1, 
                  rotateY: 0, 
                  translateX: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: index * 0.2
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* 背景画像 */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
                </div>

                {/* コンテンツ */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-text-light/80 text-sm tracking-wider bg-black/30 px-4 py-2 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-2xl text-text-light font-bold drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-text-light/90 text-base line-clamp-2">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-coral-pink text-sm tracking-wider font-medium group-hover:translate-x-2 transition-transform duration-300">
                      read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* ホバー時のグロー効果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-coral-pink/0 via-coral-pink/30 to-coral-pink/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.a>
            ))}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default News;
