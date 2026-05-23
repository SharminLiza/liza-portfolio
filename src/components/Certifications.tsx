
import { useState } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Certificate } from '../types';
interface CertificationsProps {
  darkMode: boolean;
  certificates: Certificate[];
}

export default function Certifications({ darkMode, certificates }: CertificationsProps) {
  // const handleViewCertificate = (certTitle: string) => {
  //   alert(`📄 View Academic Record & Certificate!\n\nCredential Reference: UIU-AC-2026\nCourse / Program Area: "${certTitle}"\nStatus: Active authentication with highest class honors.`);
  // };
const [showCertificate, setShowCertificate] =
  useState(true);
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
            05 . Credentials
          </span>
          <h3 className={`text-3xl sm:text-4xl font-display font-black mt-3 leading-none ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Courses & Certifications
          </h3>
          <p className={`text-sm mt-3 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
            Honorable credentials in product design loop, software testing pipelines, and AI-powered automation frameworks.
          </p>
        </div>

        {/* Unified Credentials Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="w-full flex">
              
              {/* Dynamic Certificate Card Sheet */}
              <div className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between w-full min-h-[260px] relative transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? 'bg-neutral-950 border-white/5 hover:border-purple-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-black/8 hover:border-purple-650/30 hover:shadow-xl'
              }`}>
                
                {/* Background glow watermark */}
                <div className="absolute top-2 right-2 opacity-[0.03] text-purple-500">
                  <Award size={120} />
                </div>

                <div className="space-y-4 relative z-10 text-left flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/30">
                          <ShieldCheck size={11} />
                        </span>
                        <span className={`text-[9px] font-mono uppercase tracking-wider ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} font-bold`}>
                          Verified Credential
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono ${darkMode ? 'text-gray-500' : 'text-neutral-450'}`}>
                        Issued: {cert.year}
                      </span>
                    </div>

                    {/* Main Credentials details */}
                    <div className="space-y-1">
                      <h4 className={`text-base sm:text-lg font-display font-bold leading-snug tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                        {cert.title}
                      </h4>
                      <p className={`text-xs font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-650'}`}>
                        Grantor: {cert.organization}
                      </p>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mt-4 ${darkMode ? 'text-gray-400' : 'text-neutral-550'}`}>
                    Rigorous testing methodology, dynamic system analysis, interactive interface maps, and modern computing tools completed with distinction standing.
                  </p>
                </div>

                {/* Footer alignment button links */}
                <div className="flex justify-between items-center border-t border-neutral-700/20 pt-4 mt-5 relative z-10 select-none">
                  <span className={`text-[9.5px] font-mono uppercase tracking-wider font-bold ${darkMode ? 'text-zinc-500' : 'text-neutral-450'}`}>
                    &mdash; Verified
                  </span>
                  
                  <button
                     onClick={() => setShowCertificate(true)}
           className="px-4 py-2 rounded-2xl bg-purple-500 hover:bg-purple-700 text-white font-normal transition-all"
                  >
                    {/* <Award size={12} /> */}
                    VIEW CERTIFICATE
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
