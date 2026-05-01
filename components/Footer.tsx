'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const ringRef = useRef<HTMLImageElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const ring = ringRef.current;
      if (!ring) return;
      const doc = document.documentElement;
      const y = window.pageYOffset || doc.scrollTop || 0;
      const max = Math.max(
        (doc.scrollHeight || document.body.scrollHeight) - window.innerHeight,
        1
      );
      const ratio = Math.min(Math.max(y / max, 0), 1);
      ring.style.setProperty('--spin', (ratio * 450) + 'deg');
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
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

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo-spin" aria-label="Woodland Estate &amp; Title">
            <img ref={ringRef} className="footer-logo-ring" src="/assets/circle-ring-white.svg" alt="" aria-hidden="true" />
            <img className="footer-logo-w" src="/assets/circle-w-white.svg" alt="Woodland Estate &amp; Title" />
          </div>
          <p>Attorney-led property settlements, steady and thorough. The way closings ought to feel.</p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          <Link href="/services">Services</Link>
          <Link href="/closing-process">Closing Process</Link>
          <Link href="/code-of-conduct">Code of Conduct</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <Link href="/security">Security</Link>
          <Link href="/utilities">Utility Links</Link>
        </div>
        <div className="footer-col">
          <h5>Capitol Hill Office</h5>
          <p><a href="https://maps.google.com/?q=659+C+Street+SE+Washington+DC+20003" target="_blank" rel="noopener">659 C Street, SE<br />Washington, DC 20003</a></p>
          <p className="footer-stack"><a href="tel:2025166855">202.516.6855</a><br />Fax (202) 888-1179</p>
          <p><a href="mailto:woodlandteam@woodlandtitleDC.com">woodlandteam@woodlandtitleDC.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy;2018 by Woodland Estate &amp; Title</div>
        <div className="footer-underwriters">Underwriters: Fidelity National Title Insurance Company &middot; Stewart Title Guaranty Company</div>
      </div>
    </footer>
  );
}
