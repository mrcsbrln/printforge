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
  currentPage,
}: {
  query?: string;
  models: Model[];
  categoryName?: string;
  totalPages: number;
  currentPage: number;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <SearchForm query={query} startTransition={startTransition} />
      <ModelsGrid
        isPending={isPending}
        query={query}
        models={models}
        categoryName={categoryName}
        startTransition={startTransition}
      />
      <PaginationControls totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
