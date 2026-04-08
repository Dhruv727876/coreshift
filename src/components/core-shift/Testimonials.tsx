'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'James Carter',
    title: 'HR Manager at BrightPath Solutions',
    avatar: '/avatars/james-carter.jpg',
    rating: 5.0,
    quote:
      'The platform is easy to use, keeps everything in one place, and helps our team stay on top of things without extra hassle.',
  },
  {
    name: 'Sarah Mitchell',
    title: 'HR Director at Nexa Solutions',
    avatar: '/avatars/sarah-mitchell.jpg',
    rating: 5.0,
    quote:
      'CoreShift has streamlined our HR processes, making tasks like onboarding and performance tracking more efficient. It helps us stay organized and saves our team time, allowing us to focus more on supporting our employees.',
  },
  {
    name: 'Michael Chen',
    title: 'VP of People at TechForge Inc.',
    avatar: '/avatars/avatar3.jpg',
    rating: 5.0,
    quote:
      'Switching to CoreShift was the best decision for our HR department. The intuitive interface and powerful features have transformed how we manage our workforce. Highly recommended for any growing company.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="resources" className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl lg:text-[48px]">
          Words of Appreciation
        </h2>
        <p className="mx-auto max-w-[600px] text-base text-[#6B7280] md:text-lg">
          Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-[700px]">
        {/* Purple triangle accent behind */}
        <div className="absolute -top-8 left-1/2 h-32 w-32 -translate-x-1/2 rotate-45 rounded-lg bg-[#8B5CF6] opacity-[0.08]" />
        <div className="absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rotate-45 rounded-lg bg-[#8B5CF6] opacity-[0.05]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="relative z-10 rounded-2xl bg-white p-8 text-center shadow-lg md:p-12"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full shadow-md"
            >
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Name */}
            <h3 className="mb-1 text-lg font-bold text-black">{current.name}</h3>
            <p className="mb-4 text-sm text-[#6B7280]">{current.title}</p>

            {/* Stars */}
            <div className="mb-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
              <span className="ml-2 text-sm font-medium text-[#6B7280]">
                {current.rating}.0
              </span>
            </div>

            {/* Quote */}
            <p className="mx-auto max-w-[500px] text-base leading-relaxed text-[#6B7280]">
              &ldquo;{current.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-[#8B5CF6]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
