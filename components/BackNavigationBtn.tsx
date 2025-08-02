"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

const BackNavigationBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="mb-8 mt-16 flex items-center gap-2"
    >
      <ArrowLeftIcon />
      Back
    </Button>
  );
};

export default BackNavigationBtn;
