import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../api/AuthApi';
import { usersApi } from '../api/UsersApi';
import { appsApi } from '../api/AppsApi';


const store = configureStore({
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: { type: 'tick' },
    }),
  reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [appsApi.reducerPath]: appsApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat([authApi.middleware, usersApi.middleware, appsApi.middleware])
})

setupListeners(store.dispatch);

export default store