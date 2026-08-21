import ModelCard from "./ModelCard";
import { ModelsGridProps, Model } from "@/lib/types";
import SortControls from "./SortControlls";

export default function ModelsGrid({
  models,
  categoryName,
  query,
}: ModelsGridProps) {
  let title = "3D Models";
  if (categoryName) {
    title = categoryName;
  }
  if (query) {
    title = `Search results for "${query}"`;
  }
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-8">
        <h1 className="mb-8 text-3xl font-bold">{title}</h1>
        <SortControls />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
