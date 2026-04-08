'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HardHat, Ruler, Building2, ShieldCheck, Wrench, PaintRoller } from 'lucide-react';

const icons = {
  construction: HardHat,
  design: Ruler,
  management: Building2,
  decoration: PaintRoller,
  maintenance: Wrench,
  consulting: ShieldCheck,
} as const;

type ServiceKey = keyof typeof icons;

export default function ServicesSection() {
  const t = useTranslations('HomePage.Services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const serviceKeys: ServiceKey[] = [
    'construction',
    'design',
    'management',
    'decoration',
    'maintenance',
    'consulting'
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-wiser-light-teal font-medium tracking-wide">
            {t('label')}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-wiser-dark-teal">
            {t('title')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, index) => {
            const Icon = icons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative group"
              >
                {/* Icon at Top Right (Start in RTL) - Adjust positioning as needed for layout */}
                <div className="flex justify-end mb-6">
                  <div className="w-14 h-14 bg-wiser-sand/50 rounded-2xl flex items-center justify-center text-wiser-teal transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-wiser-dark-teal group-hover:text-wiser-teal transition-colors">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-wiser-gray leading-relaxed text-sm md:text-base">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
