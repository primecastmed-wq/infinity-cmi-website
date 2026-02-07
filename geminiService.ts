
import { GoogleGenAI } from "@google/genai";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MODEL_HIERARCHY = [
  'gemini-3-flash-preview',
  'gemini-flash-lite-latest',
  'gemini-flash-latest'
];

export const generateBusinessAdvice = async (userPrompt: string, hasLeads: boolean, attempt = 0): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });
  const modelName = MODEL_HIERARCHY[Math.min(attempt, MODEL_HIERARCHY.length - 1)];
  const siteTone = typeof window !== 'undefined' ? localStorage.getItem('siteTone') : 'ru';
  const isHumanMode = siteTone === 'human';
  const isEnglishMode = siteTone === 'en';
  const effectivePrompt = hasLeads
    ? `${userPrompt}\n\nКонтекст: пользователь прошел верификацию контакта. Дай расширенный ответ: добавь минимум 2 альтернативных решения, подробный чек-лист проверки, и финальный блок с предложением полного аудита у команды CMI.`
    : `${userPrompt}\n\nКонтекст: пользователь еще не прошел верификацию. В разделе рисков добавь прямой, но корректный намек, что для надежного результата нужен специалист и полный аудит.`;
  
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ role: 'user', parts: [{ text: effectivePrompt }] }],
      config: {
        systemInstruction: `Вы — Senior Full-Cycle Consultant CMI | Infinity.
        Пишите простым языком, без сложных терминов и перегруженных формулировок.
        Тон: уверенный, местами дерзкий, но без грубости и без токсичности.
        Поясняйте так, чтобы понял человек без профильного образования.
        ${isHumanMode ? 'Режим HUMAN: пишите максимально по-человечески, разговорно и предельно просто.' : ''}
        ${isEnglishMode ? 'Режим EN: отвечайте только на английском и только plain English.' : 'Если запрос на английском, отвечайте на простом разговорном английском (plain English), без сложных терминов и жаргона.'}
        Формат ответа всегда одинаковый:
        1) Короткий вывод (1-2 предложения).
        2) Что делать сейчас (3-5 конкретных шагов).
        3) Ожидаемый результат (кратко, в цифрах где возможно).
        4) Риски и как их снизить (1-2 пункта).
        Стиль: аккуратный, понятный, хорошо структурированный.
        Обязательно:
        - В рисках всегда показывайте, где нужен специалист и полный аудит.
        - Если пользователь прошел верификацию, выдавайте расширенный разбор: +2 решения, чек-лист проверки и блок "что делаем с CMI".
        - В конце каждого ответа давайте прямой и понятный вывод: без профильной помощи и полного аудита высок риск потерь.
        Не используйте списки со звездами, длинные абзацы и канцелярит.`,
        temperature: 0.3,
      },
    });

    if (!response || !response.text) throw new Error("Empty AI response");
    return response.text;
  } catch (error: any) {
    console.error(`AI Error:`, error);
    if (attempt < MODEL_HIERARCHY.length) {
      await sleep(1000 * (attempt + 1));
      return generateBusinessAdvice(userPrompt, hasLeads, attempt + 1);
    }
    return `СТАТУС: Канал связи CMI перегружен. Системы проводят оптимизацию трафика. Пожалуйста, ожидайте.`;
  }
};

export const analyzeUnitEconomics = async (data: any, niche: string, url: string, hasLeads: boolean, attempt = 0): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });
  const modelName = MODEL_HIERARCHY[Math.min(attempt, MODEL_HIERARCHY.length - 1)];
  const dataString = Object.entries(data).map(([key, val]) => `${key}: ${val}`).join('\n');
  const prompt = `Аудит прибыли (${niche}). Ресурс: ${url || 'н/д'}. Вводные данные:\n${dataString}. Дайте развернутый, но понятный анализ маржинальности, узких мест и управленческих решений простым языком.`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "Вы — Head of Profitability CMI | Infinity. Пишите простым языком без сложных терминов. Тон уверенный, немного дерзкий, но корректный и уважительный. Структура: Результаты, Диагностика, Рекомендации (2-4 шага), Риски. В конце обязательно добавляйте блок: Важно: расчет ориентировочный, цифры могут отличаться в реальном бизнесе. Для развернутой стратегии нужна консультация с экспертом.",
        temperature: 0.2,
      },
    });
    return response.text || "Ошибка генерации отчета.";
  } catch (error: any) {
    if (attempt < MODEL_HIERARCHY.length - 1) {
      await sleep(1000);
      return analyzeUnitEconomics(data, niche, url, hasLeads, attempt + 1);
    }
    return "Служба финансового аудита CMI временно в офлайне.";
  }
};
