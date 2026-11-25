import type { FAQItem } from '@/data/faq';

export const APPLY_EMAIL = 'contact@pinecoder.in';
export const APPLY_SUBJECT = 'SDE Intern - Your Name';
export const DATE_POSTED = '2026-11-25';

export const role = {
  title: 'Software Development Engineer (SDE) Intern',
  facts: [
    { label: 'Type', value: 'Full-time internship' },
    { label: 'Mode', value: 'Hybrid: office in Nagpur + remote days' },
    { label: 'Location', value: 'Nagpur-based candidates only' },
    { label: 'Best fit', value: 'Final-semester students doing it as their final-sem internship' },
  ],
};

export const work = [
  {
    title: 'Ship to real users',
    description:
      'You work on products people already pay for: alert relays, PDF tools, WhatsApp exports and operations software for businesses. Your code goes live, not into a drawer.',
  },
  {
    title: 'Whole stack, small team',
    description:
      'Front end, back end, database, deploy. TypeScript, React and Next.js, Python, Go, PostgreSQL and AWS are what we use most. You learn the parts you have not touched yet.',
  },
  {
    title: 'The unglamorous parts too',
    description:
      'Tests, logs, monitoring, SEO and Google indexing, fixing the bug a customer reported this morning. That is most of what keeps software alive.',
  },
];

export const lookingFor = [
  'In your final semester of B.E., B.Tech, MCA, BCA, B.Sc. or similar, and your college allows a full-time final-semester internship (preferred)',
  'Living in Nagpur, so you can be in the office on office days',
  'Comfortable in at least one programming language and with basic HTML, CSS and Git',
  'You have built something for yourself, and you can explain how it works',
];

export const taskSteps = [
  {
    title: 'Build and publish your own website',
    description:
      'Any stack, any free host: GitHub Pages, Netlify, Vercel or Cloudflare Pages. A free subdomain is fine; you do not need to buy a domain.',
  },
  {
    title: 'Make an AI-generated video of yourself',
    description:
      'Use AI tools to make a 30 to 90 second video starring you, built from your own photo (and your voice, if you like). Have it introduce you, show something you built and say why you want this internship. Put it on your site, self-hosted or as an unlisted YouTube embed, with a line on which tools you used and how.',
  },
  {
    title: 'Add one thing only you could',
    description:
      'A project you made, a photo you took, a page about your corner of Nagpur. Something that is clearly yours.',
  },
  {
    title: 'Run SEO checks and tell us the score',
    description:
      'Run Lighthouse (Chrome DevTools, mobile) and Google PageSpeed Insights on your site and screenshot the scores. A low score is fine: without a domain or links you will not get 100. In 150 words or less, tell us what pulls it down, what you fixed and what you would fix next.',
  },
];

export const sendList = [
  'Your website link and its source code (GitHub or similar)',
  'Screenshots of your Lighthouse and PageSpeed Insights scores, plus your short note',
  'The AI tools you used for the video, in a line or two',
  'Your resume, college, degree and expected graduation month',
  'Which part of Nagpur you live in',
];

export const processSteps = [
  { title: 'Send the task', description: 'Email the website and everything in the list below.' },
  { title: 'We open your site', description: 'We watch the video, read the code and the note.' },
  { title: 'Walk us through it', description: 'A short call or office visit where you explain your code and make a small change to it live.' },
];

export const careersFAQs: FAQItem[] = [
  {
    question: 'Can I use AI tools for the task?',
    answer:
      'Yes. The video is meant to be made with AI, and you can use AI for the code too; we use it every day. But in the walkthrough you will explain your code and how you made the video, and change your site live. If you cannot explain a part, it does not count.',
  },
  {
    question: 'Which AI tool should I use for the video?',
    answer:
      'Any you like; free tiers are fine. We care that it is clearly you, that it says something real about you, and that you can tell us how you made it.',
  },
  {
    question: 'I do not have a domain. Is a low SEO score a problem?',
    answer:
      'No. A free subdomain with no inbound links will not score perfectly. We care that you ran the checks, understood what they say and fixed what you could.',
  },
  {
    question: 'I live outside Nagpur. Can I still apply?',
    answer: 'Not for this role. It is hybrid with office days in Nagpur, so we are only taking Nagpur-based candidates.',
  },
  {
    question: 'I graduated already. Can I apply?',
    answer:
      'Final-semester students who can do this as their final-semester internship are preferred. If you have just graduated and live in Nagpur, you can still send the task.',
  },
  {
    question: 'How long should the task take?',
    answer: 'A weekend is enough. Keep the site simple; we would rather see a small site you understand than a big one you do not.',
  },
];
