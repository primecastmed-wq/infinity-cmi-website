
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-black text-white py-32 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div><div className="text-5xl font-serif font-bold">94%</div><div className="text-[10px] uppercase tracking-widest opacity-50">Успех</div></div>
          <div><div className="text-5xl font-serif font-bold">150+</div><div className="text-[10px] uppercase tracking-widest opacity-50">Проектов</div></div>
          <div><div className="text-5xl font-serif font-bold">24/7</div><div className="text-[10px] uppercase tracking-widest opacity-50">Контроль</div></div>
          <div><div className="text-5xl font-serif font-bold">14B</div><div className="text-[10px] uppercase tracking-widest opacity-50">Активы</div></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
