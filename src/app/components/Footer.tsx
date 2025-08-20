import Image from 'next/image';
import AnimatedLogo from './main/heroScreen/AnimatedLogo';

export default function Footer() {
  return (
    <footer className="w-full bg-primary pb-8">
      <div className="w-full max-w-[1510px] mx-auto px-8">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl py-8 px-8 flex max-[500px]:flex-col-reverse max-[500px]:items-center max-[500px]:gap-12 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <AnimatedLogo />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-8">
            {/* Twitter/X */}
            <a
              href="#"
              className="w-7 h-7 flex items-center justify-center transition-transform hover:scale-95"
            >
              <Image
                src="/socials/x.svg"
                alt="X (Twitter)"
                width={28}
                height={28}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-7 h-7 flex items-center justify-center transition-transform hover:scale-95"
            >
              <Image
                src="/socials/linked.svg"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </a>

            {/* Discord */}
            <a
              href="#"
              className="w-7 h-7 flex items-center justify-center transition-transform hover:scale-95"
            >
              <Image
                src="/socials/discord.svg"
                alt="Discord"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
