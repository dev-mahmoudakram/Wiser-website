import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';

  // Dummy data (would normally be fetched via Prisma where slug = slug)
  const project = {
    slug: 'riyadh-tower',
    title: isAr ? 'برج الرياض' : 'Riyadh Tower',
    category: isAr ? 'بناء وتشييد' : 'Construction',
    description: isAr 
      ? 'أحد أهم المشاريع العقارية في قلب العاصمة الرياض، تم تصميمه وتنفيذه وفقاً لأعلى المعايير العالمية في الاستدامة والابتكار.' 
      : 'One of the most important real estate projects in the heart of the capital, Riyadh, designed and executed according to the highest international standards in sustainability and innovation.',
    location: isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
    year: '2025',
    area: '25,000 sqm',
    client: 'Riyadh Holdings',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', 
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
    ]
  };

  if (slug !== 'riyadh-tower') {
    // We only have one dummy project slug right now
    // notFound(); 
  }

  return (
    <div className="relative">
      {/* Project Banner */}
      <div 
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-wiser-dark-teal/50" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12 z-10">
          <Link href="/projects" className="text-white/80 hover:text-white font-bold mb-4 flex items-center gap-2">
            &larr; {isAr ? 'العودة للمشاريع' : 'Back to Projects'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-white/90 text-xl font-bold">{project.category}</p>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-wiser-dark-teal">
              {isAr ? 'نظرة عامة على المشروع' : 'Project Overview'}
            </h2>
            <p className="text-wiser-gray text-lg leading-relaxed">{project.description}</p>
            <p className="text-wiser-gray text-lg leading-relaxed">
              {isAr ? 'تميز هذا المشروع بتطبيق أحدث تقنيات البناء المستدام، حيث حرصنا التفاصيل الدقيقة لإخراج صرح يواكب تطلعات رؤية 2030.' : 'This project was distinguished by the application of the latest sustainable construction technologies, where we paid attention to minute details to produce an edifice that keeps pace with the aspirations of Vision 2030.'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-wiser-off-white p-8 rounded-3xl border border-wiser-gray/10">
              <h3 className="text-xl font-bold text-wiser-dark-teal mb-6">
                {isAr ? 'معلومات المشروع' : 'Project Information'}
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-wiser-gray/20 pb-4">
                  <span className="font-bold text-wiser-gray">{isAr ? 'الموقع' : 'Location'}</span>
                  <span className="text-wiser-dark-teal font-medium">{project.location}</span>
                </li>
                <li className="flex justify-between border-b border-wiser-gray/20 pb-4">
                  <span className="font-bold text-wiser-gray">{isAr ? 'العميل' : 'Client'}</span>
                  <span className="text-wiser-dark-teal font-medium">{project.client}</span>
                </li>
                <li className="flex justify-between border-b border-wiser-gray/20 pb-4">
                  <span className="font-bold text-wiser-gray">{isAr ? 'سنة الإنجاز' : 'Year'}</span>
                  <span className="text-wiser-dark-teal font-medium">{project.year}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-bold text-wiser-gray">{isAr ? 'المساحة' : 'Area'}</span>
                  <span className="text-wiser-dark-teal font-medium dir-ltr inline-block text-start">{project.area}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Bento Grid Gallery Section */}
      <section className="py-24 bg-[#fcfbf9]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Mobile Text (Desktop uses grid) */}
          <div className="mb-8 md:hidden">
             <h2 className="text-3xl font-bold text-wiser-dark-teal">
                {isAr ? 'معرض الصور' : 'Project Gallery'}
             </h2>
             <p className="text-wiser-gray mt-2 font-light">
                {isAr ? 'جولة بصرية في تفاصيل المشروع.' : 'A visual tour into the project details.'}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
             
             {/* Title Cell (takes up the empty space in the reference image design) */}
             <div className="hidden md:flex flex-col justify-start pb-8 col-start-1 col-span-1 row-start-1 row-span-1 rtl:text-right ltr:text-left pr-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-wiser-dark-teal mb-4 leading-tight">
                  {isAr ? 'معرض الصور' : 'Project Gallery'}
                </h2>
                <div className="w-16 h-1 bg-wiser-gold mb-6 rtl:ml-auto ltr:mr-auto"></div>
                <p className="text-wiser-gray text-lg font-light">
                  {isAr 
                    ? 'جولة بصرية في تفاصيل المشروع تظهر جودة التنفيذ واللمسات الإبداعية.' 
                    : 'A visual tour into the project details showcasing the execution quality and creative touches.'}
                </p>
             </div>

             {/* Bento Images */}
             {project.gallery.map((img: string, index: number) => {
                let classes = 'col-span-1 row-span-1';
                // Layout matching the exactly described pattern
                if (index === 0) classes = 'md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1'; // Living room
                else if (index === 1) classes = 'md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-2'; // White Villa (tall)
                else if (index === 2) classes = 'md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1'; // Night exterior (wide)
                else if (index === 3) classes = 'md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1'; // Bathroom
                else if (index === 4) classes = 'md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-1'; // Bedroom
                else if (index === 5) classes = 'md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-1'; // Kitchen

                // We handle RTL inversion natively by NextJS using generic start/end grids, 
                // but since grid-cols-3 implicitly works with RTL flow automatically, 
                // hardcoded `col-start-x` is sensitive to RTL. 
                // Tailwind `col-start-3` in RTL will physically place it on the LEFT instead of RIGHT. 
                // That perfectly flips the grid seamlessly matching localized reading direction!
                
                return (
                  <div 
                    key={index} 
                    className={`${classes} relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group`}
                  >
                    <Image 
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                );
             })}
          </div>
        </div>
      </section>
    </div>
  );
}
