import React from 'react';
import { TrendingUp, HelpCircle, Shield, Globe, Sparkles, Check } from 'lucide-react';
import { BENEFITS_LIST } from '../data/campaignData';

export const BenefitsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <HelpCircle className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Check className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="benefits" className="py-16 md:py-24 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title explicitly mandated in Section 07: "Cosa puoi ottenere" */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Valore B2B Misurabile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cosa puoi ottenere
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Non semplici render 3D: strumenti commerciali e formativi che generano un impatto economico diretto sui tuoi margini e sui tempi di trattativa.
          </p>
        </div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_LIST.map((benefit, idx) => (
            <div
              key={benefit.id}
              className={`rounded-xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {benefit.title}
                </h3>
                <h4 className="text-xs font-semibold text-cyan-400 mb-3">
                  {benefit.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 -mx-6 -mb-6 p-4 rounded-b-xl">
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{benefit.metric}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
