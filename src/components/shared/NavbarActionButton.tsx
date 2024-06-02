"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	logout,
	selectCurrentToken,
	selectCurrentUser,
} from "@/redux/slice/authSlice";
import Link from "next/link";
import React from "react";
import {
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "@nextui-org/react";
import { decodeToken } from "@/utils/decodeToken";
import { removeCookies } from "@/actions/removeCookies";
import { useRouter } from "next/navigation";
import { useUserDetailsQuery } from "@/redux/api/userApi";

export default function NavbarActionButton() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const user: any = useAppSelector(selectCurrentUser);

	const { data } = useUserDetailsQuery(user?.id);

	const handleLogout = () => {
		dispatch(logout());
		removeCookies();
		router.push("/");
	};
	return (
		<div>
			{user?.id ? (
				<Popover placement="bottom-end" showArrow={true}>
					<PopoverTrigger>
						<Avatar
							size="sm"
							src={data?.data.avatar || ""}
							className="cursor-pointer ring-1 ring-pink-700"
						/>
					</PopoverTrigger>
					<PopoverContent>
						<div className="px-1 py-2">
							<div className="border-b-1 border-gray-300 py-4 space-y-2">
								<p>
									Welcome, <strong>{user?.name}</strong>
								</p>
								<p>{user?.email}</p>
							</div>

							<div className="flex flex-col gap-y-3 pt-4">
								<Link
									href={`/dashboard/${user?.role}`}
									className="underline"
								>
									Visit profile
								</Link>

								<Button onClick={handleLogout}>Logout</Button>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			) : (
				<Link href="/login">
					<Button className="bg-pink-500 font-semibold text-white tracking-widest">
						Login
					</Button>
				</Link>
			)}
		</div>
	);
}
