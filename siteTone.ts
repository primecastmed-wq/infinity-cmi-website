export type SiteTone = 'ru' | 'en' | 'human';

const ORIGINAL_TEXT = new WeakMap<Text, string>();
const ORIGINAL_PLACEHOLDER = new WeakMap<HTMLElement, string>();

const EN_MAP: Record<string, string> = {
  'О нас': 'About',
  'Ваша прибыль': 'Your Profit',
  'Этапы роста': 'Growth Stages',
  'Решения': 'Solutions',
  'База знаний': 'Knowledge Base',
  'Контакты': 'Contacts',
  'Связаться с консультантом': 'Talk to Consultant',
  'Где ваши деньги?': 'Where Is Your Money?',
  'Подробный отчет': 'Detailed Report',
  'ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ': 'CHECK PROFITABILITY',
  'Записаться на консультацию': 'Book a Consultation',
  'Обсудить решение': 'Discuss a Solution',
  'Результаты': 'Results',
  'Диагностика': 'Diagnostics',
  'Рекомендации': 'Recommendations',
  'Риски': 'Risks',
  'Важно': 'Important',
  'Кто мы': 'Who We Are',
  'План роста': 'Growth Plan',
  'Что делаем': 'What We Do',
  'Полезное': 'Helpful',
  'Нужна помощь': 'Need Help',
  'Запросить аудит проекта': 'Request Project Audit',
  'Связаться': 'Contact',
  'Наши решения': 'Our Solutions',
  'Подробнее': 'Details',
  'Написать в Telegram': 'Message on Telegram',
  'Загрузка...': 'Loading...',
  'AI Стратег': 'AI Strategist',
  'Где ваши деньги': 'Where Is Your Money',
  'Рекламный бюджет (₽)': 'Ad Budget (RUB)',
  'Посетители': 'Visitors',
  'Конверсия (%)': 'Conversion (%)',
  'Средний чек (₽)': 'Average Order Value (RUB)',
  'Себестоимость (₽)': 'Cost per Item (RUB)',
  'Заказы': 'Orders',
  'Выручка': 'Revenue',
  'Валовая прибыль': 'Gross Profit',
  'Чистая прибыль (после рекламы)': 'Net Profit (after ads)',
  'Срок': 'Timeline',
  'Что проверяем': 'What We Check',
  'Красные флаги': 'Red Flags',
  'Что получаете': 'What You Get',
  'Рост': 'Growth',
  'как четкая технология': 'as a clear system',
  'Скрыть': 'Hide',
  'Обсудить': 'Discuss',
  'Введите данные слева, чтобы получить расчет.': 'Enter numbers on the left to get the estimate.',
  'Нажмите «ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ», чтобы получить развернутый вывод.': 'Press "CHECK PROFITABILITY" to get the full analysis.',
  'Считаем...': 'Calculating...',
  'Важно: расчет ориентировочный. Цифры могут отличаться в реальном бизнесе из-за сезонности, структуры затрат и качества трафика. Чтобы получить развернутую стратегию под ваш кейс, запишитесь на консультацию.': 'Important: this is an estimated calculation. Real figures may differ because of seasonality, cost structure, and traffic quality. For a full strategy tailored to your case, book a consultation.',
  'Протокол связи CMI | Infinity активирован. Я готов провести экспресс-аудит вашей бизнес-модели. Какой вопрос сейчас в приоритете?': 'CMI | Infinity channel is online. I am ready to run a fast audit of your business model. What is your top priority now?',
  'Доступ к закрытой базе': 'Access to Advanced Strategy',
  'Для получения детализированного плана и консультации со стратегом CMI, подтвердите ваши контакты.': 'To unlock a detailed plan and strategy consultation with CMI, confirm your contacts.',
  'Имя *': 'Name *',
  'Telegram / Телефон *': 'Telegram / Phone *',
  'Связаться со стратегом': 'Talk to Strategist',
  'Опишите ваш запрос...': 'Describe your request...',
  'Просчет стратегии...': 'Building strategy...',
  'Оптимизация нейросети...': 'Optimizing model...',
  'Проектируем': 'Designing',
  'будущее': 'future',
  'прибыли.': 'of profit.',
  'CMI | Infinity — стратегический партнер для тех, кто строит автономные системы.': 'CMI | Infinity is a strategic partner for teams building autonomous systems.',
  'Успех': 'Success',
  'Проектов': 'Projects',
  'Контроль': 'Control',
  'Активы': 'Assets',
  'Архив побед': 'Wins Archive',
  'Кейсы, где мы': 'Cases Where We',
  'изменили правила игры.': 'Changed the Rules.',
  'Все кейсы': 'All Cases',
  'Служба поддержки CMI': 'CMI Support Desk',
  'Инфраструктура': 'Infrastructure',
  'должна быть': 'must be',
  'безупречной': 'flawless',
  'Технический узел': 'Technical Node',
  'Горячая линия': 'Hotline',
  'Заявка принята': 'Request Received',
  'Наши инженеры и стратеги свяжутся с вами в течение 15 минут.': 'Our engineers and strategists will contact you within 15 minutes.',
  'Отправить еще раз': 'Submit Again',
  'Ваше имя *': 'Your Name *',
  'Контакт *': 'Contact *',
  'Тип обращения': 'Request Type',
  'Кратко о проекте': 'Project Brief',
  'Технический/Инфраструктурный аудит': 'Technical/Infrastructure Audit',
  'Критический (Требуется немедленное вмешательство)': 'Critical (Immediate Intervention Required)',
  'Средний (Плановая реструктуризация)': 'Medium (Planned Restructuring)',
  'Превентивный (Аудит рисков)': 'Preventive (Risk Audit)',
  'ОТПРАВКА...': 'SENDING...',
  'ЗАПРОСИТЬ АНАЛИЗ СИСТЕМ': 'REQUEST SYSTEM ANALYSIS',
  'Нажимая кнопку, вы даете согласие на обработку персональных данных в соответствии с 152-ФЗ и политикой CMI.': 'By clicking the button, you consent to personal data processing under applicable law and CMI policy.',
  'Главная': 'Home',
  'Экспертный блог': 'Expert Blog',
  'Правовая информация': 'Legal Info',
  'Подписка': 'Newsletter',
  'Еженедельный разбор мировых кризисов и стратегий выживания 2026.': 'Weekly breakdown of global crises and survival strategies for 2026.',
  'Ваш email': 'Your Email',
  'Добавлено!': 'Added!',
  'Ок': 'OK',
  '© 2026 CMI | INFINITY Strategic Systems. Все права защищены.': '© 2026 CMI | INFINITY Strategic Systems. All rights reserved.',
  'Политика 152-ФЗ': 'Privacy Policy',
};

