import { useState } from 'react';
import imgSvg7 from '../assets/figma-arrow-3.svg';
import { navLinks } from './data';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[80] w-full border-b border-solid border-[rgba(255,255,255,0.08)] bg-[rgba(2,6,23,0.6)] backdrop-blur-[18px]">
      <div className="mx-auto w-full max-w-[1440px] px-[16px] min-[600px]:px-[24px] min-[1024px]:px-[80px]">
        <div className="flex h-[80px] items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="size-[8px] rounded-[2px] bg-[#38bdf8]" />
            <div className="flex h-[28px] w-[124.89px] flex-col justify-center text-[20px] font-semibold tracking-[-0.5px] text-white">
              <p className="leading-[28px] whitespace-pre-wrap">BRIDGE LABS</p>
            </div>
          </div>
          <nav className="hidden items-center gap-[32px] md:flex">
            {navLinks.map((item) => (
              <div key={item.label} className="flex flex-col items-start">
                <a
                  href={item.href}
                  className="flex h-[20px] flex-col justify-center text-[14px] font-medium text-[#94a3b8] transition-colors duration-200 hover:text-white"
                >
                  <p className="leading-[20px] ">{item.label}</p>
                </a>
              </div>
            ))}
          </nav>
          <a
            href="#contact"
            className="group hidden items-center gap-[8px] rounded-[9999px] border border-solid border-[#1d4662] bg-[#0f1423] px-[21px] py-[9px] transition-colors duration-200 hover:border-[#2b5f86] hover:bg-[#122039] md:flex"
          >
            <div className="flex h-[16px] w-[95.91px] flex-col justify-center text-[12px] font-semibold tracking-[0.3px] text-white">
              <p className="leading-[16px] whitespace-pre-wrap">
                Partner With Us
              </p>
            </div>
            <div className="size-[12px] shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={imgSvg7}
              />
            </div>
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[70] flex items-center justify-center rounded-[10px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] p-[10px] text-white md:hidden"
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-[18px] bg-white transition-transform duration-200 ${
                  menuOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-[2px] w-[18px] bg-white transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-[2px] w-[18px] bg-white transition-transform duration-200 ${
                  menuOpen ? 'translate-y-[-6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
        {menuOpen ? (
          <div className="fixed left-0 right-0 top-[80px] z-[60] md:hidden">
            <div className="mx-auto w-full max-w-[1440px] px-[16px] min-[600px]:px-[24px] min-[1024px]:px-[80px]">
              <div className="flex flex-col gap-[16px] border-t border-solid border-[rgba(255,255,255,0.08)] bg-[#020617] py-[16px]">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[14px] font-medium text-[#cbd5e1]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-[8px] rounded-[9999px] border border-solid border-[#1d4662] bg-[#0f1423] px-[21px] py-[9px] transition-colors duration-200 hover:border-[#2b5f86] hover:bg-[#122039]"
                >
                  <div className="flex h-[16px] w-[95.91px] flex-col justify-center text-[12px] font-semibold tracking-[0.3px] text-white">
                    <p className="leading-[16px] whitespace-pre-wrap">
                      Partner With Us
                    </p>
                  </div>
                  <div className="size-[12px] shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]">
                    <img
                      alt=""
                      className="block size-full max-w-none"
                      src={imgSvg7}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
