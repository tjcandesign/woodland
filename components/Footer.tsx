'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { SiteSettings, ContactInfo, Navigation, NavLink } from '@/lib/sanity/content';

function FooterLink({ link }: { link: NavLink }) {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
  ) : (
    <Link href={link.href}>{link.label}</Link>
  );
}

export default function Footer({
  settings,
  contact,
  nav,
}: {
  settings: SiteSettings;
  contact: ContactInfo;
  nav: Navigation;
}) {
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
          <p>{settings.tagline}</p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          {nav.footerExplore.map((l) => <FooterLink key={l.href + l.label} link={l} />)}
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          {nav.footerResources.map((l) => <FooterLink key={l.href + l.label} link={l} />)}
        </div>
        <div className="footer-col">
          <h5>Capitol Hill Office</h5>
          <p><a href={contact.mapUrl} target="_blank" rel="noopener">{contact.addressLine1}<br />{contact.addressLine2}</a></p>
          <p className="footer-stack"><a href={`tel:${contact.phoneTel}`}>{contact.phone}</a><br />Fax {contact.fax}</p>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>{settings.copyright}</div>
        <div className="footer-underwriters">Underwriters: {settings.underwriters}</div>
      </div>
    </footer>
  );
}
