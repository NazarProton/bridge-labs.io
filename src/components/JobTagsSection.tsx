'use client';
import GlowEffect from './GlowEffect';
import useEmblaCarousel from 'embla-carousel-react';

interface JobTagsSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  availableTags: string[];
}

export default function JobTagsSection({
  searchQuery,
  setSearchQuery,
  availableTags,
}: JobTagsSectionProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: true,
  });

  return (
    <div className="mb-12 relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-3">
          {availableTags.map((tag, index) => {
            const tagWords = tag.toLowerCase().split(/\s+/);
            const currentWords = searchQuery
              .toLowerCase()
              .split(/\s+/)
              .filter((word: string) => word.length > 0);

            const isTagActive = tagWords.every((word: string) =>
              currentWords.includes(word)
            );

            return (
              <GlowEffect
                key={`tag-${tag}-${index}`}
                intensity="strong"
                glowSize="small"
                className="w-fit rounded-2xl last:mr-1"
              >
                <div className="embla__slide w-full whitespace-nowrap flex-shrink-0 ">
                  <button
                    onClick={() => {
                      if (isTagActive) {
                        const wordsToRemove = new Set(tagWords);
                        const updatedQuery = currentWords
                          .filter((word: string) => !wordsToRemove.has(word))
                          .join(' ');
                        setSearchQuery(updatedQuery);
                      } else {
                        const newWords = tagWords.filter(
                          (word: string) => !currentWords.includes(word)
                        );

                        if (newWords.length > 0) {
                          const updatedQuery =
                            searchQuery.trim() +
                            (searchQuery.trim() ? ' ' : '') +
                            newWords.join(' ');
                          setSearchQuery(updatedQuery);
                        }
                      }
                    }}
                    className={`px-6 py-3 rounded-2xl w-full transition-all duration-200 cursor-pointer border ${
                      isTagActive
                        ? 'bg-primary border-white text-white shadow-lg'
                        : 'bg-primary border-white/20 text-white'
                    }`}
                  >
                    {tag}
                  </button>
                </div>
              </GlowEffect>
            );
          })}
        </div>
      </div>
    </div>
  );
}
