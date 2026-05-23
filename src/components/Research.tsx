import React, { useState } from 'react';
import {
  Download,
  CheckCircle,
  Clock,
  Sparkles,
  X,
  Eye
} from 'lucide-react';

import { ResearchPaper } from '../types';

interface ResearchProps {
  darkMode: boolean;
  papers: ResearchPaper[];
}

export default function Research({
  darkMode,
  papers
}: ResearchProps) {

  const [activeTab, setActiveTab] =
    useState<string>('All');

  const [selectedPaper, setSelectedPaper] =
    useState<ResearchPaper | null>(null);

  const tabs = [
    'All',
    'Completed',
    'In review',
    'In Progress'
  ];

  /* Filter Papers */
  const filteredPapers =
    papers.filter((paper) => {

      if (activeTab === 'All')
        return true;

      return (
        paper.status.toLowerCase() ===
        activeTab.toLowerCase()
      );
    });

  /* Status Badge */
  const getStatusBadge = (
    status: string
  ) => {

    switch (status) {

      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            <CheckCircle size={10} />
            Completed
          </span>
        );

      case 'In review':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
            <Clock size={10} />
            In Review
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
            <Sparkles size={10} />
            In Progress
          </span>
        );
    }
  };

  return (
    <section
      id="research"
      className="py-24 relative"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
            04 . Publications
          </span>

          <h3
            className={`text-4xl sm:text-5xl font-black mt-4 ${
              darkMode
                ? 'text-white'
                : 'text-black'
            }`}
          >
            Research & Publications
          </h3>

          <p
            className={`mt-4 text-sm max-w-2xl mx-auto ${
              darkMode
                ? 'text-gray-400'
                : 'text-neutral-600'
            }`}
          >
            Research works focused on AI,
            healthcare ML, sustainability,
            and intelligent systems.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : darkMode
                  ? 'bg-neutral-900 text-gray-400 hover:bg-neutral-800'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {filteredPapers.map((paper) => (

            <div
              key={paper.id}
              onClick={() =>
                setSelectedPaper(paper)
              }
              className={`rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 group ${
                darkMode
                  ? 'bg-neutral-950 border border-white/10'
                  : 'bg-white border border-black/10'
              }`}
            >

              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={
                    paper.thumbnail ||
                    '/research/default.jpg'
                  }
                  alt={paper.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                  <div className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">

                    <Eye size={16} />

                    View Research
                  </div>
                </div>

                {/* Status */}
                <div className="absolute top-4 left-4">
                  {getStatusBadge(paper.status)}
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4">

                  <h3 className="text-white text-2xl font-bold leading-tight">
                    {paper.title}
                  </h3>

                  <span className="text-purple-300 text-sm">
                    {paper.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode
                      ? 'text-gray-400'
                      : 'text-neutral-600'
                  }`}
                >
                  {paper.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {paper.tags.map(
                    (tag, index) => (

                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-lg ${
                          darkMode
                            ? 'bg-white/10 text-gray-300'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                {/* Open */}
                <div className="mt-5 flex items-center gap-2 text-purple-500 font-bold text-sm">

                  Open Research Details

                  <Eye size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPaper && (

          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto">

            <div
              className={`relative max-w-5xl mx-auto my-10 rounded-3xl p-6 md:p-10 ${
                darkMode
                  ? 'bg-neutral-950 text-white'
                  : 'bg-white text-black'
              }`}
            >

              {/* Close */}
              <button
                onClick={() =>
                  setSelectedPaper(null)
                }
                className="absolute top-5 right-5 bg-black/20 p-3 rounded-full z-50"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="rounded-3xl overflow-hidden mb-10">

                <img
                  src={
                    selectedPaper.thumbnail ||
                    '/research/default.jpg'
                  }
                  alt={selectedPaper.title}
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Header */}
              <div className="mb-10">

                <div className="flex items-center gap-3 mb-4">
                  {getStatusBadge(
                    selectedPaper.status
                  )}
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  {selectedPaper.title}
                </h2>

                <p className="mt-3 text-purple-400 text-sm font-medium">
                  {selectedPaper.year}
                </p>

                <p
                  className={`mt-5 leading-relaxed max-w-4xl ${
                    darkMode
                      ? 'text-gray-400'
                      : 'text-neutral-600'
                  }`}
                >
                  {selectedPaper.summary}
                </p>
              </div>

              {/* Authors */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Authors
                </h3>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? 'text-gray-400'
                      : 'text-neutral-700'
                  }`}
                >
                  {selectedPaper.authors}
                </p>
              </div>

              {/* Abstract */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Abstract
                </h3>

                <div
                  className={`rounded-2xl p-6 border leading-relaxed ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-gray-300'
                      : 'bg-neutral-50 border-black/10 text-neutral-700'
                  }`}
                >
                  {selectedPaper.abstract}
                </div>
              </div>

              {/* Contributions */}
              {selectedPaper.contributions && (

                <div className="mb-10">

                  <h3 className="text-2xl font-bold text-purple-400 mb-4">
                    Key Contributions
                  </h3>

                  <div className="space-y-3">

                    {selectedPaper.contributions.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className={`p-4 rounded-xl border ${
                            darkMode
                              ? 'bg-white/5 border-white/10'
                              : 'bg-neutral-50 border-black/10'
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mb-12">

                <h3 className="text-2xl font-bold mb-5">
                  Research Areas
                </h3>

                <div className="flex flex-wrap gap-3">

                  {selectedPaper.tags.map(
                    (
                      tag,
                      index
                    ) => (

                      <span
                        key={index}
                        className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* PDF Button */}
              <a
                href={
                  selectedPaper.pdfLink
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition-colors text-white px-7 py-4 rounded-2xl font-bold shadow-2xl"
              >

                <Download size={20} />

                View Github
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// import React, { useState } from 'react';
// import { FileText, Calendar, BookOpen, Download, HelpCircle, CheckCircle, Clock, Sparkles, X, Eye } from 'lucide-react';
// import { ResearchPaper } from '../types';

// interface ResearchProps {
//   darkMode: boolean;
//   papers: ResearchPaper[];
// }

// export default function Research({ darkMode, papers }: ResearchProps) {
//   const [activeTab, setActiveTab] = useState<string>('All');
//   const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
//   const [hoveredPaperId, setHoveredPaperId] = useState<string | null>(null);

//   const tabs = ['All', 'Completed', 'In review', 'In Progress'];

//   const filteredPapers = papers.filter((p) => {
//     if (activeTab === 'All') return true;
//     return p.status.toLowerCase() === activeTab.toLowerCase();
//   });

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'Completed':
//         return (
//           <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
//             <CheckCircle size={10} /> Completed
//           </span>
//         );
//       case 'In review':
//         return (
//           <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
//             <Clock size={10} className="animate-pulse" /> Peer Review
//           </span>
//         );
//       default:
//         return (
//           <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
//             <Sparkles size={10} className="animate-spin" /> In Progress
//           </span>
//         );
//     }
//   };

//   const handleDownloadPaper = (paperTitle: string) => {
//     alert(`📥 Simulated Document Download:\n\nPreparing pre-print PDF archive for "${paperTitle}" under indexing credentials.`);
//   };

//   return (
//     <section id="research" className="py-24 relative bg-black/5 dark:bg-white/[0.01]">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Heading */}
//         <div className="mb-14 text-center">
//           <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
//             04 . Intellectual
//           </span>
//           <h3 className={`text-3xl sm:text-4xl font-display font-extrabold mt-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
//             Research & Publications
//           </h3>
//           <p className={`text-sm mt-3 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
//             Investigating foundational frameworks in ML, medical image modeling, and energy-aware sustainable parameters.
//           </p>
//         </div>

//         {/* Categories row */}
//         <div className="flex justify-center gap-2 mb-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer ${
//                 activeTab === tab
//                   ? 'bg-purple-650 text-white shadow-lg'
//                   : darkMode
//                   ? 'bg-neutral-900 border border-white/5 text-gray-400 hover:text-white'
//                   : 'bg-neutral-100 border border-black/5 text-neutral-600 hover:text-neutral-950'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Publications Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredPapers.map((paper) => (
//             <div
//               key={paper.id}
//               className={`p-6 rounded-2xl border flex flex-col justify-between h-full transition-all hover:-translate-y-1 relative overflow-hidden group ${
//                 darkMode
//                   ? 'glass-card-dark hover:border-purple-500/30 shadow-xl'
//                   : 'glass-card-light hover:border-purple-650/30 hover:shadow-xl'
//               }`}
//               onMouseEnter={() => setHoveredPaperId(paper.id)}
//               onMouseLeave={() => setHoveredPaperId(null)}
//             >
//               <div className="space-y-4">
//                 <div className="flex justify-between items-start gap-3">
//                   {getStatusBadge(paper.status)}
//                   <span className={`text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>
//                     Year: {paper.year}
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <h4 className={`text-base sm:text-lg font-display font-bold leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
//                     {paper.title}
//                   </h4>
//                   <p className={`text-[10px] font-mono flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>
//                     <UsersIcon size={12} /> Authors: {paper.authors}
//                   </p>
//                 </div>

//                 <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-700'}`}>
//                   {paper.summary}
//                 </p>

//                 {/* Tags row */}
//                 <div className="flex flex-wrap gap-1">
//                   {paper.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className={`text-[9px] font-mono px-2 py-0.5 rounded ${
//                         darkMode ? 'bg-white/5 text-gray-400' : 'bg-neutral-100 text-neutral-600 border border-neutral-250'
//                       }`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons inside Card */}
//               <div className="flex gap-3 pt-6 border-t border-neutral-750/30 mt-6 select-none justify-end">
//                 <button
//                   onClick={() => setSelectedPaper(paper)}
//                   className={`px-3 py-1.8 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
//                     darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
//                   }`}
//                 >
//                   <Eye size={12} /> Abs Preview
//                 </button>
//                 <button
//                   onClick={() => handleDownloadPaper(paper.title)}
//                   className="px-3 py-1.8 rounded-xl text-xs font-mono bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
//                 >
//                   <Download size={12} /> Draft PDF
//                 </button>
//               </div>

//               {/* ADVANCED REVEAL HOVER OVERLAY (Next Document Page / Thesis Sheet Preview representation) */}
//               <div
//                 className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-550 pointer-events-none z-30 ${
//                   hoveredPaperId === paper.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-2'
//                 } ${darkMode ? 'bg-[#0a0a0a]/98' : 'bg-white/98'}`}
//               >
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between border-b pb-2 border-purple-500/10">
//                     <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
//                       &mdash; Next Page Preview
//                     </span>
//                     <span className="text-[9px] font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-purple-400 font-semibold">IEEE Layout</span>
//                   </div>
                  
//                   <div className="space-y-1.5 pt-1">
//                     <h5 className={`text-[11px] font-mono uppercase tracking-wider font-bold ${darkMode ? 'text-zinc-300' : 'text-neutral-700'}`}>
//                       Abstract & Dataset Parameters
//                     </h5>
//                     <div className={`p-2.5 rounded-lg text-[10px] leading-relaxed border ${
//                       darkMode ? 'bg-white/5 border-white/5 text-zinc-300' : 'bg-neutral-50/85 border-black/5 text-neutral-800'
//                     }`}>
//                       <strong className="text-purple-650 dark:text-purple-400 font-bold">Proposed Method:</strong> Supervised extraction models mapped onto multi-user simulation registries.
//                     </div>

//                     <div className={`p-2.5 rounded-lg text-[10px] leading-relaxed border ${
//                       darkMode ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-300' : 'bg-emerald-50/50 border-emerald-600/10 text-emerald-900'
//                     }`}>
//                       <strong className="text-emerald-700 dark:text-emerald-500 font-bold">Validation Status:</strong> Certified across {paper.pdfPagesCount} A4 manuscript pages.
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between pt-2 border-t border-purple-550/10 text-[9px] font-mono">
//                   <span className="text-purple-500 dark:text-purple-400 animate-pulse flex items-center gap-1 font-semibold">
//                     <span>Click to view pre-print specifications</span>
//                     <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                   </span>
//                   <span className="text-zinc-500">IEEE DRAFT v1.12</span>
//                 </div>
//               </div>

//             </div>
//           ))}

//           {filteredPapers.length === 0 && (
//             <div className="col-span-1 md:col-span-2 text-center py-12">
//               <span className="text-2xl">📑</span>
//               <p className={`text-xs mt-2 font-mono ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>
//                 No publications found on selected status query.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Paper Abstract Lightbox Modal */}
//         {selectedPaper && (
//           <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4">
//             <div
//               className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 space-y-6 ${
//                 darkMode ? 'bg-neutral-950 border-white/10 text-white' : 'bg-white border-black/10 text-neutral-900'
//               }`}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedPaper(null)}
//                 className={`absolute top-4 right-4 p-2 rounded-full border ${
//                   darkMode ? 'border-white/10 hover:bg-white/5 text-white' : 'border-black/10 hover:bg-black/5 text-neutral-800'
//                 }`}
//               >
//                 <X size={16} />
//               </button>

//               {/* Modal header */}
//               <div>
//                 <span className="text-[9px] font-mono bg-purple-650 text-white px-2.5 py-1 rounded-full uppercase font-bold">
//                   PRE-PRINT CITATION PREVIEW
//                 </span>
//                 <h4 className="text-lg sm:text-xl font-display font-black tracking-tight mt-3">
//                   {selectedPaper.title}
//                 </h4>
//                 <p className="text-xs font-mono text-gray-500 mt-1">
//                   Year of registration: {selectedPaper.year} | Status tracker: {selectedPaper.status}
//                 </p>
//               </div>

//               {/* Research standard Abstract block */}
//               <div className={`p-5 rounded-2xl border text-xs leading-relaxed space-y-3 ${
//                 darkMode ? 'bg-neutral-900 border-white/5 text-gray-300' : 'bg-neutral-50 border-black/5 text-neutral-700'
//               }`}>
//                 <p className="font-semibold text-purple-400 font-mono text-[10px] uppercase tracking-wider">
//                   ABSTRACT DESCRIPTION:
//                 </p>
//                 <p className="italic">
//                   "This report outlines the structural framework of {selectedPaper.title}. Under peer testing environments inside collaborative labs in Dhaka, Bangladesh, we evaluate multiple algorithmic variations, mapping variables across multiple clinical database registries..."
//                 </p>
//                 <p>
//                   Our research compiles detailed quantitative validation models, proving high structural boundaries and safe execution indices across diverse hardware layers. Completed papers provide full math formulations and detailed benchmarking scripts.
//                 </p>
//                 <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono border-t border-neutral-700/20 pt-3">
//                   <span>Author Listing: {selectedPaper.authors}</span>
//                   <span>Pages Count: {selectedPaper.pdfPagesCount} A4 Pages</span>
//                 </div>
//               </div>

//               {/* HQ Document Preview Diagram / Large Image under details */}
//               <div className="space-y-1.5 pt-1 text-left">
//                 <span className="text-[10px] font-mono text-purple-500 dark:text-purple-400 font-bold uppercase tracking-wider">
//                   SYSTEM MODEL & COMPILATION FLOWCHART:
//                 </span>
//                 <div className="relative w-full rounded-xl overflow-hidden border border-neutral-350 dark:border-white/10 bg-neutral-950 h-52">
//                   <img
//                     src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80"
//                     alt="HQ Medical Research Lab Plot / Chart Data Model"
//                     referrerPolicy="no-referrer"
//                     className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.03]"
//                   />
//                   <div className="absolute top-2.5 right-2.5 bg-black/70 text-white text-[8px] font-mono px-2 py-0.5 rounded border border-white/10">
//                     Figure 1.2: Neural Distribution Plot (Analytical Model)
//                   </div>
//                 </div>
//               </div>

//               {/* Action */}
//               <div className="flex justify-end gap-3 select-none">
//                 <button
//                   onClick={() => setSelectedPaper(null)}
//                   className={`px-4 py-2 rounded-xl text-xs font-mono ${
//                     darkMode ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
//                   }`}
//                 >
//                   CLOSE PREVIEW
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleDownloadPaper(selectedPaper.title);
//                     setSelectedPaper(null);
//                   }}
//                   className="px-4 py-2 rounded-xl text-xs font-mono bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1"
//                 >
//                   DOWNLOAD pre-print ({selectedPaper.pdfPagesCount} pages)
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// // Minimal Users icon inside this file to bypass extra imports burden
// function UsersIcon({ size }: { size: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   );
// }
