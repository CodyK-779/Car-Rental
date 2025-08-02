import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-sm max-md:px-4 py-20 bg-black">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        404 Not Found
      </h1>
      <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
      <p className="md:text-xl text-gray-400 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button
        asChild
        className="mt-4 bg-white text-black rounded-full py-5 px-6 hover:bg-gray-100"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ArrowLeftIcon />
          Back to Car Rental
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
