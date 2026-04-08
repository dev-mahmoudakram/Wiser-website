import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // We will intercept /admin routes here for authentication later.
  // For now, let's just let next-intl handle localization.
  
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(/admin.*)?$`,
    'i'
  );

  const isApi = req.nextUrl.pathname.startsWith('/api');
  const isAdmin = req.nextUrl.pathname.startsWith('/admin') ||
    routing.locales.some(locale => req.nextUrl.pathname.startsWith(`/${locale}/admin`));
  
  if (isApi) {
    return NextResponse.next();
  }

  // Handle locale routing for all other requests
  return intlMiddleware(req);
}

export const config = {
  // Mathcher ignores _next, api, public files, etc
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
