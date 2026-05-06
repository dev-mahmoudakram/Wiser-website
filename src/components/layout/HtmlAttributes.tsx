'use client';

import { useEffect } from 'react';

interface Props {
  locale: string;
  dir: 'ltr' | 'rtl';
  activeFont: 'font-arabic' | 'font-english';
}

export default function HtmlAttributes({ locale, dir, activeFont }: Props) {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', locale);
    html.setAttribute('dir', dir);
    html.classList.remove('font-arabic', 'font-english');
    html.classList.add(activeFont);
  }, [locale, dir, activeFont]);

  return null;
}
