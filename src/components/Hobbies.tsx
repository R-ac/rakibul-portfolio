import React, { useState } from 'react';
import { Sprout, BookOpen, Heart, Sparkles, Sun, Bookmark } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gardening' | 'reading'>('gardening');
  const [leafHovered, setLeafHovered] = useState(false);
  const [bookHovered, setBookHovered] = useState(false);

  return (
    <section id="hobbies" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-400" />
            <span>06 // LIFE & PASSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Hobbies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-3" />
          <p className="text-slate-400 text-sm max-w-lg mt-4">
            Balance between code and calm — cultivating green spaces and exploring literary perspectives.
          </p>
        </div>

        {/* Hobbies Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Hobby 1: Gardening */}
          <div
            onMouseEnter={() => setLeafHovered(true)}
            onMouseLeave={() => setLeafHovered(false)}
            data-cursor="pointer"
            className="group relative rounded-2xl glass-card p-8 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-emerald-glow transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Sprout className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                  <Sun className="w-3 h-3 text-amber-400" /> Rooftop Cultivation
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Gardening
              </h3>

              <p className="text-slate-200 text-base leading-relaxed mb-6">
                "During the lockdown period, I spent a lot of time doing rooftop gardening."
              </p>
            </div>

            {/* Interactive Botanical Visual Animation */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Nurturing nature & botanical growth</span>
              </div>
              
              {/* Botanical SVG Node */}
              <div className={`transition-transform duration-500 ${leafHovered ? 'rotate-12 scale-125' : 'rotate-0'}`}>
                <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                  <path d="M12 22V8" />
                  <path d="M12 14L16 11" />
                  <path d="M12 17L8 14" />
                </svg>
              </div>
            </div>
          </div>

          {/* Hobby 2: Reading Books */}
          <div
            onMouseEnter={() => setBookHovered(true)}
            onMouseLeave={() => setBookHovered(false)}
            data-cursor="pointer"
            className="group relative rounded-2xl glass-card p-8 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-glow transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                  <Bookmark className="w-3 h-3 text-cyan-400" /> Literature & Thought
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Reading Books
              </h3>

              <p className="text-slate-200 text-base leading-relaxed mb-6">
                "I enjoy reading books."
              </p>
            </div>

            {/* Interactive Book Open Visual Animation */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Broadening perspectives & ideas</span>
              </div>

              {/* Book SVG Node */}
              <div className={`transition-transform duration-500 ${bookHovered ? '-rotate-6 scale-125' : 'rotate-0'}`}>
                <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <line x1="9" y1="7" x2="15" y2="7" />
                  <line x1="9" y1="11" x2="13" y2="11" />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
