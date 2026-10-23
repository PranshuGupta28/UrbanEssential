export const faqs = [
  { q: 'I am not technical at all. Can I still use this?', a: 'Yes. That is the whole point. Choose "Done For You" and we set up and run everything. You just tell us what you sell.' },
  { q: 'How long does it take to go live?', a: 'A Starter website is usually live in about a week. Online stores take a bit longer because of products, payments and testing. Your quote has a clear timeline.' },
  { q: 'Do I own my domain and my data?', a: 'Yes. Your domain is registered in your name, and you can export your customer and order data any time. No lock-in.' },
  { q: 'What is not included in the monthly fee?', a: 'Third-party charges such as domain renewal, payment-gateway fees, WhatsApp API, AI usage, SMS or email and ad budgets. They are billed at cost and always shown clearly.' },
  { q: 'Can I start small and upgrade later?', a: 'Yes. Start with Starter, then move to Business or Growth when you are ready. Your site and data carry over.' },
  { q: 'Do you guarantee more sales or the number 1 spot on Google?', a: 'No honest team can. We promise a clear process and measurable targets such as reviews, visits, enquiries and orders, and we report on them every month.' },
  { q: 'My business is not listed. Can you help?', a: 'Yes. Pharmacy, jewellery, travel, photography and many more work well. Tell us about your business and we build a template that fits.' }
];

export const problems = [
  { icon: '👟', title: 'The shoe shop', text: 'Loyal customers, but no website for anyone new to find it.' },
  { icon: '🍔', title: 'The restaurant', text: 'Depends on walk-ins and delivery apps that take big commissions.' },
  { icon: '📱', title: 'The mobile shop', text: 'Great stock, but no online catalogue or enquiry form.' },
  { icon: '📒', title: 'The notebook', text: 'Orders and customers tracked in a notebook or WhatsApp chats.' }
];

export const stages = [
  { key: 'build', n: '01', title: 'BUILD', goal: 'Get your business online', color: 'from-blue-500 to-brand',
    points: ['Website or online store', 'Google Maps & Business Profile', 'WhatsApp button & contact forms', 'Domain and hosting'] },
  { key: 'manage', n: '02', title: 'MANAGE', goal: 'Run it easily', color: 'from-emerald-500 to-teal-600',
    points: ['Admin dashboard in one place', 'Products, orders & inventory', 'Customers, payments & coupons', 'Order tracking'] },
  { key: 'grow', n: '03', title: 'GROW', goal: 'Get more customers and sales', color: 'from-marigold to-terracotta',
    points: ['SEO & Google Business', 'Social media & campaigns', 'Analytics, CRM & loyalty', 'AI advice & chatbot'] }
];

export const journey = [
  { t: 'Tell us your business', s: 'Or try the free audit' },
  { t: 'Pick a template', s: 'Made for your business type' },
  { t: 'We customise it', s: 'Logo, colours, products, prices' },
  { t: 'Go live', s: 'Website, domain and Google' },
  { t: 'Manage in a dashboard', s: 'Orders, customers, stock' },
  { t: 'Grow every month', s: 'SEO, social and AI tips' }
];

export const serviceStyles = [
  { icon: '🛠️', t: 'Do It Yourself', s: 'Template and tools. You do the work.' },
  { icon: '🤝', t: 'Do It With Us', s: 'We build it together with you.' },
  { icon: '🎁', t: 'Done For You', s: 'We handle everything. Our most popular.', hot: true }
];

export const features = [
  ['🌐', 'Website', 'Business site, landing pages, SEO'], ['🛒', 'E-commerce', 'Products, cart, checkout, payments'],
  ['👤', 'Customer side', 'Login, orders, wishlist, reviews'], ['🧑‍💼', 'Admin', 'Products, orders, inventory, customers'],
  ['📈', 'Analytics', 'Sales, revenue, customers, products'], ['📇', 'CRM', 'Customer profiles and segments'],
  ['📣', 'Marketing', 'SEO, social media, campaigns'], ['💬', 'Communication', 'WhatsApp, email, notifications'],
  ['🤖', 'AI', 'Customer chatbot and Business AI'], ['🎁', 'Loyalty', 'Points, referrals, rewards'],
  ['📅', 'Booking', 'Appointments and schedules'], ['🧾', 'Reports', 'Daily, weekly and monthly'],
  ['📍', 'Local presence', 'Google Business Profile, Maps, reviews'], ['🏭', 'Advanced', 'POS, accounting, ERP', 'Coming'],
  ['🛟', 'Support', 'Maintenance and technical help']
] as [string, string, string, string?][];

