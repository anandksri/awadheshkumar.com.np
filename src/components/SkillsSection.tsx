import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  FileCode,
  Palette,
  Code,
  Atom,
  Server,
  Cpu,
  Database,
  Layers,
  HardDrive,
  Video,
  Sparkles,
  Box,
  GitBranch,
  Github,
  FileSpreadsheet,
  Terminal,
  Search,
  Filter
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="h-5 w-5 text-orange-400" />;
      case 'Palette': return <Palette className="h-5 w-5 text-blue-400" />;
      case 'Code': return <Code className="h-5 w-5 text-yellow-400" />;
      case 'Atom': return <Atom className="h-5 w-5 text-cyan-400" />;
      case 'Server': return <Server className="h-5 w-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="h-5 w-5 text-purple-400" />;
      case 'Database': return <Database className="h-5 w-5 text-[#00758F]" />;
      case 'Layers': return <Layers className="h-5 w-5 text-emerald-400" />;
      case 'HardDrive': return <HardDrive className="h-5 w-5 text-teal-400" />;
      case 'Video': return <Video className="h-5 w-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5 text-cyan-300" />;
      case 'Box': return <Box className="h-5 w-5 text-purple-400" />;
      case 'GitBranch': return <GitBranch className="h-5 w-5 text-orange-500" />;
      case 'Github': return <Github className="h-5 w-5 text-white" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="h-5 w-5 text-emerald-500" />;
      case 'Terminal': return <Terminal className="h-5 w-5 text-sky-400" />;
      default: return <Code2 className="h-5 w-5 text-[#00BFFF]" />;
    }
  };

  // Filter skills
  const allSkillsWithCategory = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
  );

  const filteredSkills = allSkillsWithCategory.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BFFF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00BFFF]/30 text-xs font-code text-[#00E5FF] mb-3"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Skills & <span className="gradient-text-neon">Technologies</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Controls: Search & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00BFFF] to-[#00E5FF] text-[#050505] shadow-[0_0_15px_rgba(0,191,255,0.4)]'
                  : 'glass-panel text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              All Skills ({allSkillsWithCategory.length})
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#00BFFF] to-[#00E5FF] text-[#050505] shadow-[0_0_15px_rgba(0,191,255,0.4)]'
                    : 'glass-panel text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#00BFFF] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <TiltCard glowColor="rgba(0, 191, 255, 0.2)" className="p-6 h-full border border-white/10 glass-panel-hover">
                  <div className="space-y-4">
                    
                    {/* Top Row: Icon, Name, Category */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shadow-inner"
                        >
                          {getSkillIcon(skill.icon)}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-base text-white">{skill.name}</h3>
                          <span className="text-[10px] font-code text-zinc-500">{skill.categoryName}</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[10px] font-code bg-white/5 text-[#00E5FF] border border-white/10">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar & Percentage */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs font-code">
                        <span className="text-zinc-400">Mastery</span>
                        <span className="font-bold text-[#00E5FF]">{skill.percentage}%</span>
                      </div>

                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className="h-full rounded-full shadow-[0_0_12px_#00BFFF]"
                          style={{
                            background: `linear-gradient(90deg, #00BFFF 0%, ${skill.color || '#00E5FF'} 100%)`
                          }}
                        />
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
