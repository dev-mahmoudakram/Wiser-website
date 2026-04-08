'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex items-center gap-2 px-4 py-2 rounded-sm border border-white/20 hover:border-wiser-gold hover:text-wiser-gold transition-colors text-xs font-bold tracking-widest disabled:opacity-50"
      aria-label="Toggle language"
    >
      <span className={locale === 'en' ? 'text-white font-black' : 'text-white/50'}>EN</span>
      <span className="w-[1px] h-4 bg-white/20"></span>
      <span className={locale === 'ar' ? 'text-white font-black' : 'text-white/50'}>عربي</span>
    </button>
  );
}
