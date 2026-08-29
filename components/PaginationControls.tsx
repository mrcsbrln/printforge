import PaginationButton from "./PaginationButton";

export default function PaginationControls({
  totalPages,
}: {
  totalPages: number;
}) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-1">
      {pagesArray.map((page) => (
        <PaginationButton key={page} page={page} />
      ))}
    </div>
  );
}
