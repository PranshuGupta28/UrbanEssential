'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useApp } from '@/context/Providers';
import { Logo } from './Logo';
import type { DictKey } from '@/i18n/dictionary';
import { cn } from '@/lib/utils';

const links: [DictKey, string][] = [
  ['nav.how', '/#how-it-works'], ['nav.business', '/#business'], ['nav.templates', '/#templates'],
  ['nav.dashboard', '/#dashboard'], ['nav.pricing', '/#pricing'], ['nav.audit', '/#audit'], ['nav.faq', '/#faq']
];

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useApp();
  return (
    <button
      type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'}
      className={cn('grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition hover:border-ink', className)}
    >
      {theme === 'dark' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
        </svg>
      )}
    </button>
  );
}

export function Header() {
  const { t, lang, setLang, openContact } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md', scrolled && 'shadow-micro')}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Urban Essential home" onClick={() => setOpen(false)}><Logo /></Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-[13.5px] font-semibold text-muted lg:flex">
          {links.map(([k, href]) => <Link key={k} href={href} className="transition hover:text-ink">{t(k)}</Link>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            type="button" aria-label="Switch language" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="rounded-full border border-line px-3.5 py-2 font-body text-xs font-semibold text-muted transition hover:border-ink hover:text-ink"
          >{lang === 'en' ? 'हिंदी' : 'English'}</button>
          <button type="button" className="btn btn-primary btn-sm !px-5" onClick={() => openContact({})}>{t('nav.cta')}</button>
        </div>

        <button
          type="button" aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav"
          className="flex flex-col gap-[5px] p-2 lg:hidden" onClick={() => setOpen(o => !o)}
        >
          <span className={cn('h-px w-6 bg-ink transition', open && 'translate-y-[6px] rotate-45')} />
          <span className={cn('h-px w-6 bg-ink transition', open && 'opacity-0')} />
          <span className={cn('h-px w-6 bg-ink transition', open && '-translate-y-[6px] -rotate-45')} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-canvas px-6 pb-6 pt-2 lg:hidden">
          {links.map(([k, href]) => (
            <Link key={k} href={href} className="block border-b border-line/60 py-3.5 text-[15px] font-semibold" onClick={() => setOpen(false)}>{t(k)}</Link>
          ))}
          <div className="mt-5 flex items-center gap-3">
            <ThemeToggle />
            <button type="button" className="btn btn-outline btn-sm" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>{lang === 'en' ? 'हिंदी' : 'English'}</button>
            <button type="button" className="btn btn-primary btn-sm flex-1" onClick={() => { setOpen(false); openContact({}); }}>{t('nav.cta')}</button>
          </div>
        </nav>
      )}
    </header>
  );
}
