"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  carType: string;
}

const carTypes = [
  { img: "/suv.png", name: "SUV" },
  { img: "/sedan.png", name: "Sedan" },
  { img: "/hatchback.png", name: "Hatchback" },
  { img: "/electric-car.png", name: "Electric" },
  { img: "/cabriolet.png", name: "Convertible" },
  { img: "/suv.png", name: "Hybrid" },
  { img: "/coupe.png", name: "Coupe" },
  { img: "/van.png", name: "Van" },
  { img: "/box-car.png", name: "Truck" },
];

const FilterCarType = ({ carType }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedType = searchParams.get("type") || "";

  const handleClick = (carType: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get("type") === carType) {
      params.delete("type");
    } else {
      params.set("type", carType);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="container mt-6">
      <h1 className="text-3xl font-bold text-center">Browse By Body Type</h1>
      <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
        {carTypes.map((ct) => (
          <div
            key={ct.name}
            onClick={() => handleClick(ct.name)}
            className={`flex flex-col w-28 items-center gap-1.5 rounded-xl border-2 border-neutral-300 ${
              carType === ct.name && "bg-purple-200"
            } shadow-md px-2 py-1.5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-150 ease-in cursor-pointer`}
          >
            <Image src={ct.img} alt={ct.name} width={30} height={30} />
            <p className="font-medium text-neutral-700">{ct.name}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-500 font-medium text-center mt-6">
        Click the same car body type again to cancel the filtering
      </p>
    </section>
  );
};

export default FilterCarType;
