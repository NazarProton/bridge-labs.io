'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FindJobError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
}
