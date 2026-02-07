
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import CaseStudies from './CaseStudies.tsx';
import Stats from './Stats.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx';
import Roadmap from './Roadmap.tsx';
import CookieConsent from './CookieConsent.tsx';
import './crmListener'; // CRM BroadcastChannel listener

const lazyWithRetry = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) =>
  lazy(() =>
    factory().catch((error) => {
      const message = String(error?.message || '');
      const isChunkError =
        message.includes('Failed to fetch dynamically imported module') ||
        message.includes('ChunkLoadError');

      if (isChunkError && typeof window !== 'undefined') {
        window.location.reload();
      }

      throw error;
    })
  );

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [view, setView] = useState<'home' | 'service' | 'blog' | 'post' | 'risk-map' | 'why-us' | 'roadmap' | 'unit-economics' | 'privacy' | 'cookies'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view, selectedServiceId, selectedPostId]);

  const navigateToHome = () => { setView('home'); setSelectedServiceId(null); setSelectedPostId(null); };
  const navigateToService = (id: string) => { setSelectedServiceId(id); setView('service'); };
  const navigateToServicesSection = () => handleSectionClick('services');
  const navigateToBlog = () => setView('blog');
  const navigateToRiskMap = () => setView('risk-map');
  const navigateToWhyUs = () => setView('why-us');
  const navigateToRoadmap = () => setView('roadmap');
  const navigateToUnitEconomics = () => setView('unit-economics');
  const navigateToPost = (id: string) => { setSelectedPostId(id); setView('post'); };
  const navigateToLegal = (type: 'privacy' | 'cookies') => setView(type);

  const handleSectionClick = (sectionId: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const LazyServiceDetail = lazyWithRetry(() => import('./ServiceDetail.tsx'));
  const LazyAIAssistant = lazyWithRetry(() => import('./AIAssistant.tsx'));
  const LazyBlog = lazyWithRetry(() => import('./Blog.tsx'));
  const LazyBlogPostDetail = lazyWithRetry(() => import('./BlogPostDetail.tsx'));
  const LazyRiskMap = lazyWithRetry(() => import('./RiskMap.tsx'));
  const LazyWhyUs = lazyWithRetry(() => import('./WhyUs.tsx'));
  const LazyUnitEconomics = lazyWithRetry(() => import('./UnitEconomics.tsx'));
  const LazyLegalPages = lazyWithRetry(() => import('./LegalPages.tsx'));

  return (
    <div className="relative min-h-screen bg-white selection:bg-emerald-500 selection:text-white antialiased">
      <Navbar 
        onHomeClick={navigateToHome} 
        onBlogClick={navigateToBlog}
        onRiskMapClick={navigateToRiskMap}
        onWhyUsClick={navigateToWhyUs}
        onRoadmapClick={navigateToRoadmap}
        onUnitEconomicsClick={navigateToUnitEconomics}
        onServicesClick={() => handleSectionClick('services')}
        onContactClick={() => handleSectionClick('contact')}
        onConsultClick={() => setIsAiOpen(true)}
        isDark={view === 'home' || view === 'risk-map' || view === 'why-us' || view === 'roadmap' || view === 'unit-economics'} 
      />
      
      <main className="relative overflow-x-hidden">
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <Hero onCtaClick={() => setIsAiOpen(true)} />
            <Stats />
            <Services onServiceClick={navigateToService} />
            <CaseStudies />
            <Contact />
          </div>
        )}
        
        {view === 'risk-map' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyRiskMap onConsultClick={() => setIsAiOpen(true)} />
          </Suspense>
        )}
        {view === 'why-us' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyWhyUs onConsultClick={() => setIsAiOpen(true)} />
          </Suspense>
        )}
        {view === 'roadmap' && <Roadmap onConsultClick={() => setIsAiOpen(true)} />}
        {view === 'unit-economics' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyUnitEconomics onConsultClick={() => setIsAiOpen(true)} />
          </Suspense>
        )}
        
        {view === 'service' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyServiceDetail 
              serviceId={selectedServiceId || ''} 
              onBack={navigateToServicesSection} 
              onConsultClick={() => setIsAiOpen(true)}
            />
          </Suspense>
        )}

        {view === 'blog' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyBlog onPostClick={navigateToPost} />
          </Suspense>
        )}
        {view === 'post' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyBlogPostDetail 
              postId={selectedPostId || ''} 
              onBack={navigateToBlog} 
              onConsultClick={() => setIsAiOpen(true)}
            />
          </Suspense>
        )}

        {view === 'privacy' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyLegalPages type="privacy" onBack={navigateToHome} />
          </Suspense>
        )}
        {view === 'cookies' && (
          <Suspense fallback={<div className="py-24 text-center">Загрузка...</div>}>
            <LazyLegalPages type="cookies" onBack={navigateToHome} />
          </Suspense>
        )}
      </main>
      
      <Footer 
        onBlogClick={navigateToBlog} 
        onHomeClick={navigateToHome} 
        onRiskMapClick={navigateToRiskMap}
        onServiceClick={navigateToService}
        onPrivacyClick={() => navigateToLegal('privacy')}
      />

      <CookieConsent />

      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-black text-white p-5 md:p-6 rounded-full shadow-2xl hover:scale-105 transition-all z-[150] flex items-center gap-3 border border-white/10"
      >
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 border-2 border-emerald-500 rotate-45 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px]">AI</div>
        </div>
        <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest">AI Стратег</span>
      </button>

      {isAiOpen && (
        <Suspense fallback={null}>
          <LazyAIAssistant onClose={() => setIsAiOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
