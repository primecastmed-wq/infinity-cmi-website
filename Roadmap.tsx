
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
    phase: 'СТАРТ',
    title: 'Финансовая диагностика',
    challenge: 'Непонятно, где теряются деньги и какая реальная прибыль.',
    solution: 'Собираем P&L, ДДС, unit-экономику и фиксируем точки утечки.',
    tools: ['P&L и ДДС', 'Unit-экономика', 'Точка безубыточности'],
    metrics: 'Картина прибыли: за 7–10 дней',
    alignment: 'right',
    deepDive: {
      checklists: ['Сегментация выручки', 'Постоянные/переменные издержки', 'Маржинальность по продуктам'],
      redFlags: ['Кассовые разрывы', 'Рекламные расходы выше валовой прибыли', 'Отсутствие платежного календаря'],
      artifacts: ['Финмодель на 3–6 мес.', 'Таблица unit-метрик', 'Приоритеты сокращений'],
      timeframe: '7–10 дней'
    }
  },
  {
    id: '02',
    phase: 'РЫНОК',
    title: 'Продукт и спрос',
    challenge: 'Продажи есть, но нет стабильного спроса и понятного позиционирования.',
    solution: 'Проверяем ценность, упаковку и соответствие потребностям рынка.',
    tools: ['Анализ спроса', 'Проверка оффера', 'Сегментация клиентов'],
    metrics: 'Ядро продукта: подтверждено',
    alignment: 'left',
    deepDive: {
      checklists: ['Повторные покупки', 'Отзывы и причины отказов', 'Конкурентные альтернативы'],
      redFlags: ['Низкая конверсия в оплату', 'Снижение LTV', 'Сильная зависимость от скидок'],
      artifacts: ['Матрица сегментов', 'Упаковка оффера', 'Сценарии повышения LTV'],
      timeframe: '1–2 недели'
    }
  },
  {
    id: '03',
    phase: 'ВЫРУЧКА',
    title: 'Продажи и воронка',
    challenge: 'Нет предсказуемости: продажи то растут, то падают.',
    solution: 'Разбираем воронку, усиливаем конверсию и скорость сделок.',
    tools: ['Аудит воронки', 'Скрипты и KPI', 'Контроль этапов'],
    metrics: 'Конверсия: +10–30%',
    alignment: 'right',
    deepDive: {
      checklists: ['Лиды → встречи → сделки', 'Скорость ответа', 'Цикл сделки'],
      redFlags: ['Большие просадки между этапами', 'Отсутствие контроля стадий', 'Слабое закрытие'],
      artifacts: ['Карта воронки', 'Скрипты продаж', 'KPI по этапам'],
      timeframe: '2–4 недели'
    }
  },
  {
    id: '04',
    phase: 'МАРКЕТИНГ',
    title: 'Маркетинг и окупаемость',
    challenge: 'Бюджет тратится, а ROMI непонятен.',
    solution: 'Отключаем неэффективное и усиливаем прибыльные каналы.',
    tools: ['ROMI-аналитика', 'Атрибуция', 'Оптимизация каналов'],
    metrics: 'ROMI: рост за 30 дней',
    alignment: 'left',
    deepDive: {
      checklists: ['CAC по каналам', 'Креативы и офферы', 'Вклад канала в выручку'],
      redFlags: ['CAC выше маржи', 'Зависимость от 1 канала', 'Нет сквозной аналитики'],
      artifacts: ['ROMI-отчет', 'Рекомендованный медиаплан', 'Список отключений'],
      timeframe: '2–3 недели'
    }
  },
  {
    id: '05',
    phase: 'СИСТЕМЫ',
    title: 'Процессы и команда',
    challenge: 'Хаос, ручное управление, перегруз собственника.',
    solution: 'Настраиваем роли, процессы и ответственность за результат.',
    tools: ['Регламенты', 'CRM/BI', 'KPI и мотивация'],
    metrics: 'Управляемость: +40%',
    alignment: 'right',
    deepDive: {
      checklists: ['Роли и зоны ответственности', 'Отчеты по ключевым метрикам', 'Скорость принятия решений'],
      redFlags: ['Зависимость от 1–2 людей', 'Нет стандартов качества', 'Разрозненные данные'],
      artifacts: ['Структура команды', 'Регламенты', 'Дашборд KPI'],
      timeframe: '3–6 недель'
    }
  },
  {
    id: '06',
    phase: 'ПЛАН',
    title: 'Стратегия и риски',
    challenge: 'Есть идеи, но нет четкого плана и понимания рисков.',
    solution: 'Собираем дорожную карту роста и систему контроля рисков.',
    tools: ['Стратегическая сессия', 'Сценарное планирование', 'Риск-матрица'],
    metrics: 'План роста: 90 дней',
    alignment: 'left',
    deepDive: {
      checklists: ['Приоритеты роста', 'Инвестиции в точки эффекта', 'Контроль рисков'],
      redFlags: ['Рост без ресурсов', 'Слабый контроль показателей', 'Отсутствие резервов'],
      artifacts: ['Roadmap 90 дней', 'КPI-матрица', 'План рисков'],
      timeframe: '2–4 недели'
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
                <p className="text-slate-200 text-sm leading-relaxed">{stage.solution}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stage.tools.map((tool, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setExpandedId(expandedId === stage.id ? null : stage.id)}
                    className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-all"
                  >
                    {expandedId === stage.id ? 'Скрыть' : 'Подробнее'}
                  </button>
                </div>

                {expandedId === stage.id && (
                  <div className="mt-6 border-t border-white/10 pt-6 space-y-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Что проверяем</div>
                      <div className="text-sm text-slate-300 space-y-2">
                        {stage.deepDive.checklists.map((item, i) => (
                          <div key={i}>• {item}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Красные флаги</div>
                      <div className="text-sm text-slate-300 space-y-2">
                        {stage.deepDive.redFlags.map((item, i) => (
                          <div key={i}>• {item}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Что получаете</div>
                      <div className="text-sm text-slate-300 space-y-2">
                        {stage.deepDive.artifacts.map((item, i) => (
                          <div key={i}>• {item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">Срок: {stage.deepDive.timeframe}</div>
                  </div>
                )}
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
