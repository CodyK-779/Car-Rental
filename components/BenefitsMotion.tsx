"use client";

import { motion } from "framer-motion";

const data = [
  {
    icon: "🚗",
    title: "Wide Car Selection",
    text: "Choose from a wide variety of vehicles to match every style and budget.",
  },
  {
    icon: "💳",
    title: "Affordable Pricing",
    text: "Transparent pricing with no hidden fees. Pay only for what you use.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    text: "Safe transactions, verified listings, and 24/7 customer support.",
  },
  {
    icon: "🧾",
    title: "Easy Booking Process",
    text: "Book your car in just a few clicks with our user-friendly system.",
  },
  {
    icon: "🧍‍♂️",
    title: "Add Your Car & Earn",
    text: "Have a car? List it with us and start earning from day one.",
  },
  {
    icon: "🌐",
    title: "Nationwide Coverage",
    text: "Available in major cities across the country for ultimate convenience.",
  },
];

const BenefitsMotion = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((b, i) => (
        <motion.div
          key={i + 1}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.06,
            ease: "easeOut",
          }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-out"
        >
          <div className="text-blue-600 mb-4 text-4xl">{b.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {b.title}
          </h3>
          <p className="text-gray-600">{b.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsMotion;
