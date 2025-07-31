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
  }>;
}) {
  const search = (await searchParams).search || "";
  const type = (await searchParams).type || "";
  const status = (await searchParams).status || "";
  const filter = (await searchParams).filter || "";

  return (
    <>
      <CarSearch />
      <FilterCarType carType={type} />
      <CarSection
        search={search}
        carType={type}
        status={status}
        filter={filter}
      />
    </>
  );
}
