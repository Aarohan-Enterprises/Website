// Systems built for individual clients. Described without names; never sold publicly.
export interface ClientWork {
  title: string;
  description: string;
  points: string[];
}

export const clientWork: ClientWork[] = [
  {
    title: 'Freight operations management',
    description:
      'A freight operations management system for a logistics client: dispatch, freight bills and proof of delivery in one place, synced into their own Google Sheet every 15 minutes, with an operations desk for exceptions and alerts.',
    points: ['Dispatch and bills in one system', 'Sheet sync every 15 minutes', 'Exceptions and alerts on an ops desk'],
  },
  {
    title: 'Real-time market data platform',
    description:
      'A real-time market data and charting platform for a trading-technology client: live data ingestion and streaming, charts with technical indicators, an admin console for users and data feeds, and monitored production infrastructure.',
    points: ['Live ingestion and streaming', 'Charts with technical indicators', 'Admin console for users and feeds'],
  },
  {
    title: 'Gaming-cafe management',
    description:
      'A cafe management system for a gaming-cafe client: a lock-screen client on every PC and a web console for staff and owners, with time and money tracked in one ledger.',
    points: ['Lock-screen client on every PC', 'Web console for staff and owners', 'Prepaid and postpaid wallet ledger'],
  },
];
