import React from 'react';
import { 
  Paintbrush, 
  Code2, 
  CheckSquare, 
  Cpu, 
  Terminal,
  Layers,
  Sparkles,
  Bot,
  Laptop,
  CheckCircle,
  Database,
  Chrome,
  Zap,
  Globe,
  Wind,
  Smile,
  ShieldAlert,
  Coffee,
  Trello
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  // Beautiful defined list of tools requested by the user
  const categories = [
    {
      id: 'design',
      title: 'Design & Interaction',
      tag: 'Creative UI/UX',
      accentColor: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'group-hover:border-pink-500/30',
      icon: <Paintbrush size={20} className="text-pink-600 dark:text-pink-400" />,
      tools: [
        { name: 'Figma', icon: <Layers size={30} className="text-pink-500" /> },
        { name: 'Adobe XD', icon: <Laptop size={30} className="text-purple-500" /> },
        { name: 'Photoshop', icon: <Paintbrush size={30} className="text-blue-500" /> },
        { name: 'Framer', icon: <Sparkles size={30} className="text-indigo-500" /> },
        { name: 'Illustrator', icon: <Smile size={30} className="text-amber-500" /> }
      ]
    },
    {
      id: 'dev',
      title: 'Frontend Development',
      tag: 'Interactive Web',
      accentColor: 'from-sky-500/10 to-indigo-500/10',
      borderColor: 'group-hover:border-sky-500/30',
      icon: <Code2 size={20} className="text-sky-600 dark:text-sky-400" />,
      tools: [
        { name: 'React', icon: <Bot size={30} className="text-sky-400 animate-spin-slow" /> },
        { name: 'TypeScript', icon: <Code2 size={30} className="text-blue-500" /> },
        { name: 'JavaScript', icon: <Terminal size={30} className="text-yellow-500" /> },
        { name: 'HTML5', icon: <Globe size={30} className="text-orange-500" /> },
        { name: 'Tailwind CSS', icon: <Wind size={30} className="text-teal-400" /> }
      ]
    },
    {
      id: 'qa',
      title: 'QA & Systems Testing',
      tag: 'Robust Quality',
      accentColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'group-hover:border-emerald-500/30',
      icon: <CheckSquare size={20} className="text-emerald-600 dark:text-emerald-400" />,
      tools: [
        { name: 'Postman', icon: <Database size={30} className="text-orange-500" /> },
        { name: 'Selenium', icon: <Chrome size={30} className="text-emerald-500" /> },
        { name: 'JIRA', icon: <Trello size={30} className="text-blue-500" /> },
        { name: 'TestRail', icon: <CheckCircle size={30} className="text-rose-500" /> },
        { name: 'Pytest', icon: <CheckSquare size={30} className="text-green-500" /> }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Automation Workflow',
      tag: 'Neural Logic',
      accentColor: 'from-violet-500/10 to-fuchsia-500/10',
      borderColor: 'group-hover:border-violet-500/30',
      icon: <Cpu size={20} className="text-violet-600 dark:text-violet-400" />,
      tools: [
        { name: 'Python', icon: <Zap size={30} className="text-yellow-600 dark:text-yellow-400" /> },
        { name: 'OpenAI', icon: <Bot size={30} className="text-purple-500" /> },
        { name: 'Hugging Face', icon: <Smile size={30} className="text-amber-500" /> },
        { name: 'Kaggle', icon: <Layers size={30} className="text-blue-400" /> },
        { name: 'Docker', icon: <Globe size={30} className="text-cyan-500" /> }
      ]
    },
    {
      id: 'lang',
      title: 'Programming Languages',
      tag: 'Core Execution',
      accentColor: 'from-amber-500/10 to-rose-500/10',
      borderColor: 'group-hover:border-amber-500/30',
      icon: <Terminal size={20} className="text-amber-600 dark:text-amber-400" />,
      tools: [
        { name: 'Python', icon: <Zap size={30} className="text-yellow-500" /> },
        { name: 'C++', icon: <Code2 size={30} className="text-indigo-500" /> },
        { name: 'Java', icon: <Coffee size={30} className="text-rose-500" /> },
        { name: 'JavaScript', icon: <Terminal size={30} className="text-yellow-500" /> },
        { name: 'PHP', icon: <Globe size={30} className="text-purple-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative glass orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[10%] w-[380px] h-[380px] rounded-full bg-purple-500/5 dark:bg-purple-600/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/5 dark:bg-emerald-500/5 blur-[150px] animate-pulse-gentle" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with subtle outline block */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase font-bold bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/15">
            03 . Capabilities Matrix
          </span>
          <h3 className={`text-3xl sm:text-4xl md:text-5xl font-display font-black mt-4 leading-tight tracking-tight ${
            darkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            Core Tools & Technologies
          </h3>
          <p className={`text-xs sm:text-sm mt-3 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-neutral-600'
          }`}>
            Professional stack map spanning creative design systems, manual & automated testing pipelines, programming foundations, and advanced AI methodologies.
          </p>
        </div>

        {/* 5-Column Bento Layout with custom sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`group flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl relative overflow-hidden ${
                darkMode
                  ? 'bg-[#0a0a0a]/90 border-white/5 hover:bg-[#0c0c0c]'
                  : 'bg-white border-neutral-200 hover:shadow-neutral-200/50'
              } ${cat.borderColor}`}
            >
              {/* Card micro ambient gradient top corner glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${cat.accentColor} blur-[36px] opacity-70`} />

              <div className="space-y-6 relative z-10 text-left">
                {/* Header row inside bento cell */}
                <div className="flex items-center justify-between border-b pb-4 border-neutral-100 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      darkMode ? 'bg-white/5 border-white/5' : 'bg-neutral-50 border-neutral-200'
                    }`}>
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold block">
                        {cat.tag}
                      </span>
                      <h4 className={`text-xs font-display font-bold uppercase tracking-tight block ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {cat.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Vertical stacked high-tech micro lists */}
                <div className="space-y-2">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-[11px] font-mono transition-all duration-200 ${
                        darkMode
                          ? 'bg-neutral-900/60 border-white/5 text-zinc-300 hover:bg-neutral-900 hover:border-purple-500/20'
                          : 'bg-neutral-50/70 border-neutral-200 text-neutral-800 hover:bg-neutral-100/80 hover:border-purple-650/20'
                      }`}
                    >
                      <span className="font-semibold">{tool.name}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {tool.icon}
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Little detail badge inside cells */}
              <div className="mt-6 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 text-[8px] font-mono text-zinc-400 text-left">
                SYSTEM VERIFIED
              </div>

            </div>
          ))}
        </div>

        {/* Global certification proof banner
        <div className={`mt-12 p-6 rounded-3xl border ${
          darkMode 
            ? 'bg-[#0f0f0f] border-purple-500/10 text-white' 
            : 'bg-[#fcfcff] border-purple-650/15 text-neutral-950'
        } flex flex-col md:flex-row md:items-center justify-between gap-4 text-left`}>
          <div className="space-y-1">
            <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Empirical QA & Development Baseline
            </span>
            <p className="text-xs font-semibold leading-relaxed max-w-xl">
              Equipped with deep testing automation pipelines and responsive layouts ensuring clean user states, accurate functional criteria compliance, and smooth application delivery.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-mono font-bold hover:opacity-95 text-center shrink-0 self-start md:self-center"
          >
            REQUEST INTERACTIVE WORKFLOW demo &rarr;
          </a>
        </div> */}

      </div>
    </section>
  );
}
