import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Document', to: '/document' },
    { label: 'Business', to: '/business' },
    { label: 'Community', to: '/community' },
    { label: 'Developer', to: '/developer' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className="fixed w-full bg-bg-dark/95 backdrop-blur-sm z-50 border-b border-text-light/10">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link to="/" className="text-text-light text-xl font-semibold">
            <span className="drop-shadow-[2px_2px_4px_rgba(255,255,255,0.2)]">
              OCN
            </span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-text-light/80 hover:text-text-light transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 text-accent-blue hover:text-text-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden"
            >
              <div className="py-4 px-4 space-y-4 bg-bg-dark/95 backdrop-blur-sm rounded-lg mt-4 border border-text-light/10">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block text-text-light/80 hover:text-text-light transition-colors duration-300 text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
