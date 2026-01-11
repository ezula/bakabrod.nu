import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { formatTime, getTotalTime, recipes } from '@/lib/recipes';

export const metadata: Metadata = {
  title: 'Surdegsbröd recept - Enkla recept för hembakning',
  description:
    'Våra bästa surdegsbröd recept med tydliga steg-för-steg instruktioner. Perfekt för nybörjare och erfarna bagare. Baka surdegsbröd i gryta eller på bakstål.',
  openGraph: {
    title: 'Surdegsbröd recept | bakabröd.nu',
    description:
      'Våra bästa surdegsbröd recept med tydliga steg-för-steg instruktioner. Perfekt för nybörjare och erfarna bagare.',
  },
};

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    lätt: 'badge-success',
    medel: 'badge-warning',
    avancerad: 'badge-error',
  };
  return (
    <span className={`badge ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  );
}

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">Recept</h1>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Utforska våra surdegsbrödsrecept. Varje recept har detaljerade
          instruktioner och är perfekt anpassade för hembakning.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/recept/${recipe.slug}`}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <figure className="h-48 bg-base-300 relative overflow-hidden">
                {recipe.image ? (
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">
                    🍞
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p className="text-sm opacity-80 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <DifficultyBadge difficulty={recipe.difficulty} />
                  <span className="badge badge-ghost">
                    {formatTime(getTotalTime(recipe))}
                  </span>
                  <span className="badge badge-ghost">{recipe.yields}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg opacity-70">
              Recept kommer snart! Håll utkik.
            </p>
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Surdegsbrödsrecept',
            description:
              'Samling av surdegsbrödsrecept med detaljerade instruktioner.',
            url: 'https://xn--bakabrd-f1a.nu/recept',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: recipes.map((recipe, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://xn--bakabrd-f1a.nu/recept/${recipe.slug}`,
                name: recipe.name,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
