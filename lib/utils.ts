export function getQueryParams(searchParams: {
  query?: string;
  sort?: string;
  page?: string;
}) {
  const query = searchParams.query?.toLowerCase() || "";
  const sort = searchParams.sort?.toLowerCase() || "";
  const page = Number(searchParams.page) || 1;

  return { query, sort, page };
}
