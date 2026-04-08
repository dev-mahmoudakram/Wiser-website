'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function FeaturedProjects() {
  const t = useTranslations('HomePage');
  const tp = useTranslations('HomePage.Projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Dummy featured projects mapped to the design
  const projects = [
    { 
      id: 1, 
      title: 'فيلا الياسمين', 
      titleEn: 'Al Yasmin Villa',
      status: 'completed', 
      location: 'الرياض، المملكة العربية السعودية',
      locationEn: 'Riyadh, Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' // Villa
    },
    { 
      id: 2, 
      title: 'برج المقر التجاري', 
      titleEn: 'Commercial Headquarters Tower',
      status: 'completed', 
      location: 'جدة، المملكة العربية السعودية',
      locationEn: 'Jeddah, Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' // Commercial interior
    },
    { 
      id: 3, 
      title: 'مجمع النخيل السكني', 
      titleEn: 'Al Nakheel Residential Complex',
      status: 'inProgress', 
      location: 'الدمام، المملكة العربية السعودية',
      locationEn: 'Dammam, Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' // Apartment complex
    },
  ];

  // We are using locale manually here to show right translation for dummy data but usually data comes from DB
  // Because it's a client component, `useTranslations` handles locale automatically for strings, so we could just use a locale check or pass it.
  // Actually, wait, `useTranslations` gives us the current scope. We can check `locale` using `useLocale` if next-intl provides it. Let's just use the `titleEn` and `title` via a simple hack or assume ar.
  // Since we don't have useLocale directly imported, let's use a function to get translated fields if possible or just use AR as default to match design.
  // We'll stick to Arabic text primarily, but try to use english if `t('featuredLabel')` is 'Our Works'.
  const isEnglish = t('featuredLabel') === 'Our Works';

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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image}
                  alt={isEnglish ? project.titleEn : project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xl font-bold text-wiser-dark-teal group-hover:text-wiser-teal transition-colors truncate">
                    {isEnglish ? project.titleEn : project.title}
                  </h3>
                  <span className="bg-wiser-teal flex-shrink-0 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {tp(project.status as 'completed' | 'inProgress')}
                  </span>
                </div>
                
                <div className="flex items-center text-wiser-gray text-sm mt-2">
                  <MapPin className="w-4 h-4 ml-1.5 rtl:ml-1.5 ltr:mr-1.5 shrink-0" />
                  <span className="truncate">{isEnglish ? project.locationEn : project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
