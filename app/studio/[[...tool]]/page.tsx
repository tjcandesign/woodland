import StudioClient from './StudioClient';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ tool: [] as string[] }];
}

export default function StudioPage() {
  return <StudioClient />;
}
