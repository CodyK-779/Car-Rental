/*
  Warnings:

  - Added the required column `class` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Class" AS ENUM ('A_Class', 'B_Class', 'C_Class', 'D_Class', 'E_Class', 'F_Class', 'J_Class', 'M_Class', 'S_Class');

-- AlterTable
ALTER TABLE "car" ADD COLUMN     "class" "Class" NOT NULL;
