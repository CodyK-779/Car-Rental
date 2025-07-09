"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Cars", link: "/cars" },
  { title: "Bookings", link: "/bookings" },
  { title: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 py-1 z-10 w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={80} height={80} />
          <p className="text-2xl font-bold">Car Rental</p>
        </Link>
        <ul className="flex items-center text-lg font-medium gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="hover:text-yellow-500 transition-colors duration-150 ease-in"
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4 pr-2">
          {!session ? (
            <Button
              asChild
              className="bg-white hover:bg-neutral-200 text-black font-bold"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          ) : (
            <SignOutButton />
          )}

          <Button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-150 ease-in text-black font-bold">
            Add Listing
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
