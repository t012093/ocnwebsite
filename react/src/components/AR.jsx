import { motion } from "framer-motion";
import styles from "../styles/ar.module.css";

const AR = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* 背景を動画から画像に変更 */}
      <div className={styles.arDemoVideo}>
        <img src="/images/coral100.png" alt="AR City Experience" />
      </div>
      
      <div className={styles.arOverlay}>
        <h1 className={styles.arTitle}>Coral City</h1>
        <p className={styles.arDescription}>誰もが都市をデザインできる時代。</p>
        <a href="https://ar-city-world.vercel.app/" className={styles.arCtaButton}>体験する</a>
      </div>

      <section className={styles.arFeatures}>
        <div className={styles.arGrid}>
          <motion.div 
            className={styles.arFeatureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/coral15.png" alt="歴史体験" />
            <h3>歴史体験の革新</h3>
            <p>過去の建造物や風景をARで再現し、その場所の歴史を体感できます。</p>
          </motion.div>
          <motion.div 
            className={styles.arFeatureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/coral18.png" alt="観光案内" />
            <h3>インタラクティブ観光案内</h3>
            <p>ARマーカーを介して、多言語対応の観光情報やルート案内を提供。</p>
          </motion.div>
          <motion.div 
            className={styles.arFeatureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="/images/coral25.png" alt="文化体験" />
            <h3>文化体験の拡張</h3>
            <p>伝統工芸や祭事などの文化的要素をAR技術で可視化。</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.arSteps}>
        <div className={styles.stepsContainer}>
          <motion.div 
            className={styles.arStep}
            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, translateY: -10 }}
          >
            <motion.div
              className={styles.stepNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
            >
              01
            </motion.div>
            <h3>アプリをダウンロード</h3>
            <p>App StoreまたはGoogle Playからアプリをインストール</p>
          </motion.div>
          <motion.div 
            className={styles.arStep}
            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, translateY: -10 }}
          >
            <motion.div
              className={styles.stepNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
            >
              02
            </motion.div>
            <h3>街を探索</h3>
            <p>街を歩きながら、ARマーカーを探してスキャン</p>
          </motion.div>
          <motion.div 
            className={styles.arStep}
            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, translateY: -10 }}
          >
            <motion.div
              className={styles.stepNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", bounce: 0.6 }}
            >
              03
            </motion.div>
            <h3>歴史を体験</h3>
            <p>過去の風景や文化を3Dで体験</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.arDemo}>
        <div className={styles.demoContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            WORLDを探究
          </motion.h2>
          <motion.p
            className={styles.demoDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            独自のメタバースプラットフォームで、過去と未来をつなぐ新しい都市体験を提供します。
            あなたのアイデアが都市を変える - その瞬間をお見逃しなく。
          </motion.p>
          <motion.div
            className={styles.demoAction}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="https://ar-city-world.vercel.app/" className={styles.demoCta}>
              今すぐ体験する
              <span className={styles.demoCtaArrow}>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AR;
