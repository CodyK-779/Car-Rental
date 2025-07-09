import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/components/ui/register-form";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Button className="w-fit" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon />
            Home
          </Link>
        </Button>
        <RegisterForm />
      </div>
    </div>
  );
}
