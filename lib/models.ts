import type { Model } from "@/lib/types";
import { getDBConnection } from "@/lib/db";

export function getModels(): Model[] {
  const db = getDBConnection();

  try {
    return db.prepare<[], Model>("SELECT * FROM models").all();
  } finally {
    db.close();
  }
}

export function getModelsByCategorySlug(categorySlug: string): Model[] {
  const db = getDBConnection();

  try {
    return db
      .prepare<[string], Model>("SELECT * FROM models WHERE category=?")
      .all(categorySlug);
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
