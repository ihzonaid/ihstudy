import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

// import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
