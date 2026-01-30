import imgSvg1 from '../assets/figma-icon-1.svg';

function AboutSection() {
  return (
    <section id="approach" className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[48px] px-[16px] py-[96px] min-[600px]:px-[24px] min-[800px]:flex-row min-[800px]:gap-[80px] min-[800px]:py-[120px] min-[1024px]:px-[80px]">
        <div className="flex w-full flex-col items-start gap-[32px] min-[800px]:flex-[1_1_0%]">
          <div className="flex w-full flex-col items-start">
            <div className="flex w-full flex-col justify-center whitespace-pre-wrap text-[36px] font-semibold leading-[40px] tracking-[-1.8px] text-white sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.4px]">
              <p className="mb-0">Tokenize what works.</p>
              <p className="text-[#64748b]">Not just ideas.</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[24px] pb-[16px]">
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full max-w-[560px] flex-col justify-center whitespace-pre-wrap text-[15px] font-normal leading-[24px] text-[#94a3b8] sm:text-[16px] sm:leading-[26px]">
                <p className="mb-0">
                  Bridge Labs helps traditional companies and professionals move
                  into
                </p>
                <p className="mb-0">
                  Web3 with structure and execution. We focus on tokenising real
                </p>
                <p>
                  businesses and translating Web2 expertise into Web3-native
                  systems.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full max-w-[560px] flex-col justify-center whitespace-pre-wrap text-[15px] font-normal leading-[24px] text-[#94a3b8] sm:text-[16px] sm:leading-[26px]">
                <p className="mb-0">{`We don't tokenize speculation. We create asset-backed, compliant, and`}</p>
                <p className="mb-0">
                  revenue-generating models that align incentives between
                  companies,
                </p>
                <p>contributors, and token holders.</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[24px] border-t border-solid border-[rgba(255,255,255,0.1)] pt-[24px] sm:flex-row sm:gap-[32px] sm:pt-[33px]">
            <div className="flex-1">
              <div className="flex w-full flex-col items-start gap-[3.5px]">
                <div className="flex w-full flex-col items-start">
                  <div className="flex flex-col justify-center text-[36px] font-semibold tracking-[-0.9px] text-[#38bdf8]">
                    <p className="leading-[40px] whitespace-pre-wrap">$500M+</p>
                  </div>
                </div>
                <div className="flex h-[16px] flex-col justify-center text-[12px] font-normal uppercase tracking-[1.2px] text-[#64748b]">
                  <p className="leading-[16px] whitespace-pre-wrap">
                    Assets Tokenized
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex w-full flex-col items-start gap-[3.5px]">
                <div className="flex w-full flex-col items-start">
                  <div className="flex flex-col justify-center text-[36px] font-semibold tracking-[-0.9px] text-[#38bdf8]">
                    <p className="leading-[40px] whitespace-pre-wrap">100%</p>
                  </div>
                </div>
                <div className="flex h-[16px] flex-col justify-center text-[12px] font-normal uppercase tracking-[1.2px] text-[#64748b]">
                  <p className="leading-[16px] whitespace-pre-wrap">
                    Regulatory Compliant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full min-h-[320px] overflow-clip rounded-[16px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(15,23,42,0.5)] sm:min-h-[380px] min-[800px]:flex-[1_1_0%] min-[800px]:min-h-[420px] lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[rgba(2,6,23,0.5)] via-1/2 to-[rgba(2,6,23,0)]" />
          <div className="absolute bottom-[32px] left-[32px] right-[32px] flex flex-col items-start gap-[16px]">
            <div className="flex w-full items-center gap-[12px]">
              <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[9999px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-px backdrop-blur-[6px]">
                <div className="size-[16px]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={imgSvg1}
                  />
                </div>
              </div>
              <div className="h-px min-h-px min-w-px flex-[1_0_0] bg-[rgba(255,255,255,0.1)]" />
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex w-[319.29px] flex-col justify-center whitespace-pre-wrap text-[14px] text-[#38bdf8]">
                <p className="mb-0">
                  <span className="leading-[20px]">function</span>
                  <span className="leading-[20px] text-[#cbd5e1]">{` transition(asset) {`}</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[20px] text-[#cbd5e1]">{`  `}</span>
                  <span className="leading-[20px] text-[#c084fc]">return</span>
                  <span className="leading-[20px] text-[#cbd5e1]">{` tokenize(asset, "compliant");`}</span>
                </p>
                <p className="leading-[20px] text-[#cbd5e1]">{`}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
