import React, { useState } from 'react';

import {
  Search,
  X,
  Eye,
  Code,
  ArrowRight
} from 'lucide-react';

import { Project } from '../types';

interface ProjectsProps {
  darkMode: boolean;
  projects: Project[];
}

export default function Projects({
  darkMode,
  projects
}: ProjectsProps) {

  const [activeCategory, setActiveCategory] =
    useState('All');

  const [searchQuery, setSearchQuery] =
    useState('');

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  /* Dynamic Categories */
  const categories = [
    'All',
    ...new Set(projects.map((p) => p.category))
  ];

  /* Filter Projects */
  const filteredProjects = projects.filter((proj) => {

    const matchesCategory =
      activeCategory === 'All' ||
      proj.category === activeCategory;

    const matchesSearch =
      proj.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||

      proj.shortDesc
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="py-24 relative"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-xs font-bold uppercase tracking-widest text-purple-500">
            Projects
          </span>

          <h3
            className={`text-4xl sm:text-5xl font-black mt-4 ${
              darkMode
                ? 'text-white'
                : 'text-black'
            }`}
          >
            Showcase of Projects
          </h3>

          <p
            className={`mt-4 text-sm max-w-2xl mx-auto ${
              darkMode
                ? 'text-gray-400'
                : 'text-neutral-600'
            }`}
          >
            Explore professional and academic works.
          </p>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">

          {/* Categories */}
          <div className="flex flex-wrap gap-2">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat)
                }
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white'
                    : darkMode
                    ? 'bg-neutral-900 text-gray-400 hover:bg-neutral-800'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none ${
                darkMode
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-black'
              }`}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((proj) => (

            <div
              key={proj.id}
              onClick={() =>
                setSelectedProject(proj)
              }
              className={`rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? 'bg-neutral-950 border border-white/10'
                  : 'bg-white border border-black/10'
              }`}
            >

              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={
                    proj.thumbnail ||
                    '/projects/default.jpg'
                  }
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                  <div className="bg-white text-black px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2">

                    <Eye size={16} />

                    View Project
                  </div>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4">

                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4">

                  <h3 className="text-white text-2xl font-bold">
                    {proj.title}
                  </h3>

                  <span className="text-purple-300 text-sm">
                    {proj.year}
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
                  {proj.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {proj.techStack?.map(
                    (tech, index) => (

                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-lg ${
                          darkMode
                            ? 'bg-white/10 text-gray-300'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Open */}
                <div className="mt-5 flex items-center gap-2 text-purple-500 font-bold text-sm">

                  Open Case Study

                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (

          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto p-4">

            <div
              className={`relative max-w-6xl mx-auto my-10 rounded-3xl p-6 md:p-10 ${
                darkMode
                  ? 'bg-neutral-950 text-white'
                  : 'bg-white text-black'
              }`}
            >

              {/* Close */}
              <button
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute top-5 right-5 bg-black/20 hover:bg-black/30 p-3 rounded-full z-50 transition"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-12">

                <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>

                <h2 className="text-4xl md:text-5xl font-black mt-5">
                  {selectedProject.title}
                </h2>

                <p className="mt-5 text-gray-400 max-w-3xl leading-relaxed">
                  {selectedProject.shortDesc}
                </p>
              </div>

              {/* Images */}
              {selectedProject.images &&
                selectedProject.images.length > 0 && (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

                  {selectedProject.images.map(
                    (img, index) => (

                      <div
                        key={index}
                        className="rounded-2xl overflow-hidden"
                      >

                        <img
                          src={img}
                          alt={`Project ${index + 1}`}
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Problem + Solution */}
              <div className="grid md:grid-cols-2 gap-10 mb-14">

                {/* Problem */}
                <div>

                  <h3 className="text-2xl font-bold text-purple-400 mb-5">
                    Problem
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>

                  <h3 className="text-2xl font-bold text-purple-400 mb-5">
                    Solution
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              {selectedProject.results && (

                <div className="mb-14">

                  <h3 className="text-2xl font-bold text-emerald-400 mb-5">
                    Results
                  </h3>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-emerald-300 leading-relaxed">
                    {selectedProject.results}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-14">

                <h3 className="text-2xl font-bold mb-5">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">

                  {selectedProject.techStack?.map(
                    (tech, index) => (

                      <span
                        key={index}
                        className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* GitHub */}
              {selectedProject.githubLink && (

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-4 rounded-2xl font-bold"
                >

                  <Code size={18} />

                  View GitHub Repository
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// import React, { useState } from 'react';

// import {
//   Search,
//   X,
//   Eye,
//   Code,
//   ArrowRight
// } from 'lucide-react';

// import { Project } from '../types';

// interface ProjectsProps {
//   darkMode: boolean;
//   projects: Project[];
// }

// export default function Projects({
//   darkMode,
//   projects
// }: ProjectsProps) {

//   const [activeCategory, setActiveCategory] =
//     useState('All');

//   const [searchQuery, setSearchQuery] =
//     useState('');

//   const [selectedProject, setSelectedProject] =
//     useState<Project | null>(null);

//   const categories = [
//     'All',
//     'Product Design',
//     'UI/UX',
//     'Software Testing',
//     'AI Automation',
//     'Fullstack'
//   ];

//   /* Filter */
//   const filteredProjects = projects.filter((proj) => {

//     const matchesCategory =
//       activeCategory === 'All' ||
//       proj.category === activeCategory;

//     const matchesSearch =
//       proj.title
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||

//       proj.shortDesc
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());

//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section
//       id="projects"
//       className="py-24 relative"
//     >

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-12">

//           <span className="text-xs font-bold uppercase tracking-widest text-purple-500">
//             Projects
//           </span>

//           <h3
//             className={`text-4xl sm:text-5xl font-black mt-4 ${
//               darkMode
//                 ? 'text-white'
//                 : 'text-black'
//             }`}
//           >
//             Showcase of Projects
//           </h3>

//           <p
//             className={`mt-4 text-sm max-w-2xl mx-auto ${
//               darkMode
//                 ? 'text-gray-400'
//                 : 'text-neutral-600'
//             }`}
//           >
//             Explore professional and academic works.
//           </p>
//         </div>

//         {/* Filter + Search */}
//         <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">

//           {/* Categories */}
//           <div className="flex flex-wrap gap-2">

//             {categories.map((cat) => (

//               <button
//                 key={cat}
//                 onClick={() =>
//                   setActiveCategory(cat)
//                 }
//                 className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
//                   activeCategory === cat
//                     ? 'bg-purple-600 text-white'
//                     : darkMode
//                     ? 'bg-neutral-900 text-gray-400 hover:bg-neutral-800'
//                     : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Search */}
//           <div className="relative w-full md:w-80">

//             <Search
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchQuery}
//               onChange={(e) =>
//                 setSearchQuery(e.target.value)
//               }
//               className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none ${
//                 darkMode
//                   ? 'bg-neutral-900 text-white'
//                   : 'bg-neutral-100 text-black'
//               }`}
//             />
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {filteredProjects.map((proj) => (

//             <div
//               key={proj.id}
//               onClick={() =>
//                 setSelectedProject(proj)
//               }
//               className={`rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 ${
//                 darkMode
//                   ? 'bg-neutral-950 border border-white/10'
//                   : 'bg-white border border-black/10'
//               }`}
//             >

//               {/* Thumbnail */}
//               <div className="relative h-64 overflow-hidden">

//                 {/* Image */}
//                 <img
//                   src={proj.thumbnail}
//                   alt={proj.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40" />

//                 {/* Hover */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

//                   <div className="bg-white text-black px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2">

//                     <Eye size={16} />

//                     View Project
//                   </div>
//                 </div>

//                 {/* Category */}
//                 <div className="absolute top-4 left-4">

//                   <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
//                     {proj.category}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-4 left-4">

//                   <h3 className="text-white text-2xl font-bold">
//                     {proj.title}
//                   </h3>

//                   <span className="text-purple-300 text-sm">
//                     {proj.year}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">

//                 <p
//                   className={`text-sm leading-relaxed ${
//                     darkMode
//                       ? 'text-gray-400'
//                       : 'text-neutral-600'
//                   }`}
//                 >
//                   {proj.shortDesc}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mt-5">

//                   {proj.techStack.map(
//                     (tech, index) => (

//                       <span
//                         key={index}
//                         className={`text-xs px-3 py-1 rounded-lg ${
//                           darkMode
//                             ? 'bg-white/10 text-gray-300'
//                             : 'bg-neutral-100 text-neutral-700'
//                         }`}
//                       >
//                         {tech}
//                       </span>
//                     )
//                   )}
//                 </div>

//                 {/* Open */}
//                 <div className="mt-5 flex items-center gap-2 text-purple-500 font-bold text-sm">

//                   Open Case Study

//                   <ArrowRight size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedProject && (

//           <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto">

//             <div
//               className={`relative max-w-6xl mx-auto my-10 rounded-3xl p-6 md:p-10 ${
//                 darkMode
//                   ? 'bg-neutral-950 text-white'
//                   : 'bg-white text-black'
//               }`}
//             >

//               {/* Close */}
//               <button
//                 onClick={() =>
//                   setSelectedProject(null)
//                 }
//                 className="absolute top-5 right-5 bg-black/20 p-3 rounded-full z-50"
//               >
//                 <X size={18} />
//               </button>

//               {/* Header */}
//               <div className="mb-12">

//                 <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm">
//                   {selectedProject.category}
//                 </span>

//                 <h2 className="text-4xl md:text-5xl font-black mt-5">
//                   {selectedProject.title}
//                 </h2>

//                 <p className="mt-5 text-gray-400 max-w-3xl leading-relaxed">
//                   {selectedProject.shortDesc}
//                 </p>
//               </div>

//               {/* Images */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

//                 {selectedProject.images.map(
//                   (img, index) => (

//                     <div
//                       key={index}
//                       className="rounded-2xl overflow-hidden"
//                     >

//                       <img
//                         src={img}
//                         alt={`Project ${index}`}
//                         className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   )
//                 )}
//               </div>

//               {/* Problem + Solution */}
//               <div className="grid md:grid-cols-2 gap-10 mb-14">

//                 {/* Problem */}
//                 <div>

//                   <h3 className="text-2xl font-bold text-purple-400 mb-5">
//                     Problem
//                   </h3>

//                   <p className="leading-relaxed text-gray-400">
//                     {selectedProject.problem}
//                   </p>
//                 </div>

//                 {/* Solution */}
//                 <div>

//                   <h3 className="text-2xl font-bold text-purple-400 mb-5">
//                     Solution
//                   </h3>

//                   <p className="leading-relaxed text-gray-400">
//                     {selectedProject.solution}
//                   </p>
//                 </div>
//               </div>

//               {/* Results */}
//               <div className="mb-14">

//                 <h3 className="text-2xl font-bold text-emerald-400 mb-5">
//                   Results
//                 </h3>

//                 <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-emerald-300 leading-relaxed">
//                   {selectedProject.results}
//                 </div>
//               </div>

//               {/* Technologies */}
//               <div className="mb-14">

//                 <h3 className="text-2xl font-bold mb-5">
//                   Technologies
//                 </h3>

//                 <div className="flex flex-wrap gap-3">

//                   {selectedProject.techStack.map(
//                     (tech, index) => (

//                       <span
//                         key={index}
//                         className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20"
//                       >
//                         {tech}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* GitHub */}
//               <a
//                 href={selectedProject.githubLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-4 rounded-2xl font-bold"
//               >

//                 <Code size={18} />

//                 View GitHub Repository
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }