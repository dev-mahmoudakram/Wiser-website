import { setRequestLocale } from 'next-intl/server';
import ProjectsList from '@/components/projects/ProjectsList';
import PageHero from '@/components/layout/PageHero';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';

  return (
    <div className="pt-0 bg-[#fcfbf9] min-h-screen">
      <PageHero 
        title={isAr ? 'مشاريعنا' : 'Our Projects'}
        breadcrumbLabel={isAr ? 'مشاريعنا' : 'Projects'}
        backgroundImage="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&q=80&w=2000"
        locale={locale}
        isAr={isAr}
      />

      {/* Interactive Projects List Component */}
      <ProjectsList locale={locale} />
    </div>
  );
}
