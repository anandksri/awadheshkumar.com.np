import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'Facts', href: '#facts' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled shadow background
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Scroll spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] shadow-[0_0_12px_#00E5FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo-link"
          >
            <div className="h-10 w-10 rounded-xl glass-panel border border-[#00BFFF]/40 flex items-center justify-center group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
              <span className="font-sora font-extrabold text-lg text-white">AP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-white tracking-wider group-hover:text-[#00E5FF] transition-colors">
                AWADHESH P.
              </span>
              <span className="text-[10px] font-code text-[#00BFFF] tracking-tight">
                BIRGUNJ, NEPAL
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/30 to-[#7C3AED]/30 border border-[#00BFFF]/50 rounded-full shadow-[0_0_12px_rgba(0,191,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Download/View Resume CTA */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="btn-neon-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-[#00E5FF]" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-gradient-to-r from-[#00BFFF]/20 to-[#7C3AED]/20 border border-[#00BFFF]/40 text-white font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="btn-neon-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>View / Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
