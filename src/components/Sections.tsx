'use client';

import { useState } from 'react';
import Link from 'next/link';
import { compare, faqs, features, journey, problems, serviceStyles, stages, whyCards } from '@/data/content';
import { Reveal, SectionHead } from './ui';
import { cn } from '@/lib/utils';
import { useApp } from '@/context/Providers';

export function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container-x">
        <SectionHead eyebrow="The problem" title={<>Great businesses. <em className="italic text-rust">Invisible</em> online.</>}
          sub={<>Hiring a developer is costly and confusing. Tools like Shopify, Wix or Zoho take time to learn. The owner just wants to say: <em>&ldquo;Make my business online and tell me how to grow.&rdquo;</em></>} />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <li key={p.title} className="group bg-surface p-7 transition duration-500 ease-editorial hover:-translate-y-0">
              <Reveal delay={i * 0.06} className="h-full">
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted">0{i + 1}</span>
                <div className="mb-4 mt-5 text-3xl" aria-hidden>{p.icon}</div>
                <h3 className="mb-2 text-[22px] leading-tight">{p.title}</h3>
                <p className="text-sm font-light text-muted">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-heading text-2xl italic tracking-[-0.02em]">Urban Essential fixes all of it — in one place.</p>
      </div>
    </section>
  );
}

export function BuildManageGrow() {
  return (
    <section id="how-it-works" className="section bg-stone">
      <div className="container-x">
        <SectionHead eyebrow="Our solution" title={<>Build. Manage. <em className="italic text-rust">Grow.</em></>} sub="Each stage builds on the one before it. Start where you are. We grow with you." />

        <div className="overflow-hidden rounded-card bg-ash text-[#D6D3D1] shadow-soft">
          <ul className="grid md:grid-cols-3 md:divide-x md:divide-[#44403C]">
            {stages.map((s, i) => (
              <li key={s.key} className="relative p-8 md:p-10">
                <span aria-hidden className="pointer-events-none absolute right-6 top-4 font-heading text-[96px] italic leading-none text-[#FAFAF9] opacity-[0.07]">{s.n}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-rust">Stage {s.n}</span>
                <h3 className="mt-3 text-3xl tracking-[-0.03em] text-[#FAFAF9]">{s.title}</h3>
                <p className="mb-6 mt-1 font-light text-[#A8A29E]">{s.goal}</p>
                <ul>{s.points.map(p => <li key={p} className="border-t border-[#44403C]/70 py-2.5 text-sm font-light"><span className="mr-2 text-rust" aria-hidden>—</span>{p}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mb-8 mt-20 text-2xl tracking-[-0.03em] md:text-3xl">How it works for you</h3>
        <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {journey.map((j, i) => (
            <li key={j.t} className="bg-surface p-5">
              <span className="font-heading text-2xl italic text-rust">{i + 1}.</span>
              <b className="mt-1 block text-sm font-medium">{j.t}</b>
              <small className="mt-0.5 block text-xs font-light text-muted">{j.s}</small>
            </li>
          ))}
        </ol>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {serviceStyles.map(s => (
            <li key={s.t} className={cn('bg-surface p-8 text-center transition duration-500 ease-editorial', s.hot && 'bg-stone')}>
              <span className="text-3xl" aria-hidden>{s.icon}</span>
              <b className="my-2 block font-heading text-2xl font-normal tracking-[-0.02em]">{s.t}</b>
              {s.hot && <span className="tag !bg-rust/10 !text-rust">Most popular</span>}
              <small className="mt-2 block font-light text-muted">{s.s}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FeatureMap() {
  return (
    <section id="features" className="section">
      <div className="container-x">
        <SectionHead eyebrow="Everything included" title={<>One platform instead of <em className="italic text-rust">five tools</em></>} />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map(([icon, t, s, tag]) => (
            <li key={t} className="bg-surface p-5 transition duration-500 ease-editorial hover:bg-stone">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xl" aria-hidden>{icon}</span>
                {tag && <span className="tag !text-rust">{tag}</span>}
              </div>
              <b className="block text-[15px] font-medium">{t}</b>
              <small className="font-light text-muted">{s}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="section bg-stone">
      <div className="container-x">
        <SectionHead eyebrow="Why us" title={<>Software and service, <em className="italic text-rust">together</em></>} sub="We do not need to beat big software. We make your life easier than juggling five different tools." />
        <div className="overflow-x-auto rounded-card border border-line shadow-micro">
          <table className="w-full min-w-[640px] border-collapse bg-surface text-center text-sm">
            <caption className="sr-only">Comparison of Urban Essential with other options</caption>
            <thead><tr className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
              <th scope="col" className="border-b border-line p-4 text-left"><span className="sr-only">Option</span></th>
              {compare.cols.map(c => <th key={c} scope="col" className="border-b border-line p-4 font-normal">{c}</th>)}
            </tr></thead>
            <tbody>
              {compare.rows.map(r => (
                <tr key={r[0]} className={cn('border-t border-line font-light', r[0] === 'Urban Essential' && 'bg-rust/[0.06] font-normal')}>
                  <th scope="row" className={cn('p-4 text-left font-normal', r[0] === 'Urban Essential' && 'font-heading text-base italic text-rust')}>{r[0]}</th>
                  {r.slice(1).map((c, i) => <td key={i} className="p-4">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {whyCards.map(c => <li key={c.t} className="bg-surface p-7"><div className="mb-3 text-2xl" aria-hidden>{c.icon}</div><h3 className="mb-1 text-xl">{c.t}</h3><p className="text-sm font-light text-muted">{c.s}</p></li>)}
        </ul>
      </div>
    </section>
  );
}

export function Proof() {
  const { openContact } = useApp();
  return (
    <section id="proof" className="section">
      <div className="container-x">
        <SectionHead center eyebrow="Real results" title={<>Real businesses. <em className="italic text-rust">Real numbers.</em></>} sub="We only show real results from real customers. Yours could be the first." />
        <div className="mx-auto max-w-2xl rounded-card border border-dashed border-rust/50 bg-stone p-10 text-center md:p-14">
          <span className="tag !bg-rust/10 !text-rust">Pilot program</span>
          <h3 className="mb-3 mt-5 text-3xl tracking-[-0.03em] md:text-4xl">Be one of our first <em className="italic">10 businesses</em></h3>
          <p className="mx-auto mb-7 max-w-md font-light text-muted">Join early, get hands-on help and special pricing. In return, we share your before and after story — with your permission.</p>
          <button type="button" className="btn btn-primary" onClick={() => openContact({ msg: 'I would like to join the pilot program.' })}>Apply for the pilot</button>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-stone">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">Questions</span>
            <h2 className="mt-3 text-4xl tracking-[-0.04em] md:text-5xl">Frequently <em className="italic text-rust">asked</em></h2>
            <p className="mt-4 max-w-xs font-light text-muted">Still have a question? <Link href="/contact" className="text-rust underline decoration-line underline-offset-4 hover:decoration-rust">Ask us on WhatsApp</Link>.</p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={f.q} className="border-t border-line last:border-b">
                <h3>
                  <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-baseline justify-between gap-4 py-5 text-left">
                    <span className="font-heading text-xl tracking-[-0.02em] md:text-[22px]">{f.q}</span>
                    <span aria-hidden className="font-heading text-2xl text-rust">{open === i ? '–' : '+'}</span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" hidden={open !== i} className="max-w-2xl pb-6 font-light text-muted">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
