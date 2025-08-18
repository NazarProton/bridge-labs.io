'use client';

import { useState, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [mousePositions, setMousePositions] = useState<MousePosition[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const containerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = containerRefs[index].current?.getBoundingClientRect();
    if (rect) {
      const newPositions = [...mousePositions];
      newPositions[index] = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setMousePositions(newPositions);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 p-8">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          ref={containerRefs[index]}
          className="relative w-80 h-60 group"
          onMouseMove={(e) => handleMouseMove(e, index)}
        >
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2) 50%, transparent 80%)`,
            }}
          />
          <div className="relative w-full h-full bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(200px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(255, 255, 255, 0.1), transparent 70%)`,
                maskImage:
                  'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                maskComposite: 'xor',
                WebkitMaskComposite: 'xor',
                padding: '2px',
                borderRadius: '8px',
              }}
            />
            <div className="absolute inset-[2px] bg-black rounded-lg">
              <div className="p-6 h-full flex items-center justify-center">
                <h2 className="text-white text-xl font-medium">
                  Block {index + 1}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
