'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wiser-dark-teal">
      
      {/* High-end Architectural Background Imagery */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2500")' }}
        />
        {/* Deep elegant overlay */}
        <div className="absolute inset-0 bg-wiser-dark-teal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-wiser-dark-teal/90 via-transparent to-wiser-dark-teal/80" />
      </div>

      <div className="container relative z-20 px-4 pt-32 pb-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Hero Text */}
        <div className="text-center lg:text-start">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 font-english leading-tight tracking-tight drop-shadow-sm"
          >
            {t('heroTitle1')}<br />
            <span className="text-wiser-gold italic font-light">{t('heroTitleHighlight')}</span>{t('heroTitle2')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-wiser-sand max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed tracking-wide"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link 
              href="/projects"
              className="px-10 py-4 bg-wiser-gold text-white rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-wiser-dark-teal transition-all duration-500"
            >
              {t('ctaProject')}
            </Link>
            <Link 
              href="/contact"
              className="px-10 py-4 border border-wiser-sand/50 text-wiser-sand rounded-sm font-bold tracking-widest uppercase text-sm hover:border-wiser-gold hover:text-wiser-gold transition-all duration-500 backdrop-blur-sm"
            >
              {t('ctaContact')}
            </Link>
          </motion.div>
        </div>

        {/* Hero Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative w-80 h-[500px] border border-wiser-sand/20 rounded-t-full p-4">
            <div className="w-full h-full rounded-t-full overflow-hidden bg-wiser-dark-teal relative">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800")' }}
              />
            </div>
            
            {/* Minimalist accent dot */}
            <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-wiser-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
