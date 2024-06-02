"use server";

import { TResponse, TTripResponse } from "@/types/types";
import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const signUp = async (value: FormData) => {
	const userInfo = {
		name: value.get("name"),
		email: value.get("email"),
		password: value.get("password"),
	};

	const res = await fetch(`${baseUrl}/api/v1/auth/register`, {
		method: "POST",
		body: JSON.stringify(userInfo),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	return data;
};

export const login = async (value: FormData) => {
	const userInfo = {
		email: value.get("email"),
		password: value.get("password"),
	};

	const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
		method: "POST",
		body: JSON.stringify(userInfo),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	cookies().set("accessToken", data?.data?.token);

	return data;
};

export const getAllTrip = async (): Promise<TResponse<TTripResponse[]>> => {
	const res = await fetch(`${baseUrl}/api/v1/trips`, {
		method: "GET",
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export const showCase = async (): Promise<TResponse<TTripResponse[]>> => {
	const res = await fetch(`${baseUrl}/api/v1/trips/show-case`, {
		method: "GET",
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};

//single trip
export const getSingleTrip = async (
	id: string
): Promise<TResponse<TTripResponse>> => {
	const res = await fetch(`${baseUrl}/api/v1/trips/${id}`, {
		method: "GET",
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
