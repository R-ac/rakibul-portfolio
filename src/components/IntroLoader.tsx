import React, { useEffect, useState } from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Fast futuristic sequence
    const t1 = setTimeout(() => {
      setStep(1);
      setProgress(60);
    }, 400);

    const t2 = setTimeout(() => {
      setStep(2);
      setProgress(100);
    }, 900);

    const t3 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 text-slate-200 cursor-pointer select-none font-mono"
    >
      <div className="w-full max-w-md p-6 mx-4 rounded-xl border border-cyan-500/30 bg-dark-900/90 backdrop-blur-xl shadow-cyan-glow">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-bold">SYSTEM_BOOT // RAKIBUL_OS</span>
          </div>
          <span className="text-[10px] text-slate-500">ESC/CLICK TO SKIP</span>
        </div>

        {/* Status Line */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-cyan-300">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            {step === 0 && 'INITIALIZING SYSTEM MODULES...'}
            {step === 1 && 'LOADING COMPUTER VISION & AI PROTOCOLS...'}
            {step >= 2 && (
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> ACCESS GRANTED: WELCOME, RAKIBUL
              </span>
            )}
          </div>
          <div className="text-xs text-slate-400 pl-4">
            {step === 0 && 'Checking system dependencies and environment...'}
            {step === 1 && 'Configuring neural pipelines & interactive interfaces...'}
            {step >= 2 && 'Environment ready. Launching portfolio interface.'}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden border border-cyan-900/50">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center mt-2 text-[10px] text-slate-500">
          <span>MEM_ALLOC: OK</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
