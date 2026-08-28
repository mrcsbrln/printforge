"use client";

import { Model } from "@/lib/types";
import ModelsGrid from "./ModelsGrid";
import SearchForm from "./SearchForm";
import { useTransition } from "react";
import PaginationControls from "./PaginationControls";

export default function ModelsBrowser({
  query,
  models,
  categoryName,
}: {
  query?: string;
  models: Model[];
  categoryName?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <PaginationControls />
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
