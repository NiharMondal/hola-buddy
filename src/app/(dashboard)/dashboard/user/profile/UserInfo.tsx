"use client";
import ImageWeidget from "@/components/ImageWeidget";
import {
	useUpdateUserInfoMutation,
	useUserDetailsQuery,
} from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/authSlice";
import userAvatar from "../../../../../../public/img/default_user.png";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type UserInfo = {
	name: string;

	avatar: string;
};

export default function UserInfo() {
	const [avatar, setAvatar] = useState<any>();
	const user: any = useAppSelector(selectCurrentUser);
	const { data: userInfo } = useUserDetailsQuery(user?.id);

	const [updateUserInfo] = useUpdateUserInfoMutation();
	const { register, handleSubmit } = useForm<UserInfo>();

	const handleUserUpdate: SubmitHandler<UserInfo> = async (value) => {
		value.avatar = avatar?.secure_url;
		try {
			const res = await updateUserInfo({
				id: user.id,
				payload: value,
			}).unwrap();
			if (res.statusCode === 200) {
				toast.success("User information updated successfully!");
			}
		} catch (error) {
			toast.error("Your provided email address is already taken!");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleUserUpdate)} className="space-y-3 ">
				<div className="overflow-hidden border-1 border-gray-200 w-full md:w-[250px] h-[250px]">
					<Image
						src={userInfo?.data?.avatar || userAvatar}
						alt="avatar"
						height={200}
						width={200}
						className="w-full h-full object-cover object-center overflow-hidden"
					/>
				</div>
				<ImageWeidget setResource={setAvatar} />
				<Input
					{...register("name")}
					type="text"
					label="Name"
					defaultValue={userInfo?.data?.name || ""}
				/>

				<Button type="submit">Update User Info</Button>
			</form>
		</div>
	);
}
