"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

const HeroBtnMotion = () => {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ y: 45, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <Button asChild className="rounded-full font-semibold sm:px-8 sm:py-5">
        <Link href="#brand">Get Started</Link>
      </Button>
      <Button asChild className="rounded-full font-semibold sm:px-8 sm:py-5">
        <Link href={session ? "/cars" : "/login"}>Start Booking</Link>
      </Button>
    </motion.div>
  );
};

export default HeroBtnMotion;
