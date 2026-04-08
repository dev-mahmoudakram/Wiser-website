'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const stats = [
  { key: 'projects', target: 50, suffix: '+' },
  { key: 'years', target: 10, suffix: '+' },
  { key: 'engineers', target: 15, suffix: '+' },
  { key: 'clients', target: 30, suffix: '+' },
];

export default function AboutSection() {
  const t = useTranslations('HomePage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Text & Stats Column */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-10">
            {/* Header Text */}
            <div className="space-y-4">
              <h3 className="text-wiser-light-teal font-medium tracking-wide">
                {t('About.label')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-wiser-dark-teal leading-tight">
                {t('About.title')}
              </h2>
              <p className="text-wiser-gray leading-relaxed text-lg pb-4">
                {t('About.description')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#fcfbf9] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm"
                >
                  <div className="text-4xl font-bold text-wiser-dark-teal mb-2 font-english">
                    <Counter target={stat.target} inView={isInView} />
                    {stat.suffix}
                  </div>
                  <div className="text-wiser-gray text-sm md:text-base whitespace-nowrap">
                    {t(`Stats.${stat.key}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-t-[50%] overflow-hidden aspect-[4/5] mx-auto w-full max-w-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000"
                alt={t('About.label')}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{count}</span>;
}
