import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Woodland Brand Language',
  robots: 'noindex, nofollow',
};

// Internal page — redirects to the static brand language document.
// Server component so the noindex tag is emitted into <head> for crawlers.
export default function BrandRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "window.location.replace('/brand.html');",
      }}
    />
  );
}
