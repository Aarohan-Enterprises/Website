import { pageMetadata } from '@/lib/metadata';

// assessment/page.tsx is a client component and can't export metadata, so it lives here.
export const metadata = pageMetadata('/assessment/', {
  title: 'Algo Trading Readiness Assessment',
  description:
    'Test your algo trading readiness: five quick questions to gauge how prepared you are for automated trading. Free assessment from Aarohan Enterprises.',
});

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
