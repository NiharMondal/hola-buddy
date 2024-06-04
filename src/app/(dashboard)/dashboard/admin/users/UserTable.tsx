"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import { useAllUsersQuery, useUpdateRoleMutation } from "@/redux/api/userApi";
import toast from "react-hot-toast";
type TProps = {
	id: string;
	name: string;
	email: string;
	role: string;
};
export default function UserTable() {
	const { data: users, isLoading } = useAllUsersQuery(undefined);
	const [updateRole] = useUpdateRoleMutation();

	const handleUpdateRole = async (id: string, role: string) => {
		try {
			const res = await updateRole({ id, payload: { role: role } }).unwrap();
			if (res?.statusCode === 200) {
				toast.success("Role updated successfully");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	if (isLoading) return <p>Please wait...</p>;
	return (
		<>
			{users?.data?.length > 0 && (
				<Table
					aria-label="Example static collection table"
					className="mt-8"
				>
					<TableHeader>
						<TableColumn>Name</TableColumn>
						<TableColumn>Email</TableColumn>

						<TableColumn>ROLE</TableColumn>
					</TableHeader>
					<TableBody>
						{users?.data?.map((user: TProps) => (
							<TableRow key={user?.id}>
								<TableCell>{user?.name}</TableCell>
								<TableCell>{user?.email}</TableCell>

								<TableCell className="flex items-center gap-4">
									<span
										onClick={() => handleUpdateRole(user?.id, "user")}
										className={`cursor-pointer ${
											user?.role === "user"
												? "bg-yellow-300 py-1 px-2 rounded"
												: ""
										}`}
									>
										User
									</span>
									<span
										onClick={() =>
											handleUpdateRole(user?.id, "admin")
										}
										className={`cursor-pointer ${
											user?.role === "admin"
												? "bg-green-300 py-1 px-2 rounded"
												: ""
										}`}
									>
										Admin
									</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</>
	);
}
