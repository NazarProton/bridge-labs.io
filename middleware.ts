import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/work') {
    return NextResponse.redirect(new URL('/work/find-job', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/work',
};
