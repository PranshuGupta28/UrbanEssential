'use client';

import { templateBySlug } from '@/data/templates';
import { UseTemplateButton } from './TemplatePreview';

export function TemplateActions({ slug }: { slug: string }) {
  const t = templateBySlug(slug)!;
  return <UseTemplateButton t={t} className="btn btn-primary mt-4 w-full">Build this website</UseTemplateButton>;
}
