import React from 'react';

const CASE_STUDIES = [
  {
    client: "Металлург Плюс",
    industry: "Производство",
    result: "Предотвращено банкротство, долг в 2 млрд ₽ реструктуризирован за 4 месяца."
  },
  {
    client: "InnoCloud Systems",
    industry: "IT / SaaS",
    result: "Восстановление репутации после масштабной утечки данных, рост акций на 15%."
  },
  {
    client: "Retail Matrix",
    industry: "Ритейл",
    result: "Ликвидация кассового разрыва в 500 млн ₽ через пересмотр логистики и закупок."
  },
  {
    client: "Quantum Logistics",
    industry: "Логистика",
    result: "Оптимизация цепочек поставок сократила издержки на 30%."
  },
  {
    client: "EcoTech Agro",
    industry: "Агро",
    result: "Внедрение автономных систем повысило урожайность на 25%."
  },
  {
    client: "FinGuard Banking",
    industry: "Финансы",
    result: "Цифровая трансформация привела к увеличению клиентской базы на 40%."
  },
  {
    client: "HealthWave Clinics",
    industry: "Медицина",
    result: "Автоматизация процессов сократила время ожидания пациентов на 50%."
  },
  {
    client: "EduPro Learning",
    industry: "Образование",
    result: "Создание онлайн-платформы увеличило количество учеников вдвое."
  },
  {
    client: "AeroDynamics",
    industry: "Аэрокосмическая",
    result: "Улучшение процессов позволило снизить издержки на обслуживание на 15%."
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
            <p className="mt-6 text-slate-600 text-lg font-light leading-relaxed">
              Мы работаем с бизнесами разного масштаба -
              <br />
              от ситуаций «сегодня не хватает на зарплаты»
              <br />
              до реструктуризации миллиардных обязательств.
            </p>
          </div>
          <button className="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Все кейсы
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {CASE_STUDIES.map((c, idx) => (
            <div key={idx} className="group cursor-pointer">
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
