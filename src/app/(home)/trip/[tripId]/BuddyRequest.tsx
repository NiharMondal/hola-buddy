"use client";

import { useCreateBuddyRequestMutation } from "@/redux/api/buddyApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken, selectCurrentUser } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function BuddyRequest({ tripId }: { tripId: string }) {
	const router = useRouter();
	const token = useAppSelector(selectCurrentToken);
	const currentUser: any = useAppSelector(selectCurrentUser);
	const [createBuddyRequest, { isLoading }] = useCreateBuddyRequestMutation();

	const sendBuddyRequest = async () => {
		if (token) {
			try {
				await createBuddyRequest({
					tripId,
					payload: { userId: currentUser.id },
				});

				toast.success("Buddy Request sent successfully!");
			} catch (error) {
				toast.error("Something went wrong!");
			}
		} else {
			router.push("/login");
		}
	};
	return (
		<button
			onClick={sendBuddyRequest}
			className="w-full text-white py-3 text-center bg-pink-600 hover:bg-pink-500 rounded"
		>
			{isLoading ? "Submitting..." : "Send Request"}
		</button>
	);
}
