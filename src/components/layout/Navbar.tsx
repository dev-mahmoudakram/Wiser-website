'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-wiser-dark-teal shadow-2xl border-b border-wiser-sand/10 py-4' : 'bg-transparent py-8 border-b border-white/5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 w-[40%] md:w-[25%]" onClick={() => setIsOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/wiser-logo.png" alt="Wiser Construction" className={`${scrolled || isOpen ? 'h-12 md:h-14' : 'h-14 md:h-16'} w-auto object-contain transition-all duration-500 filter brightness-0 invert`} />
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

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 w-[40%] md:w-[25%] justify-end">
          <div className="hidden md:block text-white">
            <LanguageSwitcher />
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-6 py-2 border border-wiser-gold text-wiser-gold rounded-sm font-bold tracking-widest uppercase text-base hover:bg-wiser-gold hover:text-white transition-colors"
          >
            {t('contact')}
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 md:hidden p-2 z-50 group relative"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white transition-colors group-hover:bg-wiser-gold"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-white transition-colors group-hover:bg-wiser-gold"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white transition-colors group-hover:bg-wiser-gold"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-wiser-dark-teal/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 px-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href as any}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl font-bold tracking-widest uppercase hover:text-wiser-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="pt-8 mt-8 border-t border-white/10 w-full flex flex-col items-center gap-6"
              >
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 border border-wiser-gold text-wiser-gold rounded-sm font-bold tracking-widest uppercase text-xl hover:bg-wiser-gold hover:text-white transition-colors"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
