import Form from "next/form";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
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
