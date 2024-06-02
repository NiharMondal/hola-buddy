"use client";

import TripCard from "../shared/TripCard";
import Link from "next/link";
import { useShowCaseQuery } from "@/redux/api/tripApi";

export default function FindBuddy() {
	const { data: trips, isLoading } = useShowCaseQuery();

	if (isLoading) return <p>Please wait...</p>;
	return (
		<section className="container mx-auto w-full lg:max-w-6xl py-8">
			<h1 className="text-3xl font-semibold text-center mb-4">
				Find your next Travel Buddy right here!
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-8 gap-12">
				{trips?.data.length && trips?.data?.length > 0 ? (
					trips?.data?.map((trip) => (
						<TripCard trip={trip} key={trip.id} />
					))
				) : (
					<p>No data found!</p>
				)}
			</div>

			<div className="flex justify-center">
				<Link
					href="/trip"
					className="px-4 py-2 bg-pink-600 text-white font-lg rounded-md"
				>
					See more
				</Link>
			</div>
		</section>
	);
}
