import type { Metadata } from 'next';
import { Martian_Mono, Inter } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import ContextProvider from '@/context';

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'bridge-labs.io',
  description: 'Bridging protocol for the future',
  icons: {
    icon: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get('cookie');

  return (
    <html lang="en">
      <body className={`${inter.variable} ${martianMono.variable} antialiased`}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
