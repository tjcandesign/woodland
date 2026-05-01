'use client';

import { useEffect } from 'react';

export default function ProcessArrows() {
  useEffect(() => {
    const cards = document.querySelectorAll('.process-mini-card');
    const arrows = document.querySelectorAll('.process-mini-arrow');
    if (!cards.length || !arrows.length) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const triggerLine = vh * 0.72;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const visible = rect.top < triggerLine;

        if (i > 0) {
          const arrow = arrows[i - 1];
          if (!arrow) return;
          if (visible) {
            arrow.classList.add('is-active');
          } else {
            arrow.classList.remove('is-active');
          }
        }
      });

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
