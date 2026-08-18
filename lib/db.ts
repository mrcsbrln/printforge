import Database from "better-sqlite3";
import path from "node:path";

export function getDBConnection() {
  const dbPath = path.join(process.cwd(), "printforge.db");

  return new Database(dbPath);
}
