
import React, { useState } from 'react';

interface RegionData {
  id: string;
  name: string;
  coords: { x: number; y: number };
  status: 'critical' | 'opportunity' | 'extreme';
  description: string;
  longRead: string;
  risks: string[];
  metrics: { label: string; value: string }[];
  trend: 'up' | 'down' | 'stable';
}

const REGIONS: RegionData[] = [
  {
    id: 'north-america',
    name: 'North America (G7 Core)',
    coords: { x: 200, y: 160 },
    status: 'critical',
    trend: 'down',
    description: 'Фискальный протекционизм и эрозия банковской тайны.',
    longRead: 'К 2026 году США завершили внедрение FedNow 2.0, что фактически уничтожило анонимность крупных транзакций. Мы фиксируем массовый исход "старых денег" в частные фонды. Основной риск — прецедентное право, позволяющее блокировать активы на основании "этического соответствия" (ESG 2.0).',
    risks: ['Цифровой доллар (CBDC)', 'Налог на нереализованную прибыль', 'Кибер-уязвимости Swift'],
    metrics: [
      { label: 'Debt to GDP', value: '135%' },
      { label: 'Privacy Index', value: '2.1/10' }
    ]
  },
  {
    id: 'cis-ca',
    name: 'Eurasian Node (CIS/CA)',
    coords: { x: 620, y: 130 },
    status: 'extreme',
    trend: 'down',
    description: 'Эпицентр санкционных войн и правового нигилизма.',
    longRead: 'Регион находится в состоянии "юридического вакуума". Традиционные титулы собственности оспариваются новыми указами. Infinity разработала здесь систему "двойного контура" для защиты активов, используя транзитные юрисдикции Центральной Азии. Это зона самого высокого риска, но и самой высокой доходности на арбитраже рисков.',
    risks: ['Вторичные санкции', 'Национализация', 'Разрыв цепочек Swift'],
    metrics: [
      { label: 'Risk Score', value: '9.8/10' },
      { label: 'Asset Volatility', value: 'Extreme' }
    ]
  },
  {
    id: 'mena',
    name: 'MENA (UAE/KSA)',
    coords: { x: 555, y: 235 },
    status: 'opportunity',
    trend: 'up',
    description: 'Глобальный сейф. Тихая гавань для мирового капитала.',
    longRead: 'В 2025 году Дубай и Эр-Рияд стали безальтернативными хабами для структурирования активов. Здесь работает "правовой иммунитет" для инвесторов из любого блока. Мы помогаем с созданием VCC-структур (Variable Capital Companies), которые невозможно заблокировать извне.',
    risks: ['Инфляция сервисов', 'Регуляторный комплаенс', 'Геополитическое балансирование'],
    metrics: [
      { label: 'Capital Inflow', value: '+$850B' },
      { label: 'Safety Rating', value: 'AAA' }
    ]
  },
  {
    id: 'sea',
    name: 'ASEAN (The New Factory)',
    coords: { x: 790, y: 310 },
    status: 'opportunity',
    trend: 'up',
    description: 'Центр производственной децентрализации.',
    longRead: 'Вьетнам и Индонезия к 2026 году поглотили 40% производственных мощностей, ушедших из Китая. Это регион с самым молодым капиталом. Инвестиции в реальный сектор здесь защищены двусторонними договорами, которые Infinity помогает адаптировать под ваш бизнес.',
    risks: ['Логистические узлы', 'Валютные колебания', 'Политическая стабильность'],
    metrics: [
      { label: 'GDP Growth', value: '+6.8%' },
      { label: 'FDI Index', value: 'High' }
    ]
  },
  {
    id: 'europe',
    name: 'European Union',
    coords: { x: 505, y: 135 },
    status: 'critical',
    trend: 'down',
    description: 'Деиндустриализация и социальное давление.',
    longRead: 'Европа 2026 года — это зона жесткого фискального контроля. Активы здесь стагнируют из-за стоимости энергии. Мы рекомендуем перевод ликвидности в швейцарские частные структуры или сингапурские трасты.',
    risks: ['Энергетический дефицит', 'Налог на богатство', 'Стагнация рынков'],
    metrics: [
      { label: 'Inflation Adjusted ROI', value: '-1.5%' },
      { label: 'Regulation Load', value: 'Max' }
    ]
  },
  {
    id: 'latam',
    name: 'Latin America (Resources)',
    coords: { x: 305, y: 380 },
    status: 'critical',
    trend: 'stable',
    description: 'Ресурсный национализм и политические маятники.',
    longRead: 'Бразилия и Аргентина — рынки с огромным потенциалом, но крайне слабыми институтами защиты инвестора. Мы работаем здесь только через механизмы страхования политических рисков.',
    risks: ['Политический популизм', 'Гиперинфляция', 'Валютные барьеры'],
    metrics: [
      { label: 'Resource Wealth', value: 'Top 3' },
      { label: 'Legal Stability', value: 'Low' }
    ]
  }
];

