import NotFoundUI from "@/components/NotFoundUI";

export default function CategoryNotFound() {
  return (
    <NotFoundUI
      title="Category not found"
      subtitle="Sorry, category doesn't exist"
      linkText="See all models"
      linkHref="/3d-models"
    />
  );
}
