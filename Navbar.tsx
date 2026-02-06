
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  onBlogClick: () => void;
  onRiskMapClick?: () => void;
  onWhyUsClick?: () => void;
  onRoadmapClick?: () => void;
  onUnitEconomicsClick?: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onConsultClick: () => void;
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onHomeClick, 
  onBlogClick, 
  onRiskMapClick,
  onWhyUsClick,
  onRoadmapClick,
  onUnitEconomicsClick,
  onServicesClick,
  onContactClick,
  onConsultClick,
  isDark = true 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDomainLive, setIsDomainLive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    const host = window.location.hostname;
    setIsDomainLive(host === 'cmi-company.ru' || host === 'www.cmi-company.ru');
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileNav = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  const isLightMode = scrolled || !isDark;
  const textColorClass = isLightMode ? 'text-black' : 'text-white';
  const subtextColorClass = isLightMode ? 'text-slate-500' : 'text-slate-400';
  const activeLinkClass = isLightMode ? 'after:bg-black' : 'after:bg-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleMobileNav(onHomeClick)} className="flex items-center gap-3 text-left focus:outline-none group z-[110]">
          <div className="relative w-10 h-10">
            <div className={`absolute inset-0 border-2 rotate-45 transform transition-transform group-hover:rotate-90 ${isLightMode ? 'border-black' : 'border-white'}`}></div>
            <div className={`absolute inset-0 flex items-center justify-center font-bold text-sm ${textColorClass}`}>C</div>
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
               <span className={`text-2xl font-bold tracking-tighter ${textColorClass}`}>CMI</span>
               <span className={`text-2xl font-light tracking-tighter ${subtextColorClass}`}>|</span>
               <span className={`text-2xl font-bold tracking-tighter ${textColorClass}`}>INFINITY</span>
            </div>
          </div>
        </button>
        
        <div className="hidden lg:flex items-center gap-12">
          {[
            { label: 'О нас', action: onWhyUsClick },
            { label: 'Ваша прибыль', action: onUnitEconomicsClick, special: true },
            { label: 'Этапы роста', action: onRoadmapClick },
            { label: 'Решения', action: onServicesClick },
            { label: 'База знаний', action: onBlogClick }
          ].map((item, idx) => (
            <button key={idx} onClick={item.action} className={`relative py-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:opacity-70 ${textColorClass} ${item.special ? 'text-emerald-500 hover:text-emerald-400' : ''}`}>
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={toggleMobileMenu} className="lg:hidden w-12 h-12 flex flex-col items-end justify-center gap-2 z-[110] relative focus:outline-none">
          <div className={`h-0.5 transition-all duration-300 ${isLightMode ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></div>
          <div className={`h-0.5 transition-all duration-300 ${isLightMode ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`}></div>
          <div className={`h-0.5 transition-all duration-300 ${isLightMode ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-6'}`}></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 ${isLightMode ? 'bg-white/95 text-black' : 'bg-black/95 text-white'} backdrop-blur-md border-t border-white/10`}>
          <div className="container mx-auto px-6 py-8 space-y-6">
            <button onClick={() => handleMobileNav(onWhyUsClick || onHomeClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
              О нас
            </button>
            <button onClick={() => handleMobileNav(onUnitEconomicsClick || onHomeClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest text-emerald-500">
              Ваша прибыль
            </button>
            <button onClick={() => handleMobileNav(onRoadmapClick || onHomeClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
              Этапы роста
            </button>
            <button onClick={() => handleMobileNav(onServicesClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
              Решения
            </button>
            <button onClick={() => handleMobileNav(onBlogClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
              База знаний
            </button>
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button onClick={() => handleMobileNav(onContactClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
                Контакты
              </button>
              <button onClick={() => handleMobileNav(onConsultClick)} className="block w-full text-left text-sm font-bold uppercase tracking-widest">
                Связаться с консультантом
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
