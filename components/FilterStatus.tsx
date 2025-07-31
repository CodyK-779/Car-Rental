"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CarStatus } from "@/lib/generated/prisma";

export type FilterDate = "asc" | "desc";

const FilterStatus = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filterStatus = (status: CarStatus | "All") => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "All") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const filterDate = (value: FilterDate | "All") => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "All") {
      params.delete("filter");
    } else {
      params.set("filter", value);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Select
        onValueChange={(value: CarStatus | "All") => filterStatus(value)}
        defaultValue={searchParams.get("status") || ""}
      >
        <SelectTrigger className="w-[180px] border-2 border-neutral-300">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="AVAILABLE">Available</SelectItem>
            <SelectItem value="UNAVAILABLE">Unavailable</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value: FilterDate | "All") => filterDate(value)}
        defaultValue={searchParams.get("filter") || ""}
      >
        <SelectTrigger className="w-[180px] border-2 border-neutral-300">
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="desc">Newest</SelectItem>
            <SelectItem value="asc">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterStatus;
