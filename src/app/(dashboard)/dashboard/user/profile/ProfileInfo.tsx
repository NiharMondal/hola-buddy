"use client";
import {
	useGetMyProfileQuery,
	useUpdateProfileMutation,
} from "@/redux/api/profileApi";

import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/authSlice";

import { Button, Input } from "@nextui-org/react";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TProfile = {
	bio: string;
	country: string;
	age: number;
};

export default function ProfileInfo() {
	const user: any = useAppSelector(selectCurrentUser);

	const { data: profile } = useGetMyProfileQuery(user?.id);

	const [updateProfile] = useUpdateProfileMutation();
	const { register, handleSubmit } = useForm<TProfile>();

	const handleUserUpdate: SubmitHandler<TProfile> = async (value) => {
		value.age = Number(value.age);

		try {
			const res = await updateProfile({
				userId: user?.id,
				payload: value,
			}).unwrap();

			if (res.statusCode === 200) {
				toast.success("User profile updated successfully!");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<form onSubmit={handleSubmit(handleUserUpdate)} className="space-y-3 ">
			<Input
				{...register("bio")}
				type="text"
				label="Bio"
				defaultValue={profile?.data?.bio || ""}
			/>
			<Input
				{...register("country")}
				type="text"
				label="Country"
				defaultValue={profile?.data?.country || ""}
			/>
			<Input
				{...register("age")}
				type="number"
				label="Age"
				defaultValue={profile?.data?.age || ""}
			/>

			<Button type="submit">Update Profile</Button>
		</form>
	);
}
