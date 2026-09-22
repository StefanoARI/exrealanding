import React from 'react';
import { motion } from 'motion/react';
import { Layers, AlertTriangle, MapPinOff, Truck, ArrowRight, XCircle } from 'lucide-react';
import { PROBLEMS_LIST } from '../data/campaignData';

interface ProblemSectionProps {
  onBookDemoClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onBookDemoClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'MapPinOff':
        return <MapPinOff className="w-5 h-5 text-purple-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-blue-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="problems" className="py-16 md:py-24 bg-[#0c0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold mb-3">
            <XCircle className="w-3.5 h-3.5" />
            <span>I Limiti Dei Media Tradizionali</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Quando una brochure, una foto o un video non bastano.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Se vendi prodotti complessi, gestisci linee industriali o organizzi trasferte in fiera, sai già che spiegare a parole non basta più. I canali statici frenano le tue opportunità commerciali.
          </p>
        </motion.div>

        {/* Problems Grid (4 Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS_LIST.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 md:p-7 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded">
                    Problema 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Consequence callout */}
              <div className="mt-2 pt-3 border-t border-slate-800/80 bg-rose-950/20 -mx-6 -mb-6 p-4 rounded-b-xl border-t border-rose-900/30 text-xs">
                <span className="text-rose-400 font-semibold uppercase tracking-wider block mb-0.5">
                  Cosa perdi oggi:
                </span>
                <span className="text-slate-300">{item.consequence}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-sm text-slate-300 font-medium">
              Riconosci una di queste situazioni nel tuo ciclo operativo?
            </span>
            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
            >
              <span>Parla con un esperto per risolverla</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
