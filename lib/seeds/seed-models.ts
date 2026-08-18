import { getDBConnection } from "../db";
import models from "../data/models.json";

function seedModels() {
  const db = getDBConnection();

  db.exec(`
    CREATE TABLE IF NOT EXISTS models (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      likes INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      category TEXT NOT NULL,
      dateAdded TEXT NOT NULL
    );
  `);

  const insertModel = db.prepare(`
    INSERT OR REPLACE INTO models (
      id,
      name,
      description,
      likes,
      image,
      category,
      dateAdded
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const model of models) {
    insertModel.run(
      model.id,
      model.name,
      model.description,
      model.likes,
      model.image,
      model.category,
      model.dateAdded,
    );
  }

  db.close();

  console.log("Models table seeded");
}

try {
  seedModels();
} catch (error) {
  console.error("Seeding failed", error);
}
