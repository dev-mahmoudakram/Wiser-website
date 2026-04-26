import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { getProjectBySlug, getProjectImageSize, getProjectStatusLabel, getProjectTypeLabel } from '@/data/projects';

function getGalleryGridClass(total: number) {
  if (total <= 1) {
    return 'grid grid-cols-1 max-w-5xl';
  }

  if (total === 2 || total === 4) {
    return 'grid grid-cols-1 md:grid-cols-2 max-w-5xl';
  }

  if (total === 3) {
    return 'grid grid-cols-1 md:grid-cols-3 max-w-7xl';
  }

  return 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl';
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const title = isAr ? project.titleAr : project.titleEn;
  const category = getProjectTypeLabel(project.typeKey, locale);
  const status = getProjectStatusLabel(project.status, locale);
  const description = isAr ? project.descriptionAr : project.descriptionEn;
  const scope = isAr ? project.scopeAr : project.scopeEn;
  const fallbackDescription = isAr
    ? 'سيتم إضافة وصف المشروع قريباً.'
    : 'The project description will be added soon.';
  const mainImage = project.thumbnail ?? project.images[0];
  const projectInfo = [
    { label: isAr ? 'النوع' : 'Type', value: category },
    { label: isAr ? 'الحالة' : 'Status', value: status },
    { label: isAr ? 'الموقع' : 'Location', value: isAr ? project.locationAr : project.locationEn },
    { label: isAr ? 'المالك' : 'Owner', value: isAr ? project.ownerAr : project.ownerEn },
    { label: isAr ? 'المقاول العام' : 'General Contractor', value: isAr ? project.contractorAr : project.contractorEn },
    { label: isAr ? 'المقاول الباطن' : 'Subcontractor', value: isAr ? project.subcontractorAr : project.subcontractorEn },
    { label: isAr ? 'العميل' : 'Client', value: isAr ? project.clientAr : project.clientEn },
    { label: isAr ? 'سنة الإنجاز' : 'Year', value: project.year },
    { label: isAr ? 'المساحة' : 'Area', value: project.area },
  ].filter((item) => item.value);

  return (
    <div className="relative">
      {/* Project Banner */}
      <div className="w-full h-[60vh] bg-wiser-dark-teal relative overflow-hidden">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-wiser-dark-teal/50" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12 z-10">
          <Link href="/projects" className="text-white/80 hover:text-white font-bold mb-4 flex items-center gap-2">
            &larr; {isAr ? 'العودة للمشاريع' : 'Back to Projects'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{title}</h1>
          <p className="text-white/90 text-xl font-bold">{category}</p>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-wiser-dark-teal">
              {isAr ? 'نظرة عامة على المشروع' : 'Project Overview'}
            </h2>
            <p className="whitespace-pre-line text-wiser-gray text-lg leading-relaxed">{description || fallbackDescription}</p>

            {scope && scope.length > 0 ? (
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-wiser-dark-teal mb-5">
                  {isAr ? 'نطاق الأعمال' : 'Scope of Work'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-wiser-gray/10 bg-[#fcfbf9] px-4 py-3 text-wiser-gray"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wiser-gold" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="bg-wiser-off-white p-8 rounded-3xl border border-wiser-gray/10">
              <h3 className="text-xl font-bold text-wiser-dark-teal mb-6">
                {isAr ? 'معلومات المشروع' : 'Project Information'}
              </h3>
              <ul className="space-y-4">
                {projectInfo.map((item, index) => (
                  <li
                    key={item.label}
                    className={`flex justify-between gap-6 ${index < projectInfo.length - 1 ? 'border-b border-wiser-gray/20 pb-4' : 'pb-2'}`}
                  >
                    <span className="font-bold text-wiser-gray">{item.label}</span>
                    <span className="text-wiser-dark-teal font-medium text-end">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-[#fcfbf9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-wiser-dark-teal">
              {isAr ? 'معرض الصور' : 'Project Gallery'}
            </h2>
            <div className="w-16 h-1 bg-wiser-gold my-5 rtl:mr-0 ltr:ml-0"></div>
            <p className="text-wiser-gray text-lg font-light">
              {isAr
                ? 'جولة بصرية في تفاصيل المشروع تظهر جودة التنفيذ واللمسات الإبداعية.'
                : 'A visual tour into the project details showcasing the execution quality and creative touches.'}
            </p>
          </div>

          <div className={`${getGalleryGridClass(project.images.length)} mx-auto items-start gap-4 md:gap-6`}>
             {project.images.length > 0 ? project.images.map((img: string, index: number) => {
                const imageSize = getProjectImageSize(img);

                return (
                  <div 
                    key={index} 
                    className="self-start overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <Image 
                      src={img}
                      alt={`${title} ${index + 1}`}
                      width={imageSize.width}
                      height={imageSize.height}
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                );
             }) : (
                <div className="col-span-full rounded-3xl bg-white p-10 text-center text-wiser-gray border border-wiser-gray/10">
                  {isAr ? 'لا توجد صور متاحة لهذا المشروع حالياً.' : 'No images are available for this project yet.'}
                </div>
             )}
          </div>
        </div>
      </section>
    </div>
  );
}
