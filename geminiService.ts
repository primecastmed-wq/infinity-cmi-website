
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
  
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `Вы — Senior Full-Cycle Consultant CMI | Infinity. 
        Ваша экспертиза: Стратегия, Финансы и Технологическая инфраструктура.
        Если пользователь спрашивает про технические аспекты развертывания (Vercel, DNS, SSL), давайте лаконичные профессиональные рекомендации.
        ПРАВИЛА: Ответ структурированный. Тон: Высокий консалтинг, экспертный, сдержанный. 
        Не используйте маркированные списки со звездами. Используйте короткие абзацы и четкие тезисы.`,
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
  const prompt = `Аудит прибыли (${niche}). Ресурс: ${url || 'н/д'}. Вводные данные:\n${dataString}. Требуется развернутый анализ маржинальности, узких мест и управленческих решений.`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "Вы — Head of Profitability CMI | Infinity. Нужен развернутый отчет. Структура: Результаты (ключевые цифры), Диагностика (что влияет на прибыль), Рекомендации (2–4 конкретных шага), Риски (1–2 пункта). Тон: экспертный, спокойный. Используйте короткие абзацы и четкие тезисы.",
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
