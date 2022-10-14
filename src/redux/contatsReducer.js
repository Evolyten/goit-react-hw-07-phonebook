import {
  createReducer,
  // combineReducers,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contactsOperation';

// const item = createReducer([], {
//   [fetchContact.fulfilled]: (_, action) => action.payload,
//   [addContact.fulfilled]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact.fulfilled]: (state, action) =>
//     [...state].filter(n => n.id !== action.payload.id),
// });

// const isLoading = createReducer(false, {
//   [fetchContact.pending]: () => true,
//   [fetchContact.fulfilled]: () => false,
//   [fetchContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContact.rejected]: (_, action) => action.payload,
//   [fetchContact.pending]: () => null,
// });

// export default combineReducers({
//   item,
//   isLoading,
//   error,
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { item: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContact.fulfilled]: (state, action) => {
      return { ...state, item: action.payload, isLoading: false };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        item: [...state.item, action.payload],
        isLoading: false,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      const k = state.item.filter(n => n.id !== action.payload.id);
      return { ...state, item: k, isLoading: false };
    },
    [fetchContact.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },

    [fetchContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [addContact.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },

    [addContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [deleteContact.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },

    [deleteContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export const filterContacts = createAction('contacts/filterContacts');

export const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});
