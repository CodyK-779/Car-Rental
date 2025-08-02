"use client";

import { FilterIcon, SearchIcon, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { BoxReveal } from "./magicui/box-reveal";

const CarSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = inputRef.current?.value.trim() || "";

    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
      setSearch("");
    }

    router.push(`/cars?${params.toString()}`, { scroll: false });
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/cars?${params.toString()}`, { scroll: false });

    if (inputRef.current) inputRef.current.value = "";
    setSearch("");
  };

  const selectedSearch = searchParams.get("search") || "";

  return (
    <div className="w-full pt-40 pb-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-2 flex flex-col items-center justify-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">
            Browse Cars
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.8}>
          <p className="mt-2 text-lg font-medium text-center text-neutral-500 px-2">
            Browse our selection of available premium cars and search your
            desired car
          </p>
        </BoxReveal>

        <form
          onSubmit={handleSubmit}
          className="relative mt-8 w-full px-2 sm:px-0"
        >
          <input
            ref={inputRef}
            defaultValue={selectedSearch}
            onChange={(e) => setSearch(e.target.value)}
            enterKeyHint="search"
            placeholder="Search by car brand or model"
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
        <p className="text-xs text-neutral-500 font-medium text-center mt-4">
          Clear the input field to cancel the filtering
        </p>
      </div>
    </div>
  );
};

export default CarSearch;
