'use client';

import { useMemo, useState } from 'react';
import { addons, plans, planById, type PlanId } from '@/data/plans';
import { useApp } from '@/context/Providers';
import { SectionHead, Reveal } from './ui';
import { cn, inr } from '@/lib/utils';

export function Pricing() {
  const { openContact } = useApp();
  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <SectionHead eyebrow="Simple pricing" title={<>Pick the help <em className="italic text-rust">you need</em></>} sub="One-time setup plus a small monthly fee. These are starting prices. Your final quote depends on your needs." />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <li key={p.id} className={cn('relative bg-surface p-8 transition duration-500 ease-editorial hover:bg-stone', p.popular && 'bg-stone')}>
              <Reveal delay={i * 0.06} className="flex h-full flex-col">
                {p.popular && <span className="tag !mb-4 !self-start !bg-rust/10 !text-rust">Most popular</span>}
                <h3 className="text-2xl tracking-[-0.03em]">{p.name}</h3>
                <p className="mb-6 mt-1.5 min-h-[42px] text-sm font-light text-muted">{p.quote}</p>
                <div className="font-heading text-4xl tracking-[-0.04em]">{p.id === 'custom' ? 'From ₹1.5L' : inr(p.setup)}
                  <small className="mt-1 block font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">one-time setup · {p.setupRange}</small></div>
                <p className="my-4 font-heading text-lg italic text-rust">+ {p.id === 'custom' ? p.monthlyRange : inr(p.monthly)}/month</p>
                <ul className="mb-7 flex-1 border-t border-line pt-4">{p.features.map(f => <li key={f} className="border-b border-line/60 py-2 text-sm font-light last:border-0"><span className="mr-2 text-rust" aria-hidden>—</span>{f}</li>)}</ul>
                <button type="button" className={cn('btn w-full', p.popular ? 'btn-primary' : 'btn-outline')} onClick={() => openContact({ plan: p.id })}>Choose {p.name.replace('Digital ', '')}</button>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-light text-muted">
          Third-party charges (domain, payment-gateway fees, WhatsApp API, AI usage, SMS or email, ad budget) are billed separately and shown clearly. We never promise &ldquo;10x sales&rdquo; or &ldquo;#1 on Google&rdquo;. We promise a clear process and numbers you can measure.
        </p>
        <QuoteCalculator />
      </div>
    </section>
  );
}

export function QuoteCalculator() {
  const { openContact } = useApp();
  const [planId, setPlanId] = useState<PlanId>('business');
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const plan = planById(planId)!;

  const { setup, monthly, names } = useMemo(() => {
    let s = plan.setup, m = plan.monthly; const n: string[] = [];
    picked.forEach(i => { s += addons[i].setup; m += addons[i].monthly; n.push(addons[i].name); });
    return { setup: s, monthly: m, names: n };
  }, [plan, picked]);

  const toggle = (i: number) => setPicked(p => { const x = new Set(p); x.has(i) ? x.delete(i) : x.add(i); return x; });
  const plus = planId === 'custom' ? '+' : '';

  return (
    <div className="mt-20 grid overflow-hidden rounded-card border border-line shadow-micro lg:grid-cols-[1.4fr_1fr]">
      <div className="bg-surface p-8 md:p-10">
        <h3 className="text-3xl tracking-[-0.03em]">Build your own <em className="italic text-rust">quote</em></h3>
        <p className="mb-6 mt-2 font-light text-muted">Choose a base plan and add-ons for an instant estimate.</p>
        <label className="label" htmlFor="calc-plan">Base plan</label>
        <select id="calc-plan" className="input" value={planId} onChange={e => setPlanId(e.target.value as PlanId)}>
          {plans.map(p => <option key={p.id} value={p.id}>{p.name} · {inr(p.setup)} + {inr(p.monthly)}/mo</option>)}
        </select>
        <fieldset className="mt-6">
          <legend className="label mb-3">Add-ons</legend>
          <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {addons.map((a, i) => (
              <label key={a.name} className={cn('flex cursor-pointer items-center gap-3 bg-surface px-4 py-3 text-sm font-light transition hover:bg-stone', picked.has(i) && 'bg-stone')}>
                <input type="checkbox" checked={picked.has(i)} onChange={() => toggle(i)} className="h-4 w-4 accent-[#C2593E]" />
                <span className="flex-1">{a.name}</span>
                <b className="font-mono text-[11px] text-rust">{a.setup ? inr(a.setup) : `${inr(a.monthly)}/mo`}</b>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-ash p-8 text-center text-[#FAFAF9] md:p-10" aria-live="polite">
        <small className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#A8A29E]">Estimated cost</small>
        <div className="font-heading text-5xl tracking-[-0.04em]">{inr(setup)}{plus}</div>
        <small className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#A8A29E]">one-time setup</small>
        <div className="mt-4 font-heading text-3xl tracking-[-0.03em] text-rust">{inr(monthly)}{plus}</div>
        <small className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#A8A29E]">per month</small>
        <button type="button" className="btn mt-6 bg-[#FAFAF9] text-ash hover:bg-stone"
          onClick={() => openContact({ plan: planId, msg: `I would like a quote for ${plan.name}${names.length ? ' with add-ons: ' + names.join(', ') : ''}. Estimate: ${inr(setup)} setup + ${inr(monthly)}/month.` })}>Request this quote</button>
        <small className="mt-3 font-light text-[#A8A29E]">Indicative only. Final price is confirmed after a free consultation.</small>
      </div>
    </div>
  );
}
