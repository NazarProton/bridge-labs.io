'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireSlugError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    router.push('/work/hire');
  }, [router]);

  return null;
}
