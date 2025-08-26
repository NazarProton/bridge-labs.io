'use client';

import { useState, useRef, ReactNode } from 'react';

interface GlowEffectProps {
  children: ReactNode;
  className?: string;
  intensity?: 'normal' | 'strong';
  glowSize?: 'small' | 'medium' | 'large';
}

export default function GlowEffect({
  children,
  className = '',
  intensity = 'normal',
  glowSize = 'medium',
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

  const getGlowRadius = () => {
    switch (glowSize) {
      case 'small':
        return { main: '100px', border: '100px' };
      case 'medium':
        return { main: '400px', border: '200px' };
      case 'large':
        return { main: '600px', border: '300px' };
      default:
        return { main: '400px', border: '200px' };
    }
  };

  const glowRadius = getGlowRadius();

  const paddingClass = glowSize === 'small' ? 'p-[1px]' : 'p-px';

  return (
    <div
      ref={containerRef}
      className={`relative group ${paddingClass} ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Постійний border тільки для карточок слайдера */}
      {glowSize === 'large' && (
        <div
          className="absolute inset-0 border border-white/15 rounded-2xl"
          style={{
            borderRadius: 'inherit',
          }}
        />
      )}

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${glowRadius.main} circle at ${
            mousePos.x
          }px ${mousePos.y}px, ${glowOpacity}, rgba(255, 255, 255, ${
            intensity === 'strong' ? '0.2' : '0.1'
          }) 50%, transparent 60%)`,
          borderRadius: 'inherit',
        }}
      />

      {/* Border глоу для всіх елементів */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${glowRadius.border} circle at ${
            mousePos.x
          }px ${mousePos.y}px, ${borderGlowOpacity}, transparent ${
            glowSize === 'large' ? '75%' : '70%'
          })`,
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
