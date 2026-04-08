'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { MapPin } from 'lucide-react';

const projectsData = [
  { id: 1, slug: 'yasmin-villa', title: 'فيلا الياسمين', titleEn: 'Yasmin Villa', type: 'سكني', typeEn: 'Residential', year: '2024', status: 'مكتمل', statusEn: 'Completed', location: 'الرياض', locationEn: 'Riyadh', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 2, slug: 'commercial-tower', title: 'برج المقر التجاري', titleEn: 'Commercial Tower', type: 'تجاري', typeEn: 'Commercial', year: '2023', status: 'مكتمل', statusEn: 'Completed', location: 'جدة', locationEn: 'Jeddah', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, slug: 'nakheel-complex', title: 'مجمع النخيل السكني', titleEn: 'Nakheel Complex', type: 'سكني', typeEn: 'Residential', year: '2024', status: 'قيد التنفيذ', statusEn: 'In Progress', location: 'الدمام', locationEn: 'Dammam', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { id: 4, slug: 'riyadh-tower', title: 'برج الرياض', titleEn: 'Riyadh Tower', type: 'تجاري', typeEn: 'Commercial', year: '2023', status: 'قيد التنفيذ', statusEn: 'In Progress', location: 'الرياض', locationEn: 'Riyadh', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { id: 5, slug: 'jeddah-villa', title: 'فيلا الشاطئ', titleEn: 'Beach Villa', type: 'سكني', typeEn: 'Residential', year: '2022', status: 'مكتمل', statusEn: 'Completed', location: 'جدة', locationEn: 'Jeddah', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 6, slug: 'dammam-mall', title: 'مول الدمام', titleEn: 'Dammam Mall', type: 'تجاري', typeEn: 'Commercial', year: '2025', status: 'قيد التنفيذ', statusEn: 'In Progress', location: 'الدمام', locationEn: 'Dammam', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
];

export default function ProjectsList({ locale }: { locale: string }) {
  const isAr = locale === 'ar';

  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  // Map literal strings for filters when comparing
  const statuses = ['All', 'completed', 'inProgress'];
  const types = ['All', 'residential', 'commercial'];

  const getStatusText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    if (val === 'completed') return isAr ? 'مكتمل' : 'Completed';
    return isAr ? 'قيد التنفيذ' : 'In Progress';
  };
  const getTypeText = (val: string) => {
    if (val === 'All') return isAr ? 'الكل' : 'All';
    if (val === 'residential') return isAr ? 'سكني' : 'Residential';
    return isAr ? 'تجاري' : 'Commercial';
  };

  const filteredProjects = projectsData.filter((p) => {
    let match = true;
    
    // Status match
    if (filterStatus !== 'All') {
      const matchComplete = filterStatus === 'completed' && (p.status === 'مكتمل');
      const matchProgress = filterStatus === 'inProgress' && (p.status === 'قيد التنفيذ');
      if (!matchComplete && !matchProgress) match = false;
    }
    // Type match
    if (filterType !== 'All') {
      const matchRes = filterType === 'residential' && (p.type === 'سكني');
      const matchCom = filterType === 'commercial' && (p.type === 'تجاري');
      if (!matchRes && !matchCom) match = false;
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

      {/* Projects Grid */}
      <section className="py-12 min-h-[40vh]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Determine Bento classes based on position
                const pos = index % 6;
                let bentoClasses = 'md:col-span-2 md:row-span-1'; // default fallback
                if (pos === 0) bentoClasses = 'md:col-span-2 md:row-span-2';
                else if (pos === 1) bentoClasses = 'md:col-span-2 md:row-span-1';
                else if (pos === 2) bentoClasses = 'md:col-span-1 md:row-span-1';
                else if (pos === 3) bentoClasses = 'md:col-span-1 md:row-span-1';
                else if (pos === 4) bentoClasses = 'md:col-span-2 md:row-span-1';
                else if (pos === 5) bentoClasses = 'md:col-span-2 md:row-span-1';

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`${bentoClasses} h-full w-full`}
                  >
                    <Link href={`/projects/${project.slug}`} className="block h-full w-full bg-wiser-dark-teal rounded-3xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-xl transition-all relative">
                      
                      {/* Image Area - Covers Entire Bento Cell */}
                      <Image 
                        src={project.image}
                        alt={isAr ? project.title : project.titleEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 3}
                      />
                      
                      {/* Dark Overlay Gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-wiser-dark-teal via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      {/* Floating Status Pill over Image */}
                      <div className="absolute top-5 rtl:right-5 ltr:left-5 z-20">
                        <span className="bg-wiser-teal/90 backdrop-blur-sm shadow-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {isAr ? project.status : project.statusEn}
                        </span>
                      </div>

                      {/* Meta Content Area - Overlayed at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end">
                        {/* Top Row: Title */}
                        <div className="mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-wiser-gold transition-colors line-clamp-1">
                            {isAr ? project.title : project.titleEn}
                          </h3>
                        </div>
                        
                        {/* Bottom Row: Type+Year and Location */}
                        <div className="flex justify-between items-end mt-2 text-sm text-white/80">
                          <div className="font-light">
                            {isAr ? project.type : project.typeEn} &bull; {project.year}
                          </div>
                          
                          <div className="flex items-center font-medium bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5 ml-1.5 rtl:ml-1.5 ltr:mr-1.5 shrink-0" />
                            <span>{isAr ? project.location : project.locationEn}</span>
                          </div>
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
