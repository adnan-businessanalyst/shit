import { useState, useEffect } from "react";

declare global {
  interface Window {
    startRecording?: () => void;
    stopRecording?: () => void;
  }
}

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);
  const durationValues = Object.values(durations);
  const totalScenes = durationValues.length;

  useEffect(() => {
    // Only call startRecording on mount
    window.startRecording?.();
    
    let current = 0;
    let timeoutId: NodeJS.Timeout;

    const advance = () => {
      current = (current + 1) % totalScenes;
      setCurrentScene(current);
      
      if (current === 0) {
        window.stopRecording?.();
      }
      
      timeoutId = setTimeout(advance, durationValues[current]);
    };

    timeoutId = setTimeout(advance, durationValues[0]);
    
    return () => clearTimeout(timeoutId);
  }, []); // Only run once on mount

  return { currentScene };
}