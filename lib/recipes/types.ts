export interface Ingredient {
  amount: number
  unit: string
  name: string
}

export interface RecipeStep {
  title?: string
  description: string
  duration?: number // minutes
}

export interface Recipe {
  slug: string
  name: string
  description: string
  image?: string
  prepTime: number // minutes
  restTime?: number // minutes (proofing, resting)
  cookTime: number // minutes
  yields: string
  difficulty: 'lätt' | 'medel' | 'avancerad'
  ingredients: Ingredient[]
  steps: RecipeStep[]
  tips?: string[]
  datePublished?: string // ISO date string, e.g. '2025-01-11'
  // For calculator integration
  hydration?: number
  saltPercentage?: number
  starterPercentage?: number
}

export function getTotalTime(recipe: Recipe): number {
  return recipe.prepTime + (recipe.restTime ?? 0) + recipe.cookTime
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours} tim`
  }
  return `${hours} tim ${remainingMinutes} min`
}

export function getTotalFlour(recipe: Recipe): number {
  return recipe.ingredients
    .filter(
      (i) =>
        i.unit === 'g' &&
        (i.name.toLowerCase().includes('mjöl') ||
          i.name.toLowerCase().includes('dinkel') ||
          i.name.toLowerCase().includes('emmer'))
    )
    .reduce((sum, i) => sum + i.amount, 0)
}

export function getCalculatorUrl(recipe: Recipe): string {
  const params = new URLSearchParams()
  const flour = getTotalFlour(recipe)

  if (flour > 0) params.set('flour', flour.toString())
  if (recipe.hydration) params.set('hydration', recipe.hydration.toString())
  if (recipe.saltPercentage)
    params.set('salt', recipe.saltPercentage.toString())
  if (recipe.starterPercentage)
    params.set('sourdough', recipe.starterPercentage.toString())

  return `/kalkylator?${params.toString()}`
}
