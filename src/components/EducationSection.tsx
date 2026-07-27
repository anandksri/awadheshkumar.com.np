import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#7C3AED]/30 text-xs font-code text-[#A78BFA] mb-3"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Education <span className="gradient-text-neon">& Qualifications</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#00BFFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Neon Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BFFF] via-[#7C3AED] to-[#00E5FF] -translate-x-1/2 opacity-40 shadow-[0_0_10px_#00BFFF]" />

          <div className="space-y-12">
            {EDUCATION_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full glass-panel border border-[#00BFFF] bg-[#050505] flex items-center justify-center shadow-[0_0_20px_rgba(0,191,255,0.6)]">
                      <GraduationCap className="h-5 w-5 text-[#00E5FF]" />
                    </div>
                  </div>

                  {/* Card Content Block */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#00BFFF]/50 hover:shadow-[0_10px_30px_rgba(0,191,255,0.15)] transition-all">
                      
                      {/* Period & Status Badge */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span className="px-3 py-1 rounded-full text-[11px] font-code bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00E5FF] flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-code flex items-center gap-1 ${
                            item.status === 'Completed'
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                              : 'bg-amber-500/10 border border-amber-500/30 text-amber-300'
                          }`}
                        >
                          {item.status === 'Completed' ? (
                            <CheckCircle2 className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title & Institution */}
                      <h3 className="text-xl font-bold font-heading text-white">{item.degree}</h3>
                      <p className="text-sm font-medium text-[#00BFFF] flex items-center gap-1.5 mt-1">
                        <Award className="h-4 w-4 text-[#7C3AED]" />
                        <span>{item.institution}</span>
                      </p>

                      <p className="text-xs font-code text-zinc-400 flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 text-zinc-500" />
                        <span>{item.location}</span>
                      </p>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skill Tags */}
                      <div className={`flex flex-wrap gap-1.5 mt-4 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-code bg-white/5 border border-white/10 text-zinc-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
