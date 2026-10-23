'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { auditAreas } from '@/data/content';
import { categoryOptions } from '@/data/businesses';
import { planById } from '@/data/plans';
import { useApp } from '@/context/Providers';
import { inr } from '@/lib/utils';

const checks = [
  ['google', 'Listed on Google Maps'], ['reviews', '20+ Google reviews'], ['whatsapp', 'I use WhatsApp Business'],
  ['online', 'I sell or take bookings online'], ['digital', 'I track orders digitally (not a notebook)'], ['post', 'I post on social media weekly']
] as const;

type Result = { name: string; city: string; category: string; total: number; scores: Record<string, number>; tips: string[]; plan: string };

const clamp = (n: number) => Math.max(5, Math.min(97, Math.round(n)));
const color = (s: number) => (s < 40 ? '#E2725B' : s < 70 ? '#F59E0B' : '#16A34A');

function score(f: FormData): Result {
  const g = (k: string) => f.get(k) === 'on';
  const v = (k: string) => String(f.get(k) ?? '').trim();
  const site = !!v('website'), ig = !!v('insta');
  const scores: Record<string, number> = {
    'Website': clamp((site ? 55 : 8) + (g('online') ? 12 : 0) + (g('digital') ? 8 : 0)),
    'Google presence': clamp((g('google') ? 52 : 12) + (g('reviews') ? 32 : 0) + (site ? 6 : 0)),
    'Social media': clamp((ig ? 38 : 10) + (g('post') ? 40 : 0) + (g('whatsapp') ? 10 : 0)),
    'SEO': clamp((site ? 30 : 6) + (g('google') ? 14 : 0) + (g('reviews') ? 12 : 0) + (g('post') ? 6 : 0)),
    'Customer experience': clamp(20 + (g('whatsapp') ? 28 : 0) + (g('digital') ? 24 : 0) + (g('online') ? 12 : 0) + (site ? 8 : 0)),
    'Online sales': clamp((g('online') ? 45 : 6) + (site ? 20 : 0) + (g('digital') ? 12 : 0))
  };
  const total = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6);
  const tips: string[] = [];
  if (!site) tips.push('Launch a professional website so new customers can find you');
  if (!g('google')) tips.push('Set up your Google Business Profile and Maps listing');
  else if (!g('reviews')) tips.push('Collect 20+ Google reviews with a QR code at your counter');
  if (!g('whatsapp')) tips.push('Switch to WhatsApp Business with a catalogue and auto-replies');
  if (!g('online')) tips.push('Start taking orders or bookings online');
  if (!g('digital')) tips.push('Move your notebook records into a simple dashboard');
  if (!g('post')) tips.push('Post on social media every week with a simple content calendar');
  return { name: v('name'), city: v('city'), category: v('category'), total, scores, tips: tips.slice(0, 4), plan: total < 35 ? 'starter' : total < 60 ? 'business' : 'growth' };
}

