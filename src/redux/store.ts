import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import usersReducer from "./slices/usersSlice/usersSlice";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        usersSlice: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export default store;