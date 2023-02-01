import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        jwt_token: "",
        is_authenticated: false,
        posts: [],
    },
    reducers: {
        saveJwt: (state, action) => {
            state.jwt_token = action.payload;
        },
        saveIsAuthenticated: (state, action) => {
            state.is_authenticated = action.payload;
        },
        savePosts(state, action) {
            state.posts = action.payload;
        },
    },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
