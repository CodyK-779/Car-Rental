/*
  Warnings:

  - A unique constraint covering the columns `[carId]` on the table `booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "booking_carId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "booking_carId_key" ON "booking"("carId");
