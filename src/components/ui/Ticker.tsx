// The signature device, re-tuned for a software studio: a continuously
// scrolling tape of the stack we build on. No live feed — pure CSS marquee,
// two identical runs sliding left by exactly one copy width for a seamless loop.

const STACK = [
  'Next.js',
  'TypeScript',
  'React',
  'Go',
  'Node.js',
  'PostgreSQL',
  'AWS Lambda',
  'CloudFront',
  'Docker',
  'Flutter',
  'Python · FastAPI',
  'Chrome Extensions',
  'Tailwind CSS',
  'Razorpay',
  'REST & Webhooks',
];

function Run() {
  return (
    <div className="ticker-track">
      {STACK.map((item) => (
        <span key={item} className="inline-flex items-baseline gap-2 px-6">
          <span className="text-pine">/</span>
          <span className="text-ink-soft">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="border-b border-rule bg-band/60">
      <div className="ticker-mask overflow-hidden py-2 font-mono text-xs uppercase tracking-wider">
        <div className="ticker-marquee" aria-hidden="true">
          <Run />
          <Run />
        </div>
      </div>
    </div>
  );
}
