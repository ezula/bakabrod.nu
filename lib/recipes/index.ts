import { favoritbrod } from './favoritbrod';
import { klassisktLjustBrod } from './klassiskt-ljust-brod';
import { saffransbrod } from './saffransbrod';
import type { Recipe } from './types';

export const recipes: Recipe[] = [
  saffransbrod,
  klassisktLjustBrod,
  favoritbrod,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipeSlugs(): string[] {
  return recipes.map((recipe) => recipe.slug);
}

export * from './types';
