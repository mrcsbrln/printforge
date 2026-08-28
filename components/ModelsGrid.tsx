import ModelCard from "@/components/ModelCard";
import { Model } from "@/lib/types";
import SortControls from "@/components/SortControlls";
import LoadingUI from "@/components/LoadingUI";
import type { TransitionStartFunction } from "react";
import NotFoundUI from "./NotFoundUI";

export default function ModelsGrid({
  models,
  categoryName,
  query,
  isPending,
  startTransition,
}: {
  models: Model[];
  categoryName?: string;
  query?: string;
  isPending: boolean;
  startTransition: TransitionStartFunction;
}) {
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
        <SortControls startTransition={startTransition} />
      </div>

      {isPending ? (
        <LoadingUI>Loading models</LoadingUI>
      ) : models.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <NotFoundUI
          title="No models found"
          subtitle="Try searching for soomething else"
          linkText="See our model"
          linkHref="/3d-models"
        />
      )}
    </div>
  );
}
