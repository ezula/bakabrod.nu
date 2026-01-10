import type { Recipe } from './types';
import { klassisktSurdegsbrod } from './klassiskt-surdegsbrod';

export const recipes: Recipe[] = [klassisktSurdegsbrod];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipeSlugs(): string[] {
  return recipes.map((recipe) => recipe.slug);
}

export * from './types';
