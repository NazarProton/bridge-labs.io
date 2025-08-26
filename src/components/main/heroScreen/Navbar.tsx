'use client';

import { useState } from 'react';
import AnimatedLogo from '../../global/AnimatedLogo';
import ConnectWalletButton from './ConnectWalletButton';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative py-6">
      <div className="max-w-[1510px] px-8 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <AnimatedLogo />
        </div>

        {/* Desktop menu */}
        <div className="hidden min-[600px]:flex items-center gap-4">
          <Link
            href="/work/find-job"
            className="group flex flex-col items-center justify-center h-10 cursor-pointer"
          >
            <div className="px-6 py-1 text-white text-sm font-medium transition-all duration-300 group-hover:-translate-y-1 translate-y-1">
              Jobs
            </div>
            <div className="min-w-1 min-h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
          </Link>

          <ConnectWalletButton />
        </div>

        {/* Mobile menu button */}
        <button
          className="max-[599px]:flex hidden flex-col items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`max-[599px]:block hidden absolute top-full left-6 right-6 bg-white/30 backdrop-blur-2xl border border-white/20 rounded-2xl transition-all duration-300 z-50 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-[1510px] mx-auto p-6 flex flex-col gap-4">
          <Link
            href="/work/hire"
            className="group flex flex-col items-center justify-center h-10 cursor-pointer"
          >
            <div className="px-6 py-1 text-white text-sm font-medium transition-all duration-300 group-hover:-translate-y-1 translate-y-1">
              Find Expert
            </div>
            <div className="min-w-1 min-h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
          </Link>

          <Link
            href="/work/find-job"
            className="group flex flex-col items-center justify-center h-10 cursor-pointer"
          >
            <div className="px-6 py-1 text-white text-sm font-medium transition-all duration-300 group-hover:-translate-y-1 translate-y-1">
              Find Project
            </div>
            <div className="min-w-1 min-h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
          </Link>

          <div className="w-full">
            <ConnectWalletButton fullWidth={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}
