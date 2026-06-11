import { motion } from 'framer-motion';

export function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-40 h-40 mx-auto mb-12 border-2 border-[#C9A84C] flex items-center justify-center rotate-45"
        initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 45, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="w-32 h-32 border border-[#C9A84C]/50 flex items-center justify-center">
          <span className="-rotate-45 text-5xl">🌟</span>
        </div>
      </motion.div>

      <motion.h1 
        className="text-8xl font-bold font-serif mb-6 text-[#FFF0C2]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        أفق الضيافة
      </motion.h1>
      
      <motion.div
        className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-6"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 128, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      
      <motion.p
        className="text-xl text-[#C9A84C] tracking-[0.3em] font-light uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Premium Umrah Services
      </motion.p>
    </motion.div>
  );
}
