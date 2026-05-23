import { ArrowUp, Award, Cpu, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="custom-footer"
      className={`border-t py-12 relative z-10 transition-colors ${
        darkMode ? 'bg-neutral-950 border-white/5 text-gray-500' : 'bg-neutral-50 border-black/8 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className={`text-xs font-mono tracking-wider ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            &copy; 2026 Sharmin Sultana Liza. All academic and engineering rights reserved.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px]">
            <span>Crafted with</span>
            <Heart size={10} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>in Mirpur, Dhaka, Bangladesh -- July 2026 Graduate Portfolio</span>
          </div>
        </div>

        {/* Action button triggers */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest hidden md:inline">
            SYSTEM STATUS: ONLINE
          </span>
          
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className={`p-3 rounded-full border transition-all hover:scale-110 active:scale-95 cursor-pointer ${
              darkMode
                ? 'border-white/10 hover:bg-white/5 text-white'
                : 'border-black/10 hover:bg-black/5 text-neutral-800'
            }`}
          >
            <ArrowUp size={14} className="animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
