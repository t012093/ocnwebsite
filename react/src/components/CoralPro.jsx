import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/coral-pro.module.css";

const features = [
  {
    image: "/images/coral33.png",
    title: "相互SNS",
        description: "ActivityPubプロトコルによる他のプラットフォームとの連携が可能です。"
  },
  {
    image: "/images/coral55.png",
    title: "実生活のためのSNS",
    description: "実生活での活動やプロジェクトに特化したSNS"
  },
  {
    image: "/images/coral21.png",
    title: "プロジェクトベース",
    description: "プロジェクトでつながる新しい形のSNS"
  }
];

const CoralPro = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className={styles.gradientOrb2} style={{ transform: `translateY(${scrollY * -0.05}px)` }}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={styles.pill}>分散型ソーシャルプラットフォーム</span>
            <h1 className={styles.title}>Coral <span className={styles.highlight}>Pro</span></h1>
          </motion.div>
          
          <motion.p
            className={styles.subtitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            分散型プロトコルを採用した次世代のソーシャルプラットフォーム。
            <span className={styles.emphasis}>ActivityPub</span>による相互運用性とデータ主権を確保し、
            コミュニティ主導の持続可能なネットワークを実現。
          </motion.p>
          
            <motion.div
            className={styles.ctaGroup}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://coralapp.vercel.app/"
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              デモを見る
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </motion.a>
            <a href="/contact" className={styles.textLink}>お問い合わせ</a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.heroImageContainer}>
            <img 
              src="/images/coral47.png" 
              alt="Coral Proのビジュアル" 
              className={styles.heroImage} 
            />
          </div>
        </motion.div>
      </section>

      <section className={styles.features} id="features">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionTag}>FEATURES</span>
              <h2 className={styles.sectionTitle}>
                分散型システムによる<br />
                <span className={styles.highlight}>自律的なコミュニティの構築</span>
              </h2>
            </motion.div>
          </div>

          <motion.div 
            className={styles.featuresGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                variants={itemVariants}
              >
                <div className={styles.featureImageWrapper}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={styles.featureImage}
                  />
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.benefitsContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>BENEFITS</span>
            <h2 className={styles.sectionTitle}>
              なぜ<span className={styles.highlight}>Coral Pro</span>なのか
            </h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🔒</div>
                <div className={styles.benefitText}>
                  <h4>創造性を保つ</h4>
                  <p>広告やアルゴリズムフィルターのない純粋な環境で、ユーザーの創造性と自由な情報共有を促進します</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🌐</div>
                <div className={styles.benefitText}>
                  <h4>情報の補完</h4>
                  <p>NEWSやトピックにユーザー間で意見を出して正しい情報を補完し合います。</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>👥</div>
                <div className={styles.benefitText}>
                  <h4>コミュニティ主導</h4>
                  <p>ユーザーとコミュニティが主役の持続可能なエコシステムを構築します。</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>未来を<span className={styles.highlight}>創造</span>する</h2>
          <p className={styles.ctaSubtitle}>
            Coral Proで、あなたのビジョンを実現しませんか？
          </p>
          <motion.div className={styles.ctaActions}>
            <motion.a
              href="/contact"
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              お問い合わせ
            </motion.a>
            <motion.a
              href="/documentation"
              className={`${styles.ctaButton} ${styles.secondary}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ドキュメントを見る
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default CoralPro;
