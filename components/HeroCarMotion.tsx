"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeBg() {
  return (
    <div className="absolute max-[380px]:top-60 max-[450px]:top-52 top-40 sm:top-32 overflow-hidden">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        viewport={{
          once: true,
          // margin: "-100px 0px -100px 0px",
          // amount: 0.1,
        }}
      >
        <Image src="/homeBg.png" alt="car bg" width={800} height={700} />
      </motion.div>
    </div>
  );
}
