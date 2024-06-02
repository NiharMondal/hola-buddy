import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyProfile: builder.query({
			query: (userId) => ({
				url: `/profile/${userId}`,
				method: "GET",
			}),
			providesTags: ["profile"],
		}),

		updateProfile: builder.mutation({
			query: ({ userId, payload }) => ({
				url: `/profile/${userId}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["profile"],
		}),
	}),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation } = profileApi;
