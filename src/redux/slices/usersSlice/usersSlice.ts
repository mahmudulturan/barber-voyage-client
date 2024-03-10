import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            state.isAuthenticate = payload.isAuthenticate;
            state.user = payload.user;
        }
    }
})

export const { saveUser } = usersSlice.actions;

export default usersSlice.reducer;