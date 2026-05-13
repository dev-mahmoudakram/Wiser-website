import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Target, Eye, Lightbulb, ShieldCheck, Gem } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import PageHero from '@/components/layout/PageHero';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const values = [
    { title: isAr ? 'الابتكار' : 'Innovation', text: isAr ? 'نوظف أحدث التقنيات والأساليب المعمارية لتقديم حلول متميزة.' : 'We employ the latest technologies and architectural methods to provide distinct solutions.', Icon: Lightbulb },
    { title: isAr ? 'الالتزام' : 'Commitment', text: isAr ? 'نحرص على تسليم المشاريع في الوقت المحدد وبالميزانية المتفق عليها.' : 'We are keen to deliver projects on time and within the agreed budget.', Icon: Target },
    { title: isAr ? 'الأمانة' : 'Honesty', text: isAr ? 'الشفافية والمصداقية في التعامل مع عملائنا وشركائنا.' : 'Transparency and credibility in dealing with our clients and partners.', Icon: ShieldCheck },
    { title: isAr ? 'الجودة' : 'Quality', text: isAr ? 'نلتزم بأعلى معايير الجودة في كل تفاصيل البناء والتشطيب.' : 'We adhere to the highest quality standards in every detail of construction.', Icon: Gem }
  ];

  return (
    <div className="relative">
      <PageHero 
        title={isAr ? 'من نحن' : 'About Us'}
        breadcrumbLabel={isAr ? 'من نحن' : 'About Us'}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
        locale={locale}
        isAr={isAr}
      />

      {/* 2. Story Section & Stats */}
      <section className="pt-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Arched Image Container */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-t-[50%] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                alt={isAr ? 'قصتنا' : 'Our Story'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Text Side */}
            <div className="space-y-6 lg:pr-12 rtl:lg:pl-12 rtl:lg:pr-0">
              <span className="text-wiser-teal font-bold tracking-wider uppercase text-sm">
                 {isAr ? 'قصتنا' : 'Our Story'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-wiser-dark-teal leading-tight mb-6">
                {isAr ? 'رحلة بناء تمتد لأكثر من عقد' : 'A building journey spanning over a decade'}
              </h2>
              <p className="text-wiser-gray text-lg leading-relaxed mb-4">
                {isAr 
                  ? 'تأسست شركة وايزر للمقاولات برؤية طموحة لتقديم خدمات بناء استثنائية تجمع بين الحرفية العالية والتصميم المبتكر. منذ انطلاقتنا، عملنا على تحويل أفكار عملائنا إلى واقع ملموس يفوق التوقعات.'
                  : 'Wiser Contracting was founded with an ambitious vision to provide exceptional construction services combining high craftsmanship and innovative design. Since our inception, we have worked to turn our clients\' ideas into a tangible reality that exceeds expectations.'}
              </p>
              <p className="text-wiser-gray text-lg leading-relaxed">
                {isAr 
                  ? 'فريقنا من المهندسين والمعماريين المحترفين يعمل جنباً إلى جنب لضمان تنفيذ كل مشروع بأعلى معايير الجودة والسلامة، مع الحرص على الالتزام بالجداول الزمنية والميزانيات المحددة.'
                  : 'Our team of professional engineers and architects works side by side to ensure every project is executed to the highest standards of quality and safety, while strictly adhering to specified timelines and budgets.'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Banner inside the bottom of the section */}
        <div className="w-full bg-wiser-dark-teal py-16 mt-24">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
             <div>
                <h3 className="text-5xl font-bold mb-2"><Counter value={30} />+</h3>
                <p className="text-white/80 text-lg uppercase tracking-wide">{isAr ? 'مهندس محترف' : 'Expert Engineer'}</p>
             </div>
             <div>
                <h3 className="text-5xl font-bold mb-2"><Counter value={120} />+</h3>
                <p className="text-white/80 text-lg uppercase tracking-wide">{isAr ? 'عميل سعيد' : 'Happy Client'}</p>
             </div>
             <div>
                <h3 className="text-5xl font-bold mb-2"><Counter value={22} />+</h3>
                <p className="text-white/80 text-lg uppercase tracking-wide">{isAr ? 'مشروع منجز' : 'Completed Project'}</p>
             </div>
             <div>
                <h3 className="text-5xl font-bold mb-2"><Counter value={16} />+</h3>
                <p className="text-white/80 text-lg uppercase tracking-wide">{isAr ? 'سنوات خبرة' : 'Years Experience'}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values */}
      <section className="py-24 bg-[#fcfbf9]">
        <div className="container mx-auto px-4 max-w-6xl">
           {/* Top 2 Cards: Mission & Vision */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-start group hover:shadow-lg transition-all duration-300">
                 <div className="w-14 h-14 bg-wiser-teal/10 rounded-xl flex items-center justify-center mb-6 text-wiser-teal group-hover:-translate-y-1 transition-transform">
                    <Target size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-wiser-dark-teal mb-4">{isAr ? 'رسالتنا' : 'Our Mission'}</h3>
                 <p className="text-wiser-gray text-lg leading-relaxed max-w-sm">
                    {isAr 
                      ? 'تقديم حلول بناء متكاملة بأعلى معايير الجودة والسلامة، مع الالتزام بالابتكار والاستدامة لتحقيق رضا عملائنا وتجاوز توقعاتهم.'
                      : 'Providing integrated construction solutions with the highest quality and safety standards, committing to innovation and sustainability to exceed expectations.'}
                 </p>
              </div>

              <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-start group hover:shadow-lg transition-all duration-300">
                 <div className="w-14 h-14 bg-wiser-teal/10 rounded-xl flex items-center justify-center mb-6 text-wiser-teal group-hover:-translate-y-1 transition-transform">
                    <Eye size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-wiser-dark-teal mb-4">{isAr ? 'رؤيتنا' : 'Our Vision'}</h3>
                 <p className="text-wiser-gray text-lg leading-relaxed max-w-sm">
                    {isAr 
                      ? 'أن نكون الشركة الرائدة في قطاع المقاولات بمصر، ونساهم في بناء مستقبل عمراني يجمع بين الأصالة والحداثة.'
                      : 'To be the leading company in the contracting sector in Egypt, contributing to building an urban future that combines authenticity and modernity.'}
                 </p>
              </div>
           </div>

           {/* Values Header */}
           <div className="text-center mb-16">
              <span className="text-wiser-teal font-bold tracking-wider text-sm mb-3 block">{isAr ? 'مبادئنا' : 'Our Principles'}</span>
              <h2 className="text-4xl font-bold text-wiser-dark-teal">{isAr ? 'القيم التي تقودنا' : 'The Values That Guide Us'}</h2>
           </div>

           {/* Values 4-Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {values.map((v, i) => (
                <div key={i} className="bg-[#f5f5f5] rounded-xl p-8 flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all border border-transparent hover:border-gray-100">
                   <div className="w-14 h-14 bg-wiser-teal/10 rounded-full flex items-center justify-center mb-6 text-wiser-teal">
                      <v.Icon size={28} />
                   </div>
                   <h4 className="text-xl font-bold text-wiser-dark-teal mb-3">{v.title}</h4>
                   <p className="text-wiser-gray/80 text-sm leading-relaxed">{v.text}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
}
