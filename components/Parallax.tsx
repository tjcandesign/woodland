'use client';

import { useEffect } from 'react';

export default function Parallax() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    type Target = { el: HTMLElement; container: HTMLElement; factor: number };
    const targets: Target[] = [];

    document.querySelectorAll<HTMLElement>('.hero-bg').forEach((el) => {
      const container = el.closest('.hero') as HTMLElement | null;
      if (container) targets.push({ el, container, factor: 0.25 });
    });
    document.querySelectorAll<HTMLElement>('.section-image-bg').forEach((el) => {
      const container = el.closest('.section-image') as HTMLElement | null;
      if (container) targets.push({ el, container, factor: 0.2 });
    });

    if (!targets.length) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const t of targets) {
        const rect = t.container.getBoundingClientRect();
        if (rect.bottom > -200 && rect.top < vh + 200) {
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = vh / 2;
          const offset = (viewportCenter - sectionCenter) * t.factor;
          t.el.style.setProperty('--parallax-y', offset + 'px');
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
