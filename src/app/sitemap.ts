import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { templates } from '@/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/templates', '/pricing', '/how-it-works', '/audit', '/about', '/contact', '/privacy', '/terms'];
  return [
    ...pages.map(p => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...templates.map(t => ({ url: `${site.url}/templates/${t.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 }))
  ];
}
