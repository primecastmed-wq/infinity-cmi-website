
import React, { useState } from 'react';

interface PyramidLevel {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  philosophy: string;
  color: string;
}

const LEVELS: PyramidLevel[] = [
  {
    id: 5,
    title: "Market Dominance",
    subtitle: "Самоактуализация",
    description: "Когда базовые и средние уровни закрыты, мы переходим к созданию глобального наследия и доминированию.",
    services: ["M&A стратегии", "Мировая экспансия", "Инновационный R&D"],
    philosophy: "Вы не просто работаете на рынке. Вы создаете правила, по которым этот рынок живет.",
    color: "bg-white text-black"
  },
  {
    id: 4,
    title: "Capital & Status",
    subtitle: "Рост и Ресурсы",
    description: "Наращивание капитализации и привлечение внешних ресурсов для взрывного роста бизнеса.",
    services: ["Инвестиции", "Подготовка к IPO", "Репутация"],
    philosophy: "Ваш бизнес становится объектом желания для лучших инвесторов мира.",
    color: "bg-slate-200 text-black"
  },
  {
    id: 3,
    title: "System Architecture",
    subtitle: "Автономность",
    description: "Переход от ручного управления к автономной системе, работающей как идеальный механизм.",
    services: ["HR-структуры", "Автоматизация", "Процессы"],
    philosophy: "Свобода владельца начинается там, где заканчивается хаос в процессах.",
    color: "bg-slate-400 text-black"
  },
  {
    id: 2,
    title: "Asset Security",
    subtitle: "Защита активов",
    description: "Защита активов от внешних угроз, юридических коллизий и геополитических рисков.",
    services: ["Защита собственности", "Risk Radar", "Юр-аудит"],
    philosophy: "Без безопасности любые достижения — лишь временный успех.",
    color: "bg-slate-700 text-white"
  },
  {
    id: 1,
    title: "Survival & Stability",
    subtitle: "Базовый уровень",
    description: "Ликвидация кризисов, настройка кэш-флоу и выживание компании в турбулентной среде.",
    services: ["Антикризис", "Оптимизация долгов", "Операционка"],
    philosophy: "Мы закладываем фундамент, на котором вырастет ваш небоскреб.",
    color: "bg-black text-white"
  }
];

const WhyUs: React.FC<{ onConsultClick: () => void }> = ({ onConsultClick }) => {
  const [activeLevel, setActiveLevel] = useState<PyramidLevel>(LEVELS[4]);

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-6">Philosophy of Growth</h2>
          <h1 className="text-4xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Пирамида <br /> <span className="italic text-slate-500">бизнес-задач</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {LEVELS.map((level, index) => {
                const width = 100 - index * 15;
                const isActive = activeLevel.id === level.id;
                return (
                  <button 
                    key={level.id}
                    onClick={() => setActiveLevel(level)}
                    className={`relative h-14 md:h-20 mb-1 mx-auto transition-all duration-300 flex items-center justify-center border border-white/10 ${isActive ? level.color + ' scale-[1.03]' : 'bg-transparent text-slate-600'}`}
                    style={{ width: `${width}%` }}
                  >
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center px-4">
                      {level.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl md:rounded-3xl backdrop-blur-md min-h-[450px] flex flex-col justify-between animate-in fade-in duration-500">
              <div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-6">{activeLevel.title}</h3>
                <p className="text-slate-400 text-sm md:text-lg mb-8 leading-relaxed font-light">
                  {activeLevel.description}
                </p>
              </div>
              <button 
                onClick={onConsultClick}
                className="w-full bg-white text-black py-5 md:py-6 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                Обсудить решение
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
