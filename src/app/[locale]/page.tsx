import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter'; // keeping for potential reuse elsewhere if needed
import AboutSection from '@/components/home/AboutSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesSection from '@/components/home/ServicesSection';
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
    </>
  );
}
