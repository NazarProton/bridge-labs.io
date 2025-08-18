'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BackgroundStrokes() {
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isLeftSide = isClient ? mousePosition.x < window.innerWidth / 2 : false;

  return (
    <div
      className="w-full select-none max-w-[1510px] mx-auto bg-primary pt-[112px]"
      style={{ height: 'calc(100vh - 293px)' }}
    >
      <div className="w-full h-full px-8 py-6 relative overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src="/stroke/storke-rightSide.png"
            alt="stroke-rightSide"
            fill
            priority
            className={`object-contain transition-opacity duration-500 pointer-events-none select-none ${
              isLeftSide ? 'opacity-0' : 'opacity-100'
            }`}
            draggable={false}
          />

          <Image
            src="/stroke/storke-leftSide.png"
            alt="stroke-leftSide"
            fill
            priority
            className={`object-contain transition-opacity duration-500 pointer-events-none select-none ${
              isLeftSide ? 'opacity-100' : 'opacity-0'
            }`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
