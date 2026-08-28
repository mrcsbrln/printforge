import ModelsBrowser from "@/components/ModelsBrowser";
import { getModels } from "@/lib/models";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string; page?: string }>;
}) {
  // TEMP-DELAY: simulate slow network, remove before merge
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const query = (await searchParams).query?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;
  const modelsPerPage = 4;

  const models = getModels({ query, sort, page, modelsPerPage });

  return <ModelsBrowser query={query} models={models} />;
}
