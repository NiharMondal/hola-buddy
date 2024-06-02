"use client";
import TripCard from "@/components/shared/TripCard";
import { useAllTripQuery } from "@/redux/api/tripApi";
import { useDebounce } from "@/redux/hooks";
import { Button, Input, Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export default function FilteredTrip({
	queryParams,
}: {
	queryParams: Record<string, string>;
}) {
	const router = useRouter();
	const [search, setSearch] = useState(queryParams.search);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [budget, setBudget] = useState<number[] | undefined>(undefined);

	const query: Record<string, any> = {};

	const debounce = useDebounce({ query: query, delay: 1000 });
	if (!!debounce) {
		if (search) query["search"] = search;
		if (budget) query["budget"] = budget;
		if (startDate) query["startDate"] = startDate;
		if (endDate) query["endDate"] = endDate;
	}

	const { data: trip, isLoading } = useAllTripQuery(query);

	useEffect(() => {
		const newParams = new URLSearchParams();

		if (search) newParams.set("search", search);
		if (startDate) newParams.set("startDate", startDate);
		if (endDate) newParams.set("endDate", endDate);
		if (budget) {
			newParams.set("budget", budget.toString());
		}

		router.push(`?${newParams.toString()}`, undefined);
	}, [search, startDate, endDate, budget, router]);

	const handleClearFilter = () => {
		setSearch("");
		setStartDate("");
		setEndDate("");
		setBudget(undefined);
	};
	if (isLoading) return <p>Loading...</p>;
	return (
		<div className="container w-full lg:max-w-6xl mx-auto py-10 space-y-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<Input
					type="text"
					placeholder="Search here..."
					label="Where do you want to go?"
					onChange={(e) => setSearch(e.target.value)}
					defaultValue={search ?? ""}
					value={search ?? ""}
				/>
				<Slider
					label="Price Range"
					size="sm"
					step={50}
					minValue={0}
					maxValue={500000}
					defaultValue={[0, 500000]}
					formatOptions={{ style: "currency", currency: "BDT" }}
					className="bg-zinc-100 p-2 rounded-xl"
					onChange={(value) => setBudget(value as number[])}
					value={budget ?? undefined}
				/>
			</div>
			<div className="grid grid-cols-1  md:grid-cols-3   gap-3">
				<Input
					type="date"
					label="Start date"
					onChange={(e) => setStartDate(e.target.value)}
					value={startDate ?? ""}
				/>
				<Input
					type="date"
					label="End date"
					onChange={(e) => setEndDate(e.target.value)}
					value={endDate ?? ""}
				/>
				<Button
					size="sm"
					className="py-7 font-medium text-pink-700 text-lg bg-pink-300"
					onClick={handleClearFilter}
				>
					Clear Filter
				</Button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{trip?.data?.map((trip) => (
					<TripCard trip={trip} key={trip.id} />
				))}
			</div>
		</div>
	);
}
