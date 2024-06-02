"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/authSlice";
import React, { useState } from "react";
import ClientSidebar from "./client-sidebar";
import AdminSideBar from "./admin-sidebar";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function DashboardSideBar() {
	const currentUser = useAppSelector(selectCurrentUser);
	const [isOpen, setIsOpen] = useState(false);
	let content;
	if (currentUser?.role === "user") {
		content = <ClientSidebar />;
	} else {
		content = <AdminSideBar />;
	}

	return (
		<div>
			<Bars2Icon
				width={20}
				onClick={() => setIsOpen(true)}
				className="block md:hidden fixed top-5 left-4 cursor-pointer"
			/>
			<div className="md:hidden">
				<div
					className={`fixed z-50 ${isOpen ? "inset-0" : "-left-[100%]"}`}
				>
					<div className="absolute min-h-screen min-w-[250px] shadow-md bg-gray-50 ">
						<XMarkIcon
							width={20}
							onClick={() => setIsOpen(false)}
							className="absolute top-4 right-4 cursor-pointer"
						/>
						<Link href="/">
							<Image
								src="/img/logo.png"
								alt="logo"
								width={100}
								height={100}
								className="w-fit mx-auto my-5"
							/>
						</Link>
						{content}
					</div>
				</div>
			</div>
			<div className="hidden md:block min-w-[250px] shadow-md min-h-screen">
				<Link href="/">
					<Image
						src="/img/logo.png"
						alt="logo"
						width={100}
						height={100}
						className="w-fit mx-auto"
					/>
				</Link>
				<div className="pt-5 pl-3">{content}</div>
			</div>
		</div>
	);
}
