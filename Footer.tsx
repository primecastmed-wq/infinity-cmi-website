
import React, { useState } from 'react';
import { sendTelegramNotification } from './telegramService.ts';

interface FooterProps {
  onBlogClick: () => void;
  onHomeClick: () => void;
  onRiskMapClick: () => void;
  onServiceClick: (id: string) => void;
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBlogClick, onHomeClick, onRiskMapClick, onServiceClick, onPrivacyClick }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    const message = `📧 <b>НОВЫЙ ПОДПИСЧИК</b>\n--------------------------\nEmail: <code>${email}</code>\n--------------------------`;
    await sendTelegramNotification(message);
    
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1">
            <button onClick={onHomeClick} className="flex items-center gap-3 mb-8 text-left focus:outline-none">
              <div className="w-8 h-8 border-2 border-white rotate-45 transform flex items-center justify-center font-bold text-xs">C</div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tighter">CMI | INFINITY</span>
                <span className="text-[8px] tracking-[0.2em] font-medium uppercase text-slate-500">Strategic Systems</span>
              </div>
            </button>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
              Стратегическая устойчивость и управление рисками высшего уровня. С 2012 года на защите интересов лидеров рынка.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-8">Решения</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light text-left">
              <li><button onClick={() => onServiceClick('systems')} className="hover:text-white transition-colors text-left">Автономный бизнес</button></li>
              <li><button onClick={() => onServiceClick('investments')} className="hover:text-white transition-colors text-left">Защита активов</button></li>
              <li><button onClick={() => onServiceClick('growth')} className="hover:text-white transition-colors text-left">Финансовый рост</button></li>
              <li><button onClick={() => onServiceClick('hr')} className="hover:text-white transition-colors text-left">Команда</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-8">Навигация</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light flex flex-col items-start">
              <li><button onClick={onHomeClick} className="hover:text-white transition-colors">Главная</button></li>
              <li><button onClick={onBlogClick} className="hover:text-white transition-colors text-left">Экспертный блог</button></li>
              <li><button onClick={onRiskMapClick} className="hover:text-white transition-colors text-left text-emerald-500 font-medium">Global Risk Radar</button></li>
              <li><button onClick={onPrivacyClick} className="hover:text-white transition-colors text-left">Правовая информация</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-8">Подписка</h4>
            <p className="text-sm text-slate-500 mb-6 font-light">Еженедельный разбор мировых кризисов и стратегий выживания 2026.</p>
            <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2">
              <input 
                required
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-transparent px-0 py-2 focus:outline-none w-full text-sm text-white placeholder:text-slate-700" 
                placeholder={status === 'success' ? "Добавлено!" : "Ваш email"} 
              />
              <button 
                type="submit" 
                className={`text-white hover:opacity-50 transition-colors uppercase text-[10px] font-bold tracking-widest ${status === 'success' ? 'text-emerald-500' : ''}`}
              >
                {status === 'loading' ? '...' : 'Ок'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 tracking-[0.2em] gap-6 font-bold uppercase">
          <p>© 2026 CMI | INFINITY Strategic Systems. Все права защищены.</p>
          <div className="flex gap-10">
            <button onClick={onPrivacyClick} className="hover:text-white transition-colors uppercase">Политика 152-ФЗ</button>
            <a href="#" className="hover:text-white transition-colors uppercase">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
