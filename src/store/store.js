import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import contentReducer from './content/contentSlice';
import { thunk } from 'redux-thunk'

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;