import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 4000),
      setTimeout(() => setPhase(3), 10000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-network.png`}
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      <div className="text-center z-10 bg-[#0A0A0A]/60 p-12 backdrop-blur-sm rounded-2xl border border-[#C9A84C]/20">
        <motion.h2 
          className="text-6xl font-serif text-[#FFF0C2] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          تزامن سحابي فوري
        </motion.h2>
        
        <motion.p
          className="text-2xl text-[#C9A84C]"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Cloud-Backed Real-Time Sync
        </motion.p>
      </div>
    </motion.div>
  );
}
