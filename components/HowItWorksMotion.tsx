"use client";

import { easeOut, motion } from "framer-motion";

const data = [
  {
    title: "Create an Account",
    desc: "Sign up in seconds with your email or social account and access your dashboard instantly.",
  },
  {
    title: "Browse & Select",
    desc: "Explore our wide range of cars. Pick the one you like and select Pick-up date and Return date.",
  },
  {
    title: "Start Using It",
    desc: "Enjoy the benefits immediately. The car will drop off to your location and you can hit the road stress free.",
  },
];

const HowItWorksMotion = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {data.map((step, i) => (
        <motion.div
          key={i}
          initial={{ y: -70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.3,
            ease: "easeOut",
          }}
          className="relative bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow text-left z-10"
        >
          <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold shadow-lg">
            {i + 1}
          </div>
          <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white">
            {step.title}
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HowItWorksMotion;
