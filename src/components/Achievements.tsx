import React from 'react';
import { Award, Sparkles, PlusCircle, ExternalLink, Calendar, Milestone } from 'lucide-react';
import { portfolioData, AchievementItem } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const achievementsList = portfolioData.achievements;

  return (
    <section id="achievements" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
        </div>

        {/* Dynamic Achievements List (When populated) or Polished Placeholder */}
        {achievementsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsList.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl glass-card border border-cyan-500/30 hover:border-cyan-400/60 shadow-cyan-sm transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.date || 'Milestone'}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Polished Futuristic Modular Placeholder */
          <div className="glass-card rounded-2xl p-8 sm:p-12 border border-cyan-500/20 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-6 shadow-cyan-glow">
              <Milestone className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Milestones in Progress
            </h3>

            <p className="text-slate-300 text-base max-w-lg mx-auto mb-6 leading-relaxed">
              More achievements, competitive programming standings, and hackathon milestones coming soon as I continue my academic and research journey.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Extensible module: Ready for future accolades & certificates</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
