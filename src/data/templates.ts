import type { PlanId } from './plans';

export type TemplateGroup = 'Retail & Fashion' | 'Food' | 'Services & Booking' | 'Health & Fitness' | 'Education & Property';

export const groups: ('All' | TemplateGroup)[] = ['All', 'Retail & Fashion', 'Food', 'Services & Booking', 'Health & Fitness', 'Education & Property'];

export type Template = {
  slug: string;
  base: string;
  style: string;
  group: TemplateGroup;
  icon: string;
  goodFor: string;
  desc: string;
  includes: string[];
  sectionTitle: string;
  items: { name: string; price: number; emoji: string }[];
  primary: string;
  soft: string;
  cta: string;
  plan: PlanId;
  brand: string;
  tagline: string;
  faqs: { q: string; a: string }[];
};

export const templateTitle = (t: Template) => `${t.base} — ${t.brand}`;

const commonFaq = (what: string) => [
  { q: 'How long does this take to go live?', a: `A ${what} site is usually ready in about a week once we have your photos, prices and details.` },
  { q: 'Can I change prices and photos later?', a: 'Yes. You can edit everything yourself, or message us on WhatsApp and we do it for you.' },
  { q: 'Do I own my domain and data?', a: 'Yes. Your domain is in your name and you can export your data any time.' }
];

