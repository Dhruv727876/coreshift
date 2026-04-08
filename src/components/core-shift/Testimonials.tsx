'use client';

import { motion } from 'framer-motion';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    designation: 'HR Director at Nexa Solutions',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop',
    quote:
      'CoreShift has streamlined our HR processes, making tasks like onboarding and performance tracking more efficient. It helps us stay organized and saves our team time, allowing us to focus more on supporting our employees.',
  },
  {
    name: 'Michael Chen',
    designation: 'VP of People at TechForge Inc.',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1368&auto=format&fit=crop',
    quote:
      'Switching to CoreShift was the best decision for our HR department. The intuitive interface and powerful features have transformed how we manage our workforce. Highly recommended for any growing company.',
  },
  {
    name: 'James Carter',
    designation: 'HR Manager at BrightPath Solutions',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop',
    quote:
      'The platform is easy to use, keeps everything in one place, and helps our team stay on top of things without extra hassle. It\'s exactly what we needed to scale.',
  },
];

export default function Testimonials() {
  return (
    <section id="resources" className="bg-[#FAFAFA] px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#EF4444]">Client Success</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Words of <span className="text-[#EF4444]">Appreciation</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Thousands of HR professionals trust CoreShift to empower their teams and simplify their management workflows.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Subtle background decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EF4444]/5 blur-[120px] rounded-full -z-10" />
          
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#111827",
              designation: "#6B7280",
              testimony: "#4B5563",
              arrowBackground: "#111827",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#EF4444",
            }}
            fontSizes={{
              name: "32px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
