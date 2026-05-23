import React from 'react';
import { Shapes, LayoutGrid, CheckSquare, Terminal, Cpu, Compass, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  darkMode: boolean;
  onRequestService: (serviceTitle: string) => void;
}

const iconMap: { [key: string]: any } = {
  Shapes,
  LayoutGrid,
  CheckSquare,
  Terminal,
  Cpu,
  Compass
};

export default function Services({ darkMode, onRequestService }: ServicesProps) {
  return (
    <section id="services" className="py-24 relative bg-black/5 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
            06 . Offerings
          </span>
          <h3 className={`text-3xl sm:text-4xl font-display font-extrabold mt-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            My Services
          </h3>
          <p className={`text-sm mt-3 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
            Deploying multidisciplinary systems, ensuring interface metrics conform to production tolerances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((sec) => {
            const IconComponent = iconMap[sec.iconName] || Cpu;
            
            return (
              <div
                key={sec.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-350 hover:-translate-y-1 group relative ${
                  darkMode
                    ? 'glass-card-dark hover:border-purple-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
                    : 'glass-card-light hover:border-purple-650/30 hover:shadow-2xl'
                }`}
              >
                {/* Active glow corner overlay */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 blur-xl group-hover:bg-purple-500/15 rounded-full transition-all" />

                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                    darkMode
                      ? 'bg-neutral-900 border-white/5 text-purple-400 group-hover:border-purple-500/30'
                      : 'bg-neutral-50 border-black/8 text-purple-650 group-hover:border-purple-650/30'
                  }`}>
                    <IconComponent size={22} className="group-hover:rotate-6 transition-transform" />
                  </div>

                  {/* Main Header */}
                  <div className="space-y-1.5 text-left">
                    <h4 className={`text-base font-display font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {sec.title}
                    </h4>
                    <p className={`text-xs leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                      {sec.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <ul className="space-y-1 text-left pt-2">
                    {sec.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[10.5px]">
                        <Check size={11} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-gray-300' : 'text-neutral-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Request CTA Trigger */}
                <div className="pt-6 mt-6 border-t border-neutral-750/30 flex select-none">
                  <button
                    onClick={() => onRequestService(sec.title)}
                    className="w-full py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider text-center flex items-center justify-center gap-1.5 transition-all text-purple-400 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/5 cursor-pointer"
                  >
                    <span>REQUEST CONSULTATION</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
