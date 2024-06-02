"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Banner() {
	const router = useRouter();
	const [input, setInput] = useState("");

	const handleSearch = () => {
		router.push(`/trip?search=${input}`);
	};

	return (
		<section className="relative h-screen lg:max-h-screen bg-[url('https://optim.tildacdn.com/tild3661-6361-4432-b834-323033333130/-/format/webp/3-min.png')] bg-cover bg-bottom">
			<div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/90 h-full ">
				<div className="z-50 flex items-center h-full justify-center text-center text-white">
					<div className="space-y-3">
						<h1 className="text-7xl  font-bold">Find Travel Buddies</h1>
						<p className="w-full lg:w-[500px] text-center mx-auto">
							Discover a new and authentic way of traveling. Find Travel
							Buddies who fit your travel style and discover the world
							together.
						</p>

						<div className="flex w-fit mx-auto gap-2">
							<input
								type="text"
								className="w-[300px] outline-none ring-2 focus:ring-pink-500 py-2 rounded-md pl-2 text-gray-700"
								placeholder="Search Place..."
								onChange={(e) => setInput(e.target.value)}
							/>
							<button
								className="bg-pink-500 px-6 rounded-md font-medium focus:ring-2 focus:ring-pink-500"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
