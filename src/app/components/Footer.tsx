import Image from 'next/image';
import Link from 'next/link';
import AnimatedLogo from './main/heroScreen/AnimatedLogo';

const socialLinks = [
  {
    href: "#",
    icon: "/socials/x.svg",
    alt: "X (Twitter)"
  },
  {
    href: "https://www.linkedin.com/company/bridge-labsco/",
    icon: "/socials/linked.svg",
    alt: "LinkedIn"
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary pb-8">
      <div className="w-full max-w-[1510px] mx-auto px-8">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl py-8 px-8 flex max-[500px]:flex-col-reverse max-[500px]:items-center max-[500px]:gap-12 items-center justify-between">
            <AnimatedLogo />
          

          <div className="flex items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-7 h-7 flex items-center justify-center transition-transform hover:scale-95"
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
