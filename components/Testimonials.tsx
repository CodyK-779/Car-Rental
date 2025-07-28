import { testimonials } from "@/testimonialsData";
import Image from "next/image";
import { Marquee } from "./magicui/marquee";

interface Props {
  name: string;
  email: string;
  img: string;
  review: string;
  stars: number;
}

const firstRow = testimonials.slice(0, 6);
const secondRow = testimonials.slice(6, 12);
const thirdRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({ name, email, img, review, stars }: Props) => {
  return (
    <div className="relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border-2 p-4 border-neutral-300 hover:bg-gray-950/[.05]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={img}
            alt="profile"
            width={40}
            height={40}
            className="size-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-medium">{name}</p>
            <p className="text-sm -mt-0.5 font-medium text-neutral-600">
              {email}
            </p>
          </div>
        </div>
        <i className="ri-double-quotes-l text-xl text-neutral-500"></i>
      </div>
      <p className="text-sm font-medium text-gray-700 w-[300px] mt-2">
        {review}
      </p>
      <div className="flex mt-2 text-lg text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < stars ? "★" : "☆"}</span>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="flex flex-col items-center justify-center px-3">
        <div className="border-2 border-neutral-300 px-3 py-0.5 rounded-full text-xs font-medium">
          Testimonials
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-800">
          Our trusted clients
        </h1>
        <p className="text-base text-center mt-1 font-medium text-gray-600 mb-8">
          Our mission is to drive progress and enhance the lives of our
          customers by delivering <br className="hidden sm:block" /> superior
          vehicles and services that exceed expectations.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 w-full relative flex-col items-center justify-center overflow-hidden">
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:35s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </div>
  );
};

export default Testimonials;
