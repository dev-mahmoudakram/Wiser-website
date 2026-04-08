'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useRef } from 'react';

export default function PreFooterCTA() {
  const t = useTranslations('HomePage');
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-wiser-dark-teal text-wiser-sand text-center relative overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
         <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt=""
            fill
            className="object-cover opacity-25 mix-blend-luminosity"
            sizes="100vw"
            priority
         />
         <div className="absolute inset-0 bg-wiser-dark-teal/60" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-white block mb-2">{t('ctaTitle1')}</span>
            <span className="text-wiser-gold italic font-extralight block">
              {t('ctaTitle2')}
            </span>
          </h2>

          <p className="text-wiser-sand/70 text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            {t('ctaDesc')}
          </p>

          <Link 
            href="/contact"
            className="inline-block px-10 py-4 border-2 border-white/30 text-white font-bold tracking-[0.2em] uppercase text-xs hover:border-wiser-gold hover:text-wiser-gold hover:bg-white/5 transition-all duration-500 backdrop-blur-sm"
          >
            {t('ctaContact')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
