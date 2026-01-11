import type { Metadata } from 'next';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import { CookieNotice } from '@/components/CookieNotice';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--bakabrd-f1a.nu'),
  title: {
    default: 'bakabröd.nu - Surdegskalkylator och brödguider',
    template: '%s | bakabröd.nu',
  },
  description:
    'Beräkna exakta mängder mjöl, vatten och surdeg med vår gratis degkalkylator. Perfekt för hembakning av surdegsbröd med rätt hydreringsgrad.',
  keywords: [
    'surdeg',
    'surdegskalkylator',
    'brödbakning',
    'bagarprocent',
    'hydrering',
    'degkalkylator',
    'baka bröd',
  ],
  authors: [{ name: 'bakabröd.nu' }],
  creator: 'bakabröd.nu',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://xn--bakabrd-f1a.nu/',
    siteName: 'bakabröd.nu',
    title: 'bakabröd.nu - Surdegskalkylator och brödguider',
    description:
      'Beräkna exakta mängder mjöl, vatten och surdeg med vår gratis degkalkylator. Perfekt för hembakning av surdegsbröd.',
    images: [
      {
        url: '/logo-bread.png',
        width: 512,
        height: 512,
        alt: 'bakabröd.nu logotyp',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'bakabröd.nu - Surdegskalkylator och brödguider',
    description:
      'Beräkna exakta mängder mjöl, vatten och surdeg med vår gratis degkalkylator.',
    images: ['/logo-bread.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <AnalyticsProvider>
          <div className="container max-w-5xl mx-auto">
            <Navbar />
          </div>
          <div className="flex flex-col min-h-screen">{children}</div>
          <Footer />
          <CookieNotice />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
