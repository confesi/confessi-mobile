import { createSlice } from "@reduxjs/toolkit";

// Default value for slices
const initialState = {
    accessToken: null,
    refreshToken: null
}

export const tokenSlice = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        }
    }
});

export const { setRefreshToken, setAccessToken } = tokenSlice.actions;

// Selectors (good practice: a single selector for each bit of data in your initialState)

export const selectRefreshToken = (state) => state.tokens.refreshToken;
export const selectAccessToken = (state) => state.tokens.accessToken;

export default tokenSlice.reducer;

