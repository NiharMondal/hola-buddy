"use client";
import { useDeleteTripMutation } from "@/redux/api/tripApi";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAllTripQuery } from "@/redux/api/tripApi";
import TBPagination from "@/components/shared/TBPagination";
import { useState } from "react";

export default function AdminTripPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const { data: allTrip, isLoading } = useAllTripQuery({});

	const [deleteTrip] = useDeleteTripMutation();
	const handleDelete = async (id: string) => {
		try {
			await deleteTrip(id);

			toast.success("Trip deleted successfully");
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	if (isLoading) return <p>Please wait...</p>;
	return (
		<div>
			<h2 className="text-3xl font-semibold">Trip Lists</h2>
			<p className="text-gray-500">You can manage it from here</p>

			{allTrip!.data.length > 0 ? (
				<>
					<Table
						aria-label="Example static collection table"
						className="mt-8"
					>
						<TableHeader>
							<TableColumn>Destination</TableColumn>
							<TableColumn>Start Date</TableColumn>
							<TableColumn>End Date</TableColumn>
							<TableColumn>Budget</TableColumn>

							<TableColumn>Action</TableColumn>
						</TableHeader>
						<TableBody>
							{allTrip!.data?.map((trip: any) => (
								<TableRow key={trip.id}>
									<TableCell>{trip.destination}</TableCell>
									<TableCell>{trip.startDate}</TableCell>
									<TableCell>{trip.endDate}</TableCell>
									<TableCell>{trip.budget}</TableCell>

									<TableCell className="cursor-pointer">
										<TrashIcon
											width={20}
											onClick={() => handleDelete(trip.id)}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<div className="flex justify-end">
						<TBPagination
							totalPages={allTrip?.meta ? allTrip?.meta?.totalPages : 0}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				</>
			) : (
				<p>No data found!</p>
			)}
		</div>
	);
}
