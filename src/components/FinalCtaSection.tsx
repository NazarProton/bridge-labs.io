function FinalCtaSection() {
  return (
    <section id="contact" className="w-full bg-[#020617]">
      <div className="relative w-full overflow-clip">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(56,189,248,0)] to-[rgba(56,189,248,0.05)]" />
        <div className="mx-auto flex w-full max-w-[1440px] justify-center px-[16px] py-[96px] min-[600px]:px-[24px] min-[800px]:py-[128px] min-[1024px]:px-[80px]">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-[16px] sm:gap-[24px]">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-col justify-center text-center text-[36px] font-semibold tracking-[-1.8px] text-white sm:text-[48px] sm:tracking-[-2.4px] md:text-[60px] md:tracking-[-3px]">
                <p className="leading-[40px] whitespace-pre-wrap sm:leading-[52px] md:leading-[60px]">
                  Ready to make the leap?
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center pb-[24px]">
              <div className="flex flex-col justify-center text-center text-[16px] font-normal text-[#94a3b8] sm:text-[18px]">
                <p className="leading-[24px] whitespace-pre-wrap sm:leading-[28px]">
                  Bridge your business to Web3 with the right partners.
                </p>
              </div>
            </div>
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('top')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="flex items-center justify-center rounded-[9999px] bg-[#38bdf8] px-[40px] py-[20px]"
            >
              <div className="flex h-[24px] flex-col justify-center text-center text-[16px] font-semibold text-black">
                <p className="leading-[24px] whitespace-nowrap">Get Started</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
