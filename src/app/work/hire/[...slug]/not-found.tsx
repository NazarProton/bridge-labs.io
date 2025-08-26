'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireSlugNotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/work/hire');
  }, [router]);

  return null;
}
