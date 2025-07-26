import Benefits from "@/components/Benefits";
import BrandSection from "@/components/BrandSection";
import FeaturedCars from "@/components/FeaturedCars";
import Hero2Section from "@/components/Hero2Section";
import HeroSection from "@/components/HeroSection";
import HowItWork from "@/components/HowItWork";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <FeaturedCars />
      <HowItWork />
      <Benefits />
      <Hero2Section />
    </>
  );
}
