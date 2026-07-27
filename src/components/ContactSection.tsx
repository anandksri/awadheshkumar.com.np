import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00BFFF', '#00E5FF', '#7C3AED']
      });

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00BFFF]/30 text-xs font-code text-[#00E5FF] mb-3"
          >
            <Send className="h-3.5 w-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Get In <span className="gradient-text-neon">Touch</span>
          </motion.h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00BFFF] via-[#00E5FF] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Contact Details</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Have a project in mind, need a custom website, or want a high-energy video edit? Feel free to reach out directly via phone, email, or message.
              </p>

              {/* Detail Items */}
              <div className="space-y-4 pt-2">
                
                {/* Name */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/30">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-code text-zinc-400 uppercase">Name</p>
                      <p className="text-sm font-bold text-white">{PERSONAL_INFO.name}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/30">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-code text-zinc-400 uppercase">Phone</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#00E5FF]">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-code text-zinc-400 uppercase">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-[#00E5FF] break-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/30">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-code text-zinc-400 uppercase">Location</p>
                      <p className="text-sm font-bold text-white">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Mailto Fallback Link */}
              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Portfolio%20Inquiry%20from%20Website`}
                  className="w-full py-3 px-4 rounded-xl glass-panel border border-[#00BFFF]/40 text-xs font-bold text-[#00E5FF] hover:text-white hover:bg-[#00BFFF]/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open Direct Mail Client</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Send a Message</h3>
              <p className="text-xs font-code text-zinc-400 mb-8">
                Fill out the form below and I will respond to your inquiry shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/40 text-center space-y-4"
                >
                  <div className="h-16 w-16 mx-auto rounded-full bg-[#00BFFF] text-black flex items-center justify-center font-bold shadow-[0_0_20px_#00BFFF]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-heading">Message Sent Successfully!</h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <span className="text-[#00E5FF] font-bold">{formData.name}</span>! Your message has been transmitted. I'll get back to you at {formData.email}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-code text-zinc-300 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-code text-zinc-300 block">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-code text-zinc-300 block">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Website Development Project / Video Edit Proposal"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-code text-zinc-300 block">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your project details or questions here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-neon-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
