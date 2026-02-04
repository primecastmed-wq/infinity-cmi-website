
import React, { useState } from 'react';

interface StageDetail {
  checklists: string[];
  redFlags: string[];
  artifacts: string[];
  timeframe: string;
}

interface Stage {
  id: string;
  phase: string;
  title: string;
  challenge: string;
  solution: string;
  tools: string[];
  metrics: string;
  alignment: 'left' | 'right';
  deepDive: StageDetail;
}

const STAGES: Stage[] = [
  {
    id: '01',
    phase: 'ЗАПУСК',
    title: 'От идеи до первых денег',
    challenge: 'Непонятно, купят ли продукт, и как найти первых клиентов.',
    solution: 'Мы проверяем идею, упаковываем продукт и находим первых покупателей и инвесторов.',
    tools: ['Проверка бизнес-модели', 'Быстрый запуск продукта', 'Поиск первых денег'],
    metrics: 'Выход на рынок: в 2 раза быстрее',
    alignment: 'right',
    deepDive: {
      checklists: ['Расчет прибыли на 1 товар', 'Опросы реальных клиентов', 'Проверка сайта и рекламы'],
      redFlags: ['Расходы на рекламу выше прибыли', 'Клиенты не возвращаются', 'Нет фокуса на чем-то одном'],
      artifacts: ['Презентация для инвестора', 'План продаж на год', 'Договоры и защита бренда'],
      timeframe: '3-6 месяцев'
    }
  },
  {
    id: '02',
    phase: 'ПОРЯДОК',
    title: 'Настройка процессов',
    challenge: 'Хаос в задачах, владелец работает 24/7, прибыль нестабильна.',
    solution: 'Наводим порядок в управлении. Делаем так, чтобы бизнес работал по правилам, а не на «пожарах».',
    tools: ['Прописание инструкций', 'Внедрение CRM систем', 'Планирование денег'],
    metrics: 'Чистая прибыль: +15-20%',
    alignment: 'left',
    deepDive: {
      checklists: ['Пошаговые инструкции для всех', 'Понятные отчеты по деньгам', 'Оптимизация штата'],
      redFlags: ['Директор сам решает все мелкие проблемы', 'Решения принимаются "на ощупь"', 'Отделы ругаются между собой'],
      artifacts: ['Рабочие регламенты компании', 'Система бонусов для сотрудников', 'Автоматические продажи'],
      timeframe: '6-12 месяцев'
    }
  }
];

const Roadmap: React.FC<{ onConsultClick: () => void }> = ({ onConsultClick }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black text-white pt-40 pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic text-balance">Рост <br /><span className="not-italic text-slate-500 text-4xl md:text-6xl">как четкая технология</span></h1>
        </div>

        <div className="space-y-32">
          {STAGES.map((stage) => (
            <div key={stage.id} className={`flex flex-col lg:flex-row items-start gap-12 ${stage.alignment === 'left' ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl w-full">
                <h3 className="text-3xl font-serif font-bold mb-4">{stage.title}</h3>
                <p className="text-slate-400 text-sm italic mb-6">"{stage.challenge}"</p>
                <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xl font-mono text-emerald-500">{stage.metrics}</div>
                  <button onClick={onConsultClick} className="px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest">Обсудить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
