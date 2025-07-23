import { getUserStats } from "@/actions/user-action";
import CustomerInfo from "@/components/CustomerInfo";
import { auth } from "@/lib/auth";
import { CarIcon, ClipboardListIcon, TriangleAlertIcon } from "lucide-react";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return;

  const userId = session.user.id;
  const user = await getUserStats(userId);

  return (
    <div className="pt-10 px-8 w-full">
      <h1 className="text-3xl text-center md:text-start font-medium">
        User Dashboard
      </h1>
      <p className="mt-2 text-center md:text-start text-neutral-500 w-full lg:w-[650px]">
        A centralized control panel for managing your car rental business.
        Monitor live metrics, approve bookings, and optimize fleet
        performance—all from one place.
      </p>
      <div className="flex items-center md:items-start justify-center md:justify-start">
        <div className="mt-9 grid lg:grid-cols-4 min-[880px]:grid-cols-3 grid-cols-2 max-[440px]:grid-cols-1 gap-6">
          {/* Total Cars */}
          <div className="w-[180px] rounded-md flex items-center justify-between p-4 border border-neutral-400">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-neutral-500">Total Cars</p>
              <p className="text-lg font-semibold">{user?.carCount}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <CarIcon className="size-5 text-blue-800" />
            </div>
          </div>
          {/* Total Bookings */}
          <div className="w-[180px] rounded-md flex items-center justify-between p-4 border border-neutral-400">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-neutral-500">
                Total Bookings
              </p>
              <p className="text-lg font-semibold">{user?.bookingCount}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <ClipboardListIcon className="size-5 text-blue-800" />
            </div>
          </div>
          {/* Pending */}
          <div className="w-[180px] rounded-md flex items-center justify-between p-4 border border-neutral-400">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-neutral-500">Pending</p>
              <p className="text-lg font-semibold">{user?.pendingCount}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <TriangleAlertIcon className="size-5 text-blue-800" />
            </div>
          </div>
          {/* Confirmed */}
          <div className="w-[180px] rounded-md flex items-center justify-between p-4 border border-neutral-400">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-neutral-500">Confirmed</p>
              <p className="text-lg font-semibold">{user?.confirmedCount}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <ClipboardListIcon className="size-5 text-blue-800" />
            </div>
          </div>
        </div>
      </div>
      <CustomerInfo ownerId={userId} />
    </div>
  );
}
