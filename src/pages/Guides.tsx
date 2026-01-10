import { Helmet } from 'react-helmet';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import BakeWithWholeGrain from './guide-content/BakeWithWholeGrain.mdx';
import StartYourOwnSourdugh from './guide-content/StartYourOwnSourdough.mdx';
import TipsAndTricks from './guide-content/TipsAndTricks.mdx';

function Layout() {
  return (
    <main className="container max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <nav className="hidden md:flex">
          <ul className="menu md:menu-md lg:menu-lg bg-base-200 rounded-box w-56">
            <li>
              <h2 className="menu-title">Innehåll</h2>
              <ul>
                <li>
                  <NavLink to="/guides/starta-egen">
                    Starta din egen surdegsgrund
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/guides/baka-med-fullkorn">
                    Baka med fullkorn
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/guides/tips-tricks">Tips & tricks</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="flex md:hidden">
          <div className="dropdown dropdown-bottom">
            <button type="button" className="btn m-1">
              Innehåll
              <IoMdArrowDropdown />
            </button>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <NavLink to="/guides/starta-egen">
                  Starta din egen surdegsgrund
                </NavLink>
              </li>
              <li>
                <NavLink to="/guides/baka-med-fullkorn">
                  Baka med fullkorn
                </NavLink>
              </li>
              <li>
                <NavLink to="/guides/tips-tricks">Tips & tricks</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <article className="prose prose-sm md:prose-lg lg:prose-xl">
            <h1 className="text-secondary">Brödguider</h1>
            <p>
              Här kommer lite guider snart om hur man t.ex. startar sin egen
              surdegsgrund eller kommer igång med att baka med surdeg.
            </p>
            <Outlet />
          </article>
        </section>
      </div>
    </main>
  );
}

function Guides() {
  return (
    <>
      <Helmet>
        <title>Brödguider - Lär dig baka surdegsbröd | bakabröd.nu</title>
        <link rel="canonical" href="https://bakabröd.nu/guides" />
        <meta
          name="description"
          content="Lär dig baka surdegsbröd: starta egen surdegsgrund, baka med fullkorn och få tips för perfekt bröd varje gång. Guider för nybörjare och erfarna."
        />
        <meta
          property="og:title"
          content="Brödguider - Lär dig baka surdegsbröd"
        />
        <meta
          property="og:description"
          content="Lär dig baka surdegsbröd: starta egen surdegsgrund, baka med fullkorn och få tips för perfekt bröd varje gång."
        />
        <meta
          property="og:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
        <meta property="og:url" content="https://xn--bakabrd-f1a.nu/guides" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Brödguider - Lär dig baka surdegsbröd"
        />
        <meta
          name="twitter:description"
          content="Lär dig baka surdegsbröd: starta egen surdegsgrund, baka med fullkorn och få tips för perfekt bröd."
        />
        <meta
          name="twitter:image"
          content="https://xn--bakabrd-f1a.nu/logo-bread.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Brödguider',
            url: 'https://xn--bakabrd-f1a.nu/guides',
            description:
              'Guider för att lära sig baka surdegsbröd: starta surdegsgrund, baka med fullkorn och tips för perfekt bröd',
            inLanguage: 'sv-SE',
            isPartOf: {
              '@type': 'WebSite',
              name: 'bakabröd.nu',
              url: 'https://xn--bakabrd-f1a.nu/',
            },
          })}
        </script>
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={null} />
          <Route path="/starta-egen" element={<StartYourOwnSourdugh />} />
          <Route path="/baka-med-fullkorn" element={<BakeWithWholeGrain />} />
          <Route path="/tips-tricks" element={<TipsAndTricks />} />
        </Route>
      </Routes>
    </>
  );
}

export default Guides;
