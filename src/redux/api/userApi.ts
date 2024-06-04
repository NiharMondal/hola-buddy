import { LoggedInUser, TResponse, TRoleUser } from "@/types/types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//only admin can see all users
		allUsers: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
			providesTags: ["user"],
		}),

		//onley admin can update
		updateRole: builder.mutation({
			query: ({ id, payload }) => {
				console.log(id, payload);
				return {
					url: `/user/role/${id}`,
					method: "PATCH",
					body: payload,
				};
			},
			invalidatesTags: ["user"],
		}),

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
	}),
});

export const {
	useAllUsersQuery,
	useUserDetailsQuery,
	useUpdateUserInfoMutation,
	useUpdateRoleMutation,
} = userApi;
