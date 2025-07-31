import CarSearch from "@/components/CarSearch";
import CarSection from "@/components/CarSection";
import FilterCarType from "@/components/FilterCarType";
import { FilterDate } from "@/components/FilterStatus";

export default async function CarsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    type: string;
    status: string;
    filter: FilterDate;
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const search = (await searchParams).search || "";
  const type = (await searchParams).type || "";
  const status = (await searchParams).status || "";
  const filter = (await searchParams).filter || "";

  const resolvedParams = await searchParams;
  const page = resolvedParams["page"] ?? "1";
  const per_page = resolvedParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  return (
    <>
      <CarSearch />
      <FilterCarType carType={type} />
      <CarSection
        search={search}
        carType={type}
        status={status}
        filter={filter}
        // page={Number(page)}
        // per_page={Number(per_page)}
        start={start}
        end={end}
      />
    </>
  );
}
