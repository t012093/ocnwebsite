import { motion } from 'framer-motion';
import { useRef } from 'react';
import DocLayout from './DocLayout';

const Donation = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <DocLayout
      title="寄付について"
      description="Open Coral Networkでは、「テクノロジーと地域が調和する新しい創造」をテーマにあらゆる現代社会の課題を解決するために、皆様からのご支援を募っております。"
    >
      {/* Hero Section */}
      <section className="relative pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
          
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-full hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            今すぐ寄付する
          </button>
        </motion.div>

        {/* 寄付金の使途 */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">寄付金の使途</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-2">
                <span className="text-[#FF7F50] text-2xl mr-2">アーティスト支援</span>
                
              </h3>
              <p className="text-gray-400">スポンサーシップ、コンペディション</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-2">
                <span className="text-[#FF7F50] text-2xl mr-2">AR/DX技術開発と実証実験</span>
                
              </h3>
              <p className="text-gray-400">環境モニタリングシステムの開発、データ解析プラットフォームの構築</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-2">
                <span className="text-[#FF7F50] text-2xl mr-2">地域コミュニティ支援活動</span>
               
              </h3>
              <p className="text-gray-400">環境教育プログラムの実施、地域活性化イベントの開催</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-2">
                <span className="text-[#FF7F50] text-2xl mr-2">運営・管理費</span>
                
              </h3>
              <p className="text-gray-400">事務局運営費、広報・啓発活動、ボランティア管理・育成</p>
            </motion.div>
          </div>
        </div>

        {/* お支払い方法 */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">お支払い方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-4">銀行振込</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>銀行名:</span>
                  <span>〇〇銀行</span>
                </div>
                <div className="flex justify-between">
                  <span>支店名:</span>
                  <span>△△支店（XXX）</span>
                </div>
                <div className="flex justify-between">
                  <span>口座種類:</span>
                  <span>普通</span>
                </div>
                <div className="flex justify-between">
                  <span>口座番号:</span>
                  <span>XXXXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span>口座名義:</span>
                  <span>Open Coral Network</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-light mb-4">クレジットカード</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF7F50]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>安全な決済システムを採用</span>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">対応カードブランド</p>
                  <div className="grid grid-cols-4 gap-4">
                    {['Visa', 'Mastercard', 'JCB', 'AMEX'].map((brand) => (
                      <div key={brand} className="text-center text-gray-400">
                        <span className="block">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={scrollToForm}
                  className="w-full py-3 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
                >
                  オンライン寄付へ
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 寄付の種類 */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">寄付の種類</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '一回寄付', price: '100円〜', desc: '金額は100円から自由に設定可能です。' },
              { title: '定期寄付（毎月）', price: '500円/月〜', desc: '継続的なご支援をお願いいたします。' },
              { title: '法人寄付', price: '応相談', desc: '企業様からのご支援も受け付けております。' }
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800 text-center"
              >
                <h3 className="text-xl font-light mb-2">{type.title}</h3>
                <p className="text-[#FF7F50] text-2xl mb-2">{type.price}</p>
                <p className="text-gray-400 mb-4">{type.desc}</p>
                <button
                  onClick={scrollToForm}
                  className="w-full py-3 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
                >
                  {type.title === '法人寄付' ? 'お問い合わせ' : '寄付をする'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 税制上の優遇措置 */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">税制上の優遇措置</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
          >
            <p className="text-gray-400 mb-4">当団体は認定NPO法人として、以下の税制優遇措置が適用されます：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>個人の寄付：所得税の税額控除または所得控除</li>
              <li>法人の寄付：一般損金算入枠の拡大</li>
              <li>相続財産からの寄付：非課税措置</li>
            </ul>
            <p className="text-gray-400">確定申告に必要な領収書は、ご寄付の後に発行いたします。</p>
          </motion.div>
        </div>

        {/* 寄付金の報告について */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">寄付金の報告について</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '四半期報告', desc: '寄付金の使途は、四半期ごとにウェブサイトで公開いたします' },
              { title: '年次報告書', desc: '年次報告書でも詳細な活動報告と収支報告を行います' },
              { title: '月次ニュースレター', desc: '定期寄付者には、毎月のニュースレターで活動の進捗をお伝えします' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 寄付フォーム */}
        <div ref={formRef} className="mb-16">
          <h2 className="text-2xl font-light text-[#FF7F50] mb-8">寄付フォーム</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg p-6 border border-gray-800"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="donation-type">
                  寄付の種類
                </label>
                <select
                  id="donation-type"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  required
                >
                  <option value="one-time">一回寄付</option>
                  <option value="monthly">定期寄付（毎月）</option>
                  <option value="corporate">法人寄付</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2" htmlFor="amount">
                  金額
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="amount"
                    min="500"
                    step="500"
                    placeholder="1000"
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#FF7F50]"
                    required
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    円
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2" htmlFor="name">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2" htmlFor="message">
                  応援メッセージ（任意）
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#FF7F50]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF7F50]/20 transition-all duration-300"
              >
                寄付を確定する
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Donation;
