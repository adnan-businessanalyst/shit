import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 8000),
      setTimeout(() => setPhase(4), 10000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-start overflow-hidden px-24"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-1/2 z-10">
        <motion.h2 
          className="text-5xl font-serif text-[#FFF0C2] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          منصة عمليات ضيافة متكاملة
        </motion.h2>
        
        <div className="space-y-6 mt-12">
          {['إدارة الوكالات', 'الحجوزات', 'قسائم السفر', 'التقارير المالية'].map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-4 text-2xl text-[#C9A84C]"
              initial={{ opacity: 0, x: 50 }}
              animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute left-0 top-0 w-1/2 h-full"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/hotel-lobby.png`}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]" />
      </motion.div>
    </motion.div>
  );
}
