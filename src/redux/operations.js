import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63bd5f64d660062388a35fa3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone, id }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone, id });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (contacts) {
      return thunkAPI.rejectWithValue(contacts.message);
    }
  }
);
