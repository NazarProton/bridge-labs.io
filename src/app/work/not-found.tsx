'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WorkNotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/work/find-job');
  }, [router]);

  return null;
}
