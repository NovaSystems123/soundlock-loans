import { useEffect, useState } from "react";

interface SoundWaveProps {
  encrypted?: boolean;
  bars?: number;
  className?: string;
}

const SoundWaveAnimation = ({ encrypted = false, bars = 20, className = "" }: SoundWaveProps) => {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const generateHeights = () => {
      const newHeights = Array.from({ length: bars }, () => Math.random() * 100 + 20);
      setHeights(newHeights);
    };

    generateHeights();
    const interval = setInterval(generateHeights, encrypted ? 150 : 100);

    return () => clearInterval(interval);
  }, [bars, encrypted]);

  return (
    <div className={`flex items-end justify-center space-x-1 ${className}`}>
      {heights.map((height, index) => (
        <div
          key={index}
          className={`w-1 rounded-t transition-all duration-100 ${
            encrypted 
              ? 'bg-wave-encrypted shadow-[0_0_10px_hsl(var(--wave-encrypted))]' 
              : 'bg-wave-primary shadow-[0_0_8px_hsl(var(--wave-primary))]'
          }`}
          style={{
            height: `${height}%`,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWaveAnimation;