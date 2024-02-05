import { configureStore } from '@reduxjs/toolkit'
import  myslice  from './Slices/data'
import { authApi } from './Slices/Auth'
import { setupListeners } from '@reduxjs/toolkit/query'
import authUser from './Slices/User'

export const store = configureStore({
  reducer: {

    mycounter:myslice, 
    saveUserAndToken:authUser,
    [authApi.reducerPath] :authApi.reducer
    
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);