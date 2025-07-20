"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function createBooking(userId: string, carId: string, startDate: Date, endDate: Date) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;

    if (session.user.id !== userId) {
      return { error: "Unauthorized booking attempt" };
    }

    const existingBooking = await prisma.booking.findUnique({
      where: { carId }
    });

    if (existingBooking) {
      return { error: "This Car booking already exist." }
    }

    await prisma.booking.create({
      data: {
        userId,
        carId,
        startDate,
        endDate
      }
    });

    return { success: true }
  } catch (error) {
    console.error("Failed to create booking", error);
    throw new Error("Failed to create booking")
  }
}

export async function getBookedCars(userId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;
    if (session.user.id !== userId) return;

    const bookings = await prisma.booking.findMany({
      where: {
        userId
      },
      include: {
        user: true,
        car: true
      }
    });

    return bookings;
  } catch (error) {
    console.error("Failed to get bookings", error);
    throw new Error("Failed to get bookings")
  }
}