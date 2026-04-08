'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const productLinks = ['CoreHR', 'Recruit', 'Perform', 'Pulse'];
const featureLinks = ['Desk', 'Time', 'Analytics'];

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-12 md:px-12 md:pt-20 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-12"
      >
        {/* Large blurred CoreShift text behind */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[120px] font-bold leading-none text-[#EF4444] opacity-[0.07] md:text-[180px]">
            CoreShift
          </span>
        </div>

        {/* Brand Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 mb-12 max-w-[500px] text-lg font-medium leading-relaxed text-black md:text-xl"
        >
          CoreShift is the HRM platform that build a thriving workplace culture—all in one place.
        </motion.p>

        {/* Footer Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Product Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#6B7280] transition-colors hover:text-black"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Features
            </h4>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#6B7280] transition-colors hover:text-black"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#6B7280] transition-colors hover:text-black"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Follow us
            </h4>
            <div className="flex gap-3">
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:border-[#E1306C] hover:bg-[#E1306C]/5"
              >
                <Instagram className="h-4 w-4 text-[#6B7280]" />
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:border-black hover:bg-black/5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#6B7280]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* TikTok */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:border-black hover:bg-black/5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#6B7280]">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16V11.7a4.83 4.83 0 01-3.77-1.83V6.69h3.77z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm font-bold text-black">CoreShift</span>
          </div>
          <p className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} CoreShift. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
