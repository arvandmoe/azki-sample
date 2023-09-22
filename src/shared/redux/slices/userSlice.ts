import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/User'

export interface UserSliceType {
  data: User | undefined
}

export const initialState: UserSliceType = { data: undefined }

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.data = action.payload
        },
    }
})

export const { login } = userSlice.actions
export default userSlice.reducer
