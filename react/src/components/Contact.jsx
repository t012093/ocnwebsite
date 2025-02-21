import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="bg-bg-dark py-section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-text-light text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label 
                htmlFor="name" 
                className="block text-text-light/80 mb-2 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white/40 focus:ring-1 focus:ring-white/40 outline-none transition-colors text-text-light placeholder-text-light/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-text-light/80 mb-2 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white/40 focus:ring-1 focus:ring-white/40 outline-none transition-colors text-text-light placeholder-text-light/30"
                placeholder="Your email"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-text-light/80 mb-2 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white/40 focus:ring-1 focus:ring-white/40 outline-none transition-colors text-text-light placeholder-text-light/30 resize-none"
                placeholder="Your message"
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-3 bg-white/10 text-text-light rounded-lg hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
