"use client";

import { deleteCar, toggleStatus } from "@/actions/car-action";
import { CarStatus } from "@/lib/generated/prisma";
import { EyeIcon, EyeOffIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface Props {
  carId: string;
  status: CarStatus;
}

const StatusDelete = ({ carId, status }: Props) => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleStatus = async () => {
    setIsPending(true);

    try {
      const results = await toggleStatus(carId);
      if (results?.success) {
        toast.success("Status updated successfully!");
        router.push("/dashboard/manage-cars");
      }
    } catch (error) {
      toast.error("Failed to update status");
    } finally {
      setIsPending(false);
    }
  };

  const handleDelete = async () => {
    setIsPending(true);

    try {
      const results = await deleteCar(carId);
      if (!results?.success) {
        toast.success("Car listing deleted successfully!");
        router.push("/dashboard/manage-cars");
      }
    } catch (error) {
      toast.error("Failed to delete car listing");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        disabled={isPending}
        onClick={handleStatus}
        className="cursor-pointer"
      >
        {status === "AVAILABLE" ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
      </button>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button disabled={isPending} className="cursor-pointer">
            <Trash2Icon className="size-4" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this car listing? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white bg-black hover:text-white hover:bg-neutral-800 transition-colors duration-150 ease-in">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 transition-colors duration-150 ease-in"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default StatusDelete;
