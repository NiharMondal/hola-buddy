"use client";

import { useOutGoingRequestQuery } from "@/redux/api/buddyApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/authSlice";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

export default function Outgoing() {
	const currentUser: any = useAppSelector(selectCurrentUser);
	const { data: outgoingRequest, isLoading } = useOutGoingRequestQuery(
		currentUser?.id
	);

	if (isLoading) return <p>Please wait...</p>;
	return (
		<div>
			<h1 className="text-2xl font-semibold">
				From here you can see those trips that you requested for.
			</h1>

			{outgoingRequest?.data?.length === 0 && <p>No data found!</p>}
			{outgoingRequest?.data?.length > 0 && (
				<Table
					aria-label="Example static collection table"
					className="mt-8"
				>
					<TableHeader>
						<TableColumn>Destination</TableColumn>
						<TableColumn>Trip Holder</TableColumn>
						<TableColumn>Budget</TableColumn>
						<TableColumn>STATUS</TableColumn>
					</TableHeader>
					<TableBody>
						{outgoingRequest?.data?.map((request: any, index: number) => (
							<TableRow key={index}>
								<TableCell>{request?.trips?.destination}</TableCell>
								<TableCell>{request?.trips?.user?.name}</TableCell>
								<TableCell>{request?.trips?.budget}</TableCell>
								<TableCell>{request.status}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	);
}