export function Audit() {
  const { openContact } = useApp();
  const [res, setRes] = useState<Result | null>(null);
  const [ring, setRing] = useState(0);
  const [bars, setBars] = useState(false);

  useEffect(() => {
    if (!res) return;
    setRing(0); setBars(false);
    const b = setTimeout(() => setBars(true), 60);
    const id = setInterval(() => setRing(r => { const n = Math.min(res.total, r + 2); if (n >= res.total) clearInterval(id); return n; }), 18);
    return () => { clearTimeout(b); clearInterval(id); };
  }, [res]);

  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setRes(score(new FormData(e.currentTarget))); };
  const plan = res ? planById(res.plan)! : null;
  const label = res ? (res.total < 40 ? 'Just getting started' : res.total < 70 ? 'Good base, big room to grow' : 'Strong. Time to scale') : '';

  return (
    <section id="audit" className="section bg-ash text-[#D6D3D1]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="eyebrow">Free · 60 seconds</span>
          <h2 className="mb-4 mt-3 text-4xl tracking-[-0.04em] text-[#FAFAF9] md:text-5xl">Get your Business <em className="italic text-rust">Digital Score</em></h2>
          <p className="max-w-md font-light text-[#A8A29E]">Find out how visible your business is online, and what to fix first. No payment, no obligation.</p>
          <ul className="mt-8 space-y-4">
            {['Score out of 100 across 6 areas', 'Clear next steps', 'Recommended Urban Essential plan'].map((t, i) => (
              <li key={t} className="flex items-center gap-4 font-light"><span aria-hidden className="font-heading text-2xl italic text-rust">0{i + 1}</span>{t}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-line bg-surface p-7 text-ink shadow-soft md:p-8">
          {!res ? (
            <form onSubmit={submit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div><label className="label" htmlFor="a-name">Business name</label><input id="a-name" name="name" required className="input" placeholder="e.g. Sharma Footwear" /></div>
                <div><label className="label" htmlFor="a-city">City</label><input id="a-city" name="city" required className="input" placeholder="e.g. Pune" /></div>
              </div>
              <div className="mt-3"><label className="label" htmlFor="a-cat">Business type</label>
                <select id="a-cat" name="category" className="input">{categoryOptions.map(c => <option key={c}>{c}</option>)}</select></div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div><label className="label" htmlFor="a-web">Website (if any)</label><input id="a-web" name="website" className="input" placeholder="www.example.com" /></div>
                <div><label className="label" htmlFor="a-ig">Instagram (if any)</label><input id="a-ig" name="insta" className="input" placeholder="@yourbusiness" /></div>
              </div>
              <fieldset className="my-5 grid gap-1 sm:grid-cols-2">
                <legend className="sr-only">About your business</legend>
                {checks.map(([k, l]) => <label key={k} className="flex items-center gap-2.5 py-1 text-sm font-light"><input type="checkbox" name={k} className="h-4 w-4 accent-[#C2593E]" />{l}</label>)}
              </fieldset>
              <button className="btn btn-primary w-full">Calculate my score</button>
            </form>
          ) : (
            <div className="text-center" aria-live="polite">
              <h3 className="font-heading text-2xl tracking-[-0.02em]">{res.name} · {res.city}</h3>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{res.category}</p>
              <div className="mx-auto mb-2 grid h-36 w-36 place-items-center rounded-full" style={{ background: `conic-gradient(${color(res.total)} ${ring}%, rgb(var(--line)) 0)` }}>
                <div className="grid h-[112px] w-[112px] place-items-center rounded-full bg-surface font-heading text-5xl tracking-[-0.04em]">{ring}</div>
              </div>
              <small className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">out of 100 · {label}</small>
              <div className="my-6 space-y-3">
                {auditAreas.map(a => (
                  <div key={a} className="flex items-center gap-3 text-sm">
                    <span className="w-36 text-left font-normal">{a}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line"><i className="block h-full rounded-full transition-[width] duration-1000" style={{ width: bars ? `${res.scores[a]}%` : 0, background: color(res.scores[a]) }} /></div>
                    <b className="w-10 text-right font-mono text-xs">{res.scores[a]}</b>
                  </div>
                ))}
              </div>
              <ul className="mb-5 space-y-1.5 rounded-card bg-stone p-5 text-left text-sm font-light">
                {(res.tips.length ? res.tips : ['Great work. Next: AI insights, loyalty and marketing automation']).map(t => <li key={t}><span className="text-rust" aria-hidden>→ </span>{t}</li>)}
              </ul>
              <p className="mb-4 text-sm font-light">Recommended: <b className="font-heading text-lg italic text-rust">{plan!.name}</b> · {inr(plan!.setup)} + {inr(plan!.monthly)}/month</p>
              <button type="button" className="btn btn-primary w-full" onClick={() => openContact({ plan: res.plan, msg: `My Digital Score is ${res.total}/100 for ${res.name} (${res.city}). Please share an improvement plan.` })}>Get my improvement plan</button>
              <button type="button" className="btn btn-ghost mt-4" onClick={() => setRes(null)}>Check another business</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
