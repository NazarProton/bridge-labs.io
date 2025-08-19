'use client';

import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';
import GlowEffect from './GlowEffect';

export default function ConnectWalletButton() {
  const { open } = useAppKit();
  const { isConnected, address } = useAccount();

  const handleClick = () => {
    open();
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <GlowEffect className="w-[186px] h-14 rounded-[18px]" intensity="strong">
      <div className="w-full h-full">
        <button
          onClick={handleClick}
          className="w-full h-full flex items-center justify-center bg-primary border border-white/15 backdrop-blur-2xl rounded-2xl cursor-pointer"
        >
          <span className="text-white group-hover:scale-95 transition-transform duration-300 font-normal text-center font-martian-mono text-sm leading-[150%] w-[138px] h-[21px]">
            {isConnected ? formatAddress(address!) : 'Connect Wallet'}
          </span>
        </button>
      </div>
    </GlowEffect>
  );
}
