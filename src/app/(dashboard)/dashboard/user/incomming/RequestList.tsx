import { useUpdateBuddyStatusMutation } from "@/redux/api/buddyApi";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import toast from "react-hot-toast";
type TProps = {
	id: string;
	status: "PENDING" | "APPROVED" | "REJECTED";
	tripId: string;
	user: {
		name: string;
		email: string;
	};
};
export default function RequestList({ buddy }: { buddy: TProps }) {
	const [updateBuddyStatus] = useUpdateBuddyStatusMutation();
	const handleUpdateStatus = async (
		status: string,
		id: string,
		tripId: string
	) => {
		try {
			await updateBuddyStatus({
				id: id,
				payload: { status, tripId },
			});
			toast.success("Status updated successfully");
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<Table aria-label="Example static collection table" className="mt-8">
			<TableHeader>
				<TableColumn>Name</TableColumn>
				<TableColumn>Email</TableColumn>
				<TableColumn>STATUS</TableColumn>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>{buddy.user.name}</TableCell>
					<TableCell>{buddy.user.email}</TableCell>
					<TableCell className="space-x-3">
						<span
							onClick={() =>
								handleUpdateStatus("PENDING", buddy.id, buddy.tripId)
							}
							className={`cursor-pointer ${
								buddy.status === "PENDING"
									? "bg-yellow-200 py-1 px-2 rounded"
									: ""
							}`}
						>
							PENDING
						</span>
						<span
							onClick={() =>
								handleUpdateStatus("APPROVED", buddy.id, buddy.tripId)
							}
							className={`cursor-pointer ${
								buddy.status === "APPROVED"
									? "bg-green-300 py-1 px-2 rounded"
									: ""
							}`}
						>
							APPROVED
						</span>
						<span
							onClick={() =>
								handleUpdateStatus("REJECTED", buddy?.id, buddy.tripId)
							}
							className={`cursor-pointer ${
								buddy.status === "REJECTED"
									? "bg-red-300 py-1 px-2 rounded"
									: ""
							}`}
						>
							REJECTED
						</span>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
