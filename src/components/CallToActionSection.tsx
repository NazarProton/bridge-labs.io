import Link from 'next/link';
import GlowEffect from './GlowEffect';

export default function CallToActionSection() {
  return (
    <section className="w-full bg-primary pt-48 pb-24">
      <div className="w-full max-w-[1510px] mx-auto px-8 flex flex-col items-center">
        <h2 className="text-white text-5xl max-[600px]:text-3xl font-inter font-semibold leading-[100%] text-center mb-8 uppercase ">
          Ready to Get <br />
          Started?
        </h2>

        <p className="text-white font-martian-mono text-base leading-[150%] text-center mb-24">
          Join the marketplace connecting Web3 advisors
          <br /> with projects that need them
        </p>

        <div className="flex items-center overflow-hidden">
          <Link href="/work/hire">
            <GlowEffect
              className="rounded-l-2xl hover:z-20 relative"
              glowSize="small"
            >
              <button className="group flex items-center hover:z-10 justify-center px-6 py-4 bg-primary text-white hover:text-gray-300 cursor-pointer transition-colors rounded-l-2xl border border-white/20 border-r-0 relative">
                <span className="text-white font-martian-mono text-sm transition-transform group-hover:scale-95">
                  Find expert
                </span>
              </button>
            </GlowEffect>
          </Link>

          <Link href="/work/find-job">
            <GlowEffect
              className="rounded-r-2xl hover:z-20 -ml-px"
              glowSize="small"
            >
              <button className="group flex items-center hover:z-10 justify-center px-6 py-4 bg-primary text-white hover:text-gray-300 cursor-pointer transition-colors rounded-r-2xl border border-white/20 border-l-0 relative">
                <span className="text-white font-martian-mono text-sm transition-transform group-hover:scale-95">
                  Find project
                </span>
              </button>
            </GlowEffect>
          </Link>
        </div>
      </div>
    </section>
  );
}
