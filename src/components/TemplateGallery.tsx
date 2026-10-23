'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { comingSoon, groups, templates, templateTitle } from '@/data/templates';
import { SectionHead, Reveal } from './ui';
import { cn } from '@/lib/utils';
import { useTemplatePreview } from './TemplatePreview';

const templateOrder = [
  'kirana-grocery', 'fashion-boutique', 'footwear-store', 'mobile-electronics',
  'restaurant-cafe', 'salon-spa', 'gym-fitness', 'home-services',
  'clinic-wellness', 'coaching-preschool'
];

export function TemplateGallery({ standalone = false }: { standalone?: boolean }) {
  const [group, setGroup] = useState<(typeof groups)[number]>('All');
  const { open } = useTemplatePreview();
  const orderedTemplates = useMemo(() => [...templates].sort((a, b) => templateOrder.indexOf(a.slug) - templateOrder.indexOf(b.slug)), []);
  const list = orderedTemplates.filter(t => group === 'All' || t.group === group);

  return (
    <section id="templates" className="section">
      <div className="container-x">
        <SectionHead eyebrow="Template library" title="Ready-made templates for every local business"
          sub="Choose a design that fits your business. We'll customize it with your logo, colours, products and prices." />

        <div className="mb-8 flex flex-wrap gap-2 md:mb-10" role="group" aria-label="Filter templates">
          {groups.map(g => (
            <button key={g} type="button" aria-pressed={g === group} onClick={() => setGroup(g)}
              className={cn('min-h-10 rounded-full border px-4 py-2 font-body text-xs font-semibold transition duration-200', g === group ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface text-muted hover:border-ink hover:text-ink')}>
              {g}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm text-muted" aria-live="polite">Showing {list.length} {list.length === 1 ? 'template' : 'templates'}{group !== 'All' ? ` in ${group}` : ''}</p>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((t, i) => (
            <li key={t.slug} className="min-w-0">
              <Reveal delay={(i % 3) * 0.04} className="h-full">
                <article className="template-card group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-[#D4C9BC] hover:shadow-soft">
                  <button type="button" onClick={() => open(t.slug)} aria-label={`Preview ${templateTitle(t)}`} className="template-preview block w-full text-left focus-visible:outline-offset-[-4px]">
                    <div className="relative aspect-video overflow-hidden bg-stone">
                      <img src={`/template-previews/${t.slug}.svg`} alt={`Representative ${t.base} website design preview for ${t.goodFor}`} loading={i < 3 ? 'eager' : 'lazy'} decoding="async" width="1200" height="675" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" onError={event => { if (!event.currentTarget.src.endsWith('/fallback.svg')) event.currentTarget.src = '/template-previews/fallback.svg'; }} />
                      <span className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#514A45]">Design preview</span>
                    </div>
                  </button>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex max-w-full items-center rounded-full border border-line bg-canvas px-3 py-1 text-[11px] font-medium text-muted">{t.group}</span>
                      <span className="shrink-0 text-[11px] font-medium text-muted">{String(i + 1).padStart(2, '0')} / 10</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold leading-snug tracking-[-0.025em] text-ink sm:text-[22px]">{templateTitle(t)}</h3>
                    <p className="mt-3 text-xs leading-5 text-muted"><span className="font-semibold text-ink">Good for: </span>{t.goodFor}</p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">{t.desc}</p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                      <button type="button" onClick={() => open(t.slug)} className="inline-flex min-h-10 items-center rounded-full bg-rust px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#A84C38] focus-visible:outline-offset-2">Preview</button>
                      <Link href={`/templates/${t.slug}`} className="inline-flex min-h-10 items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-ink transition hover:bg-stone focus-visible:outline-offset-2">Details <span aria-hidden>↗</span></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-t border-line pt-8">
          <p className="eyebrow mb-4">More template styles coming soon</p>
          <ul className="flex flex-wrap gap-2">
            {comingSoon.map(c => <li key={c.name} className="rounded-full border border-line bg-surface px-3 py-2 text-xs font-medium text-muted"><span aria-hidden className="mr-1.5">{c.icon}</span>{c.name} <span className="text-muted/80">· {c.style}</span></li>)}
          </ul>
          <p className="mt-8 text-sm text-muted">Do not see your business? <Link href="/contact" className="font-semibold text-rust underline decoration-line underline-offset-4 hover:decoration-rust">Tell us what you need</Link>.</p>
          {!standalone && <Link href="/templates" className="btn btn-outline mt-6">See all templates</Link>}
        </div>
      </div>
    </section>
  );
}
