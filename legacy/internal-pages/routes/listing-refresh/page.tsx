import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Listing Refresh & Credibility Guide — Woodland Estate & Title',
  robots: 'noindex, nofollow',
};

// Internal page — redirects to the static listing refresh guide.
// Server component so the noindex tag is emitted into <head> for crawlers.
export default function ListingRefreshRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "window.location.replace('/listing-refresh.html');",
      }}
    />
  );
}
