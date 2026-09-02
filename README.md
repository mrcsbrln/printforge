# PrintForge

PrintForge is a browsing platform for community-submitted 3D printing models — search, sort, filter by category, and view model details. Built as a portfolio project with the Next.js App Router.

## Features

- Browse a catalog of 3D printable models with cover images, likes, and category tags
- Full-text search across model name and description
- Sort by alphabetical order, popularity, or most recently added
- Filter models by category via a sticky category navigation
- Paginated results
- Individual model detail pages

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Server Components)
- [React 19](https://react.dev)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) as the data layer

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

`npm run dev` seeds the local SQLite database from the JSON fixtures in `lib/data/` before starting the dev server, so the app has data on first run.

Open [http://localhost:3000](http://localhost:3000) to view it.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
app/                       Routes (App Router)
  page.tsx                 Landing page
  about/                   About page
  3d-models/               Model catalog, detail, and category routes
components/                UI components (models grid, search, sort, pagination, layout)
lib/
  models.ts, categories.ts Data access (SQLite queries)
  db.ts                    Database connection
  seeds/                   Scripts that seed the SQLite DB from lib/data/*.json
  data/                    Seed fixtures (models & categories)
  types.ts, utils.ts, constants.ts
```

## Data

Model and category data lives in a local SQLite file (`printforge.db`), seeded from `lib/data/models.json` and `lib/data/categories.json` via the scripts in `lib/seeds/`. All read paths (`lib/models.ts`, `lib/categories.ts`) open the database read-only; only the seed scripts write to it.

## Deployment

Deployed on [Vercel](https://vercel.com). Since the app ships with a bundled SQLite file rather than a hosted database, the connection in `lib/db.ts` is opened in readonly mode for all runtime reads — Vercel's serverless functions run on a read-only filesystem, so no writes happen outside of local seeding.
