import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum, polygon } from '@reown/appkit/networks';

// Get projectId from https://cloud.reown.com
export const projectId = '196b8aef340fbc0780d3b148415dea58';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet, arbitrum, polygon];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
