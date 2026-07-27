import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Code2, Film, Zap, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { QUICK_FACTS } from '../data/portfolioData';

export const QuickFactsSection: React.FC = () => {
  const getFactIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="h-6 w-6 text-[#00BFFF]" />;
      case 'GraduationCap': return <GraduationCap className="h-6 w-6 text-[#7C3AED]" />;
      case 'Code2': return <Code2 className="h-6 w-6 text-[#00E5FF]" />;
      case 'Film': return <Film className="h-6 w-6 text-[#EC4899]" />;
      default: return <Zap className="h-6 w-6 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="facts" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[160px] pointer-events-none" />

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
            <span>AT A GLANCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Quick <span className="gradient-text-neon">Facts</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Quick Facts Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_FACTS.map((fact, idx) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard
                glowColor={`${fact.accentColor}30`}
                className="p-8 h-full border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="p-3 rounded-2xl border border-white/10 shadow-lg"
                      style={{ backgroundColor: `${fact.accentColor}15` }}
                    >
                      {getFactIcon(fact.icon)}
                    </div>
                    <span className="text-[10px] font-code text-zinc-500 uppercase">FACT 0{idx + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-code text-zinc-400 uppercase tracking-wider">{fact.title}</span>
                    <h3 className="text-xl font-bold font-heading text-white">{fact.value}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{fact.subText}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] font-code text-zinc-500">
                  <span>Verified Data</span>
                  <span style={{ color: fact.accentColor }}>● Active</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
