"use client";

import { Model } from "@/lib/types";
import ModelsGrid from "./ModelsGrid";
import SearchForm from "./SearchForm";
import { useTransition } from "react";

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
      <SearchForm query={query} />
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
