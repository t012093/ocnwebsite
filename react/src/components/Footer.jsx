import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-bg-cream py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <motion.div
            className="footer-info space-y-4"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h3 className="text-xl text-coral-pink font-semibold">
              NPO法人 Open Coral Network
            </h3>
            <Link
              to="/document#npo-about"
              className="group inline-flex items-center space-x-2 text-text-dark hover:text-coral-pink transition-colors"
            >
              <span>団体概要</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-text-dark hover:text-coral-pink transition-colors"
                >
                  privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-text-dark hover:text-coral-pink transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-200"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <p className="text-center text-text-dark/60">
            &copy; {new Date().getFullYear()} NPO法人 Open Coral Network
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
