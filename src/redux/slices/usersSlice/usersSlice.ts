import { userSliceState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState: userSliceState = {
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
        },
        removeUser: (state) => {
            state.isAuthenticate = false;
            state.user = null;
        }
    }
})

export const { saveUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;