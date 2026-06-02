import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, readToken } from '@/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // false so build-time fetches (static export) always get fresh published
  // content — the API CDN can serve stale data for ~60s after a publish, which
  // would make webhook-triggered rebuilds redeploy old content.
  useCdn: false,
  token: readToken,
  perspective: 'published',
});
