"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/api/auth/authApi";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";

type Inputs = {
	oldPassword: string;
	newPassword: string;
	conPassword: string;
};

export default function PasswordChange() {
	const [changePassword, { isLoading }] = useChangePasswordMutation();

	const {
		register,
		handleSubmit,

		reset,
	} = useForm<Inputs>();
	const handleChangePassword: SubmitHandler<Inputs> = async (data) => {
		try {
			const response = await changePassword(data).unwrap();
			toast.success(response?.message);
			reset();
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<section className="">
			<h3 className="text-2xl font-semibold mb-4">Change Your Password</h3>
			<form
				className=" space-y-4 max-w-xl"
				onSubmit={handleSubmit(handleChangePassword)}
			>
				<Input
					size="sm"
					type="text"
					label="Old password"
					{...register("oldPassword")}
					required={true}
				/>
				<Input
					size="sm"
					type="text"
					label="New password"
					{...register("newPassword")}
					required={true}
				/>
				<Input
					size="sm"
					type="text"
					label="Confirm password"
					{...register("conPassword")}
					required={true}
				/>

				<Button className="font-semibold" type="submit">
					{isLoading ? "Updating..." : "Update"}
				</Button>
			</form>
		</section>
	);
}
