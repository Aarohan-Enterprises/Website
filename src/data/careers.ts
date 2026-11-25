import type { FAQItem } from '@/data/faq';

export const APPLY_EMAIL = 'contact@pinecoder.in';
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
    title: 'Build and publish your portfolio website',
    description:
      'A site about your work: your past projects, your tech stack and your accomplishments. Any stack, any free host: GitHub Pages, Netlify, Vercel or Cloudflare Pages. A free subdomain is fine. No photo of yourself; leave it out.',
  },
  {
    title: 'Show your projects properly',
    description:
      'For each project: what it does, what you built yourself, the stack, and a link to the code or a live demo. Then your accomplishments: internships, hackathons, ranks, certifications, anything you are proud of.',
  },
  {
    title: 'Make an AI-generated video about your work',
    description:
      'Use AI tools to make a 30 to 90 second video that presents your projects, your stack and why you want this internship. No picture of you in it. Put it on your site, self-hosted or as an unlisted YouTube embed, with a line on which tools you used and how.',
  },
  {
    title: 'Run SEO checks and tell us the score',
    description:
      'Run Lighthouse (Chrome DevTools, mobile) and Google PageSpeed Insights on your site and screenshot the scores. A low score is fine: without a domain or links you will not get 100. In 150 words or less, tell us what pulls it down, what you fixed and what you would fix next. Put the screenshots and the note on your site.',
  },
];

export const siteChecklist = [
  'Your projects, each with what it does, your part, the stack and a code or demo link',
  'Your tech stack and accomplishments',
  'The AI video about your work, with a line on the tools you used',
  'Your Lighthouse and PageSpeed Insights score screenshots and your short note',
];

export const processSteps = [
  { title: 'Submit the form', description: 'Your website link and your resume. Everything else is on your site.' },
  { title: 'We open your site', description: 'We go through your projects, watch the video and read the code and the note.' },
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
      'Any you like; free tiers are fine. We care that it is about your real projects, that it does not show your picture, and that you can tell us how you made it.',
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
