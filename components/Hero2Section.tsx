import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero2Section = () => {
  return (
    <section className="bg-gray-100 py-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-2">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">
            Cars for Every Trip
          </h1>
          <p className="mt-4 w-full md:max-w-[450px] text-neutral-600 font-medium leading-relaxed">
            Whether it’s a weekend getaway, a business trip, or a long-term
            rental, our cars are ready for every journey. Choose from a wide
            range of well-maintained, modern vehicles — all with transparent
            pricing, easy booking, and full insurance coverage.
          </p>
          <Button asChild className="mt-6">
            <Link href="/cars">Choose Your Car</Link>
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1 shrink-0 min-w-[450px]">
          <Image
            src="/hero.png"
            alt="audi"
            width={1000}
            height={500}
            className="w-full min-w-[560px] max-[768px]:min-w-[500px] h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2Section;
