import { motion } from 'framer-motion';

const DocLayout = ({ children, title, description }) => {
  return (
    <div className="pt-24 pb-8 px-8 max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-12 text-center">
        <motion.h1 
          className="text-4xl font-light tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      <motion.div 
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DocLayout;
