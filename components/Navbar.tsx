"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import SignOutButton from "./SignOutButton";

interface Props {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Cars", link: "/cars" },
  { title: "Bookings", link: "/bookings" },
  { title: "Dashboard", link: "/dashboard" },
];

const Navbar = ({ openMenu, setOpenMenu }: Props) => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 py-1 z-20 w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={70} height={70} />
          <p className="text-2xl font-bold">Car Rental</p>
        </Link>
        <ul className="hidden lg:flex items-center text-lg font-medium gap-10">
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
        <div className="hidden lg:flex items-center gap-4">
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

          <Button
            className="bg-white hover:bg-neutral-200 text-black transition-colors duration-150 ease-in font-bold"
            asChild
          >
            <Link href="/dashboard/add-car">Add Listing</Link>
          </Button>
        </div>
        <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
          <i className="ri-menu-line text-2xl pr-2"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
