import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
  timestamp: string;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      response: (
        <div className="space-y-1">
          <p className="text-cyan-300">Welcome to Rakibul's interactive developer terminal.</p>
          <p className="text-slate-400 text-xs">Type a command or click the preset pills below to execute.</p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      command: 'whoami',
      response: (
        <div className="text-emerald-300 font-semibold">
          {portfolioData.personal.name} — Computer Science & Engineering @ Islamic University of Technology
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      command: 'status',
      response: (
        <div className="text-cyan-200">
          &gt; {portfolioData.terminal.status}
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    'whoami',
    'interests',
    'status',
    'skills',
    'projects',
    'education',
    'contact',
    'help',
    'clear'
  ];

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responseNode: React.ReactNode = null;

    switch (trimmed) {
      case 'whoami':
        responseNode = (
          <div className="space-y-1">
            <p className="text-cyan-300 font-bold">{portfolioData.personal.name}</p>
            <p className="text-slate-300 text-xs">{portfolioData.personal.aboutBio}</p>
          </div>
        );
        break;

      case 'interests':
        responseNode = (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {portfolioData.terminal.interests.map((interest, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                {interest}
              </span>
            ))}
          </div>
        );
        break;

      case 'status':
        responseNode = (
          <div className="text-emerald-400 font-mono">
            ⚡ {portfolioData.terminal.status}
          </div>
        );
        break;

      case 'skills':
        responseNode = (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {portfolioData.skills.map((s) => (
              <div key={s.name} className="p-1.5 rounded bg-dark-950 border border-cyan-500/20 text-xs">
                <span className="text-cyan-300 font-bold font-mono">{s.name}</span>
                <span className="text-[10px] text-slate-400 block">{s.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        responseNode = (
          <div className="space-y-1.5 pt-1">
            {portfolioData.projects.map((p, idx) => (
              <div key={p.id} className="text-xs">
                <span className="text-cyan-400 font-mono">{idx + 1}. {p.title}</span>
                <span className="text-slate-400 block text-[11px] pl-3">- {p.shortDescription}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        responseNode = (
          <div className="space-y-1.5 pt-1">
            {portfolioData.education.map((e, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-emerald-300 font-bold">{e.degree}</span>
                <div className="text-slate-400 text-[11px] pl-2">{e.institution} • <span className="text-cyan-300">{e.resultOrStatus}</span></div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="text-xs space-y-1">
            <div>GitHub: <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{portfolioData.socials.github}</a></div>
            <div>LinkedIn: <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Profile Link</a></div>
            <div>Facebook: <a href={portfolioData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Profile Link</a></div>
            <div>Email: <span className="text-slate-300">{portfolioData.socials.email}</span></div>
          </div>
        );
        break;

      case 'help':
        responseNode = (
          <div className="text-xs space-y-1">
            <p className="text-slate-400">Available commands:</p>
            <div className="flex flex-wrap gap-2 text-cyan-300 font-mono">
              {availableCommands.map((c) => (
                <span key={c} className="hover:underline cursor-pointer" onClick={() => handleCommand(c)}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      default:
        responseNode = (
          <div className="text-red-400 text-xs">
            Command not recognized: '<span className="text-white">{cmdText}</span>'. Type '<span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span>' for available options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, response: responseNode, timestamp: time }]);
    setInputVal('');
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <div className="w-full rounded-2xl border border-cyan-500/30 bg-dark-900/90 backdrop-blur-xl shadow-cyan-glow overflow-hidden font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/80 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-slate-400 pl-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>rakibul@iut-cse:~$</span>
          </span>
        </div>
        <button
          onClick={() => handleCommand('clear')}
          title="Clear Terminal"
          className="text-slate-400 hover:text-cyan-300 transition-colors p-1 rounded hover:bg-white/5 text-xs flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden sm:inline">clear</span>
        </button>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 max-h-72 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-slate-200 font-semibold">{entry.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{entry.timestamp}</span>
            </div>
            <div className="pl-4">{entry.response}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Click Command Pills */}
      <div className="px-4 py-2 bg-dark-950/60 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1">Quick:</span>
        {['whoami', 'interests', 'status', 'skills', 'projects', 'education'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-dark-800 hover:bg-cyan-950 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-[11px] font-mono transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Command Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="flex items-center gap-2 px-4 py-2.5 bg-dark-950 border-t border-white/10"
      >
        <span className="text-cyan-400 font-bold font-mono">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or command here..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="p-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 hover:text-white transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
