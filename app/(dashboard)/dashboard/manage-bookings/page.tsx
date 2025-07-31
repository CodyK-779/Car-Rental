import { getBookedCars } from "@/actions/booking-action";
import ToggleBookingStatus from "@/components/ToggleBookingStatus";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/lib/auth";
import { format } from "date-fns";
import { headers } from "next/headers";
import Image from "next/image";

export default async function ManageBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return;
  const userId = session.user.id;

  const bookings = await getBookedCars(userId);

  if (!bookings) return null;

  return (
    <div className="pt-10 px-3 md:px-8 w-full overflow-hidden">
      <h1 className="text-3xl text-center md:text-start font-semibold">
        Manage Bookings
      </h1>
      <p className="mt-2 text-center md:text-start text-neutral-500">
        Update the status of your bookings to cancel or confirm.
      </p>
      <div className="mt-6">
        {bookings.length > 0 ? (
          <div className="border-2 rounded-md px-2 overflow-x-auto">
            <div className="min-w-[680px]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Car</TableHead>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Image
                            src={b.car.img}
                            alt="audi"
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <p className="text-sm font-medium text-neutral-600">
                            {b.car.model}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-medium text-neutral-500">
                          {format(new Date(b.startDate), "dd-MM-yyyy")}{" "}
                          <span className="mx-0.5">To</span>{" "}
                          {format(new Date(b.endDate), "dd-MM-yyyy")}
                        </p>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-neutral-600">
                        ${b.car.dailyPrice}
                      </TableCell>
                      <TableCell>
                        <div className="w-fit px-3 py-0.5 text-center rounded-full text-sm font-medium text-neutral-500 bg-gray-100">
                          offline
                        </div>
                      </TableCell>
                      <TableCell>
                        <ToggleBookingStatus id={b.id} status={b.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <p className="text-xl font-semibold text-center sm:text-start mt-20 text-neutral-500">
            You haven't booked any cars yet.
          </p>
        )}
      </div>
    </div>
  );
}
