import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Instagram, Facebook, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: PERSONAL_INFO.githubUrl },
    { name: 'LinkedIn', icon: Linkedin, href: PERSONAL_INFO.linkedinUrl },
    { name: 'Instagram', icon: Instagram, href: PERSONAL_INFO.instagramUrl },
    { name: 'Facebook', icon: Facebook, href: PERSONAL_INFO.facebookUrl },
    { name: 'Email', icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#00BFFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl glass-panel border border-[#00BFFF]/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,191,255,0.3)]">
              <span className="font-sora font-extrabold text-xl text-white">AP</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Awadhesh Pandit</h3>
              <p className="text-xs font-code text-[#00E5FF]">Frontend Developer & Video Specialist • Birgunj, Nepal</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  className="p-3 rounded-xl glass-panel border border-white/10 hover:border-[#00BFFF] text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Back To Top Floating Button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl btn-neon-outline flex items-center gap-2 text-xs font-bold cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4 text-[#00E5FF] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-code text-zinc-400 gap-4 text-center sm:text-left">
          <p>© {currentYear} Awadhesh Pandit. Designed & Developed with <Heart className="inline h-3.5 w-3.5 text-rose-500 fill-rose-500 mx-0.5" /></p>
          <p className="text-zinc-500">Birgunj Institute of Technology • Nepal Node</p>
        </div>
      </div>
    </footer>
  );
};
