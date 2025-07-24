import { getManageCars } from "@/actions/car-action";
import StatusDelete from "@/components/StatusDelete";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default async function ManageCarsPage() {
  const cars = await getManageCars();

  if (!cars) return null;

  return (
    <div className="pt-10 px-3 md:px-8 w-full">
      <h1 className="text-3xl text-center md:text-start font-semibold">
        Manage Cars
      </h1>
      <p className="mt-2 text-center md:text-start text-neutral-500">
        Update the status of your vehicles to let the others know if it's
        availabile or not. All changes take effect instantly.
      </p>
      <div>
        {cars.length > 0 ? (
          <div className="border-2 rounded-md px-2 mt-6 overflow-x-auto">
            <div className="min-w-[600px]">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Car</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cars.map((car) => (
                    <TableRow key={car.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Image
                            src={car.img}
                            alt="audi"
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <div className="flex flex-col items-start">
                            <p className="font-medium">{car.model}</p>
                            <p className="text-xs font-medium text-neutral-500">
                              {car.seating} • {car.transmission}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-neutral-600">
                        {car.type}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-neutral-600">
                        ${car.dailyPrice}/day
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`text-[10px] ${
                            car.carStatus === "AVAILABLE"
                              ? "bg-green-500"
                              : "bg-red-500"
                          } text-white rounded-full`}
                        >
                          {car.carStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <StatusDelete carId={car.id} status={car.carStatus} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <p className="text-xl font-semibold text-center mt-20 text-neutral-500">
            You haven't added any car listings yet, go to Add Car section to add
            your own car listing.
          </p>
        )}
      </div>
    </div>
  );
}
