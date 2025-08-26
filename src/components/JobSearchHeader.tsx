'use client';
import GlowEffect from './GlowEffect';
import LocationDropdown from './LocationDropdown';
import { mockJobs } from './mockJobs';

interface JobSearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  availableLocations: string[];
}

export default function JobSearchHeader({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  availableLocations,
}: JobSearchHeaderProps) {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-2xl leading-[100%] font-bold text-white mb-4">
          {mockJobs.length} open positions from{' '}
          {new Set(mockJobs.map((job) => job.company)).size} companies
        </h1>
      </div>
      <div className="mb-8">
        <div className="hidden min-[900px]:flex gap-8 justify-center">
          <GlowEffect
            intensity="normal"
            glowSize="large"
            className="w-full rounded-2xl"
          >
            <div className="flex items-center bg-primary border border-white/15 backdrop-blur-2xl rounded-2xl h-16 w-full">
              <div className="flex items-center px-8 h-full flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Which job or company are you looking for?"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-white/75 font-martian-mono text-base placeholder:truncate"
                  style={{
                    textOverflow: 'ellipsis',
                  }}
                />
              </div>

              <div className="h-full w-px bg-white/15"></div>

              <LocationDropdown
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                availableLocations={availableLocations}
              />
            </div>
          </GlowEffect>
          <button className="px-8 py-4 bg-white hover:bg-gray-100 text-primary font-medium rounded-2xl h-16 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search now
          </button>
        </div>

        <div className="min-[900px]:hidden flex flex-col gap-4">
          <GlowEffect
            intensity="normal"
            glowSize="large"
            className="w-full rounded-2xl"
          >
            <div className="bg-primary border border-white/15 backdrop-blur-2xl rounded-2xl h-16 w-full">
              <div className="flex items-center px-8 h-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Which job or company are you looking for?"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-white/75 font-martian-mono text-base placeholder:truncate"
                  style={{
                    textOverflow: 'ellipsis',
                  }}
                />
              </div>
            </div>
          </GlowEffect>

          <GlowEffect
            intensity="normal"
            glowSize="large"
            className="w-full rounded-2xl"
          >
            <div className="bg-primary border justify-center flex border-white/15 backdrop-blur-2xl rounded-2xl h-16 w-full">
              <LocationDropdown
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                availableLocations={availableLocations}
                isMobile={true}
              />
            </div>
          </GlowEffect>

          <button className="w-full px-8 py-4 bg-white hover:bg-gray-100 text-primary font-medium rounded-2xl h-16 transition-colors duration-200 flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search now
          </button>
        </div>
      </div>
    </>
  );
}
