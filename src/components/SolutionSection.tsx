import React from 'react';
import { Target, Monitor, Glasses, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_LIST } from '../data/campaignData';

interface SolutionSectionProps {
  onExploreDemoClick: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onExploreDemoClick }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sol_1':
        return <Monitor className="w-6 h-6 text-cyan-400" />;
      case 'sol_2':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'sol_3':
        return <Glasses className="w-6 h-6 text-emerald-400" />;
      case 'sol_4':
        return <Target className="w-6 h-6 text-purple-400" />;
      default:
        return <Target className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="solution" className="py-16 md:py-24 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>L'Approccio EXREA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            La tecnologia viene dopo. Prima viene l'obiettivo.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Non ti vendiamo una tecnologia fine a se stessa. Scegliamo e progettiamo lo strumento digitale unicamente in funzione del risultato che vuoi raggiungere: vendere, spiegare, formare o coinvolgere.
          </p>
        </div>

        {/* 4 Outcome-Oriented Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_LIST.map((sol) => (
            <div
              key={sol.id}
              className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(sol.id)}
                  </div>
                  <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded">
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {sol.title}
                </h3>

                {/* Primary Objective outcome */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{sol.goal}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                  <span>Pronto all'uso aziendale</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onExploreDemoClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            <span>Guarda come queste soluzioni prendono vita nelle demo interattive</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
