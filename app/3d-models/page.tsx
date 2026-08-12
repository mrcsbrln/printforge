import ModelsGrid from "@/components/ModelsGrid";
import { getAllModels } from "../lib/models";

export default async function ModelsPage() {
  const models = await getAllModels();
  return <ModelsGrid title="3D Models" models={models} />;
}
