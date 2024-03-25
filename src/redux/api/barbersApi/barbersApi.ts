import { IBarberRegisterInputs } from "@/types/types";
import baseApi from "../baseApi";

const barbersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerBarber: builder.mutation<IBarberRegisterInputs, object>({
            query: (data) => ({
                url: "/api/v1/barber/barber-register",
                method: "POST",
                body: data
            })
        })
    })
});

export const { useRegisterBarberMutation } = barbersApi;