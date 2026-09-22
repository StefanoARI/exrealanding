import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Rotate3d, Sparkles, CheckCircle, ExternalLink, Calendar, Maximize2, RefreshCw, Smartphone, Laptop } from 'lucide-react';
import { DEMOS_LIST } from '../data/campaignData';
import { DemoItem } from '../types';

interface DemoSectionProps {
  onBookDemoClick: () => void;
  onDemoInteracted?: (demoId: string) => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  onBookDemoClick,
  onDemoInteracted,
}) => {
  const [selectedDemo, setSelectedDemo] = useState<DemoItem>(DEMOS_LIST[0]);
  const [isIframeActive, setIsIframeActive] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleSelectDemo = (demo: DemoItem) => {
    setSelectedDemo(demo);
    setIsIframeActive(false); // Progressive loading requirement (Section 26)
    if (onDemoInteracted) onDemoInteracted(demo.id);
  };

  const handleLaunchLiveExperience = () => {
    setIsIframeActive(true);
    if (onDemoInteracted) onDemoInteracted(selectedDemo.id + '_live_launched');
  };

  return (
    <section id="demo-section" className="py-16 md:py-24 bg-[#0c0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact Brief Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-xs font-semibold mb-3">
            <Rotate3d className="w-3.5 h-3.5" />
            <span>Esperienza Live Senza Download</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Non te lo raccontiamo. Provalo.
          </h2>

          {/* Mandatory microcopy from Section 06 */}
          <p className="mt-3 text-sm font-medium text-emerald-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Nessuna installazione. Nessun visore necessario per questa demo.</span>
          </p>

          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Interagisci con i configuratori 3D e i contenuti immersivi realizzati con tecnologia EXREA direttamente dalla finestra qui sotto.
          </p>
        </motion.div>

        {/* Demo Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {DEMOS_LIST.map((demo) => {
            const isSelected = selectedDemo.id === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => handleSelectDemo(demo)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{demo.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${isSelected ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                  {demo.category}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Interactive Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className={`relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden ${isFullscreen ? 'fixed inset-4 z-50 bg-slate-950' : ''}`}
        >
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-white mr-2">{selectedDemo.title}</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">{selectedDemo.subtitle}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 border-r border-slate-800 pr-3 mr-1">
                <Laptop className="w-3.5 h-3.5 text-slate-400" />
                <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                <span>Compatibile Desktop & Mobile</span>
              </div>

              {isIframeActive && (
                <button
                  onClick={() => setIsIframeActive(false)}
                  className="px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 rounded border border-slate-700 flex items-center gap-1.5 transition"
                  title="Ricarica o torna alla scheda"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="hidden sm:inline">Riavvia</span>
                </button>
              )}

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition"
                title={isFullscreen ? 'Riduci' : 'Schermo Intero'}
                aria-label="Schermo Intero"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Area (Progressive loading according to Section 26) */}
          <div className={`relative w-full bg-slate-950 flex items-center justify-center ${isFullscreen ? 'h-[calc(100%-48px)]' : 'h-[360px] sm:h-[480px] lg:h-[540px]'}`}>
            
            {/* If video URL (Showreel) */}
            {selectedDemo.videoUrl ? (
              <div className="w-full h-full relative">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={selectedDemo.thumbnail}
                  preload="metadata"
                >
                  <source src={selectedDemo.videoUrl} type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
              </div>
            ) : isIframeActive && selectedDemo.iframeUrl ? (
              /* Live embedded iframe from exrea.io */
              <div className="w-full h-full relative">
                <iframe
                  src={selectedDemo.iframeUrl}
                  title={selectedDemo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ) : (
              /* Progressive preview thumbnail with interactive trigger */
              <div className="relative w-full h-full overflow-hidden group">
                <img
                  src={selectedDemo.thumbnail}
                  alt={selectedDemo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                {/* Center Launch Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="max-w-md bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/20 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {selectedDemo.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {selectedDemo.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      {selectedDemo.keyFeatures.map((feat) => (
                        <span key={feat} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {selectedDemo.iframeUrl ? (
                      <button
                        onClick={handleLaunchLiveExperience}
                        className="w-full py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg transition active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <Rotate3d className="w-4 h-4" />
                        <span>Carica esperienza 3D interattiva</span>
                      </button>
                    ) : (
                      <button
                        onClick={onBookDemoClick}
                        className="w-full py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg transition active:scale-[0.98]"
                      >
                        Richiedi demo completa per questo settore
                      </button>
                    )}

                    <span className="text-[10px] text-slate-400 block">
                      Caricamento leggero in streaming · Nessun rallentamento del dispositivo
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Features Strip */}
          <div className="bg-slate-950/90 border-t border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 font-semibold">Caratteristiche:</span>
              {selectedDemo.keyFeatures.map((feat) => (
                <span key={feat} className="inline-flex items-center gap-1 text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {selectedDemo.iframeUrl && (
              <a
                href={selectedDemo.iframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-1 text-xs"
              >
                <span>Apri a tutto schermo in nuova scheda</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Section 06 Mandated Followup Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Vuoi capire come potrebbe funzionare per la tua azienda?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Durante la demo di 20 minuti analizziamo i tuoi prodotti o ambienti e ti mostriamo casi simili già collaudati.
            </p>
          </div>

          <button
            onClick={onBookDemoClick}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Prenota una demo gratuita</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
