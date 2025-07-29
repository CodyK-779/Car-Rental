"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

interface Props {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

export const navLinks = [
  { title: "Home", link: "/" },
  { title: "Cars", link: "/cars" },
  { title: "Bookings", link: "/bookings" },
  { title: "Dashboard", link: "/dashboard" },
];

const Navbar = ({ openMenu, setOpenMenu }: Props) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 py-1 z-20 w-full border-b border-neutral-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={70} height={70} />
          <p className="text-2xl font-bold">Car Rental</p>
        </Link>
        <ul className="hidden lg:flex items-center text-lg font-medium gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.link || pathname.startsWith(link.link + "/");

            return (
              <Link
                key={link.link}
                href={link.link}
                className={`font-semibold transition-colors duration-150 ease-in hover:text-blue-600 ${
                  isActive && "text-blue-600"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          {!session ? (
            <Button
              asChild
              className="bg-white hover:bg-neutral-200 text-black font-bold"
            >
              <Link href="/login">Register</Link>
            </Button>
          ) : (
            <SignOutButton />
          )}

          <Button
            className="bg-black hover:bg-neutral-700 text-white transition-colors duration-150 ease-in font-bold"
            asChild
          >
            <Link href="/dashboard/add-car">Add Listing</Link>
          </Button>
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpenMenu(true)}
        >
          <i className="ri-menu-line text-2xl pr-2"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
