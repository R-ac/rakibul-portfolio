import React from 'react';
import { GraduationCap, Award, School, Building2, CheckCircle2, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02 // ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
          
          {portfolioData.education.map((item, index) => {
            const isCurrent = item.isCurrent;
            return (
              <div 
                key={index}
                className="relative group transition-all duration-300"
              >
                {/* Glowing Timeline Marker Node */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dark-950 border-2 transition-all duration-300 ${
                    isCurrent 
                      ? 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_#00f2fe]' 
                      : 'border-emerald-400/80 text-emerald-300 shadow-[0_0_10px_rgba(0,255,157,0.3)]'
                  }`}
                >
                  {item.type === 'University' && <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {item.type === 'College' && <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {item.type === 'School' && <School className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>

                {/* Timeline Card */}
                <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? 'glass-card hover:border-cyan-400/60 shadow-cyan-glow'
                    : 'glass-card hover:border-emerald-500/40 hover:shadow-emerald-sm'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-dark-800 border border-white/10 text-cyan-300 flex items-center gap-1.5">
                      {isCurrent ? (
                        <>
                          <Clock className="w-3 h-3 text-cyan-400 animate-spin" />
                          <span>CURRENT PROGRAM</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>COMPLETED</span>
                        </>
                      )}
                    </span>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                      isCurrent 
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' 
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {item.resultOrStatus}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-sm sm:text-base text-slate-300 font-medium">
                    <span>{item.institution}</span>
                  </div>

                  {item.type === 'University' && (
                    <p className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                      // Specializing in Algorithms, Artificial Intelligence, and Computer Vision System architectures.
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
