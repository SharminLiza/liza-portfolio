/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact, { ContactRef } from './components/Contact';
import Footer from './components/Footer';

import { 
  INITIAL_PROJECTS, 
  INITIAL_SKILLS, 
  INITIAL_RESEARCH, 
  INITIAL_CERTIFICATIONS 
} from './data';
import { Project, Skill, ResearchPaper, Certificate } from './types';

export default function App() {
  // Theme state - futuristic minimal default is dark
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Dynamic state database for CRUD triggers
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [skills, setSkills] = useState<Skill[]>(INITIAL_SKILLS);
  const [papers, setPapers] = useState<ResearchPaper[]>(INITIAL_RESEARCH);
  const [certificates, setCertificates] = useState<Certificate[]>(INITIAL_CERTIFICATIONS);

  // Ref handle for pre-filling contact entries
  const contactRef = useRef<ContactRef>(null);

  useEffect(() => {
    // If user enters light mode, adjust page body
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#050505';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  const handleRequestServicePrefill = (serviceTitle: string) => {
    if (contactRef.current) {
      contactRef.current.prefillMessage(serviceTitle);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white ${
      darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* Dynamic top Global Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAdmin={false}
        setIsAdmin={() => {}}
        isLoggedIn={false}
        handleLogout={() => {}}
      />

      <main className="relative">
        
        {/* 1. HOME / HERO SECTION */}
        <HomeHero
          darkMode={darkMode}
          onViewProjects={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          onContactMe={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />

        {/* 2. ABOUT ME SECTION & ACADEMIC JOURNEY */}
        <About darkMode={darkMode} />

        {/* 3. SHOWCASE OF PROJECTS (PD/UI/QA/AI Grid + Search & Filter) */}
        <Projects darkMode={darkMode} projects={projects} />

        {/* 4. SKILLS & TOOLS SECTION (Weighted ranges charts) */}
        <Skills darkMode={darkMode} />

        {/* 5. RESEARCH & PUBLICATIONS SECTION */}
        <Research darkMode={darkMode} papers={papers} />

        {/* 6. COURSES & CERTIFICATIONS (Carousel slides) */}
        <Certifications darkMode={darkMode} certificates={certificates} />

        {/* 7. MY SERVICES SECTION (Grid with auto pre-filling click interactions) */}
        <Services
          darkMode={darkMode}
          onRequestService={handleRequestServicePrefill}
        />

        {/* 8. LET'S WORK TOGETHER (Contact form, live statuses) */}
        <Contact ref={contactRef} darkMode={darkMode} />

        {/* 9. ELGANT FOOTER */}
        <Footer darkMode={darkMode} />

      </main>

      {/* Dynamic WhatsApp floating help hub */}
      <a
        href="https://wa.me/8801700000000"
        target="_blank"
        rel="noreferrer"
        title="Ping via WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-sm font-bold border border-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

    </div>
  );
}
