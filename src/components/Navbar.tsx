import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Hobbies', href: '#hobbies', id: 'hobbies' },
  { name: 'CV', href: '#cv', id: 'cv' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-2.5 px-4 md:px-6'
            : 'bg-dark-900/40 backdrop-blur-md border-white/5 py-3 px-4 md:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo / Terminal Tag */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group text-slate-100 font-mono text-sm tracking-tight"
            data-cursor="pointer"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-800 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,242,254,0.4)] transition-all">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                RAKIBUL<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1">IUT // CSE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  data-cursor="pointer"
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,242,254,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00f2fe]" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Quick CV Download */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.cvDownloadPath}
              download={portfolioData.personal.cvFileName}
              data-cursor="pointer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,157,0.25)] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV.pdf</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-dark-800 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe]" />}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/5 sm:hidden">
              <a
                href={portfolioData.personal.cvDownloadPath}
                download={portfolioData.personal.cvFileName}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/40"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV ({portfolioData.personal.cvFileName})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
