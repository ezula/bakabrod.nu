import type { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'bakabröd.nu',
            url: 'https://xn--bakabrd-f1a.nu/',
            description: 'Surdegskalkylator och brödguider för hembakning',
            inLanguage: 'sv-SE',
          }),
        }}
      />
      <HomeContent />
    </>
  )
}
