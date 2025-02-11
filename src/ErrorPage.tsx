function ErrorPage() {
  return (
    <div className="container max-w-5xl mx-auto pd-4">
      <h1 className="text-6xl mt-8 mb-8">404 - Sidan finns inte</h1>
      <p className="text-2xl mt-6 mb-6">
        Sidan du söker finns inte, han e inte här.
      </p>
      <p>
        Prova gå till{' '}
        <a className="text-primary" href="https://bakabröd.nu">
          bakabröd.nu
        </a>{' '}
        istället.
      </p>
    </div>
  )
}

export default ErrorPage
