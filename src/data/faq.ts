export interface FAQItem {
  question: string;
  answer: string;
}

export const contactFAQs: FAQItem[] = [
  {
    question: "What's the typical response time?",
    answer: 'We respond within 2-4 hours during business hours (Mon-Sat, 9 AM - 7 PM IST). WhatsApp gets the fastest response.',
  },
  {
    question: 'What do you build with?',
    answer: 'Web, desktop and browser-extension software on stacks chosen for the job, with Python, Node.js, Go, Flutter and AWS among the ones we use most. We recommend the stack after the discovery call.',
  },
  {
    question: 'How long does a project take?',
    answer: 'A focused tool can be live in two to four weeks. An operations system with several roles and integrations takes longer. You get a timeline in the written quote.',
  },
  {
    question: 'Is my project confidential?',
    answer: 'Yes. We store project material securely and sign an NDA on request.',
  },
  {
    question: 'Do you support the software after launch?',
    answer: 'Yes. Hosting, monitoring and support are offered after delivery, priced separately so you choose what you need.',
  },
];

export const pricingFAQs: FAQItem[] = [
  {
    question: 'Are the prices fixed?',
    answer: 'No. Every project is different, so we quote after a discovery call that covers your exact requirements and scope.',
  },
  {
    question: 'How does milestone-based payment work?',
    answer: 'We break the project into phases. You pay and approve each milestone before we start the next, so there is no risk of paying for work you have not seen.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Bank transfers (NEFT, RTGS, IMPS), UPI, and international wire transfers.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'You only pay for approved work. If a milestone does not meet expectations, we revise it at no extra cost.',
  },
  {
    question: 'Who owns the code?',
    answer: 'It depends on the engagement, and we put it in the quote before you commit. For some custom builds, ownership passes to you on final payment. When you use or white-label one of our products, or build on our platforms, we keep the code and you get a licence, with your data staying yours. Either way you get documentation, and training if you need it.',
  },
  {
    question: 'Is my project confidential?',
    answer: 'Yes. We store project material securely and sign an NDA on request.',
  },
];
