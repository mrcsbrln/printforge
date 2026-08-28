import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { startTransition } from "react";

export default function PaginationButton({ page }: { page: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handlePageChange() {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page.toString());
    const url = `${pathname}?${urlSearchParams.toString()}`;
    startTransition(() => {
      router.push(url);
    });
  }
  return (
    <button
      onClick={handlePageChange}
      className="px-3 py-1.5 text-sm rounded-md border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      {page}
    </button>
  );
}
