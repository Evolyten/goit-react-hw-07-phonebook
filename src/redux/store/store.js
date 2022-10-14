import { configureStore } from '@reduxjs/toolkit';
// import { myFilterSlice, contactsReducer } from 'redux/slices/slice';
import { filterReducer, contactsSlice } from '../contatsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterReducer,
  },
});
