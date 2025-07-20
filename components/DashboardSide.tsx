"use client";

import { useSession } from "@/lib/auth-client";
import {
  CarIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  PlusSquareIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboardIcon className="size-5" />,
  },
  {
    title: "Add Car",
    link: "/dashboard/add-car",
    icon: <PlusSquareIcon className="size-5" />,
  },
  {
    title: "Manage Cars",
    link: "/dashboard/manage-cars",
    icon: <CarIcon className="size-5" />,
  },
  {
    title: "Manage Bookings",
    link: "/dashboard/manage-bookings",
    icon: <ClipboardListIcon className="size-5" />,
  },
];

const DashboardSide = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (!session) return;

  const fallbackAvatar = session.user.name.charAt(0).toUpperCase();

  return (
    <div className="pt-8 border-2 md:min-w-[230px]">
      <div className="flex flex-col items-center justify-center pb-4 md:pb-0">
        <Avatar className="size-16 md:size-14">
          <AvatarImage src={session.user.image!} />
          <AvatarFallback>{fallbackAvatar}</AvatarFallback>
        </Avatar>
        <p className="font-medium text-lg md:text-base text-center mt-2">
          {session.user.name}
        </p>
      </div>
      <div className="flex md:flex-col flex-row gap-2 mt-8 border-t-2 md:border-0">
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.link;

          return (
            <div
              key={index}
              className={`w-full py-2.5 ${
                isActive &&
                "bg-neutral-700 text-gray-50 md:border-r-4 border-blue-500 rounded-b-md md:rounded-r-md"
              }`}
            >
              <Link
                href={tab.link}
                className="flex flex-col md:flex-row items-center pt-2 md:pt-0 pl-0 md:pl-3.5 gap-2"
              >
                {tab.icon}
                <p className="text-sm md:text-base font-medium text-center">
                  {tab.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSide;
