import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const { userId } = getAuth(req);

  // List of public routes that do not require authentication
  const publicRoutes = ['/', '/sign-in', '/sign-up', '/_next', '/api', '/favicon.ico'];

  // Check if the current route is public
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  // If the route is not public and the user is not authenticated, redirect to sign-in
  if (!isPublicRoute && !userId) {
    const signInUrl = new URL('/sign-in', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Allow the request to proceed if authenticated or accessing a public route
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
