import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    name: "",
    email: "",
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            state._id = payload._id;
            state.name = payload.name;
            state.email = payload.email;
        }
    }
})

export const { saveUser } = usersSlice.actions;

export default usersSlice.reducer;