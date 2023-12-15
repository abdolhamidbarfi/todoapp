import { configureStore } from '@reduxjs/toolkit'
// ...
import loginToken from './slices/loginToken'
import showSidebarReducer from './slices/sidebar'

export const store = configureStore({
  reducer: {  
    loginToken,
    showSidebarReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch