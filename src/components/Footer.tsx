import {
  footerCompanyLinks,
  footerConnectLinks,
  footerLegalLinks,
} from './data';

function Footer() {
  return (
    <footer
      id="footer"
      className="footer-site w-full border-t border-solid border-[rgba(255,255,255,0.1)] bg-[#020617]"
    >
      <div className="footer-container mx-auto w-full max-w-[1440px] px-[16px] pb-[40px] pt-[81px] min-[600px]:px-[24px] min-[1024px]:px-[80px]">
        <div className="footer-content flex w-full flex-col items-start gap-[80px]">
          <div className="footer-top flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-[24px]">
              <div className="flex w-full items-center gap-[8px]">
                <div className="size-[8px] rounded-[2px] bg-[#38bdf8]" />
                <div className="flex h-[32px] flex-col justify-center text-[24px] font-semibold tracking-[-0.6px] text-white">
                  <p className="leading-[32px] whitespace-pre-wrap">
                    BRIDGE LABS
                  </p>
                </div>
              </div>
              <div className="flex w-full max-w-[320px] flex-col items-start">
                <div className="flex flex-col justify-center text-[14px] font-normal leading-[20px] text-[#64748b]">
                  <p className="mb-0">
                    The bridge between traditional business and the
                  </p>
                  <p>decentralized future.</p>
                </div>
              </div>
            </div>
            <div className="footer-links flex items-start gap-[64px]">
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <div className="flex w-full flex-col items-start">
                  <div className="flex h-[20px] flex-col justify-center text-[14px] font-medium text-white">
                    <p className="leading-[20px] whitespace-pre-wrap">
                      Company
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[12px]">
                  {footerCompanyLinks.map((label) => (
                    <div
                      key={label}
                      className="flex w-full flex-col items-start"
                    >
                      <div className="flex w-full items-start">
                        <a
                          href={
                            label === 'About'
                              ? '#approach'
                              : label === 'Services'
                                ? '#services'
                                : '#ecosystem'
                          }
                          className="flex flex-col justify-center text-[14px] font-normal text-[#64748b] transition-colors duration-200 hover:text-white"
                        >
                          <p className="leading-[20px] whitespace-pre-wrap">
                            {label}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <div className="flex w-full flex-col items-start">
                  <div className="flex h-[20px] flex-col justify-center text-[14px] font-medium text-white">
                    <p className="leading-[20px] whitespace-pre-wrap">
                      Connect
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[12px]">
                  {footerConnectLinks.map((label) => (
                    <div
                      key={label}
                      className="flex w-full flex-col items-start"
                    >
                      <div className="flex w-full items-start">
                        <a
                          href="#top"
                          className="flex flex-col justify-center text-[14px] font-normal text-[#64748b] transition-colors duration-200 hover:text-white"
                        >
                          <p className="leading-[20px] whitespace-pre-wrap">
                            {label}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom flex w-full items-center justify-between border-t border-solid border-[rgba(255,255,255,0.05)] pt-[33px]">
            <div className="flex flex-col items-start">
              <div className="flex flex-col justify-center text-[12px] font-normal text-[#475569]">
                <p className="leading-[16px] whitespace-pre-wrap">
                  © 2026 Bridge Labs. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[24px]">
              {footerLegalLinks.map((label) => (
                <div
                  key={label}
                  className="flex flex-col items-start self-stretch"
                >
                  <a
                    href="#top"
                    className="flex h-[16px] flex-col justify-center text-[12px] font-normal text-[#475569] transition-colors duration-200 hover:text-white"
                  >
                    <p className="leading-[16px] whitespace-pre-wrap">
                      {label}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
