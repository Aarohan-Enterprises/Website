import type { LucideIcon } from 'lucide-react';
import {
  Bell, BarChart3, Users, FileText, ShieldCheck, Clock, SlidersVertical,
} from 'lucide-react';

export interface Tool {
  icon: LucideIcon;
  name: string;
  tag: string;
  href: string;
  description: string;
  features: string[];
}

export const tools: Tool[] = [
  {
    icon: Bell,
    name: 'AlertSync',
    tag: 'Free & paid plans',
    href: 'https://alertsync.in',
    description: 'TradingView-to-Telegram relay. Alerts delivered in under 100ms, zero config.',
    features: ['Sub-100ms delivery', 'Zero-config webhooks', 'Full audit trail'],
  },
  {
    icon: SlidersVertical,
    name: 'Loadout',
    tag: 'Free · ₹199 a month',
    href: 'https://loadout.pinecoder.in',
    description:
      "Chrome extension that saves a TradingView indicator's settings as a named preset and puts them back in one click.",
    features: ['Every indicator, one line each', 'Drift detection on live charts', 'No account, nothing auto-renews'],
  },
  {
    icon: BarChart3,
    name: 'Volatility Screener',
    tag: 'Free',
    href: 'https://vbc.pinecoder.in',
    description: 'Real-time crypto volatility screener built on Bollinger Bands & ATR analysis.',
    features: ['Live WebSocket data', 'Multi-timeframe scans', 'Breakout & squeeze alerts'],
  },
  {
    icon: Users,
    name: 'GroupSync',
    tag: 'Free scan · ₹50',
    href: 'https://groupsync.pinecoder.in',
    description:
      "Chrome extension that exports any WhatsApp group's member list to CSV, Excel, or vCard.",
    features: ['CSV, Excel & vCard', 'Unsaved numbers included', 'Nothing leaves your browser'],
  },
  {
    icon: FileText,
    name: 'PDF Editor',
    tag: 'Free · no signup',
    href: 'https://pdf2.in',
    description: 'Browser-based PDF tools — merge, split, rotate, compress, and convert.',
    features: ['Merge, split & rotate', 'Compress & watermark', 'PDF & DOCX conversion'],
  },
  {
    icon: ShieldCheck,
    name: 'Section63',
    tag: 'From ₹250 · no signup',
    href: 'https://section63.in',
    description:
      'Turns a WhatsApp chat export into a Section 63 (BSA 2023) certified exhibit for Indian courts.',
    features: ['s.63(4) certificate + SHA-256', 'Media hashed & reproduced', 'Read every page before you pay'],
  },
  {
    icon: Clock,
    name: 'Meridian',
    tag: 'Free · Microsoft Store',
    href: 'https://meridian.pinecoder.in',
    description:
      'A world clock for the Windows desktop — every timezone you work across in one quiet window.',
    features: ['DST-aware IANA database', 'Internet time-drift sync', 'Always-on-top overlay'],
  },
];

// Tools surfaced on the home page; the rest live on the /tools page.
export const featuredToolNames = ['AlertSync', 'Loadout'];
export const featuredTools = tools.filter((t) => featuredToolNames.includes(t.name));
