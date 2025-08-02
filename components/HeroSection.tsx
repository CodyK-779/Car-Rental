import { TextAnimate } from "./magicui/text-animate";
import HomeBg from "./HeroCarMotion";
import HeroBtnMotion from "./HeroBtnMotion";

const HeroSection = async () => {
  return (
    <div className="relative sm:min-h-screen bg-sky-100 pb-16 sm:pb-10 rounded-b-[40px]">
      <div className="flex flex-col items-center justify-center pt-40">
        <TextAnimate
          animation="blurInDown"
          duration={1}
          viewport={{ once: true }}
          className="max-[380px]:text-3xl text-4xl sm:text-5xl lg:text-7xl text-center font-bold sm:font-semibold px-2"
        >
          Premium car rental
        </TextAnimate>
        <TextAnimate
          animation="blurIn"
          className="max-[450px]:text-lg text-base sm:text-2xl font-semibold text-center mt-3.5 px-2 lg:w-[850px] text-neutral-700"
          duration={1.75}
          viewport={{ once: true }}
        >
          Explore our curated fleet of high-end vehicles—unmatched comfort,
          performance, and style for every journey.
        </TextAnimate>

        <HomeBg />
        <div className="max-[352px]:mt-[160px] max-[450px]:mt-[180px] mt-[200px] sm:mt-[300px] z-10">
          <HeroBtnMotion />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
