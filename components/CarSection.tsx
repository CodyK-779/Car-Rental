import { getFilteredCars } from "@/actions/car-action";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { FilterDate } from "./FilterStatus";
import PaginationControls from "./PaginationControls";

interface Props {
  search: string;
  carType: string;
  status: string;
  filter: FilterDate;
  start: number;
  end: number;
}

const CarSection = async ({
  search,
  carType,
  status,
  filter,
  start,
  end,
}: Props) => {
  const carData = await getFilteredCars(search, carType, status, filter);

  if (!carData) return null;

  const cars = carData.slice(start, end);

  return (
    <div className="container mt-20 pb-16">
      {cars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/cars/${car.id}`}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={car.img}
                  alt={car.model}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
                  className="object-cover transition-transform duration-300 ease-in group-hover:scale-105"
                />
                <div className="absolute top-4 left-5">
                  <Badge
                    className={`rounded-full py-1 text-xs font-semibold ${
                      car.carStatus === "AVAILABLE"
                        ? "bg-blue-500"
                        : "bg-red-500"
                    }`}
                  >
                    {car.carStatus === "AVAILABLE"
                      ? "Available Now"
                      : "Unavailable"}
                  </Badge>
                </div>
              </div>
              <div className="py-4 px-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold">{car.model}</p>
                    <div className="flex items-center">
                      <p className="text-sm font-medium">{car.brand}</p>
                      <p className="mx-1">•</p>
                      <p className="text-sm font-medium">{car.year}</p>
                    </div>
                  </div>
                  <Badge className="text-xs py-1 px-2">
                    <span className="font-extrabold mr-1">
                      ${car.dailyPrice}
                    </span>{" "}
                    / day
                  </Badge>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-lg"></i>
                    <p className="font-medium">{car.seating} Seats</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-gas-station-line text-lg"></i>
                    <p className="font-medium">{car.fuel}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/hatchback.png"
                      alt="transmission"
                      width={22}
                      height={22}
                    />
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    <p className="font-medium">{car.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-xl sm:text-3xl font-bold text-center px-2 text-neutral-700">
          Sorry the car that you're looking for is not available{" "}
          <span className="ml-0.5">{":'("}</span>
        </p>
      )}
      {carData.length > 6 && (
        <>
          <PaginationControls
            hasNextPage={end < carData.length}
            hasPreviousPage={start > 0}
            totalCars={carData.length}
          />
          <p className="text-xs text-neutral-500 font-medium text-center">
            Note: Filter all the things you're looking for before going to page
            2 or more because <br className="hidden sm:block" /> filtering only
            works in page 1 for some reason, I will fix this as soon as i find
            the solution.
          </p>
        </>
      )}
    </div>
  );
};

export default CarSection;
