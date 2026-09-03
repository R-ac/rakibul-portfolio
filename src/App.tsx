import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveBackground } from './components/InteractiveBackground';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Hobbies } from './components/Hobbies';
import { CVSection } from './components/CVSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-cyan-400 selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Short futuristic system loader */}
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}

      {/* Interactive 2-stage custom mouse tracker */}
      <CustomCursor />

      {/* Interactive Canvas Grid & Particles */}
      <InteractiveBackground />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Hobbies />
        <CVSection />
        <Contact />
      </main>

      {/* Futuristic Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
