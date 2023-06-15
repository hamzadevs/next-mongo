import { configureStore } from '@reduxjs/toolkit'
import usersReducer  from "./features/userReducer";
import listenerMiddleware from './listener';
// ...

export const store = configureStore({
  reducer: {
    app: usersReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch