
import React from 'react';

export const SERVICES_DATA = [
  { id: "systems", title: "Бизнес без участия", description: "Настроим процессы за 90 дней.", tag: "Свобода" },
  { id: "startups", title: "Запуск проектов", description: "От идеи до первых продаж.", tag: "Новый доход" },
  { id: "investments", title: "Деньги для развития", description: "Найдем инвесторов.", tag: "Капитал" }
];

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-serif font-bold mb-12">Наши решения</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((s) => (
            <button key={s.id} onClick={() => onServiceClick(s.id)} className="p-10 bg-slate-50 hover:bg-black hover:text-white border transition-all text-left">
              <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
              <p className="opacity-70">{s.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
