import { configureStore } from '@reduxjs/toolkit';
// import { myFilterSlice, contactsReducer } from 'redux/slices/slice';
import { filterReducer } from '../contatsReducer';
import { contactsApi } from '../contatsReducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
