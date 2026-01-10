export interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}

export interface RecipeStep {
  title?: string;
  description: string;
  duration?: number; // minutes
}

export interface Recipe {
  slug: string;
  name: string;
  description: string;
  image?: string;
  prepTime: number; // minutes
  restTime?: number; // minutes (proofing, resting)
  cookTime: number; // minutes
  yields: string;
  difficulty: 'lätt' | 'medel' | 'avancerad';
  ingredients: Ingredient[];
  steps: RecipeStep[];
  tips?: string[];
  // For calculator integration
  hydration?: number;
  saltPercentage?: number;
  starterPercentage?: number;
}

export function getTotalTime(recipe: Recipe): number {
  return recipe.prepTime + (recipe.restTime ?? 0) + recipe.cookTime;
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} tim`;
  }
  return `${hours} tim ${remainingMinutes} min`;
}
