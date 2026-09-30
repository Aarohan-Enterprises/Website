export const siteConfig = {
  name: 'Aarohan Enterprises',
  url: 'https://pinecoder.in',
  ogImage: 'https://pinecoder.in/og-image.jpg',
  description:
    'Aarohan Enterprises is a software development studio in India. We design, build, and ship web apps, SaaS platforms, browser extensions, desktop apps, and cloud systems — from idea to production.',
  keywords:
    'software development studio India, web app development, SaaS development, Next.js development, Go backend, AWS cloud, serverless, Chrome extension development, desktop app development, custom software, API development, Aarohan Enterprises, pinecoder.in',
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
  description:
    'Software development studio building web apps, SaaS platforms, browser extensions, desktop apps, and cloud systems.',
  url: 'https://pinecoder.in',
  logo: 'https://pinecoder.in/logo-square-dark-theme.png',
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
  sameAs: ['https://www.linkedin.com/in/chaitanya-murarka/'],
  areaServed: 'Worldwide',
  knowsAbout: [
    'Web Development',
    'SaaS',
    'Cloud Computing',
    'Browser Extensions',
    'Desktop Applications',
    'API Development',
    'Artificial Intelligence',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aarohan Enterprises',
  image: 'https://pinecoder.in/og-image.jpg',
  url: 'https://pinecoder.in',
  telephone: '+91-7499462967',
  email: 'contact@pinecoder.in',
  serviceType: 'Software Development',
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
