import type { Metadata } from 'next';
import { GuidesNav } from '@/components/GuidesNav';

export const metadata: Metadata = {
  title: 'Brödguider - Lär dig baka surdegsbröd',
  description:
    'Lär dig baka surdegsbröd: starta egen surdegsgrund, baka med fullkorn och få tips för perfekt bröd varje gång. Guider för nybörjare och erfarna.',
  alternates: {
    canonical: '/guider',
  },
  openGraph: {
    title: 'Brödguider - Lär dig baka surdegsbröd',
    description:
      'Lär dig baka surdegsbröd: starta egen surdegsgrund, baka med fullkorn och få tips för perfekt bröd varje gång.',
    url: '/guider',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Brödguider',
            url: 'https://xn--bakabrd-f1a.nu/guider',
            description:
              'Guider för att lära sig baka surdegsbröd: starta surdegsgrund, baka med fullkorn och tips för perfekt bröd',
            inLanguage: 'sv-SE',
            isPartOf: {
              '@type': 'WebSite',
              name: 'bakabröd.nu',
              url: 'https://xn--bakabrd-f1a.nu/',
            },
          }),
        }}
      />
      <main className="container max-w-5xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <GuidesNav />
          <section>
            <article className="prose prose-sm md:prose-lg lg:prose-xl">
              <h1 className="text-secondary">Brödguider</h1>
              <p>
                Här hittar du guider för att lyckas med ditt surdegsbröd – från
                att baka i gryta till att starta din egen surdegsgrund. Välj en
                guide i menyn för att komma igång.
              </p>
              {children}
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
