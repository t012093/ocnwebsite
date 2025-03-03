import { motion } from 'framer-motion';

const Footer = () => {
  const links = [
    { name: "Community", href: "#" },
    { name: "Document", href: "#" },
    { name: "Donation", href: "#" },
    { name: "Partnership", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" }
  ];

  const socials = [
    { name: "Twitter", href: "#", icon: "X" },
    { name: "Discord", href: "#", icon: "Discord" },
    { name: "GitHub", href: "#", icon: "GitHub" }
  ];

  return (
    <footer className="bg-bg-dark border-t border-[#FF7F50]/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ロゴセクション */}
          <div className="space-y-4">
            <h3 className="text-xl text-[#FF7F50] font-medium">
              Open Coral Network
            </h3>
            <p className="text-text-light/70 text-sm leading-relaxed">
              地域と創造の交差点
            </p>
          </div>

          {/* リンクセクション */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#FF7F50] font-medium">Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-text-light/70 hover:text-[#FF7F50] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ソーシャルメディアセクション */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#FF7F50] font-medium">Follow Us</h4>
            <ul className="space-y-2">
              {socials.map((social, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={social.href}
                    className="text-text-light/70 hover:text-[#FF7F50] text-sm transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* お問い合わせセクション */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#FF7F50] font-medium">Contact</h4>
            <p className="text-text-light/70 text-sm leading-relaxed">
              お問い合わせはこちらから
            </p>
            <motion.a
              href="#contact"
              className="inline-block text-[#FF7F50] text-sm hover:text-[#FF6347] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Contact us →
            </motion.a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 border-t border-[#FF7F50]/10">
          <p className="text-text-light/50 text-center text-sm">
            © {new Date().getFullYear()} Open Coral Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
