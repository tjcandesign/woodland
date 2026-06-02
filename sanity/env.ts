export const apiVersion = '2025-01-01';

// These are public values (NEXT_PUBLIC_*). We default to the known project/
// dataset so a missing env var on the build host can never break the build —
// it would only ever fall back to the correct production values anyway.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'plu047nm';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Optional: the production dataset is public-read, so published content is
// fetchable without a token. The token is only used to improve rate limits /
// support private datasets.
export const readToken = process.env.SANITY_API_READ_TOKEN;
