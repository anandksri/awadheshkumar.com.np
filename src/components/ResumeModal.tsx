import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Code2, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_TIMELINE, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/20 rounded-3xl overflow-hidden flex flex-col shadow-2xl my-8"
        >
          {/* Modal Top Action Bar */}
          <div className="p-4 sm:p-6 bg-[#121218] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#00E5FF] animate-pulse" />
              <h3 className="font-heading font-bold text-base text-white">Curriculum Vitae — Awadhesh Pandit</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="btn-neon-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print / Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-panel border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#050505] text-white font-sans print:bg-white print:text-black">
            
            {/* Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold font-heading text-white">{PERSONAL_INFO.name}</h1>
                <p className="text-sm font-code text-[#00E5FF] mt-1">{PERSONAL_INFO.profession}</p>
                <p className="text-xs text-zinc-400 mt-2 max-w-xl">{PERSONAL_INFO.tagline}</p>
              </div>

              <div className="text-xs font-code space-y-1 text-zinc-300">
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#00BFFF]" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#7C3AED]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#00E5FF]" />
                  <span>{PERSONAL_INFO.email}</span>
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold font-heading text-[#00BFFF] uppercase tracking-wider flex items-center gap-2">
                <span>Profile Summary</span>
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.aboutText}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold font-heading text-[#00BFFF] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </h2>

              <div className="space-y-3">
                {EDUCATION_TIMELINE.map((edu) => (
                  <div key={edu.degree} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>{edu.degree}</span>
                      <span className="text-[#00E5FF] font-code">{edu.period}</span>
                    </div>
                    <p className="text-xs font-medium text-[#A78BFA] mt-0.5">{edu.institution}, {edu.location}</p>
                    <p className="text-xs text-zinc-400 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold font-heading text-[#00BFFF] uppercase tracking-wider flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>Technical Skills</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xs font-bold font-code text-[#00E5FF] mb-2">{cat.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span key={skill.name} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-code text-zinc-300">
                          {skill.name} ({skill.percentage}%)
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/10 text-center text-xs font-code text-zinc-500">
              <p>Awadhesh Pandit Official CV • Birgunj, Nepal</p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
