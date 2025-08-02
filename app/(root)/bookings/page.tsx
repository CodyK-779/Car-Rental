import { getBookedCars } from "@/actions/booking-action";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { auth } from "@/lib/auth";
import { BookingStatus } from "@/lib/generated/prisma";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import { headers } from "next/headers";

export default async function BookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return;

  const bookings = await getBookedCars(session.user.id);

  if (!bookings) return null;

  const bookingStatusBadge = (status: BookingStatus) => {
    if (status === "Confirmed") {
      return "bg-green-500 text-white";
    } else if (status === "Cancelled") {
      return "bg-red-500 text-white";
    } else {
      return "bg-black text-white";
    }
  };

  return (
    <section className="mt-32 pb-20 max-w-4xl w-full mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h1 className="text-5xl font-semibold text-center mb-3">
            My Bookings
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-center font-medium text-neutral-500">
            These are all the Bookings that you've made. You can either{" "}
            <br className="hidden md:block" /> Cancel or Confirm your Bookings
            in your Dashboard Manage Bookings section
          </p>
        </BoxReveal>
      </div>
      <div className="w-full mt-16">
        {bookings.length > 0 ? (
          <div>
            {bookings.map((b, index) => (
              <div
                key={b.id}
                className="grid grid-cols-1 md:grid-cols-4 border-2 rounded-lg shadow mb-5 border-neutral-300 overflow-hidden p-4 md:p-6"
              >
                {/* First Row */}
                <div className="md:col-span-1">
                  <div className="rounded-md overflow-hidden">
                    <img
                      src={b.car.img}
                      alt={b.car.model}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </div>
                  <p className="font-semibold mt-1.5">{b.car.model}</p>
                  <p className="text-[15px] font-medium text-neutral-500">
                    {b.car.year} • {b.car.type} • {b.car.location}
                  </p>
                </div>
                {/* Second Row */}
                <div className="md:col-span-2 flex flex-col md:ml-4 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-3 py-1 rounded-md bg-gray-100">
                      <p className="text-sm font-medium flex items-center gap-1">
                        Booking <span>#{index + 1}</span>
                      </p>
                    </div>
                    <div
                      className={`text-sm px-2.5 pt-0.5 pb-1 rounded-full ${bookingStatusBadge(
                        b.status
                      )}`}
                    >
                      {b.status.toLowerCase()}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-start gap-2 mt-2">
                      <Calendar className="size-4 text-blue-700" />
                      <div className="flex flex-col">
                        <h1 className="text-sm font-medium text-neutral-500">
                          Rental Period
                        </h1>
                        <p className="text-sm font-semibold whitespace-nowrap">
                          {format(new Date(b.startDate), "dd-MM-yyyy")}{" "}
                          <span className="mx-1">To</span>{" "}
                          {format(new Date(b.endDate), "dd-MM-yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 mt-2">
                      <MapPin className="size-5 text-blue-700" />
                      <div className="flex flex-col">
                        <h1 className="text-sm font-medium text-neutral-500">
                          Pick-up Location
                        </h1>
                        <p className="text-sm font-semibold whitespace-nowrap">
                          {b.car.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="md:col-span-1 flex flex-col justify-between gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-neutral-500">
                      Total Price
                    </p>
                    <h1 className="text-2xl font-semibold text-blue-700">
                      ${b.car.dailyPrice}
                    </h1>
                    <p className="text-sm font-medium text-neutral-500">
                      Booked on {format(new Date(b.createdAt), "dd-MM-yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl font-semibold text-center">
            You haven't booked any cars yet.
          </p>
        )}
      </div>
    </section>
  );
}
