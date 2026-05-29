import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.woodlandtitledc.com';

// Note: internal pages (/brand, /brand-guidelines, /work, /comms-plan,
// /listing-refresh, /project-status) are kept OUT of the sitemap and each
// carries its own `noindex` meta tag. We intentionally do NOT Disallow them
// here — a disallowed URL can still be indexed without its content, whereas a
// crawlable noindex page is reliably dropped from the index.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
