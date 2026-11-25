'use client';

/** Scrolls to a section on the page without putting a #fragment in the address bar. */
export function ScrollButton({
  target,
  className,
  children,
}: {
  target: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const el = document.getElementById(target);
        if (!el) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        el.querySelector<HTMLElement>('input, button, a')?.focus({ preventScroll: true });
      }}
    >
      {children}
    </button>
  );
}
