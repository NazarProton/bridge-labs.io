import Marquee from 'react-fast-marquee';
import { socialProof } from './data';

function SocialProof() {
  return (
    <section className="flex w-full items-center overflow-hidden border-y border-solid border-[rgba(255,255,255,0.05)] bg-[#020617]">
      <div className="w-full">
        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-white mix-blend-saturation"
          />
          <div className="relative flex w-full flex-col items-start overflow-hidden">
            <Marquee className="w-full" gradient={false} speed={40} autoFill>
              {[...socialProof, ...socialProof].map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="mx-[12px] flex shrink-0"
                >
                  <div className="flex h-[28px] flex-col justify-center text-[18px] font-semibold tracking-[1.8px] text-[rgba(255,255,255,0.8)] sm:text-[20px] sm:tracking-[2px]">
                    <p className="leading-[28px] whitespace-nowrap">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
