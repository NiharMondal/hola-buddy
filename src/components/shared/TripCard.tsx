import { TTripResponse } from "@/types/types";
import { extractMonth } from "@/utils/extractMonth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	trip: TTripResponse;
};

export default function TripCard({ trip }: Props) {
	const date = trip?.startDate;
	const month = extractMonth(date);
	return (
		<div className="space-y-5">
			<Image
				src={trip?.photo || ""}
				width={200}
				height={200}
				alt="author-avatar"
				className="h-[300px] w-full object-cover object-top "
			/>
			<h3 className="text-2xl font-semibold">{trip?.user?.name}</h3>
			<p className="border-y py-2  font-semibold text-gray-600">
				{trip?.title}
			</p>
			<div className="flex justify-between space-y-1">
				<div>
					<p> Destination: </p>
					<p> Date: </p>
				</div>
				<div className="font-semibold">
					<p>{trip?.destination}</p>
					<p>{month}</p>
				</div>
			</div>
			<Link href={`/trip/${trip.id}`}>
				<button className="text-center w-full bg-pink-600 py-3 rounded text-white hover:bg-pink-500 mt-5">
					Join the trip
				</button>
			</Link>
		</div>
	);
}
