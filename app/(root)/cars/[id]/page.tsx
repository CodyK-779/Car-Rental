import { getCarDetails } from "@/actions/car-action";
import CreateBooking from "@/components/CreateBooking";
import { Button } from "@/components/ui/button";
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
          className="flex flex-col lg:flex-row items-start gap-6"
        >
          <div className="flex flex-col gap-8">
            {/* <!-- Image --> */}
            <div className="relative w-full rounded-lg overflow-hidden border-2 border-neutral-400">
              <Image
                src={car.img}
                alt="bugatti"
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
            <hr className="lg:hidden mb-4 border border-neutral-300" />
          </div>

          <CreateBooking carId={car.id} />

          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Book This Car</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div> */}
        </div>
      ))}
    </section>

    // <section className="max-w-6xl mx-auto px-4 pt-32 pb-8">
    //   <Button asChild className="mb-8">
    //     <Link href="/cars" className="flex items-center gap-2">
    //       <ArrowLeftIcon />
    //       Back to Cars
    //     </Link>
    //   </Button>

    //   {carDetails.map((car) => (
    //     <div key={car.id}>
    //       <div className="flex flex-col lg:flex-row gap-8">
    //         {/* <!-- Image --> */}
    //         <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden border-2 border-neutral-400">
    //           <Image
    //             src={car.img}
    //             alt="bugatti"
    //             width={800}
    //             height={500}
    //             className="w-full h-auto object-cover"
    //             sizes="(max-width: 768px) 100vw, 50vw"
    //           />
    //         </div>

    //         {/* <!-- Car Info --> */}
    //         <div className="w-full lg:w-1/2 space-y-4">
    //           <h2 className="text-3xl font-bold text-gray-900">{car.model}</h2>
    //           <p className="text-gray-600 text-sm">
    //             Posted in <span className="font-medium">{car.location}</span>
    //           </p>
    //           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
    //             <div>
    //               <strong>Brand:</strong> {car.brand}
    //             </div>
    //             <div>
    //               <strong>Model:</strong> {car.class}
    //             </div>
    //             <div>
    //               <strong>Year:</strong> {car.year}
    //             </div>
    //             <div>
    //               <strong>Type:</strong> {car.type}
    //             </div>
    //             <div>
    //               <strong>Transmission:</strong> {car.transmission}
    //             </div>
    //             <div>
    //               <strong>Fuel:</strong> {car.fuel}
    //             </div>
    //             <div>
    //               <strong>Seats:</strong> {car.seating}
    //             </div>
    //             <div>
    //               <strong>Status:</strong>{" "}
    //               <span className="text-green-600 font-medium">
    //                 {car.carStatus}
    //               </span>
    //             </div>
    //             <div>
    //               <strong>Price/Day:</strong> ${car.dailyPrice}
    //             </div>
    //           </div>
    //           <p className="text-gray-800 mt-4 text-base leading-relaxed">
    //             {car.description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //   {/* <!-- Divider --> */}
    //   <hr className="my-8 border-gray-300" />
    //   {/* <!-- Booking Section --> */}
    //   <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    //     <h3 className="text-xl font-semibold mb-4">Book This Car</h3>
    //     <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <div>
    //         <label className="block text-sm font-medium">Start Date</label>
    //         <input
    //           type="date"
    //           name="startDate"
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium">End Date</label>
    //         <input
    //           type="date"
    //           name="endDate"
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
    //         />
    //       </div>
    //       <div className="md:col-span-2">
    //         <button
    //           type="submit"
    //           className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
    //         >
    //           Confirm Booking
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>
  );
}
