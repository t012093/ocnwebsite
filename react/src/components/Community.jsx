import { motion } from "framer-motion";

const Community = () => {
  const communities = [
    {
      title: "Developer",
      description: "技術者のためのコミュニティ",
      image: "/images/coral676.png",
      link: "/developer"
    },
    {
      title: "Business",
      description: "ビジネスパーソンのためのコミュニティ",
      image: "/images/coral333.png",
      link: "/business"
    },
    {
      title: "Creator",
      description: "クリエイターのためのコミュニティ",
      image: "/images/coral555.png",
      link: "/creator"
    }
  ];

  return (
    <section className="bg-bg-dark py-section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-text-light text-center font-light tracking-wider mb-16"
        >
          Community
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.a
              key={index}
              href={community.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              {/* 背景画像 */}
              <div className="absolute inset-0">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
              </div>

              {/* コンテンツ */}
              <div className="relative h-full p-8 flex flex-col justify-end">
                <h3 className="text-2xl text-text-light font-light mb-2">
                  {community.title}
                </h3>
                <p className="text-text-light/80">
                  {community.description}
                </p>
                <div className="mt-4 flex items-center text-text-light">
                  <span className="text-sm tracking-wider group-hover:mr-2 transition-all duration-300">
                    View more
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </div>

                {/* ホバー時のグロー効果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-coral-pink/0 via-coral-pink/30 to-coral-pink/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
