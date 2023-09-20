import { combineReducers } from 'redux'
import uiReducer from './question'
import subLessonReducer from './sublesson'
import lessonReducer from './lessons'

import userReducer from './user'
import editCourseReducer from './editCourse'
import editLesson from './editLesson'
import offlineUserReducer from './userOfflineStore'

import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'offlineUser',
  storage: AsyncStorage,
  stateReconciler: hardSet,
}

const persistedOffileUserReducer = persistReducer(
  persistConfig,
  offlineUserReducer
)

export const reducer = combineReducers({
  question: uiReducer,
  subLesson: subLessonReducer,
  lesson: lessonReducer,
  // contentSheet: contentsBottomSheet,
  // theme: themeReducer,
  user: userReducer,
  editCourse: editCourseReducer,
  editLesson: editLesson,
  offlineUser: persistedOffileUserReducer,
})
