import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  UserType,
  generateDefaultChapterType,
  generateDefaultCourseType,
  generateDefaultSubChapterType,
  generateDefaultLessonType,
} from 'app/services/storage/user/User'
import { DemoUser } from 'app/services/storage/user/userdb'

const initialState: UserType = {
  ...DemoUser,
}

const slice = createSlice({
  name: 'offlineUser',
  initialState,
  reducers: {
    updateUserProgressState: (
      state,
      action: PayloadAction<{
        courseId: string
        chapterId: number
        subChapterId: number
        lessonId: number
      }>
    ) => {
      const {
        courseId,
        chapterId,
        subChapterId: subchapterId,
        lessonId,
      } = action.payload

      // Instead of the above line, create a new copy of the state:

      if (state.courses[courseId]) {
        state.activeCourse = courseId
        if (state.courses[courseId]!.chapters[chapterId]) {
          state.courses[courseId]!.activeChapter = chapterId
          if (
            state.courses[courseId]!.chapters[chapterId]!.subchapters[
              subchapterId
            ]
          ) {
            state.courses[courseId]!.chapters[chapterId]!.activeSubchapter =
              subchapterId
            if (
              state.courses[courseId]!.chapters[chapterId]!.subchapters[
                subchapterId
              ]!.lessons[lessonId]
            ) {
            } else {
              const newLesson = generateDefaultLessonType(lessonId)
              state.courses[courseId]!.chapters[chapterId]!.subchapters[
                subchapterId
              ]!.lessons[lessonId] = newLesson
            }
            state.courses[courseId]!.chapters[chapterId]!.subchapters[
              subchapterId
            ]!.activeLesson = lessonId
          } else {
            const newSubchapter = generateDefaultSubChapterType(
              subchapterId,
              lessonId
            )
            state.courses[courseId]!.chapters[chapterId]!.subchapters[
              subchapterId
            ] = newSubchapter

            state.courses[courseId]!.chapters[chapterId]!.activeSubchapter =
              subchapterId
          }
        } else {
          const newDefaultChapter = generateDefaultChapterType(
            chapterId,
            subchapterId,
            lessonId
          )
          state.courses[courseId]!.chapters[chapterId] = newDefaultChapter
          state.courses[courseId]!.activeChapter = chapterId
        }
      } else {
        const newDefaultCoure = generateDefaultCourseType(
          courseId,
          chapterId,
          subchapterId,
          lessonId
        )
        // state.courses[courseId] = newDefaultCoure
        state.courses[courseId] = newDefaultCoure

        state.activeCourse = courseId
      }
    },
  },
})

export const { updateUserProgressState } = slice.actions
export default slice.reducer
