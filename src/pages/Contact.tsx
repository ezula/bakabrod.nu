import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Om surdegskalkylatorn och kontakt | bakabröd.nu</title>
        <link rel="canonical" href="https://bakabröd.nu/contact" />
        <meta
          name="description"
          content="Lär känna personen bakom surdegskalkylatorn på bakabröd.nu. Kontakta oss med frågor eller förslag på förbättringar."
        />
        <meta property="og:title" content="Om surdegskalkylatorn och kontakt" />
        <meta
          property="og:description"
          content="Lär känna personen bakom surdegskalkylatorn på bakabröd.nu. Kontakta oss med frågor eller förslag."
        />
        <meta
          property="og:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
        <meta property="og:url" content="https://xn--bakabrd-f1a.nu/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Om surdegskalkylatorn och kontakt"
        />
        <meta
          name="twitter:description"
          content="Lär känna personen bakom surdegskalkylatorn på bakabröd.nu."
        />
        <meta
          name="twitter:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
      </Helmet>
      <main className="container max-w-5xl mx-auto p-4">
        <article className="prose prose-sm md:prose-lg lg:prose-xl">
          <h1 className="text-secondary">Om sudegskalkylatorn</h1>
          <p>
            Surdegskalkylatorn är ett litet projekt som drivs av en glad
            utvecklare som också har ett stort intresse av att baka bröd med
            just surdeg.
          </p>
          <p>
            Det finns enorma hälsofördelar med att äta bröd bakat på riktig
            surdeg. Bakar man dessutom med egenmalet fullkornsmjöl så är detta
            bröd en av de bättre saker man kan äta.
          </p>
          <p>
            Idén till denna sida föddes när jag malde mitt eget mjöl. Jag ville
            experimentera med olika hydreringsgrader samt baka olika storlekar
            på bröden. Jag insåg då att det vore smidigt att ha en sida där man
            snabbt kan skriva in mängerna och få resten serverat.
          </p>
          <p>
            Om du gillar denna sida, vill vara med eller om du har synpunkter på
            förbättringar så får du gärna skicka ett mail till mig på{' '}
            <a href="mailto:svensmikael@gmail.com">svensmikael[a]gmail.com</a>.
          </p>
        </article>
      </main>
    </>
  );
}

export default Contact;
