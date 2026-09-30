'use client';

import { useEffect, useState } from 'react';

// The hero's signature instrument, re-tooled for a software studio: a console
// that rotates through three views a real build lives in — a CI/CD pipeline,
// the code itself, and a production uptime board. All values are simulated on
// the front end (no live feed); pine is the only accent, ink the structure.

const VIEWS = ['BUILD', 'CODE', 'STATUS'] as const;

// Deterministic 0..1 noise so SSR and the first client render agree (tick = 0).
function noise(a: number, b: number) {
  const x = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/* ── 1 · CI/CD pipeline ─────────────────────────────────────── */
const STEPS = [
  { label: 'Install deps', dur: '1.2s' },
  { label: 'Typecheck', dur: '0.8s' },
  { label: 'Build', dur: '6.4s' },
  { label: 'Test · 48 passed', dur: '3.1s' },
  { label: 'Deploy → prod', dur: '2.7s' },
];

function Pipeline({ tick }: { tick: number }) {
  // Walk through the steps and reset, so it always looks like it's shipping.
  const done = tick % (STEPS.length + 2);

  return (
    <div className="font-mono text-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="text-ink-soft">aarohan/app · main</span>
        <span className="text-ink-faint">#128</span>
      </div>
      <div className="text-ink-soft mb-3">
        <span className="text-pine">$</span> git push origin main
      </div>

      <div className="space-y-2">
        {STEPS.map((s, i) => {
          const state = i < done ? 'ok' : i === done ? 'run' : 'wait';
          return (
            <div key={s.label} className="flex items-center gap-2.5">
              <span
                className={
                  state === 'ok'
                    ? 'text-pine'
                    : state === 'run'
                    ? 'text-pine animate-pulse'
                    : 'text-rule-strong'
                }
              >
                {state === 'ok' ? '✓' : state === 'run' ? '▸' : '·'}
              </span>
              <span className={state === 'wait' ? 'text-ink-faint' : 'text-ink'}>{s.label}</span>
              <span className="ml-auto text-ink-faint">
                {state === 'ok' ? s.dur : state === 'run' ? 'running…' : 'queued'}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-rule flex items-center justify-between">
        {done >= STEPS.length ? (
          <span className="text-pine">✓ Live at yourapp.com</span>
        ) : (
          <span className="text-ink-faint">building…</span>
        )}
        <span className="text-ink-faint">14.2s</span>
      </div>
    </div>
  );
}

/* ── 2 · The code ───────────────────────────────────────────── */
type Tok = { t: string; c?: 'kw' | 'str' | 'fn' | 'mut' };
const CODE: Tok[][] = [
  [{ t: 'export', c: 'kw' }, { t: ' async ', c: 'kw' }, { t: 'function ', c: 'kw' }, { t: 'POST', c: 'fn' }, { t: '(req) {' }],
  [{ t: '  const', c: 'kw' }, { t: ' body = ' }, { t: 'await', c: 'kw' }, { t: ' req.' }, { t: 'json', c: 'fn' }, { t: '()' }],
  [{ t: '  const', c: 'kw' }, { t: ' order = ' }, { t: 'await', c: 'kw' }, { t: ' razorpay.orders.' }, { t: 'create', c: 'fn' }, { t: '({' }],
  [{ t: '    amount: ' }, { t: 'body.amount', c: 'mut' }, { t: ',' }],
  [{ t: '    currency: ' }, { t: "'INR'", c: 'str' }, { t: ',' }],
  [{ t: '  })' }],
  [{ t: '  return', c: 'kw' }, { t: ' Response.' }, { t: 'json', c: 'fn' }, { t: '({ id: order.id })' }],
  [{ t: '}' }],
];

const tokClass = (c?: Tok['c']) =>
  c === 'kw' ? 'text-pine' : c === 'fn' ? 'text-ink' : c === 'str' ? 'text-up' : c === 'mut' ? 'text-down' : 'text-ink-soft';

function CodeView({ tick }: { tick: number }) {
  const cursorLine = tick % CODE.length;
  return (
    <div className="font-mono text-[0.72rem] leading-relaxed">
      <div className="flex items-center justify-between mb-3 text-ink-faint">
        <span>app/api/checkout/route.ts</span>
        <span className="eyebrow text-ink-faint">TypeScript</span>
      </div>
      <div>
        {CODE.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-rule-strong select-none w-4 text-right">{i + 1}</span>
            <span className="whitespace-pre">
              {line.map((tok, j) => (
                <span key={j} className={tokClass(tok.c)}>
                  {tok.t}
                </span>
              ))}
              {i === cursorLine && <span className="inline-block w-1.5 h-3.5 -mb-0.5 bg-pine ml-0.5 align-middle" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3 · Production status board ────────────────────────────── */
const SERVICES = [
  { name: 'api.yourapp.com', base: 42 },
  { name: 'auth service', base: 18 },
  { name: 'payments · Razorpay', base: 63 },
  { name: 'cdn · CloudFront', base: 11 },
];

function StatusBoard({ tick }: { tick: number }) {
  const lat = (base: number, i: number) => Math.round(base * (0.8 + noise(tick + i, 5) * 0.4));
  const bars = Array.from({ length: 14 }, (_, i) => 0.35 + noise(tick + i, 2) * 0.65);

  return (
    <div className="font-mono text-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="eyebrow text-ink-faint">Uptime · 30d</span>
        <span className="text-pine">99.98%</span>
      </div>

      <div className="space-y-2 mb-4">
        {SERVICES.map((s, i) => (
          <div key={s.name} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-up inline-block" />
            <span className="text-ink-soft">{s.name}</span>
            <span className="ml-auto text-ink tabular-nums">{lat(s.base, i)}ms</span>
          </div>
        ))}
      </div>

      <div className="eyebrow text-ink-faint mb-2">Requests / min</div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 bg-pine/60" style={{ height: `${h * 100}%` }} />
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-rule flex items-center justify-between text-ink-soft">
        <span>p95 <span className="text-ink">128ms</span></span>
        <span>errors <span className="text-pine">0</span></span>
      </div>
    </div>
  );
}

/* ── Shell ──────────────────────────────────────────────────── */
export function LiveTerminal() {
  const [view, setView] = useState(0);
  const [tick, setTick] = useState(0);
  const [clock, setClock] = useState('09:15:00');

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const rot = setInterval(() => setView((v) => (v + 1) % 3), 6000);
    const t = setInterval(() => setTick((x) => x + 1), 1200);
    const clk = setInterval(
      () => setClock(new Date().toLocaleTimeString('en-GB', { hour12: false })),
      1000,
    );
    return () => { clearInterval(rot); clearInterval(t); clearInterval(clk); };
  }, []);

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-rule">
        <span className="eyebrow text-ink flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-up inline-block animate-pulse" />
          Build Console
        </span>
        <span className="font-mono text-[0.65rem] text-ink-faint tabular-nums">{clock} IST</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-rule">
        {VIEWS.map((v, i) => (
          <button
            key={v}
            onClick={() => setView(i)}
            className={`flex-1 py-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] border-r border-rule last:border-r-0 transition-colors ${
              view === i ? 'bg-pine text-paper' : 'text-ink-faint hover:text-ink'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {/* Rotating body — fixed height so the hero doesn't jump on switch */}
      <div className="relative h-[300px]">
        {[Pipeline, CodeView, StatusBoard].map((View, i) => (
          <div
            key={i}
            className={`absolute inset-0 p-4 transition-opacity duration-500 ${
              view === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <View tick={tick} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t border-rule px-4 py-2">
        <span className="font-mono text-[0.6rem] text-ink-faint">
          Live preview · the way we build &amp; ship for you
        </span>
      </div>
    </div>
  );
}
