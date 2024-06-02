import {
	TLoginRequest,
	TLoginResponse,
	TPasswordChangeRequest,
	TResponse,
} from "@/types/types";
import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//REGISTER USER
		registerUser: builder.mutation({
			query: (credentials) => ({
				url: "/auth/register",
				method: "POST",
				body: credentials,
			}),
		}),

		//LOGIN USER
		loginUser: builder.mutation<TResponse<TLoginResponse>, TLoginRequest>({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),

		changePassword: builder.mutation<any, TPasswordChangeRequest>({
			query: (credentials) => ({
				url: "/auth/change-password",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

export const {
	useLoginUserMutation,
	useRegisterUserMutation,
	useChangePasswordMutation,
} = authApi;
