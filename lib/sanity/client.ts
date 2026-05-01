import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, readToken } from '@/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: readToken,
  perspective: 'published',
});
