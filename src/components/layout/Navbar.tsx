'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/services', label: t('services') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-wiser-dark-teal shadow-2xl border-b border-wiser-sand/10 py-4' : 'bg-transparent py-8 border-b border-white/5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Always white on dark header */}
        <Link href="/" className="flex items-center gap-2 w-[25%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/wiser-logo.png" alt="Wiser Construction" className={`${scrolled ? 'h-14' : 'h-16'} w-auto object-contain transition-all duration-500 filter brightness-0 invert`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 w-[50%] justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="text-white hover:text-wiser-gold font-medium text-base tracking-widest uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 w-[25%] justify-end">
          <div className="text-white">
            <LanguageSwitcher />
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-6 py-2 border border-wiser-gold text-wiser-gold rounded-sm font-bold tracking-widest uppercase text-base hover:bg-wiser-gold hover:text-white transition-colors"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}
