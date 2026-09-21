import React, { useState } from 'react';
import { Activity, CheckCircle2, ChevronUp, ChevronDown, Database, Sliders, Shield, Tag } from 'lucide-react';
import { TrackingEvent, UtmParameters } from '../types';

interface CampaignDebuggerProps {
  utm: UtmParameters;
  events: TrackingEvent[];
  crmStatus: string;
  onUpdateUtm: (newUtm: Partial<UtmParameters>) => void;
}

export const CampaignDebugger: React.FC<CampaignDebuggerProps> = ({
  utm,
  events,
  crmStatus,
  onUpdateUtm,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] font-medium text-slate-300 hover:text-white shadow-xl hover:border-cyan-500/60 backdrop-blur transition group"
          title="Apri Funnel & Tracking Inspector (Sec. 16-20)"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Funnel & Tracking Inspector</span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
        </button>
      ) : (
        <div className="w-[360px] sm:w-[420px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 text-xs text-left animate-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white text-xs">Funnel & Tracking Monitor (2026)</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-3 max-h-[350px] overflow-y-auto">
            {/* CRM Status Section (Section 16) */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Database className="w-3 h-3 text-cyan-400" />
                  <span>Stato Funnel CRM (Sec. 16)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {crmStatus}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-1">
                <span>Funnel: New Lead → Contacted → Qualified → Demo Booked</span>
              </div>
            </div>

            {/* UTM Parameters (Section 18) */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Tag className="w-3 h-3 text-amber-400" />
                <span>Parametri UTM Rilevati (Sec. 18)</span>
              </span>
              <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                <div className="text-slate-400">source: <strong className="text-slate-200">{utm.utm_source}</strong></div>
                <div className="text-slate-400">medium: <strong className="text-slate-200">{utm.utm_medium}</strong></div>
                <div className="text-slate-400 col-span-2 truncate">campaign: <strong className="text-cyan-300">{utm.utm_campaign}</strong></div>
                <div className="text-slate-400">gclid: <strong className="text-emerald-400">{utm.gclid || 'simulated_gclid_2026'}</strong></div>
                <div className="text-slate-400">term: <strong className="text-slate-300">{utm.utm_term}</strong></div>
              </div>
            </div>

            {/* Live GTM / GA4 Events Log (Section 17) */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>Log Eventi GA4 / GTM (Sec. 17)</span>
                </span>
                <span className="text-[10px] text-slate-400">{events.length} eventi</span>
              </div>

              <div className="space-y-1 text-[10px] font-mono max-h-[120px] overflow-y-auto">
                {events.slice(-5).reverse().map((ev) => (
                  <div key={ev.id} className="flex items-center justify-between p-1 bg-slate-900 rounded border border-slate-800">
                    <span className="text-cyan-300 font-semibold">{ev.eventName}</span>
                    <span className="text-slate-500 text-[9px]">{ev.timestamp.split('T')[1]?.slice(0, 8)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Conversions Check (Section 20) */}
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-cyan-400" />
                <span>Google Enhanced Conversions (SHA-256)</span>
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Attivo</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
