
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cmi_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cmi_cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-96 z-[300] bg-white border border-slate-200 p-6 shadow-2xl animate-in slide-in-from-bottom-10 duration-700">
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">Security & Privacy</div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Мы используем файлы cookie для анализа трафика и работы ИИ-ассистента Infinity. Оставаясь на сайте, вы соглашаетесь с нашей политикой конфиденциальности.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-black text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
          >
            Принять
          </button>
          <a 
            href="/cookies" 
            onClick={(e) => { e.preventDefault(); /* логика перехода будет в App */ }} 
            className="flex-1 border border-slate-200 text-center py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
