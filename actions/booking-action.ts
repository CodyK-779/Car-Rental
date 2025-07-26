"use server";

import { auth } from "@/lib/auth";
import { BookingStatus } from "@/lib/generated/prisma";
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
      return { error: "You already booked this car." }
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

export async function updateBookingStatus(id: string, status: BookingStatus) {
  try {
    if (!id) return { success: false, message: "Missing booking ID" };

    const booking = await prisma.booking.findUnique({
      where: { id },
      select: { carId: true }
    });

    if (!booking?.carId) return { success: false, message: "Booking not found or missing car." };

    const carStatus = status === "Confirmed" ? "UNAVAILABLE" : "AVAILABLE";

    await prisma.$transaction([
      prisma.booking.update({
        where: { id },
        data: {
          status
        }
      }),
      prisma.car.update({
        where: { id: booking.carId },
        data: {
          carStatus
        }
      })
    ]);

    return { success: true }
  } catch (error) {
    console.error("Failed to update booking status.", error);
    throw new Error("Failed to update booking status.")
  }
}

export async function getCustomerInfo(ownerId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || session.user.id !== ownerId) return;

    const bookings = await prisma.booking.findMany({
      where: {
        car: {
          userId: ownerId,
        },
      },
      include: {
        user: true,
        car: true
      }
    });

    return bookings;
  } catch (error) {
    console.error("Failed to get customer info.", error);
    throw new Error("Failed to get customer info.")
  }
}
