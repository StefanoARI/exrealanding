import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Shield, ExternalLink, ArrowUp } from 'lucide-react';
import { PrivacyModal } from './CookieConsentBanner';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Origin */}
          <div className="md:col-span-2 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => smoothScrollTo(0, 950)}
                className="cursor-pointer inline-block hover:opacity-80 transition-opacity text-left"
              >
                <img
                  src="/images/exrea-logo.png"
                  alt="EXREA"
                  className="h-7 w-auto object-contain brightness-110"
                />
              </button>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              EXREA S.r.l. è una startup innovativa specializzata in configuratori 3D real-time, realtà virtuale, realtà aumentata e video 360° per aziende, fiere ed enti.
            </p>
            <div className="text-[11px] text-slate-400">
              Nata dalla ricerca applicata con il <strong>PIN – Polo Universitario Città di Prato</strong>.
            </div>
          </div>

          {/* Col 2: Servizi & Soluzioni */}
          <div className="space-y-2 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soluzioni B2B</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Configuratori 3D WebGL</li>
              <li>Simulazioni di Formazione VR</li>
              <li>Video 360° & Tour Immersivi</li>
              <li>Esperienze Interattive per Fiere</li>
              <li>Digital Twin di Macchinari</li>
            </ul>
          </div>

          {/* Col 3: Contatti Diretti */}
          <div className="space-y-2 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contatti Commerciali</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:3331075324" className="hover:text-white transition">
                  +39 333 107 5324
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="https://wa.me/message/ORJELDGPMZSUG1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>WhatsApp Commerciale</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:info@exrea.it" className="hover:text-white transition">
                  info@exrea.it
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Piazza Ciardi 25, Prato (PO)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 EXREA S.r.l. · P.IVA 02498700974 · Startup Innovativa
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-slate-400 hover:text-cyan-400 transition underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-slate-400 hover:text-cyan-400 transition underline cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => smoothScrollTo(0, 1050)}
              className="text-slate-400 hover:text-cyan-300 transition flex items-center gap-1 cursor-pointer"
            >
              <span>Torna in cima</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" />
            </button>
            <a
              href="https://www.exrea.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              <span>Sito Istituzionale</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </footer>
  );
};
