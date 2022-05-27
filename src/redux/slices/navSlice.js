import { createSlice } from "@reduxjs/toolkit";

// Default value for slices
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, payload) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// Selectors (good practice: a single selector for each bit of data in your initialState)

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;

