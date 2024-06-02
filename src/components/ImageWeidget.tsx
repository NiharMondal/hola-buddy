"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function ImageWeidget({
	setResource,
}: {
	setResource: React.Dispatch<React.SetStateAction<any>>;
}) {
	return (
		<>
			<CldUploadWidget
				uploadPreset="my-cloudinary-preset"
				onSuccess={(result, { widget }) => {
					setResource(result?.info); // { public_id, secure_url, etc }
					widget.close();
				}}
			>
				{({ open }) => {
					return (
						<button
							type="button"
							onClick={() => open()}
							className="bg-gray-300 px-4 py-2 rounded-xl font-semibold"
						>
							Upload Image
						</button>
					);
				}}
			</CldUploadWidget>
		</>
	);
}
