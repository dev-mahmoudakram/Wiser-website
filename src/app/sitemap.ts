import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wiser-contracting.com';

  const defaultPages = ['', '/about', '/projects', '/services', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add default pages for all locales
  defaultPages.forEach((page) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // Add project pages
  projectsData.forEach((project) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
