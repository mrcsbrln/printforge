"use client";

import { Model } from "@/lib/types";
import ModelsGrid from "./ModelsGrid";
import SearchForm from "./SearchForm";
import { useTransition } from "react";
import PaginationControls from "./PaginationControls";
import { getModelCount } from "@/lib/models";

export default function ModelsBrowser({
  query,
  models,
  categoryName,
  totalPages,
}: {
  query?: string;
  models: Model[];
  categoryName?: string;
  totalPages: number;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <PaginationControls totalPages={totalPages} />
      <SearchForm query={query} startTransition={startTransition} />
      <ModelsGrid
        isPending={isPending}
        query={query}
        models={models}
        categoryName={categoryName}
        startTransition={startTransition}
      />
    </>
  );
}
