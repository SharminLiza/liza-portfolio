import React, { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, Github, Facebook, Instagram, Mail, Phone, ExternalLink, Download, Sparkles } from 'lucide-react';

interface HomeHeroProps {
  darkMode: boolean;
  onViewProjects: () => void;
  onContactMe: () => void;
}

export default function HomeHero({ darkMode, onViewProjects, onContactMe }: HomeHeroProps) {
  const roles = [
    'Data Scientist',
    'AI Automation Specialist',
    'Product Designer',
    'QA Automation Engineer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      setTypingSpeed(isDeleting ? 40 : 100);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sharmin-sultana-liza-a94471245/', label: 'LinkedIn', color: 'hover:text-sky-500' },
    { icon: <Github size={20} />, url: 'https://github.com/SharminLiza', label: 'GitHub', color: 'hover:text-neutral-400' },
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/sharminliza11', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/sharmin_liza_official/', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Mail size={20} />, url: 'mailto:sharminliza1510@gmail.com', label: 'Email', color: 'hover:text-rose-450' },
    { icon: <Phone size={20} />, url: 'https://wa.me/8801645757481', label: 'WhatsApp', color: 'hover:text-emerald-500' } // Placeholder wa
  ];

  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "src/components/public/documents/Resume_Liza.pdf";
  link.download = "Sharmin_Sultana_Liza_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  // const handleDownloadCV = () => {
  //   alert("📄 Simulated Curriculum Vitae Download!\n\nGenerating custom high-definition PDF Resume for 'Sharmin Sultana Liza' representing specialized academic records and project expertise in Data Science, Product Design, UI/UX, QA Testing, and AI Automation.");
  // };
// const DounloadCV = [
//     { icon: <Download size={18} />, url: 'src/components/public/documents/Resume_Liza.pdf', label: 'LinkDoedIn', color: 'hover:text-sky-500' },
//   ];
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-24 overflow-hidden transition-all duration-700 ${
        darkMode ? 'bg-[#050505]' : 'bg-gradient-to-b from-neutral-50 via-white to-neutral-50'
      }`}
    >
      {/* Background Futuristic Orbs & Glow Gradients with slow moving floating animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-violet-600/10 dark:bg-violet-600/15 blur-[130px] animate-[pulse_8s_infinite_ease-in-out]" />
        <div className="absolute bottom-[5%] left-[2%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[160px] animate-[pulse_10s_infinite_ease-in-out_1s]" />
        <div className="absolute top-[25%] left-[25%] w-[350px] h-[350px] rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-[120px] animate-[pulse_12s_infinite_ease-in-out_2s]" />
        
        {/* Abstract cyber grid lines floating */}
        <div className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 py-12">
        
        {/* Left Side: Professional pitch */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full w-fit">
            <Sparkles size={13} className="text-purple-500 dark:text-purple-400 animate-spin" />
            <span className="text-[10px] font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase font-bold">
              July 2026 Graduate • Open to Opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5.5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[1.0]">
            <span className={darkMode ? 'text-zinc-400' : 'text-neutral-500'}>Hi, I'm</span> <br />
            <span className={`font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode ? 'from-white via-zinc-200 to-purple-400' : 'from-neutral-900 via-indigo-950 to-purple-600'
            }`}>
              Sharmin Sultana Liza
            </span>
          </h1>

          <div className="h-8 flex items-center">
            <span className={`text-base sm:text-xl font-mono ${darkMode ? 'text-gray-300' : 'text-neutral-700'}`}>
              I am a{' '}
              <span className="text-purple-600 dark:text-purple-400 font-bold border-r-2 border-purple-550 pr-1 animate-blink">
                {currentText}
              </span>
            </span>
          </div>

          <p className={`text-xs sm:text-sm leading-relaxed max-w-xl ${darkMode ? 'text-zinc-400' : 'text-neutral-600'}`}>
            Currently completing my B.Sc in Computer Science and Engineering at <strong>United International University (UIU)</strong> with a <strong className="text-purple-600 dark:text-purple-300">Major in Data Science</strong>. 
            I synthesize empirical AI solutions with robust quality assurance & user-centered product design—engineering automated QA benchmarks, processing analytical big data, and architecting elegant software experiences.
          </p>

          {/* Social Icons Strip */}
          <div className="flex flex-wrap items-center gap-4 py-1">
            <span className={`text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-neutral-400'}`}>
              Connect:
            </span>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    darkMode
                      ? 'border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
                      : 'border-black/10 bg-neutral-100/50 text-neutral-600 hover:bg-neutral-100 hover:border-black/20 hover:text-black'
                  } ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Action Buttons Slightly Smaller */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="cta-view-projects"
              onClick={onViewProjects}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-purple-500/20 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles size={14} />
              View Research & Projects
            </button>
            
            <button
              id="cta-download-cv"
              onClick={handleDownloadCV}
              className={`px-5 py-2.5 rounded-full text-xs font-bold border flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                darkMode
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white glass'
                  : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm'
              }`}
            >
              <Download size={14} />
              Download CV
            </button>

            <button
              id="cta-contact"
              onClick={onContactMe}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold border flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer ${
                darkMode
                  ? 'border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300'
                  : 'border-purple-600/20 bg-purple-550/10 hover:bg-purple-550/15 text-purple-700'
              }`}
            >
              Contact Me &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Round Professional Image & Floating Glow Cards */}
        <div className="lg:col-span-5 flex justify-center relative py-8">
          
          {/* Main Visual Frame */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-85 lg:h-85 rounded-full flex items-center justify-center">
            
            {/* Spinning gradient border track */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 via-pink-500 to-emerald-400 p-[3px] animate-[spin_12s_linear_infinite]" />
            
            <div className={`absolute inset-[3px] rounded-full overflow-hidden ${darkMode ? 'bg-neutral-950' : 'bg-neutral-100'}`}>
              {/* Premium abstract placeholder with Unsplash representing high-end candidate */}
              <img
                src="src\components\public\images\Sharmin_Sultana_Liza.jpg"
                alt="Sharmin Sultana Liza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500 scale-102 hover:scale-105"
              />
            </div>

            {/* Floating micro glass badges orbiting the image */}
            <div className={`absolute -top-1 -right-3 px-3 py-1.5 rounded-xl border flex items-center gap-2 text-[10px] font-mono shadow-xl ${
              darkMode ? 'glass-card-dark text-white' : 'glass-card-light text-neutral-900'
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Data Analyst</span>
            </div>

            <div className={`absolute bottom-[20%] -left-8 px-3 py-1.5 rounded-xl border flex items-center gap-2 text-[10px] font-mono shadow-xl ${
              darkMode ? 'glass-card-dark text-white' : 'glass-card-light text-neutral-900'
            }`}>
              <span className="text-purple-400 font-bold">&lambda;</span>
              <span>AI Automation</span>
            </div>

            <div className={`absolute -bottom-2 right-1/4 px-3 py-1.5 rounded-xl border flex items-center gap-2 text-[10px] font-mono shadow-xl ${
              darkMode ? 'glass-card-dark text-white' : 'glass-card-light text-neutral-900'
            }`}>
              <span className="text-emerald-400 font-bold">&#10003;</span>
              <span>QA Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>
          Explore Portfolio
        </span>
        <ArrowDown size={14} className="text-purple-500" />
      </div>
    </section>
  );
}
