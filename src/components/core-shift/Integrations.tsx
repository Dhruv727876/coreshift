'use client';

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { useState } from 'react';

const integrations = [
  {
    name: 'Google Meet',
    subtitle: 'Seamless video meetings',
    icon: (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00897B] to-[#00ACC1]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path d="M15 10L19 7V17L15 14V10Z" fill="white" />
          <rect x="3" y="6" width="12" height="12" rx="2" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Google Calendar',
    subtitle: 'Schedule & manage events',
    icon: (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <rect x="3" y="4" width="18" height="18" rx="2" fill="white" />
          <rect x="3" y="4" width="18" height="4" rx="1" fill="white" opacity="0.6" />
          <circle cx="8" cy="13" r="1.5" fill="#4285F4" />
          <circle cx="12" cy="13" r="1.5" fill="#EA4335" />
          <circle cx="16" cy="13" r="1.5" fill="#FBBC05" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Gmail',
    subtitle: 'Email integration',
    icon: (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EA4335] via-[#FBBC05] to-[#34A853]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Microsoft Outlook',
    subtitle: 'Email & calendar sync',
    icon: (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#0078D4]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <rect x="3" y="6" width="18" height="14" rx="1" fill="white" />
          <rect x="3" y="4" width="12" height="10" rx="1" fill="white" opacity="0.7" />
          <text x="9" y="17" textAnchor="middle" fill="#0078D4" fontSize="10" fontWeight="bold">O</text>
        </svg>
      </div>
    ),
  },
  {
    name: 'Microsoft Teams',
    subtitle: 'Team collaboration',
    icon: (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5059C9] to-[#7B83EB]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">T</text>
        </svg>
      </div>
    ),
  },
];

export default function Integrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="features" className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        {/* Red gear icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="mb-4 inline-flex"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EF4444]">
            <Settings className="h-5 w-5 text-white" />
          </div>
        </motion.div>
        <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-[32px]">
          Integrate with your existing tools in seconds
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center"
      >
        {/* Integration Icons Row */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="flex items-center gap-0">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index !== 0 ? '-ml-3 md:-ml-4' : ''
                } ${hoveredIndex === index ? 'z-20' : 'z-10'}`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8F8F8] shadow-sm transition-shadow duration-300 md:h-24 md:w-24 ${
                    hoveredIndex === index ? 'shadow-lg ring-2 ring-[#8B5CF6]/20' : ''
                  }`}
                >
                  {integration.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Integration Detail */}
        <motion.div
          key={hoveredIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="text-base font-semibold text-black">
            {integrations[hoveredIndex ?? 0]?.name}
          </p>
          <p className="text-sm text-[#6B7280]">
            {integrations[hoveredIndex ?? 0]?.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
