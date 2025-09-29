"use client";

import { useState } from "react";

export const faqs = [
  {
    id: 1,
    title: "What do I need to rent a car?",
    answer:
      "To rent a car, you’ll need a valid driver’s license, a government-issued ID, and a credit or debit card. Some locations may also require you to be at least 21 years old and have held your license for a minimum of one year. Additional documentation may be required depending on your location and country of residence.",
  },
  {
    id: 2,
    title: "Are there any hidden charges?",
    answer:
      "No, we believe in transparent pricing. All charges, including insurance, taxes, and any additional fees, will be clearly outlined during the booking process. However, optional extras like GPS, child seats, or additional drivers may carry additional costs, which you’ll see before confirming your reservation.",
  },
  {
    id: 3,
    title: "Can I return the car to a different location?",
    answer:
      "Yes, we offer one-way rentals for your convenience. You can pick up a vehicle at one location and drop it off at another. Please note that one-way fees may apply depending on the distance and availability of vehicles at the return location.",
  },
  {
    id: 4,
    title: "What happens if the car breaks down?",
    answer:
      "In the rare event of a breakdown, we provide 24/7 roadside assistance at no extra cost. Just call our support hotline, and we'll either help you get back on the road or replace the vehicle if necessary. Our vehicles are regularly maintained to ensure your journey is as smooth as possible.",
  },
  {
    id: 5,
    title: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your booking easily from your account dashboard. We offer flexible cancellation policies, and in most cases, you can cancel up to 24 hours before pickup without any fees. Changes to your rental dates or car model may affect the total price based on availability.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20 pb-6">
      <h1 className="min-[450px]:text-3xl min-[350px]:text-2xl text-xl font-bold text-center px-2 text-gray-800">
        Frequently asked questions
      </h1>
      <div className="max-w-3xl mt-10 w-full mx-auto px-4">
        {faqs.map((faq) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            key={faq.id}
            onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.title}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === faq.id ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out  ${
                openIndex === faq.id
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
