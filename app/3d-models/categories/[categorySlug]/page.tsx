import type { CategoryPageProps } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/lib/models";
import ModelsBrowser from "@/components/ModelsBrowser";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  // TEMP-DELAY: simulate slow network, remove before merge
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { categorySlug } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const models = getModels({ sort, categorySlug });

  return <ModelsBrowser models={models} categoryName={category.name} />;
}
