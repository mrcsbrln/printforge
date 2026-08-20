import categories from "@/lib/data/categories.json";
import type { Category } from "@/lib/types";
import { getDBConnection } from "@/lib/db";

export function getCategories(): Category[] {
  const db = getDBConnection();

  try {
    return db.prepare<[], Category>("SELECT * FROM categories").all();
  } finally {
    db.close();
  }
}

export function getCategoryBySlug(categorySlug: string): Category {
  const db = getDBConnection();

  try {
    const category = db
      .prepare<string, Category>("SELECT * FROM categories WHERE slug=?")
      .get(categorySlug);
    if (!category) {
      throw new Error(`Category with slug ${categorySlug} not found`);
    }
    return category;
  } finally {
    db.close();
  }
}

export function getNameFromSlug(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category.name;
}
