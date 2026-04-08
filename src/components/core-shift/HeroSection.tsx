'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Users, Shield, Eye } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Icon Network Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-12 h-[280px] w-[320px] md:mb-16 md:h-[340px] md:w-[420px]"
      >
        {/* Connecting Lines (SVG) */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 420 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lines from center to nodes */}
          <line x1="210" y1="170" x2="100" y2="60" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="210" y1="170" x2="330" y2="60" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="210" y1="170" x2="60" y2="200" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="210" y1="170" x2="350" y2="210" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="210" y1="170" x2="160" y2="290" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="210" y1="170" x2="270" y2="280" stroke="#D1D5DB" strokeWidth="2" />
          
          {/* Dots at intersections */}
          <circle cx="155" cy="115" r="4" fill="#8B5CF6" />
          <circle cx="270" cy="115" r="4" fill="#8B5CF6" />
          <circle cx="135" cy="185" r="4" fill="#8B5CF6" />
          <circle cx="280" cy="190" r="4" fill="#8B5CF6" />
          <circle cx="185" cy="230" r="4" fill="#8B5CF6" />
          <circle cx="240" cy="225" r="4" fill="#8B5CF6" />
        </svg>

        {/* Central Purple Node */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 z-10 flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#8B5CF6] shadow-lg md:h-[100px] md:w-[100px]"
        >
          <CheckCircle className="h-10 w-10 text-white md:h-12 md:w-12" />
        </motion.div>

        {/* Yellow Lightbulb Node - Top Left */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute left-[15%] top-[5%] z-10 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#FBBF24] shadow-md md:h-[68px] md:w-[68px]"
        >
          <Lightbulb className="h-7 w-7 text-white md:h-8 md:w-8" />
        </motion.div>

        {/* Blue Users Node - Top Right */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute right-[10%] top-[5%] z-10 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#38BDF8] shadow-md md:h-[68px] md:w-[68px]"
        >
          <Users className="h-7 w-7 text-white md:h-8 md:w-8" />
        </motion.div>

        {/* Red Shield Node - Left */}
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute left-[0%] top-[50%] z-10 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-xl bg-[#EF4444] shadow-md md:h-[68px] md:w-[68px]"
        >
          <Shield className="h-7 w-7 text-white md:h-8 md:w-8" />
        </motion.div>

        {/* White Eye Node - Right */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute right-[2%] top-[55%] z-10 flex h-[56px] w-[56px] items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md md:h-[68px] md:w-[68px]"
        >
          <Eye className="h-7 w-7 text-black md:h-8 md:w-8" />
        </motion.div>

        {/* Avatar 1 - Bottom Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute left-[25%] bottom-[0%] z-10 h-[52px] w-[52px] overflow-hidden rounded-full border-2 border-white shadow-md md:h-[64px] md:w-[64px]"
        >
          <img
            src="/avatars/hero-avatar1.jpg"
            alt="Team member"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Avatar 2 - Bottom Right */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-[2%] right-[20%] z-10 h-[52px] w-[52px] overflow-hidden rounded-full border-2 border-white shadow-md md:h-[64px] md:w-[64px]"
        >
          <img
            src="/avatars/hero-avatar2.jpg"
            alt="Team member"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-4 text-center text-4xl font-bold leading-tight text-black md:text-5xl lg:text-[48px]"
      >
        All-in-one HR platform
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-8 max-w-[600px] text-center text-base leading-relaxed text-[#6B7280] md:text-lg"
      >
        CoreShift is a modern, all-in-one HR platform designed to perfectly fit your business needs
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-[#EF4444] px-8 py-3 text-base font-semibold text-white shadow-md transition-shadow hover:shadow-lg"
      >
        Request a Demo
      </motion.button>
    </section>
  );
}
