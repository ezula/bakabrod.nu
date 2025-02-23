import { Helmet } from 'react-helmet'

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
      <main className="container max-w-5xl mx-auto p-4">
        <article className="prose prose-sm md:prose-lg lg:prose-xl">
          <h1 className="text-secondary">Här kommer snart lite guider</h1>
          <p>
            Här kommer lite guider snart om hur man t.ex. startar sin egen
            surdegsgrund eller kommer igång med att baka med surdeg.
          </p>
        </article>
      </main>
    </>
  )
}

export default Guides
