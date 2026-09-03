import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Facebook, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open default mail client with prefilled data
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${portfolioData.socials.email}?subject=${subject}&body=${body}`;
    
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socialChannels = [
    {
      name: 'LinkedIn',
      label: 'Professional Network',
      url: portfolioData.socials.linkedin,
      icon: Linkedin,
      color: 'cyan',
    },
    {
      name: 'GitHub',
      label: 'Code Repositories',
      url: portfolioData.socials.github,
      icon: Github,
      color: 'cyan',
    },
    {
      name: 'Facebook',
      label: 'Social Profile',
      url: portfolioData.socials.facebook,
      icon: Facebook,
      color: 'cyan',
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07 // TRANSMISSION HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3" />
          <p className="text-slate-400 text-sm max-w-lg mt-4">
            Feel free to connect for AI/vision collaborations, engineering inquiries, or software discussions.
          </p>
        </div>

        {/* Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Socials (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 hover:border-cyan-400/60 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <h3 className="text-base font-bold text-white">Gmail Address</h3>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.socials.email, 'email')}
                  data-cursor="pointer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 hover:border-cyan-400 text-xs font-mono text-cyan-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-dark-950 border border-white/5 font-mono text-xs text-cyan-300 flex items-center justify-between">
                <span>{portfolioData.socials.email}</span>
                <a
                  href={`mailto:${portfolioData.socials.email}`}
                  className="text-slate-400 hover:text-white"
                  title="Open in Mail App"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Placeholder Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Contact Line</span>
                    <h3 className="text-base font-bold text-white">Phone / WhatsApp</h3>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.socials.phone, 'phone')}
                  data-cursor="pointer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 hover:border-emerald-400 text-xs font-mono text-emerald-300 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-dark-950 border border-white/5 font-mono text-xs text-slate-300">
                <span>{portfolioData.socials.phone}</span>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                Official Profiles:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialChannels.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-400 hover:bg-cyan-950/30 hover:shadow-cyan-sm transition-all duration-300 group flex flex-col items-center text-center"
                    >
                      <Icon className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-2" />
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300">{social.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Transmission Form (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-cyan-500/30 relative">
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Initiate an encrypted communication pipeline.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm font-mono placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm font-mono placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm font-sans placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="pointer"
                  className="w-full py-3.5 rounded-xl font-mono text-sm font-bold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-glow hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{formSent ? 'Transmission Prepared!' : 'Send Message'}</span>
                </button>

                {formSent && (
                  <p className="text-xs font-mono text-emerald-400 text-center animate-pulse">
                    ✓ Opening your email client to transmit the message...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
