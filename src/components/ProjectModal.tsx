import React, { useEffect } from 'react';
import { X, Github, ExternalLink, AlertCircle, Sparkles, Tag, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-dark-900 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,242,254,0.25)] p-6 sm:p-8 overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          data-cursor="pointer"
          className="absolute top-4 right-4 p-2 rounded-xl bg-dark-800 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
              {project.category}
            </span>
            {project.status && (
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {project.status}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            {project.title}
          </h3>
        </div>

        {/* Research Disclaimer (Crucial for Parkinson's detection project) */}
        {project.isResearch && project.researchDisclaimer && (
          <div className="mb-6 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 text-xs text-cyan-200">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-cyan-300">Research & Development Notice:</span>
              <p className="text-slate-300">{project.researchDisclaimer}</p>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1.5">Overview</h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>
        </div>

        {/* Tags / Domains */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-cyan-400" />
            <span>Category & Domains</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-dark-800 border border-white/10 text-xs font-mono text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs font-mono text-slate-500">
            Repository // Md. Rakibul Islam
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-glow transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
