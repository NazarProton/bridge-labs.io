import { whyCards } from './data';

function WhyBridgeLabsSection() {
  return (
    <section className="w-full border-y border-solid border-[rgba(255,255,255,0.05)] bg-[#050505]">
      <div className="mx-auto w-full max-w-[1440px] px-[16px] py-[96px] min-[600px]:px-[24px] min-[800px]:py-[129px] min-[1024px]:px-[80px]">
        <div className="mx-auto w-full max-w-[896px]">
          <div className="flex flex-col items-center gap-[32px] md:gap-[48px]">
            <div className="flex flex-col justify-center text-center text-[24px] font-semibold tracking-[-1.2px] text-white sm:text-[30px] sm:tracking-[-1.5px]">
              <p className="leading-[36px] whitespace-pre-wrap">
                Why Bridge Labs?
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-[16px] sm:gap-[24px] md:grid-cols-2 md:gap-[32px]">
              {whyCards.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-[8px] rounded-[12px] border border-solid border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] p-[25px]"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex h-[24px] flex-col justify-center text-[16px] font-medium text-white">
                      <p className="leading-[24px] whitespace-pre-wrap">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col justify-center text-[14px] font-normal leading-[20px] text-[#94a3b8]">
                      {item.body.map((line) => (
                        <p key={line} className="mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBridgeLabsSection;
