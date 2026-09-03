import React from 'react';
import { 
  ArrowDown, 
  FileDown, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Sparkles, 
  Cpu, 
  Terminal,
  Activity
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const top = projectsEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-12 px-4 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] mb-6 animate-pulse-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>BSc in CSE @ Islamic University of Technology</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Activity className="w-3 h-3" /> Active Building
          </span>
        </div>

        {/* Main Name Heading with Cyberpunk Glitch-free Glow */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block text-slate-400 text-lg sm:text-xl md:text-2xl font-mono font-normal tracking-normal mb-2 text-cyan-400/80">
            &lt;Hello World, I'm /&gt;
          </span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
            {portfolioData.personal.name}
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-mono text-cyan-300/90 mb-6 max-w-3xl">
          <span className="text-slate-300">Computer Science & Engineering Student</span>
          <span className="text-cyan-500 hidden sm:inline">•</span>
          <span className="text-emerald-300">Developer</span>
          <span className="text-cyan-500 hidden sm:inline">•</span>
          <span className="text-cyan-200">AI / Computer Vision Enthusiast</span>
        </div>

        {/* Short Introduction */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-normal">
          {portfolioData.personal.heroIntro}
        </p>

        {/* Call to Actions (Explore & Download CV) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Explore My Work Button */}
          <a
            href="#projects"
            onClick={scrollToProjects}
            data-cursor="pointer"
            className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-glow hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-dark-950 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Download CV Button */}
          <a
            href={portfolioData.personal.cvDownloadPath}
            download={portfolioData.personal.cvFileName}
            data-cursor="pointer"
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-medium text-cyan-200 bg-dark-900/80 hover:bg-dark-800 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Download CV</span>
            <span className="text-[10px] text-slate-400 bg-dark-950 px-1.5 py-0.5 rounded border border-white/10">.PDF</span>
          </a>
        </div>

        {/* Social / Contact Links Bar */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            Connect & Coordinates
          </span>
          
          <div className="flex items-center gap-3 sm:gap-4 p-2 rounded-2xl bg-dark-900/60 border border-white/5 backdrop-blur-md">
            {/* GitHub */}
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              aria-label="GitHub Profile"
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-dark-800/80 border border-white/10 hover:border-cyan-400 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              aria-label="LinkedIn Profile"
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-dark-800/80 border border-white/10 hover:border-cyan-400 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">LinkedIn</span>
            </a>

            {/* Facebook */}
            <a
              href={portfolioData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              aria-label="Facebook Profile"
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-dark-800/80 border border-white/10 hover:border-cyan-400 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Facebook</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.socials.email}`}
              data-cursor="pointer"
              aria-label="Email Contact"
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-dark-800/80 border border-white/10 hover:border-emerald-400 hover:bg-emerald-950/40 text-slate-300 hover:text-emerald-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Scroll Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
};
