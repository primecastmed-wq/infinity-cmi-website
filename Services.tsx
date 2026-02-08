
import React from 'react';

export const TELEGRAM_BOT_URL = "https://t.me/Help_agent007_bot";

export const buildTelegramStartLink = (serviceId: string) => {
  const payload = `service_${serviceId}`.replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 64);
  return `${TELEGRAM_BOT_URL}?start=${payload}`;
};

export const SERVICES_DATA = [
  {
    id: "crisis-diagnostics",
    title: "Диагностика кризиса",
    description:
      "Комплексная антикризисная диагностика за 7-14 дней. Находим реальные причины кризиса, точки кассовых разрывов и формируем четкий план действий по выходу из ситуации.",
    tag: "Обязательный первый этап"
  },
  {
    id: "finance-survival",
    title: "Финансы и выживание",
    description:
      "Подключается после диагностики, если выявлены кассовые разрывы и риск банкротства. Строим антикризисную финансовую модель, оптимизируем расходы и выстраиваем план выхода из кассового разрыва.",
    tag: "Модуль"
  },
  {
    id: "management-structure",
    title: "Управление и структура",
    description:
      "Подключается, если решения в компании принимаются медленно или хаотично. Пересобираем управленческую модель, роли и ответственность так, чтобы решения принимались быстро и по делу.",
    tag: "Модуль"
  },
  {
    id: "team",
    title: "Команда",
    description:
      "Подключается после диагностики, если команда перегружена и не держит темп изменений. Проводим аудит команды, оптимизируем ФОТ и собираем рабочий состав под задачи выживания и роста.",
    tag: "Модуль"
  },
  {
    id: "sales-product",
    title: "Продажи и продукт",
    description:
      "Подключается, если текущая модель продаж перестала приносить деньги. Отрезаем убыточное и пересобираем воронку под кризисный спрос.",
    tag: "Модуль"
  },
  {
    id: "marketing",
    title: "Маркетинг",
    description:
      "Подключается после диагностики, если бюджет сливается без понятной окупаемости. Оставляем каналы с быстрым возвратом и настраиваем антикризисную стратегию.",
    tag: "Модуль"
  },
  {
    id: "crisis-support",
    title: "Оперативное сопровождение",
    description:
      "Подключается, если нужна ежедневная управленческая поддержка собственника. Еженедельно корректируем курс по фактическим данным и ключевым рискам.",
    tag: "Модуль"
  },
  {
    id: "recovery-growth",
    title: "Выход из кризиса и рост",
    description:
      "Подключается после стабилизации, когда нужно закрепить результат и перейти к росту. Фиксируем систему и готовим бизнес к масштабированию или продаже.",
    tag: "Модуль"
  },
];

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 border border-slate-200 bg-slate-50 p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">С чего начинается работа</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
            Мы не продаем отдельные услуги.
            <br />
            Мы сначала разбираем бизнес целиком, находим реальные причины кризиса
            <br />
            и только после этого подключаем нужные модули.
          </p>
        </div>

        <h3 className="text-4xl font-serif font-bold mb-12">Этапы антикризисной работы</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((s, idx) => (
            <div
              key={s.id}
              className={`p-10 border transition-all text-left ${
                idx === 0
                  ? 'bg-black text-white border-emerald-500 shadow-xl'
                  : 'bg-slate-50 hover:bg-black hover:text-white'
              }`}
            >
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 text-[9px] font-bold uppercase tracking-widest ${
                    idx === 0 ? 'bg-emerald-500 text-black' : 'bg-black text-white'
                  }`}
                >
                  {s.tag}
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
              <p className="opacity-70 mb-8">{s.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onServiceClick(s.id)}
                  className={`px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    idx === 0
                      ? 'bg-white text-black hover:bg-emerald-500'
                      : 'bg-black text-white hover:bg-emerald-500 hover:text-black'
                  }`}
                >
                  {idx === 0 ? 'Начать с диагностики' : 'Как это работает'}
                </button>
                {idx === 0 && (
                  <a
                    href={buildTelegramStartLink(s.id)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-400 transition-all text-center"
                  >
                    Написать в Telegram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
