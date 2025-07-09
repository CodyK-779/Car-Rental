import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/homeBg.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center pt-36">
          <h1 className="text-7xl font-bold text-yellow-600">
            Premium car rental
          </h1>
          <p className="text-2xl font-bold text-center mt-3.5">
            Explore our curated fleet of high-end vehicles—unmatched comfort,{" "}
            <br />
            performance, and style for every journey.
          </p>
          <Button asChild className="mt-4 py-2 text-base font-semibold">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
