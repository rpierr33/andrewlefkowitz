"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
        <div className="absolute top-1/3 right-8 w-px h-48 bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 left-16 w-24 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding py-32">
        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="block w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/90 text-[11px] uppercase tracking-[0.4em] font-medium">
            Legal Professional &amp; Business Leader
          </span>
          <span className="block w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading mb-8"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] tracking-tight">
            Andrew
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-gold-gradient leading-[1.1] tracking-tight mt-1">
            Lefkowitz
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/50 text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          From securities law at Jones Day to leading biotech companies
          reaching 60,000+ stores nationwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative overflow-hidden gold-gradient text-navy font-semibold px-10 py-4 rounded-sm text-[13px] uppercase tracking-[0.2em]"
          >
            <span className="relative z-10">Explore Background</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white/80 px-10 py-4 rounded-sm text-[13px] uppercase tracking-[0.2em] hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
