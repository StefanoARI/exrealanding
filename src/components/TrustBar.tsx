import React from 'react';
import { Award, GraduationCap, Globe2, CheckCircle, Building2, Binary } from 'lucide-react';
import { TRUST_METRICS, TRUST_PARTNERS } from '../data/campaignData';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-900/60 border-b border-slate-800/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quantitative Proof Strip (Section 03 requirement: "228 video 360° · 10 lingue · 4 settori") */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 md:p-6 mb-8 shadow-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {TRUST_METRICS.map((metric, i) => (
              <div key={metric.label} className={`flex flex-col text-center ${i > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline justify-center gap-1">
                  <span className="text-cyan-400">{metric.value}</span>
                  <span className="text-xs font-normal text-slate-400">{metric.suffix}</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Scientific Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-8">
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ricerca Applicata</h4>
              <p className="text-xs text-slate-400 mt-0.5">Sinergia con PIN Polo Universitario Città di Prato.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <Globe2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Progetti Europei</h4>
              <p className="text-xs text-slate-400 mt-0.5">Competenze bandi Horizon 2020 ed Erasmus+.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <Binary className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Multidisciplinare</h4>
              <p className="text-xs text-slate-400 mt-0.5">Modellazione 3D, coding WebGL, neuroscienze VR.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Startup Innovativa</h4>
              <p className="text-xs text-slate-400 mt-0.5">Tecnologia proprietaria e metodo certificato.</p>
            </div>
          </div>
        </div>

        {/* Real Verified Clients & Collaborations */}
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Casi reali e collaborazioni istituzionali convalidate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {TRUST_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="px-4 py-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition flex items-center gap-2.5 text-left"
              >
                <Building2 className="w-4 h-4 text-cyan-400/80 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-200">{partner.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{partner.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
