import imgSvg from '../assets/figma-arrow-1.svg';
import { useRef } from 'react';
import type { CSSProperties } from 'react';

function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const baseStyle = {
    '--mx': '50%',
    '--my': '50%',
    '--spot-opacity': 0,
  } as CSSProperties;

  const setPos = (clientX: number, clientY: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    sectionRef.current.style.setProperty('--mx', `${x}px`);
    sectionRef.current.style.setProperty('--my', `${y}px`);
    sectionRef.current.style.setProperty('--spot-opacity', '1');
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-spot relative h-screen w-full overflow-hidden bg-[#020617]"
      style={baseStyle}
      onPointerMove={(event) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() =>
          setPos(event.clientX, event.clientY),
        );
      }}
      onPointerLeave={() => {
        if (!sectionRef.current) return;
        sectionRef.current.style.setProperty('--spot-opacity', '0');
      }}
    >
      <div className="absolute inset-0">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="grid-spot pointer-events-none absolute inset-0" />
      </div>
      <div className="hero-content relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-[16px] text-center">
        <div className="hero-reveal hero-reveal-1 mb-[24px] flex items-center gap-[8px] rounded-[9999px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-[13px] py-[5px]">
          <div className="size-[6px] rounded-[9999px] bg-[#38bdf8]" />
          <div className="text-[12px] font-medium tracking-[0.3px] text-[#cbd5e1]">
            <p className="leading-[16px] whitespace-pre-wrap">
              Enterprise Grade Web3 Infrastructure
            </p>
          </div>
        </div>
        <div className="mb-[20px] w-full flex flex-col items-center">
          <p
            className="hero-reveal hero-reveal-2 hero-title hero-title-line bg-clip-text text-[36px] font-semibold leading-[40px] tracking-[-1.8px] whitespace-pre-wrap lg:text-[96px] lg:leading-[96px] lg:tracking-[-4.8px]"
            style={{
              backgroundImage:
                'linear-gradient(171.2312504379629deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bridging Web2
          </p>
          <div className="hero-reveal hero-reveal-3 flex items-center w-full justify-center gap-[6px] sm:gap-[12px]">
            <p
              className="hero-title hero-title-line bg-clip-text text-[36px] font-semibold leading-[40px] tracking-[-1.8px] whitespace-pre-wrap lg:text-[96px] lg:leading-[96px] lg:tracking-[-4.8px]"
              style={{
                backgroundImage:
                  'linear-gradient(151.7634474011919deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {`and `}
            </p>
            <div className="hero-title text-[36px] font-bold italic text-white tracking-[-1.8px] lg:text-[96px] lg:tracking-[-4.8px]">
              <p className="hero-title-line leading-[40px] whitespace-pre-wrap lg:leading-[96px]">
                Web3.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-subtitle mb-[32px] flex max-w-[720px] flex-col items-center text-[16px] font-normal text-[#94a3b8]">
          <p className="hero-reveal hero-reveal-5 hero-subtitle-line leading-[24px] whitespace-pre-wrap">
            We help real companies tokenize proven businesses and enable
            experience
          </p>
          <p className="hero-reveal hero-reveal-6 hero-subtitle-line leading-[24px] whitespace-pre-wrap">
            Web2 operators to succeed in Web3. Structure, compliance, and
            strategy first
          </p>
        </div>
        <div className="hero-reveal hero-reveal-7 hero-ctas flex w-full flex-col items-center justify-center gap-[12px]">
          <a
            href="#services"
            className="hero-cta hero-cta-primary group flex w-full items-center justify-center gap-[8px] rounded-[9999px] bg-white/90 px-[26px] py-[13px] lg:px-[34px] lg:py-[17px]"
          >
            <div className="flex h-[20px] w-[129.327px] flex-col justify-center text-center text-[14px] font-semibold text-black">
              <p className="leading-[20px] whitespace-pre-wrap">
                Start the Transition
              </p>
            </div>
            <div className="size-[14px] transition-transform duration-200 group-hover:translate-x-[2px]">
              <img alt="" className="block size-full max-w-none" src={imgSvg} />
            </div>
          </a>
          <a
            href="#approach"
            className="hero-cta hero-cta-secondary flex w-full items-center justify-center rounded-[9999px] border border-solid border-[rgba(255,255,255,0.2)] px-[26px] py-[13px] lg:px-[34px] lg:py-[17px]"
          >
            <div className="flex h-[20px] w-[89.724px] flex-col justify-center text-center text-[14px] font-semibold text-white">
              <p className="leading-[20px] whitespace-pre-wrap">How it Works</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
