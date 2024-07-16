import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({

		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
		credentials: "include",

		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `${token}`);
			}
			return headers;
		},
	}),
	
	endpoints: () => ({}),
	tagTypes: ["trip", "user", "buddy", "profile"],
});
