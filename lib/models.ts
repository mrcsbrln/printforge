import type { Model } from "@/lib/types";
import { getDBConnection } from "@/lib/db";

export function getModels({
  query,
  sort,
  categorySlug,
}: {
  query?: string;
  sort?: string;
  categorySlug?: string;
}): Model[] {
  const db = getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (query) {
    sql += " WHERE (name LIKE ? OR description LIKE ?)";
    placeholders.push(`%${query}%`, `%${query}%`);
  }

  if (categorySlug) {
    sql += " WHERE category=?";
    placeholders.push(categorySlug);
  }

  if (sort) {
    if (sort === "alpha") {
      sql += " ORDER BY name ASC";
    }
    if (sort === "popular") {
      sql += " ORDER BY likes DESC";
    }
    if (sort === "recent") {
      sql += " ORDER BY dateAdded DESC";
    }
  }

  try {
    return db.prepare<unknown[], Model>(sql).all(...placeholders);
  } finally {
    db.close();
  }
}

export function getModelById(id: string) {
  const db = getDBConnection();

  try {
    return db.prepare<string, Model>("SELECT * FROM models WHERE id=?").get(id);
  } finally {
    db.close();
  }
}
