import React, { useState } from 'react';
import { 
  Cpu, 
  Code, 
  Coffee, 
  Terminal as TerminalIcon, 
  Binary, 
  BrainCircuit, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(portfolioData.skills[0]);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Language' | 'Library / Framework'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Cpu': return Cpu;
      case 'Coffee': return Coffee;
      case 'Terminal': return TerminalIcon;
      case 'Binary': return Binary;
      case 'BrainCircuit': return BrainCircuit;
      default: return Code;
    }
  };

  const filteredSkills = portfolioData.skills.filter((skill) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Language') return skill.category === 'Language';
    return skill.category === 'Library' || skill.category === 'Framework';
  });

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>03 // CORE ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
          <p className="text-slate-400 text-sm max-w-lg mt-4">
            Interactive skill matrix representing algorithmic foundations, computational libraries, and machine learning toolkits.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(['All', 'Language', 'Library / Framework'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              data-cursor="pointer"
              className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 shadow-cyan-sm font-semibold'
                  : 'bg-dark-900/60 border border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid and Detail Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Skills Interactive Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const Icon = getIcon(skill.iconName);
              const isSelected = selectedSkill?.name === skill.name;
              const isEmerald = skill.badgeColor === 'emerald';

              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  data-cursor="pointer"
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${
                    isSelected
                      ? isEmerald
                        ? 'bg-emerald-950/40 border-emerald-400 shadow-emerald-glow scale-105'
                        : 'bg-cyan-950/40 border-cyan-400 shadow-cyan-glow scale-105'
                      : 'bg-dark-900/60 border-white/10 hover:border-cyan-500/40 hover:bg-dark-800/80 hover:-translate-y-1'
                  }`}
                >
                  <div className={`p-3.5 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    isSelected
                      ? isEmerald ? 'bg-emerald-900/50 text-emerald-300' : 'bg-cyan-900/50 text-cyan-300'
                      : 'bg-dark-800 text-slate-300 group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isEmerald 
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50' 
                      : 'bg-cyan-950 text-cyan-400 border border-cyan-800/50'
                  }`}>
                    {skill.category}
                  </span>

                  {isSelected && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isEmerald ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${isEmerald ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Skill Deep Inspection HUD Card (5 Cols) */}
          <div className="lg:col-span-5">
            {selectedSkill ? (
              <div className="h-full p-6 sm:p-8 rounded-2xl glass-card border border-cyan-500/40 shadow-cyan-glow flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        TELEMETRY // {selectedSkill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-dark-800 border border-white/10 text-slate-300">
                      {selectedSkill.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                      {React.createElement(getIcon(selectedSkill.iconName), { className: 'w-8 h-8' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{selectedSkill.name}</h3>
                      <p className="text-xs font-mono text-cyan-400/80">Primary Competency</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                      Common Usage & Engineering Application:
                    </span>
                    <p className="text-slate-200 text-sm leading-relaxed bg-dark-950/60 p-4 rounded-xl border border-white/5 font-sans">
                      {selectedSkill.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>Stack Status: Active</span>
                  <span className="text-emerald-400">● Operational</span>
                </div>
              </div>
            ) : (
              <div className="h-full p-8 rounded-2xl glass-card flex flex-col items-center justify-center text-center text-slate-400">
                <p>Hover or click on any skill to inspect its technical details.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
