"use server";

import { auth } from "@/lib/auth";
import { CarType, Class, FuelType, Location, TransmissionType } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function createCarList(brand: string, model: string, year: number, price: number, category: CarType, transmission: TransmissionType, fuelType: FuelType, seating: number, location: Location, modelClass: Class, description: string, image: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;

    const existingCar = await prisma.car.findFirst({
      where: {
        brand,
        model,
        year,
        dailyPrice: price,
        type: category,
        transmission,
        fuel: fuelType,
        seating,
        location,
        class: modelClass,
        description,
        img: image!,
        userId: session.user.id
      }
    });

    if (existingCar) {
      return { error: "This car listing already exists." }
    }
    
    await prisma.car.create({
      data: {
        userId: session.user.id,
        brand,
        model,
        year,
        dailyPrice: price,
        type: category,
        transmission,
        fuel: fuelType,
        seating,
        location,
        class: modelClass,
        description,
        img: image,
      }
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to create car listing", error);
    throw new Error("Failed to create car listing")
  }
}

export async function getAllCars(take6?: boolean) {
  try {
    const cars = await prisma.car.findMany({
      orderBy: {
        createdAt: "asc"
      },
      where: {
        carStatus: "AVAILABLE"
      },
      include: {
        user: true,
        _count: true,
        booking: true
      },
      ...(take6 ? {take: 6} : {})
    });

    return cars;
  } catch (error) {
    console.error("Failed to fetch cars.", error);
    throw new Error("Failed to fetch cars")
  }
}

export async function getManageCars() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;

    const cars = await prisma.car.findMany({
      where: {
        userId: session.user.id
      }
    });

    return cars;
  } catch (error) {
    console.error("Failed to fetch manage cars", error);
    throw new Error("Failed to fetch manage cars")
  }
}

export async function getCarDetails(carId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) return;
    if (!carId) return;

    const car = await prisma.car.findMany({
      where: {
        id: carId
      }
    });

    return car;
  } catch (error) {
    console.error("Failed to get car details", error);
    throw new Error("Failed to get car details")
  }
}

export async function toggleStatus(carId: string) {
  try {
    if (!carId) return;

    const car = await prisma.car.findUnique({
      where: {
        id: carId
      }
    });

    if (!car) return;

    const status = car.carStatus === "AVAILABLE" ? "UNAVAILABLE" : "AVAILABLE"

    await prisma.car.update({
      where: { id: carId },
      data: {
        carStatus: status
      }
    })
    
    return { success: true }
  } catch (error) {
    console.error("Failed to update status", error);
    throw new Error("Failed to update status");
  }
}

export async function deleteCar(carId: string) {
  try {
    if (!carId) return;

    await prisma.car.delete({
      where: { id: carId }
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to delete car", error);
    throw new Error("Failed to delete car")
  }
}