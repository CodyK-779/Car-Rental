import Image from "next/image";
import logo from "@/public/logo.png";
import { navLinks } from "./Navbar";
import Link from "next/link";

const brands1 = [
  { name: "Audi", link: "https://www.audi.com/en/" },
  { name: "BMW", link: "https://www.bmw.com/en/index.html" },
  { name: "Ford", link: "https://www.ford.com/" },
  { name: "Honda", link: "https://www.honda.com/" },
  { name: "Toyota", link: "https://www.toyota.com/" },
  { name: "Tesla", link: "https://www.tesla.com/" },
];

const brands2 = [
  { name: "Porsche", link: "https://www.porsche.com/usa/" },
  { name: "Ferrari", link: "https://www.ferrari.com/en-EN" },
  { name: "Mercedes", link: "https://www.mercedes-benz.com/en/" },
  { name: "Bugatti", link: "https://www.bugatti.com/" },
  { name: "Lamborghini", link: "https://www.lamborghini.com/en-en#val-ht" },
];

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-neutral-300 py-8 bg-gray-100">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-start pb-8 gap-4">
        {/* First Row */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <p className="text-2xl font-bold">Car Rental</p>
          </div>
          <p className="font-medium -mt-2 w-[340px] md:w-full text-neutral-700">
            Whether you're looking to book your next ride or list your own car
            to earn, we've got you covered.
          </p>
        </div>
        {/* Second Row */}
        <div className="flex flex-col items-start md:items-center pt-4 md:pt-8 gap-4">
          <h1 className="text-xl font-bold">Links</h1>
          <ul className="flex flex-col items-start md:items-center gap-2">
            {navLinks.map((link) => (
              <li
                key={link.link}
                className="font-semibold text-neutral-600 hover:text-red-500 duration-150 transition-colors ease-in"
              >
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Third Row */}
        <div className="flex flex-col items-start md:items-center pt-4 md:pt-8 gap-4">
          <h1 className="text-xl font-bold">Brands</h1>
          <ul className="flex flex-col items-start md:items-center gap-2">
            {brands1.map((brand) => (
              <li
                key={brand.link}
                className="font-semibold text-neutral-600 hover:text-red-500 duration-150 transition-colors ease-in"
              >
                <Link href={brand.link}>{brand.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Fourth Row */}
        <div className="flex flex-col items-start md:items-center pt-4 md:pt-8 gap-4">
          <h1 className="text-xl font-bold">Brands 2</h1>
          <ul className="flex flex-col items-start md:items-center gap-2">
            {brands2.map((brand) => (
              <li
                key={brand.link}
                className="font-semibold text-neutral-600 hover:text-red-500 duration-150 transition-colors ease-in"
              >
                <Link href={brand.link}>{brand.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Fifth Row */}
        <div className="flex flex-col items-start pt-3 md:pt-8 gap-4">
          <h1 className="text-2xl font-bold">Follow our socials</h1>
          <p className="font-medium text-neutral-600">
            By following our socials you can stay up to date on new available
            cars.
          </p>
          <div className="flex items-center -mt-1 gap-3">
            <i className="ri-github-fill text-2xl cursor-pointer"></i>
            <i className="ri-facebook-circle-fill text-2xl cursor-pointer"></i>
            <i className="ri-twitter-x-line text-xl cursor-pointer"></i>
            <i className="ri-instagram-line text-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
      {/* Copyright Msg */}
      <div className="px-2 border-t-2 border-neutral-300 text-neutral-600 dark:text-neutral-300 flex flex-col md:flex-row gap-1.5 items-center justify-center pt-12 pb-6">
        <p className="md:text-lg font-medium">
          © 2025 Blog Studio All rights reserved.{" "}
          <span className="mx-4 hidden md:inline-block">|</span>
        </p>
        <div className="flex items-center gap-4 md:text-lg font-medium">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Service</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
