import { Award, Compass, MapPin, Target, Shield, Heart, GraduationCap, ChevronRight, Milestone } from 'lucide-react';
import { ACADEMIC_JOURNEY } from '../data';
import { useState } from 'react';
interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const stats = [
    { label: 'Academic Standing', val: 'B.Sc CSE (Active)' },
    { label: 'Completed Credits', val: '124 of 137' },
    { label: 'Location Base', val: 'Dhaka, Bangladesh' },
    { label: 'Availability', val: 'Open July 2026' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Sparkles of Background Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[320px] h-[320px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
            01 . Identity
          </span>
          <h3 className={`text-2xl sm:text-4xl font-display font-extrabold mt-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            About Me & Academic Records
          </h3>
          <p className={`text-sm mt-3 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
            Bridging pixel-perfect UI/UX layouts with systematic hardware verification and automated scripts.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Biography & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'glass-card-dark' : 'glass-card-light'
            }`}>
              <h4 className={`text-xl font-display font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <Compass className="animate-spin-slow" size={20} />
                Professional Summary
              </h4>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-neutral-700'}`}>
                Hi! I'm <strong>Sharmin Sultana Liza</strong>. I'm a multidisciplinary tech professional specializing in Product Design, UI/UX, Software Testing & QA, and AI Automation. 
                Currently completing my <strong>B.Sc. in CSE</strong> at United International University, I blend creativity with technical rigor to build products that truly resonate.
              </p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-700'}`}>
                My approach combines human-centered design principles with data-driven decision making. 
                Whether crafting pixel-perfect interfaces in Figma, automating regression workflow checks, or ensuring software grade tolerances, I strive for absolute software quality.
              </p>

              {/* Status metrics grid */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-700/30">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>
                      {stat.label}
                    </span>
                    <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {stat.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Meta info */}
            <div className={`p-4 rounded-xl border flex items-center gap-4 ${
              darkMode ? 'bg-neutral-900/60 border-white/5' : 'bg-neutral-50 border-black/5'
            }`}>
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <MapPin size={18} />
              </div>
              <div>
                <span className={`text-[10px] font-mono uppercase ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>Work Base</span>
                <p className={`text-xs font-medium ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Dhaka, Bangladesh • Open to Worldwide Remote Roles</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Academic Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'glass-card-dark' : 'glass-card-light'
            }`}>
              <h4 className={`text-xl font-display font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <GraduationCap size={22} className="text-purple-500" />
                Academic Journey Timeline
              </h4>

              {/* Vertical timeline stepper */}
              <div className="relative pl-6 sm:pl-8 border-l border-purple-500/30 space-y-8">
                {ACADEMIC_JOURNEY.map((mile, idx) => (
                  <div
                    key={idx}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Animated Pulsing Dot Marker */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                      hoveredStep === idx
                        ? 'bg-purple-500 border-white scale-125 shadow-lg shadow-purple-500/40'
                        : darkMode
                        ? 'bg-neutral-950 border-purple-400'
                        : 'bg-white border-purple-600'
                    }`}>
                      {hoveredStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <h5 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-neutral-900 group-hover:text-purple-600'} transition-colors`}>
                        {mile.degree}
                      </h5>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20 w-fit">
                        {mile.year}
                      </span>
                    </div>

                    <p className={`text-xs font-medium mt-1 ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                      {mile.institution}
                    </p>

                    <div className={`mt-2 text-xs flex items-center gap-1.5 font-mono ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>
                      <span>{mile.detailLabel}:</span>
                      <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-neutral-800'}`}>
                        {mile.detailValue}
                      </span>
                    </div>

                    {mile.degree.includes('B.Sc') && (
                      <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2.5 flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Core Focus: Advanced AI, Prompt Engineering, Software Architecture Lab Analytics</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Career Vision Sub-Section */}
        <div className="mt-12">
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'glass-card-dark' : 'glass-card-light'
          }`}>
            <h4 className={`text-lg font-display font-extrabold mb-6 flex items-center gap-2 ${darkMode ? 'text-purple-400' : 'text-purple-650'}`}>
              <Target size={20} />
              Career Vision & Value Foundation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Short Term Goal */}
              <div className={`p-4 rounded-xl border transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-white/5 border-white/5 hover:border-purple-500/30' : 'bg-neutral-50 border-black/10 hover:border-purple-600/30'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 font-mono font-bold text-xs">ST</div>
                <h5 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Short-Term Goal</h5>
                <p className={`text-[11.5px] leading-relaxed ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                  Launch as a full-stack product designer & QA engineer, contributing to innovative SaaS products that reach millions of users worldwide.
                </p>
              </div>

              {/* Long Term Vision */}
              <div className={`p-4 rounded-xl border transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-white/5 border-white/5 hover:border-purple-500/30' : 'bg-neutral-50 border-black/10 hover:border-purple-600/30'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3 font-mono font-bold text-xs">LT</div>
                <h5 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Long-Term Vision</h5>
                <p className={`text-[11.5px] leading-relaxed ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                  Lead deep multidisciplinary teams, building AI-powered systems that safely bridge human emotional design with technical verification metrics.
                </p>
              </div>

              {/* Core Values */}
              <div className={`p-4 rounded-xl border transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-white/5 border-white/5 hover:border-purple-500/30' : 'bg-neutral-50 border-black/10 hover:border-purple-600/30'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 font-mono font-bold text-xs">CV</div>
                <h5 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Core Values</h5>
                <p className={`text-[11.5px] leading-relaxed ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                  Empathy-first design choices, relentless code testing, continuous experimental education, and inclusive technology scopes for everyone.
                </p>
              </div>

              {/* Impact Focus */}
              <div className={`p-4 rounded-xl border transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-white/5 border-white/5 hover:border-purple-500/30' : 'bg-neutral-50 border-black/10 hover:border-purple-600/30'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-3 font-mono font-bold text-xs">IF</div>
                <h5 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Impact Focus</h5>
                <p className={`text-[11.5px] leading-relaxed ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                  Create high-performance workflows that tackle daily healthcare concerns, automate computational tasks, and restrict human data mistakes.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
