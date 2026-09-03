import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  BrainCircuit, 
  Eye, 
  Gamepad2, 
  Dumbbell, 
  Cpu, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Computer Vision & AI', 'Game Dev', 'Apps & Hardware'];

  const getProjectIcon = (category: string) => {
    if (category.includes('Computer Vision') || category.includes('AI')) return BrainCircuit;
    if (category.includes('Game Development')) return Gamepad2;
    if (category.includes('Application Development')) return Dumbbell;
    if (category.includes('Digital Logic') || category.includes('Hardware')) return Cpu;
    return FolderGit2;
  };

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Computer Vision & AI') return project.category.includes('Computer Vision') || project.category.includes('AI');
    if (activeCategory === 'Game Dev') return project.category.includes('Game Development');
    if (activeCategory === 'Apps & Hardware') return project.category.includes('Application') || project.category.includes('Digital Logic');
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // FEATURED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
          <p className="text-slate-400 text-sm max-w-lg mt-4">
            A showcase of AI algorithms, medical imaging experiments, simulation engines, and system utilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-cursor="pointer"
              className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 shadow-cyan-sm font-semibold'
                  : 'bg-dark-900/60 border border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = getProjectIcon(project.category);
            const isWorkingOn = project.status === 'Currently Working On';

            return (
              <div
                key={project.id}
                data-cursor="project"
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl glass-card p-6 border border-white/10 hover:border-cyan-500/50 hover:bg-dark-900/90 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-cyan-glow hover:-translate-y-1.5"
              >
                {/* Background Glow Accent on Card Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-dark-800 border border-white/10 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isWorkingOn && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Ongoing
                        </span>
                      )}
                      <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/50 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Category Subtitle */}
                  <span className="text-[11px] font-mono text-cyan-400/90 block mb-1">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tags & Action Bar */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-white/5 text-slate-400 group-hover:border-cyan-500/20 group-hover:text-slate-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span>Click for details</span>
                    <span className="text-[11px] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
