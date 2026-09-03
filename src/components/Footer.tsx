import React from 'react';
import { Terminal, Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark-950 pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-900 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold font-mono text-white tracking-wider">
            {portfolioData.personal.name}
          </span>
        </div>

        {/* Quote */}
        <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 font-mono">
          "{portfolioData.personal.footerQuote}"
        </p>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-400 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-400 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            aria-label="Facebook Profile"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-400 transition-all"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${portfolioData.socials.email}`}
            data-cursor="pointer"
            aria-label="Email"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-emerald-400 hover:text-emerald-300 text-slate-400 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & System Details */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {portfolioData.personal.copyrightYear} {portfolioData.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80">Islamic University of Technology</span>
            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
