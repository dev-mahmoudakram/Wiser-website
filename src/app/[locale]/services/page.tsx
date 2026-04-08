import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { 
  HardHat, 
  Ruler, 
  Building2, 
  Wrench, 
  FileSearch, 
  UserCheck, 
  ArrowRight,
  ClipboardCheck,
  CheckCircle2
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';

  const mainServices = [
    {
      id: 'contracting',
      title: isAr ? 'المقاولات العامة' : 'General Contracting',
      description: isAr 
        ? 'نحن متخصصون في تنفيذ مشاريع البناء الكبرى، من الأبراج السكنية إلى المجمعات التجارية، مع التزام صارم بالهندسة الدقيقة ومعايير السلامة العالمية. نضمن لك جودة بناء تدوم لأجيال.'
        : 'We specialize in executing major construction projects, from residential towers to commercial complexes, with a strict commitment to precision engineering and global safety standards.',
      features: isAr 
        ? ['هياكل خرسانية متينة', 'إدارة مواقع احترافية', 'أعمال إنشائية متكاملة']
        : ['Solid concrete structures', 'Professional site management', 'Integrated construction works'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'development',
      title: isAr ? 'التطوير العقاري' : 'Real Estate Development',
      description: isAr 
        ? 'نحوّل الأراضي الخام إلى مجتمعات حيوية. رؤيتنا في التطوير العقاري ترتكز على خلق قيمة مستدامة للمستثمرين وتجربة عيش استثنائية للمستخدم النهائي، عبر التخطيط العمراني المبتكر.'
        : 'We transform raw land into vibrant communities. Our vision in real estate development is based on creating sustainable value for investors and an exceptional living experience for the end user.',
      features: isAr 
        ? ['تخطيط حضري حديث', 'دراسات جدوى اقتصادية', 'حلول سكنية ذكية']
        : ['Modern urban planning', 'Economic feasibility studies', 'Smart residential solutions'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'interior',
      title: isAr ? 'التصميم الداخلي والتشطيب' : 'Interior Design & Finishing',
      description: isAr 
        ? 'نعيد تعريف الفخامة في التفاصيل. فريقنا من المصممين المبدعين يبتكر مساحات تجمع بين الجمالية والوظيفة، باستخدام أجود المواد وأحدث تقنيات التشطيب الفاخر.'
        : 'We redefine luxury in the details. Our team of creative designers creates spaces that combine aesthetics and function, using the finest materials and the latest luxury finishing techniques.',
      features: isAr 
        ? ['تشطيبات ملكية', 'تصميمات معاصرة', 'عناصر إضاءة مبتكرة']
        : ['Royal finishes', 'Contemporary designs', 'Innovative lighting elements'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    }
  ];

  const specialtyServices = [
    {
      title: isAr ? 'الترميم والصيانة' : 'Restoration & Maintenance',
      description: isAr ? 'إعادة إحياء المباني القديمة وإطالة عمر المنشآت بحلول صيانة وقائية وعلاجية.' : 'Reviving old buildings and extending structure lifespan with preventive and remedial maintenance.',
      Icon: Wrench
    },
    {
      title: isAr ? 'إدارة المشاريع' : 'Project Management',
      description: isAr ? 'إشراف هندسي متكامل يضمن الالتزام بالجداول الزمنية والميزانيات المحددة بدقة.' : 'Integrated engineering supervision ensuring strict adherence to timelines and defined budgets.',
      Icon: ClipboardCheck
    },
    {
      title: isAr ? 'الاستشارات الهندسية' : 'Engineering Consultancy',
      description: isAr ? 'تقديم استشارات فنية وحلول هندسية مبتكرة للتحديات الإنشائية المعقدة.' : 'Providing technical advice and innovative engineering solutions for complex construction challenges.',
      Icon: Ruler
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: isAr ? 'الاستشارة والتحليل' : 'Consultation & Analysis',
      desc: isAr ? 'نجلس معك لفهم تطلعاتك وتحليل متطلبات المشروع بدقة.' : 'We sit with you to understand your aspirations and analyze project requirements accurately.',
      Icon: FileSearch
    },
    {
      step: '02',
      title: isAr ? 'التخطيط والتصميم' : 'Planning & Design',
      desc: isAr ? 'تحويل الأفكار إلى مخططات هندسية وتصاميم ثلاثية الأبعاد.' : 'Turning ideas into engineering blueprints and 3D designs.',
      Icon: Ruler
    },
    {
      step: '03',
      title: isAr ? 'التنفيذ والبناء' : 'Execution & Build',
      desc: isAr ? 'بدء العمليات الإنشائية بأعلى معايير الجودة تحت إشراف خبرائنا.' : 'Starting construction operations with the highest quality standards under expert supervision.',
      Icon: HardHat
    },
    {
      step: '04',
      title: isAr ? 'التسليم والضمان' : 'Handover & Warranty',
      desc: isAr ? 'تسليم المشروع مكتملاً مع الالتزام التام بكافة بنود الضمان.' : 'Delivering the project completed with total commitment to all warranty terms.',
      Icon: UserCheck
    }
  ];

  return (
    <div className="relative">
      <PageHero 
        title={isAr ? 'خدماتنا' : 'Our Services'}
        breadcrumbLabel={isAr ? 'خدماتنا' : 'Services'}
        backgroundImage="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&q=80&w=2000"
        locale={locale}
        isAr={isAr}
      />

      {/* Intro Text */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-bold text-wiser-dark-teal mb-6">
              {isAr ? 'حلول بنائية متكاملة تحت سقف واحد' : 'Integrated Building Solutions Under One Roof'}
           </h2>
           <p className="text-wiser-gray text-lg leading-relaxed">
              {isAr 
                ? 'في وايزر للمقاولات، نقدم حزمة شاملة من الخدمات الهندسية والإنشائية التي تغطي دورة حياة المشروع بالكامل، من المخطط الأول وحتى اللمسة النهائية للتشطيب.'
                : 'At Wiser Contracting, we provide a comprehensive package of engineering and construction services covering the entire project lifecycle, from the first blueprint to the final finishing touch.'}
           </p>
        </div>
      </section>

      {/* 2. Main Services (Alternating) */}
      <section className="pb-24 bg-white">
        {mainServices.map((service, index) => (
          <div key={service.id} className={`py-20 ${index % 2 === 1 ? 'bg-[#fcfbf9]' : ''}`}>
            <div className="container mx-auto px-4">
               <div className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
                     <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                     />
                  </div>
                  
                  {/* Text Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                     <h3 className="text-3xl md:text-4xl font-bold text-wiser-dark-teal">
                        {service.title}
                     </h3>
                     <div className="w-12 h-1 bg-wiser-teal" />
                     <p className="text-wiser-gray text-lg leading-relaxed">
                        {service.description}
                     </p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-wiser-dark-teal font-medium">
                            <CheckCircle2 className="text-wiser-teal w-5 h-5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Specialty Grid */}
      <section className="py-24 bg-wiser-dark-teal text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{isAr ? 'خدماتنا التخصصية' : 'Specialized Services'}</h2>
              <div className="w-24 h-1 bg-wiser-teal mx-auto" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {specialtyServices.map((specialty, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                    <div className="w-14 h-14 bg-wiser-teal/20 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                       <specialty.Icon size={30} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{specialty.title}</h4>
                    <p className="text-white/70 leading-relaxed italic">
                       {specialty.description}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-20">
              <span className="text-wiser-teal font-bold tracking-widest uppercase text-sm mb-3 block">{isAr ? 'منهجيتنا' : 'Our Methodology'}</span>
              <h2 className="text-4xl font-bold text-wiser-dark-teal">{isAr ? 'رحلة إنجاز مشروعك' : 'Project Completion Journey'}</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
              {processSteps.map((step, i) => (
                 <div key={i} className="relative text-center group">
                    {/* Circle Icon */}
                    <div className="w-24 h-24 bg-wiser-off-white rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-dashed border-wiser-teal/30 group-hover:border-wiser-teal transition-colors">
                       <step.Icon className="text-wiser-dark-teal w-10 h-10 group-hover:scale-110 transition-transform" />
                       <div className="absolute -top-2 -right-2 w-10 h-10 bg-wiser-dark-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                       </div>
                    </div>
                    <h4 className="text-xl font-bold text-wiser-dark-teal mb-4">{step.title}</h4>
                    <p className="text-wiser-gray leading-relaxed text-sm">
                       {step.desc}
                    </p>
                    
                    {/* Connecting line for desktop */}
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 border-t-2 border-dashed border-wiser-teal/20" />
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
