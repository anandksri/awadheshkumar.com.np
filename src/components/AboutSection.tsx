import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Target, UserCheck, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { PERSONAL_INFO, QUICK_INFO_CARDS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="h-6 w-6 text-[#00BFFF]" />;
      case 'GraduationCap': return <GraduationCap className="h-6 w-6 text-[#7C3AED]" />;
      case 'Briefcase': return <Briefcase className="h-6 w-6 text-[#00E5FF]" />;
      case 'Target': return <Target className="h-6 w-6 text-[#EC4899]" />;
      default: return <UserCheck className="h-6 w-6 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00BFFF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>DISCOVER MY STORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            About <span className="gradient-text-neon">Me</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00BFFF] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 mb-12 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center sm:text-left space-y-6">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-normal">
              {PERSONAL_INFO.aboutText}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-code text-zinc-300 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
                Birgunj Institute of Technology (BIT)
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-code text-zinc-300 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7C3AED] animate-pulse" />
                Frontend Dev & Video Specialist
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_INFO_CARDS.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard glowColor={card.glowColor} className="p-6 h-full border border-white/10 glass-panel-hover">
                <div className="flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="p-3 rounded-2xl border border-white/10"
                      style={{ backgroundColor: `${card.color}15`, borderColor: `${card.color}40` }}
                    >
                      {getIcon(card.icon)}
                    </div>
                    <span className="text-[10px] font-code tracking-widest text-zinc-500 uppercase">INFO #{idx + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-code text-zinc-400 uppercase tracking-wider">{card.label}</p>
                    <p className="text-lg font-bold font-heading text-white">{card.value}</p>
                    <p className="text-xs text-zinc-400">{card.subText}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
