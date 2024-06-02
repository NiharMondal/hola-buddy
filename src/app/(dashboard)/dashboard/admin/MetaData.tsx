"use client";

import { useGetMetaDataQuery } from "@/redux/api/adminApi";
import React from "react";

export default function MetaData() {
	const { data, isLoading } = useGetMetaDataQuery();
	if (isLoading) return <p>Please wait...</p>;
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
			{data?.data?.map(
				({ count, name }: { count: number; name: string }) => (
					<div key={name} className="bg-sky-100 p-10 rounded">
						<h2 className="text-xl text-center font-medium">{name}</h2>
						<h2 className="text-xl text-center font-medium">{count}</h2>
					</div>
				)
			)}
		</div>
	);
}
