import React, { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';
import { Gloock, Montserrat, Tajawal } from 'next/font/google';
import '@/styles/globals.scss';

const gloock = Gloock({ weight: '400', subsets: ['latin'], variable: '--font-gloock' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const tajawal = Tajawal({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-muslimah',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const isAr = locale === 'ar';
  const direction = isAr ? 'rtl' : 'ltr';
  const activeFont = isAr ? 'font-arabic' : 'font-english';
  // All font variables are always present so HtmlAttributes can toggle between them
  const allFontVars = `${gloock.variable} ${montserrat.variable} ${tajawal.variable}`;

  return (
    <html lang={locale} dir={direction} className={`${allFontVars} ${activeFont} relative`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
