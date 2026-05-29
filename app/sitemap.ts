import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.woodlandtitledc.com';

// Public, indexable pages only. Internal pages (brand, work, comms-plan,
// listing-refresh, project-status, brand-guidelines) are excluded on purpose.
const PUBLIC_ROUTES = [
  '',
  '/services',
  '/closing-process',
  '/code-of-conduct',
  '/contact',
  '/security',
  '/utilities',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}/`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
