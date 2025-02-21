import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-bg-dark py-section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl text-coral-pink text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          vision
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/coral9.png" 
              alt="Coral Network Vision" 
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-2xl lg:text-3xl text-coral-pink leading-relaxed">
              地域と創造の交差点。―珊瑚ネットワーク
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
