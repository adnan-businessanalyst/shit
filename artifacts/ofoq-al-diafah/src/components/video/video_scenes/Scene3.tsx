import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 10000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div 
          className="w-[800px] h-[800px] border border-[#C9A84C] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] border border-[#C9A84C] rounded-full"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.h2 
        className="text-4xl font-light text-[#C9A84C]/80 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Enterprise Grade
      </motion.h2>

      <div className="grid grid-cols-2 gap-8 text-center z-10 w-full max-w-4xl">
        <motion.div 
          className="bg-[#111] border border-[#C9A84C]/20 p-8 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl text-[#FFF0C2] mb-4">24+</div>
          <div className="text-xl text-[#C9A84C]">صفحة تشغيلية</div>
        </motion.div>
        
        <motion.div 
          className="bg-[#111] border border-[#C9A84C]/20 p-8 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl text-[#FFF0C2] mb-4">100%</div>
          <div className="text-xl text-[#C9A84C]">واجهة عربية</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
