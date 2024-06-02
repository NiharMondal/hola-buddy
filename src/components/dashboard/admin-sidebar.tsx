"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Link from "next/link";

const sidebarArray = [
	{
		to: "/dashboard/admin",
		name: "Dashboard",
	},
	{
		to: "/dashboard/admin/trips",
		name: "Trips",
	},
	{
		to: "/dashboard/admin/users",
		name: "Users",
	},
];

export default function AdminSideBar() {
	return (
		<div>
			{sidebarArray.map((item, index) => (
				<Listbox key={index} aria-label="Actions">
					<ListboxItem key={index} color="success" textValue={item.name}>
						<Link href={item.to} className="block w-full h-full">
							{item.name}
						</Link>
					</ListboxItem>
				</Listbox>
			))}
		</div>
	);
}
