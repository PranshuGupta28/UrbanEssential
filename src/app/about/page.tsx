import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About',
  description: 'Urban Essential is a digital partner for small and local businesses in India. We build, manage and grow their digital business.',
  alternates: { canonical: '/about' }
};

const values = [
  { t: 'We do it for you', s: 'Owners should run their business, not learn web tools.' },
  { t: 'Simple and honest', s: 'Clear prices in rupees. Third-party costs shown separately. No fake promises.' },
  { t: 'Local first', s: 'WhatsApp, UPI, local languages and templates made for Indian businesses.' },
  { t: 'You own it', s: 'Your domain and your data stay yours, always.' }
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About us" title="The digital partner for local businesses" sub="Many good local businesses are invisible online. We exist to change that." />
      <section className="section">
        <div className="container-x max-w-3xl space-y-6 text-lg font-light leading-[1.65] text-muted">
          <p>Urban Essential helps shops, restaurants, salons, gyms, clinics and service providers move from <b className="font-heading italic text-ink">offline to online</b>, manage their digital business from one dashboard, and grow with SEO, social media, analytics and AI advice.</p>
          <p>We are not just a website company. A local owner should be able to say, &ldquo;Make my business online and tell me how to grow,&rdquo; and we take it from there.</p>
          <p className="rounded-card border border-dashed border-rust/50 bg-stone p-5 text-base">Team and story: add your founders&apos; names, photos and a short story here before launch.</p>
        </div>
      </section>
      <section className="section bg-stone">
        <div className="container-x">
          <h2 className="mb-12 text-4xl tracking-[-0.04em] md:text-5xl">What we <em className="italic text-rust">promise</em></h2>
          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">{values.map((v, i) => <li key={v.t} className="bg-surface p-7"><span className="font-heading text-2xl italic text-rust">0{i + 1}</span><h3 className="mb-2 mt-3 text-xl">{v.t}</h3><p className="text-sm font-light text-muted">{v.s}</p></li>)}</ul>
          <div className="mt-12"><Link href="/contact" className="btn btn-primary">Talk to us</Link></div>
        </div>
      </section>
    </>
  );
}
