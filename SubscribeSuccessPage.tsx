import React from 'react';

interface SubscribeSuccessPageProps {
  onBackHome: () => void;
}

const SubscribeSuccessPage: React.FC<SubscribeSuccessPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl border border-slate-200 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Подписка подтверждена</h1>
        <p className="text-lg text-slate-600 mb-4">
          Вы успешно подписались на рассылку CMI | Infinity.
        </p>
        <p className="text-lg text-slate-600 mb-4">
          За подписку мы дарим вам подарок.
        </p>
        <p className="text-lg text-slate-600 mb-10">
          Забрать подарок можно в нашем Telegram-канале:
          <br />
          <a
            href="https://t.me/cm_infinity"
            target="_blank"
            rel="noreferrer"
            className="text-black font-semibold underline"
          >
            https://t.me/cm_infinity
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href="https://www.instagram.com/crisis_management_infinity?igsh=cW1vbGw0dmVsaDV3&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
          >
            Instagram
          </a>
          <a
            href="https://t.me/cm_infinity"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 bg-sky-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-sky-500 transition-all"
          >
            Telegram-канал
          </a>
          <a
            href="https://t.me/Help_agent007_bot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all"
          >
            Связаться
          </a>
        </div>

        <button
          onClick={onBackHome}
          className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default SubscribeSuccessPage;
