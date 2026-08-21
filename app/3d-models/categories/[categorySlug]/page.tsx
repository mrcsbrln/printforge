import type { CategoryPageProps } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/categories";
import ModelsGrid from "@/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const models = getModelsByCategorySlug(categorySlug);
  const category = getCategoryBySlug(categorySlug);
  return <ModelsGrid models={models} categoryName={category.name} />;
}
