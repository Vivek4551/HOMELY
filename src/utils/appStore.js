 import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
    }
});

export default appStore;