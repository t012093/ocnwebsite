import { motion } from 'framer-motion';

const News = () => {
  const news = [
    {
      image: '/images/coral18.png',
      title: '革新的な技術開発',
      description: '最新のテクノロジーを活用した取り組み'
    },
    {
      image: '/images/coral15.png',
      title: '環境保護活動',
      description: '持続可能な未来へ向けた取り組み'
    },
    {
      image: '/images/coral2.png',
      title: '新規プロジェクト始動',
      description: '次世代技術の研究開発'
    },
    {
      image: '/images/coral99.png',
      title: 'パートナーシップ強化',
      description: 'グローバルネットワークの拡大'
    },
    {
      image: '/images/coral578.png',
      title: '研究成果発表',
      description: '最新の研究結果と今後の展望'
    },
    {
      image: '/images/coral55.png',
      title: '社会貢献活動',
      description: '地域社会との連携強化'
    },
    {
      image: '/images/coral25.png',
      title: '未来への投資',
      description: '次世代育成プログラムの展開'
    }
  ];

  return (
    <section id="news" className="section-padding bg-bg-cream">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          News
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
          >
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-coral-pink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-dark/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
