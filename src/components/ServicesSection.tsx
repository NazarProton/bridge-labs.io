import { services } from './data';

function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full border-t border-solid border-[rgba(255,255,255,0.05)] bg-[rgba(2,6,23,0.3)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[16px] pb-[96px] pt-[96px] min-[600px]:px-[24px] min-[800px]:pb-[128px] min-[800px]:pt-[129px] min-[1024px]:px-[80px]">
        <div className="flex w-full flex-col items-start gap-[48px] md:gap-[80px]">
          <div className="flex w-full flex-col items-start justify-between gap-[24px] lg:flex-row lg:items-end">
            <div className="flex flex-col items-start gap-[16px]">
              <div className="flex h-[16px] w-[109.22px] flex-col justify-center text-[12px] uppercase tracking-[1.2px] text-[#38bdf8]">
                <p className="leading-[16px] whitespace-pre-wrap">
                  Our Expertise
                </p>
              </div>
              <div className="flex flex-col justify-center text-[36px] font-semibold leading-[40px] tracking-[-1.8px] text-white sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.4px]">
                <p className="mb-0">Three Pillars</p>
                <p>of Transition</p>
              </div>
            </div>
            <div className="flex max-w-[384px] flex-col items-start">
              <div className="flex flex-col justify-center text-[14px] font-normal leading-[20px] text-[#94a3b8]">
                <p className="mb-0">
                  Connecting real-world expertise with on-chain
                </p>
                <p className="mb-0">
                  infrastructure through a disciplined, three-pronged
                </p>
                <p>approach.</p>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-[16px] min-[800px]:grid-cols-3 min-[800px]:gap-[24px]">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col items-start gap-[20px] overflow-visible rounded-[16px] border border-solid border-[rgba(255,255,255,0.05)] bg-[#0b101e] p-[32px] transition-colors duration-200 hover:border-[#38bdf8] hover:bg-[#0f172a]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[16px] shadow-[0_0_0_1px_rgba(56,189,248,0.0)] transition-[box-shadow] duration-200 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]" />
                <div className="pointer-events-none absolute -inset-[40px] rounded-[24px] bg-[#38bdf8]/20 opacity-0 blur-[60px] transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative z-10 flex size-[48px] items-center justify-center rounded-[8px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-px transition-colors duration-200 group-hover:border-[rgba(56,189,248,0.6)] group-hover:bg-[rgba(56,189,248,0.08)]">
                  <div className="size-[24px]">
                    <img
                      alt=""
                      className="block size-full max-w-none transition-[filter] duration-200 [filter:brightness(0)_saturate(100%)_invert(96%)_sepia(6%)_saturate(382%)_hue-rotate(185deg)_brightness(96%)_contrast(92%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(67%)_sepia(42%)_saturate(538%)_hue-rotate(156deg)_brightness(94%)_contrast(95%)]"
                      src={service.icon}
                    />
                  </div>
                </div>
                <div className="relative z-10 flex flex-col items-start pt-[4px]">
                  <div className="flex h-[28px] flex-col justify-center text-[20px] font-medium text-white">
                    <p className="leading-[28px] whitespace-pre-wrap">
                      {service.title}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col justify-center text-[14px] font-normal leading-[22.75px] text-[#94a3b8]">
                  {service.body.map((line) => (
                    <p key={line} className="mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
