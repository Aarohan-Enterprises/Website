export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/contact' },
];

export const footerResourceLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Our Work', href: '/#work' },
  { label: 'FAQ', href: '/contact#faq' },
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
];
