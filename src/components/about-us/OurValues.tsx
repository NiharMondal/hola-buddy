import React from "react";

export default function OurValues() {
	return (
		<div className="mx-auto container max-w-5xl">
			<h1 className="text-5xl text-center font-semibold py-6">Our Values</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
				<div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-[#FF825C]">
					<h4 className="uppercase text-white font-semibold text-2xl">
						exciting
					</h4>
				</div>
				<div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-[#8C1AEB]">
					<h4 className="uppercase text-white font-semibold text-2xl">
						connected
					</h4>
				</div>
				<div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-[#08D9D0]">
					<h4 className="uppercase text-white font-semibold text-2xl">
						unique
					</h4>
				</div>
				<div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-[#FF825C]">
					<h4 className="uppercase text-white font-semibold text-2xl">
						open-minded
					</h4>
				</div>
			</div>
		</div>
	);
}
