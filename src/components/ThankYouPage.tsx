import React from 'react';
import { CheckCircle, Calendar, Sparkles, ArrowRight, MessageSquare, Phone, Download, RotateCcw } from 'lucide-react';
import { LeadFormData } from '../types';

interface ThankYouPageProps {
  leadData: LeadFormData;
  onViewDemosClick: () => void;
  onViewCaseStudiesClick: () => void;
  onReset: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  leadData,
  onViewDemosClick,
  onViewCaseStudiesClick,
  onReset,
}) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-center space-y-8 animate-in fade-in zoom-in-95">
        
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center shadow-xl shadow-emerald-950/50">
          <CheckCircle className="w-10 h-10 text-emerald-400" />
        </div>

        {/* Section 14 Mandated Header */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold mb-3 border border-slate-700">
            Fase: Lead Confermato · Demo in Programmazione
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Richiesta ricevuta.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto">
            Ti ricontatteremo entro <strong className="text-cyan-300 font-semibold">24 ore lavorative</strong>. Nel frattempo puoi vedere alcune delle nostre esperienze interattive.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-left text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-slate-200">Riepilogo della richiesta</span>
            <span className="text-[11px] text-emerald-400 font-medium">Inoltrato al CRM EXREA</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-slate-300">
            <div>
              <span className="text-slate-500 block">Referente:</span>
              <strong className="text-white">{leadData.fullName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Azienda:</span>
              <strong className="text-white">{leadData.companyName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Email di contatto:</span>
              <span className="text-slate-300 font-mono">{leadData.businessEmail}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Obiettivo principale:</span>
              <span className="text-cyan-300 font-medium">{leadData.primaryObjective}</span>
            </div>
          </div>

          {leadData.selectedDate && leadData.selectedTimeSlot && (
            <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center gap-2 text-cyan-400">
              <Calendar className="w-4 h-4" />
              <span>Orario selezionato: <strong>{leadData.selectedDate}</strong> alle <strong>{leadData.selectedTimeSlot}</strong></span>
            </div>
          )}
        </div>

        {/* Next Steps Box */}
        <div className="p-4 rounded-xl bg-slate-850 border border-slate-700/60 text-left text-xs space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Cosa succede adesso:</span>
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-slate-300">
            <li>Un nostro ingegnere 3D e responsabile commerciale analizza il settore di <strong>{leadData.companyName}</strong>.</li>
            <li>Riceverai la conferma con link diretto per la call conoscitiva di 20 minuti.</li>
            <li>Durante la demo ti mostreremo in anteprima prototipi pertinenti e stime di tempi/costi.</li>
          </ol>
        </div>

        {/* Secondary Conversions (Section 14: "La thank-you page deve generare una seconda conversione") */}
        <div className="space-y-3 pt-2">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
            Approfondisci prima della call:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={onViewDemosClick}
              className="py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2 shadow"
            >
              <span>Guarda le altre demo 3D</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewCaseStudiesClick}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Leggi i casi studio reali</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Urgent Contact & Reset */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span>Hai un'urgenza per una fiera imminente?</span>
            <a
              href="tel:3331075324"
              className="text-cyan-400 hover:underline font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+39 333 107 5324</span>
            </a>
          </div>

          <button
            onClick={onReset}
            className="text-slate-400 hover:text-white flex items-center gap-1 text-xs"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Torna alla landing page</span>
          </button>
        </div>

      </div>
    </div>
  );
};
