import { LoggedInUser, TResponse, TTrip } from "@/types/types";
import { baseApi } from "./baseApi";
type TCreateBuddyType = {
	tripId: string;
	payload: {
		userId: string;
	};
};
const buddyApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createBuddyRequest: builder.mutation<any, TCreateBuddyType>({
			query: ({ tripId, payload }) => ({
				url: `/buddy/${tripId}/request`,
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["buddy"],
		}),
		outGoingRequest: builder.query({
			query: (userId: string) => ({
				url: `/buddy/outgoing/${userId}`,
				method: "GET",
			}),
			providesTags: ["buddy"],
		}),
		//
		inCommingRequest: builder.query({
			query: (userId: string) => ({
				url: `/buddy/incomming/${userId}`,
				method: "GET",
			}),
			providesTags: ["buddy"],
		}),
		//
		updateBuddyStatus: builder.mutation({
			query: ({ id, payload }) => ({
				url: `buddy/respond/${id}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["buddy"],
		}),
	}),
});

export const {
	useCreateBuddyRequestMutation,
	useOutGoingRequestQuery,
	useInCommingRequestQuery,
	useUpdateBuddyStatusMutation,
} = buddyApi;
