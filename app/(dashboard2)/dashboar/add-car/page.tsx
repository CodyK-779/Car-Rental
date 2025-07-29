"use client";

import { createCarList } from "@/actions/car-action";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CarType,
  Class,
  FuelType,
  Location,
  TransmissionType,
} from "@/lib/generated/prisma";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const classData = [
  { value: "A_Class", title: "A Class" },
  { value: "B_Class", title: "B Class" },
  { value: "C_Class", title: "C Class" },
  { value: "D_Class", title: "D Class" },
  { value: "E_Class", title: "E Class" },
  { value: "F_Class", title: "F Class" },
  { value: "J_Class", title: "J Class" },
  { value: "M_Class", title: "M Class" },
  { value: "S_Class", title: "S Class" },
];

export default function AddCarPage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState<CarType | "">("");
  const [transmission, setTransmission] = useState<TransmissionType | "">("");
  const [fuelType, setFuelType] = useState<FuelType | "">("");
  const [seating, setSeating] = useState(0);
  const [location, setLocation] = useState<Location | "">("");
  const [modelClass, setModelClass] = useState<Class | "">("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const validateFields = () => {
    if (
      !brand.trim() ||
      !model.trim() ||
      !description.trim() ||
      !image.trim() ||
      !category.trim() ||
      !transmission.trim() ||
      !fuelType.trim() ||
      !location.trim() ||
      !modelClass.trim()
    )
      return false;
    if (year <= 0 || price <= 0 || seating <= 0) return false;

    return true;
  };

  const resetForm = () => {
    setBrand("");
    setModel("");
    setDescription("");
    setImage("");
    setCategory("");
    setTransmission("");
    setFuelType("");
    setLocation("");
    setYear(0);
    setPrice(0);
    setSeating(0);
  };

  const handleCreate = async () => {
    if (!validateFields()) return;

    if (
      category === "" ||
      transmission === "" ||
      fuelType === "" ||
      location === "" ||
      modelClass === ""
    ) {
      return;
    }

    setIsPending(true);

    try {
      const results = await createCarList(
        brand,
        model,
        year,
        price,
        category,
        transmission!,
        fuelType!,
        seating,
        location!,
        modelClass!,
        description,
        image
      );

      if (results?.success) {
        toast.success("Car listing created successfully!");
        resetForm();
        router.push("/dashboard/add-car", { scroll: false });
      } else {
        toast.error("This car listing already exists.");
      }
    } catch (error) {
      toast.error("Failed to create car listing");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="pt-10 px-3 md:px-8 w-full">
      <h1 className="text-3xl text-center md:text-start font-medium">
        Add Car Listing
      </h1>
      <p className="mt-2 text-center md:text-start text-neutral-500">
        Fill in details to list a new car for booking, including pricing,
        availability, and car specifications.
      </p>
      <div className="max-w-4xl mt-16 md:mt-8 w-full px-1 overflow-hidden">
        {/* First Row */}
        <div className="w-full flex items-center gap-3">
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="brand" className="text-neutral-500">
              Brand
            </Label>
            <Input
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border-2 border-neutral-300"
              placeholder="e.g. BMW, Mercedes, Audi..."
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="model" className="text-neutral-500">
              Model
            </Label>
            <Input
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="border-2 border-neutral-300"
              placeholder="e.g. X5, E-Class, M4..."
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="w-full flex items-center gap-3 mt-6">
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              className="border-2 border-neutral-300"
              value={year}
              onChange={(e) => {
                const value = e.target.value;
                setYear(value === "" ? 0 : parseInt(value));
              }}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={price}
              className="border-2 border-neutral-300"
              onChange={(e) => {
                const value = e.target.value;
                setPrice(value === "" ? 0 : parseInt(value));
              }}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="seating">Seating Capacity</Label>
            <Input
              id="seating"
              value={seating}
              className="border-2 border-neutral-300"
              onChange={(e) => {
                const value = e.target.value;
                setSeating(value === "" ? 0 : parseInt(value));
              }}
              placeholder="0"
            />
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col md:flex-row items-center gap-3 mt-6">
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="transmission">Transmission</Label>
            <Select
              value={transmission}
              onValueChange={(value: TransmissionType) =>
                setTransmission(value)
              }
            >
              <SelectTrigger className="outline-none border-2 border-neutral-300">
                <SelectValue placeholder="Select a transmission" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Manual">Manual</SelectItem>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="SemiAutomatic">SemiAutomatic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center w-full gap-2">
            <div className="flex flex-col gap-1.5 w-full">
              <Label htmlFor="fuelType">Fuel Type</Label>
              <Select
                value={fuelType}
                onValueChange={(value: FuelType) => setFuelType(value)}
              >
                <SelectTrigger className="outline-none border-2 border-neutral-300">
                  <SelectValue placeholder="Select a fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Gas">Gas</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Petrol">Petrol</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <Label htmlFor="category">Category</Label>
              <Select
                value={category}
                onValueChange={(value: CarType) => setCategory(value)}
              >
                <SelectTrigger className="outline-none border-2 border-neutral-300">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Sedan">Sedan</SelectItem>
                    <SelectItem value="Hatchback">Hatchback</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                    <SelectItem value="Convertible">Convertible</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="Coupe">Coupe</SelectItem>
                    <SelectItem value="Van">Van</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="location">Location</Label>
            <Select
              value={location}
              onValueChange={(value: Location) => setLocation(value)}
            >
              <SelectTrigger className="outline-none border-2 border-neutral-300">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Mandalay">Mandalay</SelectItem>
                  <SelectItem value="Yangon">Yangon</SelectItem>
                  <SelectItem value="Naypyitaw">Naypyitaw</SelectItem>
                  <SelectItem value="Sagaing">Sagaing</SelectItem>
                  <SelectItem value="Rakhine">Rakhine</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <Label htmlFor="class">Class</Label>
            <Select
              value={modelClass}
              onValueChange={(value: Class) => setModelClass(value)}
            >
              <SelectTrigger className="outline-none border-2 border-neutral-300">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {classData.map((data) => (
                    <SelectItem key={data.value} value={data.value}>
                      {data.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Fifth Row */}
        <div className="mt-6">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-32 border-2 border-neutral-300"
              placeholder="eg. A Bugatti Chiron with high horsepower with speed of 261mph"
            />
          </div>
        </div>
        {/* Sixth Row */}
        <div className="w-full p-2 mt-6 rounded border-2 border-neutral-300">
          <div className="max-w-sm mx-auto">
            <ImageUpload image={image} setImage={setImage} />
          </div>
        </div>

        {/* Submit Row */}
        <Button
          className="mt-10 flex items-center gap-2"
          onClick={handleCreate}
          disabled={isPending || !validateFields()}
        >
          {isPending ? (
            <>
              <Loader2Icon className="animate-spin" />
              <p>Loading...</p>
            </>
          ) : (
            "Submit Listing"
          )}
        </Button>
      </div>
    </div>
  );
}
