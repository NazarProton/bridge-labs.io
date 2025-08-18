'use client';

import { useState, useRef, ReactNode } from 'react';

interface GlowEffectProps {
  children: ReactNode;
  className?: string;
  intensity?: 'normal' | 'strong';
}

export default function GlowEffect({
  children,
  className = '',
  intensity = 'normal',
}: GlowEffectProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const glowOpacity =
    intensity === 'strong'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(255, 255, 255, 0.25)';
  const borderGlowOpacity =
    intensity === 'strong'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(255, 255, 255, 0.25)';

  return (
    <div
      ref={containerRef}
      className={`relative group p-px ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowOpacity}, rgba(147, 51, 234, 0.2) 50%, transparent 80%)`,
          borderRadius: 'inherit',
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, ${borderGlowOpacity}, transparent 70%)`,
          maskImage:
            'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          borderRadius: 'inherit',
        }}
      />

      <div className="relative z-10 w-full h-full  transition-transform duration-300 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
