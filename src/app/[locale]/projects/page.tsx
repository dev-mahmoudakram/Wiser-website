import { setRequestLocale } from 'next-intl/server';
import ProjectsList from '@/components/projects/ProjectsList';
import PageHero from '@/components/layout/PageHero';
import { projectsData } from '@/data/projects';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const heroImage = projectsData[0]?.images[0] ?? '/assets/wiser-logo.png';

  return (
    <div className="pt-0 bg-[#fcfbf9] min-h-screen">
      <PageHero 
        title={isAr ? 'مشاريعنا' : 'Our Projects'}
        breadcrumbLabel={isAr ? 'مشاريعنا' : 'Projects'}
        backgroundImage={heroImage}
        locale={locale}
        isAr={isAr}
      />

      {/* Interactive Projects List Component */}
      <ProjectsList locale={locale} />
    </div>
  );
}
