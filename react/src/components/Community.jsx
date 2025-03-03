import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Community = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const communities = [
    {
      title: "企業・NPO向け",
      description: "ビジネスとソーシャルインパクトを両立させる、革新的なソリューションを共創するコミュニティ。",
      image: "/images/coral343.png",
      memberCount: "1,200+",
      category: "ビジネス支援"
    },
    {
      title: "地域コミュニティ",
      description: "地域に根ざした活動を展開し、持続可能な社会づくりを目指すローカルネットワーク。",
      image: "/images/coral345.png",
      memberCount: "800+",
      category: "地域活性化"
    },
    {
      title: "開発者",
      description: "テクノロジーを活用して社会課題の解決に挑戦する、イノベーターたちのコミュニティ。",
      image: "/images/coral578.png",
      memberCount: "650+",
      category: "テクノロジー"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-bg-dark py-section-padding overflow-hidden">
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
            Community
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#FF7F50] to-transparent rounded-full mx-auto" />
        </motion.div>

        <motion.div style={{ y }} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <motion.div
                key={index}
                style={{ scale }}
                className="relative"
              >
                {/* コミュニティカード */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* メインコンテナ */}
                  <div className="relative aspect-square">
                    {/* 円形の画像コンテナ */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-text-light/10">
                      <img
                        src={community.image}
                        alt={community.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    {/* コンテンツオーバーレイ */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <span className="px-3 py-1 rounded-full text-sm font-light bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white w-fit mb-4">
                        {community.category}
                      </span>
                      <h3 className="text-xl text-text-light font-light mb-2">
                        {community.title}
                      </h3>
                      <p className="text-text-light/70 text-sm leading-relaxed mb-4">
                        {community.description}
                      </p>
                      <div className="flex items-center text-text-light/60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="text-sm">{community.memberCount} メンバー</span>
                      </div>
                    </div>

                    {/* インタラクティブなリング */}
                    <motion.div
                      className="absolute -inset-4 rounded-full border-2 border-[#FF7F50]/30 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* コミュニティに参加するボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white font-light transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7F50]/20"
          >
            <span className="mr-2">コミュニティに参加する</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
