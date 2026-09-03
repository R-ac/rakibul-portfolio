import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Binary, 
  Layers, 
  Compass, 
  GraduationCap, 
  Terminal as TerminalIcon,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Terminal } from './Terminal';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Neural models, deep learning architectures, and automated pattern learning.',
      icon: BrainCircuit,
      color: 'cyan',
    },
    {
      title: 'Computer Vision',
      description: 'Medical image processing, SPECT scan analysis, and anatomical segmentation.',
      icon: Cpu,
      color: 'emerald',
    },
    {
      title: 'Algorithms & Structures',
      description: 'Mathematical problem solving, computational complexity, and efficient logic.',
      icon: Binary,
      color: 'cyan',
    },
    {
      title: 'Software Development',
      description: 'System design, modular application engineering, and interactive tools.',
      icon: Code2,
      color: 'emerald',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // IDENTITY & PASSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Card & Core Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Bio Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Undergraduate Scholar & Builder</h3>
                  <p className="text-xs font-mono text-cyan-400">Islamic University of Technology (IUT)</p>
                </div>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {portfolioData.personal.aboutBio}
              </p>

              {/* Technical Profile Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-400">Department:</span>
                  <span className="text-white font-semibold">CSE</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-300 font-semibold">Undergraduate</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-white font-semibold">AI & Vision</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-400">Core Drive:</span>
                  <span className="text-white font-semibold">Practical Systems</span>
                </div>
              </div>
            </div>

            {/* 4 Core Focus Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, idx) => {
                const Icon = area.icon;
                const isEmerald = area.color === 'emerald';
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border bg-dark-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                      isEmerald
                        ? 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-sm'
                        : 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${isEmerald ? 'bg-emerald-950/60 text-emerald-400' : 'bg-cyan-950/60 text-cyan-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-100">{area.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-1">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Embedded Interactive Terminal (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>INTERACTIVE_CONSOLE</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">LIVE SHELL</span>
            </div>
            <Terminal />
          </div>

        </div>

      </div>
    </section>
  );
};
