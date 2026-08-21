import ModelsGrid from "@/components/ModelsGrid";
import SearchForm from "@/components/SearchForm";
import { getModels } from "@/lib/models";
export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const models = getModels();
  const query = (await searchParams)?.query?.toLowerCase() || "";

  const filteredModels = query
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(query) ||
          model.description.toLowerCase().includes(query),
      )
    : models;

  return (
    <>
      <SearchForm query={query} />
      <ModelsGrid query={query} models={filteredModels} />
    </>
  );
}
