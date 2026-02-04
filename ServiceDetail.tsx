
import React from 'react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onConsultClick: () => void;
}

const DETAILS: Record<string, {
  title: string;
  tag: string;
  heroText: string;
  description: string;
  pros: string[];
  whyNow: string;
  stats: {label: string, value: string}[];
}> = {
  systems: {
    title: "Системный инжиниринг",
    tag: "Business Processes",
    heroText: "Ваш бизнес должен работать как швейцарские часы — даже когда вы в отпуске.",
    description: "Хаос — главный враг масштабирования. Мы проводим глубокий аудит текущих процессов, выявляем «узкие горлышки» и проектируем архитектуру, где каждый сотрудник знает свою роль, а результат предсказуем на 100%. Мы внедряем CRM, ERP и создаем базу знаний компании.",
    pros: [
      "Полное исключение зависимости от 'звездных' сотрудников",
      "Сокращение операционных издержек на 30-45%",
      "Освобождение до 80% времени собственника для стратегии",
      "Прозрачная аналитика в режиме реального времени"
    ],
    whyNow: "Рынок ускоряется. Компании с ручным управлением первыми сгорают при кассовых разрывах или смене конъюнктуры. Систематизация сегодня — это ваша страховка от банкротства завтра.",
    stats: [{label: "Эффективность", value: "+40%"}, {label: "Свободное время CEO", value: "+25ч/нед"}]
  },
  startups: {
    title: "Startup Launchpad 360°",
    tag: "New Ventures",
    heroText: "От гаражной идеи до твердого бизнеса с первыми миллионами прибыли.",
    description: "90% стартапов умирают в первый год из-за ошибок в упаковке и продукте. Мы проходим этот путь вместе с вами: от кастдева и MVP до настройки воронки продаж. Мы знаем, как сделать продукт, за который рынок готов платить здесь и сейчас.",
    pros: [
      "Профессиональная валидация бизнес-модели",
      "Быстрый выход на рынок (Go-to-Market strategy)",
      "Формирование сильной команды фаундеров",
      "Минимизация рисков 'слива' бюджета на старте"
    ],
    whyNow: "Окно возможностей для новых ниш закрывается быстро. Если у вас есть идея — сейчас лучший момент, чтобы занять долю рынка, пока конкуренты медлят с запуском.",
    stats: [{label: "Успешные запуски", value: "85%"}, {label: "Время до MVP", value: "45 дн."}]
  },
  investments: {
    title: "Инвестиционный лифт",
    tag: "Capital Raising",
    heroText: "Мы упакуем ваш проект так, что инвесторы сами выстроятся в очередь.",
    description: "Инвесторы смотрят на сотни проектов. Мы знаем их язык. Мы готовим профессиональный Pitch Deck, финансовую модель и проводим оценку стоимости компании. Мы сопровождаем сделку от первого контакта до подписания документов.",
    pros: [
      "Доступ к закрытому клубу частных инвесторов",
      "Профессиональная оценка стоимости бизнеса",
      "Защита долей фаундеров при раундах",
      "Увеличение вероятности инвестиций в 5 раз"
    ],
    whyNow: "Стоимость денег растет. Чем дольше вы ждете, тем жестче будут условия финансирования. Получите капитал сейчас на пике интереса к вашему сектору.",
    stats: [{label: "Привлечено", value: "$42M+"}, {label: "ROI упаковки", value: "10x"}]
  },
  growth: {
    title: "Рестарт и Рост",
    tag: "Strategic Turnaround",
    heroText: "Стагнация — это медленная смерть. Мы вернем вашему бизнесу драйв и прибыль.",
    description: "Если выручка стоит на месте более 6 месяцев — ваш бизнес болен. Мы проводим шоковую терапию: пересматриваем продуктовую линейку, выходим на новые рынки (включая MENA и Азию) и меняем парадигму продаж. Мы заставляем цифры расти.",
    pros: [
      "Второе дыхание для застоявшихся проектов",
      "Выход на международные рынки за 90 дней",
      "Увеличение LTV и среднего чека",
      "Жесткая оптимизация убыточных направлений"
    ],
    whyNow: "Инфляция и конкуренты съедают вашу маржу каждый день. Остановка сегодня — это убыток завтра. Начните трансформацию немедленно.",
    stats: [{label: "Средний рост", value: "x2.5"}, {label: "Окупаемость", value: "4 мес."}]
  },
  hr: {
    title: "HR-архитектура",
    tag: "Human Capital",
    heroText: "Люди — это не ресурс. Люди — это ваша единственная конкурентная стратегия.",
    description: "Мы не просто кадровое агентство. Мы строим систему, которая сама находит, обучает и удерживает таланты. Мы внедряем грейдирование, KPI и создаем культуру высокой производительности, где каждый работает на результат, а не на процесс.",
    pros: [
      "Найм топ-менеджеров с гарантией результата",
      "Снижение текучки кадров в 3 раза",
      "Внедрение системы автоматического обучения",
      "Рост лояльности и вовлеченности команды"
    ],
    whyNow: "Кадровый голод на пике. Завтра лучшие специалисты будут стоить вдвое дороже или уйдут к конкурентам. Постройте свою команду-мечту сегодня.",
    stats: [{label: "Retention Rate", value: "92%"}, {label: "Срок найма ТОПа", value: "21 дн."}]
  },
  execution: {
    title: "Проектная реализация",
    tag: "Operation Excellence",
    heroText: "Между планом и реальностью — пропасть. Мы построим через неё мост.",
    description: "Многие стратегии пылятся на полках. Мы заходим в компанию как 'Project Management Office' и доводим ваши идеи до результата. Мы контролируем сроки, бюджеты и подрядчиков. Мы — ваши руки и глаза в реализации самых сложных задач.",
    pros: [
      "Гарантия реализации стратегии на 100%",
      "Экономия до 20% бюджета проекта",
      "Профессиональный риск-менеджмент",
      "Единая точка ответственности за результат"
    ],
    whyNow: "Недоведенные до конца проекты — это 'замороженный' капитал. Освободите ресурсы и получите прибыль от внедрения прямо сейчас.",
    stats: [{label: "On-time Delivery", value: "98%"}, {label: "On-budget", value: "100%"}]
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onConsultClick }) => {
  const data = DETAILS[serviceId];

  if (!data) return <div className="pt-32 p-8">Service not found</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-slate-400 hover:text-black transition-colors mb-16 uppercase text-[10px] font-bold tracking-widest"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Назад к решениям
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-block px-4 py-2 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8">{data.tag}</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black leading-tight mb-8">
              {data.title}
            </h1>
            <p className="text-2xl text-slate-500 font-light italic leading-relaxed mb-12 border-l-4 border-black pl-8">
              "{data.heroText}"
            </p>
            <div className="text-slate-600 font-light leading-relaxed mb-12">
              {data.description}
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {data.stats.map((s, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-serif font-bold text-black mb-1">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black p-12 lg:p-20 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold mb-10">Почему это необходимо именно сейчас:</h3>
              <p className="text-slate-400 leading-relaxed mb-12 text-lg font-light">
                {data.whyNow}
              </p>
              
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Ключевые преимущества:</h4>
              <ul className="space-y-6 mb-16">
                {data.pros.map((pro, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-2 h-2 bg-white rotate-45 flex-shrink-0"></div>
                    <span className="text-sm font-light text-slate-200">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <button 
                onClick={onConsultClick}
                className="w-full bg-white text-black py-6 font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Забронировать стратегическую сессию
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <p className="text-[9px] text-center text-slate-500 uppercase tracking-widest font-bold">Осталось 2 слота на текущую неделю</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
