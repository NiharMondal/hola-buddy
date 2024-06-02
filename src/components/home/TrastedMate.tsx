import React from "react";
import trastedMate from "../../assets/image/trasted_mate.jpg";
import Image from "next/image";
export default function TrastedMate() {
	return (
		<section className="container mx-auto w-full lg:max-w-6xl">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
				<div className="self-center text-xl">
					<h1 className="mb-4 text-3xl font-semibold">
						Real &amp; verified travelers!
					</h1>
					<p>
						Real & verified travelers! Find Travel Buddies on JoinMyTrip -
						the best Travel Buddy Website out there. Every trip is
						organized by verified & passionate travelers just like you.
						Find a travel adventure that fits who you are!
					</p>
				</div>
				<div>
					<Image
						src={trastedMate}
						width={500}
						height={200}
						alt="trasted-mate"
						className="h-[500px] w-full object-cover object-center"
					/>
				</div>
			</div>
		</section>
	);
}
