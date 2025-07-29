"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PropsWithChildren, useState } from "react";

export default function Dashboard2Layout({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Overlay setOpenMenu={setOpenMenu} />}
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <SidebarProvider>
        <AppSidebar />
        <main className="mt-20 pb-20 overflow-hidden" suppressHydrationWarning>
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
