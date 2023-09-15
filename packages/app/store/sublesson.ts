import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardQuizType, Content, Info } from '../services/storage/model'

interface SubLessonState {
  contentIdx: number
  contents: Content[]
}
const initialState: SubLessonState = {
  contentIdx: 0,
  contents: [],
}

const slice = createSlice({
  name: 'subLesson',
  initialState,
  reducers: {
    // action => action handler
    incrementContentIndex: (state) => {
      state.contentIdx++
    },
    addContent: (state, action: PayloadAction<Content>) => {
      state.contents.push(action.payload)
    },
    resetContentIndex: (state) => {
      state.contentIdx = 0
      state.contents = []
    },
  },
})

export const { incrementContentIndex, addContent, resetContentIndex } =
  slice.actions
export default slice.reducer
