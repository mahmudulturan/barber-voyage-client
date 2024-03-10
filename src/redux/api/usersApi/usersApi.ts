import { RegisterInputs } from "@/app/(auth)/register/components/RegisterForm";
import baseApi from "../baseApi";
import { LoginInputs } from "@/app/(auth)/login/components/LoginForm";

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
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = usersApi;