import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Send,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Sparkles,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import developerAvatar from '../assets/images/hero-pic.jpeg';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const titles = PERSONAL_INFO.titles;

  // Typing effect logic
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: PERSONAL_INFO.githubUrl },
    { name: 'LinkedIn', icon: Linkedin, href: PERSONAL_INFO.linkedinUrl },
    { name: 'Instagram', icon: Instagram, href: PERSONAL_INFO.instagramUrl },
    { name: 'Facebook', icon: Facebook, href: PERSONAL_INFO.facebookUrl },
    { name: 'Email', icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#00BFFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#7C3AED]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00BFFF]/30 text-xs font-code text-[#00E5FF] shadow-[0_0_15px_rgba(0,191,255,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFFF]"></span>
              </span>
              <span>Available for Projects & Collaboration</span>
              <Sparkles className="h-3.5 w-3.5 text-[#00E5FF]" />
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <p className="text-zinc-400 font-sora text-lg sm:text-xl font-medium tracking-wide">
                {PERSONAL_INFO.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white">
                <span className="block">{PERSONAL_INFO.name}</span>
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="h-12 flex items-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-sora font-semibold text-zinc-200 flex items-center gap-2">
                <span className="text-zinc-400 font-normal">I am a</span>
                <span className="gradient-text-neon border-b-2 border-[#00E5FF]/60 pb-1 font-bold">
                  {displayText}
                </span>
                <span className="animate-pulse text-[#00E5FF] font-light">|</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-download-cv-btn"
                onClick={onOpenResume}
                className="btn-neon-primary px-6 py-3.5 text-sm font-bold flex items-center gap-2.5 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                className="btn-neon-outline px-6 py-3.5 text-sm font-bold flex items-center gap-2.5 cursor-pointer"
              >
                <Send className="h-4 w-4 text-[#00E5FF]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <span className="text-xs font-code text-zinc-500 uppercase tracking-widest">Connect:</span>
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
                      className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-[#00BFFF] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] text-zinc-300 hover:text-white transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Avatar Image & Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Developer Profile Image Card */}
            <div className="relative mx-auto max-w-sm">
              {/* Outer Glowing Cyber Halo Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] opacity-70 blur-xl animate-pulse-glow" />
              
              <div className="relative glass-panel rounded-3xl p-3 border border-white/15 overflow-hidden group">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#0A0A0F] flex items-center justify-center">
                  
                  {/* High Quality Developer Portrait Image */}
                  <img
                    src={developerAvatar}
                    alt="Awadhesh Pandit"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay for labels */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Info & Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center text-center space-y-2">
                    <div className="backdrop-blur-md bg-black/40 px-4 py-2 rounded-xl border border-white/10">
                      <h3 className="font-heading font-bold text-lg text-white drop-shadow-md">Awadhesh Pandit</h3>
                      <p className="text-xs font-code text-[#00E5FF] mt-0.5">BIT Birgunj Student & Creator</p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap justify-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-code bg-[#00BFFF]/20 border border-[#00BFFF]/40 text-[#00E5FF] backdrop-blur-md">
                        React.js
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-code bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A78BFA] backdrop-blur-md">
                        CapCut
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-code bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF] backdrop-blur-md">
                        PHP & SQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Code Widget */}
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#0A0A0A] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-code text-zinc-400 ml-2">developer.config.js</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-zinc-400 hover:text-white p-1 rounded transition-colors text-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Snippet"
                >
                  {copiedCode ? (
                    <Check className="h-3.5 w-3.5 text-green-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 bg-[#050505]/90 font-code text-xs leading-relaxed overflow-x-auto text-zinc-300">
                <pre>
                  <code>
                    <span className="text-[#7C3AED]">const</span> <span className="text-[#00E5FF]">developer</span> = &#123;{'\n'}
                    {'  '}name: <span className="text-emerald-400">'Awadhesh Pandit'</span>,{'\n'}
                    {'  '}location: <span className="text-emerald-400">'Birgunj, Nepal'</span>,{'\n'}
                    {'  '}skills: [<span className="text-amber-300">'Frontend'</span>, <span className="text-amber-300">'Video Editing'</span>],{'\n'}
                    {'  '}status: <span className="text-emerald-400">'Creating Magic'</span>{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
