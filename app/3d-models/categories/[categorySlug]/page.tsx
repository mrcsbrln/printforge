import type { CategoryPageProps } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/categories";
import ModelsGrid from "@/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/lib/models";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categorySlug } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const models = getModelsByCategorySlug(categorySlug, sort);
  const category = getCategoryBySlug(categorySlug);
  return <ModelsGrid models={models} categoryName={category.name} />;
}
