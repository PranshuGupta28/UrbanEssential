'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { aiQA, dashboard } from '@/data/content';
import { SectionHead } from './ui';
import { cn } from '@/lib/utils';

type Msg = { from: 'bot' | 'user'; text: string };

function answer(text: string) {
  const low = text.toLowerCase();
  const exact = aiQA.find(x => x.q.toLowerCase() === low);
  if (exact) return exact.a;
  const best = aiQA.map(x => [x, x.k.filter(k => low.includes(k)).length] as const).sort((a, b) => b[1] - a[1])[0];
  return best[1] > 0 ? best[0].a : 'In the full product I answer from your real data. For this demo, try one of the suggested questions above.';
}

export function DashboardDemo() {
  const [range, setRange] = useState<'today' | 'month'>('today');
  const [grown, setGrown] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: 'Hi! I am your business assistant. Ask me about your sales, customers or stock.' }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => { setGrown(false); const id = setTimeout(() => setGrown(true), 60); return () => clearTimeout(id); }, [range]);
  useEffect(() => { body.current?.scrollTo({ top: body.current.scrollHeight, behavior: 'smooth' }); }, [msgs, typing]);

  const ask = (q: string) => {
    if (typing) return;
    setMsgs(m => [...m, { from: 'user', text: q }]); setTyping(true);
    setTimeout(() => { setMsgs(m => [...m, { from: 'bot', text: answer(q) }]); setTyping(false); }, 700);
  };
  const submit = (e: FormEvent) => { e.preventDefault(); const v = input.trim(); if (v) { ask(v); setInput(''); } };

  return (
    <section id="dashboard" className="section bg-ash text-[#D6D3D1]">
      <div className="container-x">
        <SectionHead light eyebrow="Dashboard & AI helper" title={<>Your whole business on <em className="italic text-rust">one screen</em></>}
          sub="A normal dashboard only shows numbers. Ours explains them and says what to do next. Try this live demo." />
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-card border border-line bg-surface p-6 text-ink">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <b className="font-heading text-xl font-normal tracking-[-0.02em]">Sharma Footwear <span className="ml-2 align-middle font-mono text-[10px] uppercase tracking-[0.08em] text-rust">Demo</span></b>
              <div className="flex gap-1" role="group" aria-label="Date range">
                {(['today', 'month'] as const).map(r => (
                  <button key={r} type="button" aria-pressed={range === r} onClick={() => setRange(r)}
                    className={cn('rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition', range === r ? 'border-ink bg-ink text-canvas' : 'border-line text-muted hover:border-ink')}>{r === 'today' ? 'Today' : 'This month'}</button>
                ))}
              </div>
            </div>
            <ul className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-5">
              {dashboard[range].map(k => (
                <li key={k[0]} className="bg-surface p-4"><small className="block font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{k[0]}</small><b className="mt-1 block font-heading text-2xl font-normal tracking-[-0.03em]">{k[1]}</b>
                  <em className="mt-0.5 block text-[11px] font-normal not-italic text-leaf">{k[2] ? `▲ ${k[2]}` : ' '}</em></li>
              ))}
            </ul>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Sales · last 7 days</p>
            <div className="mb-6 flex h-40 items-end gap-2 rounded-card bg-stone p-4 pb-8" role="img" aria-label="Bar chart of sales for the last 7 days">
              {dashboard.sales.map(([d, v]) => (
                <div key={d} className="relative flex-1 rounded-t-[2px] bg-rust transition-[height] duration-700 ease-editorial" style={{ height: grown ? `${v}%` : '4%' }}>
                  <span className="absolute -bottom-6 inset-x-0 text-center font-mono text-[10px] uppercase tracking-[0.05em] text-muted">{d}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line text-sm sm:grid-cols-3">
              <div className="bg-surface p-5"><b className="mb-3 block font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">Low stock</b><ul>{dashboard.low.map(i => <li key={i[0]} className="flex justify-between gap-2 border-t border-line/60 py-2 font-light first:border-0"><span>{i[0]}</span><b className="font-normal">{i[1]}</b></li>)}</ul></div>
              <div className="bg-surface p-5"><b className="mb-3 block font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">Best sellers</b><ul>{dashboard.best.map(i => <li key={i[0]} className="flex justify-between gap-2 border-t border-line/60 py-2 font-light first:border-0"><span>{i[0]}</span><b className="font-normal">{i[1]}</b></li>)}</ul></div>
              <div className="bg-surface p-5"><b className="mb-3 block font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">Customer segments</b><ul>{dashboard.segments.map(i => <li key={i[0]} className="flex items-center justify-between gap-2 border-t border-line/60 py-2 font-light first:border-0"><span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] ${i[2]}`}>{i[0]}</span>{i[1]}</li>)}</ul></div>
            </div>
          </div>

          <div className="flex min-h-[480px] flex-col rounded-card border border-line bg-surface p-6 text-ink">
            <div className="border-b border-line pb-4 font-heading text-xl tracking-[-0.02em]">Urban Essential AI <span className="ml-2 align-middle font-mono text-[10px] uppercase tracking-[0.08em] text-rust">Demo</span></div>
            <div ref={body} className="flex max-h-[300px] flex-1 flex-col gap-2.5 overflow-y-auto py-4" aria-live="polite">
              {msgs.map((m, i) => <div key={i} className={cn('max-w-[90%] rounded-card px-4 py-2.5 text-sm font-light', m.from === 'bot' ? 'self-start bg-stone' : 'self-end bg-ash text-[#FAFAF9]')}>{m.text}</div>)}
              {typing && <div className="self-start rounded-card bg-stone px-4 py-2.5 text-sm text-muted">Typing…</div>}
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">{aiQA.map(x => <button key={x.q} type="button" onClick={() => ask(x.q)} className="rounded-full border border-line px-3 py-1.5 text-xs font-light transition hover:border-ink">{x.q}</button>)}</div>
            <form onSubmit={submit} className="flex gap-2">
              <label htmlFor="ai-q" className="sr-only">Ask about your business</label>
              <input id="ai-q" className="input !mt-0 flex-1" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about your business…" autoComplete="off" />
              <button className="btn btn-primary btn-sm">Send</button>
            </form>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-card border border-[#44403C] bg-[#44403C] md:grid-cols-3">
          {[['🧑‍💼', 'Business AI', 'Talks to the owner about sales, customers, stock and reports. "Why did my sales go up?" gets a plain answer.'],
            ['🛍️', 'Customer chatbot', 'Helps shoppers on your site, like "running shoes under ₹3,000, size 9", using your real product data.'],
            ['✍️', 'Content generator', '"Write a Diwali offer post" gives you an Instagram caption, a WhatsApp message and banner text.']].map(([i, t, s]) => (
            <li key={t} className="bg-ash p-8"><div className="mb-3 text-2xl" aria-hidden>{i}</div><h3 className="mb-2 text-xl text-[#FAFAF9]">{t}</h3><p className="text-sm font-light text-[#A8A29E]">{s}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
