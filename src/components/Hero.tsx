import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Play, CheckCircle2, Rotate3d, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CampaignData } from '../types';

interface HeroProps {
  campaign: CampaignData;
  onBookDemoClick: () => void;
  onExploreDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  campaign,
  onBookDemoClick,
  onExploreDemoClick,
}) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const heroShowcase = [
    {
      title: 'Configuratore Automotive 3D',
      badge: '3D Real-time WebGL',
      image: '/images/demo-car.png',
      caption: 'Configurazione live carrozzeria, materiali PBR e rotazione a 360° da browser.',
      tech: 'Zero installazione · 60 FPS',
    },
    {
      title: 'Impianti Industriali ASSOMAC',
      badge: 'Virtual Fair & B2B',
      image: '/images/assomac.png',
      caption: 'Macchinari industriali pesanti esposti in fiere internazionali senza movimentazione.',
      tech: 'Simac Tanning Tech · Digital Twin',
    },
    {
      title: 'Configuratore Design & Arredo',
      badge: 'Product Customizer',
      image: '/images/demo-chair.png',
      caption: 'Personalizzazione tessuti, legni e finiture per contract e vendita B2B.',
      tech: 'Web3D interattivo su smartphone e desktop',
    },
  ];

  const currentShowcase = heroShowcase[activePreviewIndex];

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{campaign.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {campaign.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {campaign.subheadline}
            </p>

            {/* Target Audience callout */}
            <div className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start sm:items-center gap-2.5">
              <span className="text-cyan-400 font-semibold uppercase tracking-wider text-[10px] shrink-0">
                Target ideale:
              </span>
              <span className="text-slate-200">{campaign.targetAudience}</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookDemoClick}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition shadow-xl shadow-cyan-500/20 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950 group-hover:rotate-6 transition-transform" />
                <span>{campaign.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreDemoClick}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 transition active:scale-[0.98] cursor-pointer"
              >
                <Rotate3d className="w-4 h-4 text-cyan-400" />
                <span>{campaign.secondaryCta}</span>
              </button>
            </div>

            {/* Microcopy & Trust bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Incontro 20 min gratuito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Nessun obbligo d'acquisto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Funziona da web senza app</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Visual Demo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-2.5 border border-slate-700/80 shadow-2xl backdrop-blur">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-[11px] font-mono text-slate-400">exrea-engine://webgl-realtime</span>
                </div>
                <span className="text-[10px] font-medium text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                  {currentShowcase.badge}
                </span>
              </div>

              {/* Visual Container */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentShowcase.image}
                    src={currentShowcase.image}
                    alt={currentShowcase.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 shadow-lg">
                  <Rotate3d className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                  <span>{currentShowcase.title}</span>
                </div>

                {/* Direct Demo Trigger CTA Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={onExploreDemoClick}
                    className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Interagisci con la demo live</span>
                  </button>
                </div>

                {/* Bottom caption strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3.5 text-left">
                  <p className="text-xs text-slate-200 font-medium line-clamp-1">{currentShowcase.caption}</p>
                  <p className="text-[11px] text-cyan-400 mt-0.5">{currentShowcase.tech}</p>
                </div>
              </div>

              {/* Showcase switcher thumbnails */}
              <div className="grid grid-cols-3 gap-2 mt-2.5">
                {heroShowcase.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`p-1.5 rounded-lg text-left transition border text-[11px] cursor-pointer ${
                      activePreviewIndex === idx
                        ? 'bg-slate-800 border-cyan-500/80 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="font-medium truncate">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</div>
                    <div className="text-[9px] text-cyan-400/90 truncate">{item.badge.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
