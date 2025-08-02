import { getCarDetails } from "@/actions/car-action";
import BackNavigationBtn from "@/components/BackNavigationBtn";
import CreateBooking from "@/components/CreateBooking";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";

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
    <section className="pb-8 pt-20">
      {carDetails.map((car) => {
        if (car.carStatus === "UNAVAILABLE") {
          const confirmedBooking = car.booking.find(
            (b) => b.status === "Confirmed"
          );

          return (
            <div key={car.id} className="flex items-center justify-center">
              {confirmedBooking ? (
                <div className="w-full py-4 font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
                  <p className="text-lg max-[450px]:text-base sm:text-xl font-bold">
                    This car is currently booked by
                    <span className="ml-1.5">
                      "{confirmedBooking.user.name}"
                    </span>
                  </p>
                </div>
              ) : (
                <div className="w-full py-4 font-medium text-sm text-white text-center bg-red-500">
                  <p className="text-lg max-[450px]:text-base sm:text-xl font-bold">
                    This car is currently unavailable to book
                  </p>
                </div>
              )}
            </div>
          );
        }

        return null;
      })}
      <div className="max-w-6xl w-full mx-auto px-4">
        <BackNavigationBtn />
        {carDetails.map((car) => (
          <div
            key={car.id}
            className="flex flex-col md:flex-row items-start gap-6"
          >
            <div className="flex flex-col gap-8">
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
                <h2 className="text-3xl font-bold text-gray-900">
                  {car.model}
                </h2>
                <p className="text-sm font-medium text-gray-600">
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
                    <span
                      className={`font-medium ${
                        car.carStatus === "AVAILABLE"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {car.carStatus}
                    </span>
                  </div>
                  <div>
                    <strong>Price/Day:</strong> ${car.dailyPrice}
                  </div>
                </div>
                <div className="flex flex-col pt-4 gap-1.5">
                  <p className="font-semibold text-gray-700">Description</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {car.description}
                  </p>
                </div>
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
            <CreateBooking
              carId={car.id}
              ownerId={car.userId}
              status={car.carStatus}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
