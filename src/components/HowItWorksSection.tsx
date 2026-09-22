import React from 'react';
import { Clock, CheckCircle2, MessageSquare, Compass, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/campaignData';

interface HowItWorksSectionProps {
  onBookDemoClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onBookDemoClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#0c0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Processo Trasparente In 3 Step</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Come lavoriamo insieme
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Nessun processo infinito o burocrazia. Abbiamo standardizzato il flusso in tre passaggi chiari per ridurre a zero la complessità per la tua azienda.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-emerald-500/20 -z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all relative z-10 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-cyan-400/90 font-mono">
                    {step.number}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-medium text-cyan-300 mb-2">
                  {step.timing}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 -mx-7 -mb-7 p-4 rounded-b-2xl">
                <span className="text-[11px] text-slate-400 font-medium block">
                  Output: <strong className="text-slate-200">{step.deliverable}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fast Action Box */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookDemoClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition shadow-lg shadow-cyan-950/40 cursor-pointer active:scale-[0.98]"
          >
            <span>Inizia dal passo 01: fissa i primi 20 minuti</span>
          </button>
        </div>

      </div>
    </section>
  );
};
