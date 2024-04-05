import baseApi from "../baseApi";

const ownersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createShop: builder.mutation({
            query: (data) => ({
                url: "/api/v1/owner/create-shop",
                method: "POST",
                body: data
            })
        })
    })
})

export const { useCreateShopMutation } = ownersApi;