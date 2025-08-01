"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero2Car = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
      className="flex-1 shrink-0 min-w-[450px]"
    >
      <Image
        src="/hero.png"
        alt="audi"
        width={1000}
        height={500}
        className="w-full min-w-[560px] max-[768px]:min-w-[500px] h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
};

export default Hero2Car;
