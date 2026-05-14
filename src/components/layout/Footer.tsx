import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Footer() {
  const tNav = useTranslations('Navigation');
  const tFoot = useTranslations('Footer');
  
  return (
    <footer className="bg-wiser-dark-teal text-wiser-sand py-16 border-t border-wiser-sand/10">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-start">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/assets/wiser-logo.webp"
                alt="Wiser Construction"
                width="700"
                height="350"
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </Link>
            <p className="opacity-80 text-sm font-light leading-relaxed">
              {tFoot('description')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-16 md:gap-24">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="font-bold text-wiser-gold tracking-widest uppercase text-xs mb-2">
                {tFoot('quickLinks')}
              </p>
              <Link href="/about" className="hover:text-white transition-colors text-sm font-light">{tNav('about')}</Link>
              <Link href="/projects" className="hover:text-white transition-colors text-sm font-light">{tNav('projects')}</Link>
              <Link href="/services" className="hover:text-white transition-colors text-sm font-light">{tNav('services')}</Link>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="font-bold text-wiser-gold tracking-widest uppercase text-xs mb-2">
                {tFoot('contactUs')}
              </p>
              <div className="flex flex-col items-center md:items-start gap-1 [unicode-bidi:isolate]">
                <a
                  href="mailto:info@wiser-contracting.com"
                  className="inline-block text-left hover:text-white transition-colors text-sm font-light"
                >
                  info@wiser-contracting.com
                </a>
                <a
                  href="tel:+201019191208"
                  dir="ltr"
                  className="inline-block text-left hover:text-white transition-colors text-sm font-light [unicode-bidi:isolate]"
                >
                  +20 10 19191208
                </a>
                <a
                  href="tel:+201090383000"
                  dir="ltr"
                  className="inline-block text-left hover:text-white transition-colors text-sm font-light [unicode-bidi:isolate]"
                >
                  +20 10 90380003
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="font-bold text-wiser-gold tracking-widest uppercase text-xs mb-2">
                {tFoot('social')}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100063706459193"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-wiser-sand/30 text-xs font-semibold hover:border-white hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.4v8h3.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/wiser.eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-wiser-sand/30 text-xs font-semibold hover:border-white hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.9 1.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@wiser2017"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-wiser-sand/30 text-xs font-semibold hover:border-white hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M15.8 3c.3 1.6 1.3 3 2.8 3.8.8.4 1.7.6 2.4.6v2.9c-1.3 0-2.7-.4-3.9-1.1v6.2a6 6 0 1 1-6-6c.2 0 .5 0 .7.1v3c-.2-.1-.5-.2-.7-.2a3 3 0 1 0 3 3V3h1.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-wiser-sand/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light opacity-60">
          <p>&copy; {new Date().getFullYear()}{tFoot('copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{tFoot('privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{tFoot('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
