"use server";
import { cookies } from "next/headers";

export const removeCookies = () => {
	cookies().delete("accessToken");
};
