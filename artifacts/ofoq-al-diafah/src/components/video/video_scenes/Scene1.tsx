import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 6000),
      setTimeout(() => setPhase(4), 10000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-waves.png`}
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-32 h-32 mx-auto mb-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center relative"
        >
          <motion.div 
            className="absolute inset-0 border border-[#C9A84C] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-4xl">🌟</span>
        </motion.div>

        <motion.h1 
          className="text-7xl font-bold font-serif mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0C2] to-[#C9A84C]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          أفق الضيافة
        </motion.h1>
        
        <motion.p
          className="text-2xl text-[#C9A84C]/80 uppercase tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Horizon of Hospitality
        </motion.p>
      </div>
    </motion.div>
  );
}
