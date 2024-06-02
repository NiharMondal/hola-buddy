import React from "react";
import { GiftIcon, StarIcon, ClockIcon } from "@heroicons/react/24/outline";

const cardInfo = [
	{
		icon: <GiftIcon />,
		heading: "Memorably Unique",
		description:
			"Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries",
	},
	{
		icon: <StarIcon />,
		heading: "Incredibly Authentic",
		description:
			"Find like-minded travel buddies and discover an authentic and exciting new way of traveling",
	},
	{
		icon: <ClockIcon />,
		heading: "24/7 Support",
		description:
			"We provide round-the-clock support and assistance to ensure that your travel experience exceeds your expectations",
	},
];

export default function WhyUs() {
	return (
		<section className="container mx-auto w-full lg:max-w-6xl py-8">
			<h1 className="text-center text-3xl font-semibold mb-5">
				Why VoyageVibe
			</h1>
			<div className=" py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{cardInfo.map((card) => (
					<div className="text-center space-y-3" key={card.heading}>
						<div className="size-10 mx-auto text-pink-500">
							{card.icon}
						</div>
						<h2 className="text-2xl font-semibold">{card.heading}</h2>
						<p>{card.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
