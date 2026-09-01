import type { Model } from "@/lib/types";
import { getDBConnection } from "@/lib/db";

export function getModels({
  query,
  sort,
  categorySlug,
  page,
  modelsPerPage,
}: {
  query?: string;
  sort?: string;
  categorySlug?: string;
  page: number;
  modelsPerPage: number;
}): Model[] {
  const db = getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (query || categorySlug) {
    const where = [];
    if (query) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${query}%`, `%${query}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
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

  if (page && modelsPerPage) {
    const offset = (page - 1) * modelsPerPage;
    sql += " LIMIT ? OFFSET ?";
    placeholders.push(modelsPerPage, offset);
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

export function getModelCount({
  query,
  categorySlug,
}: {
  query?: string;
  categorySlug?: string;
}): number {
  const db = getDBConnection();
  let sql = "SELECT COUNT(*) as count FROM models";
  const placeholders = [];

  if (query || categorySlug) {
    const where = [];
    if (query) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${query}%`, `%${query}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
  }

  try {
    const result = db
      .prepare<unknown[], { count: number }>(sql)
      .get(...placeholders);
    if (!result) return 0;
    return result.count;
  } finally {
    db.close();
  }
}
