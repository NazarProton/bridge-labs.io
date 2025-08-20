import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export default function HowItWorksStep({
  number,
  title,
  description,
  iconSrc,
  iconAlt,
}: HowItWorksStepProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!stepRef.current) return;

    const rect = stepRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Обмежуємо рух до 12px в кожному напрямку (інвертований рух)
    const maxMove = 12;
    const x = Math.max(-maxMove, Math.min(maxMove, -mouseX * 0.15));
    const y = Math.max(-maxMove, Math.min(maxMove, -mouseY * 0.15));

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={stepRef}
      className="how-it-works-step flex flex-col items-start relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-16 ml-8">
        <div className="relative w-16 h-16 bg-primary rounded flex justify-end">
          <span className="text-white p-2 font-martian-mono text-base">
            {number}
          </span>
          <div
            className="absolute -left-8 -bottom-8 w-16 h-16 flex justify-center items-center transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="how-it-works-circle">
              <Image src={iconSrc} alt={iconAlt} width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-white text-2xl leading-[100%] font-semibold mb-4">
        {title}
      </h3>
      <p className="text-white font-martian-mono text-sm leading-[150%]">
        {description}
      </p>
    </div>
  );
}
