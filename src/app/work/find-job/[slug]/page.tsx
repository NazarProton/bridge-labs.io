'use client';

import { useParams, useRouter } from 'next/navigation';
import { mockJobs } from '@/components/mockJobs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Flag from 'react-flagkit';
import Footer from '@/components/global/Footer';

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = parseInt(params.slug as string);

  const job = mockJobs.find((job) => job.id === jobId);

  if (!job) {
    notFound();
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="h-full bg-black">
      <div className="max-w-[1510px] mx-auto px-8 py-12">
        <div className="bg-white/5 border border-white/15 backdrop-blur-[16px] rounded-4xl p-4 min-[500px]:p-8">
          <div className="flex flex-row items-start justify-between w-full mb-8">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <button
                  onClick={handleBack}
                  className="flex flex-row justify-center items-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-[16px] rounded-4xl transition-colors duration-200"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 12H5M12 19L5 12L12 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="flex items-center justify-end h-full">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={131.5}
                    height={64}
                    className="w-[131.5px] h-16"
                  />
                </div>
              </div>
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
            </div>
          </div>

          <div className="mb-8">
            <h1 className="font-inter font-semibold text-5xl leading-[60px] text-white mb-4">
              {job.title}
            </h1>
            <div className="flex min-[500px]:flex-row flex-col items-center gap-2 mb-6">
              <div className="flex flex-row items-center gap-2">
                <span className="font-inter font-semibold text-xl leading-[26px] text-white/75">
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
              <span className="font-inter font-semibold text-xl min-[500px]:block hidden leading-[24px] text-white/75">
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

          <div className="prose prose-invert max-w-none">
            <div className="text-white/75 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  About {job.company}
                </h2>
                <p className="text-lg leading-relaxed">{job.aboutCompany}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  The Opportunity
                </h2>
                <p className="text-lg leading-relaxed">{job.opportunity}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  What You Will Do
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {job.whatYouWillDo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  What We Are Looking For
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {job.whatWeAreLookingFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Compensation & Benefits
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-row justify-center items-center px-4 py-2 gap-2 border border-white rounded-2xl">
                    <span className="font-martian-mono font-normal text-base leading-[150%] text-white">
                      USD
                    </span>
                  </div>
                  <span className="font-martian-mono font-normal text-xl leading-[150%] text-white">
                    {job.salary}
                  </span>
                </div>
                <p className="text-lg leading-relaxed">{job.compensation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer inverseColor withPadding />
    </div>
  );
}
