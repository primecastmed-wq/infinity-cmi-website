
import React, { useState, useRef, useEffect } from 'react';
import { generateBusinessAdvice } from './geminiService';
import { sendTelegramNotification, formatLeadMessage } from './telegramService';
import { sendLeadToCRM } from './crmService';
import { Message } from '../types';

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('CMI Systems Booting...');
  const [hasConverted, setHasConverted] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [contactType, setContactType] = useState<'Phone' | 'Telegram'>('Phone');
  const [contactInfo, setContactInfo] = useState({ name: '', contact: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const withRequiredCta = (text: string, isVerified: boolean) => {
    const cta = isVerified
      ? "Следующий шаг: нужен полный аудит с командой CMI, чтобы не терять деньги на догадках. На консультации вы получите приоритеты, план внедрения и контрольные метрики под ваш кейс."
      : "Важно: это общий ориентир. Чтобы получить надежный результат и не сжечь бюджет, нужен специалист и полный аудит CMI.";
    return `${text}\n\n${cta}`;
  };

  useEffect(() => {
    const domain = window.location.hostname;
    const sequence = [
      { msg: `Pinging node: ${domain}...`, delay: 400 },
      { msg: 'Checking SSL/TLS Handshake...', delay: 900 },
      { msg: 'Syncing Infinity Core v3.9...', delay: 1400 },
      { msg: 'Auth: Strategic Consultant Verified.', delay: 1800 }
    ];

    sequence.forEach((step, idx) => {
      setTimeout(() => {
        setStatusMsg(step.msg);
        if (idx === sequence.length - 1) {
          setTimeout(() => {
            setIsBooting(false);
            setMessages([{ 
              role: 'model', 
              text: 'Протокол связи CMI | Infinity активирован. Я готов провести экспресс-аудит вашей бизнес-модели. Какой вопрос сейчас в приоритете?' 
            }]);
          }, 400);
        }
      }, step.delay);
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading, isBooting]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const handleSend = async (customPrompt?: string, forceConverted?: boolean) => {
    const promptToSend = customPrompt || input;
    if (!promptToSend.trim() || isLoading || isBooting) return;

    if (!customPrompt) {
      setMessages(prev => [...prev, { role: 'user', text: promptToSend }]);
      setInput('');
    }
    
    setIsLoading(true);
    setStatusMsg('Просчет стратегии...');

    try {
      const isActuallyConverted = forceConverted !== undefined ? forceConverted : hasConverted;
      const response = await generateBusinessAdvice(promptToSend, isActuallyConverted);
      
      if (response.includes('СТАТУС:')) {
        setStatusMsg('Оптимизация нейросети...');
        setTimeout(() => handleSend(promptToSend, isActuallyConverted), 5000);
        return;
      }

      setMessages(prev => [...prev, { role: 'model', text: withRequiredCta(response || '', isActuallyConverted) }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Ошибка узла. Повторите запрос через 10 секунд.' }]);
    } finally {
      setIsLoading(false);
    }

    if (!hasConverted && forceConverted !== true && messages.length >= 0 && !showLeadForm) {
      setTimeout(() => setShowLeadForm(true), 2500);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo.name && contactInfo.contact) {
      setIsSubmitting(true);
      const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.text || "Диалог с ИИ";
      const lastAiMsg = messages.filter(m => m.role === 'model').pop()?.text || "";
      
      const leadPayload = {
        source: 'AI Hub (cmi-company.ru)',
        name: contactInfo.name,
        contact: contactInfo.contact,
        contactType: contactType,
        context: lastUserMsg,
        aiResponse: lastAiMsg
      };

      await sendTelegramNotification(formatLeadMessage(leadPayload));
      sendLeadToCRM({ ...leadPayload, details: `Контекст: ${lastUserMsg}`, source: 'AI Hub' });

      setHasConverted(true);
      setShowLeadForm(false);
      setIsSubmitting(false);
      
      setMessages(prev => [...prev, { role: 'model', text: `Верификация ${contactInfo.name} пройдена. Доступ к расширенной стратегии CMI открыт.` }]);
      setTimeout(
        () =>
          handleSend(
            `Проанализируй глубже запрос: ${lastUserMsg}.
            Дай:
            1) минимум 2 дополнительных решения,
            2) пошагово как решить проблему,
            3) что обязательно проверить в бизнесе,
            4) риски и почему здесь нужен профильный специалист,
            5) финальный блок: зачем делать полный аудит с командой CMI и что это даст.`,
            true
          ),
        800
      );
    }
  };

  const formatText = (text: string, isUser: boolean) => {
    return text.split('\n').map((line, i) => {
      let content = line.trim();
      content = content.replace(/^[*-]\s+/, '');
      content = content.replace(/\*\*(.*?)\*\*/g, '<b style="font-weight: 700;">$1</b>');
      if (content === '') return <div key={i} className="h-2" />;
      
      const isRisk = !isUser && (line.includes('⚠️') || content.toLowerCase().includes('риск'));
      return (
        <div key={i} className={`mb-2 ${isRisk ? 'p-3 bg-red-50 border-l-2 border-red-500 rounded-r-lg my-3' : ''}`}>
          <p 
            className={`text-[14px] md:text-sm leading-relaxed font-light`} 
            style={{ color: isUser ? '#ffffff' : '#1e293b' }}
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md hidden md:block" onClick={onClose} />
      
      <div className="relative w-full md:max-w-xl bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-500 shadow-2xl">
        <div className="p-4 md:p-6 border-b flex justify-between items-center bg-black text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/30 rotate-45 transform flex items-center justify-center font-bold text-[10px]">C</div>
            <div className="flex flex-col">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 leading-none mb-1">CMI | INFINITY</h2>
              <span className="text-[7px] text-slate-500 tracking-[0.2em] uppercase font-bold">Node Strategic Hub</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 bg-slate-50/50">
          {isBooting ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
              <div className="w-12 h-12 border border-black/10 flex items-center justify-center">
                <div className="w-8 h-8 border-t-2 border-black animate-spin rounded-full"></div>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-black font-bold animate-pulse">
                {statusMsg}
              </div>
            </div>
          ) : (
            <>
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-5 rounded-2xl shadow-sm ${m.role === 'user' ? 'bg-black rounded-tr-none' : 'bg-white rounded-tl-none border border-slate-100'}`}
                  >
                    {formatText(m.text, m.role === 'user')}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest animate-pulse flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                    {statusMsg}
                  </div>
                </div>
              )}
              
              {showLeadForm && !hasConverted && (
                <div className="p-8 bg-black text-white rounded-3xl shadow-2xl mt-4 border border-white/10 animate-in zoom-in duration-300">
                  <h3 className="text-sm font-bold uppercase mb-4 tracking-tighter text-emerald-400">Доступ к закрытой базе</h3>
                  <p className="text-[10px] text-slate-400 mb-6 uppercase tracking-widest leading-relaxed">Для получения детализированного плана и консультации со стратегом CMI, подтвердите ваши контакты.</p>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <input required type="text" placeholder="Имя *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white transition-all" value={contactInfo.name} onChange={e => setContactInfo({...contactInfo, name: e.target.value})} />
                    <input required type="text" placeholder="Telegram / Телефон *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white transition-all" value={contactInfo.contact} onChange={e => setContactInfo({...contactInfo, contact: e.target.value})} />
                    <button type="submit" className="w-full bg-white text-black font-bold py-5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg active:scale-95">Связаться со стратегом</button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-4 md:p-6 border-t bg-white shrink-0 pb-safe">
          <div className="flex gap-3 items-center bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isBooting ? "Booting..." : "Опишите ваш запрос..."}
              className="flex-1 bg-white rounded-full py-4 px-6 focus:outline-none text-[15px] text-black font-medium placeholder:text-slate-400"
              disabled={isLoading || isBooting}
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim() || isBooting}
              className="bg-black text-white w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-emerald-500 transition-all disabled:opacity-20 shadow-lg active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
          <p className="mt-3 text-[7px] text-center text-slate-400 uppercase tracking-widest font-bold">Infinity Engine v3.9 // Domain Verified // cmi-company.ru</p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
