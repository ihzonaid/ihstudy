import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'app/services/storage/user/User'
import { DemoUser } from 'app/services/storage/user/userdb'

const initialState: UserType = {
  ...DemoUser,
}

const slice = createSlice({
  name: 'offlineUser',
  initialState,
  reducers: {
    getUserCourses: (state, action: PayloadAction<UserType>) => {
      const user = action.payload
    },
  },
})

export const { getUserCourses } = slice.actions
export default slice.reducer
