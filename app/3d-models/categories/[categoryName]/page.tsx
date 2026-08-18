import type { CategoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/lib/models";
import ModelsGrid from "@/components/ModelsGrid";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const models = await getModels({ category: categoryName });
  return <ModelsGrid models={models} title={category.displayName} />;
}
