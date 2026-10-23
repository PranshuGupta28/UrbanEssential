'use client';

import { useState } from 'react';
import { businesses } from '@/data/businesses';
import { templateBySlug, templateTitle } from '@/data/templates';
import { useApp } from '@/context/Providers';
import { SectionHead } from './ui';
import { cn } from '@/lib/utils';
import { useTemplatePreview } from './TemplatePreview';

export function BusinessPicker() {
  const { t, openContact } = useApp();
  const [id, setId] = useState('retail');
  const { open } = useTemplatePreview();
  const b = businesses.find(x => x.id === id)!;
  const tpl = b.templateSlug ? templateBySlug(b.templateSlug) : undefined;

  return (
    <section id="business" className="section bg-stone">
      <div className="container-x">
        <SectionHead eyebrow="Made for you" title={t('picker.title')} sub={t('picker.sub')} />
        <div role="tablist" aria-label="Business type" className="mb-10 flex flex-wrap gap-2">
          {businesses.map(x => (
            <button
              key={x.id} type="button" role="tab" aria-selected={x.id === id} onClick={() => setId(x.id)}
              className={cn('flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-normal transition duration-300 ease-editorial',
                x.id === id ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface text-ink hover:border-ink')}
            >
              <span aria-hidden>{x.icon}</span>{x.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="grid gap-0 overflow-hidden rounded-card border border-line bg-surface shadow-micro md:grid-cols-[1.3fr_1fr]">
          <div className="p-8 md:p-12">
            <span className="eyebrow">Recommended for {b.label.toLowerCase()}</span>
            <h3 className="mb-3 mt-3 text-3xl tracking-[-0.03em] md:text-4xl">{b.headline}</h3>
            <p className="max-w-lg font-light text-muted">{b.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">{b.chips.map(c => <li key={c} className="tag">{c}</li>)}</ul>
          </div>
          <div className="flex flex-col justify-center border-t border-line bg-stone p-8 md:border-l md:border-t-0 md:p-10">
            <small className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Urban Essential solution</small>
            <h4 className="mt-2 font-heading text-3xl tracking-[-0.03em]">{b.recommend}</h4>
            <p className="mb-6 mt-1 font-heading text-lg italic text-rust">{tpl ? templateTitle(tpl) : 'Custom build'}</p>
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="btn btn-primary btn-sm" onClick={() => openContact({ category: b.category, plan: b.plan, template: tpl ? templateTitle(tpl) : '' })}>Get this for my business</button>
              {tpl && <button type="button" className="btn btn-ghost text-sm" onClick={() => open(tpl.slug)}>Preview →</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
