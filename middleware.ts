import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const protectedRoutes = ["/cars", "/bookings", '/dashboard'];
const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const sessionCookie = getSessionCookie(request);

  const res = NextResponse.next();
  const pathname = nextUrl.pathname;

  const isLoggedIn = !!sessionCookie;
  const isOnProtectedRoute = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(`/dashboard/`) || pathname.startsWith(`/cars/`)
  );

  const isOnAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  
  if (isOnProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isOnAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|images|icons|fonts).*)']
}
