import React from "react";
const footerArr = [
	{
		heading: "travle",
		link1: "how it works",
		link2: "find a trip",
		link3: "create a trip",
	},
	{
		heading: "latest blog",
		link1: "blog",
	},
	{
		heading: "join my trip",
		link1: "about us",
		link2: "press",
		link3: "Trustpilot reviews",
	},
	{
		heading: "support",
		link1: "help & faq",
		link2: "travel insurance",
		link3: "contact",
	},
];
export default function Footer() {
	return (
		<footer className="bg-pink-400 py-16 mt-8">
			<div className="mx-auto container max-w-5xl px-4">
				<div className="grid grid-cols-2 lg:grid-cols-4">
					{footerArr.map((link) => (
						<div key={link.heading}>
							<h1 className="font-semibold tracking-wider text-xl uppercase">
								{link.heading}

								<div className="text-gray-50 space-y-2 mt-4 text-base capitalize font-normal">
									<p>{link.link1}</p>
									<p>{link.link2}</p>
									<p>{link.link3}</p>
								</div>
							</h1>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
