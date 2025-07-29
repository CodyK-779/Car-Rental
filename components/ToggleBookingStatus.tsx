"use client";

import { BookingStatus } from "@/lib/generated/prisma";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { updateBookingStatus } from "@/actions/booking-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  id: string;
  status: BookingStatus;
}

const ToggleBookingStatus = ({ id, status }: Props) => {
  const [statusValue, setStatusValue] = useState<BookingStatus>(status);
  const router = useRouter();

  const handleStatusChange = async (status: BookingStatus) => {
    setStatusValue(status);

    try {
      const result = await updateBookingStatus(id, status);

      if (result?.success) {
        toast.success("Status updated successfully!", {
          position: "top-right",
        });
        router.push("/dashboard/manage-bookings", { scroll: false });
      }
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  return (
    <Select
      value={status}
      onValueChange={(value: BookingStatus) => handleStatusChange(value)}
    >
      <SelectTrigger className="w-28 font-medium text-neutral-500 border-2 border-neutral-300">
        <SelectValue placeholder={status} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Confirmed">Confirmed</SelectItem>
        <SelectItem value="Cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ToggleBookingStatus;
