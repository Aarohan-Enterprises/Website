'use client';

import Link from 'next/link';
import { useEffect, type ComponentProps, type MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const KEY = 'scroll-to-section';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Link that scrolls to a section without ever putting #hash in the address bar. */
export function SectionLink({ href, onClick, ...rest }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const router = useRouter();
  const target = String(href);
  const hashAt = target.indexOf('#');

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (hashAt < 0 || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const path = target.slice(0, hashAt) || '/';
    const id = target.slice(hashAt + 1);
    if (path === pathname) {
      scrollToId(id);
      return;
    }
    try {
      sessionStorage.setItem(KEY, id);
    } catch {}
    router.push(path);
  };

  return <Link href={href} onClick={handle} {...rest} />;
}

/** Completes a SectionLink navigation that crossed pages. Mount once in the layout. */
export function SectionScroller() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      const id = sessionStorage.getItem(KEY);
      if (!id) return;
      sessionStorage.removeItem(KEY);
      setTimeout(() => scrollToId(id), 50);
    } catch {}
  }, [pathname]);
  return null;
}
