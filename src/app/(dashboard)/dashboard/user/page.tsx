"use client";

import ImageWeidget from "@/components/ImageWeidget";
import FullModal from "@/components/shared/FullModal";
import {
	useCreateTripMutation,
	useMyAllTripQuery,
	useDeleteTripMutation,
} from "@/redux/api/tripApi";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { TTrip } from "@/types/types";
import {
	Button,
	Input,
	Textarea,
	useDisclosure,
	Table,
	TableBody,
	TableHeader,
	TableColumn,
	TableCell,
	TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

export default function UserDashboardPage() {
	const [photo, setPhoto] = useState<any>();

	const { data: allTrip, isLoading } = useMyAllTripQuery({});

	const [createTrip, { isLoading: createLoading }] = useCreateTripMutation();

	const [deleteTrip] = useDeleteTripMutation();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const { register, handleSubmit } = useForm<TTrip>();

	const handleCreateTrip: SubmitHandler<TTrip> = async (data) => {
		data.budget = Number(data.budget);
		data.photo = photo.secure_url || "";
		try {
			const response = await createTrip(data).unwrap();
			toast.success(response.message);
		} catch (error) {
			toast.error("Some thing went wrong!");
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await deleteTrip(id);
			toast.success("Trip deleted successfully");
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	if (isLoading) return <p>Please wait ...</p>;
	return (
		<section className="">
			<div className="space-y-5">
				<Button onPress={onOpen}>Create Trip</Button>
				<FullModal
					isOpen={isOpen}
					onOpen={onOpen}
					onOpenChange={onOpenChange}
				>
					<div className=" p-10">
						<div className="w-full md:max-w-3xl mx-auto">
							<form
								className="space-y-3"
								onSubmit={handleSubmit(handleCreateTrip)}
							>
								<h3 className="text-xl font-semibold">Create Trip</h3>
								<Input
									size="sm"
									type="text"
									label="Title"
									{...register("title", { required: true })}
								/>
								<Input
									size="sm"
									type="text"
									label="Destination"
									{...register("destination", { required: true })}
								/>
								<Input
									size="sm"
									type="date"
									label="Start date"
									{...register("startDate", { required: true })}
								/>
								<Input
									size="sm"
									type="date"
									label="End date"
									{...register("endDate", { required: true })}
								/>
								<Input
									size="sm"
									type="number"
									label="Budget"
									{...register("budget", { required: true })}
								/>
								<Textarea
									label="Description"
									rows={8}
									{...register("description", { required: true })}
								/>
								<ImageWeidget setResource={setPhoto} /> <br />
								<Button className="font-semibold" type="submit">
									{createLoading ? "Creating..." : "Create"}
								</Button>
							</form>
						</div>
					</div>
				</FullModal>
				<div>
					<h2 className="text-lg font-semibold">
						Your created trip lists
					</h2>
					{allTrip?.data.length > 0 ? (
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
								{allTrip?.data?.map((trip: any) => (
									<TableRow key={trip.id}>
										<TableCell>{trip.destination}</TableCell>
										<TableCell>{trip.startDate}</TableCell>
										<TableCell>{trip.endDate}</TableCell>
										<TableCell>{trip.budget}</TableCell>

										<TableCell className="cursor-pointer space-x-2 flex items-center">
											<TrashIcon
												width={20}
												onClick={() => handleDelete(trip.id)}
											/>
											<Link href={`/dashboard/user/edit/${trip.id}`}>
												<PencilSquareIcon width={20} />
											</Link>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<p>No data found!</p>
					)}
				</div>
			</div>
		</section>
	);
}
