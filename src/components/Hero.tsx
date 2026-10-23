'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useApp } from '@/context/Providers';
import { CountUp } from './ui';
import { inr } from '@/lib/utils';

const stats = [
  { to: 13, suffix: '+', label: 'Templates ready & coming' },
  { to: 3, suffix: '', label: 'Stages: Build · Manage · Grow' },
  { to: 7, suffix: '', label: 'Days to a typical launch' },
  { to: 0, suffix: '', label: 'Done-for-you service', text: 'DFY' }
];

function StorefrontArt() {
  return (
    <svg viewBox="0 0 400 380" className="h-full w-full" aria-hidden="true">
      {/* organic ground shapes */}
      <path d="M40 330 C40 250 90 210 160 205 C250 198 360 220 360 300 C360 350 300 380 200 380 C100 380 40 370 40 330Z" fill="#E9E3DA" />
      <circle cx="308" cy="96" r="46" fill="#C15B43" opacity="0.92" />
      <path d="M56 118 q40 -34 80 0" fill="none" stroke="#211D1B" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* storefront */}
      <g stroke="#211D1B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* awning */}
        <path d="M88 132 h224 v24 a18.7 18.7 0 0 1 -37.3 0 a18.7 18.7 0 0 1 -37.4 0 a18.7 18.7 0 0 1 -37.3 0 a18.7 18.7 0 0 1 -37.3 0 a18.7 18.7 0 0 1 -37.4 0 a18.7 18.7 0 0 1 -37.3 0 v-24 Z" fill="#211D1B" stroke="none" />
        {/* posts & base */}
        <path d="M108 196 v128 h184 V196" />
        {/* door */}
        <path d="M186 324 v-76 h50 v76" />
        {/* window */}
        <rect x="126" y="228" width="44" height="52" rx="2" />
        <path d="M126 254 h44" />
      </g>
      {/* sign */}
      <rect x="168" y="84" width="88" height="30" rx="2" fill="#F8F6F2" stroke="#211D1B" strokeWidth="3" />
      <text x="212" y="105" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="14" letterSpacing="2" fill="#211D1B">OPEN</text>
    </svg>
  );
}

export function Hero() {
  const { t } = useApp();
  const reduce = useReducedMotion();
  // A fixed sample value avoids implying that this demo is connected to live sales data.
  const sales = 24500;

  const float = (delay: number) => reduce ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 5, repeat: Infinity, delay, ease: 'easeInOut' } };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-x grid grid-cols-1 items-start gap-8 pt-6 md:pt-12 lg:grid-cols-12">
        {/* left column — 6 of 12 */}
        <div className="lg:col-span-6 lg:pb-24">
          <span className="tag">{t('hero.pill')}</span>
          <h1 className="mt-7 max-w-[12ch] text-[13.5vw] leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem] xl:text-[4.8rem]">
            {t('hero.title.a')}{' '}
            <em className="italic text-rust">{t('hero.title.b')}</em>
            {t('hero.title.c')}
          </h1>
          <p className="mt-7 max-w-md text-[17px] font-light leading-[1.65] text-muted">
            {t('hero.sub')} <span className="text-ink">{t('hero.sub2')}</span>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/#audit" className="btn btn-primary">{t('hero.cta1')}</Link>
            <Link href="/#templates" className="btn btn-ghost">{t('hero.cta2')} →</Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {(['hero.chip1', 'hero.chip2', 'hero.chip3', 'hero.chip4'] as const).map(k => (
              <li key={k} className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted"><span className="text-leaf" aria-hidden>✓ </span>{t(k)}</li>
            ))}
          </ul>
        </div>

        {/* right column — 6 of 12, portrait frame overlapping the baseline by 20px */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] translate-y-5 overflow-hidden rounded-[3px] bg-stone shadow-soft lg:max-w-none">
            <StorefrontArt />
            <motion.div {...float(0)} className="absolute left-5 top-6 rounded-[3px] border border-line bg-surface px-4 py-3 shadow-micro">
              <b className="block font-heading text-2xl leading-none tracking-[-0.03em]">{inr(sales)}</b>
              <small className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Today&apos;s sales · demo</small>
            </motion.div>
            <motion.div {...float(1.2)} className="absolute bottom-8 right-5 rounded-[3px] border border-line bg-surface px-4 py-3 shadow-micro">
              <b className="block font-heading text-2xl leading-none tracking-[-0.03em] text-leaf">+18%</b>
              <small className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">This month · demo</small>
            </motion.div>
            <motion.span {...float(2)} className="absolute bottom-24 left-6 rounded-full bg-ash px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#FAFAF9] shadow-soft">Demo order #UE1024</motion.span>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="container-x mt-6 lg:mt-10">
        <ul className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label} className={`px-5 py-7 md:py-9 ${i > 0 ? 'border-l border-line' : ''} ${i === 2 ? 'max-md:border-l-0 max-md:border-t max-md:border-line' : ''} ${i === 3 ? 'max-md:border-t max-md:border-line' : ''}`}>
              <b className="block font-heading text-4xl leading-none tracking-[-0.04em] md:text-5xl">{s.text ?? <CountUp to={s.to} suffix={s.suffix} />}</b>
              <small className="mt-2 block font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{s.label}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
