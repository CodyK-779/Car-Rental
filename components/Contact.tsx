import Image from "next/image";
import logo from "@/public/logo.png";
import Faq from "./Faq";
import ContactMotion from "./ContactMotion";

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
      <ContactMotion />
      <Faq />
    </div>
  );
};

export default Contact;
