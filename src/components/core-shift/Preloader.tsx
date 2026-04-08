'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dots = [
  { color: '#EF4444', delay: 0 },    // Red
  { color: '#8B5CF6', delay: 0.15 }, // Purple
  { color: '#38BDF8', delay: 0.3 },  // Blue
  { color: '#FBBF24', delay: 0.45 }, // Yellow
];

export default function Preloader() {
  const [phase, setPhase] = useState('bouncing'); // bouncing -> gathering -> reveal -> finished
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const gatherTimer = setTimeout(() => setPhase('gathering'), 2000);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2500);
    const finishTimer = setTimeout(() => {
      setPhase('finished');
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }, 1200);
    }, 4500);

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(gatherTimer);
      clearTimeout(revealTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
           key="preloader"
           initial={{ opacity: 1 }}
           exit={{ 
             opacity: 0,
             y: -20,
             transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
           }}
           className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fdfdfd]"
        >
          <div className="relative flex flex-col items-center">
            
            {/* Dots Animation Layer */}
            <div className="flex items-center justify-center h-20 w-80 relative">
               <AnimatePresence>
                 {(phase === 'bouncing' || phase === 'gathering') && (
                    <div className="flex gap-4">
                      {dots.map((dot, i) => (
                        <motion.div
                          key={i}
                          layoutId={`dot-${i}`}
                          initial={{ scale: 0, y: 0 }}
                          animate={phase === 'bouncing' ? {
                            scale: 1,
                            y: [0, -25, 0],
                          } : {
                            scale: [1, 1.4, 0],
                            y: 0,
                            x: (1.5 - i) * 10,
                            opacity: [1, 1, 0]
                          }}
                          transition={phase === 'bouncing' ? {
                            y: {
                              duration: 0.6,
                              repeat: Infinity,
                              delay: dot.delay,
                              ease: "easeInOut"
                            },
                            scale: { duration: 0.4, ease: "easeOut" }
                          } : {
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                          className="h-4 w-4 rounded-full shadow-sm"
                          style={{ backgroundColor: dot.color }}
                        />
                      ))}
                    </div>
                 )}
               </AnimatePresence>

               {/* Text Reveal Layer */}
               <AnimatePresence>
                 {phase === 'reveal' && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-1.5"
                      >
                        <span className="text-6xl font-black tracking-tighter text-zinc-900">Core</span>
                        <span className="text-6xl font-black tracking-tighter text-[#EF4444]">Shift</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-4"
                      >
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">
                          Powered by HRILAX
                        </p>
                      </motion.div>

                      {/* Accent highlight */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-[2px] bg-zinc-100 mt-6"
                      />
                   </div>
                 )}
               </AnimatePresence>
            </div>

            {/* Background Atmosphere */}
            <motion.div 
               animate={{ 
                 opacity: phase === 'reveal' ? 0.08 : 0.03,
                 scale: phase === 'reveal' ? 1.5 : 1
               }}
               transition={{ duration: 2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EF4444] rounded-full blur-[140px] pointer-events-none" 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
