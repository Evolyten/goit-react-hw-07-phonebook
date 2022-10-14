import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteName } from './contactsAPi';

export const fetchContact = createAsyncThunk('contacts/fetchAll', async () => {
  const contact = await getContacts();
  return contact;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async value => {
    const data = await postContact(value);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => await deleteName(id)
);
