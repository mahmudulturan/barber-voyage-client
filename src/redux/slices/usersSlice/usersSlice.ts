import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: {}
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            state.isAuthenticate = true;
            state.user = payload;
        }
    }
})

export const { saveUser } = usersSlice.actions;

export default usersSlice.reducer;