export interface FAQItem {
  question: string;
  answer: string;
}

export const contactFAQs: FAQItem[] = [
  {
    question: 'What kind of software do you build?',
    answer: 'Web apps and SaaS platforms, browser extensions, desktop apps, cloud and serverless backends, payment integrations, and AI-powered features. If it runs in a browser, on a desktop, or on a server, we can build and ship it.',
  },
  {
    question: "What's the typical response time?",
    answer: 'We reply within 2–4 hours during business hours (Mon–Sat, 9 AM – 7 PM IST). WhatsApp gets the fastest response.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Small tools and extensions usually ship in 1–2 weeks. Full web apps and SaaS platforms take 4–10 weeks depending on scope. You get an accurate timeline after a short scoping call.',
  },
  {
    question: 'Do I own the code?',
    answer: 'Yes — you own 100% of the source code we write for you, along with the repositories, cloud accounts, and full documentation. No lock-in.',
  },
  {
    question: 'How do payments work?',
    answer: 'Milestone-based. We split the project into phases; you approve and pay each phase before we move to the next, so there is no large upfront risk.',
  },
];
