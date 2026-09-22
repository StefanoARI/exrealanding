import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onBookDemoClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onBookDemoClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const formElement = document.getElementById('booking-form') || document.getElementById('direct-booking-form');
      
      // If user has scrolled down past hero (e.g. 400px) but hasn't reached the form yet
      if (scrollY > 350) {
        if (formElement) {
          const formRect = formElement.getBoundingClientRect();
          // Hide when the form is visible in the viewport so it doesn't obstruct inputs
          if (formRect.top <= window.innerHeight && formRect.bottom >= 0) {
            setIsVisible(false);
            return;
          }
        }
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl animate-in slide-in-from-bottom-2">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="text-left">
          <div className="text-xs font-bold text-white">Call conoscitiva 20 min</div>
          <div className="text-[10px] text-emerald-400">Gratuita · Senza impegno</div>
        </div>

        <button
          onClick={onBookDemoClick}
          className="py-2.5 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 transition active:scale-[0.98]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Prenota una demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
