import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const counterSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deliteContact(state, action) {
      // state.contacts.items.filter(elem => elem.id !== action.payload);
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    getValue(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, deliteContact, filterContacts, getValue } =
  counterSlice.actions;

export const persistedReducer = persistReducer(
  persistConfig,
  counterSlice.reducer
);
//===============================useSelector
export const getContactsValue = state => state.phoneBook.contacts.items;
export const getFilterValue = state => state.phoneBook.contacts.filter;
