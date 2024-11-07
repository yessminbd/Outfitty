import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import { apiSlice } from "./slices/api/apiSlice";
const Store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default Store;
