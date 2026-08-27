"use client";

import Form from "next/form";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { TransitionStartFunction } from "react";

export default function SearchForm({
  query,
  startTransition,
}: {
  query?: string;
  startTransition: TransitionStartFunction;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function handleQuery(formData: FormData) {
    const query = formData.get("query")?.toString().trim() || "";
    const url = query
      ? `${pathname}?query=${encodeURIComponent(query)}`
      : pathname;
    startTransition(() => {
      router.push(url);
    });
  }

  return (
    <Form action={handleQuery} className="w-full px-5 md:px-0 md:max-w-xl">
      <input
        type="text"
        defaultValue={query}
        id="searchInput"
        name="query"
        placeholder="E.g. dragon"
        autoComplete="off"
        className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:outline-none focus:ring-0 md:text-base"
      />
    </Form>
  );
}
