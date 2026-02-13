
import React, { useState } from 'react';
import { formatLeadMessage, sendTelegramNotification } from './telegramService.ts';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [contactType, setContactType] = useState<'Phone' | 'Telegram'>('Phone');
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadPayload = {
      source: 'Hero Crisis CTA Form',
      name: formData.name,
      contact: formData.contact,
      contactType,
      company: '',
      status: 'Критический (Требуется немедленное вмешательство)',
      details: 'Заявка отправлена с главного экрана по CTA антикризисной диагностики'
    };

    const tgSuccess = await sendTelegramNotification(formatLeadMessage(leadPayload));
    await fetch('/api/amocrm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    });

    if (tgSuccess) {
      setIsSuccess(true);
      setFormData({ name: '', contact: '' });
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSuccess(false);
        onCtaClick();
      }, 800);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-black text-white pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.95] mb-8 text-balance">
          Выводим бизнес из кризиса
        </h1>
        <p className="text-base md:text-2xl text-slate-400 mb-10 max-w-3xl font-light">
          Антикризисная диагностика, реструктуризация и сопровождение собственников.
          <br />
          Работаем с реальными цифрами, а не презентациями.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => setIsFormOpen(true)} className="bg-white text-black px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all">
            Запросить антикризисную диагностику
          </button>
          <a href="https://t.me/Help_agent007_bot" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-500 transition-all">
            Экстренно - написать в Telegram
          </a>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[220] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="w-full max-w-xl bg-white text-black p-8 md:p-10 relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black transition-colors"
              aria-label="Закрыть"
            >
              ✕
            </button>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Заявка на антикризисную диагностику</h3>
            <p className="text-slate-500 mb-8">Оставьте имя и контакт. Мы свяжемся с вами в ближайшее время.</p>

            {isSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
                Заявка отправлена. Открываем следующий шаг...
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Имя *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all font-medium"
                    placeholder="Ваше имя"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Контакт *</label>
                    <div className="flex bg-slate-100 p-0.5 rounded-md">
                      <button
                        type="button"
                        onClick={() => setContactType('Phone')}
                        className={`text-[8px] px-2 py-1 rounded transition-all font-bold uppercase ${contactType === 'Phone' ? 'bg-black text-white' : 'text-slate-400'}`}
                      >
                        Тел
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactType('Telegram')}
                        className={`text-[8px] px-2 py-1 rounded transition-all font-bold uppercase ${contactType === 'Telegram' ? 'bg-black text-white' : 'text-slate-400'}`}
                      >
                        TG
                      </button>
                    </div>
                  </div>
                  <input
                    required
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all font-medium"
                    placeholder={contactType === 'Phone' ? '+7' : '@username'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
