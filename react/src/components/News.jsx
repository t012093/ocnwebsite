import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      date: "2024.01",
      title: "コミュニティ形成",
      description: "国内最大級のTech系コミュニティを形成",
      link: "#"
    },
    {
      date: "2024.02",
      title: "E-schoolを開校",
      description: "人材育成に向けて本格始動開始",
      link: "#"
    },
    {
      date: "2024.03",
      title: "国際展開",
      description: "グローバルコミュニティ形成",
      link: "#"
    }
  ];

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
          News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <span className="text-text-light/80 text-sm tracking-wider">
                  {item.date}
                </span>
                <h3 className="text-2xl text-text-light font-medium">
                  {item.title}
                </h3>
                <p className="text-text-light/70">
                  {item.description}
                </p>
                <span className="inline-flex text-text-light/80 text-sm tracking-wider font-medium mt-4 transition-transform duration-300 group-hover:translate-x-2">
                  read more →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
