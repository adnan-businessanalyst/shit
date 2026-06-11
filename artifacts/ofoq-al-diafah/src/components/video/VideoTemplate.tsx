import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { open: 12000, features1: 12000, features2: 12000, sync: 12000, close: 12000 };

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-[#C9A84C] font-display" dir="rtl">
      {/* Background Video - Persistent */}
      <div className="absolute inset-0">
        <video 
          src={`${import.meta.env.BASE_URL}videos/gold-dust.mp4`}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <AnimatePresence mode="sync">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="features1" />}
        {currentScene === 2 && <Scene3 key="features2" />}
        {currentScene === 3 && <Scene4 key="sync" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}
