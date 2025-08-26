'use client';
import { useState, useEffect, useRef } from 'react';

interface LocationDropdownProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  availableLocations: string[];
  isMobile?: boolean;
}

export default function LocationDropdown({
  selectedLocation,
  onLocationChange,
  availableLocations,
  isMobile,
}: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center px-32 h-full  gap-2 flex-shrink-0 ${
        isMobile ? 'w-full' : 'w-52'
      }`}
    >
      <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_310_170)">
            <path
              d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_310_170">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className=" flex-shrink-0" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-white font-martian-mono text-base cursor-pointer whitespace-nowrap"
        >
          <span className="truncate">{selectedLocation}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-full  bg-primary backdrop-blur-xl border border-white/50 rounded-2xl z-50">
            {availableLocations
              .filter((location) => location !== selectedLocation)
              .map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    onLocationChange(location);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 cursor-pointer py-2 text-left text-white hover:bg-white/20 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                >
                  {location}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
