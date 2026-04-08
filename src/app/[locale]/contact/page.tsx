import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';

  return (
    <div className="pt-20">
      <section className="bg-wiser-dark-teal text-white py-24 text-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{isAr ? 'اتصل بنا' : 'Contact Us'}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {isAr 
              ? 'نحن هنا للإجابة على استفساراتكم وتحويل أفكاركم إلى واقع.'
              : 'We are here to answer your inquiries and turn your ideas into reality.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-wiser-off-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Placeholder */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-wiser-gray/10">
            <h2 className="text-2xl font-bold text-wiser-dark-teal mb-8">
              {isAr ? 'أرسل لنا رسالة' : 'Send us a message'}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-wiser-gray mb-2">{isAr ? 'الاسم' : 'Name'}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-wiser-gray/20 focus:outline-none focus:border-wiser-teal" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-wiser-gray mb-2">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-wiser-gray/20 focus:outline-none focus:border-wiser-teal" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-wiser-gray mb-2">{isAr ? 'الموضوع' : 'Subject'}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-wiser-gray/20 focus:outline-none focus:border-wiser-teal" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wiser-gray mb-2">{isAr ? 'الرسالة' : 'Message'}</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-wiser-gray/20 focus:outline-none focus:border-wiser-teal" />
              </div>
              <button className="w-full bg-wiser-dark-teal text-white font-bold py-4 rounded-lg hover:bg-wiser-teal transition-colors">
                {isAr ? 'إرسال الرسالة' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info Placeholder */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-wiser-gray/10">
              <h3 className="text-xl font-bold text-wiser-dark-teal mb-4">{isAr ? 'معلومات التواصل' : 'Contact Information'}</h3>
              <ul className="space-y-4 text-wiser-gray">
                <li><strong className="block text-wiser-dark-teal">{isAr ? 'العنوان:' : 'Address:'}</strong> Cairo, Egypt</li>
                <li dir="ltr"><strong className="block text-wiser-dark-teal text-start w-full">{isAr ? 'الهاتف:' : 'Phone:'}</strong> 0109-0246-000</li>
                <li dir="ltr"><strong className="block text-wiser-dark-teal text-start w-full">{isAr ? 'البريد الإلكتروني:' : 'Email:'}</strong> info@wiser-contracting.com</li>
              </ul>
            </div>
            
            <div className="bg-gray-200 h-64 rounded-3xl overflow-hidden arched-image w-full">
              {/* Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.29292850787!2d46.738586!3d24.863116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efbdef7f20815%3A0x6ce6bba46c592e85!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
