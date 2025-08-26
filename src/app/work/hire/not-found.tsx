'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireNotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/work/hire');
  }, [router]);

  return null;
}
