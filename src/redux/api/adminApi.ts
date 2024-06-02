import { LoggedInUser, TResponse } from "@/types/types";
import { baseApi } from "./baseApi";

const adminApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMetaData: builder.query<any, void>({
			query: () => ({
				url: "/meta-data",
				method: "GET",
			}),
			providesTags: ["user", "profile", "buddy"],
		}),
	}),
});

export const { useGetMetaDataQuery } = adminApi;
