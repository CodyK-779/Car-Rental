import Link from "next/link";
import { Button } from "./ui/button";
import { BoxReveal } from "./magicui/box-reveal";
import Hero2Car from "./Hero2Car";

const Hero2Section = () => {
  return (
    <section className="bg-gray-100 py-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-2">
        {/* Text Content */}
        <div className="flex-1">
          <BoxReveal boxColor={"#5046e6"} duration={1}>
            <h1 className="min-[400px]:text-3xl text-2xl font-bold text-gray-800">
              Cars for Every Trip
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={1}>
            <p className="mt-4 w-full md:max-w-[450px] min-[400px]:text-base text-sm text-neutral-600 font-medium leading-relaxed">
              Whether it’s a weekend getaway, a business trip, or a long-term
              rental, our cars are ready for every journey. Choose from a wide
              range of well-maintained, modern vehicles — all with transparent
              pricing, easy booking, and full insurance coverage.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={1}>
            <Button asChild className="mt-6">
              <Link href="/cars">Choose Your Car</Link>
            </Button>
          </BoxReveal>
        </div>

        {/* Image */}
        <Hero2Car />
      </div>
    </section>
  );
};

export default Hero2Section;
