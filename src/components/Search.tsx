import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Search() {
	return (
		<section className="absolute inset-0 bg-black/70">
			<div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className=" text-center text-white px-3 space-y-2 max-w-full lg:max-w-[500px] mx-auto">
					<h1 className="text-4xl font-semibold ">Find Travel Buddies</h1>
					<p>
						Discover a new and authentic way of traveling. Find Travel
						Buddies who fit your travel style and discover the world
						together.{" "}
					</p>
					<div className="flex justify-center items-center h-10 gap-4 bg-white w-fit mx-auto rounded-md  overflow-hidden">
						<input
							type="text"
							className="outline-none h-full rounded-md text-gray-700 pl-2"
							placeholder="Search destination..."
						/>
						<span>
							<MagnifyingGlassIcon width={30} color="red" />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
