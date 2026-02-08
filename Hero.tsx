
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-black text-white pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.95] mb-8 text-balance">
          Выводим бизнес из кризиса <br />
          и возвращаем управляемость и прибыль
        </h1>
        <p className="text-base md:text-2xl text-slate-400 mb-10 max-w-3xl font-light">
          Антикризисная диагностика, реструктуризация и сопровождение собственников.
          <br />
          Работаем с реальными цифрами, а не презентациями.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onCtaClick} className="bg-white text-black px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all">
            Запросить антикризисную диагностику
          </button>
          <a href="https://t.me/Help_agent007_bot" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-500 transition-all">
            Экстренно - написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
