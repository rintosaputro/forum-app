import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './preload/reducer';
import threadsReducer from './threads/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
