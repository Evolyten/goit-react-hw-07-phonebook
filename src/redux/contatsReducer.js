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
    [fetchContact.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContact.fulfilled]: (state, { payload }) => {
      state.item = payload;
      state.isLoading = false;
    },

    [fetchContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.item = [payload, ...state.item];
      state.isLoading = false;
    },

    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.item = state.item.filter(n => n.id !== payload.id);
      state.isLoading = false;
    },

    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const filterContacts = createAction('contacts/filterContacts');

export const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { item: [], isLoading: false, error: null },
//   extraReducers: builder => {
//     builder.getContacts(fetchContact.fulfilled, (state, { payload }) => {
//       state.item = payload;
//       state.isLoading = false;
//     });
//     builder.getContacts(fetchContact.pending, (state, { payload }) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.getContacts(fetchContact.rejected, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     });

//     builder.addContact(addContact.fulfilled, (state, { payload }) => {
//       state.item = [payload, ...state.item];
//       state.isLoading = false;
//     });
//     builder.addContact(addContact.pending, (state, { payload }) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addContact(addContact.rejected, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     });

//     builder.deleteContact(deleteContact.fulfilled, (state, { payload }) => {
//       state.item = state.item.filter(n => n.id !== payload.id);
//       state.isLoading = false;
//     });
//     builder.deleteContact(deleteContact.pending, (state, { payload }) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.deleteContact(deleteContact.rejected, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     });
//   },
// });
