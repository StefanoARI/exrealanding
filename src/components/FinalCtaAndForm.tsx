import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Send, ShieldCheck, ArrowRight, Sparkles, Building2, Mail, User, Phone } from 'lucide-react';
import { LeadFormData } from '../types';

interface FinalCtaAndFormProps {
  onSubmitLead: (data: LeadFormData) => void;
  defaultObjective?: string;
}

export const FinalCtaAndForm: React.FC<FinalCtaAndFormProps> = ({
  onSubmitLead,
  defaultObjective = 'Vendere',
}) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'form'>('calendar');
  const [formStep, setFormStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-23');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');

  // Form State
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    primaryObjective: defaultObjective,
    customObjective: '',
    projectTimeline: 'Entro 1-2 mesi',
    estimatedBudget: 'Non ancora definito',
    message: '',
    consentPrivacy: true,
    consentMarketing: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available dates for booking demo (next working days)
  const availableDates = [
    { label: 'Mercoledì 23 Set', value: '2026-09-23' },
    { label: 'Giovedì 24 Set', value: '2026-09-24' },
    { label: 'Venerdì 25 Set', value: '2026-09-25' },
    { label: 'Lunedì 28 Set', value: '2026-09-28' },
    { label: 'Martedì 29 Set', value: '2026-09-29' },
  ];

  const availableTimeSlots = [
    '09:30', '10:30', '11:30', '14:30', '15:30', '16:30'
  ];

  const objectives = [
    { id: 'Vendere', label: 'Vendere', desc: 'Configuratore 3D / Showroom B2B' },
    { id: 'Formare', label: 'Formare', desc: 'Simulazioni VR / Training sicurezza' },
    { id: 'Spiegare', label: 'Spiegare', desc: 'Spaccati tecnici & digital twin' },
    { id: 'Far visitare', label: 'Far visitare', desc: 'Tour 360° stabilimenti e cantine' },
    { id: 'Fiere ed Eventi', label: 'Fiere ed Eventi', desc: 'Stand digitale & touch screen' },
    { id: 'Non lo so ancora', label: 'Non lo so ancora', desc: 'Voglio valutare con voi' },
  ];

  const validateStep1 = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Inserisci il tuo nome e cognome';
    if (!formData.businessEmail.trim()) {
      err.businessEmail = 'Inserisci la tua email aziendale';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.businessEmail)) {
      err.businessEmail = 'Formato email non valido';
    }
    if (!formData.companyName.trim()) err.companyName = 'Inserisci il nome della tua azienda';
    if (!formData.consentPrivacy) err.consentPrivacy = 'Devi accettare l\'informativa privacy';
    
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setFormStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;

    setIsSubmitting(true);

    const submissionData: LeadFormData = {
      ...formData,
      selectedDate: activeTab === 'calendar' ? selectedDate : undefined,
      selectedTimeSlot: activeTab === 'calendar' ? selectedTime : undefined,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitLead(submissionData);
    }, 600);
  };

  return (
    <section id="booking-form" className="py-16 md:py-24 bg-gradient-to-b from-[#0c0f17] to-slate-950 border-b border-slate-800 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header as demanded in Section 12 */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offerta Commerciale Primaria EXREA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hai un progetto in mente? Partiamo da 20 minuti.
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Raccontaci cosa vuoi vendere, spiegare, formare o far vivere. Analizziamo l'obiettivo e ti mostriamo quale soluzione può avere senso per il tuo caso.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Risposta garantita entro 24 ore lavorative</span>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <Clock className="w-4 h-4" />
              <span>Call conoscitiva gratuita e senza impegno</span>
            </span>
          </div>
        </div>

        {/* Form Container with Selector Tab (Calendar Slot vs Quick Form) */}
        <div className="bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          
          {/* Booking Mode Selector Tabs */}
          <div className="grid grid-cols-2 bg-slate-950 border-b border-slate-800 p-1.5 text-center">
            <button
              type="button"
              onClick={() => setActiveTab('calendar')}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                activeTab === 'calendar'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/60 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Scegli direttamente il tuo orario</span>
              <span className="hidden sm:inline-block text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.2 rounded border border-cyan-800">
                Consigliato
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/60 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Compila il form</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Calendar Appointment Picker (When calendar mode active) */}
            {activeTab === 'calendar' && (
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Seleziona giorno per la sessione di 20 minuti:</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Google Meet / MS Teams</span>
                </div>

                {/* Days buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-center transition ${
                        selectedDate === d.value
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    Fascia oraria preferita:
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {availableTimeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg text-xs font-mono font-medium border text-center transition ${
                          selectedTime === time
                            ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${formStep >= 1 ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  1
                </span>
                <span className={`font-semibold ${formStep >= 1 ? 'text-white' : 'text-slate-500'}`}>
                  Dati aziendali
                </span>
              </div>
              <div className="h-0.5 w-12 bg-slate-800" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${formStep >= 2 ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  2
                </span>
                <span className={`font-semibold ${formStep >= 2 ? 'text-white' : 'text-slate-500'}`}>
                  Obiettivo & Dettagli
                </span>
              </div>
            </div>

            {/* Step 1: Mandatory Fields (Section 13) */}
            {formStep === 1 && (
              <div className="space-y-4 animate-in fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nome e Cognome <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Es. Mario Rossi"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Aziendale <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="nome@azienda.it"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                    {errors.businessEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.businessEmail}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Azienda / Ente <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ragione Sociale o Brand"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                    {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Telefono / WhatsApp <span className="text-slate-500">(Opzionale)</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+39 ..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy & Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentPrivacy}
                      onChange={(e) => setFormData({ ...formData, consentPrivacy: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 text-cyan-400 focus:ring-cyan-400"
                    />
                    <span>
                      Accetto l'informativa privacy di EXREA per la gestione del contatto e della demo tecnica. <span className="text-cyan-400">*</span>
                    </span>
                  </label>
                  {errors.consentPrivacy && <p className="text-[11px] text-rose-400 mt-1">{errors.consentPrivacy}</p>}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full sm:w-auto px-7 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Continua (Scegli obiettivo)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Qualification Objectives & Optional details (Section 13) */}
            {formStep === 2 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Cosa vuoi ottenere principalmente? <span className="text-cyan-400">*</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {objectives.map((obj) => {
                      const isSelected = formData.primaryObjective === obj.id;
                      return (
                        <button
                          type="button"
                          key={obj.id}
                          onClick={() => setFormData({ ...formData, primaryObjective: obj.id })}
                          className={`p-3 rounded-xl text-left border transition flex flex-col justify-between ${
                            isSelected
                              ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-sm'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="font-bold text-xs flex items-center justify-between">
                            <span>{obj.label}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                          </div>
                          <span className="text-[11px] text-slate-400 mt-1">{obj.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Message / Context */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Descrivi brevemente il prodotto o la sfida <span className="text-slate-500">(Opzionale)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Es. Abbiamo un macchinario con 12 varianti che vogliamo mostrare ai buyer prima della fiera..."
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                  >
                    ← Modifica dati personali
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-bold text-sm transition shadow-xl shadow-cyan-950/40 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Registrazione in corso...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Conferma e prenota demo (20 min)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

          </form>

          {/* SLA Reassurance Footer Bar */}
          <div className="bg-slate-950 p-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dati trattati secondo GDPR · Nessun invio di spam promozionale generico</span>
            </div>
            <span className="text-[11px] text-slate-500">
              SLA commerciale: contatto telefonico o email entro 24h lavorative
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
