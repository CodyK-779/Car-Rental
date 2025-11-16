"use client";

import { motion } from "framer-motion";
import { CarIcon, MapPin, MessageCircleMore, Phone } from "lucide-react";

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

const ContactMotion = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ y: -70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.08,
            ease: "easeOut",
          }}
          className="p-4 border-2 border-neutral-300 rounded-lg hover:shadow-xl transition duration-300 ease-out cursor-pointer"
        >
          <div className="p-2 border-2 rounded-md w-fit">{d.icon}</div>
          <div className="flex flex-col pt-10">
            <p className="font-bold">{d.title}</p>
            <p className="text-sm font-medium mt-1 text-neutral-600">
              {d.desc}
            </p>
            <p className="text-sm mt-2 font-bold underline">{d.link}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactMotion;
