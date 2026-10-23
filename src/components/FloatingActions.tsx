'use client';

import { site } from '@/config/site';
import { waUrl } from '@/lib/utils';

export function FloatingActions() {
  return (
    <>
      <a
        href={waUrl(`Hi ${site.name}, I want to take my business online.`)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-[76px] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa p-3.5 text-white shadow-soft transition duration-500 ease-editorial hover:-translate-y-1 md:bottom-6 md:right-6"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /></svg>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-canvas/95 p-2 backdrop-blur md:hidden">
        <a href={`tel:${site.phone}`} className="btn btn-outline btn-sm">Call now</a>
        <a href={waUrl(`Hi ${site.name}, I want to take my business online.`)} target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-wa text-white">WhatsApp</a>
      </div>
    </>
  );
}
