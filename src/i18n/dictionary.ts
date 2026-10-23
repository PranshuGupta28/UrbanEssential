export type Lang = 'en' | 'hi';

export const dictionary = {
  en: {
    'nav.how': 'How it works', 'nav.business': 'Your business', 'nav.templates': 'Templates', 'nav.dashboard': 'Dashboard & AI',
    'nav.pricing': 'Pricing', 'nav.audit': 'Free Audit', 'nav.faq': 'FAQ', 'nav.cta': 'Get Started',
    'hero.pill': 'Digital partner for local businesses',
    'hero.title.a': 'Take Your Business From', 'hero.title.b': 'Offline to Online', 'hero.title.c': ', and Grow',
    'hero.sub': 'Tell us what you sell. We build your website, manage it for you, and help new customers find you.',
    'hero.sub2': 'You run the shop. We do the technical work.',
    'hero.cta1': 'Get Your Free Digital Score', 'hero.cta2': 'Explore Templates',
    'hero.chip1': 'No tech skills needed', 'hero.chip2': 'Live in days', 'hero.chip3': 'WhatsApp-ready', 'hero.chip4': 'Made for Indian businesses',
    'picker.title': 'What type of business do you run?', 'picker.sub': 'Pick yours and see the solution we recommend.'
  },
  hi: {
    'nav.how': 'यह कैसे काम करता है', 'nav.business': 'आपका बिज़नेस', 'nav.templates': 'टेम्पलेट', 'nav.dashboard': 'डैशबोर्ड और AI',
    'nav.pricing': 'कीमत', 'nav.audit': 'मुफ़्त ऑडिट', 'nav.faq': 'सवाल-जवाब', 'nav.cta': 'शुरू करें',
    'hero.pill': 'लोकल बिज़नेस के डिजिटल पार्टनर',
    'hero.title.a': 'अपने बिज़नेस को', 'hero.title.b': 'ऑफ़लाइन से ऑनलाइन', 'hero.title.c': ' ले जाएँ, और बढ़ाएँ',
    'hero.sub': 'हमें बताइए आप क्या बेचते हैं। हम आपकी वेबसाइट बनाते हैं, उसे मैनेज करते हैं और नए ग्राहक दिलाते हैं।',
    'hero.sub2': 'तकनीकी काम हम करते हैं।',
    'hero.cta1': 'अपना मुफ़्त डिजिटल स्कोर पाएँ', 'hero.cta2': 'टेम्पलेट देखें',
    'hero.chip1': 'टेक्निकल ज्ञान की ज़रूरत नहीं', 'hero.chip2': 'कुछ ही दिनों में लाइव', 'hero.chip3': 'WhatsApp के लिए तैयार', 'hero.chip4': 'भारतीय बिज़नेस के लिए बना',
    'picker.title': 'आप कौन सा बिज़नेस चलाते हैं?', 'picker.sub': 'अपना चुनिए और हमारा सुझाया हुआ समाधान देखिए।'
  }
} as const;

export type DictKey = keyof (typeof dictionary)['en'];
