import { ArrowRightIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getAllCars } from "@/actions/car-action";
import { SparklesText } from "./magicui/sparkles-text";

const FeaturedCars = async () => {
  const cars = await getAllCars(true);

  if (!cars) return null;

  return (
    <div className="container mt-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800">
        Available Cars
      </h1>
      <p className="font-semibold text-center mt-2 text-neutral-500">
        Premium cars currently available for booking
      </p>
      <div className="max-w-7xl mx-auto px-2 mt-20">
        <div>
          {cars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <Badge className="rounded-full py-1 text-xs font-semibold bg-blue-500">
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
              <div className="flex items-center justify-center mt-16">
                <Button asChild>
                  <Link
                    href="/cars"
                    className="flex items-center font-medium gap-2"
                  >
                    Explore all cars <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <p className="text-xl sm:text-3xl font-semibold text-center px-4 pb-2 -mt-8 text-neutral-500">
              Sorry There's no cars available to rent{" "}
              <span className="ml-1">{`:'(`}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
