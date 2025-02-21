import { motion } from 'framer-motion';

const Community = () => {
  const communities = [
    {
      title: '企業・NPO向け',
      subtitle: 'パートナーシップで未来を創造',
      description: '一緒に社会課題の解決を目指しましょう',
      image: '/images/coral4.png',
      link: '/business'
    },
    {
      title: '地域コミュニティ向け',
      subtitle: 'コミュニティ活動で地域に根ざす',
      description: 'グローバルな視点と地域の力を融合し、持続可能な社会を築きましょう',
      image: '/images/coral49.png',
      link: '/community'
    },
    {
      title: '開発者・個人向け',
      subtitle: '技術で世界を変える',
      description: 'あなたのアイデアを形にしましょう',
      image: '/images/coral444.png',
      link: '/developer'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="community" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-dark/80 max-w-2xl mx-auto mb-12"
        >
          企業、NPO、個人開発者など、様々な立場の方々が参加できるコミュニティです。
          創造的なつながり、新しいローカルコミュニティに参加しませんか？
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-auto-fit"
        >
          {communities.map((community) => (
            <motion.a
              key={community.title}
              href={community.link}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h4 className="text-lg text-coral-light">{community.subtitle}</h4>
                    <p className="text-white/90 text-sm">{community.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
