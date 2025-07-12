import BrandSection from "@/components/BrandSection";
import FeaturedCars from "@/components/FeaturedCars";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <FeaturedCars />
    </>
  );
}
