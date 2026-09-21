import React, { useState } from 'react';
import { Building, ArrowRight, CheckCircle, ExternalLink, X, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../data/campaignData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onBookDemoClick: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onBookDemoClick }) => {
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-[#0c0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Progetti Conclusi & Verificati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Casi studio reali
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Nessuna promessa astratta. Ecco come abbiamo risolto sfide concrete di vendita, formazione e presenza internazionale.
          </p>
        </div>

        {/* 3 Case Studies Grid (Exact schema from Section 08) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-xl"
            >
              <div>
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-white border border-slate-700">
                    {item.client}
                  </div>
                  <div className="absolute bottom-2.5 right-3 bg-cyan-950/90 border border-cyan-800/80 text-cyan-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                    {item.technology.split('·')[0]}
                  </div>
                </div>

                {/* Content body adhering to Section 08 schema */}
                <div className="p-6 space-y-4 text-left">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Settore: {item.sector}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-0.5">
                      {item.client}
                    </h3>
                  </div>

                  {/* Schema point 1: Problema */}
                  <div className="text-xs">
                    <span className="font-bold text-rose-400 uppercase tracking-wide block mb-1">
                      Problema
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* Schema point 2: Cosa abbiamo realizzato (Soluzione) */}
                  <div className="text-xs">
                    <span className="font-bold text-cyan-400 uppercase tracking-wide block mb-1">
                      Cosa abbiamo realizzato
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Schema point 3: Tecnologia */}
                  <div className="text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wide block mb-1">
                      Tecnologia impiegata
                    </span>
                    <span className="inline-block bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded border border-slate-700 font-mono text-[11px]">
                      {item.technology}
                    </span>
                  </div>

                  {/* Schema point 4: Risultato & Dato/prova */}
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-xs">
                    <span className="font-bold text-emerald-400 uppercase tracking-wide block mb-0.5">
                      Risultato & Prova
                    </span>
                    <p className="text-slate-200 font-medium mb-1.5">
                      {item.result}
                    </p>
                    <div className="text-emerald-300 font-bold flex items-center gap-1.5 text-[11px]">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.proofStat}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schema point 5: CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCaseModal(item)}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition flex items-center justify-center gap-1.5"
                >
                  <span>Guarda la scheda completa del progetto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed case study view */}
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-slate-950">
                <img
                  src={selectedCaseModal.image}
                  alt={selectedCaseModal.client}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <span className="text-xs text-cyan-400 font-semibold">{selectedCaseModal.sector}</span>
                  <h3 className="text-2xl font-black text-white">{selectedCaseModal.client}</h3>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-xs italic text-slate-300 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-relaxed">"{selectedCaseModal.fullQuote}"</p>
                    <span className="block mt-2 font-bold not-italic text-white">— {selectedCaseModal.testimonialAuthor}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <span className="font-bold text-slate-400 uppercase block mb-1">Sfida Iniziale</span>
                    <p className="text-slate-300">{selectedCaseModal.problem}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50">
                    <span className="font-bold text-emerald-400 uppercase block mb-1">Impatto Raggiunto</span>
                    <p className="text-slate-200 font-medium">{selectedCaseModal.proofStat}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">Vuoi replicare questo risultato?</span>
                  <button
                    onClick={() => {
                      setSelectedCaseModal(null);
                      onBookDemoClick();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition"
                  >
                    Prenota demo per il tuo settore
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
