'use client';

import Navbar from '../components/main/heroScreen/Navbar';
import BackgroundStrokes from '../components/main/heroScreen/BackgroundStrokes';
import HowItWorksSection from '../components/HowItWorksSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/global/Footer';
import ServicesSlider from '../components/ServicesSlider';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col"
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        <div className="flex-1 min-h-0">
          <BackgroundStrokes />
        </div>

        {/* Text section */}
        <div className="w-full max-w-[1510px] mx-auto px-8 py-6 bg-primary">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold text-2xl min-[600px]:text-4xl leading-[100%] ">
              Web2 Talents meets
            </h1>
            <h1 className="text-white font-semibold text-2xl min-[600px]:text-4xl leading-[100%] ">
              Web3 Innovations
            </h1>
            <p className="text-white font-martian-mono text-sm max-[600px]:text-xs leading-[150%] max-w-[592px]">
              The bridge from proven skills to new frontiers
            </p>
            <div className="mt-4">
              <Image
                width={24}
                height={40}
                src="/arrows/arrowDown.svg"
                alt="Arrow down"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      <ServicesSlider />

      <HowItWorksSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
