import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, FileText, Check } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('exrea_cookie_consent');
    if (saved) {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('exrea_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setConsentGiven(true);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('exrea_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setConsentGiven(true);
  };

  if (consentGiven) {
    return (
      <>
        {/* Subtle Privacy Link in Footer triggers modal */}
        {showPrivacyModal && (
          <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
        )}
      </>
    );
  }

  return (
    <>
      <div className="fixed bottom-0 sm:bottom-4 sm:right-4 sm:max-w-md w-full z-50 p-4 sm:p-0">
        <div className="bg-slate-900 border border-slate-700/90 rounded-2xl p-5 shadow-2xl backdrop-blur-md text-left text-xs space-y-3">
          <div className="flex items-center gap-2 text-white font-bold">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Informativa sui Cookie & Privacy (GDPR)</span>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Utilizziamo cookie tecnici e analitici aggregati per misurare l'efficacia delle campagne advertising e migliorare le prestazioni dei nostri configuratori 3D.
          </p>

          <div className="flex items-center gap-2 pt-1 text-[11px]">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Leggi Privacy & Cookie Policy</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleAcceptNecessary}
              className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition text-center"
            >
              Solo necessari
            </button>
            <button
              onClick={handleAcceptAll}
              className="py-2 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition text-center shadow"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </>
  );
};

export const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl max-h-[85vh] overflow-y-auto text-left text-xs space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
          aria-label="Chiudi"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="border-b border-slate-800 pb-3">
          <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">Conforme GDPR UE 2016/679</span>
          <h3 className="text-xl font-black text-white mt-1">Informativa Privacy & Trattamento Dati</h3>
        </div>

        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            <strong>Titolare del Trattamento:</strong> EXREA S.r.l. — Startup Innovativa collegata con il Polo Universitario Città di Prato (PIN). Email di contatto: privacy@exrea.it.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">1. Finalità del Trattamento</h4>
          <p>
            I dati forniti tramite il form di prenotazione demo (Nome, Cognome, Email Aziendale, Telefono, Azienda, Obiettivo) vengono trattati esclusivamente per consentire al team commerciale e tecnico di ricontattarti, pianificare la sessione dimostrativa di 20 minuti e formulare una proposta su misura.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">2. Misurazione Conversioni & Tracciamento Campagne</h4>
          <p>
            In conformità alle direttive Google Ads ed Enhanced Conversions 2026, nessun dato sensibile in chiaro viene condiviso a terzi senza crittografia one-way hash (SHA-256). Il tracciamento analitico è finalizzato unicamente alla corretta attribuzione dei lead generati dalle campagne pubblicitarie B2B.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">3. Diritti dell'Interessato</h4>
          <p>
            Puoi richiedere in qualunque momento l'accesso, la modifica o la cancellazione immediata dei tuoi dati scrivendo a privacy@exrea.it o contattando il numero telefonico ufficiale +39 333 107 5324.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs"
          >
            Ho compreso
          </button>
        </div>
      </div>
    </div>
  );
};
