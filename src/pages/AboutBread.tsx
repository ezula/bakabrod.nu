import BreadAbout from '../content/BreadAbout.mdx'

function AboutBread() {
  return (
    <main className="container max-w-5xl mx-auto p-4">
      <article className="prose prose-sm md:prose-lg lg:prose-xl">
        <BreadAbout />
      </article>
    </main>
  )
}

export default AboutBread
