import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Progress — Woodland Estate & Title',
  robots: 'noindex, nofollow',
};

// Internal page — redirects to the project progress page.
// Server component so the noindex tag is emitted into <head> for crawlers.
export default function ProjectStatusRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "window.location.replace('/work/');",
      }}
    />
  );
}
