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
import Image from "next/image";

interface Props {
  expanded: boolean;
  setExpanded: (fun: boolean) => void;
}

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

const DashboardSide = ({ expanded, setExpanded }: Props) => {
  const { data: session } = useSession();

  const pathname = usePathname();

  const fallbackAvatar = session?.user.name.charAt(0).toUpperCase();

  return (
    <div
      className={`fixed top-0 left-0 md:h-screen pb-4 md:p-0 shadow md:shadow-none md:pt-28 pt-28 border-2 bg-white z-10 ${
        expanded ? "md:max-w-[230px]" : "md:w-fit"
      } w-full transition-all duration-300 ease-in`}
    >
      <div
        className={`hidden mb-6 md:flex ${
          expanded ? "justify-end pr-4" : "justify-center md:px-4"
        }`}
      >
        {expanded ? (
          <Image
            src="/close.png"
            alt="close sidebar"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setExpanded(false)}
          />
        ) : (
          <Image
            src="/expand.png"
            alt="close sidebar"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setExpanded(true)}
          />
        )}
      </div>
      <div
        className={`flex flex-col items-center justify-center pb-4 md:pb-0 ${
          !expanded && "px-4"
        }`}
      >
        <Avatar
          className={`${
            expanded ? "md:size-14 size-16" : "md:size-10 md:mt-8"
          } `}
        >
          <AvatarImage src={session?.user.image!} />
          <AvatarFallback className="bg-black text-white font-medium">
            {fallbackAvatar}
          </AvatarFallback>
        </Avatar>
        <p
          className={`${
            !expanded && "md:hidden"
          } font-medium text-lg md:text-base text-center mt-2`}
        >
          {session?.user.name}
        </p>
      </div>
      <div
        className={`flex md:flex-col flex-row gap-2 mt-8 border-t-2 md:border-0 border-b-2 md:border-b-0 ${
          !expanded && "md:pt-4"
        }`}
      >
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.link;
          return (
            <div
              key={index}
              className={`w-full py-2.5 ${!expanded && "md:px-4"} ${
                isActive &&
                "bg-neutral-700 text-gray-50 md:border-r-4 border-blue-500 rounded-b-md md:rounded-r-md"
              }`}
            >
              <Link
                href={tab.link}
                className={`flex flex-col md:flex-row ${
                  !expanded
                    ? "items-center justify-center"
                    : "md:pl-3.5 pl-0 items-center justify-center md:items-start md:justify-start"
                }  pt-2 md:pt-0 gap-2`}
              >
                {tab.icon}
                <p
                  className={`${
                    !expanded && "md:hidden"
                  } text-sm md:text-base font-medium text-center`}
                >
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
