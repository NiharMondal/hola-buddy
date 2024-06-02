"use server";

import { TResponse, TTripResponse } from "@/types/types";
import { cookies } from "next/headers";

export const signUp = async (value: FormData) => {
	const userInfo = {
		name: value.get("name"),
		email: value.get("email"),
		password: value.get("password"),
	};

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
		{
			method: "POST",
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await res.json();
	return data;
};

export const login = async (value: FormData) => {
	const userInfo = {
		email: value.get("email"),
		password: value.get("password"),
	};

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
		{
			method: "POST",
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await res.json();
	cookies().set("accessToken", data?.data?.token);

	return data;
};

export const getAllTrip = async (): Promise<TResponse<TTripResponse[]>> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/trips`, {
		method: "GET",
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export const showCase = async (): Promise<TResponse<TTripResponse[]>> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/trips/show-case`,
		{
			method: "GET",
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

//single trip
export const getSingleTrip = async (
	id: string
): Promise<TResponse<TTripResponse>> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/trips/${id}`,
		{
			method: "GET",
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
