"use client";
import React, { SetStateAction, useState } from "react";
import { Pagination, Button } from "@nextui-org/react";
type TBProps = {
	totalPages: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<SetStateAction<number>>;
};

export default function TBPagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: TBProps) {
	return (
		<div className="flex flex-col gap-5 pt-5">
			<Pagination
				total={totalPages}
				color="secondary"
				page={currentPage}
				onChange={setCurrentPage}
			/>
			<div className="flex gap-2">
				<Button
					size="sm"
					variant="flat"
					color="secondary"
					onPress={() =>
						setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
					}
				>
					Previous
				</Button>
				<Button
					size="sm"
					variant="flat"
					color="secondary"
					onPress={() =>
						setCurrentPage((prev) =>
							prev < totalPages ? prev + 1 : prev
						)
					}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
