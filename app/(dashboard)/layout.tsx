"use client";

import DashboardSide from "@/components/DashboardSide";
import Navbar from "@/components/Navbar";
import { PropsWithChildren, useState } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="pt-[78px] flex flex-col md:flex-row min-h-screen overflow-hidden">
        <DashboardSide />
        <main className="pb-20">{children}</main>
      </div>
    </div>
  );
}
