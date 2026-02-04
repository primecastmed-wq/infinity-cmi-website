
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-black text-white pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.95] mb-8 text-balance">
          Проектируем <br />
          <span className="italic text-slate-500">будущее</span> прибыли.
        </h1>
        <p className="text-base md:text-2xl text-slate-400 mb-10 max-w-3xl font-light">
          CMI | Infinity — стратегический партнер для тех, кто строит автономные системы.
        </p>
        <button onClick={onCtaClick} className="bg-white text-black px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all">
          Запросить аудит проекта
        </button>
      </div>
    </section>
  );
};

export default Hero;
