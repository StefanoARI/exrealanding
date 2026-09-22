import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Check, CheckCircle2, ChevronRight, Clock, ShieldCheck, 
  Sparkles, ArrowRight, Zap, AlertTriangle, Layers, Rotate3d, 
  Building2, Phone, Send, CheckCircle, X, MessageSquare, Award
} from 'lucide-react';
import { LeadFormData } from '../types';

interface DirectResponseLandingProps {
  onBookDemoClick: () => void;
  onSubmitLead: (data: LeadFormData) => void;
}

export const DirectResponseLanding: React.FC<DirectResponseLandingProps> = ({
  onBookDemoClick,
  onSubmitLead,
}) => {
  const [activePreview, setActivePreview] = useState<'car' | 'assomac' | 'chair'>('car');
  
  // Fast form state
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    primaryObjective: 'Vendere',
    selectedDate: '2026-09-24',
    selectedTimeSlot: '11:00',
    consentPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const previewItems = {
    car: {
      title: 'Configuratore Automotive 3D WebGL',
      badge: '3D Real-Time da Browser',
      img: '/images/demo-car.png',
      caption: 'Configurazione live carrozzeria, materiali PBR e rotazione a 360° senza installare app.',
      tech: '60 FPS · Zero installazione',
    },
    assomac: {
      title: 'Esposizione Macchinari Industriali ASSOMAC',
      badge: 'Fiera Virtuale B2B',
      img: '/images/assomac.png',
      caption: 'Impianti industriali pesanti esposti in tutto il mondo senza movimentazione fisica.',
      tech: 'Simac Tanning Tech · Digital Twin',
    },
    chair: {
      title: 'Configuratore Design, Arredo & Contract',
      badge: 'Personalizzazione Materiali',
      img: '/images/demo-chair.png',
      caption: 'Scelta tessuti, legni, finiture e calcolo preventivo istantaneo per buyer e architetti.',
      tech: 'Fruibile da smartphone e PC',
    },
  };

  const currentShowcase = previewItems[activePreview];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail || !formData.phoneNumber || !formData.companyName) {
      alert('Per favore compila tutti i campi obbligatori prima di inviare.');
      return;
    }
    if (!formData.consentPrivacy) {
      alert('Per favore accetta il trattamento dei dati personali.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitLead(formData);
    }, 600);
  };

  return (
    <div className="bg-[#08090d] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO - Direct Response (Inspired by Page 1 of PDF) */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
        
        {/* Subtle Cyan Atmosphere Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        {/* Small top punch badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-semibold mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Configuratori 3D & VR Nativi per Imprese B2B</span>
        </motion.div>

        {/* Huge High-Impact Headline with Accent Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] max-w-4xl mx-auto"
        >
          Smetti di <span className="text-cyan-400">sprecare budget</span> in agenzie e rendering 3D
          <span className="block mt-2 font-extrabold text-slate-200">
            che non hanno mai portato un cliente né vendite reali.
          </span>
        </motion.h1>

        {/* Subtitle with Real Credibility */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Affidati al Reparto 3D & Virtual Reality di EXREA: l'unica realtà nata dalla Ricerca Applicata con il Polo Universitario di Prato con <strong className="text-slate-200">228+ esperienze prodotte</strong> per aziende B2B, a una frazione del costo di prototipazioni fisiche.
        </motion.p>

        {/* Primary CTA Button (Style matching PDF Page 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookDemoClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition shadow-2xl shadow-cyan-500/30 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Candidati Adesso per una Demo Gratuita</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <p className="mt-2 text-xs text-slate-400">
          Risposta garantita entro 24h · Sessione conoscitiva di 20 min senza vincoli
        </p>

        {/* Showcase Device Frame (Matching PDF Page 1 Hero Visual) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 relative mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-2 sm:p-3 border border-slate-700/80 shadow-2xl"
        >
          <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[16/10] border border-slate-800/80 group">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={currentShowcase.img}
                src={currentShowcase.img}
                alt={currentShowcase.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </AnimatePresence>
            
            {/* Dark gradient overlay & badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-between p-4 sm:p-6 text-left">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-700/60 shadow">
                  <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{currentShowcase.badge}</span>
                </span>
                <span className="text-[11px] text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                  {currentShowcase.tech}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">
                  {currentShowcase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {currentShowcase.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Quick tab switcher below showcase */}
          <div className="grid grid-cols-3 gap-2 mt-3 pt-1">
            <button
              onClick={() => setActivePreview('car')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition border cursor-pointer ${
                activePreview === 'car'
                  ? 'bg-cyan-950/70 text-cyan-300 border-cyan-500/70 shadow'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              1. Automotive 3D
            </button>
            <button
              onClick={() => setActivePreview('assomac')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition border cursor-pointer ${
                activePreview === 'assomac'
                  ? 'bg-cyan-950/70 text-cyan-300 border-cyan-500/70 shadow'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              2. Macchine ASSOMAC
            </button>
            <button
              onClick={() => setActivePreview('chair')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition border cursor-pointer ${
                activePreview === 'chair'
                  ? 'bg-cyan-950/70 text-cyan-300 border-cyan-500/70 shadow'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              3. Design & Arredo
            </button>
          </div>
        </motion.div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: PROBLEM & CHAT MOCKUP (Inspired by Page 1 bottom) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              È finita l'era delle fiere e dei rendering <span className="text-cyan-400">inutilmente costosi</span> e che non portano risultati.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: 3 Realities (Like PDF Page 1) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 italic">
                  "Ti faremo cataloghi PDF e rendering statici... dicevano... e poi?"
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Il prospect apre il PDF da 40MB sul telefono, non riesce a capire gli ingombri tridimensionali né le finiture e dopo 10 secondi chiude il file senza contattarti.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 italic">
                  "Spediamo i macchinari pesanti in fiera internazionale per farli vedere..."
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Costi folli di logistica, assicurazione e stand da 20.000€ per mostrare un solo impianto, mentre tutti gli altri 15 modelli a catalogo rimangono invisibili.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 italic">
                  "Svilupperemo un'applicazione 3D proprietaria da scaricare..."
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Nessun buyer industriale o architetto ha il tempo, la voglia o i permessi IT aziendali per scaricare un'app da 500MB per valutare un fornitore.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookDemoClick}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Candidati Adesso alla Soluzione EXREA</span>
                </button>
              </div>

            </div>

            {/* Right Column: Realistic WhatsApp/Chat Mockup (Like PDF Page 1) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 border border-slate-700/80 p-4 shadow-2xl">
                
                {/* Phone Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-cyan-400 border border-slate-700">
                      B2B
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Direttore Acquisti Estero</div>
                      <div className="text-[10px] text-emerald-400">Online</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">Trattativa in corso</span>
                </div>

                {/* Chat Bubbles */}
                <div className="py-4 space-y-3 text-xs text-left">
                  {/* Incoming Buyer Msg */}
                  <div className="bg-slate-800/90 text-slate-200 p-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-slate-700/60">
                    <p>Buongiorno! Abbiamo visto la scheda del vostro impianto industriale. È possibile configurare le misure e vederlo in 3D prima di confermare l'ordine?</p>
                    <span className="block text-[9px] text-slate-400 text-right mt-1">11:04</span>
                  </div>

                  {/* Outgoing Supplier Msg (Traditional error) */}
                  <div className="ml-auto bg-slate-800/60 text-slate-300 p-3 rounded-2xl rounded-tr-sm max-w-[90%] border border-slate-700/40">
                    <p className="text-slate-400 italic">Purtroppo abbiamo solo il catalogo PDF statico di 70 pagine con schemi 2D. Possiamo organizzarvi una visita in sede tra 3 settimane?</p>
                    <span className="block text-[9px] text-slate-400 text-right mt-1">11:15</span>
                  </div>

                  {/* Incoming Buyer fatal reply */}
                  <div className="bg-cyan-950/80 text-cyan-100 p-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-cyan-800/60">
                    <p>Capisco. Il vostro competitor tedesco ci ha appena inviato un link 3D WebGL dove possiamo configurarlo live dal telefono in 10 secondi. Procediamo con loro.</p>
                    <span className="block text-[9px] text-cyan-400 text-right mt-1">11:19</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-center text-[11px] text-slate-400">
                  ⚠️ Senza 3D Real-Time, perdi trattative prima ancora di iniziare.
                </div>

              </div>

              {/* Bottom callout (Like PDF Page 1 bottom) */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-sm font-bold text-white">
                  Tante Promesse e <span className="text-cyan-400">Zero Risultati</span>. Tanti Soldi spesi e Zero Macchinari Venduti.
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Questo è stato il mercato tradizionale fino a oggi. EXREA trasforma invece ogni prodotto in uno strumento di vendita immediato.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: COMPARISON TABLE (Inspired by Page 2 of PDF)       */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ma <span className="text-cyan-400">EXREA</span> è diversa.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Perché non siamo la solita agenzia grafica che promette rendering e sparisce. Noi siamo una software factory specializzata, con sede in Italia e tecnologia WebGL proprietaria.
        </p>

        {/* Comparison Box (Exact match to 'Theory Holding vs Loro' in PDF) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card EXREA */}
          <div className="rounded-2xl bg-slate-900 border-2 border-cyan-500/80 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-cyan-400">Il Nostro Metodo</span>
                <h3 className="text-2xl font-black text-white">EXREA S.r.l.</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
                Certificato B2B
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Sede & R&D in Italia:</strong> Nati dalla ricerca con il PIN Polo Universitario Città di Prato.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>228+ Esperienze 3D e 360° prodotte</strong> e testate con buyer in tutto il mondo in 10 lingue.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Zero installazioni:</strong> Configuratore WebGL fruibile all'istante da qualsiasi browser su smartphone e PC.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Integrazione Diretta:</strong> Si collega al tuo sito, al listino prezzi e al tuo CRM di vendita.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Prototipo di Validazione:</strong> Valutiamo insieme i tuoi file CAD in 20 min prima di farti spendere budget.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={onBookDemoClick}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition text-center shadow"
              >
                Candidati Adesso con EXREA
              </button>
            </div>
          </div>

          {/* Card Competitors / Traditional */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 text-slate-400">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Modello Obsoleto</span>
                <h3 className="text-2xl font-bold text-slate-300">Studi Grafici & Altri</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800">
                Tradizionale
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Sede improvvisata</strong> o progetti subappaltati all'estero a freelancer generici.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Solo rendering statici 2D</strong> o video passivi non interattivi da brochure.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Richiedono app pesanti</strong> o software di 1GB da scaricare che nessuno installerà mai.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>File 3D isolati</strong> che non generano lead, né preventivi, né statistiche d'uso.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Contratti a scatola chiusa</strong> senza garanzia di funzionamento reale sui dispositivi dei clienti.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <div className="py-3 px-4 rounded-xl text-xs text-center text-slate-400 bg-slate-900 border border-slate-800">
                Spese non quantificabili e zero garanzie sui risultati
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: CREDIBILITY & SIGNATURE (Inspired by Page 2 bottom) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perché <span className="text-cyan-400">EXREA</span> è l'unica realtà in grado di garantirti questi risultati?
          </h2>

          <div className="mt-10 p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[90px] pointer-events-none rounded-full" />
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
              "È semplice. Qui non affidi la tua immagine commerciale a creativi che non hanno mai messo piede in un reparto produttivo né hanno mai visto una trattativa d'esportazione con un buyer industriale. I nostri configuratori 3D e simulatori VR nascono dalla ricerca sul campo, sviluppati a stretto contatto con associazioni come <strong>ASSOMAC</strong> e con il rigore scientifico del <strong>PIN – Polo Universitario Città di Prato</strong>. Non vendiamo slogan: ti mostriamo esattamente come funzionerà il tuo prodotto in tempo reale prima ancora di avviare il progetto definitivo."
            </p>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-800 flex-wrap gap-4">
              <div>
                <div className="text-sm font-bold text-white">Direzione Tecnica & R&D</div>
                <div className="text-xs text-cyan-400">EXREA S.r.l. · Startup Innovativa</div>
              </div>
              
              {/* Digital signature simulation */}
              <div className="font-serif italic text-xl text-slate-300 tracking-wider">
                Exrea Technologies
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: 3 PROVEN MARKETS (Inspired by Page 3 of PDF)        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">Metriche Convalidate</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Risultati reali nei mercati più complessi
          </h2>
        </div>

        <div className="space-y-6">
          
          {/* Market 1: Manifattura */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400">
                <span className="w-6 h-6 rounded bg-cyan-950 border border-cyan-800 flex items-center justify-center text-white">1</span>
                <span>Nel mercato dei Macchinari & Manifattura Industriale</span>
              </div>
              <h3 className="text-xl font-bold text-white">ASSOMAC · Fiera Simac Tanning Tech</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Esposizione digitale di macchinari industriali pesanti in fiere mondiali senza costi di movimentazione merci o noleggio gru. Oltre 10 paesi esteri collegati in simultanea da browser.
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[160px]">
              <div className="text-2xl font-black text-cyan-400">-85%</div>
              <div className="text-[11px] text-slate-400">Costi logistici fiera</div>
            </div>
          </div>

          {/* Market 2: Design & Arredo */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400">
                <span className="w-6 h-6 rounded bg-cyan-950 border border-cyan-800 flex items-center justify-center text-white">2</span>
                <span>Nel mercato del Design, Arredo & Contract</span>
              </div>
              <h3 className="text-xl font-bold text-white">Configuratori Materiali PBR & Finiture Live</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Architetti e buyer B2B personalizzano tessuti, legni, finiture e ottengono scheda tecnica con preventivo istantaneo senza campionari cartacei.
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[160px]">
              <div className="text-2xl font-black text-cyan-400">+340%</div>
              <div className="text-[11px] text-slate-400">Tempo permanenza buyer</div>
            </div>
          </div>

          {/* Market 3: Formazione VR */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400">
                <span className="w-6 h-6 rounded bg-cyan-950 border border-cyan-800 flex items-center justify-center text-white">3</span>
                <span>Nel mercato della Formazione & Training HSE</span>
              </div>
              <h3 className="text-xl font-bold text-white">VRCare & ITS Academy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Simulazioni immersive e digital twin per addestrare operatori su procedure complesse e di sicurezza senza fermo macchina e con memorizzazione 4 volte superiore.
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[160px]">
              <div className="text-2xl font-black text-cyan-400">+80%</div>
              <div className="text-[11px] text-slate-400">Ritenzione procedure</div>
            </div>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: DELIVERABLES STACK (Inspired by Page 3 & 4 of PDF) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Ma ora ti starai chiedendo...</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            Come andremo a farti ottenere i risultati che ti promettiamo?
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Ecco cosa otterrai lavorando con il team EXREA:
          </p>

          {/* Numbered 6-Item Deliverable Stack (matching PDF Page 4 layout) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">1</span>
              <div>
                <h4 className="text-base font-bold text-white">Una Nuova Strategia 3D di Vendita</h4>
                <p className="text-xs text-slate-400 mt-1">Analisi del catalogo, individuazione dei colli di bottiglia commerciali e mappa dei modelli a più alta conversione.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">2</span>
              <div>
                <h4 className="text-base font-bold text-white">Modellazione PBR & Ottimizzazione CAD</h4>
                <p className="text-xs text-slate-400 mt-1">Trasformiamo i tuoi file industriali (STEP, IGES, OBJ) in mesh leggere WebGL ultra-rapide e fotorealistiche a 60 FPS.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">3</span>
              <div>
                <h4 className="text-base font-bold text-white">Configuratore WebGL Integrato nel Sito</h4>
                <p className="text-xs text-slate-400 mt-1">Integrazione in 1 riga di codice nel tuo sito aziendale, senza dover cambiare hosting o rifare l'infrastruttura.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">4</span>
              <div>
                <h4 className="text-base font-bold text-white">Setup Interattivo per Fiere ed Eventi</h4>
                <p className="text-xs text-slate-400 mt-1">Modalità stand per touchscreen, tablet offline e visori VR per stupire buyer e delegazioni internazionali.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">5</span>
              <div>
                <h4 className="text-base font-bold text-white">Generatore Preventivi & Connessione CRM</h4>
                <p className="text-xs text-slate-400 mt-1">Ogni configurazione del cliente genera una distinta tecnica e notifica istantaneamente la tua forza commerciale.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center shrink-0 border border-cyan-800">6</span>
              <div>
                <h4 className="text-base font-bold text-white">Supporto & Ottimizzazione Continua</h4>
                <p className="text-xs text-slate-400 mt-1">Un referente tecnico dedicato sempre a disposizione per aggiornare materiali, finiture e modelli nel tempo.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: PRICING & GUARANTEE (Inspired by Page 4 bottom & 5) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ma a che <span className="text-cyan-400">prezzo</span> tutto questo?
        </h2>

        <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
          A che prezzo avrai a disposizione un intero reparto 3D & VR per moltiplicare i clienti e il fatturato della tua azienda?
        </p>

        {/* Big Offer Box (Matching PDF Page 4 price box) */}
        <div className="mt-10 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/70 shadow-2xl text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-800 mb-4">
            SESSIONE DI QUALIFICAZIONE TECNICA
          </div>

          <div className="text-3xl sm:text-4xl font-extrabold text-white">
            Solo <span className="text-cyan-400">20 Minuti</span> in Video Call:
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Meno del tempo speso a leggere un catalogo PDF.
          </p>

          <div className="my-6 py-4 px-6 rounded-xl bg-slate-950 border border-slate-800 inline-block text-center max-w-md">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block">Dov'è la fregatura allora?</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-400 block mt-1">
              ZERO ANTICIPI.
            </span>
            <span className="text-xs text-slate-300 mt-1 block">
              Iniziamo valutando la fattibilità dei tuoi file CAD senza alcun impegno.
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Proprio come con i partner più solidi: prima analizziamo le tue esigenze e ti mostriamo come apparirebbe il tuo prodotto in 3D, poi decidi liberamente se e come procedere.
          </p>

          <div className="mt-8">
            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition shadow-xl shadow-cyan-500/25 cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>Candidati Adesso alla Sessione Gratuita</span>
            </button>
          </div>

        </div>

        {/* Rescission guarantee box (Like PDF Page 5) */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Dovrai sottostare a vincoli contrattuali? No.</div>
            <div className="text-xs text-slate-400 mt-0.5">Avrai la possibilità di decidere liberamente. Niente obblighi se la soluzione proposta non fa al caso tuo.</div>
          </div>
          <span className="text-xs font-semibold text-cyan-400 shrink-0 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800">
            Nessun Vincolo Nascosto
          </span>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: QUALIFICATION FORM (Inspired by Page 5 of PDF)     */}
      {/* ------------------------------------------------------------- */}
      <section id="direct-booking-form" className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">Step Conclusivo</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Compila il form per accedere alla sessione di 20 min
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Un nostro Technical Specialist analizzerà la tua richiesta e ti contatterà per confermare l'orario.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 text-left">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Mario Rossi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Aziendale *
                </label>
                <input
                  type="email"
                  required
                  placeholder="mario@azienda.it"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Telefono Diretto *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+39 333 123 4567"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome Azienda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Meccanica Industriale S.p.A."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Obiettivo Principale
                </label>
                <select
                  value={formData.primaryObjective}
                  onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Vendere">Vendere (Configuratore 3D Web)</option>
                  <option value="Formare">Formare (Simulazione VR / HSE)</option>
                  <option value="Far visitare">Far Visitare (Tour 360° / AR)</option>
                  <option value="Fiere ed Eventi">Fiere ed Eventi (Stand Digitale)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Orario Preferito per la Call (20 min)
                </label>
                <select
                  value={formData.selectedTimeSlot}
                  onChange={(e) => setFormData({ ...formData, selectedTimeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="09:30">09:30 - Mattina</option>
                  <option value="11:00">11:00 - Mattina</option>
                  <option value="14:30">14:30 - Pomeriggio</option>
                  <option value="16:00">16:00 - Pomeriggio</option>
                  <option value="17:30">17:30 - Tardo Pomeriggio</option>
                </select>
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-400">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentPrivacy}
                  onChange={(e) => setFormData({ ...formData, consentPrivacy: e.target.checked })}
                  className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span>
                  Ho letto e accetto l'<a href="#" className="underline text-slate-300 hover:text-white">Informativa Privacy</a> ai sensi del GDPR. I dati saranno utilizzati unicamente per l'organizzazione della sessione demo.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl text-base font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Invio in corso...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Invia Candidatura per la Sessione (20 min)</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-4 pt-1">
              <span className="flex items-center gap-1 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Nessun impegno
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Risposta in 24h
              </span>
            </div>

          </form>

        </div>
      </section>

    </div>
  );
};
