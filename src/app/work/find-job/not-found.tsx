'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FindJobNotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/work/find-job');
  }, [router]);

  return null;
}
