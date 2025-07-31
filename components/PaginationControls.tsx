"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface Props {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalCars: number;
}

const PaginationControls = ({
  hasNextPage,
  hasPreviousPage,
  totalCars,
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="mt-16">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => {
                if (hasPreviousPage) {
                  router.push(`?page=${Number(page) - 1}`, {
                    scroll: false,
                  });
                }
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <p className="text-sm font-medium">
              Page <span className="ml-1 font-bold">{page}</span>{" "}
              <span className="mx-1">of</span>{" "}
              <span className="font-bold">
                {Math.ceil(totalCars / Number(per_page))}
              </span>
            </p>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => {
                if (hasNextPage) {
                  router.push(`?page=${Number(page) + 1}`, {
                    scroll: false,
                  });
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControls;
