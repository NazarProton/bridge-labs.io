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
      className="w-full select-none max-w-[1510px] mx-auto bg-primary"
      style={{ height: 'calc(100vh - 112px - 229px)' }}
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

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute left-[calc(50%-240px)] max-[600px]:left-[calc(50%-168px)] max-[450px]:left-[calc(50%-134px)] transition-opacity duration-500 ${
                isLeftSide ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <g clipPath="url(#clip0_224_643_left)">
                <path
                  d="M15.56 5.16005L13.2 2.80005L0 16L13.2 29.2L15.56 26.84L4.72 16L15.56 5.16005Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_224_643_left">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div
              className={`gradient-border-circle flex flex-col items-center justify-center text-white ${
                isLeftSide ? 'left-side' : 'right-side'
              }`}
            >
              <div className=" mb-2">
                {isLeftSide ? "I'm looking for" : "I'm looking for"}
              </div>
              <div className="text-[32px] min-[600px]:text-[48px] leading-[100%] font-semibold">
                {isLeftSide ? 'A TALENT' : 'A PROJECT'}
              </div>
            </div>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute right-[calc(50%-240px)] max-[600px]:right-[calc(50%-168px)] max-[450px]:right-[calc(50%-134px)] rotate-180 transition-opacity duration-500 ${
                isLeftSide ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <g clipPath="url(#clip0_224_643_right)">
                <path
                  d="M15.56 5.16005L13.2 2.80005L0 16L13.2 29.2L15.56 26.84L4.72 16L15.56 5.16005Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_224_643_right">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
