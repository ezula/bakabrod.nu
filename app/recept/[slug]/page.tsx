import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  formatTime,
  getAllRecipeSlugs,
  getCalculatorUrl,
  getRecipeBySlug,
  getTotalTime,
  type Recipe,
} from '@/lib/recipes'

export function generateStaticParams() {
  return getAllRecipeSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const recipe = getRecipeBySlug(slug)
    if (!recipe) {
      return { title: 'Recept hittades inte' }
    }
    return {
      title: recipe.name,
      description: recipe.description,
      alternates: {
        canonical: `/recept/${slug}`,
      },
      openGraph: {
        title: `${recipe.name} | bakabröd.nu`,
        description: recipe.description,
        type: 'article',
        images: recipe.image
          ? [`https://xn--bakabrd-f1a.nu${recipe.image}`]
          : undefined,
      },
    }
  })
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  let result = 'PT'
  if (hours > 0) result += `${hours}H`
  if (mins > 0) result += `${mins}M`
  return result || 'PT0M'
}

function generateRecipeSchema(recipe: Recipe) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.description,
    image: recipe.image
      ? `https://xn--bakabrd-f1a.nu${recipe.image}`
      : undefined,
    prepTime: formatDuration(recipe.prepTime),
    cookTime: formatDuration(recipe.cookTime),
    totalTime: formatDuration(getTotalTime(recipe)),
    recipeYield: recipe.yields,
    recipeIngredient: recipe.ingredients.map(
      (i) => `${i.amount} ${i.unit} ${i.name}`
    ),
    recipeInstructions: recipe.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
    author: {
      '@type': 'Organization',
      name: 'bakabröd.nu',
      url: 'https://xn--bakabrd-f1a.nu',
    },
    datePublished: recipe.datePublished ?? '2025-01-11',
    recipeCategory: 'Bröd',
    recipeCuisine: 'Swedish',
    keywords: 'surdeg, surdegsbröd, bröd, baka',
  }
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-base-200 py-6 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm breadcrumbs mb-4 md:mb-6">
          <ul>
            <li>
              <Link href="/">Hem</Link>
            </li>
            <li>
              <Link href="/recept">Recept</Link>
            </li>
            <li>{recipe.name}</li>
          </ul>
        </nav>

        <article className="bg-base-100 rounded-lg shadow-lg p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {recipe.name}
            </h1>
            <p className="text-lg opacity-80 mb-6">{recipe.description}</p>

            {recipe.image && (
              <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="font-semibold">Total tid</div>
                  <div>{formatTime(getTotalTime(recipe))}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍🍳</span>
                <div>
                  <div className="font-semibold">Förberedelse</div>
                  <div>{formatTime(recipe.prepTime)}</div>
                </div>
              </div>
              {recipe.restTime && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <div className="font-semibold">Jästid</div>
                    <div>{formatTime(recipe.restTime)}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="font-semibold">Gräddning</div>
                  <div>{formatTime(recipe.cookTime)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍞</span>
                <div>
                  <div className="font-semibold">Mängd</div>
                  <div>{recipe.yields}</div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Ingredienser</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>
                    <strong>
                      {ingredient.amount} {ingredient.unit}
                    </strong>{' '}
                    {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>

            {recipe.hydration && (
              <div className="mt-6 p-4 bg-base-200 rounded-lg">
                <p className="text-sm">
                  <strong>Bakers percentages:</strong> {recipe.hydration}%
                  hydrering
                  {recipe.saltPercentage && `, ${recipe.saltPercentage}% salt`}
                  {recipe.starterPercentage &&
                    `, ${recipe.starterPercentage}% surdeg`}
                </p>
                <Link
                  href={getCalculatorUrl(recipe)}
                  className="btn btn-sm btn-primary mt-2"
                >
                  Använd kalkylatorn för att skala receptet
                </Link>
              </div>
            )}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Instruktioner</h2>
            <ol className="space-y-6">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    {step.title && (
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    )}
                    <p className="opacity-90">{step.description}</p>
                    {step.duration && (
                      <p className="text-sm opacity-60 mt-1">
                        ⏱️ {formatTime(step.duration)}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {recipe.tips && recipe.tips.length > 0 && (
            <section className="bg-base-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">💡 Tips</h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <div className="mt-8 text-center">
          <Link href="/recept" className="btn btn-outline">
            ← Tillbaka till alla recept
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRecipeSchema(recipe)),
        }}
      />
    </main>
  )
}
