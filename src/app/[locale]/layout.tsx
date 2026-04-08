import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Gloock, Montserrat, Tajawal } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { ReactLenis } from '@/components/motion/LenisContext'; // We'll create this wrapper for client component
import '@/styles/globals.scss';

// English fonts
const gloock = Gloock({ weight: '400', subsets: ['latin'], variable: '--font-gloock' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

// Arabic font (using Tajawal as fallback for Muslimah)
const tajawal = Tajawal({ 
  weight: ['400', '700'], 
  subsets: ['arabic'], 
  variable: '--font-muslimah' // Reusing the same variable name to make swapping easy later
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: {
      template: isAr ? '%s | وايزر للمقاولات' : '%s | Wiser Contracting',
      default: isAr ? 'وايزر للمقاولات' : 'Wiser Contracting Company',
    },
    description: isAr
      ? 'شركة وايزر للمقاولات - رواد في البناء والتصميم الداخلي'
      : 'Wiser Contracting Company - Leaders in construction and interior design',
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: '/ar', en: '/en' },
    },
    openGraph: { locale: isAr ? 'ar_SA' : 'en_US', type: 'website' },
  };
}

import Navbar from '@/components/layout/Navbar';
import PreFooterCTA from '@/components/layout/PreFooterCTA';
import Footer from '@/components/layout/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);

  const messages = await getMessages();
  const isAr = locale === 'ar';
  const direction = isAr ? 'rtl' : 'ltr';

  // Dynamic font classes based on locale
  const fontClasses = isAr
    ? `${tajawal.variable} font-arabic`
    : `${gloock.variable} ${montserrat.variable} font-english`;

  return (
    <html lang={locale} dir={direction} className={`${fontClasses} relative`} style={{ position: 'relative' }} suppressHydrationWarning>
      <body className="relative" style={{ position: 'relative' }}>
        <ViewTransitions>
          <ReactLenis>
            <NextIntlClientProvider messages={messages} locale={locale}>
              <Navbar />
              <div className="relative flex flex-col min-h-screen overflow-x-hidden">
                <main className="flex-grow relative">
                  {children}
                  <PreFooterCTA />
                </main>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ReactLenis>
        </ViewTransitions>
      </body>
    </html>
  );
}
