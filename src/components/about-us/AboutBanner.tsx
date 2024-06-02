import Image from "next/image";
import React from "react";

export default function AboutBanner() {
	return (
		<section>
			<div className="h-[600px] w-full relative">
				<Image
					src="/img/about-us.jpg"
					alt="about-us"
					height={600}
					width={900}
					className="h-full w-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/30"></div>
				<h1 className="text-5xl lg:text-8xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
					About Us
				</h1>
			</div>

			<div className="py-8 lg:py-14 text-center space-y-5 text-2xl container mx-auto max-w-5xl">
				<h1 className="text-5xl font-semibold">Travel Solo in a Group!</h1>

				<p>
					At JoinMyTrip, we connect travelers worldwide with our unique
					group trips. We are here to give everyone a chance to experience
					amazing trips around the world!
				</p>
				<p>
					When traveling with us, you&apos;ll travel insanely authentic and
					in incredibly small groups with forever memorable experiences.
				</p>
				<p>
					We are driven by passion. We&apos;re here to change lives - trip
					by trip! Become part of the change and join our trip!
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
					<Image
						src="https://thumb.tildacdn.com/tild3565-6563-4765-b563-343231393538/-/cover/720x720/center/center/-/format/webp/2019-06_-_Sailing_-_.jpg"
						alt="group-photo"
						width={200}
						height={200}
						className="h-full w-full"
					/>
					<Image
						src="https://thumb.tildacdn.com/tild3937-3939-4061-b566-353131303634/-/cover/720x720/center/center/-/format/webp/Copy_of_8b79bded-f28.jpeg"
						alt="group-photo"
						width={200}
						height={200}
						className="h-full w-full"
					/>
					<Image
						src="https://thumb.tildacdn.com/tild3638-3830-4065-b035-396438373732/-/cover/720x720/center/center/-/format/webp/2019_-_JMTShirt-016-.jpg"
						alt="group-photo"
						width={200}
						height={200}
						className="h-full w-full"
					/>
				</div>
			</div>
		</section>
	);
}
