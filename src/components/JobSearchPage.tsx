'use client';
import { useState, useMemo } from 'react';
import { mockJobs } from './mockJobs';
import JobSearchHeader from './JobSearchHeader';
import JobTagsSection from './JobTagsSection';
import JobListingsSection from './JobListingsSection';
import Footer from './global/Footer';

export default function JobSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const availableLocations = useMemo(() => {
    const locations = [...new Set(mockJobs.map((job) => job.location))];
    return ['All Locations', ...locations];
  }, []);

  const availableTags = useMemo(() => {
    const allTags = mockJobs.flatMap((job) => job.tags);
    return [...new Set(allTags)];
  }, []);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const searchWords = searchQuery
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);

      let matchesSearch = false;

      if (searchWords.length === 0) {
        matchesSearch = true;
      } else {
        const searchableText =
          `${job.title} ${job.company} ${job.description} ${job.aboutCompany} ${job.opportunity} ${job.businessSector}`.toLowerCase();

        matchesSearch = searchWords.some((word) =>
          searchableText.includes(word)
        );
      }

      const matchesLocation =
        selectedLocation === 'All Locations' ||
        job.location === selectedLocation;

      return matchesSearch && matchesLocation;
    });
  }, [searchQuery, selectedLocation]);

  return (
    <div className=" bg-primary">
      <div className="max-w-[1510px] mx-auto px-8 py-10">
        <JobSearchHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          availableLocations={availableLocations}
        />
        <JobTagsSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          availableTags={availableTags}
        />
      </div>
      <div className="bg-black w-screen py-12">
        <div className="max-w-[1510px] mx-auto px-8">
          <JobListingsSection filteredJobs={filteredJobs} />
          <Footer inverseColor={true} />
        </div>
      </div>
    </div>
  );
}
