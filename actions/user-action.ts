"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function getUserStats(userId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;
    if (session.user.id !== userId) return;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            car: true,
            booking: true
          }
        }
      },
    });

    const pendingCount = await prisma.booking.count({
      where: {
        userId,
        status: "Pending"
      }
    });

    const confirmedCount = await prisma.booking.count({
      where: {
        userId,
        status: "Confirmed"
      },
    });

    const carCount = user?._count.car || 0;
    const bookingCount = user?._count.booking || 0;

    return { carCount, bookingCount, pendingCount, confirmedCount };
  } catch (error) {
    console.error("Failed to get user stats.", error);
    throw new Error("Failed to get user stats.");
  }
}
