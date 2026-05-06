'use client';

import { useState } from 'react';
import Image from 'next/image';
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

  const statuses = ['All', ...projectStatuses.map((s) => s.value)];
  const types = ['All', ...projectTypes.map((t) => t.value)];

  const getStatusText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    const s = projectStatuses.find((item) => item.value === val);
    return s ? (isAr ? s.labelAr : s.labelEn) : val;
  };
  const getTypeText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    const t = projectTypes.find((item) => item.value === val);
    return t ? (isAr ? t.labelAr : t.labelEn) : val;
  };

  const filteredProjects = projectsData.filter((p) => {
    if (filterStatus !== 'All' && p.status !== filterStatus) return false;
    if (filterType !== 'All' && p.typeKey !== filterType) return false;
    return true;
  });

  return (
    <>
      {/* Filters */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 w-full mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full max-w-6xl mx-auto">

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="font-bold text-wiser-dark-teal text-sm md:text-base">{isAr ? 'الحالة:' : 'Status:'}</span>
            <div className="flex flex-wrap gap-2">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterStatus === s
                      ? 'bg-wiser-teal text-white'
                      : 'bg-white text-wiser-gray border border-gray-200 hover:border-wiser-teal/50'
                  }`}
                >
                  {getStatusText(s)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="font-bold text-wiser-dark-teal text-sm md:text-base">{isAr ? 'النوع:' : 'Type:'}</span>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterType === t
                      ? 'bg-wiser-teal text-white'
                      : 'bg-white text-wiser-gray border border-gray-200 hover:border-wiser-teal/50'
                  }`}
                >
                  {getTypeText(t)}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <section className="py-12 min-h-[40vh]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const rawThumbnail = project.thumbnail ?? project.images[0];
              const thumbnail = rawThumbnail
                ? rawThumbnail.split('/').map(encodeURIComponent).join('/')
                : null;
              const title = isAr ? project.titleAr : project.titleEn;
              const location = isAr ? project.locationAr : project.locationEn;
              const typeLabel = getProjectTypeLabel(project.typeKey, locale);
              const statusLabel = getProjectStatusLabel(project.status, locale);

              return (
                <div key={project.id} className="h-full w-full">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative block aspect-[4/3] min-h-[340px] w-full overflow-hidden rounded-3xl bg-wiser-dark-teal shadow-sm border border-gray-100 group cursor-pointer hover:shadow-xl transition-shadow"
                  >
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
                      <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-wiser-gold transition-colors line-clamp-2 mb-3">
                        {title}
                      </h3>
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
                </div>
              );
            })}

            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center text-wiser-gray text-lg">
                {isAr ? 'لا توجد مشاريع تطابق هذه الفلاتر.' : 'No projects match these filters.'}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
