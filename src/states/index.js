import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './preload/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
