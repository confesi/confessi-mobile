import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import tokenReducer from "./slices/tokenSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        tokens: tokenReducer,
    }
});