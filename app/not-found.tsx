import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🍞</div>
        <h1 className="text-4xl md:text-5xl font-bold text-base-content">
          404
        </h1>
        <p className="mt-4 text-xl text-base-content/80">
          Den här sidan finns tyvärr inte.
        </p>
        <p className="mt-2 text-base-content/60">
          Kanske har den flyttats, eller så blev det ett litet bakmisstag i
          adressen.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            Till startsidan
          </Link>
          <Link href="/recept" className="btn btn-outline">
            Se recept
          </Link>
        </div>
      </div>
    </main>
  );
}
