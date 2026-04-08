'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, FileText } from 'lucide-react';

const cards = [
  {
    title: 'For HR professionals',
    icon: BarChart3,
    accentColor: '#8B5CF6',
    description:
      'Use a single cloud system for your employees, candidates and HR processes info.',
    chartData: [65, 45, 80, 55, 70, 90],
  },
  {
    title: 'For managers & leaders',
    icon: TrendingUp,
    accentColor: '#06B6D4',
    description:
      'Get always up-to-date data and monitor performance of the company.',
    chartData: [40, 60, 50, 75, 85, 65],
  },
  {
    title: 'For legal teams',
    icon: FileText,
    accentColor: '#8B5CF6',
    description:
      'CoreShift helps legal teams by streamlining compliance, managing contracts and policies.',
    chartData: [70, 55, 65, 80, 60, 75],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5" style={{ height: 60 }}>
      {data.map((value, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: (value / max) * 60 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
          className="w-3 rounded-sm"
          style={{ backgroundColor: color, opacity: 0.7 + (i * 0.05) }}
        />
      ))}
    </div>
  );
}

export default function BuiltForEveryone() {
  return (
    <section id="product" className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl lg:text-[48px]">
          Built for everyone
        </h2>
        <p className="mx-auto max-w-[600px] text-base text-[#6B7280] md:text-lg">
          Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
            className="flex cursor-pointer flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-300"
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${card.accentColor}15` }}
              >
                <card.icon className="h-5 w-5" style={{ color: card.accentColor }} />
              </div>
              <MiniChart data={card.chartData} color={card.accentColor} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">{card.title}</h3>
            <p className="text-sm leading-relaxed text-[#6B7280]">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
