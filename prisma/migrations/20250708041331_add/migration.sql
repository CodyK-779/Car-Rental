/*
  Warnings:

  - You are about to drop the column `Fuel` on the `car` table. All the data in the column will be lost.
  - You are about to drop the column `Seating` on the `car` table. All the data in the column will be lost.
  - You are about to drop the column `Transmission` on the `car` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `car` table. All the data in the column will be lost.
  - Added the required column `description` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seating` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('Pending', 'Cancelled', 'Confirmed');

-- CreateEnum
CREATE TYPE "CarStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- AlterTable
ALTER TABLE "car" DROP COLUMN "Fuel",
DROP COLUMN "Seating",
DROP COLUMN "Transmission",
DROP COLUMN "Type",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "fuel" "FuelType" NOT NULL,
ADD COLUMN     "seating" INTEGER NOT NULL,
ADD COLUMN     "transmission" "TransmissionType" NOT NULL,
ADD COLUMN     "type" "CarType" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "booking0" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "carStatus" "CarStatus" NOT NULL DEFAULT 'AVAILABLE',
    "status" "BookingStatus" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking0_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking0" ADD CONSTRAINT "booking0_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking0" ADD CONSTRAINT "booking0_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
