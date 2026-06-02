'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/lib/sanity/content';

export default function Header({ nav }: { nav: NavLink[] }) {
  const [navOpen, setNavOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);
  const accumDown = useRef(0);
  const accumUp = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const HIDE_THRESHOLD = 40;
    const SHOW_THRESHOLD = 12;
    const HIDE_DELAY = 140;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 80 || navOpen) {
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        setIsHidden(false);
        accumDown.current = 0;
        accumUp.current = 0;
      } else if (delta > 0) {
        accumDown.current += delta;
        accumUp.current = 0;
        if (accumDown.current > HIDE_THRESHOLD && !hideTimer.current) {
          hideTimer.current = setTimeout(() => {
            setIsHidden(true);
            hideTimer.current = null;
          }, HIDE_DELAY);
        }
      } else if (delta < 0) {
        accumUp.current += -delta;
        accumDown.current = 0;
        if (accumUp.current > SHOW_THRESHOLD) {
          if (hideTimer.current) {
            clearTimeout(hideTimer.current);
            hideTimer.current = null;
          }
          setIsHidden(false);
        }
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navOpen]);

  return (
    <header className={`top-header${isHidden ? ' is-hidden' : ''}`}>
      <Link className="top-header-brand" href="/">
        <img src="/assets/woodland-stacked-white.svg" alt="Woodland Estate &amp; Title" />
      </Link>
      <button
        className={`nav-toggle${navOpen ? ' is-open' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="nav-toggle-bar"></span>
        <span className="nav-toggle-bar"></span>
        <span className="nav-toggle-bar"></span>
      </button>
      <nav className={`top-nav${navOpen ? ' open' : ''}`}>
        {nav.map((link) =>
          link.external ? (
            <a
              key={link.href + link.label}
              className={link.cta ? 'cta' : undefined}
              href={link.href}
              target="_blank"
              rel="noopener"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href + link.label}
              className={link.cta ? 'cta' : undefined}
              href={link.href}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
