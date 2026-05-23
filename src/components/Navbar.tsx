import React, { useEffect, useState } from 'react';
import { Sun, Moon, ShieldAlert, Cpu, Heart, CheckCircle } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  isAdmin,
  setIsAdmin,
  isLoggedIn,
  handleLogout
}: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'research', label: 'Research' },
    { id: 'certificates', label: 'Certifications' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Custom Scroll Progress bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsAdmin(false); // return to portfolio view on nav click
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="custom-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-white/85 backdrop-blur-md border-b border-black/5 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        id="navbar-scroll-progress"
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 via-purple-500 to-emerald-400 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo - Future Minimalist */}
        <div
          id="brand-logo"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center text-white font-mono font-bold tracking-tighter shadow-md group-hover:rotate-6 transition-transform">
            SSL
          </div>
          <div>
            <span className={`font-display font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Sharmin Sultana Liza
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-2 py-1.5 text-[11px] font-semibold tracking-widest uppercase transition-all cursor-pointer rounded-lg ${
                    darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-black/5'
                  }`}
                >
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-neutral-700/40" />

          {/* Core Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light' : 'Switch to Dark'}
              className={`p-2 rounded-xl transition-all cursor-pointer border ${
                darkMode
                  ? 'border-white/10 hover:bg-white/10 text-amber-400'
                  : 'border-black/10 hover:bg-black/5 text-purple-600'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'text-amber-400' : 'text-purple-600'}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              darkMode ? 'border-white/10 text-white' : 'border-black/15 text-neutral-900'
            }`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drops */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`lg:hidden px-6 py-4 absolute top-full left-0 right-0 border-b shadow-2xl transition-all ${
            darkMode ? 'bg-neutral-950 border-white/10 text-white' : 'bg-white border-black/10 text-neutral-900'
          }`}
        >
          <ul className="space-y-3">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className="block w-full text-left py-2 text-sm font-medium hover:text-purple-500 transition-colors"
                >
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
