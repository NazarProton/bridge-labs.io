'use client';
import Image from 'next/image';
import { type Job, mockJobs } from './mockJobs';
import { useState, useEffect, useRef, useMemo } from 'react';
import Flag from 'react-flagkit';
import Link from 'next/link';
import GlowEffect from './GlowEffect';
import FiltersSidebar from './FiltersSidebar';

interface JobListingsSectionProps {
  filteredJobs: Job[];
}

type SortOption = 'relevance' | 'salary-high' | 'salary-low';

const sortOptions = [
  { value: 'relevance', label: 'By relevance' },
  { value: 'salary-high', label: 'Salary: High to Low' },
  { value: 'salary-low', label: 'Salary: Low to High' },
];

export default function JobListingsSection({
  filteredJobs: initialJobs,
}: JobListingsSectionProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>('relevance');
  const [salaryFrom, setSalaryFrom] = useState(100000);
  const [salaryTo, setSalaryTo] = useState(500000);
  const [isSalaryFromOpen, setIsSalaryFromOpen] = useState(false);
  const [isSalaryToOpen, setIsSalaryToOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [employmentFilters, setEmploymentFilters] = useState({
    fullTime: false,
    partTime: false,
    remote: false,
  });
  const [businessSectorFilters, setBusinessSectorFilters] = useState({
    web3: false,
    ai: false,
    sales: false,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target as Element).closest('.salary-dropdown')
      ) {
        setIsSalaryFromOpen(false);
        setIsSalaryToOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      // Employment type filter
      if (
        employmentFilters.fullTime ||
        employmentFilters.partTime ||
        employmentFilters.remote
      ) {
        const hasEmploymentMatch =
          (employmentFilters.fullTime && job.employmentType === 'full-time') ||
          (employmentFilters.partTime && job.employmentType === 'part-time') ||
          (employmentFilters.remote && job.employmentType === 'remote');

        if (!hasEmploymentMatch) return false;
      }

      // Business sector filter
      if (
        businessSectorFilters.web3 ||
        businessSectorFilters.ai ||
        businessSectorFilters.sales
      ) {
        const hasSectorMatch =
          (businessSectorFilters.web3 && job.businessSector === 'Web3') ||
          (businessSectorFilters.ai && job.businessSector === 'AI') ||
          (businessSectorFilters.sales && job.businessSector === 'Sales');

        if (!hasSectorMatch) return false;
      }

      // Salary filter
      if (job.salaryMax < salaryFrom || job.salaryMin > salaryTo) {
        return false;
      }

      return true;
    });
  }, [
    initialJobs,
    employmentFilters,
    businessSectorFilters,
    salaryFrom,
    salaryTo,
  ]);

  const sortedJobs = useMemo(() => {
    const jobs = [...filteredJobs];

    switch (selectedSort) {
      case 'salary-high':
        return jobs.sort((a, b) => b.salaryMax - a.salaryMax);
      case 'salary-low':
        return jobs.sort((a, b) => a.salaryMin - b.salaryMin);
      default:
        return jobs;
    }
  }, [filteredJobs, selectedSort]);

  const displayJobs = sortedJobs;

  const employmentCounts = useMemo(() => {
    const filteredByOtherFilters = initialJobs.filter((job) => {
      // Business sector filter
      if (
        businessSectorFilters.web3 ||
        businessSectorFilters.ai ||
        businessSectorFilters.sales
      ) {
        const hasSectorMatch =
          (businessSectorFilters.web3 && job.businessSector === 'Web3') ||
          (businessSectorFilters.ai && job.businessSector === 'AI') ||
          (businessSectorFilters.sales && job.businessSector === 'Sales');

        if (!hasSectorMatch) return false;
      }

      // Salary filter
      if (job.salaryMax < salaryFrom || job.salaryMin > salaryTo) {
        return false;
      }

      return true;
    });

    return {
      fullTime: filteredByOtherFilters.filter(
        (job) => job.employmentType === 'full-time'
      ).length,
      partTime: filteredByOtherFilters.filter(
        (job) => job.employmentType === 'part-time'
      ).length,
      remote: filteredByOtherFilters.filter(
        (job) => job.employmentType === 'remote'
      ).length,
    };
  }, [initialJobs, businessSectorFilters, salaryFrom, salaryTo]);

  const businessSectorCounts = useMemo(() => {
    const filteredByOtherFilters = initialJobs.filter((job) => {
      // Employment type filter
      if (
        employmentFilters.fullTime ||
        employmentFilters.partTime ||
        employmentFilters.remote
      ) {
        const hasEmploymentMatch =
          (employmentFilters.fullTime && job.employmentType === 'full-time') ||
          (employmentFilters.partTime && job.employmentType === 'part-time') ||
          (employmentFilters.remote && job.employmentType === 'remote');

        if (!hasEmploymentMatch) return false;
      }

      // Salary filter
      if (job.salaryMax < salaryFrom || job.salaryMin > salaryTo) {
        return false;
      }

      return true;
    });

    return {
      web3: filteredByOtherFilters.filter(
        (job) => job.businessSector === 'Web3'
      ).length,
      ai: filteredByOtherFilters.filter((job) => job.businessSector === 'AI')
        .length,
      sales: filteredByOtherFilters.filter(
        (job) => job.businessSector === 'Sales'
      ).length,
    };
  }, [initialJobs, employmentFilters, salaryFrom, salaryTo]);

  return (
    <div className="w-full">
      <div className="mb-8 flex justify-start gap-4">
        <div className="relative">
          <GlowEffect
            glowSize="small"
            intensity="strong"
            className="rounded-2xl"
          >
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation();
                toggleSortDropdown();
              }}
              className="flex items-center gap-2 px-6 py-4 bg-black cursor-pointer text-white rounded-2xl border border-white/20 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                {sortOptions.find((opt) => opt.value === selectedSort)?.label}
              </span>
              <svg
                className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                  isSortOpen ? 'rotate-180' : ''
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
          </GlowEffect>

          {isSortOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 w-48 bg-black border border-white/20 rounded-2xl p-2 z-[9999]"
            >
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value as SortOption)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-xl transition-colors duration-200"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <GlowEffect className="rounded-2xl" glowSize="small" intensity="strong">
          <button
            onClick={() => setIsFiltersModalOpen(true)}
            className="lg:hidden flex items-center gap-2 h-full px-4 py-2 cursor-pointer bg-black border border-white/20 rounded-2xl transition-colors duration-200"
          >
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span className="text-white font-medium">Filters</span>
          </button>
        </GlowEffect>
      </div>

      <div className="flex gap-8">
        <div className="w-9/12 max-lg:w-full min-w-0">
          <div className="flex flex-col gap-8">
            {displayJobs.map((job) => (
              <GlowEffect
                key={job.id}
                glowSize="large"
                intensity="strong"
                className="rounded-4xl"
              >
                <Link className="w-full" href={`/work/find-job/${job.id}`}>
                  <div className="relative box-border flex flex-col justify-center items-start p-8 gap-8 w-full bg-[#0d0d0d] border border-white/15 rounded-4xl transition-colors duration-200 cursor-pointer">
                    <div className="flex flex-row items-start justify-between w-full max-[700px]:flex-col">
                      <div className="flex flex-col items-start gap-8 w-3/4 max-[700px]:w-full">
                        <div className="grid grid-cols-4 gap-2 w-full max-[1100px]:grid-cols-2">
                          <div className="flex flex-row justify-center items-center px-8 gap-2 h-12 bg-[#0D00FF] backdrop-blur-[16px] rounded-4xl">
                            <Image
                              src="/marketplace/bridged.svg"
                              alt="Bridged"
                              width={27}
                              height={12}
                              className="w-[27px] h-[12px]"
                            />
                            <span className="font-martian-mono font-normal text-sm leading-[150%] text-center text-white">
                              Bridged
                            </span>
                          </div>
                          {job.tags.slice(0, 3).map((tag, index) => (
                            <div
                              key={index}
                              className="flex flex-row justify-center items-center px-8 gap-2 h-12 bg-white/15 backdrop-blur-[16px] rounded-4xl"
                            >
                              <span className="font-martian-mono font-normal text-sm leading-[150%] text-center text-white">
                                {tag}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="min-[700px]:hidden w-full flex justify-center min-[500px]:justify-start">
                          <Image
                            src={job.logo}
                            alt="Company Logo"
                            width={131.5}
                            height={64}
                            className="w-[131.5px] h-16"
                          />
                        </div>

                        <div className="w-full flex flex-col items-center min-[500px]:items-start gap-2">
                          <h3 className="font-inter text-center min-[500px]:text-left font-semibold text-4xl leading-[48px] text-white max-[700px]:text-2xl max-[700px]:leading-[32px]">
                            {job.title}
                          </h3>

                          <div className="flex flex-row items-center gap-2 max-[500px]:flex-col max-[500px]:gap-2">
                            <div className="flex flex-row items-center gap-2">
                              <span className="font-inter font-semibold text-lg leading-[22px] text-white/75">
                                {job.company}
                              </span>
                              <Image
                                src="/marketplace/tickDone.svg"
                                alt="Verified"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="font-inter hidden min-[500px]:block font-semibold text-xl leading-[24px] text-white/75">
                              ·
                            </span>
                            <div className="flex flex-row items-center gap-2">
                              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 relative">
                                <Flag
                                  country={job.country}
                                  className="w-8 h-6 absolute top-1/2 left-1/2 transform scale-140 -translate-x-1/2 -translate-y-1/2"
                                />
                              </div>
                              <span className="font-inter font-semibold text-lg leading-[22px] text-white/75">
                                {job.countryName}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-1/4 min-[700px]:block hidden">
                        <div className="flex items-center justify-end w-full h-full">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={131.5}
                            height={64}
                            className="w-[131.5px] h-16"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 max-[500px]:items-center">
                      <p className="font-martian-mono font-normal text-sm leading-[150%] text-white/75 w-full line-clamp-2 max-[500px]:text-center">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex flex-row items-center mt-8 justify-between w-full max-[500px]:flex-col max-[500px]:gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row justify-center items-center px-4 py-1 gap-2 border border-white rounded-2xl">
                          <span className="font-martian-mono font-normal text-base leading-[150%] text-white">
                            USD
                          </span>
                        </div>
                        <span className="font-martian-mono font-normal text-base leading-[150%] text-white">
                          {job.salary}
                        </span>
                      </div>
                      <span className="font-martian-mono font-normal text-base leading-[150%] text-white/25">
                        2 hours ago
                      </span>
                    </div>
                  </div>
                </Link>
              </GlowEffect>
            ))}
          </div>
          {displayJobs.length === 0 && (
            <div className="text-center py-48">
              <p className="text-white/60 text-lg">
                No jobs found matching your criteria
              </p>
            </div>
          )}
        </div>

        <div className="w-3/12 max-lg:hidden">
          <div className="bg-black rounded-2xl py-6 relative sticky top-6">
            <FiltersSidebar
              employmentFilters={employmentFilters}
              setEmploymentFilters={setEmploymentFilters}
              businessSectorFilters={businessSectorFilters}
              setBusinessSectorFilters={setBusinessSectorFilters}
              salaryFrom={salaryFrom}
              setSalaryFrom={setSalaryFrom}
              salaryTo={salaryTo}
              setSalaryTo={setSalaryTo}
              isSalaryFromOpen={isSalaryFromOpen}
              setIsSalaryFromOpen={setIsSalaryFromOpen}
              isSalaryToOpen={isSalaryToOpen}
              setIsSalaryToOpen={setIsSalaryToOpen}
              employmentCounts={employmentCounts}
              businessSectorCounts={businessSectorCounts}
            />
          </div>
        </div>
      </div>

      {/* Filters Modal */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 lg:hidden transition-all duration-300 ${
          isFiltersModalOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-black border border-white/20 rounded-2xl p-6 w-full max-w-[360px] max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30 transition-all duration-300 ${
            isFiltersModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-inter font-medium text-lg">
              Filters
            </h3>
            <button
              onClick={() => setIsFiltersModalOpen(false)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <FiltersSidebar
            employmentFilters={employmentFilters}
            setEmploymentFilters={setEmploymentFilters}
            businessSectorFilters={businessSectorFilters}
            setBusinessSectorFilters={setBusinessSectorFilters}
            salaryFrom={salaryFrom}
            setSalaryFrom={setSalaryFrom}
            salaryTo={salaryTo}
            setSalaryTo={setSalaryTo}
            isSalaryFromOpen={isSalaryFromOpen}
            setIsSalaryFromOpen={setIsSalaryFromOpen}
            isSalaryToOpen={isSalaryToOpen}
            setIsSalaryToOpen={setIsSalaryToOpen}
            employmentCounts={employmentCounts}
            businessSectorCounts={businessSectorCounts}
          />
        </div>
      </div>
    </div>
  );
}
