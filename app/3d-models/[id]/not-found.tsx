import NotFoundUI from "@/components/NotFoundUI";

export default function ModelNotFound() {
  return (
    <NotFoundUI
      title="Model Not Found"
      subtitle="We can't find the requested model"
      linkText="See all model"
      linkHref="/3d-models"
    />
  );
}
