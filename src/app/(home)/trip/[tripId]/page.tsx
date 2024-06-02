import Image from "next/image";
import React from "react";
import { Avatar } from "@nextui-org/react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { getSingleTrip } from "@/actions/action";
import { extractMonth } from "@/utils/extractMonth";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BuddyRequest from "./BuddyRequest";
export default async function TripDetails({
	params,
}: {
	params: { tripId: string };
}) {
	const trip = await getSingleTrip(params.tripId);
	const startDate = extractMonth(trip.data.startDate);
	const endDate = extractMonth(trip.data.endDate);

	return (
		<section className="px-5">
			<div className="h-[300px] md:h-[400px] lg:h-[600px] max-w-5xl mx-auto">
				<Image
					src={trip?.data?.photo}
					width={700}
					height={600}
					alt="coverImage"
					className="object-cover object-center h-full w-full"
				/>
			</div>
			<div className="container mx-auto w-full lg:max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
					<div className="col-span-2 space-y-3">
						<h1 className="text-3xl font-semibold">{trip.data.title}</h1>
						<div className="flex items-center gap-x-2">
							<span className="italic text-gray-600 ">Hosted by</span>
							<Avatar
								src={trip?.data?.user?.avatar}
								className="ring-1 ring-pink-700"
							/>
							<span className="font-semibold">
								{trip.data?.user?.name}
							</span>
						</div>
						<p>{trip?.data.description}</p>
					</div>
					<div className="border-1 border-gray-200 divide-y-1 py-4">
						<div className="flex items-center gap-4 p-4">
							<CalendarIcon width={20} color="gray" />
							<span className="inline-flex">
								{startDate}{" "}
								<ArrowRightIcon width={15} className="mx-2" /> {endDate}
							</span>
						</div>

						<div className="flex items-center gap-4 p-4">
							<div className="flex items-center justify-between text-2xl font-semibold w-full">
								<span>Total Price</span>
								<span>{trip.data.budget}</span>
							</div>
						</div>
						<div className="p-2 ">
							<BuddyRequest tripId={trip.data.id} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
