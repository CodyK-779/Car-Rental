"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "./magicui/marquee";

const brands = [
  { logo: "/audi.png", style: 60 },
  { logo: "/bmw.png", style: 56 },
  { logo: "/ford.png", style: 70 },
  { logo: "/honda.png", style: 56 },
  { logo: "/mercedes.png", style: 80 },
  { logo: "/porsche.png", style: 40 },
  { logo: "/tesla.png", style: 46 },
  { logo: "/toyota.png", style: 60 },
  { logo: "/ferrari.png", style: 80 },
  { logo: "/lambo.png", style: 90 },
  { logo: "/bugatti.png", style: 100 },
];

const BrandSection = () => {
  return (
    <div className="mt-10 sm:mt-14" id="brand">
      <h1 className="text-2xl sm:text-4xl text-center px-2 font-bold text-gray-800">
        Explore our Premium Brands
      </h1>
      <div className="relative w-full overflow-hidden mt-10 sm:mt-16 bg-gray-100 py-2">
        <Marquee pauseOnHover className="sm:[--duration:40s] [--duration:50s]">
          <div className="flex items-center justify-center">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 px-10">
                <Image
                  src={brand.logo}
                  alt={brand.logo}
                  width={brand.style}
                  height={brand.style}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandSection;
