"use client";
import { useLoginUserMutation } from "@/redux/api/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slice/authSlice";
import { decodeToken } from "@/utils/decodeToken";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { login } from "@/actions/action";
export default function LoginForm() {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleLogin = async (value: FormData) => {
		try {
			const response = await login(value);

			if (response.success === true) {
				const user: any = decodeToken(response?.data?.token);

				dispatch(setUser({ user: user, token: response?.data?.token }));
				toast.success(response.message);
				router.push(`/dashboard/${user?.role}`);
			} else {
				toast.error(response.message);
			}
		} catch (error) {
			toast.error("Invalid Credentials");
		}
	};

	return (
		<form className="space-y-3 mt-5" action={handleLogin}>
			<div className="flex flex-col space-y-1">
				<label htmlFor="email" className="text-lg">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="custom_style"
				/>
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="password" className="text-lg">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					className="custom_style"
				/>
			</div>
			<div className="py-4">
				<p>
					Don&apos;t have an account?
					<Link
						href="/sign-up"
						className="text-pink-500 hover:underline ml-2"
					>
						Create one
					</Link>
				</p>
			</div>
			<button
				className="text-lg bg-pink-500 hover:bg-pink-400 px-3 py-1 text-white rounded-md"
				type="submit"
			>
				Login
			</button>
		</form>
	);
}
