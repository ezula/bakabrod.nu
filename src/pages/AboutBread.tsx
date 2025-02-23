import { Helmet } from 'react-helmet'
import BreadAbout from '../content/BreadAbout.mdx'

function AboutBread() {
  return (
    <>
      <Helmet>
        <title>bakabröd.nu - Fakta om bröd</title>
        <link rel="canonical" href="https://bakabröd.nu/aboutbread" />
        <meta
          name="description"
          content="Information om bröd och bakning med surdeg"
        />
      </Helmet>
      <main className="container max-w-5xl mx-auto p-4">
        <article className="prose prose-sm md:prose-lg lg:prose-xl">
          <BreadAbout />
        </article>
      </main>
    </>
  )
}

export default AboutBread
