import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Film, Play, Sparkles, Monitor, Smartphone, Tablet, Code, CheckCircle, ExternalLink, Layers, Cpu } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const WhatIDoSection: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTimelineClip, setActiveTimelineClip] = useState<number>(0);

  const videoClips = [
    { title: 'Cyberpunk Reel Edit', duration: '0:15', resolution: '1080x1920 60FPS', software: 'CapCut Pro' },
    { title: 'YouTube Tech Showcase', duration: '8:45', resolution: '4K UHD', software: 'CapCut & Canva' },
    { title: 'Promo Visual Graphic', duration: '0:30', resolution: '1080x1080', software: 'Canva Pro' }
  ];

  return (
    <section id="what-i-do" className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00BFFF]/30 text-xs font-code text-[#00E5FF] mb-3"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>MY SPECIALIZATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            What I <span className="gradient-text-neon">Do</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Large Detailed Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Service Card 1: Video Editing & Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard glowColor="rgba(236, 72, 153, 0.25)" className="p-8 h-full border border-white/10 glass-panel">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#EC4899]/20 to-[#7C3AED]/20 border border-[#EC4899]/40 text-[#EC4899]">
                    <Film className="h-8 w-8" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-code bg-[#EC4899]/10 text-[#EC4899] border border-[#EC4899]/30">
                    CapCut • Canva
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                    <span>🎬 Video Editing & Design</span>
                  </h3>
                  <p className="text-zinc-300 mt-3 text-base leading-relaxed">
                    Create engaging social media videos, reels, YouTube edits, promotional videos, and creative visual content using CapCut and Canva.
                  </p>
                </div>

                {/* Interactive Video Timeline Mockup */}
                <div className="bg-[#050505] rounded-2xl border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-code text-zinc-400 border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-[#EC4899]">
                      <Video className="h-3.5 w-3.5" />
                      <span>Timeline Studio Suite</span>
                    </span>
                    <span>1080p / 4K Timeline</span>
                  </div>

                  {/* Active Selected Clip Preview */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">{videoClips[activeTimelineClip].title}</p>
                      <p className="text-[10px] font-code text-zinc-400">
                        {videoClips[activeTimelineClip].resolution} • {videoClips[activeTimelineClip].software}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#EC4899]/20 text-[#EC4899] text-[10px] font-code font-bold">
                      {videoClips[activeTimelineClip].duration}
                    </span>
                  </div>

                  {/* Clip Selection Track */}
                  <div className="grid grid-cols-3 gap-2">
                    {videoClips.map((clip, idx) => (
                      <button
                        key={clip.title}
                        onClick={() => setActiveTimelineClip(idx)}
                        className={`p-2 rounded-lg text-[10px] font-code transition-all border ${
                          activeTimelineClip === idx
                            ? 'bg-[#EC4899]/20 border-[#EC4899] text-white font-bold'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        Clip #{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#EC4899]" />
                    <span>Reels & TikTok Short-form Motion Graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#EC4899]" />
                    <span>YouTube Video Pacing, B-roll & Sound Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#EC4899]" />
                    <span>Canva Thumbnails, Posters & Brand Graphics</span>
                  </li>
                </ul>

              </div>
            </TiltCard>
          </motion.div>

          {/* Service Card 2: Frontend Web Development */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard glowColor="rgba(0, 191, 255, 0.25)" className="p-8 h-full border border-white/10 glass-panel">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#00BFFF]/20 to-[#00E5FF]/20 border border-[#00BFFF]/40 text-[#00BFFF]">
                    <Code className="h-8 w-8" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-code bg-[#00BFFF]/10 text-[#00E5FF] border border-[#00BFFF]/30">
                    HTML • CSS • JS • React • PHP
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                    <span>💻 Frontend Web Development</span>
                  </h3>
                  <p className="text-zinc-300 mt-3 text-base leading-relaxed">
                    Build responsive, modern, fast-loading websites using HTML, CSS, JavaScript, React, Bootstrap, and PHP.
                  </p>
                </div>

                {/* Interactive Responsive Device Frame Mockup */}
                <div className="bg-[#050505] rounded-2xl border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-code text-[#00E5FF] flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5" />
                      <span>Live Frame Simulator</span>
                    </span>

                    {/* Device Selector */}
                    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setDeviceMode('desktop')}
                        className={`p-1 rounded ${deviceMode === 'desktop' ? 'bg-[#00BFFF] text-black' : 'text-zinc-400'}`}
                        title="Desktop View"
                      >
                        <Monitor className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('tablet')}
                        className={`p-1 rounded ${deviceMode === 'tablet' ? 'bg-[#00BFFF] text-black' : 'text-zinc-400'}`}
                        title="Tablet View"
                      >
                        <Tablet className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setDeviceMode('mobile')}
                        className={`p-1 rounded ${deviceMode === 'mobile' ? 'bg-[#00BFFF] text-black' : 'text-zinc-400'}`}
                        title="Mobile View"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Simulated Frame Preview */}
                  <div className="flex justify-center transition-all duration-300">
                    <div
                      className={`bg-gradient-to-b from-[#121218] to-[#0A0A0A] border border-[#00BFFF]/40 rounded-xl p-3 space-y-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.2)] ${
                        deviceMode === 'desktop'
                          ? 'w-full'
                          : deviceMode === 'tablet'
                          ? 'w-3/4'
                          : 'w-1/2'
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-1 text-[10px] font-code text-zinc-400">
                        <span>https://awadhesh.dev</span>
                        <span className="text-[#00E5FF]">200 OK • 60fps</span>
                      </div>
                      <div className="h-12 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-xs font-bold text-[#00E5FF]">
                        Responsive Layout Active ({deviceMode})
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF]" />
                    <span>Single Page React Web Apps & Interactive Portfolios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF]" />
                    <span>Pixel-perfect CSS & Tailwind Responsive Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF]" />
                    <span>PHP Backend Integration & MySQL Database Management</span>
                  </li>
                </ul>

              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
