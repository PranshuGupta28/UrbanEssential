import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { templateBySlug, templates, templateTitle } from '@/data/templates';
import { planById } from '@/data/plans';
import { SitePreview } from '@/components/TemplatePreview';
import { TemplateActions } from '@/components/TemplateActions';
import { inr } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return templates.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = templateBySlug(slug);
  if (!t) return {};
  return {
    title: `${templateTitle(t)} Website Template`,
    description: `${t.desc} Good for ${t.goodFor.toLowerCase()}. Includes ${t.includes.join(', ').toLowerCase()}.`,
    alternates: { canonical: `/templates/${t.slug}` }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const t = templateBySlug(slug);
  if (!t) notFound();
  const plan = planById(t.plan)!;

  return (
    <>
      <div className="border-b border-line py-14 md:py-20">
        <div className="container-x">
          <Link href="/templates" className="font-mono text-[11px] uppercase tracking-[0.08em] text-rust">← All templates</Link>
          <h1 className="mb-3 mt-4 text-5xl tracking-[-0.04em] md:text-6xl">{templateTitle(t)}</h1>
          <p className="max-w-2xl text-[17px] font-light leading-[1.65] text-muted">{t.desc}</p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Good for: <span className="normal-case tracking-normal text-ink">{t.goodFor}</span></p>
        </div>
      </div>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-card bg-stone p-4 md:p-6"><SitePreview t={t} /></div>
          <aside className="space-y-6">
            <div className="card">
              <h2 className="mb-4 text-2xl tracking-[-0.03em]">What is included</h2>
              <ul className="space-y-2">{t.includes.map(f => <li key={f} className="flex gap-2.5 text-sm font-light"><span className="text-rust" aria-hidden>—</span>{f}</li>)}</ul>
            </div>
            <div className="card">
              <h2 className="mb-2 text-2xl tracking-[-0.03em]">Suggested plan</h2>
              <p className="font-heading text-xl italic text-rust">{plan.name}</p>
              <p className="mt-1 text-sm font-light text-muted">{inr(plan.setup)} setup + {inr(plan.monthly)}/month. Final quote after a free consultation.</p>
              <TemplateActions slug={t.slug} />
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container-x max-w-3xl">
          <h2 className="mb-8 text-3xl tracking-[-0.03em] md:text-4xl">Questions about this template</h2>
          {t.faqs.map(f => (
            <details key={f.q} className="group border-t border-line py-5 last:border-b">
              <summary className="cursor-pointer font-heading text-xl tracking-[-0.02em] marker:text-rust">{f.q}</summary>
              <p className="mt-3 font-light text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
