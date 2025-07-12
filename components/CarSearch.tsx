"use client";

import { FilterIcon, SearchIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CarSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/cars?search=${encodeURIComponent(search)}`);
  };

  const clearSearch = () => {
    setSearch("");
    router.push("/cars", { scroll: false });
  };

  return (
    <div className="w-full pt-40 pb-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-2 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          Browse Cars
        </h1>
        <p className="mt-2 text-lg font-medium text-center text-neutral-500">
          Browse our selection of available premium cars and search your desired
          car
        </p>
        <form
          onSubmit={handleSubmit}
          className="relative mt-8 w-full px-2 sm:px-0"
        >
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            enterKeyHint="search"
            placeholder="Search by make, model, or features"
            className="w-full flex items-center justify-center shadow rounded-full py-3 px-12 focus:outline-none"
          />
          <div className="absolute top-3.5 left-6 sm:left-4">
            <SearchIcon className="size-5 text-neutral-500" />
          </div>
          <div className="absolute top-3.5 right-7 sm:right-5">
            <FilterIcon className="size-5 text-neutral-500" />
          </div>
          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute top-3 right-12 text-neutral-500"
            >
              <XIcon />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CarSearch;
