import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserSliceType } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export interface RootState {
    user: UserSliceType,
}
