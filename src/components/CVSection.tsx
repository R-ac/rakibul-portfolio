import React, { useState } from 'react';
import { FileDown, Eye, FileText, CheckCircle2, DownloadCloud, Sparkles, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CVSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="cv" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Glassmorphic CV Hub Card */}
        <div className="relative rounded-3xl glass-card p-8 sm:p-12 border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.15)]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Header Icon */}
            <div className="p-4 rounded-2xl bg-dark-900 border border-cyan-500/40 text-cyan-400 mb-6 shadow-cyan-glow">
              <FileText className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 mb-3">
              CURRICULUM VITAE // DIRECT ACCESS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Want to know more about me?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Download my official curriculum vitae containing comprehensive academic history, research projects, algorithms, and technical skills.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Download Button */}
              <a
                href={portfolioData.personal.cvDownloadPath}
                download={portfolioData.personal.cvFileName}
                data-cursor="pointer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-sm font-bold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-glow hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <DownloadCloud className="w-5 h-5" />
                <span>Download My CV</span>
                <span className="text-xs px-2 py-0.5 rounded bg-dark-950/20 font-sans font-semibold">.PDF</span>
              </a>

              {/* Preview CV Button */}
              <button
                onClick={() => setShowPreview(true)}
                data-cursor="pointer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-4 rounded-xl font-mono text-sm font-medium text-slate-200 bg-dark-900/80 hover:bg-dark-800 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Quick Details Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Format: PDF
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Verified Academic Info
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct File Path
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* CV Preview Modal */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setShowPreview(false)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] rounded-2xl bg-dark-900 border border-cyan-500/40 p-6 sm:p-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <FileText className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">{portfolioData.personal.name} - Curriculum Vitae</h3>
                <p className="text-xs font-mono text-cyan-400">Islamic University of Technology // CSE</p>
              </div>
            </div>

            {/* Structured Resume Preview Content */}
            <div className="space-y-6 text-sm text-slate-200 font-sans">
              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 font-bold">Summary</h4>
                <p className="text-slate-300 leading-relaxed">{portfolioData.personal.aboutBio}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 font-bold">Academic Record</h4>
                <div className="space-y-2">
                  {portfolioData.education.map((e, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-dark-950 border border-white/5 flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-white">{e.degree}</div>
                        <div className="text-xs text-slate-400">{e.institution}</div>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-bold">{e.resultOrStatus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 font-bold">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map((s) => (
                    <span key={s.name} className="px-2.5 py-1 rounded bg-dark-950 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                      {s.name} ({s.category})
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 font-bold">Key Projects</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {portfolioData.projects.map((p) => (
                    <div key={p.id} className="p-2.5 rounded-lg bg-dark-950 border border-white/5 text-xs">
                      <span className="font-bold text-slate-100">{p.title}</span>
                      <span className="text-slate-400 block text-[11px] mt-0.5">{p.shortDescription}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end gap-3">
              <a
                href={portfolioData.personal.cvDownloadPath}
                download={portfolioData.personal.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
