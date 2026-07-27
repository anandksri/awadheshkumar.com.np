import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, MessageSquare, Clock, Award, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { CORE_STRENGTHS } from '../data/portfolioData';

export const StrengthsSection: React.FC = () => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="h-7 w-7 text-[#00BFFF]" />;
      case 'Users': return <Users className="h-7 w-7 text-[#7C3AED]" />;
      case 'MessageSquare': return <MessageSquare className="h-7 w-7 text-[#00E5FF]" />;
      case 'Clock': return <Clock className="h-7 w-7 text-emerald-400" />;
      default: return <Award className="h-7 w-7 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="strengths" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#7C3AED]/30 text-xs font-code text-[#A78BFA] mb-3"
          >
            <Award className="h-3.5 w-3.5" />
            <span>PERSONAL PILLARS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Core <span className="gradient-text-neon">Strengths</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_STRENGTHS.map((strength, idx) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <TiltCard
                glowColor={strength.glowColor}
                className="p-8 h-full border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="p-3.5 rounded-2xl border border-white/10 shadow-lg"
                      style={{ backgroundColor: `${strength.glowColor}15` }}
                    >
                      {getStrengthIcon(strength.icon)}
                    </div>
                    <span className="font-code text-xs text-zinc-500">0{idx + 1}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-white">{strength.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{strength.description}</p>
                  </div>
                </div>

                {/* Sub Tags */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-1.5 mt-6">
                  {strength.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-code bg-white/5 text-zinc-300 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
