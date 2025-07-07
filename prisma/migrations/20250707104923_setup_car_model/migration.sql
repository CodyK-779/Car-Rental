-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('SUV', 'Sedan', 'Hatchback', 'Electric', 'Convertible', 'Hybrid', 'Coupe', 'Van', 'Truck');

-- CreateEnum
CREATE TYPE "TransmissionType" AS ENUM ('Manual', 'Automatic', 'SemiAutomatic');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Gas', 'Diesel', 'Petrol', 'Electric', 'Hybrid');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "dailyPrice" INTEGER NOT NULL,
    "Type" "CarType" NOT NULL,
    "Transmission" "TransmissionType" NOT NULL,
    "Fuel" "FuelType" NOT NULL,
    "Seating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
