'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { MapPin } from 'lucide-react';
import {
  getProjectStatusLabel,
  getProjectTypeLabel,
  projectStatuses,
  projectTypes,
  projectsData,
} from '@/data/projects';

export default function ProjectsList({ locale }: { locale: string }) {
  const isAr = locale === 'ar';

  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  // Map literal strings for filters when comparing
  const statuses = ['All', ...projectStatuses.map((status) => status.value)];
  const types = ['All', ...projectTypes.map((type) => type.value)];

  const getStatusText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    const status = projectStatuses.find((item) => item.value === val);
    return status ? (isAr ? status.labelAr : status.labelEn) : val;
  };
  const getTypeText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    const projectType = projectTypes.find((type) => type.value === val);
    return projectType ? (isAr ? projectType.labelAr : projectType.labelEn) : val;
  };

  const filteredProjects = projectsData.filter((p) => {
    let match = true;
    
    // Status match
    if (filterStatus !== 'All') {
      if (p.status !== filterStatus) match = false;
    }
    // Type match
    if (filterType !== 'All') {
      if (p.typeKey !== filterType) match = false;
    }

    return match;
  });

  return (
    <>
      {/* Filters Form Container */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 w-full mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full max-w-6xl mx-auto">
          
          {/* Status Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="font-bold text-wiser-dark-teal text-sm md:text-base">{isAr ? 'الحالة:' : 'Status:'}</span>
            <div className="flex flex-wrap gap-2">
              {statuses.map(s => {
                const isActive = filterStatus === s;
                return (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-wiser-teal text-white border-wiser-teal' 
                        : 'bg-white text-wiser-gray border border-gray-200 hover:border-wiser-teal/50'
                    }`}
                  >
                    {getStatusText(s)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="font-bold text-wiser-dark-teal text-sm md:text-base">{isAr ? 'النوع:' : 'Type:'}</span>
            <div className="flex flex-wrap gap-2">
              {types.map(t => {
                const isActive = filterType === t;
                return (
                  <button
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-wiser-teal text-white border-wiser-teal' 
                        : 'bg-white text-wiser-gray border border-gray-200 hover:border-wiser-teal/50'
                    }`}
                  >
                    {getTypeText(t)}
                  </button>
                );
              })}
            </div>
          </div>

        </div>


      </div>

      <section className="py-12 min-h-[40vh]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const thumbnail = project.thumbnail ?? project.images[0];
                const title = isAr ? project.titleAr : project.titleEn;
                const location = isAr ? project.locationAr : project.locationEn;
                const typeLabel = getProjectTypeLabel(project.typeKey, locale);
                const statusLabel = getProjectStatusLabel(project.status, locale);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Link href={`/projects/${project.slug}`} className="relative block aspect-[4/3] min-h-[340px] w-full overflow-hidden rounded-3xl bg-wiser-dark-teal shadow-sm border border-gray-100 group cursor-pointer hover:shadow-xl transition-all">
                      
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          priority={index < 6}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-wiser-dark-teal">
                          <span className="px-6 text-center text-lg font-bold text-white/80">{typeLabel}</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-wiser-dark-teal via-wiser-dark-teal/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                      
                      <div className="absolute top-5 rtl:right-5 ltr:left-5 z-20">
                        <span className="bg-wiser-teal/90 backdrop-blur-sm shadow-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {statusLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                        <div className="mb-3">
                          <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-wiser-gold transition-colors line-clamp-2">
                            {title}
                          </h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2 text-sm text-white/85">
                          <span className="inline-flex items-center rounded-full bg-black/20 px-3 py-1 font-medium backdrop-blur-md">
                            {typeLabel}
                            {project.year ? <> &bull; {project.year}</> : null}
                          </span>
                          
                          {location ? (
                            <span className="inline-flex max-w-full min-w-0 items-center rounded-full bg-black/20 px-3 py-1 font-medium backdrop-blur-md">
                              <MapPin className="w-3.5 h-3.5 ml-1.5 rtl:ml-1.5 ltr:mr-1.5 shrink-0" />
                              <span className="truncate">{location}</span>
                            </span>
                          ) : null}
                        </div>
                      </div>

                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center text-wiser-gray text-lg"
              >
                {isAr ? 'لا توجد مشاريع تطابق هذه الفلاتر.' : 'No projects match these filters.'}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
