import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, Space_Mono, Noto_Sans_Devanagari, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/context/Providers';
import { TemplatePreviewProvider } from '@/components/TemplatePreview';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { site } from '@/config/site';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-jakarta', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono', display: 'swap' });
const deva = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-deva', display: 'swap' });

const description = 'Urban Essential helps local shops, restaurants, salons, gyms, clinics and service providers go online, manage everything from one dashboard, and grow. Build. Manage. Grow.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: 'Urban Essential | Take Your Business From Offline to Online',
    template: '%s | Urban Essential'
  },

  description,

  verification: {
    google: 'MmugSNUNKxQkLQazV-D3t83iYfiAu1YvjpEgYLWFzQQ'
  },

  openGraph: {
    title: 'Urban Essential | Build. Manage. Grow.',
    description,
    url: site.url,
    siteName: site.name,
    locale: 'en_IN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Urban Essential | Build. Manage. Grow.',
    description
  },

  alternates: { canonical: '/' }
};

export const viewport: Viewport = { themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F8F6F2' }, { media: '(prefers-color-scheme: dark)', color: '#0C0A09' }], width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone,
  areaServed: 'IN'
};

const themeScript = `try{var t=localStorage.getItem('ue_theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${serif.variable} ${mono.variable} ${deva.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>
          <TemplatePreviewProvider>
            <Header />
            <main id="main" className="pt-[72px] pb-16 md:pb-0">{children}</main>
            <Footer />
            <FloatingActions />
          </TemplatePreviewProvider>
        </Providers>
      </body>
    </html>
  );
}
