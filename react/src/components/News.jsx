import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const News = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const news = [
    {
      date: "2024.02.21",
      category: "イベント",
      title: "第3回 Coral Tech Conference 開催決定",
      description: "最新のブロックチェーン技術とコミュニティ育成をテーマに、年次カンファレンスを開催します。",
      image: "/images/coral333.png",
      link: "#",
      tags: ["カンファレンス", "ブロックチェーン", "コミュニティ"]
    },
    {
      date: "2024.02.15",
      category: "プロダクト",
      title: "新機能「Coral Connect」リリース",
      description: "コミュニティメンバー同士のつながりを強化する新機能をリリースしました。",
      image: "/images/coral555.png",
      link: "#",
      tags: ["新機能", "アップデート"]
    },
    {
      date: "2024.02.10",
      category: "パートナーシップ",
      title: "地域創生プロジェクト始動",
      description: "地方自治体と連携し、地域活性化に向けた新しいプロジェクトを開始します。",
      image: "/images/coral676.png",
      link: "#",
      tags: ["地域創生", "プロジェクト"]
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-bg-dark py-section-padding overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-coral-pink/5 to-transparent opacity-30" />
        <motion.div
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-conic from-coral-pink/10 to-transparent rounded-full blur-3xl"
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
            News
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coral-pink to-transparent rounded-full mx-auto" />
        </motion.div>

        <motion.div style={{ y, opacity }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-text-light/10"
            >
              {/* 画像 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* カテゴリーバッジ */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-light bg-gradient-to-r from-coral-pink to-coral-pink/70 text-white">
                  {item.category}
                </span>

                {/* 日付 */}
                <time className="absolute bottom-4 right-4 text-text-light/90 text-sm tracking-wider">
                  {item.date}
                </time>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                <h3 className="text-xl text-text-light font-light mb-3 group-hover:text-coral-pink transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-light/70 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full border border-text-light/20 text-text-light/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 詳細リンク */}
                <a
                  href={item.link}
                  className="inline-flex items-center text-text-light/80 text-sm group/link hover:text-coral-pink transition-colors duration-300"
                >
                  <span className="mr-2">詳細を見る</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1"
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
              </div>

              {/* ホバーエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-r from-coral-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        {/* もっと見るボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="group inline-flex items-center px-8 py-4 rounded-full border border-text-light/20 text-text-light font-light transition-all duration-300 hover:border-text-light/40 hover:bg-text-light/5"
          >
            <span className="relative">
              <span className="block">もっと見る</span>
              <span className="absolute left-0 -bottom-px h-px w-full bg-text-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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

export default News;
