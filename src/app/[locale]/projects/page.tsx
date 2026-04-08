import { setRequestLocale } from 'next-intl/server';
import ProjectsList from '@/components/projects/ProjectsList';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';

  return (
    <div className="pt-0 bg-[#fcfbf9] min-h-screen">
      {/* Header Section */}
      <section className="bg-wiser-dark-teal text-wiser-sand pt-40 pb-32 text-center relative z-0">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-tight">
            {isAr ? 'مشاريعنا' : 'Our Projects'}
          </h1>
          <p className="text-lg md:text-xl text-wiser-sand/80 max-w-2xl mx-auto font-light">
            {isAr 
              ? 'اكتشف مجموعة من أبرز مشاريعنا المنجزة والجارية'
              : 'Discover a selection of our most prominent completed and ongoing projects'}
          </p>
        </div>
      </section>

      {/* Interactive Projects List Component */}
      <ProjectsList locale={locale} />
    </div>
  );
}
