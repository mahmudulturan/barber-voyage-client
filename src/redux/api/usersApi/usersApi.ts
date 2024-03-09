import { RegisterInputs } from "@/app/(auth)/register/components/RegisterForm";
import baseApi from "../baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterInputs, string>({
            query: (data) => ({
                url: '/api/v1/auth/register',
                method: "POST",
                body: data
            })
        })
    })
})

export const { useRegisterUserMutation } = usersApi;