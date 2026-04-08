'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface PageHeroProps {
  title: string;
  breadcrumbLabel: string;
  backgroundImage: string;
  locale: string;
  isAr: boolean;
}

export default function PageHero({
  title,
  breadcrumbLabel,
  backgroundImage,
  locale,
  isAr
}: PageHeroProps) {
  const homeLabel = isAr ? 'الرئيسية' : 'Home';

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Moody Overlays */}
        <div className="absolute inset-0 bg-wiser-dark-teal/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-wiser-dark-teal/40 via-transparent to-wiser-dark-teal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 pt-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg font-english uppercase">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center gap-3 text-white/90 font-medium text-lg md:text-xl drop-shadow-md">
          <Link 
            href="/" 
            className="hover:text-wiser-gold transition-colors duration-300"
          >
            {homeLabel}
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-semibold">
            {breadcrumbLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
