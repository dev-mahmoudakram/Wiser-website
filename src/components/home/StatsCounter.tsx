'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { key: 'years', target: 15, suffix: '+' },
  { key: 'projects', target: 200, suffix: '+' },
  { key: 'team', target: 50, suffix: '+' },
  { key: 'area', target: 100, suffix: 'k' }, // sqm
];

export default function StatsCounter() {
  const t = useTranslations('HomePage.Stats'); // Will add these to locale files
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border-s border-wiser-gray/20 last:border-e-0 md:last:border-e"
            >
              <div className="text-4xl md:text-5xl font-bold text-wiser-dark-teal mb-2 font-english">
                <Counter target={stat.target} inView={isInView} />
                {stat.suffix}
              </div>
              <div className="text-wiser-gray font-medium">
                {/* Fallbacks directly here if translation missing during dev */}
                {stat.key === 'years' ? 'Years Experience' : 
                 stat.key === 'projects' ? 'Completed Projects' : 
                 stat.key === 'team' ? 'Expert Members' : 'SQM Built'}
              </div>
            </motion.div>
          ))}
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
    const increment = target / (duration / 16); // 60fps

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
