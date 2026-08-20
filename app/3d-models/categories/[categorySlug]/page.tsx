import type { CategoryPageProps } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/lib/models";
import ModelsGrid from "@/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const models = getModelsByCategorySlug(categorySlug);
  return <ModelsGrid models={models} />;
}
