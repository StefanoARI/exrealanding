import React, { useState } from 'react';
import { Calendar, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { CampaignVertical } from '../types';

interface HeaderProps {
  currentVertical?: CampaignVertical;
  onSelectVertical?: (vertical: CampaignVertical) => void;
  onBookDemoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookDemoClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0f17]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo EXREA */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 focus:outline-none" aria-label="EXREA Home">
              <img
                src="/images/exrea-logo.png"
                alt="EXREA"
                className="h-8 md:h-9 w-auto object-contain brightness-110"
                onError={(e) => {
                  // Fallback to high-contrast svg text if image blocked
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">EX<span className="text-cyan-400">REA</span></span>
                <span className="text-[10px] text-slate-400 border border-slate-700 px-1.5 py-0.5 rounded">B2B</span>
              </div>
            </a>
          </div>

          {/* Reduced Navigation Menu as mandated in Section 06 */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition"
            >
              Come funziona
            </button>
            <button
              onClick={() => scrollToSection('demo-section')}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Demo</span>
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition"
            >
              Casi reali
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition"
            >
              FAQ
            </button>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:3331075324"
              className="text-xs text-slate-400 hover:text-slate-200 hidden xl:inline-flex items-center gap-1"
            >
              <span>Info dirette:</span>
              <strong className="text-slate-300 font-medium">+39 333 107 5324</strong>
            </a>
            <button
              onClick={onBookDemoClick}
              id="header-cta-button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition shadow-lg shadow-cyan-950/40"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota una demo</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onBookDemoClick}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition"
            >
              Demo (20 min)
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md focus:outline-none"
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-200 pt-2">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2.5 px-3 rounded hover:bg-slate-800 text-slate-300"
            >
              Come funziona
            </button>
            <button
              onClick={() => scrollToSection('demo-section')}
              className="text-left py-2.5 px-3 rounded hover:bg-slate-800 text-cyan-400 font-medium flex items-center justify-between"
            >
              <span>Demo interattive 3D</span>
              <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Provalo</span>
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-left py-2.5 px-3 rounded hover:bg-slate-800 text-slate-300"
            >
              Casi studio (ASSOMAC, Podere Forte)
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2.5 px-3 rounded hover:bg-slate-800 text-slate-300"
            >
              Domande frequenti (FAQ)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemoClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota demo di 20 min</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-slate-400">
              Gratuita · Senza impegno · Risposta entro 24h
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
