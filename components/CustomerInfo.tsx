import { getCustomerInfo } from "@/actions/booking-action";
import { BookingStatus } from "@/lib/generated/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  ownerId: string;
}

const CustomerInfo = async ({ ownerId }: Props) => {
  const bookings = await getCustomerInfo(ownerId);

  if (!bookings) return null;
  const fallbackAvatar = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center md:text-start font-medium mb-8">
        These are all the users that booked your car
      </h1>
      <div>
        {bookings.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="border-2 border-neutral-300 rounded-xl p-4 shadow-md bg-white dark:bg-neutral-900"
              >
                {/* Car Info */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-md overflow-hidden">
                    <img
                      src={b.car.img}
                      alt={b.car.model}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {b.car.brand} {b.car.model} ({b.car.year})
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {b.car.type} • {b.car.transmission} • {b.car.fuel} •{" "}
                      {b.car.seating} Seats
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Location: {b.car.location} | ${b.car.dailyPrice}/day
                    </p>
                  </div>
                </div>
                {/* Booking User */}
                <div className="mt-6 border-2 border-neutral-200 p-3 rounded-md bg-neutral-100 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={b.user.image!} />
                      <AvatarFallback className="bg-black text-white font-medium">
                        {fallbackAvatar(b.user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{b.user.name}</p>
                      <p className="text-sm text-gray-500">{b.user.email}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      📅 {new Date(b.startDate).toLocaleDateString()} →{" "}
                      {new Date(b.endDate).toLocaleDateString()}
                    </p>
                    <p>
                      📝{" "}
                      <span
                        className={`font-semibold ${statusColor(b.status)}`}
                      >
                        {b.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl font-semibold mt-8 pl-4 text-center md:text-start text-neutral-600">
            None of your cars have been booked yet.
          </p>
        )}
      </div>
    </div>
  );
};

function statusColor(status: BookingStatus) {
  switch (status) {
    case "Confirmed":
      return "text-green-600";
    case "Pending":
      return "text-yellow-500";
    case "Cancelled":
      return "text-red-500";
    default:
      return "";
  }
}

export default CustomerInfo;
