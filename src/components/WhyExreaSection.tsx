import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Globe, Cpu } from 'lucide-react';
import { WHY_EXREA_PILLARS } from '../data/campaignData';

export const WhyExreaSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pillar_ricerca':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'pillar_esperienza':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'pillar_progetti_ue':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'pillar_sviluppo':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-exrea" className="py-16 md:py-24 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as demanded in Section 09 */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credibilità & Metodo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologia, ricerca e sviluppo applicati ai progetti reali.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Perché affidare il tuo progetto a EXREA? Perché uniamo il rigore metodologico della ricerca universitaria alla rapidità esecutiva di una software factory specializzata.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_EXREA_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {pillar.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <h4 className="text-xs font-semibold text-cyan-400 mb-3">
                  {pillar.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                <span>Standard qualitativo certificato</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
