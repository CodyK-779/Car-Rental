import { getCarDetails } from "@/actions/car-action";
import CreateBooking from "@/components/CreateBooking";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const carId = (await params).id;

  const carDetails = await getCarDetails(carId);

  if (!carDetails) return null;

  const fallbackAvatar = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pt-32 pb-8">
      <Button asChild className="mb-8">
        <Link href="/cars" className="flex items-center gap-2">
          <ArrowLeftIcon />
          Back to Cars
        </Link>
      </Button>

      {carDetails.map((car) => (
        <div
          key={car.id}
          className="flex flex-col md:flex-row items-start gap-6"
        >
          <div className="flex flex-col gap-8">
            {/* <!-- Image --> */}
            <div className="relative w-full rounded-lg overflow-hidden border-2 border-neutral-400">
              <Image
                src={car.img}
                alt={car.model}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <hr className="my-2 border border-gray-300" />

            <div className="w-full space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{car.model}</h2>
              <p className="text-gray-600 text-sm">
                Posted in <span className="font-medium">{car.location}</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Brand:</strong> {car.brand}
                </div>
                <div>
                  <strong>Model:</strong> {car.class}
                </div>
                <div>
                  <strong>Year:</strong> {car.year}
                </div>
                <div>
                  <strong>Type:</strong> {car.type}
                </div>
                <div>
                  <strong>Transmission:</strong> {car.transmission}
                </div>
                <div>
                  <strong>Fuel:</strong> {car.fuel}
                </div>
                <div>
                  <strong>Seats:</strong> {car.seating}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <span className="text-green-600 font-medium">
                    {car.carStatus}
                  </span>
                </div>
                <div>
                  <strong>Price/Day:</strong> ${car.dailyPrice}
                </div>
              </div>
              <p className="text-gray-800 mt-4 text-base leading-relaxed">
                {car.description}
              </p>
            </div>
            <hr className="border border-neutral-300" />

            <div className="flex flex-col pb-4">
              <h1 className="text-2xl font-bold mb-4">
                Car Listing created by
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="size-14">
                  <AvatarImage src={car.user.image!} />
                  <AvatarFallback className="bg-black text-white font-medium">
                    {fallbackAvatar(car.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{car.user.name}</p>
                  <p className="text-sm font-medium text-neutral-600">
                    {car.user.email}
                  </p>
                </div>
              </div>
              <h1 className="font-medium">
                Listing created in{" "}
                <span className="font-semibold">
                  {format(new Date(car.createdAt), "MMMM d, yyyy")}
                </span>
              </h1>

              <hr className="md:hidden my-4 border border-neutral-300" />
            </div>
          </div>

          <CreateBooking carId={car.id} ownerId={car.userId} />
        </div>
      ))}
    </section>
  );
}
