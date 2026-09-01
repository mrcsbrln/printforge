import ModelsBrowser from "@/components/ModelsBrowser";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getModelCount, getModels } from "@/lib/models";
import { getQueryParams } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string; page?: string }>;
}) {
  // TEMP-DELAY: simulate slow network, remove before merge
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const { query, sort, page } = getQueryParams(await searchParams);
  const modelCount = getModelCount({ query });
  const totalPages = Math.max(Math.ceil(modelCount / MODELS_PER_PAGE));

  if (page < 1 || page > totalPages || sort === null) {
    redirect("/3d-models");
  }

  const models = getModels({
    query,
    sort,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  return (
    <ModelsBrowser
      query={query}
      models={models}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
