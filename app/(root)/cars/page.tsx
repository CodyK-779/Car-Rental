import CarSearch from "@/components/CarSearch";
import CarSection from "@/components/CarSection";
import FilterCarType from "@/components/FilterCarType";

export default async function CarsPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string; type: string }>;
}) {
  const search = (await searchParams).search || "";
  const type = (await searchParams).type || "";

  return (
    <>
      <CarSearch />
      <FilterCarType carType={type} />
      <CarSection search={search} carType={type} />
    </>
  );
}
