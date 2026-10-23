'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { dictionary, type DictKey, type Lang } from '@/i18n/dictionary';

type Prefill = { category?: string; plan?: string; template?: string; msg?: string; n: number };
export type Theme = 'light' | 'dark';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
  prefill: Prefill;
  openContact: (p: Omit<Prefill, 'n'>) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const AppCtx = createContext<Ctx | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [prefill, setPrefill] = useState<Prefill>({ n: 0 });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('ue_lang');
    if (saved === 'hi' || saved === 'en') setLangState(saved);
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-hi', lang === 'hi');
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('ue_lang', l);
  }, []);

  const t = useCallback((k: DictKey) => dictionary[lang][k] ?? dictionary.en[k], [lang]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('ue_theme', next);
      return next;
    });
  }, []);

  const openContact = useCallback((p: Omit<Prefill, 'n'>) => {
    setPrefill({ ...p, n: Date.now() });
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else if (pathname !== '/contact') router.push('/contact');
  }, [pathname, router]);

  return <AppCtx.Provider value={{ lang, setLang, t, prefill, openContact, theme, toggleTheme }}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error('useApp must be used inside Providers');
  return c;
}
