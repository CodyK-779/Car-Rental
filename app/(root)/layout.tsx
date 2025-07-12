"use client";

import Navbar from "@/components/Navbar";
import { PropsWithChildren, useState } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main className="pb-20">{children}</main>
    </div>
  );
}