export const templates: Template[] = [
  {
    slug: 'salon-spa', base: 'Salon & Spa', style: 'Simple', group: 'Services & Booking', icon: '💇',
    goodFor: 'Hair salons, beauty parlours, barbers, spas', desc: 'Show your services, introduce your team and let clients enquire about appointments in a few clicks.',
    includes: ['Online booking', 'WhatsApp reminders', 'Services & prices', 'Staff profiles'],
    sectionTitle: 'Our services', items: [
      { name: 'Haircut & Style', price: 499, emoji: '💇' }, { name: 'Facial', price: 999, emoji: '💆' },
      { name: 'Manicure', price: 599, emoji: '💅' }, { name: 'Bridal Makeup', price: 9999, emoji: '👰' }],
    primary: '#AD7C79', soft: '#F5EAE6', cta: 'Book appointment', plan: 'business', brand: 'Glow Studio', tagline: 'Look good. Feel great.',
    faqs: [{ q: 'Will clients get appointment reminders?', a: 'Yes, a WhatsApp reminder is sent before every booking.' }, ...commonFaq('salon')]
  },
  {
    slug: 'restaurant-cafe', base: 'Restaurant & Cafe', style: 'Warm', group: 'Food', icon: '🍔',
    goodFor: 'Restaurants, cafes, cloud kitchens, bakeries', desc: 'Present your menu, highlight signature dishes and make it easy for customers to order or contact your restaurant.',
    includes: ['Digital menu', 'Online ordering', 'QR menu', 'Offers & combos'],
    sectionTitle: 'Popular dishes', items: [
      { name: 'Classic Burger', price: 249, emoji: '🍔' }, { name: 'Margherita Pizza', price: 349, emoji: '🍕' },
      { name: 'Loaded Fries', price: 149, emoji: '🍟' }, { name: 'Cold Coffee', price: 129, emoji: '🥤' }],
    primary: '#B65D43', soft: '#F7E9DE', cta: 'Order online', plan: 'business', brand: 'Urban Eats', tagline: 'Hot, fresh, delivered.',
    faqs: [{ q: 'Can customers order directly from my site?', a: 'Yes. Orders reach you on the dashboard and on WhatsApp.' }, ...commonFaq('restaurant')]
  },
  {
    slug: 'kirana-grocery', base: 'Kirana & Grocery', style: 'Fresh', group: 'Retail & Fashion', icon: '🛒',
    goodFor: 'Grocery stores, vegetable shops, dairy, supermarkets', desc: 'Let customers browse daily essentials, place orders and choose convenient delivery or pickup.',
    includes: ['Catalogue', 'WhatsApp order', 'Delivery slots', 'Quick reorder'],
    sectionTitle: 'Daily essentials', items: [
      { name: 'Fresh Veggies 1kg', price: 60, emoji: '🥦' }, { name: 'Milk 1L', price: 56, emoji: '🥛' },
      { name: 'Basmati Rice 5kg', price: 549, emoji: '🍚' }, { name: 'Eggs (12)', price: 84, emoji: '🥚' }],
    primary: '#66866A', soft: '#EAF0E6', cta: 'Order groceries', plan: 'business', brand: 'Fresh Basket', tagline: 'Groceries at your door.',
    faqs: [{ q: 'Can customers order on WhatsApp?', a: 'Yes. A cart can be sent to your WhatsApp as a ready order.' }, ...commonFaq('grocery')]
  },
  {
    slug: 'fashion-boutique', base: 'Fashion Boutique', style: 'Chic', group: 'Retail & Fashion', icon: '👕',
    goodFor: 'Clothing stores, sarees, boutiques, tailors', desc: 'Showcase your collections with product photos, sizes, colours and a shopping experience beyond social media.',
    includes: ['Catalogue', 'Sizes & colours', 'Wishlist', 'Cart & checkout'],
    sectionTitle: 'New arrivals', items: [
      { name: 'Cotton Tee', price: 599, emoji: '👕' }, { name: 'Denim Jacket', price: 1899, emoji: '🧥' },
      { name: 'Summer Dress', price: 1299, emoji: '👗' }, { name: 'Chino Pants', price: 1099, emoji: '👖' }],
    primary: '#9D5366', soft: '#F6E7E8', cta: 'Shop collection', plan: 'business', brand: 'Threadline', tagline: 'Fresh fits, every week.',
    faqs: [{ q: 'Can I link my Instagram?', a: 'Yes. Your feed and your store work together.' }, ...commonFaq('boutique')]
  },
  {
    slug: 'footwear-store', base: 'Footwear Store', style: 'Bold', group: 'Retail & Fashion', icon: '👟',
    goodFor: 'Shoe shops, sandals, bags, accessories', desc: 'Display every style with clear prices and sizes, and help customers discover and order their next pair.',
    includes: ['Catalogue', 'Size filter', 'Cart', 'Offers'],
    sectionTitle: 'Trending shoes', items: [
      { name: 'Running Pro', price: 2499, emoji: '👟' }, { name: 'Classic Sneaker', price: 1999, emoji: '👞' },
      { name: 'Sport Slide', price: 799, emoji: '🩴' }, { name: 'Formal Oxford', price: 3299, emoji: '👞' }],
    primary: '#344B76', soft: '#E8EAF5', cta: 'Shop now', plan: 'business', brand: 'Urban Shoes', tagline: 'Step into style.',
    faqs: [{ q: 'Can I show size-wise stock?', a: 'Yes. Customers see which sizes are available.' }, ...commonFaq('shoe store')]
  },
  {
    slug: 'mobile-electronics', base: 'Mobile & Electronics', style: 'Sharp', group: 'Retail & Fashion', icon: '📱',
    goodFor: 'Mobile shops, laptops, accessories', desc: 'Showcase electronics, compare product specifications and let customers enquire about availability and prices.',
    includes: ['Brands & specs', 'Enquiry form', 'EMI info', 'Accessories'],
    sectionTitle: 'Top picks', items: [
      { name: 'Smartphone 5G', price: 24999, emoji: '📱' }, { name: 'Laptop 14"', price: 42999, emoji: '💻' },
      { name: 'Wireless Buds', price: 1999, emoji: '🎧' }, { name: 'Fast Charger', price: 799, emoji: '🔌' }],
    primary: '#3F78A6', soft: '#E6EFF6', cta: 'Enquire now', plan: 'business', brand: 'Smart Mobile Store', tagline: 'Latest tech, honest prices.',
    faqs: [{ q: 'Can customers enquire without paying online?', a: 'Yes. They send an enquiry and you confirm on call or WhatsApp.' }, ...commonFaq('electronics')]
  },
  {
    slug: 'gym-fitness', base: 'Gym & Fitness', style: 'Bold', group: 'Health & Fitness', icon: '🏋️',
    goodFor: 'Gyms, yoga studios, zumba, personal trainers', desc: 'Promote membership plans, showcase trainers and help people discover your fitness programs.',
    includes: ['Membership plans', 'Trainer profiles', 'Class timetable', 'Online sign-up'],
    sectionTitle: 'Membership plans', items: [
      { name: 'Monthly', price: 1499, emoji: '🏋️' }, { name: 'Quarterly', price: 3999, emoji: '💪' },
      { name: 'Yearly', price: 11999, emoji: '🏆' }, { name: 'Personal Training', price: 4999, emoji: '🧑‍🏫' }],
    primary: '#3D4648', soft: '#E9ECE8', cta: 'Join now', plan: 'business', brand: 'IronCore Fitness', tagline: 'Stronger every day.',
    faqs: [{ q: 'Can members renew online?', a: 'Yes, with renewal reminders on WhatsApp.' }, ...commonFaq('gym')]
  },
  {
    slug: 'home-services', base: 'Home Services', style: 'Trusted', group: 'Services & Booking', icon: '🔧',
    goodFor: 'Electricians, plumbers, AC repair, cleaning, pest control', desc: 'List your services, explain the areas you cover and help customers request reliable home repairs.',
    includes: ['Service list', 'Enquiry & booking', 'Service areas', 'Click to call'],
    sectionTitle: 'Services we offer', items: [
      { name: 'Electrician visit', price: 299, emoji: '💡' }, { name: 'Plumber visit', price: 299, emoji: '🔧' },
      { name: 'AC Service', price: 599, emoji: '❄️' }, { name: 'Home Cleaning', price: 1499, emoji: '🧹' }],
    primary: '#527A91', soft: '#E8EFF2', cta: 'Book a visit', plan: 'starter', brand: 'QuickFix Pro', tagline: 'Trusted experts at your door.',
    faqs: [{ q: 'Is a simple website enough for services?', a: 'Often yes. The Starter plan covers it, and you can add booking later.' }, ...commonFaq('services')]
  },
  {
    slug: 'clinic-wellness', base: 'Clinic & Wellness', style: 'Calm', group: 'Health & Fitness', icon: '🩺',
    goodFor: 'Clinics, dentists, physiotherapists, wellness centers', desc: 'Present your services, clinic timings and healthcare team, with a simple way to enquire about appointments.',
    includes: ['Doctor profiles', 'Appointments', 'Timings', 'Reminders'],
    sectionTitle: 'Our specialities', items: [
      { name: 'General Physician', price: 400, emoji: '🩺' }, { name: 'Dental Care', price: 600, emoji: '🦷' },
      { name: 'Skin & Hair', price: 700, emoji: '🧴' }, { name: 'Health Checkup', price: 1999, emoji: '🧪' }],
    primary: '#568C86', soft: '#E6F1ED', cta: 'Book consultation', plan: 'business', brand: 'CareFirst Clinic', tagline: 'Care you can trust.',
    faqs: [{ q: 'Is patient data safe?', a: 'We keep data private and follow good security practice. Medical records are not stored on the public site.' }, ...commonFaq('clinic')]
  },
  {
    slug: 'coaching-preschool', base: 'Coaching & Preschool', style: 'Cheerful', group: 'Education & Property', icon: '📚',
    goodFor: 'Tuition, coaching, playschools, hobby classes', desc: 'Showcase courses, batches, faculty and learning facilities, and help parents or students enquire about admissions.',
    includes: ['Courses & batches', 'Faculty', 'Enquiry form', 'Fee payment'],
    sectionTitle: 'Popular courses', items: [
      { name: 'Class 10 Maths', price: 1999, emoji: '➗' }, { name: 'Science Foundation', price: 2499, emoji: '🧬' },
      { name: 'Spoken English', price: 1499, emoji: '🗣️' }, { name: 'Coding for Kids', price: 2499, emoji: '💻' }],
    primary: '#5274A4', soft: '#EAF0F8', cta: 'Enrol today', plan: 'business', brand: 'BrightPath Academy', tagline: 'Learn. Grow. Achieve.',
    faqs: [{ q: 'Can parents pay fees online?', a: 'Yes, with a payment link and a receipt.' }, ...commonFaq('coaching')]
  }
];

export const comingSoon = [
  { name: 'Jewellery', style: 'Elegant', icon: '💍' },
  { name: 'Real Estate', style: 'Prime', icon: '🏠' },
  { name: 'Bakery', style: 'Sweet', icon: '🧁' },
  { name: 'Photographer', style: 'Muted', icon: '📷' }
];

export const templateBySlug = (slug: string) => templates.find(t => t.slug === slug);
