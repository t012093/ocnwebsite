import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'DX',
      description: '老朽化した仕組みを新しく作り変え、生産性を向上させる',
      image: '/images/coral57.png',
      link: '/dx'
    },
    {
      title: 'AR',
      description: 'ARを用いた都市構想計画で地域の観光事業を活性化',
      image: '/images/coral100.png',
      link: '/ar'
    },
    {
      title: 'ART',
      description: 'AI時代における新しいアートのあり方の探究と、アートコミュニティーの形成',
      image: '/images/coral10.png',
      link: null
    }
  ];

  const cardVariants = {
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
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Service
        </motion.h2>

        <div className="grid-auto-fit">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card-base overflow-hidden group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-coral-pink font-semibold mb-2">{service.title}</h3>
              <p className="text-text-dark/80">{service.description}</p>
              {service.link && (
                <motion.a
                  href={service.link}
                  className="inline-block mt-4 text-coral-light hover:text-coral-pink transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View More →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
