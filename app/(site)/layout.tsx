import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteSettings, getContactInfo, getNavigation } from '@/lib/sanity/content';

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, contact, nav] = await Promise.all([
    getSiteSettings(),
    getContactInfo(),
    getNavigation(),
  ]);

  return (
    <>
      <Header nav={nav.header} />
      {children}
      <Footer settings={settings} contact={contact} nav={nav} />

      {/* Qualia quote widget — floating "get a quote" button, site-wide.
          Self-injects its own UI from the loader script. */}
      <Script
        id="qualia-quote-widget-loader"
        src="https://connect.qualia.com/quote-widget/scripts/init"
        data-token="MQAAgQgFnGL9yHXhn"
        strategy="afterInteractive"
      />
    </>
  );
}
