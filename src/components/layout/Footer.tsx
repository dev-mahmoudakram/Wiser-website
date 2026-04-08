import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/wiser-logo.png" 
                alt="Wiser Construction" 
                className="h-16 w-auto object-contain filter brightness-0 invert" 
              />
            </Link>
            <p className="opacity-80 text-sm font-light leading-relaxed">
              {tFoot('description')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-16 md:gap-24">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <h4 className="font-bold text-wiser-gold tracking-widest uppercase text-xs mb-2">
                {tFoot('quickLinks')}
              </h4>
              <Link href="/about" className="hover:text-white transition-colors text-sm font-light">{tNav('about')}</Link>
              <Link href="/projects" className="hover:text-white transition-colors text-sm font-light">{tNav('projects')}</Link>
              <Link href="/services" className="hover:text-white transition-colors text-sm font-light">{tNav('services')}</Link>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-start">
              <h4 className="font-bold text-wiser-gold tracking-widest uppercase text-xs mb-2">
                {tFoot('contactUs')}
              </h4>
              <a href="mailto:info@wiser-contracting.com" dir="ltr" className="hover:text-white transition-colors text-sm font-light">
                info@wiser-contracting.com
              </a>
              <a href="tel:01090246000" dir="ltr" className="hover:text-white transition-colors text-sm font-light mt-1">
                0109-0246-000
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-wiser-sand/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light opacity-60">
          <p>&copy; {new Date().getFullYear()}{tFoot('copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
