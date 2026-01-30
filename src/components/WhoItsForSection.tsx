import imgImage from '../assets/figma-image-1.png';
import imgImage1 from '../assets/figma-image-2.png';
import imgSvg5 from '../assets/figma-check.svg';
import imgSvg6 from '../assets/figma-arrow-2.svg';
import { advisorItems, companyItems } from './data';

function WhoItsForSection() {
  return (
    <section id="ecosystem" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-[16px] pb-[96px] pt-[96px] min-[600px]:px-[24px] min-[800px]:pb-[128px] min-[800px]:pt-[128px] min-[1024px]:px-[80px]">
        <div className="flex w-full flex-col items-start gap-[48px] md:gap-[80px]">
          <div className="flex w-full flex-col items-start gap-[24px]">
            <div className="flex w-full flex-col justify-center text-[36px] font-semibold tracking-[-1.8px] text-white sm:text-[48px] sm:tracking-[-2.4px]">
              <p className="leading-[48px] whitespace-pre-wrap">{`Who It's For`}</p>
            </div>
            <div className="h-px w-full shrink-0 bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]" />
          </div>
          <div className="flex w-full flex-col items-start gap-[48px]">
            <div className="flex w-full shrink-0 flex-col items-start overflow-clip rounded-[16px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#0b101e] p-px">
              <div className="flex w-full flex-col items-start min-[800px]:flex-row-reverse min-[800px]:items-stretch">
                <div className="flex w-full flex-col items-start justify-center p-[24px] sm:p-[48px]">
                  <div className="flex w-full flex-col items-start pb-[16px]">
                    <div className="flex w-[173.1px] flex-col justify-center text-[24px] font-medium text-white">
                      <p className="leading-[32px] whitespace-pre-wrap">
                        For Companies
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start pb-[32px]">
                    <div className="flex w-full flex-col items-start gap-[16px]">
                      {companyItems.map((label) => (
                        <div
                          key={label}
                          className="flex w-full items-start gap-[12px]"
                        >
                          <div className="flex w-[14px] shrink-0 flex-col items-start pt-[2px]">
                            <div className="size-[14px]">
                              <img
                                alt=""
                                className="block size-full max-w-none"
                                src={imgSvg5}
                              />
                            </div>
                          </div>
                          <div className="flex h-[20px] flex-col justify-center text-[14px] font-normal text-[#94a3b8]">
                            <p className="leading-[20px] whitespace-pre-wrap">
                              {label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="group flex w-full items-center gap-[8px]"
                  >
                    <div className="flex h-[20px] w-[159.36px] flex-col justify-center text-[14px] font-semibold text-[#38bdf8]">
                      <p className="leading-[20px] whitespace-pre-wrap">
                        Tokenize your business
                      </p>
                    </div>
                    <div className="size-[14px] transition-transform duration-200 group-hover:translate-x-[2px]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        src={imgSvg6}
                      />
                    </div>
                  </a>
                </div>
                <div className="relative flex w-full min-h-[220px] overflow-clip bg-[#0f172a] min-[800px]:h-auto min-[800px]:self-stretch">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(154.01957934362719deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 100%)',
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover mix-blend-overlay"
                    style={{
                      backgroundImage: `url('${imgImage}')`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-start overflow-clip rounded-[16px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#0b101e] p-px">
              <div className="relative isolate flex w-full flex-col items-start min-[800px]:flex-row-reverse min-[800px]:items-stretch">
                <div className="relative z-[2] flex w-full min-h-[220px] overflow-clip bg-[#0f172a] min-[800px]:h-auto min-[800px]:self-stretch">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(205.98042065637284deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 100%)',
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover mix-blend-overlay"
                    style={{
                      backgroundImage: `url('${imgImage1}')`,
                    }}
                  />
                </div>
                <div className="relative z-[1] flex w-full flex-col items-start justify-center p-[24px] sm:p-[48px]">
                  <div className="flex w-full flex-col items-start pb-[16px]">
                    <div className="flex w-[288.01px] flex-col justify-center text-[24px] font-medium text-white">
                      <p className="leading-[32px] whitespace-pre-wrap">{`For Advisors & Operators`}</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start pb-[32px]">
                    <div className="flex w-full flex-col items-start gap-[16px]">
                      {advisorItems.map((label) => (
                        <div
                          key={label}
                          className="flex w-full items-start gap-[12px]"
                        >
                          <div className="flex w-[14px] shrink-0 flex-col items-start pt-[2px]">
                            <div className="size-[14px]">
                              <img
                                alt=""
                                className="block size-full max-w-none"
                                src={imgSvg5}
                              />
                            </div>
                          </div>
                          <div className="flex h-[20px] flex-col justify-center text-[14px] font-normal text-[#94a3b8]">
                            <p className="leading-[20px] whitespace-pre-wrap">
                              {label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="group flex w-full items-center gap-[8px]"
                  >
                    <div className="flex h-[20px] w-[114.44px] flex-col justify-center text-[14px] font-semibold text-[#38bdf8]">
                      <p className="leading-[20px] whitespace-pre-wrap">
                        Join our network
                      </p>
                    </div>
                    <div className="size-[14px] transition-transform duration-200 group-hover:translate-x-[2px]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        src={imgSvg6}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoItsForSection;
