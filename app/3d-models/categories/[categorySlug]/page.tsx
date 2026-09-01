import { getCategoryBySlug } from "@/lib/categories";
import { getModelCount, getModels } from "@/lib/models";
import ModelsBrowser from "@/components/ModelsBrowser";
import { notFound } from "next/navigation";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/utils";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ sort: string; query: string; page: string }>;
}) {
  // TEMP-DELAY: simulate slow network, remove before merge
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { query, sort, page } = getQueryParams(await searchParams);

  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const models = getModels({
    sort,
    query,
    categorySlug,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });
  const modelsCount = getModelCount({ query, categorySlug });

  const totalPages = Math.ceil(modelsCount / MODELS_PER_PAGE);
  return (
    <ModelsBrowser
      models={models}
      categoryName={category.name}
      query={query}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
