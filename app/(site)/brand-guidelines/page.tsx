import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Woodland Brand Guidelines',
  robots: 'noindex, nofollow',
};

// The brand guidelines + brand story are now a single canonical page at
// /brand.html. This route redirects there so the /brand-guidelines URL keeps working.
export default function BrandGuidelinesRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "window.location.replace('/brand.html');",
      }}
    />
  );
}
