import Link from 'next/link';
import { site } from '@/config/site';
import { Logo } from './Logo';

const cols = [
  { h: 'Explore', l: [['How it works', '/how-it-works'], ['Templates', '/templates'], ['Pricing', '/pricing'], ['Free audit', '/audit']] },
  { h: 'Businesses', l: [['Retail & fashion', '/templates'], ['Restaurants & cafes', '/templates/restaurant-cafe'], ['Salons & gyms', '/templates/salon-spa'], ['Local services', '/templates/home-services']] },
  { h: 'Company', l: [['About', '/about'], ['Contact', '/contact'], ['Privacy', '/privacy'], ['Terms', '/terms']] }
];

export function Footer() {
  return (
    <footer className="bg-ash text-[#A8A29E]">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" aria-label="Urban Essential home"><Logo light /></Link>
          <p className="mt-5 max-w-xs font-heading text-2xl italic leading-snug text-[#FAFAF9]">{site.tagline}</p>
          <p className="mt-2 text-sm font-light">{site.descriptor}.</p>
          <p className="mt-5 text-sm font-light">{site.email}<br />{site.phoneDisplay}</p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <b className="mb-4 block font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-[#78716C]">{c.h}</b>
            {c.l.map(([n, h]) => <Link key={n} href={h} className="block py-1.5 text-sm font-light transition hover:text-[#FAFAF9]">{n}</Link>)}
          </div>
        ))}
      </div>
      <div className="container-x flex flex-wrap items-center justify-between gap-3 border-t border-[#44403C] py-6 font-mono text-[11px] uppercase tracking-[0.08em]">
        <span>© {new Date().getFullYear()} Urban Essential</span>
        <span>Made for local businesses in India</span>
      </div>
    </footer>
  );
}
