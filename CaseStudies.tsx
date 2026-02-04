
import React from 'react';

const CASE_STUDIES = [
  {
    client: "Металлург Плюс",
    industry: "Производство",
    result: "Предотвращено банкротство, долг в 2 млрд ₽ реструктуризирован за 4 месяца.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2069"
  },
  {
    client: "InnoCloud Systems",
    industry: "IT / SaaS",
    result: "Восстановление репутации после масштабной утечки данных, рост акций на 15%.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
  },
  {
    client: "Retail Matrix",
    industry: "Ритейл",
    result: "Ликвидация кассового разрыва в 500 млн ₽ через пересмотр логистики и закупок.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6">Архив побед</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-black">
              Кейсы, где мы <br /> изменили правила игры.
            </h3>
          </div>
          <button className="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Все кейсы
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {CASE_STUDIES.map((c, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-black">
                <img 
                  src={c.img} 
                  alt={c.client}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{c.industry}</div>
              <h4 className="text-2xl font-bold mb-4">{c.client}</h4>
              <p className="text-slate-500 font-light leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
