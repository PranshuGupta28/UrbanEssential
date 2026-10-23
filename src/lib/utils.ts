import { site } from '@/config/site';

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

export const waUrl = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
