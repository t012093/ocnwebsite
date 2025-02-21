import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'DX Solution',
      subtitle: '変革と革新',
      description: '老朽化したシステムを最新技術で刷新し、業務効率を大幅に向上。データ駆動型の意思決定と自動化で、企業の競争力を強化します。',
      image: '/images/coral57.png',
      link: '/dx'
    },
    {
      title: 'AR Experience',
      subtitle: '没入型観光',
      description: '最新のAR技術を活用し、街の新しい魅力を発見。歴史や文化を体験的に学べる観光コンテンツで、地域の活性化を実現します。',
      image: '/images/coral100.png',
      link: '/ar'
    },
    {
      title: 'Digital Art',
      subtitle: '創造性の進化',
      description: 'AIとアートの融合による新しい表現方法の探求。テクノロジーを活用したアート作品の制作支援と、創造的なコミュニティの形成を促進します。',
      image: '/images/coral10.png',
      link: '/digital-art'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-dark mb-4"
          >
            Service
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-dark/70"
          >
            テクノロジーで実現する3つのソリューション
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`${service.link ? 'group cursor-pointer' : ''}`}
              onClick={() => service.link && (window.location.href = service.link)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-[280px] overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-medium tracking-wide mb-2">
                      {service.subtitle}
                    </h4>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-white">
                  <p className="text-lg text-text-dark/80 mb-6">
                    {service.description}
                  </p>
                  {service.link && (
                    <motion.div
                      className="inline-flex items-center space-x-2 text-coral-pink group-hover:text-coral-light transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">詳しく見る</span>
                      <svg 
                        className="w-5 h-5"
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
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
