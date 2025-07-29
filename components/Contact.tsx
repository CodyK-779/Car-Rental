import Image from "next/image";
import logo from "@/public/logo.png";
import { CarIcon, MapPin, MessageCircleMore, Phone } from "lucide-react";
import Faq from "./Faq";

const data = [
  {
    icon: <CarIcon className="size-5" />,
    title: "Chat to book",
    desc: "Speak to our team",
    link: "book@kztrental.com",
  },
  {
    icon: <MessageCircleMore className="size-5" />,
    title: "Chat to support",
    desc: "We're here to help",
    link: "support@kztrental.com",
  },
  {
    icon: <MapPin className="size-5" />,
    title: "Visit us",
    desc: "Visit our office HQ.",
    link: "View on Google Maps",
  },
  {
    icon: <Phone className="size-4" />,
    title: "Call us",
    desc: "Mon-Fri from 8am to 9pm.",
    link: "+1 (555) 000-0000",
  },
];

const Contact = () => {
  return (
    <div className="pt-14 pb-16 bg-white">
      <div className="flex flex-col items-center justify-center px-2">
        <Image src={logo} alt="Logo" width={80} height={80} />
        <h1 className="text-4xl font-bold text-gray-800">Contact our team</h1>
        <p className="mt-1 font-medium text-neutral-600">
          Let us know how we can help.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-3 mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((d) => (
          <div
            key={d.title}
            className="p-4 border-2 border-neutral-300 rounded-lg hover:shadow-xl transition duration-200 ease-in cursor-pointer"
          >
            <div className="p-2 border-2 rounded-md w-fit">{d.icon}</div>
            <div className="flex flex-col pt-10">
              <p className="font-bold">{d.title}</p>
              <p className="text-sm font-medium mt-1 text-neutral-600">
                {d.desc}
              </p>
              <p className="text-sm mt-2 font-bold underline">{d.link}</p>
            </div>
          </div>
        ))}
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
