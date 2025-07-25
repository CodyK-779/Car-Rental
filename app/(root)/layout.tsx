"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren, useState } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Overlay setOpenMenu={setOpenMenu} />}
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main className="pb-20">{children}</main>
      <Footer />
    </div>
  );
}
