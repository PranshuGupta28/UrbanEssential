# Urban Essential website

Marketing and showcase site for Urban Essential: Next.js (App Router), TypeScript, Tailwind CSS 3, Framer Motion.

## Install, run, build

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # production build
npm run start    # serve the build on http://localhost:3100
npm run lint     # type check (tsc --noEmit)
```

Requires Node 20 or newer. The build downloads Google Fonts (Inter, Poppins, Noto Sans Devanagari), so it needs internet access once.

## Deploy

**Vercel:** import the repo, framework preset "Next.js", no extra settings. Add `NEXT_PUBLIC_SITE_URL` (for example `https://urbanessential.in`).
**Netlify:** use the Next.js runtime (default for new sites), build command `npm run build`.

Optional environment variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap, Open Graph and JSON-LD |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | URL that receives form submissions as JSON `POST` (for example a Formspree endpoint or your own API route) |

## Where to change things

| What | File |
|---|---|
| WhatsApp number, phone, email, site URL | `src/config/site.ts` |
| Prices, plans, add-ons | `src/data/plans.ts` |
| Templates (names, colours, items, FAQs) | `src/data/templates.ts` |
| Business picker | `src/data/businesses.ts` |
| FAQs, features, comparison, dashboard and AI demo data | `src/data/content.ts` |
| Hindi and English strings (nav and hero) | `src/i18n/dictionary.ts` |
| Colours and fonts | `tailwind.config.ts`, `src/app/layout.tsx` |

`site.whatsapp` uses the international format without `+` (for example `919999999999`).

## How forms work

All forms save to `localStorage` (`ue_leads`) and show a link that opens a prefilled WhatsApp message, plus an email link. If `NEXT_PUBLIC_LEAD_ENDPOINT` is set, each lead is also POSTed there (`src/lib/leads.ts`).

## Replace before launch

- WhatsApp number, phone and email (placeholders)
- Brand name: run a trademark, domain and social handle check
- Real photos and, once you have them, real testimonials (the Proof section is a "pilot program" card on purpose)
- About page: founders, photos and story
- Privacy and Terms: have a lawyer review the draft text
- Template brand names and sample prices are placeholders
- Add the Hindi translation for the rest of the site (only nav and hero are translated)
