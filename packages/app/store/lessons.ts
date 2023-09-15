import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Lesson {
  lessonIdx: number
}

const initialState: Lesson = {
  lessonIdx: 0,
}

const slice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    // action => action handler
    incrementLessonIdx: (state) => {
      state.lessonIdx++
    },

    setLessonIdx: (state, action: PayloadAction<number>) => {
      state.lessonIdx = action.payload
    },
  },
})

export const { incrementLessonIdx, setLessonIdx } = slice.actions
export default slice.reducer
