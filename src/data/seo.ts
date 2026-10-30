export const siteConfig = {
  name: 'Aarohan Enterprises',
  url: 'https://pinecoder.in',
  ogImage: 'https://pinecoder.in/og-image.jpg',
  description:
    'Aarohan Enterprises builds business operations systems, analytics dashboards and everyday tools for companies, and runs eight SaaS products of its own. Every project is quoted to fit. Based in Nagpur, India.',
  keywords:
    'software company India, business operations software, custom software development Nagpur, analytics dashboards, workflow automation, SaaS products, WhatsApp automation, freight operations software, Aarohan Enterprises, pinecoder.in',
  author: 'Aarohan Enterprises',
  phone: '+91-7499462967',
  email: 'contact@pinecoder.in',
  whatsapp: 'https://wa.me/917499462967',
  location: 'Nagpur, Maharashtra, India',
  legalName: 'Aarohan Enterprises',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aarohan Enterprises',
  legalName: 'Aarohan Enterprises',
  url: 'https://pinecoder.in',
  logo: 'https://pinecoder.in/logo-square-dark-theme.png',
  description:
    'A software company that builds business operations systems, analytics dashboards and everyday tools, and runs its own SaaS products.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7499462967',
    contactType: 'customer service',
    email: 'contact@pinecoder.in',
    availableLanguage: ['English', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  founder: { '@type': 'Person', name: 'Chaitanya Murarka' },
  sameAs: ['https://www.linkedin.com/in/chaitanya-murarka/'],
  areaServed: 'IN',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aarohan Enterprises',
  description:
    'Custom software for business operations, data and analytics, and workflow automation, quoted per project.',
  image: 'https://pinecoder.in/og-image.jpg',
  url: 'https://pinecoder.in',
  telephone: '+91-7499462967',
  email: 'contact@pinecoder.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    postalCode: '440001',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
};
