'use client';

import Navbar from '../../components/main/heroScreen/Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlowEffect from '../../components/GlowEffect';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />

      {/* Work Sub Navigation */}
      {!pathname.includes('/find-job/') && (
        <div className="w-full bg-primary py-6">
          <div className="max-w-[1510px] mx-auto px-8">
            <div className="flex items-center justify-center">
              <GlowEffect
                className="rounded-2xl"
                intensity="strong"
                glowSize="small"
              >
                <div className="relative bg-primary border border-white/15 backdrop-blur-2xl rounded-2xl p-1">
                  {/* Sliding Background */}
                  <div
                    className={`absolute top-0 w-[166px] h-full bg-black rounded-2xl transition-all duration-300 ease-in-out ${
                      pathname === '/work/find-job' ? 'left-0' : 'left-[173px]'
                    }`}
                  />

                  <Link
                    href="/work/find-job"
                    className="relative z-10 hover:scale-95 inline-flex items-center justify-center px-6 py-4 w-[166px] h-[56px] text-white font-martian-mono text-sm transition-all duration-300 cursor-pointer"
                  >
                    Find project
                  </Link>
                  <Link
                    href="/work/hire"
                    className="relative z-10 hover:scale-95 inline-flex items-center justify-center px-6 py-4 w-[166px] h-[56px] text-white font-martian-mono text-sm transition-all duration-300 cursor-pointer"
                  >
                    Find expert
                  </Link>
                </div>
              </GlowEffect>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
