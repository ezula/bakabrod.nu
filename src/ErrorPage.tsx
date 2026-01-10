import { Helmet } from 'react-helmet';

function ErrorPage() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="container max-w-5xl mx-auto pd-4">
        <h1 className="text-primary text-6xl font-bold mt-8 mb-8">
          Oops.. Sidan finns inte :/
        </h1>
        <p className="text-2xl mt-6 mb-6">
          Sidan du söker finns inte, den är inte här.
        </p>
        <p>
          Prova gå till{' '}
          <a className="text-primary" href="https://bakabröd.nu">
            bakabröd.nu
          </a>{' '}
          istället.
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
