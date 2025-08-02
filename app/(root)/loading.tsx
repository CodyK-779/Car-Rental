"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CarLoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Animated road */}
      <div className="relative w-full max-w-3xl h-2 bg-gray-200 rounded-full overflow-hidden mb-12">
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Animated car */}
      <motion.div
        className="relative z-10"
        initial={{ x: "-20vw" }}
        animate={{
          x: ["-20vw", "100vw"],
          rotate: [0, 2, -2, 0], // subtle bounce effect
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="30" width="80" height="20" rx="5" fill="#3B82F6" />
          <rect x="30" y="20" width="60" height="10" fill="#3B82F6" />
          <circle cx="40" cy="50" r="8" fill="#1E3A8A" />
          <circle cx="80" cy="50" r="8" fill="#1E3A8A" />
          <path d="M25 35L15 40V30L25 35Z" fill="#1E40AF" />
        </svg>
      </motion.div>

      {/* Road lines */}
      <div className="absolute bottom-24 w-full h-1 bg-gray-300 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full w-8 bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 0.8,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      {/* Loading text */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading...</h2>
        <p className="text-gray-600">{progress}%</p>
      </motion.div>
    </div>
  );
}
