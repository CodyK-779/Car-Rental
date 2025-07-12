import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative sm:min-h-screen bg-neutral-200 pb-16 sm:pb-10 rounded-b-[40px]">
      <div className="flex flex-col items-center justify-center pt-40">
        <h1 className="max-[380px]:text-3xl text-4xl sm:text-5xl lg:text-7xl text-center font-semibold px-2">
          Premium car rental
        </h1>
        <p className="max-[450px]:text-lg text-xl sm:text-2xl font-semibold text-center mt-3.5 px-2 lg:w-[850px]">
          Explore our curated fleet of high-end vehicles—unmatched comfort,{" "}
          performance, and style for every journey.
        </p>

        <div className="absolute max-[380px]:top-60 max-[450px]:top-52 top-48 sm:top-32">
          <Image src="/homeBg.png" alt="car bg" width={800} height={700} />
        </div>
        <div className="max-[450px]:mt-[180px] mt-[200px] sm:mt-[300px]">
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="rounded-full font-semibold sm:px-8 sm:py-5"
            >
              <Link href="/">Start Booking</Link>
            </Button>
            <Button
              asChild
              className="rounded-full font-semibold sm:px-8 sm:py-5"
            >
              <Link href="/">Add Listing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

{
  /* <section className="mt-40 sm:mt-[250px] px-4">
  <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
  <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
    <div>
      <h3 className="text-xl font-semibold">1. Choose Your Car</h3>
      <p className="text-gray-600 mt-2">
        Browse our luxury fleet to find the perfect ride.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold">2. Set Your Schedule</h3>
      <p className="text-gray-600 mt-2">
        Select pick-up and drop-off times that suit you.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold">3. Enjoy the Drive</h3>
      <p className="text-gray-600 mt-2">
        Pick up your car and hit the road stress-free.
      </p>
    </div>
  </div>
</section> */
}
