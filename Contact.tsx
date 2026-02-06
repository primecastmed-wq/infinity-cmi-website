
import React, { useState } from 'react';
import { sendTelegramNotification, formatLeadMessage } from './telegramService.ts';

const Contact: React.FC = () => {
  const [contactType, setContactType] = useState<'Phone' | 'Telegram'>('Phone');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    status: 'Критический (Требуется немедленное вмешательство)',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadPayload = {
      source: 'Main Contact Form',
      name: formData.name,
      contact: formData.contact,
      contactType: contactType,
      company: formData.company,
      status: formData.status,
      details: formData.details
    };

    const tgSuccess = await sendTelegramNotification(formatLeadMessage(leadPayload));
// Send to AmoCRM
    const amoCRMResponse = await fetch('/api/amocrm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    });
    
    const amoCRMResult = await amoCRMResponse.json();
    console.log('AmoCRM Response:', amoCRMResult);

    if (tgSuccess) {
      setIsSuccess(true);
      setFormData({ 
        name: '', 
        contact: '', 
        company: '', 
        status: 'Критический (Требуется немедленное вмешательство)', 
        details: '' 
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 border border-slate-200">
          <div className="p-12 lg:p-24 bg-black text-white">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-8">Служба поддержки CMI</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              Инфраструктура <br /> должна быть <span className="italic text-slate-500">безупречной</span>.
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Мы помогаем не только с бизнесом, но и с цифровой устойчивостью. Оставьте заявку на технический или стратегический аудит вашего проекта.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-px h-10 bg-emerald-500"></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Технический узел</div>
                  <div className="text-xl font-medium">cmi.company@yandex.ru</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Горячая линия</div>
                  <div className="text-xl font-medium">79193995141</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-24 relative">
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">Заявка принята</h4>
                <p className="text-slate-500 mb-8">Наши инженеры и стратеги свяжутся с вами в течение 15 минут.</p>
                <button onClick={() => setIsSuccess(false)} className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Отправить еще раз</button>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Ваше имя *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all font-medium" 
                    placeholder="Александр" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Контакт *</label>
                    <div className="flex bg-slate-100 p-0.5 rounded-md">
                      <button 
                        type="button" 
                        onClick={() => setContactType('Phone')}
                        className={`text-[8px] px-2 py-1 rounded transition-all font-bold uppercase ${contactType === 'Phone' ? 'bg-black text-white' : 'text-slate-400'}`}
                      >Тел</button>
                      <button 
                        type="button" 
                        onClick={() => setContactType('Telegram')}
                        className={`text-[8px] px-2 py-1 rounded transition-all font-bold uppercase ${contactType === 'Telegram' ? 'bg-black text-white' : 'text-slate-400'}`}
                      >TG</button>
                    </div>
                  </div>
                  <input 
                    required 
                    type="text" 
                    className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all font-medium" 
                    placeholder={contactType === 'Phone' ? "+7" : "@"} 
                    value={formData.contact}
                    onChange={e => setFormData({...formData, contact: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Тип обращения</label>
                <select 
                  className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all bg-transparent font-medium"
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value})}
                >
                  <option>Технический/Инфраструктурный аудит</option>
                  <option>Критический (Требуется немедленное вмешательство)</option>
                  <option>Средний (Плановая реструктуризация)</option>
                  <option>Превентивный (Аудит рисков)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Кратко о проекте</label>
                <textarea 
                  rows={3} 
                  className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all resize-none font-medium" 
                  placeholder="Домен, сфера деятельности, текущие трудности..."
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-black text-white w-full py-6 font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? 'ОТПРАВКА...' : 'ЗАПРОСИТЬ АНАЛИЗ СИСТЕМ'}
                </button>
                <p className="text-[8px] text-slate-400 leading-relaxed text-center uppercase tracking-widest font-bold">
                  Нажимая кнопку, вы даете согласие на обработку персональных данных в соответствии с 152-ФЗ и политикой CMI.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
