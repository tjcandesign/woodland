'use client';

import dynamic from 'next/dynamic';

const NextStudioLoaded = dynamic(
  () => import('./StudioInner').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ padding: 40 }}>Loading Studio…</div> }
);

export default function StudioClient() {
  return <NextStudioLoaded />;
}
