import ModelsGrid from "@/components/ModelsGrid";
import SearchForm from "@/components/SearchForm";
import { getModels } from "@/lib/models";
export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string }>;
}) {
  // TEMP-DELAY: simulate slow network, remove before merge
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const query = (await searchParams).query?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const models = getModels({ query, sort });

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
