import { LoggedInUser, TResponse, TTrip, TTripResponse } from "@/types/types";
import { baseApi } from "./baseApi";

type TUpdateRequest = {
	id: string;
	payload: TTrip;
};

const tripApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createTrip: builder.mutation<TResponse<TTrip[]>, TTrip>({
			query: (data) => ({
				url: "/trips",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["trip"],
		}),

		allTrip: builder.query<
			TResponse<TTripResponse[]>,
			Record<string, string>
		>({
			query: (query) => {
				const params = new URLSearchParams();

				if (query) {
					Object.keys(query).forEach((k) => params.set(k, query[k]));
				}

				return {
					url: `/trips`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["trip"],
		}),

		myAllTrip: builder.query<TResponse<any>, Record<string, string>>({
			query: () => ({
				url: `/trips/my-trips`,
				method: "GET",
				// params: query,
			}),
			providesTags: ["trip"],
		}),

		//single trip
		singleTrip: builder.query<TResponse<TTripResponse>, string>({
			query: (id) => ({
				url: `/trips/${id}`,
				method: "GET",
			}),
			providesTags: ["trip"],
		}),

		updateTrip: builder.mutation<TResponse<TTrip>, TUpdateRequest>({
			query: ({ id, payload }) => ({
				url: `/trips/${id}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["trip"],
		}),

		deleteTrip: builder.mutation<void, string>({
			query: (id) => ({
				url: `/trips/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["trip"],
		}),
	}),
});

export const {
	useCreateTripMutation,
	useAllTripQuery,
	useMyAllTripQuery,
	useSingleTripQuery,
	useDeleteTripMutation,
	useUpdateTripMutation,
} = tripApi;
