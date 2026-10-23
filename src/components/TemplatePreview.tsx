'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { templateBySlug, templateTitle, type Template } from '@/data/templates';
import { planById } from '@/data/plans';
import { useApp } from '@/context/Providers';
import { cn, inr } from '@/lib/utils';

const money = (n: number) => (n >= 100000 ? `₹${(n / 100000).toFixed(n % 100000 ? 1 : 0)} lakh` : inr(n));

export function SitePreview({ t, device = 'desktop' }: { t: Template; device?: 'desktop' | 'mobile' }) {
  const mobile = device === 'mobile';
  const style = { '--p': t.primary, '--s': t.soft } as React.CSSProperties;
  return (
    <div style={style} className={cn('relative mx-auto w-full overflow-hidden rounded-[4px] bg-white text-[#27272A] shadow-soft transition-all', mobile && 'max-w-[375px]')} aria-label={`Sample ${templateTitle(t)} website`}>
      <div className="flex items-center justify-between px-5 py-3.5 font-heading font-bold" style={{ color: t.primary }}>
        <span>{t.brand}</span>
        {!mobile && <span className="flex gap-4 font-body text-xs font-medium text-slate-600"><span>Home</span><span>{t.sectionTitle.split(' ')[0]}</span><span>About</span><span>Contact</span></span>}
        <span className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style={{ background: t.primary }}>{t.cta.split(' ')[0]}</span>
      </div>

      <div className="px-5 py-10 text-center" style={{ background: `linear-gradient(135deg, ${t.soft}, #fff)` }}>
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full" style={{ background: t.primary }} aria-hidden />
        <h3 className="mb-2 text-2xl font-bold" style={{ color: t.primary }}>{t.tagline}</h3>
        <p className="mb-4 text-sm text-slate-600">{t.desc}</p>
        <span className="inline-block rounded-[10px] px-5 py-2.5 text-sm font-semibold text-white" style={{ background: t.primary }}>{t.cta}</span>
      </div>

      <ul className={cn('grid gap-2 px-5 py-3 text-center text-xs font-semibold', mobile ? 'grid-cols-2' : 'grid-cols-4')} style={{ background: t.soft, color: t.primary }}>
        <li>Business details</li><li>Services & products</li><li>Hours & location</li><li>Contact options</li>
      </ul>

      <div className="px-5 py-7">
        <h4 className="mb-4 text-center text-lg font-bold">{t.sectionTitle}</h4>
        <div className={cn('grid gap-3', mobile ? 'grid-cols-2' : 'grid-cols-4')}>
          {t.items.map(i => (
            <div key={i.name} className="rounded-[3px] border border-[#E7E5E4] p-3 text-center">
              <div className="mb-2 grid h-16 place-items-center rounded-lg" style={{ background: t.soft }} aria-hidden><span className="h-1.5 w-10 rounded-full" style={{ background: t.primary }} /></div>
              <b className="block text-sm leading-tight">{i.name}</b>
              <span className="text-sm font-bold" style={{ color: t.primary }}>{money(i.price)}</span>
              <span className="mt-2 block rounded-md py-1.5 text-xs font-semibold text-white" style={{ background: t.primary }}>{t.cta.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-2 px-5 pb-6">
        {t.includes.map(f => <li key={f} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: t.soft, color: t.primary }}>✓ {f}</li>)}
      </ul>

      <div className={cn('grid gap-3 px-5 pb-6', mobile ? 'grid-cols-1' : 'grid-cols-2')}>
        <div className="rounded-[3px] border border-[#E7E5E4] p-4 text-sm">
          <div className="mb-2 h-1.5 w-10 rounded-full" style={{ background: t.primary }} />
          <b className="block text-slate-800">About the business</b>
          <p className="mt-1 text-slate-500">Add your story, experience and the details customers need to know.</p>
        </div>
        <div className="rounded-[3px] border border-[#E7E5E4] p-4 text-sm">
          <div className="mb-2 h-1.5 w-10 rounded-full" style={{ background: t.primary }} />
          <b className="block text-slate-800">Helpful information</b>
          <p className="mt-1 text-slate-500">Show accurate business hours, location and contact details.</p>
        </div>
      </div>

      <div className={cn('grid gap-3 px-5 pb-6', mobile ? 'grid-cols-1' : 'grid-cols-[1.2fr_1fr]')}>
        <div className="grid h-28 place-items-center rounded-xl text-sm font-semibold text-slate-500" style={{ background: t.soft }}>Location map placeholder</div>
        <div className="text-sm"><b>Visit us</b><p className="text-slate-600">Your address, city<br />Open: 9:00 am – 9:00 pm<br />Phone: +91 00000 00000</p></div>
      </div>

      <div className="flex flex-wrap justify-between gap-2 px-5 py-4 text-xs text-white" style={{ background: t.primary }}>
        <span>© {t.brand}</span><span>Website by Urban Essential</span>
      </div>
      <span className="absolute bottom-3 right-3 rounded-full bg-wa px-3 py-1.5 text-xs font-bold text-ink shadow-soft">Contact on WhatsApp</span>
    </div>
  );
}

export function UseTemplateButton({ t, className, children }: { t: Template; className?: string; children?: ReactNode }) {
  const { openContact } = useApp();
  const { close } = useTemplatePreview();
  return (
    <button type="button" className={className ?? 'btn btn-primary'} onClick={() => { close(); openContact({ category: t.base, plan: t.plan, template: templateTitle(t) }); }}>
      {children ?? 'Use this template'}
    </button>
  );
}

type PreviewCtx = { open: (slug: string) => void; close: () => void };
const Ctx = createContext<PreviewCtx>({ open: () => {}, close: () => {} });
export const useTemplatePreview = () => useContext(Ctx);

export function TemplatePreviewProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const open = useCallback((s: string) => { lastFocus.current = document.activeElement as HTMLElement; setDevice('desktop'); setSlug(s); }, []);
  const close = useCallback(() => setSlug(null), []);
  const t = slug ? templateBySlug(slug) : undefined;

  useEffect(() => {
    if (!t) { lastFocus.current?.focus?.(); return; }
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [t, close]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      {t && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-3 backdrop-blur-sm" onMouseDown={e => e.target === e.currentTarget && close()}>
          <div role="dialog" aria-modal="true" aria-label={`${templateTitle(t)} preview`} className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-card border border-line bg-surface">
            <button ref={closeRef} type="button" aria-label="Close preview" onClick={close} className="absolute right-3.5 top-3.5 z-10 grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink hover:border-ink">✕</button>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-4 pl-6 pr-16">
              <div><b className="font-heading text-2xl font-normal tracking-[-0.03em]">{templateTitle(t)}</b><small className="block font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Sample site for {t.goodFor.toLowerCase()}</small></div>
              <div className="flex gap-1.5" role="group" aria-label="Device">
                {(['desktop', 'mobile'] as const).map(d => (
                  <button key={d} type="button" aria-pressed={device === d} onClick={() => setDevice(d)}
                    className={cn('rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition', device === d ? 'border-ink bg-ink text-canvas' : 'border-line text-muted hover:border-ink')}>
                    {d === 'desktop' ? 'Desktop' : 'Mobile'}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-auto bg-stone p-5"><SitePreview t={t} device={device} /></div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-4 text-sm font-light text-muted">
              <span><b className="font-semibold text-ink">Example features:</b> {t.includes.join(' · ')}</span>
              <span className="flex items-center gap-3">Suggested: <em className="font-heading italic text-rust">{planById(t.plan)?.name}</em><UseTemplateButton t={t} /></span>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
