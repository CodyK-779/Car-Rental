"use client";

import * as React from "react";
import {
  CarIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  PlusSquareIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  const { open, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  if (!session) return null;

  return (
    <Sidebar collapsible="icon" {...props} className="mt-20">
      <div className={"flex justify-end mt-2 mr-2.5"}>
        <SidebarTrigger />
      </div>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            {/* <activeTeam.logo className="size-4" /> */}
            <Avatar>
              <AvatarImage src={session?.user.image!} />
              <AvatarFallback className="text-white bg-black">
                {session?.user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight ml-1">
            <span className="truncate font-semibold">{session?.user.name}</span>
            <span className="truncate text-xs font-medium text-neutral-500">
              {session?.user.email}
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-6 mt-8 pl-3">
          {tabs.map((tab) => {
            const isActive = pathname === tab.link;

            return (
              <Link
                key={tab.link}
                href={tab.link}
                onClick={() => setOpenMobile(false)}
                className="flex items-center gap-2"
              >
                <div className={`${isActive && !open && "md:text-blue-700"}`}>
                  {tab.icon}
                </div>
                <p
                  className={`${!open && "md:hidden"} font-medium ${
                    isActive && "text-blue-700"
                  } transition-colors duration-150 ease-in`}
                >
                  {tab.title}
                </p>
              </Link>
            );
          })}
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
