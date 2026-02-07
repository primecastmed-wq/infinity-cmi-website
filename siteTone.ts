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
};

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
  if (!replacement) return source;
  const leading = source.match(/^\s*/)?.[0] || '';
  const trailing = source.match(/\s*$/)?.[0] || '';
  return `${leading}${replacement}${trailing}`;
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
