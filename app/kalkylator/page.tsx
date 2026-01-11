import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Calculator } from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Surdegskalkylator - Beräkna mjöl, vatten och hydreringsgrad',
  description:
    'Gratis surdegskalkylator - räkna ut hydreringsgrad, mjöl, vatten och salt för ditt surdegsbröd. Anpassa mängder efter antal bröd du vill baka.',
  alternates: {
    canonical: '/kalkylator',
  },
  openGraph: {
    title: 'Surdegskalkylator - Beräkna mjöl, vatten och hydreringsgrad',
    description:
      'Gratis surdegskalkylator - räkna ut hydreringsgrad, mjöl, vatten och salt för ditt surdegsbröd.',
    url: '/kalkylator',
  },
};

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Surdegskalkylatorn',
            url: 'https://xn--bakabrd-f1a.nu/kalkylator',
            description:
              'Gratis surdegskalkylator för att beräkna mjöl, vatten, salt och hydreringsgrad för surdegsbröd',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'SEK',
            },
            inLanguage: 'sv-SE',
          }),
        }}
      />
      <Suspense>
        <Calculator />
      </Suspense>
    </>
  );
}
