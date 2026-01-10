import { Helmet } from 'react-helmet';
import BreadAbout from '../content/BreadAbout.mdx';

function AboutBread() {
  return (
    <>
      <Helmet>
        <title>
          Fakta om bröd och surdeg - Hälsofördelar och historia | bakabröd.nu
        </title>
        <link rel="canonical" href="https://bakabröd.nu/aboutbread" />
        <meta
          name="description"
          content="Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa än industribakat bröd."
        />
        <meta
          property="og:title"
          content="Fakta om bröd och surdeg - Hälsofördelar och historia"
        />
        <meta
          property="og:description"
          content="Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa."
        />
        <meta
          property="og:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
        <meta
          property="og:url"
          content="https://xn--bakabrd-f1a.nu/aboutbread"
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="sv_SE" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Fakta om bröd och surdeg - Hälsofördelar och historia"
        />
        <meta
          name="twitter:description"
          content="Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre."
        />
        <meta
          name="twitter:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
      </Helmet>
      <main className="container max-w-5xl mx-auto p-4">
        <article className="prose prose-sm md:prose-lg lg:prose-xl">
          <BreadAbout />
        </article>
      </main>
    </>
  );
}

export default AboutBread;
