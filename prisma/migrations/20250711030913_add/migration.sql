/*
  Warnings:

  - Added the required column `location` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Mandalay', 'Yangon', 'Naypyitaw', 'Sagaing', 'rakhine');

-- AlterTable
ALTER TABLE "car" ADD COLUMN     "location" "Location" NOT NULL;
