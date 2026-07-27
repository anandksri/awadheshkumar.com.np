/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
>>>>>>> 0a4486fbf325a4f61f077388f0fb13fe04d68d8f
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { StrengthsSection } from './components/StrengthsSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { QuickFactsSection } from './components/QuickFactsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00BFFF]/30 selection:text-[#00E5FF] overflow-x-hidden bg-grid-pattern">
=======
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00BFFF]/30 selection:text-[#00E5FF] overflow-x-hidden">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Interactive Particle Network */}
      <ParticleBackground />

      {/* Navigation Bar */}
>>>>>>> 0a4486fbf325a4f61f077388f0fb13fe04d68d8f
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Education */}
        <EducationSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Core Strengths */}
        <StrengthsSection />

        {/* 6. What I Do */}
        <WhatIDoSection />

        {/* 7. Quick Facts */}
        <QuickFactsSection />

        {/* 8. Contact */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
