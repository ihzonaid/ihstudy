import { combineReducers } from 'redux'
import uiReducer from './question'
import subLessonReducer from './sublesson'
import lessonReducer from './lessons'
import contentsBottomSheet from './contentsBottomSheet'
import themeReducer from './theme'
import userReducer from './user'
import editCourseReducer from './editCourse'
import editLesson from './editLesson'
import offlineUserReducer from './userOfflineStore'

export const reducer = combineReducers({
  question: uiReducer,
  subLesson: subLessonReducer,
  lesson: lessonReducer,
  // contentSheet: contentsBottomSheet,
  // theme: themeReducer,
  user: userReducer,
  editCourse: editCourseReducer,
  editLesson: editLesson,
  offlineUser: offlineUserReducer,
})
