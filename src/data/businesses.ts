import type { PlanId } from './plans';

export type Business = {
  id: string; icon: string; label: string; templateSlug: string | null; category: string;
  headline: string; body: string; chips: string[]; plan: PlanId; recommend: string;
};

export const businesses: Business[] = [
  { id: 'retail', icon: '👟', label: 'Retail', templateSlug: 'footwear-store', category: 'Retail / Shoes', plan: 'business', recommend: 'Digital Business',
    headline: 'Online store and stock control for your shop', body: 'Show your whole catalogue online, take orders and payments, and never lose track of stock again.',
    chips: ['Product catalogue', 'Cart & UPI payments', 'Inventory', 'Offers & coupons'] },
  { id: 'fashion', icon: '👕', label: 'Fashion', templateSlug: 'fashion-boutique', category: 'Fashion / Clothing', plan: 'business', recommend: 'Digital Business',
    headline: 'A real online store, not just Instagram', body: 'Turn followers into paying customers with sizes, colours, a cart and WhatsApp order alerts.',
    chips: ['Sizes & colours', 'Instagram link', 'Wishlist', 'Festival offers'] },
  { id: 'restaurant', icon: '🍔', label: 'Restaurant', templateSlug: 'restaurant-cafe', category: 'Restaurant / Cafe', plan: 'business', recommend: 'Digital Business',
    headline: 'Get orders directly and keep your margins', body: 'A menu and online ordering on your own website, so you depend less on delivery-app commissions.',
    chips: ['Digital menu & QR', 'Direct ordering', 'Reviews', 'Google Maps'] },
  { id: 'electronics', icon: '📱', label: 'Electronics', templateSlug: 'mobile-electronics', category: 'Electronics / Mobile', plan: 'starter', recommend: 'Digital Starter or Business',
    headline: 'Catalogue, specs and enquiries 24/7', body: 'Let customers browse brands and specs and send an enquiry at any time of day.',
    chips: ['Brands & specs', 'Enquiry form', 'EMI info', 'Accessories'] },
  { id: 'salon', icon: '💇', label: 'Salon', templateSlug: 'salon-spa', category: 'Salon / Spa', plan: 'business', recommend: 'Digital Business',
    headline: 'Fill your calendar automatically', body: 'Online booking with reminders and staff schedules, so you can stop answering "is 5 pm free?"',
    chips: ['Online booking', 'Reminders', 'Staff profiles', 'Reviews'] },
  { id: 'fitness', icon: '🏋️', label: 'Fitness', templateSlug: 'gym-fitness', category: 'Gym / Fitness', plan: 'business', recommend: 'Digital Business',
    headline: 'Sell memberships online', body: 'Show plans, trainers and timings, and let members sign up and renew online.',
    chips: ['Membership plans', 'Trainers', 'Timetable', 'Renewal reminders'] },
  { id: 'services', icon: '🔧', label: 'Services', templateSlug: 'home-services', category: 'Local Services', plan: 'starter', recommend: 'Digital Starter',
    headline: 'Be the first name people find', body: 'A trusted online presence with Google Maps, enquiry and booking, so you win more local jobs.',
    chips: ['Service pages', 'Click to call', 'Booking', 'Local SEO'] },
  { id: 'realestate', icon: '🏠', label: 'Real Estate', templateSlug: null, category: 'Real Estate', plan: 'business', recommend: 'Digital Business (custom template)',
    headline: 'Listings that bring in enquiries', body: 'Show properties with photos and filters, and send buyer enquiries straight to WhatsApp. Our Real Estate template is coming soon, and we can build a custom one now.',
    chips: ['Listings', 'Photo gallery', 'Lead capture', 'Map view'] },
  { id: 'other', icon: '🏪', label: 'Something else', templateSlug: null, category: 'Other', plan: 'custom', recommend: 'Custom',
    headline: 'Tell us. We will build it.', body: 'Pharmacy, jewellery, bakery, travel, photography and more. We create a template that fits your business.',
    chips: ['Custom template', 'Free consultation', 'Made to fit'] }
];

export const categoryOptions = [
  'Retail / Shoes', 'Fashion / Clothing', 'Restaurant / Cafe', 'Electronics / Mobile', 'Salon / Spa', 'Gym / Fitness',
  'Local Services', 'Clinic / Wellness', 'Coaching / Preschool', 'Grocery / Kirana', 'Real Estate', 'Jewellery', 'Bakery', 'Other'
];
