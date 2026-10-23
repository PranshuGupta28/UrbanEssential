export type PlanId = 'starter' | 'business' | 'growth' | 'custom';

export type Plan = {
  id: PlanId;
  name: string;
  quote: string;
  setup: number;
  setupRange: string;
  monthly: number;
  monthlyRange: string;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: 'starter', name: 'Digital Starter', quote: '"I just want to be online."',
    setup: 14999, setupRange: '₹9,999 – ₹19,999', monthly: 799, monthlyRange: '₹499 – ₹999',
    features: ['5–7 page website, mobile friendly', 'Google Maps, WhatsApp & contact form', 'Basic SEO', 'Google Business Profile setup', 'Domain & hosting help']
  },
  {
    id: 'business', name: 'Digital Business', quote: '"I want to sell and manage online."', popular: true,
    setup: 39999, setupRange: '₹29,999 – ₹59,999', monthly: 1999, monthlyRange: '₹1,499 – ₹2,999',
    features: ['Everything in Starter', 'Catalogue, cart, checkout & online payments', 'Customer login & order tracking', 'Admin dashboard, inventory & coupons', 'Basic analytics & WhatsApp alerts']
  },
  {
    id: 'growth', name: 'Digital Growth', quote: '"Help me grow every month."',
    setup: 89999, setupRange: '₹69,999 – ₹1,49,999', monthly: 5999, monthlyRange: '₹4,999 – ₹9,999',
    features: ['Everything in Business', 'Advanced reports, CRM & segments', 'SEO & Google Business optimisation', 'Loyalty points & social tools', 'AI insights, AI chatbot & priority support']
  },
  {
    id: 'custom', name: 'Custom / Pro', quote: '"We need something special."',
    setup: 150000, setupRange: 'From ₹1.5 lakh', monthly: 10000, monthlyRange: '₹10,000 – ₹30,000+',
    features: ['Booking systems & POS', 'Multi-branch & ERP links', 'Custom mobile app', 'Custom APIs & dashboards', 'Dedicated support']
  }
];

export const planById = (id: string) => plans.find(p => p.id === id);

export type Addon = { name: string; setup: number; monthly: number };

export const addons: Addon[] = [
  { name: 'Extra pages (3)', setup: 4500, monthly: 0 },
  { name: 'Payment gateway setup', setup: 3500, monthly: 0 },
  { name: 'WhatsApp integration', setup: 6000, monthly: 0 },
  { name: 'AI customer chatbot', setup: 15000, monthly: 0 },
  { name: 'AI business assistant', setup: 30000, monthly: 0 },
  { name: 'CRM & segments', setup: 20000, monthly: 0 },
  { name: 'Booking system', setup: 20000, monthly: 0 },
  { name: 'Loyalty system', setup: 15000, monthly: 0 },
  { name: 'SEO setup', setup: 10000, monthly: 0 },
  { name: 'Google Business setup', setup: 3500, monthly: 0 },
  { name: 'Product upload (100 items)', setup: 2000, monthly: 0 },
  { name: 'Advanced analytics', setup: 20000, monthly: 0 },
  { name: 'Monthly SEO', setup: 0, monthly: 10000 },
  { name: 'Social media management', setup: 0, monthly: 12000 },
  { name: 'Ads management', setup: 0, monthly: 10000 },
  { name: 'Mobile app', setup: 125000, monthly: 0 }
];
