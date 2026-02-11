import React from 'react';

interface UnsubscribePageProps {
  onBackHome: () => void;
}

const UnsubscribePage: React.FC<UnsubscribePageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl border border-slate-200 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Вы отказались от материалов</h1>
        <p className="text-lg text-slate-600 mb-4">
          Мы больше не будем отправлять вам письма/материалы.
        </p>
        <p className="text-lg text-slate-600 mb-10">
          Если это произошло случайно — напишите нам, и мы вернём подписку:
        </p>

        <a
          href="mailto:cmi.company@yandex.ru"
          className="inline-flex items-center justify-center px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
        >
          cmi.company@yandex.ru
        </a>

        <div className="mt-10">
          <button
            onClick={onBackHome}
            className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribePage;
