import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ここで実際のAPIエンドポイントに送信する処理を実装
    // 例: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // 3秒後にメッセージを非表示
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-cream">
      <div className="container-custom max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact
        </motion.h2>

        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div variants={inputVariants} whileFocus="focus">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="お名前"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 transition-all"
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="メールアドレス"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 transition-all"
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="メッセージ"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 transition-all resize-none"
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="px-8 py-3 bg-coral-pink text-white rounded-lg hover:bg-coral-pink/90 transition-colors"
            >
              Message
            </button>
          </motion.div>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 right-8 bg-coral-pink text-white px-6 py-3 rounded-lg shadow-lg"
            >
              メッセージを送信しました
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