const RiskMap: React.FC<{ onConsultClick: () => void }> = ({ onConsultClick }) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(REGIONS[1]);
  const [isScanning, setIsScanning] = useState(false);

  const handleRegionClick = (region: RegionData) => {
    setIsScanning(true);
    setTimeout(() => {
      setSelectedRegion(region);
      setIsScanning(false);
      if (window.innerWidth < 1024) {
        document.getElementById('analysis-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-20 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #444 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">Live Global Intelligence Feed // 2026</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight">Risk <span className="italic text-slate-500">Radar</span></h1>
          </div>
          <div className="lg:block text-left lg:text-right">
            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">System Status</div>
            <div className="text-lg md:text-2xl font-mono text-emerald-500">ACTIVE_SCAN_2026</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8 relative bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[400px] md:min-h-[550px] flex items-center justify-center">
            <div className="relative w-full h-full p-2 md:p-8 overflow-x-auto overflow-y-hidden lg:overflow-visible">
              <div className="min-w-[800px] lg:min-w-0 h-full">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <g fill="#222" stroke="#333" strokeWidth="0.5">
                    <path d="M100,50 L120,40 L160,45 L200,60 L240,40 L300,55 L320,100 L350,150 L310,240 L240,260 L200,280 L140,250 L100,180 L80,120 Z" />
                    <path d="M260,280 L350,265 L410,320 L380,480 L310,480 L250,380 Z" />
                    <path d="M460,70 L520,60 L580,75 L600,120 L580,180 L520,185 L460,140 Z" />
                    <path d="M455,200 L545,185 L615,245 L590,400 L500,420 L440,320 Z" />
                    <path d="M605,70 L850,55 L960,100 L940,300 L880,350 L750,380 L620,250 Z" />
                  </g>

                  {REGIONS.map((r) => (
                    <g key={r.id} className="cursor-pointer group" onClick={() => handleRegionClick(r)}>
                      <circle cx={r.coords.x} cy={r.coords.y} r="30" fill="transparent" />
                      <circle 
                        cx={r.coords.x} 
                        cy={r.coords.y} 
                        r={selectedRegion?.id === r.id ? "12" : "6"} 
                        className={`transition-all duration-500 ${
                          r.status === 'extreme' ? 'fill-red-500/30' : 
                          r.status === 'critical' ? 'fill-orange-500/30' : 'fill-emerald-500/30'
                        } ${selectedRegion?.id === r.id ? 'animate-ping' : 'opacity-0'}`} 
                      />
                      <circle 
                        cx={r.coords.x} 
                        cy={r.coords.y} 
                        r="4" 
                        className={`${
                          r.status === 'extreme' ? 'fill-red-500' : 
                          r.status === 'critical' ? 'fill-orange-500' : 'fill-emerald-400'
                        } transition-all duration-300 ${selectedRegion?.id === r.id ? 'scale-150' : ''}`} 
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          <div id="analysis-panel" className="lg:col-span-4 h-full scroll-mt-24">
            {selectedRegion && (
              <div className="bg-[#111] border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-3xl h-full flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-right duration-500">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4 leading-tight">{selectedRegion.name}</h3>
                  <p className="text-slate-400 text-sm md:text-base font-light italic leading-relaxed mb-6 border-l-2 border-emerald-500/30 pl-4">
                    {selectedRegion.description}
                  </p>
                  <div className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-8 opacity-80">
                    {selectedRegion.longRead}
                  </div>
                </div>
                <button 
                  onClick={onConsultClick}
                  className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest text-[9px] hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  Аудит активов
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskMap;
