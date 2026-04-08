import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/layout/PageHero';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contact');
  const nt = await getTranslations('Navigation');
  const isAr = locale === 'ar';

  const contactDetails = [
    {
      icon: <MapPin className="transition-colors" size={24} />,
      label: t('info.address'),
      value: t('info.addressValue'),
    },
    {
      icon: <Phone className="transition-colors" size={24} />,
      label: t('info.phone'),
      value: t('info.phoneValue'),
      href: 'tel:+96601090246000',
    },
    {
      icon: <Mail className="transition-colors" size={24} />,
      label: t('info.email'),
      value: t('info.emailValue'),
      href: 'mailto:info@wiser-contracting.com',
    },
    {
      icon: <Clock className="transition-colors" size={24} />,
      label: t('info.hours'),
      value: t('info.hoursValue'),
    },
  ];

  return (
    <div className="min-h-screen bg-wiser-off-white">
      <PageHero 
        title={t('title')}
        breadcrumbLabel={t('title')}
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
        locale={locale}
        isAr={isAr}
      />

      {/* Content Section */}
      <section className="relative z-20 -mt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Form Column */}
            <div className="lg:col-span-12 xl:col-span-7 h-full">
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-12 xl:col-span-5 h-full">
              <div className="h-full flex flex-col justify-around">
                {contactDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-2xl shadow-sm border border-wiser-dark-teal/5 flex items-center gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-wiser-sand flex items-center justify-center flex-shrink-0 group-hover:bg-wiser-gold transition-colors duration-300">
                      <div className="text-wiser-gold group-hover:text-white transition-colors duration-300">
                        {detail.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-wiser-dark-teal/40 uppercase tracking-[0.2em] mb-1">
                        {detail.label}
                      </h3>
                      {detail.href ? (
                        <a href={detail.href} className="text-lg font-bold text-wiser-dark-teal hover:text-wiser-gold transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-wiser-dark-teal">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="mt-16 relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.29292850787!2d46.738586!3d24.863116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efbdef7f20815%3A0x6ce6bba46c592e85!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0%) contrast(1) brightness(1) invert(0)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5" />
          </div>
        </div>
      </section>
    </div>
  );
}