const HUMAN_MAP: Record<string, string> = {
  'О нас': 'Кто мы',
  'Ваша прибыль': 'Где ваши деньги',
  'Этапы роста': 'План роста',
  'Решения': 'Что делаем',
  'База знаний': 'Полезное',
  'Контакты': 'Нужна помощь',
  'Связаться с консультантом': 'Нужен разбор',
  'Подробный отчет': 'Простой разбор',
  'ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ': 'ПРОВЕРИТЬ ДЕНЬГИ',
  'Записаться на консультацию': 'Хочу разбор с командой',
  'Обсудить решение': 'Разобрать мой кейс',
  'Результаты': 'Что по факту',
  'Диагностика': 'Что сломано',
  'Рекомендации': 'Что делать',
  'Риски': 'Где можно потерять деньги',
  'Важно': 'Суть',
  'Запросить аудит проекта': 'Хочу аудит',
  'Наши решения': 'Чем можем помочь',
  'Подробнее': 'Показать суть',
  'Написать в Telegram': 'Написать в Telegram',
  'Загрузка...': 'Грузим, не кипишуй...',
  'AI Стратег': 'AI Разбор',
  'Рост': 'Рост без розовых очков',
  'как четкая технология': 'как план, а не лотерея',
  'Скрыть': 'Свернуть',
  'Обсудить': 'Погнали в разбор',
  'Введите данные слева, чтобы получить расчет.': 'Вбей цифры слева, посмотрим где утекает кэш.',
  'Нажмите «ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ», чтобы получить развернутый вывод.': 'Жми кнопку, покажу где деньги уходят в отпуск без тебя.',
  'Считаем...': 'Считаем, магии нет, только цифры...',
  'Протокол связи CMI | Infinity активирован. Я готов провести экспресс-аудит вашей бизнес-модели. Какой вопрос сейчас в приоритете?': 'Связь есть. Давай без иллюзий: что болит в бизнесе прямо сейчас?',
  'Доступ к закрытой базе': 'Доступ к серьезному разбору',
  'Для получения детализированного плана и консультации со стратегом CMI, подтвердите ваши контакты.': 'Чтобы получить план без воды и разбор со стратегом, оставь контакт.',
  'Имя *': 'Как к тебе обращаться *',
  'Telegram / Телефон *': 'Телега или номер *',
  'Связаться со стратегом': 'Ок, нужен разбор',
  'Опишите ваш запрос...': 'Пиши по делу, что не работает...',
  'Просчет стратегии...': 'Собираю план, без розовых очков...',
  'Оптимизация нейросети...': 'Подкручиваю мозги, секунду...',
  'Проектируем': 'Собираем',
  'будущее': 'завтрашний кэш',
  'прибыли.': 'без сказок.',
  'CMI | Infinity — стратегический партнер для тех, кто строит автономные системы.': 'CMI | Infinity - команда, которая чинит бизнес, когда он идет в разнос.',
  'Успех': 'Вывезли',
  'Проектов': 'Кейсов',
  'Контроль': 'Держим руку',
  'Активы': 'Активы под контролем',
  'Архив побед': 'Где вытаскивали бизнес из ямы',
  'Все кейсы': 'Смотреть все разборы',
  'Служба поддержки CMI': 'Антикризисный штаб CMI',
  'Технический узел': 'Техузел',
  'Горячая линия': 'Горячая связь',
  'Заявка принята': 'Принято, начинаем',
  'Наши инженеры и стратеги свяжутся с вами в течение 15 минут.': 'Команда выйдет на связь примерно за 15 минут.',
  'Отправить еще раз': 'Отправить заново',
  'Ваше имя *': 'Имя *',
  'Контакт *': 'Как связаться *',
  'Тип обращения': 'Что нужно',
  'Кратко о проекте': 'Коротко, где болит',
  'ЗАПРОСИТЬ АНАЛИЗ СИСТЕМ': 'ХОЧУ ЖЕСТКИЙ РАЗБОР',
  'Главная': 'Старт',
  'Экспертный блог': 'Блог без воды',
  'Правовая информация': 'Документы',
  'Ваш email': 'Твой email',
  'Ок': 'Погнали',
};

