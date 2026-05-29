import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />

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
