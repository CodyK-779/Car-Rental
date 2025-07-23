"use client";

import DashboardSide from "@/components/DashboardSide";
import Navbar from "@/components/Navbar";
import { PropsWithChildren, useState } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="pt-[78px] flex flex-col md:flex-row min-h-screen overflow-hidden">
        <DashboardSide expanded={expanded} setExpanded={setExpanded} />
        <main
          className={`pb-20 pt-64 md:pt-0 ${
            expanded ? "md:ml-[230px]" : "md:ml-[70px]"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
