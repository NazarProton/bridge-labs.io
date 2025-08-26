'use client';
import GlowEffect from './GlowEffect';

type EmploymentFilters = {
  fullTime: boolean;
  partTime: boolean;
  remote: boolean;
};

type BusinessSectorFilters = {
  web3: boolean;
  ai: boolean;
  sales: boolean;
};

interface FiltersSidebarProps {
  employmentFilters: EmploymentFilters;
  setEmploymentFilters: React.Dispatch<React.SetStateAction<EmploymentFilters>>;
  businessSectorFilters: BusinessSectorFilters;
  setBusinessSectorFilters: React.Dispatch<
    React.SetStateAction<BusinessSectorFilters>
  >;
  salaryFrom: number;
  setSalaryFrom: (value: number) => void;
  salaryTo: number;
  setSalaryTo: (value: number) => void;
  employmentCounts: {
    fullTime: number;
    partTime: number;
    remote: number;
  };
  businessSectorCounts: {
    web3: number;
    ai: number;
    sales: number;
  };
  isSalaryFromOpen: boolean;
  setIsSalaryFromOpen: (value: boolean) => void;
  isSalaryToOpen: boolean;
  setIsSalaryToOpen: (value: boolean) => void;
}

export default function FiltersSidebar({
  employmentFilters,
  setEmploymentFilters,
  businessSectorFilters,
  setBusinessSectorFilters,
  salaryFrom,
  setSalaryFrom,
  salaryTo,
  setSalaryTo,
  employmentCounts,
  businessSectorCounts,
  isSalaryFromOpen,
  setIsSalaryFromOpen,
  isSalaryToOpen,
  setIsSalaryToOpen,
}: FiltersSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white font-medium mb-3 font-inter">Employment:</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={employmentFilters.fullTime}
                onChange={(e) =>
                  setEmploymentFilters((prev: EmploymentFilters) => ({
                    ...prev,
                    fullTime: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  employmentFilters.fullTime ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    employmentFilters.fullTime ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              Full-time ({employmentCounts.fullTime})
            </span>
          </label>
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={employmentFilters.partTime}
                onChange={(e) =>
                  setEmploymentFilters((prev: EmploymentFilters) => ({
                    ...prev,
                    partTime: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  employmentFilters.partTime ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    employmentFilters.partTime ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              Part-time ({employmentCounts.partTime})
            </span>
          </label>
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={employmentFilters.remote}
                onChange={(e) =>
                  setEmploymentFilters((prev: EmploymentFilters) => ({
                    ...prev,
                    remote: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  employmentFilters.remote ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    employmentFilters.remote ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              Remote ({employmentCounts.remote})
            </span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-white font-medium mb-3 font-inter">Salary:</h4>
        <div className="space-y-3">
          <div>
            <span className="text-white/75 text-sm font-martian-mono">
              from
            </span>
            <div className="relative salary-dropdown mt-2">
              <GlowEffect
                className="rounded-2xl"
                glowSize="small"
                intensity="strong"
              >
                <button
                  onClick={() => setIsSalaryFromOpen(!isSalaryFromOpen)}
                  className="w-full h-14 bg-black border border-white/15 backdrop-blur-16 rounded-2xl px-6 flex items-center justify-between transition-colors duration-200"
                >
                  <span className="text-white font-martian-mono text-sm">
                    {salaryFrom.toLocaleString()}
                  </span>
                  <svg
                    className={`w-6 h-6 text-white transition-transform duration-200 ${
                      isSalaryFromOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </GlowEffect>
              {isSalaryFromOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-black border border-white/20 rounded-2xl p-2 z-[9999]">
                  {[50000, 100000, 150000, 200000, 250000, 300000].map(
                    (value) => (
                      <button
                        key={value}
                        onClick={() => {
                          const newValue = value;
                          if (newValue > salaryTo) {
                            setSalaryTo(newValue);
                          }
                          setSalaryFrom(newValue);
                          setIsSalaryFromOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-xl transition-colors duration-200 font-martian-mono"
                      >
                        {value.toLocaleString()}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <span className="text-white/75 text-sm font-martian-mono">to</span>
            <div className="relative salary-dropdown mt-2">
              <GlowEffect
                className="rounded-2xl"
                glowSize="small"
                intensity="strong"
              >
                <button
                  onClick={() => setIsSalaryToOpen(!isSalaryToOpen)}
                  className="w-full h-14 bg-black border border-white/15 backdrop-blur-16 rounded-2xl px-6 flex items-center justify-between transition-colors duration-200"
                >
                  <span className="text-white font-martian-mono text-sm">
                    {salaryTo.toLocaleString()}
                  </span>
                  <svg
                    className={`w-6 h-6 text-white transition-transform duration-200 ${
                      isSalaryToOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </GlowEffect>
              {isSalaryToOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-black border border-white/20 rounded-2xl p-2 z-[9999]">
                  {[100000, 200000, 300000, 400000, 500000, 600000].map(
                    (value) => (
                      <button
                        key={value}
                        onClick={() => {
                          const newValue = value;
                          if (newValue < salaryFrom) {
                            setSalaryFrom(newValue);
                          }
                          setSalaryTo(newValue);
                          setIsSalaryToOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-xl transition-colors duration-200 font-martian-mono"
                      >
                        {value.toLocaleString()}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-white font-medium mb-3 font-inter">
          Business sector:
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={businessSectorFilters.web3}
                onChange={(e) =>
                  setBusinessSectorFilters((prev: BusinessSectorFilters) => ({
                    ...prev,
                    web3: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  businessSectorFilters.web3 ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    businessSectorFilters.web3 ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              Web3 ({businessSectorCounts.web3})
            </span>
          </label>
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={businessSectorFilters.ai}
                onChange={(e) =>
                  setBusinessSectorFilters((prev: BusinessSectorFilters) => ({
                    ...prev,
                    ai: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  businessSectorFilters.ai ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    businessSectorFilters.ai ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              AI ({businessSectorCounts.ai})
            </span>
          </label>
          <label className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={businessSectorFilters.sales}
                onChange={(e) =>
                  setBusinessSectorFilters((prev: BusinessSectorFilters) => ({
                    ...prev,
                    sales: e.target.checked,
                  }))
                }
              />
              <div
                className={`w-4 h-4 bg-black border border-white rounded flex items-center justify-center group-hover:border-gray-300 transition-colors duration-200 ${
                  businessSectorFilters.sales ? 'border-white' : ''
                }`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    businessSectorFilters.sales ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="font-martian-mono">
              Sales ({businessSectorCounts.sales})
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
