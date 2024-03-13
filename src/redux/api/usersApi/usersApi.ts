import { LoginInputs, RegisterInputs } from "@/types/types";
import baseApi from "../baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterInputs, object>({
            query: (data) => ({
                url: '/api/v1/auth/register',
                method: "POST",
                body: data
            })
        }),
        loginUser: builder.mutation<LoginInputs, object>({
            query: (data) => ({
                url: '/api/v1/auth/login',
                method: "POST",
                body: data
            })
        }),
        currentUser: builder.query({
            query: () => '/api/v1/user/current-user'
        }),
        logOutUser: builder.query({
            query: () => '/api/v1/auth/logout'
        }),
        loginWithGoolge: builder.query({
            query: () => '/auth/google'
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useCurrentUserQuery, useLazyLogOutUserQuery, useLazyLoginWithGoolgeQuery } = usersApi;