import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ViewTransitions } from 'next-view-transitions';
import { ReactLenis } from '@/components/motion/LenisContext';
import HtmlAttributes from '@/components/layout/HtmlAttributes';

import Navbar from '@/components/layout/Navbar';
import PreFooterCTA from '@/components/layout/PreFooterCTA';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppBubble from '@/components/layout/WhatsAppBubble';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_URL = 'https://wiser-eg.com';

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
      canonical: `${SITE_URL}/${locale}`,
      languages: { ar: `${SITE_URL}/ar`, en: `${SITE_URL}/en` },
    },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/apple-icon.png' }],
    },
    openGraph: { locale: isAr ? 'ar_SA' : 'en_US', type: 'website' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const activeFont = isAr ? 'font-arabic' : 'font-english';

  return (
    <ViewTransitions>
      <HtmlAttributes locale={locale} dir={dir} activeFont={activeFont} />
      <ReactLenis>
        <ScrollToTop />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <WhatsAppBubble />
            <main className="flex-grow relative">
              {children}
              <PreFooterCTA />
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </ReactLenis>
    </ViewTransitions>
  );
}
