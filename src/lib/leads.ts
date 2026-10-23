import { site } from '@/config/site';

export type Lead = Record<string, string>;

export async function saveLead(lead: Lead) {
  const entry = { ...lead, at: new Date().toISOString() };
  const all = JSON.parse(localStorage.getItem('ue_leads') || '[]');
  all.push(entry);
  localStorage.setItem('ue_leads', JSON.stringify(all));
  if (site.leadEndpoint) {
    try {
      await fetch(site.leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entry) });
    } catch {
      /* endpoint is optional; lead is still saved locally and sent via WhatsApp */
    }
  }
}
