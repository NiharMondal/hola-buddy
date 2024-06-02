"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Link from "next/link";

const sidebarArray = [
	{
		to: "/dashboard/user",
		name: "Post Travle",
	},
	{
		to: "/dashboard/user/incomming",
		name: "Incomming Request",
	},
	{
		to: "/dashboard/user/outgoing",
		name: "Outgoing Request",
	},
	{
		to: "/dashboard/user/profile",
		name: "Profile",
	},
	{
		to: "/dashboard/user/change-password",
		name: "Change Password",
	},
];
export default function ClientSidebar() {
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