const EN_REPLACEMENTS: Array<[string, string]> = [
  ['Проектируем будущее прибыли.', 'We design your future profit.'],
  ['CMI | Infinity — стратегический партнер для тех, кто строит автономные системы.', 'CMI | Infinity is a strategic partner for teams building autonomous business systems.'],
  ['Запросить аудит проекта', 'Request Project Audit'],
  ['Связаться', 'Contact'],
  ['Наши решения', 'Our Solutions'],
  ['Подробнее', 'Details'],
  ['Написать в Telegram', 'Message on Telegram'],
  ['ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ', 'CHECK PROFITABILITY'],
  ['Записаться на консультацию', 'Book a Consultation'],
  ['Подробный отчет', 'Detailed Report'],
  ['Где ваши деньги?', 'Where Is Your Money?'],
  ['Важно', 'Important'],
  ['Срок:', 'Timeline:'],
  ['Инфраструктура должна быть безупречной.', 'Infrastructure must be flawless.'],
  ['Мы помогаем не только с бизнесом, но и с цифровой устойчивостью. Оставьте заявку на технический или стратегический аудит вашего проекта.', 'We help not only with business but also with digital resilience. Leave a request for a technical or strategic audit of your project.'],
];

const HUMAN_REPLACEMENTS: Array<[string, string]> = [
  ['Проектируем будущее прибыли.', 'Собираем прибыль так, чтобы касса не плакала.'],
  ['Запросить аудит проекта', 'Хочу аудит без иллюзий'],
  ['Связаться', 'Погнали разбирать'],
  ['ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ', 'ПРОБИТЬ, ГДЕ ДЕНЬГИ'],
  ['Подробный отчет', 'Разбор без занудства'],
  ['Риски', 'Где вас может размотать рынок'],
  ['Важно', 'Жесткая правда'],
  ['Срок:', 'Сколько по времени:'],
  ['Инфраструктура должна быть безупречной.', 'Система должна работать без фокусов и провалов.'],
];

export const getSiteTone = (): SiteTone => {
  const value = localStorage.getItem('siteTone');
  if (value === 'ru' || value === 'en' || value === 'human') return value;
  return 'ru';
};

export const setSiteTone = (tone: SiteTone) => {
  localStorage.setItem('siteTone', tone);
};

const translateLine = (source: string, tone: SiteTone): string => {
  if (tone === 'ru') return source;
  const map = tone === 'en' ? EN_MAP : HUMAN_MAP;
  const trimmed = source.trim();
  const replacement = map[trimmed];
  if (replacement) {
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    return `${leading}${replacement}${trailing}`;
  }
  const pairs = tone === 'en' ? EN_REPLACEMENTS : HUMAN_REPLACEMENTS;
  let transformed = source;
  pairs.forEach(([from, to]) => {
    transformed = transformed.split(from).join(to);
  });
  if (tone === 'human' && transformed !== source && transformed.length < 90 && !/[.!?]$/.test(transformed.trim())) {
    transformed = `${transformed}.`;
  }
  return transformed;
};

export const applySiteTone = () => {
  const tone = getSiteTone();
  document.documentElement.setAttribute('data-site-tone', tone);
  document.documentElement.lang = tone === 'en' ? 'en' : 'ru';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    const node = current as Text;
    const parentTag = node.parentElement?.tagName;
    if (parentTag && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) {
      current = walker.nextNode();
      continue;
    }
    if (!ORIGINAL_TEXT.has(node)) ORIGINAL_TEXT.set(node, node.nodeValue || '');
    const original = ORIGINAL_TEXT.get(node) || '';
    node.nodeValue = translateLine(original, tone);
    current = walker.nextNode();
  }

  const inputs = Array.from(document.querySelectorAll('input[placeholder], textarea[placeholder]'));
  inputs.forEach((el) => {
    const element = el as HTMLInputElement | HTMLTextAreaElement;
    if (!ORIGINAL_PLACEHOLDER.has(element)) ORIGINAL_PLACEHOLDER.set(element, element.placeholder || '');
    const original = ORIGINAL_PLACEHOLDER.get(element) || '';
    element.placeholder = translateLine(original, tone);
  });
};
