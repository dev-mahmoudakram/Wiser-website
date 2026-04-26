'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { featuredProjectsData, getProjectStatusLabel } from '@/data/projects';

export default function FeaturedProjects() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isAr = locale === 'ar';

  return (
    <section ref={ref} className="py-24 bg-[#fcfbf9] text-wiser-dark-teal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-wiser-light-teal font-medium tracking-wide">
            {t('featuredLabel')}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-wiser-dark-teal">
            {t('featuredTitle')}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjectsData.map((project, index) => {
            const thumbnail = project.thumbnail ?? project.images[0];
            const title = isAr ? project.titleAr : project.titleEn;
            const location = isAr ? project.locationAr : project.locationEn;

            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-wiser-dark-teal">
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-xl font-bold text-wiser-dark-teal group-hover:text-wiser-teal transition-colors truncate">
                      {title}
                    </h3>
                    <span className="bg-wiser-teal flex-shrink-0 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {getProjectStatusLabel(project.status, locale)}
                    </span>
                  </div>
                  
                  {location ? (
                    <div className="flex items-center text-wiser-gray text-sm mt-2">
                      <MapPin className="w-4 h-4 ml-1.5 rtl:ml-1.5 ltr:mr-1.5 shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>
                  ) : null}
                </div>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
