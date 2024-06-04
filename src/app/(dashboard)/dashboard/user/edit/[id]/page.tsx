"use client";

import ImageWeidget from "@/components/ImageWeidget";
import { useSingleTripQuery, useUpdateTripMutation } from "@/redux/api/tripApi";
import { TTrip } from "@/types/types";
import { Button, Textarea, Input } from "@nextui-org/react";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function EditTrip({ params }: { params: { id: string } }) {
	const [photo, setPhoto] = useState<any>();
	const { data, isLoading } = useSingleTripQuery(params.id);
	const [updateTrip, { isLoading: uploadLoading }] = useUpdateTripMutation();
	const { register, handleSubmit } = useForm<TTrip>();
	const photoUrl = data?.data?.photo;

	const handleUpdateTrip: SubmitHandler<TTrip> = async (data) => {
		data.budget = Number(data.budget);
		data.photo = photo.secure_url || photoUrl;
		try {
			const response = await updateTrip({
				id: params.id,
				payload: data,
			}).unwrap();
			toast.success(response.message);
		} catch (error) {
			toast.error("Some thing went wrong!");
		}
	};

	if (isLoading) return <p>Please wait ...</p>;

	return (
		<div className=" p-10">
			<div className="w-full md:max-w-3xl mx-auto">
				<form
					className="space-y-3"
					onSubmit={handleSubmit(handleUpdateTrip)}
				>
					<h3 className="text-xl font-semibold">Edit Trip</h3>
					<Input
						size="sm"
						type="text"
						label="Title"
						{...register("title")}
						defaultValue={data?.data?.title}
					/>
					<Input
						size="sm"
						type="text"
						label="Destination"
						{...register("destination")}
						defaultValue={data?.data.destination}
					/>
					<Input
						size="sm"
						type="date"
						label="Start date"
						{...register("startDate")}
						defaultValue={data?.data.startDate}
					/>
					<Input
						size="sm"
						type="date"
						label="End date"
						{...register("endDate")}
						defaultValue={data?.data?.endDate}
					/>
					<Input
						size="sm"
						type="number"
						label="Budget"
						{...register("budget")}
						defaultValue={data?.data?.budget.toString()}
					/>
					<Textarea
						label="Description"
						rows={8}
						{...register("description")}
						defaultValue={data?.data?.description}
					/>
					<ImageWeidget setResource={setPhoto} /> <br />
					<Button className="font-semibold" type="submit">
						{uploadLoading ? "Updating..." : "Update"}
					</Button>
				</form>
			</div>
		</div>
	);
}
