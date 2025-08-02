"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import { navLinks } from "./Navbar";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

interface Props {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

const sidebarStyles =
  "lg:hidden fixed top-0 right-0 rounded-md z-30 min-h-screen w-[350px] max-[450px]:w-full max-[450px]:bg-white/60 max-[450px]:backdrop-blur-lg bg-neutral-100 shadow transition-transform duration-200 ease-in";

const Sidebar = ({ openMenu, setOpenMenu }: Props) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div
      className={`${sidebarStyles} ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute top-6 right-4 cursor-pointer"
        onClick={() => setOpenMenu(false)}
      >
        <i className="ri-close-large-fill text-2xl font-medium"></i>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src={logo}
          alt="Logo"
          width={75}
          height={75}
          className="mt-0.5 ml-2"
        />
        <p className="text-lg font-semibold mt-2">Car Rental</p>
      </div>
      <ul className="flex flex-col items-center justify-center mt-24 gap-10">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.link || pathname.startsWith(link.link + "/");

          return (
            <li
              key={link.link}
              onClick={() => setOpenMenu(false)}
              className={`text-xl font-semibold ${
                isActive && "text-blue-600"
              } hover:text-blue-600 transition-colors duration-200 ease-in`}
            >
              <Link href={link.link}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-16 mx-3">
        {session ? (
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage src={session.user.image!} />
                <AvatarFallback className="bg-neutral-900 text-white">
                  {session.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{session.user.name}</p>
                <p className="text-sm font-medium text-neutral-600">
                  {session.user.email}
                </p>
              </div>
            </div>
            <div className="mt-6 mx-1.5">
              <SignOutButton width />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href="/login">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
