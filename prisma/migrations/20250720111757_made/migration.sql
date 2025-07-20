/*
  Warnings:

  - A unique constraint covering the columns `[carId,userId]` on the table `booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "booking_carId_userId_key" ON "booking"("carId", "userId");
