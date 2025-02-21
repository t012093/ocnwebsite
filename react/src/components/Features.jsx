import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      image: "/images/coral21.png",
      title: "E-school",
      subtitle: "知の共創",
      description: "学びでつながるプラットフォーム",
      link: "https://life-genius-ai.vercel.app/"
    },
    {
      image: "/images/coral111.png",
      title: "Global Exchange",
      subtitle: "活動の共創",
      description: "世界を広げるコミュニティー",
      link: "/pages/global-exchange.html"
    },
    {
      image: "/images/coral676.png",
      title: "Pro Social Media",
      subtitle: "文化をつなぐ",
      description: "メディアとプロジェクトの融合した新しいSNS",
      link: "/pages/coral-pro.html"
    }
  ];

  return (
    <section className="bg-bg-dark overflow-hidden">
      <div className="py-32 px-8 max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-text-light text-center mb-16 font-bold tracking-wider"
        >
          Features
        </motion.h2>

        <div className="flex flex-col gap-32 mt-16">
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.link}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center p-16 rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-black/40 to-black/80 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* 装飾的な背景要素 */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-pink/5 to-coral-pink/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="order-2 lg:order-none relative z-10 flex flex-col gap-10 max-w-[480px]">
                <h3 className="text-4xl lg:text-5xl text-text-light font-semibold leading-tight tracking-tight drop-shadow-lg">
                  {feature.title}
                </h3>
                <div>
                  <h5 className="text-xl lg:text-2xl text-text-light/90 font-medium mb-4 drop-shadow">
                    {feature.subtitle}
                  </h5>
                  <p className="text-lg text-text-light/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <motion.span 
                  className="inline-flex items-center text-text-light/80 text-sm tracking-wider font-medium group-hover:text-coral-pink transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  view more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </div>

              <div className="order-1 lg:order-none relative z-10 overflow-hidden rounded-2xl aspect-square w-full max-w-[500px] mx-auto group-hover:scale-105 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-coral-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* オーバーレイグロー効果 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* ホバー時のアクセント光効果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-coral-pink/0 via-coral-pink/30 to-coral-pink/0 group-hover:opacity-30 blur opacity-0 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
