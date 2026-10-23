import { PageHero } from './PageHero';
import { site } from '@/config/site';

export function Legal({ title, items }: { title: string; items: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="mb-10 rounded-card border border-dashed border-rust/50 bg-stone p-4 text-sm font-light">This is a plain-language starting draft. Have a lawyer review it before launch.</p>
          {items.map(i => <div key={i.h} className="mb-8 border-t border-line pt-6"><h2 className="mb-2 text-2xl tracking-[-0.03em]">{i.h}</h2><p className="font-light text-muted">{i.p}</p></div>)}
          <p className="text-sm text-muted">Questions? Write to {site.email}.</p>
        </div>
      </section>
    </>
  );
}
