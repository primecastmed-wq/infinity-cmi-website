
import React, { useState, useEffect } from 'react';
import { analyzeUnitEconomics } from './geminiService.ts';
import { sendTelegramNotification, formatLeadMessage } from './telegramService.ts';
import { sendLeadToCRM } from './crmService.ts';

type NicheType = 'ecommerce' | 'saas' | 'services' | 'retail' | 'manufacturing';

const NICHES: Record<NicheType, { label: string, fields: any[] }> = {
  ecommerce: {
    label: 'Продажи товаров',
    fields: [
      { key: 'ad_spend', label: 'Рекламный бюджет (₽)', defaultValue: 200000 },
      { key: 'visitors', label: 'Посетители', defaultValue: 50000 },
      { key: 'conv_to_pay', label: 'Конверсия (%)', defaultValue: 2 },
      { key: 'aov', label: 'Средний чек (₽)', defaultValue: 4500 },
      { key: 'cogs', label: 'Себестоимость (₽)', defaultValue: 1800 },
    ]
  },
  saas: { label: 'IT / Сервисы', fields: [{ key: 'mrr', label: 'MRR (₽)', defaultValue: 3000 }] },
  services: { label: 'Услуги', fields: [{ key: 'avg_contract', label: 'Средний контракт (₽)', defaultValue: 250000 }] },
  retail: { label: 'Магазин', fields: [{ key: 'aov', label: 'Средний чек', defaultValue: 4200 }] },
  manufacturing: { label: 'Производство', fields: [{ key: 'avg_order', label: 'Средний заказ', defaultValue: 2500000 }] }
};

const UnitEconomics: React.FC<{ onConsultClick: () => void }> = ({ onConsultClick }) => {
  const [niche, setNiche] = useState<NicheType>('ecommerce');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  useEffect(() => {
    const initialData: Record<string, any> = {};
    NICHES[niche].fields.forEach(f => { initialData[f.key] = f.defaultValue; });
    setFormData(initialData);
  }, [niche]);

  const handleStartAnalysis = async () => {
    setIsAnalyzing(true);
    const result = await analyzeUnitEconomics(formData, NICHES[niche].label, '', false);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-8xl font-serif font-bold mb-12">Где ваши деньги?</h1>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            {NICHES[niche].fields.map(field => (
              <div key={field.key} className="mb-6">
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">{field.label}</label>
                <input
                  type="number"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-white outline-none"
                  value={formData[field.key] || ''}
                  onChange={e => setFormData({...formData, [field.key]: Number(e.target.value)})}
                />
              </div>
            ))}
            <button onClick={handleStartAnalysis} className="w-full bg-emerald-500 text-black py-5 rounded-xl font-bold uppercase tracking-widest text-xs mt-8">ПРОВЕРИТЬ ПРИБЫЛЬНОСТЬ</button>
          </div>
          <div className="bg-white text-black p-8 md:p-16 rounded-3xl min-h-[400px]">
            {isAnalyzing ? <div className="animate-pulse">Считаем...</div> : analysis || "Введите данные слева"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitEconomics;