export const compare = {
  cols: ['Website', 'Online store', 'Admin', 'Analytics', 'AI', 'Human help'],
  rows: [
    ['Wix', '✅', '✅', 'Basic', '✅', '✅', 'Limited'],
    ['Shopify', 'Store-focused', '✅', '✅', '✅', 'Growing', 'Limited'],
    ['Zoho / HubSpot', '❌', 'Partial', 'CRM', '✅', '✅', 'Software only'],
    ['Typical agency', '✅', '✅', 'Depends', 'Depends', 'Depends', '✅'],
    ['Urban Essential', '✅', '✅', '✅', '✅', '✅', '✅']
  ]
};

export const whyCards = [
  { icon: '🗂️', t: 'Templates that fit', s: 'Built for real Indian business types, not generic layouts.' },
  { icon: '🔌', t: 'Integrations', s: 'WhatsApp, UPI payments, Google and social media, all connected.' },
  { icon: '🤝', t: 'Trust and support', s: 'You own your domain and your data. A real person helps you.' }
];

export const auditAreas = ['Website', 'Google presence', 'Social media', 'SEO', 'Customer experience', 'Online sales'] as const;

export const dashboard = {
  today: [['Sales', '₹24,500', '+12%'], ['Orders', '37', '+8%'], ['New customers', '21', '+5%'], ['Pending', '8', ''], ['Low stock', '5 items', '']],
  month: [['Revenue', '₹2,40,000', '+18%'], ['Orders', '812', '+24%'], ['New customers', '96', '+12%'], ['Avg. order', '₹2,956', '+4%'], ['Returning', '38%', '+6%']],
  sales: [['Mon', 62], ['Tue', 48], ['Wed', 70], ['Thu', 55], ['Fri', 84], ['Sat', 100], ['Sun', 78]] as [string, number][],
  low: [['Running Pro (9)', '2 left'], ['Sport Slide (8)', '3 left'], ['Classic Sneaker (7)', '4 left'], ['Formal Oxford (10)', '2 left']],
  best: [['Running Pro', '42%'], ['Classic Sneaker', '23%'], ['Sport Slide', '15%'], ['Formal Oxford', '9%']],
  segments: [['VIP', '42 customers', 'bg-amber-100 text-amber-800'], ['Regular', '180', 'bg-blue-100 text-blue-800'], ['New', '96', 'bg-emerald-100 text-emerald-800'], ['Inactive', '58', 'bg-red-100 text-red-800']]
};

export const aiQA = [
  { q: 'How much did I sell this month?', k: ['sell', 'sale', 'revenue', 'month', 'much'], a: 'You sold ₹2,40,000 this month across 812 orders. That is up 18% from last month.' },
  { q: 'Why did my sales go up?', k: ['why', 'up', 'increase', 'grow'], a: 'Three reasons: Running Pro made 42% of revenue after your Instagram post, returning customers rose to 38%, and weekend orders grew 24%.' },
  { q: 'Which product should I promote?', k: ['promote', 'product', 'push', 'market'], a: 'Promote Running Pro this weekend. It has the highest conversion rate, but only 2 pairs of size 9 are left, so restock first.' },
  { q: 'Which items will run out soon?', k: ['stock', 'run out', 'low', 'inventory'], a: 'At the current pace: Running Pro (size 9) in about 2 days and Sport Slide (size 8) in 3 days. Want me to draft a restock list?' },
  { q: 'Write a Diwali offer post', k: ['diwali', 'post', 'offer', 'write', 'caption', 'festival'], a: 'Instagram: "Light up your Diwali with fresh kicks! Flat 20% off on all sneakers till Sunday. Visit us or order on WhatsApp. #DiwaliSale". Also ready: WhatsApp broadcast, Facebook post and banner text.' }
];
