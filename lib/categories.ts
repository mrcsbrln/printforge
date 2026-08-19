import categories from "@/lib/data/categories.json";
import type { Category } from "@/lib/types";
import { getDBConnection } from "@/lib/db";

export function getCategories(): Category[] {
  const db = getDBConnection();

  try {
    return db.prepare("SELECT * FROM categories").all();
  } finally {
    db.close();
  }
}

// export function getAllCategories(): Category[] {
//   return categories;
// }

export function getCategoryBySlug(slug: string): Category {
  const category = categories.find(
    (category) => category.slug.toLowerCase() === slug.toLowerCase(),
  );
  if (!category) {
    throw new Error(`Category with slug ${slug} not found`);
  }
  return category;
}

export function getNameFromSlug(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category.name;
}
