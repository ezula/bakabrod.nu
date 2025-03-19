import { Helmet } from 'react-helmet'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import StartYourOwnSourdugh from './guide-content/StartYourOwnSourdough.mdx'
import BakeWithWholeGrain from './guide-content/BakeWithWholeGrain.mdx'
import TipsAndTricks from './guide-content/TipsAndTricks.mdx'
import { IoMdArrowDropdown } from 'react-icons/io'

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
            <div tabIndex={0} role="button" className="btn m-1">
              Innehåll
              <IoMdArrowDropdown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
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
  )
}

function Guides() {
  return (
    <>
      <Helmet>
        <title>bakabröd.nu - Guider</title>
        <link rel="canonical" href="https://bakabröd.nu/guides" />
        <meta
          name="description"
          content="Guider och tutorials om brödbakning"
        />
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
  )
}

export default Guides
