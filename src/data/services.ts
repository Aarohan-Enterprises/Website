export interface Service {
  title: string;
  description: string;
  features: string[];
}

// Ordered by priority: operations first, then analytics, then convenience.
export const services: Service[] = [
  {
    title: 'Business operations systems',
    description:
      'Dispatch, inventory, billing, approvals and reporting in one system, replacing spreadsheets and chat threads. Our freight operations management system is one example.',
    features: ['Live status of every job', 'Role-based access and approvals', 'Exceptions surfaced, not hunted'],
  },
  {
    title: 'Data and analytics',
    description:
      'Dashboards, reports and alerts that turn your records into decisions: what is late, what is growing, what is costing money.',
    features: ['Dashboards on live data', 'Reports that send themselves', 'Alerts when something drifts'],
  },
  {
    title: 'Everyday convenience',
    description:
      'Apps, automations and integrations that remove clicks. WhatsApp, Google Sheets, payments and email handled for your people.',
    features: ['WhatsApp and Sheets integrations', 'Payment gateway wiring', 'Fewer steps, clearer screens'],
  },
  {
    title: 'Custom software and SaaS',
    description:
      'Web apps, admin consoles and MVPs through to billing, accounts and a production launch, on the stack we run our own products on.',
    features: ['Prototype to launch', 'Accounts, billing and invoicing', 'Documented, tested code'],
  },
  {
    title: 'Desktop apps and extensions',
    description: 'Windows apps and browser extensions for jobs a website cannot do.',
    features: ['Windows desktop clients', 'Chrome extensions', 'Offline-friendly tools'],
  },
  {
    title: 'Cloud and operations',
    description:
      'AWS deployments, monitoring, backups and zero-downtime releases, set up and kept running.',
    features: ['AWS deployments', 'Backups and monitoring', 'Zero-downtime releases'],
  },
  {
    title: 'Trading systems and dashboards',
    description:
      'Bots wired into Zerodha and Angel One, Pine Script indicators and screener dashboards. The work we started with.',
    features: ['Broker integrations', 'Pine Script indicators', 'Screener dashboards'],
  },
];

export const pillars = [
  {
    kicker: 'Most important',
    title: 'Business operations',
    description:
      'The work that keeps the business moving: orders, dispatch, billing, approvals, handovers. One system everyone shares, instead of five spreadsheets and a chat group.',
    points: ['Live status of every job', 'Fewer hand-offs and re-keying', 'Exceptions surfaced, not hunted'],
  },
  {
    kicker: '',
    title: 'Data and analytics',
    description:
      'Your records, turned into answers. Dashboards that show what is late, what is growing and where money leaks, updated as work happens.',
    points: ['Dashboards on live data', 'Reports that send themselves', 'Alerts when something drifts'],
  },
  {
    kicker: '',
    title: 'User convenience',
    description:
      'Software people are glad to open. Fewer clicks, clear screens, and the boring steps handled for them, on web, desktop and WhatsApp.',
    points: ['Built around how your team works', 'Automations for repeated steps', 'Simple enough to need no training'],
  },
];
