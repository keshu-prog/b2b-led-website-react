import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LEDDemo: React.FC = () => {
  const [pattern, setPattern] = useState('wave');
  const [isPlaying, setIsPlaying] = useState(true);

  const gridSize = 16;
  const totalLEDs = gridSize * gridSize;

  const getIntensity = (index: number, time: number): number => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const centerX = gridSize / 2;
    const centerY = gridSize / 2;
    const distance = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);

    switch (pattern) {
      case 'wave':
        return (Math.sin(time * 0.01 + col * 0.3) + 1) / 2;
      case 'ripple':
        return (Math.sin(time * 0.02 - distance * 0.5) + 1) / 2;
      case 'spiral':
        const angle = Math.atan2(row - centerY, col - centerX);
        return (Math.sin(time * 0.015 + angle * 2 + distance * 0.3) + 1) / 2;
      case 'random':
        return Math.random();
      default:
        return 0.5;
    }
  };

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-gray-900 rounded-xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Interactive LED Demo</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {['wave', 'ripple', 'spiral', 'random'].map((p) => (
            <button
              key={p}
              onClick={() => setPattern(p)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                pattern === p
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            isPlaying
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="flex justify-center">
        <div 
          className="grid gap-1 p-4 bg-black rounded-lg"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {Array.from({ length: totalLEDs }, (_, i) => {
            const intensity = getIntensity(i, time);
            const brightness = Math.floor(intensity * 255);
            
            return (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: `rgb(${brightness}, ${brightness * 0.8}, ${255 - brightness})`,
                  boxShadow: `0 0 ${intensity * 10}px rgb(${brightness}, ${brightness * 0.8}, ${255 - brightness})`
                }}
                animate={{
                  scale: 0.8 + intensity * 0.4,
                }}
                transition={{ duration: 0.1 }}
              />
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-400">
          Experience the power of programmable LED lighting systems
        </p>
      </div>
    </div>
  );
};

export default LEDDemo;