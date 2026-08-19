import { getDBConnection } from "@/lib/db";
import categories from "@/lib/data/categories.json";

function seedCategories() {
  const db = getDBConnection();

  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
        slug TEXT PRIMARY KEY,
        name TEXT NOT NULL
    )
    `);

  const insertCategory = db.prepare(`
    INSERT OR REPLACE INTO categories (
        slug,
        name
    ) VALUES (?, ?)
    `);

  for (const category of categories) {
    insertCategory.run(category.slug, category.name);
  }

  db.close();
  console.log("Categories table seeded");
}

try {
  seedCategories();
} catch (error) {
  console.error("Seeding failed", error);
}
