import { LoggedInUser, TResponse } from "@/types/types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		userDetails: builder.query<TResponse<LoggedInUser>, void>({
			query: (id) => ({
				url: `/user/${id}`,
				method: "GET",
			}),
			providesTags: ["user"],
		}),

		updateUserInfo: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/user/${id}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["user"],
		}),
		updateProfile: builder.mutation({
			query: (payload) => ({
				url: "",
				method: "PUT",
				body: payload,
			}),
			invalidatesTags: ["user"],
		}),
	}),
});

export const {
	useUserDetailsQuery,
	useUpdateUserInfoMutation,
	useUpdateProfileMutation,
} = userApi;
