import React from "react";
import {
	PaperAirplaneIcon,
	BookmarkSquareIcon,
   CursorArrowRippleIcon
} from "@heroicons/react/24/solid";
const reasons = [
	{
		icon: <CursorArrowRippleIcon />,
		heading: "Find the Perfect Trip",
		subHeading:
			"We have 900+ group trips worldwide. Explore the collection based on the date, destination, travel style, and budget that fits you.",
	},
	{
		icon: <BookmarkSquareIcon />,
		heading: "Book YOUR Spot",
		subHeading:
			"Secure a place on your dream tour by paying a 20% deposit. Your TripLeader will give you a confirmation once they receive your request.",
	},
	{
		icon: <PaperAirplaneIcon />,
		heading: "Enjoy the Ride!",
		subHeading:
			"Congratulations, you are now on board! Your TripLeader will invite you to a group chat for further information. With that, you can book your flight ticket and go for a fantastic adventure.",
	},
];
export default function HowtoBook() {
	return (
		<section className="py-10">
			<div className="container w-full lg:max-w-5xl mx-auto">
				<h1 className="text-3xl lg:text-5xl text-center font-semibold">
					How to Book Group Tours with JoinMyTrip
				</h1>
				<p className="text-center py-5 text-lg">
					The easiest way to get on your dream adventure!
				</p>

				<div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{reasons.map((reason) => (
						<div key={reason.heading} className="space-y-3 text-center">
							<div className="w-10 mx-auto text-pink-500">{reason.icon}</div>
							<h3 className="text-2xl font-semibold">
								{reason.heading}
							</h3>
							<p className="text-base text-gray-500">
								{reason.subHeading}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
