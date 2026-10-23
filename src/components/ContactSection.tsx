'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { site } from '@/config/site';
import { categoryOptions } from '@/data/businesses';
import { plans } from '@/data/plans';
import { useApp } from '@/context/Providers';
import { saveLead } from '@/lib/leads';
import { waUrl } from '@/lib/utils';
import { SectionHead } from './ui';

const empty = { name: '', phone: '', email: '', category: categoryOptions[0], plan: 'business', template: '', msg: '' };

export function ContactSection({ withHeading = true }: { withHeading?: boolean }) {
  const { prefill } = useApp();
  const [f, setF] = useState(empty);
  const [done, setDone] = useState<{ name: string; wa: string; mail: string } | null>(null);
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setF(s => ({ ...s, [k]: e.target.value }));

  useEffect(() => {
    if (!prefill.n) return;
    setDone(null);
    setF(s => {
      const cat = prefill.category && (categoryOptions.find(c => c.toLowerCase().includes(prefill.category!.toLowerCase().split(/[\s/&]+/)[0])) ?? s.category);
      return { ...s, category: cat || s.category, plan: prefill.plan ?? s.plan, template: prefill.template ?? s.template, msg: prefill.msg ?? s.msg };
    });
  }, [prefill]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await saveLead(f);
    const planName = plans.find(p => p.id === f.plan)?.name ?? 'Not sure yet';
    const text = `Hi ${site.name}! I am ${f.name} (${f.phone}).\nBusiness: ${f.category}\nPlan: ${planName}${f.template ? `\nTemplate: ${f.template}` : ''}${f.msg ? `\n${f.msg}` : ''}`;
    const mail = `mailto:${site.email}?subject=${encodeURIComponent('New enquiry from ' + f.name)}&body=${encodeURIComponent(text)}`;
    setDone({ name: f.name, wa: waUrl(text), mail });
    setF(empty);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          {withHeading && <span className="eyebrow">Let&apos;s talk</span>}
          <h2 className="mb-4 mt-3 text-4xl tracking-[-0.04em] md:text-5xl">Ready to take your business <em className="italic text-rust">online?</em></h2>
          <p className="max-w-md font-light text-muted">Tell us a little about your business. We will reply with the best plan, a template suggestion and a clear quote. The first consultation is free.</p>
          <ul className="my-8 space-y-3 border-t border-line pt-6 font-light">
            <li><a className="text-rust underline decoration-line underline-offset-4 hover:decoration-rust" href={waUrl(`Hi ${site.name}, I want to take my business online.`)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
            <li><a className="hover:text-rust" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-rust" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
            <li className="text-muted">Serving local businesses across India</li>
          </ul>
          <blockquote className="max-w-md border-l-2 border-rust pl-5 font-heading text-2xl italic leading-snug tracking-[-0.02em]">&ldquo;We are not just making websites. We become your digital partner.&rdquo;</blockquote>
        </div>

        <form onSubmit={submit} className="rounded-card border border-line bg-surface p-7 shadow-micro md:p-8">
          <div className="space-y-3">
            <div><label className="label" htmlFor="c-name">Your name</label><input id="c-name" className="input" required value={f.name} onChange={set('name')} autoComplete="name" /></div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div><label className="label" htmlFor="c-phone">Phone / WhatsApp</label><input id="c-phone" className="input" type="tel" required value={f.phone} onChange={set('phone')} autoComplete="tel" /></div>
              <div><label className="label" htmlFor="c-email">Email (optional)</label><input id="c-email" className="input" type="email" value={f.email} onChange={set('email')} autoComplete="email" /></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div><label className="label" htmlFor="c-cat">Business type</label><select id="c-cat" className="input" value={f.category} onChange={set('category')}>{categoryOptions.map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label className="label" htmlFor="c-plan">Interested plan</label>
                <select id="c-plan" className="input" value={f.plan} onChange={set('plan')}>{plans.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}<option value="unsure">Not sure yet. Advise me</option></select></div>
            </div>
            <div><label className="label" htmlFor="c-tpl">Template you liked (optional)</label><input id="c-tpl" className="input" value={f.template} onChange={set('template')} placeholder="Choose one from the template library" /></div>
            <div><label className="label" htmlFor="c-msg">Tell us about your business</label><textarea id="c-msg" rows={3} className="input" value={f.msg} onChange={set('msg')} placeholder="What do you sell? What do you want to achieve?" /></div>
          </div>
          <button className="btn btn-primary mt-4 w-full">Send request</button>
          {done && (
            <div role="status" className="mt-5 rounded-card border border-leaf/30 bg-leaf/5 p-4 text-center text-sm text-ink">
              Thank you, {done.name}! Your request is saved.{' '}
              <a className="underline" href={done.wa} target="_blank" rel="noopener noreferrer">Send it on WhatsApp for the fastest reply</a>
              {' '}or <a className="underline" href={done.mail}>email it</a>.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
