"use client";

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Label } from "./ui/label";
import { useSession } from "@/lib/auth-client";
import { createBooking } from "@/actions/booking-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  carId: string;
}

const CreateBooking = ({ carId }: Props) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isPending, setIsPending] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) return;

  const userId = session.user.id;

  const disableSubmit = startDate === undefined || endDate === undefined;

  const handleSubmit = async () => {
    if (disableSubmit) return;

    setIsPending(true);

    try {
      const results = await createBooking(userId, carId, startDate, endDate);

      if (results?.success) {
        toast.success("Booking created successfully!");
        router.push("/bookings");
      } else {
        toast.error("This booking already exist.");
      }
    } catch (error) {
      toast.error("Failed to book this car.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="lg:min-w-[380px] w-full rounded-xl shadow-md bg-white border-2 border-neutral-200 px-4 py-5">
      <h1 className="text-2xl font-semibold">Book This Car</h1>
      <p className="text-sm mt-1 text-neutral-500">
        Schedule your Pickup date and Return date
      </p>
      <hr className="my-4 border-gray-300" />
      <div className="mb-6">
        <Label
          htmlFor="pickup"
          className="text-base font-semibold text-neutral-700"
        >
          Select Pickup Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="pickup"
              variant={"outline"}
              className="w-full flex items-center justify-between mt-1.5 border-2 border-neutral-200"
            >
              {startDate ? (
                format(startDate, "d MMMM yyyy")
              ) : (
                <span className="text-neutral-500">dd-mm-yyyy</span>
              )}
              <CalendarIcon className="mr-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="mb-8">
        <Label
          htmlFor="pickup"
          className="text-base font-semibold text-neutral-700"
        >
          Select Return Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="pickup"
              variant={"outline"}
              className="w-full flex items-center justify-between mt-1.5 border-2 border-neutral-200"
            >
              {endDate ? (
                format(endDate, "d MMMM yyyy")
              ) : (
                <span className="text-neutral-500">dd-mm-yyyy</span>
              )}
              <CalendarIcon className="mr-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button
        disabled={isPending || disableSubmit}
        onClick={handleSubmit}
        className="px-6 w-full py-5 mb-3.5"
      >
        Book Now
      </Button>
    </div>
  );
};

export default CreateBooking;
