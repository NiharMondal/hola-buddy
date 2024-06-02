import FilteredTrip from "./FilteredTrip";

export default async function TripPage({
	searchParams,
}: {
	searchParams: Record<string, string>;
}) {
	return (
		<section className="pb-10 px-5">
			<div className="shadow-lg lg:px-[194px] py-10 space-y-3 px-5">
				<h3 className="text-2xl font-semibold ">Find Trips</h3>
				<p className="text-lg">
					Discover your next big adventure, hosted by experts
				</p>
			</div>
			<FilteredTrip queryParams={searchParams} />
		</section>
	);
}
