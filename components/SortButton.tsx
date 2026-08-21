"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function SortButton({
  children,
  sort,
}: {
  children: ReactNode;
  sort: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function handleSort() {
    const url = `${pathname}?sort=${sort}`;
    router.push(url);
  }
  return (
    <button
      onClick={handleSort}
      className={
        "px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"
      }
    >
      {children}
    </button>
  );
}
